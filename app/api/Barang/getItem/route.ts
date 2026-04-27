import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return Response.json(
        { message: "userId wajib diisi" },
        { status: 400 }
      );
    }

    const items = await prisma.item.findMany({
      where: {
        userId: Number(userId) // 🔥 FIX DI SINI
      }
    });

    return Response.json(items);

  } catch (error) {
    console.error(error); // 🔥 WAJIB
    return Response.json(
      { message: "Server Error" },
      { status: 500 }
    );
  }
  console.log("userId:", userId);
}