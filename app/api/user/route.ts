import { NextRequest, NextResponse } from "next/server";
const jwt =  require("jsonwebtoken");

interface JwtPayload {
    id: number;
    role: "admin" | "user";
    name: string;
}

export async function GET(req: NextRequest) {
    const token = req.cookies.get("token")?.value;


    
    if (!token) {
        return NextResponse.json({ message: "Belum login" }, { status: 401 });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;

        console.log("Decoded User:", decoded); // Cek apakah muncul di terminal

        return NextResponse.json({ id: decoded.id, role: decoded.role, name: decoded.name });
    } catch  {
        return NextResponse.json({ message: "Token tidak valid" }, { status: 401 });
    }
}