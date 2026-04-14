import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt");

export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json();

        if (!name || !email || !password) {
            return NextResponse.json({message: "Data tidak lengkap, silahkan isi data"}, {status: 400})
        }

        const isUserExist = await prisma.user.findUnique({
            where: {email},
            select: {id: true},
        })

        if (isUserExist) {
            return NextResponse.json({message: "User sudah terdaftar, silahkan ke halaman login"}, {status: 400})
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const res = await prisma.user.create({
            data: {name, email, password: hashPassword}
        })
        return NextResponse.json({message: "User berhasil registrasi", user: res}, {status: 200})
    } catch {
        return NextResponse.json({message: "Server Error"}, {status: 500})
    }
}