import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function protect(handler: Function, roles: string[]) {
  return async (req: NextRequest) => {
    try {
      const token = req.cookies.get("token")?.value;

      if (!token) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
      }

      const { payload } = await jwtVerify(token, secret);

      if (!roles.includes(payload.role as string)) {
        return NextResponse.json({ message: "Forbidden" }, { status: 403 });
      }
      return handler(req, payload);
    } catch {
      return NextResponse.json({ message: "Token invalid" }, { status: 401 });
    }
  };
}
