import { NextRequest, NextResponse } from "next/server";
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

// Route yang boleh diakses
const Protected_routes: Record<string, string[]> = {
  "/dashboard/admin": ["admin"],
  "/dashboard/user": ["user"],
  "/api/admin": ["admin"],
};

interface JwtPayload {
  id: string;
  role: "admin" | "user";
  name: string;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Cek apakah path termasuk protected route
  const matchedRoute = Object.keys(Protected_routes).find((route) =>
    pathname.startsWith(route),
  );

  // Kalau bukan bisa lanjut
  if (!matchedRoute) return NextResponse.next();

  // Ambil token di cookie
  const token = req.cookies.get("token")?.value;

  // kalau ga ada token, redirect ke halaman login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

    const allowedRoles = Protected_routes[matchedRoute];

    if (!allowedRoles.includes(decoded.role)) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-user-id", String(decoded.id));
    requestHeaders.set("x-user-name", decoded.name);
    requestHeaders.set("x-user-role", decoded.role);

    return NextResponse.next({ request: { headers: requestHeaders } });
  } catch {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/((?!login|register|_next/static|_next/image|favicon.ico).*)"],
};
