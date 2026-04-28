import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { protect } from "@/lib/protect";

async function getItemPending(req: Request, payload: any) {
  try {
    const items = await prisma.item.findMany({
      where: {
        status: "PendingApproval",
      },
      include: {
        user: true,
        place: true,
      },
    });

    return NextResponse.json(items);

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  return (await protect(getItemPending, ["admin"])) (req);
}