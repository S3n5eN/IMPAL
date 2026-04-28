import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { protect } from "@/lib/protect";

type AuthRequest = Request & {
  user: {
    id: number;
    role: string;
  };
};

async function getPoin(req: Request, payload: any) {
  try {
    const userId = payload.id;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { poin: true },
    });

    if (!user) {
      return NextResponse.json(
        { message: "User tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      poin: user.poin,
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  return (await protect(getPoin, ["user"]))(req);
}