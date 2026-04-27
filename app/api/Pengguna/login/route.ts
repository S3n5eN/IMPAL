import { prisma } from "@/lib/prisma";
import { pengguna } from "@/types/pengguna";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { SignJWT } from "jose";

// ==== karena sekarang pake jose, pake perlu encoder karena jose butuh format Uint8Array untuk secret key ====
const secret = new TextEncoder().encode(process.env.JWT_SECRET);

// ==== Ini Method Login Pengguna & Admin ====
export async function POST(req: Request) {
  try {
    const body: Pick<pengguna, "email" | "password"> = await req.json();

    if (!body.email || !body.password) {
      return NextResponse.json(
        { message: "Data tidak lengkap, silahkan isi data" },
        { status: 400 },
      );
    }

    const [admin, user] = await Promise.all([
      prisma.admin.findUnique({ where: { email: body.email } }),
      prisma.user.findUnique({ where: { email: body.email } }),
    ]);
    
    const isAdmin = !!admin; // Verifikasi apakah akun ini adalah admin atau user
    const account = isAdmin ? admin : user;

    if (!account) {
      return NextResponse.json(
        { error: "User tidak ditemukan" },
        { status: 404 },
      );
    }

    const isMatch = await bcrypt.compare(body.password, account.password);
    if (!isMatch) {
      return NextResponse.json({ error: "Password salah" }, { status: 401 });
    }
    // ==== Kita ganti dengan jose ====
    const token = await new SignJWT({ id: account.id, role: isAdmin ? "admin" : "user", name: account.name })
      .setProtectedHeader({ alg: "HS256"})
      .setIssuedAt()
      .setExpirationTime("1h") // sengaja biar kita bisa cek apakah token bisa expited atau enggak
      .sign(secret);

    const response = NextResponse.json({ message: "Login berhasil", role: isAdmin ? "admin" : "user", token });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 2 * 60 * 60,
      path: "/"
    })

    return response;
  } catch (error) {
    console.error("Login error: ", error);
    return NextResponse.json({message: "Server Error"}, {status: 500});
  }
}
