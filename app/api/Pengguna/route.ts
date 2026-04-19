import { NextRequest, NextResponse } from "next/server";
const jwt =  require("jsonwebtoken");

interface JwtPayload {
    id: number;
    role: "admin" | "user";
    name: string;
}

// ==== Ini buat dapetin id, dan nama user yang login ====
export async function GET(req: NextRequest) {
    const token = req.cookies.get("token")?.value;

    if (!token) {
        return NextResponse.json({ message: "Belum login" }, { status: 401 });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;

        return NextResponse.json({ id: decoded.id, name: decoded.name });
    } catch  {
        return NextResponse.json({ message: "Token tidak valid" }, { status: 401 });
    }
}