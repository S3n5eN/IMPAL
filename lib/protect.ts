import { NextRequest, NextResponse } from "next/server";
const jwt = require("jsonwebtoken");

export async function protect(handler: Function, roles: string[]) {
    return async (req: NextRequest) => {
        const token = req.cookies.get("token")?.value;

        if (!token) {
            return NextResponse.json({message: "Unauthorized"}, {status: 401});
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            if (!roles.includes(decoded.role)) {
                return NextResponse.json({message: "Forbidden"}, {status: 403});
            }
            return handler(req, decoded);
        } catch {
            return NextResponse.json({message: "Token invalid"}, {status: 401});
        }
    }
}