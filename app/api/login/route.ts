import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Data tidak lengkap, silahkan isi data" },
        { status: 400 },
      );
    }

    const [admin, user] = await Promise.all([
      prisma.admin.findUnique({ where: { email } }),
      prisma.user.findUnique({ where: { email } }),
    ]);
    
    const isAdmin = !!admin; // Verifikasi apakah akun ini adalah admin atau user
    const account = isAdmin ? admin : user;

    if (!account) {
      return NextResponse.json(
        { error: "User tidak ditemukan" },
        { status: 404 },
      );
    }

    const isMatch = await bcrypt.compare(password, account.password);
    if (!isMatch) {
      return NextResponse.json({ error: "Password salah" }, { status: 401 });
    }
    const token = jwt.sign(
      { id: account.id, name: account.name, role: isAdmin ? "admin" : "user" },
      JWT_SECRET,
      { expiresIn: "2h" },
    );

    const response = NextResponse.json({ message: "Login berhasil" });

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
