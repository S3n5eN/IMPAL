import { prisma } from "@/lib/prisma";
import { pengguna } from "@/types/pengguna";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

// ==== Ini Method Register Pengguna ====
export async function POST(req: Request) {
    try {
        const body: Pick<pengguna, "name" | "email" | "password"> = await req.json();

        if (!body.name || !body.email || !body.password) {
            return NextResponse.json({message: "Data tidak lengkap, silahkan isi data"}, {status: 400})
        }

        const isUserExist = await prisma.user.findUnique({
            where: {email: body.email},
            select: {id: true},
        })

        if (isUserExist) {
            return NextResponse.json({message: "User sudah terdaftar, silahkan ke halaman login"}, {status: 400})
        }

        const hashPassword = await bcrypt.hash(body.password, 10);
        await prisma.user.create({
            data: {name: body.name, email: body.email, password: hashPassword}
        })
        return NextResponse.json({message: "User berhasil registrasi"}, {status: 200})
    } catch {
        return NextResponse.json({message: "Server Error"}, {status: 500})
    }
}