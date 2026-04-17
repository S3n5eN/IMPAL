import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtsecret = process.env.JWT_SECRET;

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json(
      { error: "User tidak ditemukan" },
      { status: 404 },
    );
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return NextResponse.json({ error: "Password salah" }, { status: 401 });
  }
  const token = jwt.sign({ userId: user.id }, jwtsecret, { expiresIn: "2h" });
  return NextResponse.json({
    message: "Login berhasil",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    token,
  });
}
