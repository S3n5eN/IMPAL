import { prisma } from "@/lib/prisma";
import { protect } from "@/lib/protect";
import { NextRequest, NextResponse } from "next/server";

async function claimBarang(req: NextRequest, decoded: { id: string }) {
  try {
    const { itemId } = await req.json();

    if (!itemId) {
      return NextResponse.json(
        { message: "Item ID diperlukan" },
        { status: 400 },
      );
    }

    const isAvailable = await prisma.item.findFirst({
      where: { id: Number(itemId), status: "Tersedia" },
    });

    if (!isAvailable) {
      return NextResponse.json(
        { message: "Barang tidak ditemukan atau tidak tersedia" },
        { status: 404 },
      );
    }

    const isAlreadyClaimed = await prisma.shipment.findFirst({
      where: {
        itemId: Number(itemId),
        type: "claim",
        status: { in: ["Pending", "Approved"] },
      },
    });

    if (isAlreadyClaimed) {
      return NextResponse.json(
        { message: "Barang sudah diklaim oleh pengguna lain" },
        { status: 400 },
      );
    }

    const userVerified = await prisma.userProfile.findFirst({
      where: { userId: Number(decoded.id) },
    });

    if (!userVerified) {
      return NextResponse.json(
        { message: "Data pengguna tidak ditemukan" },
        { status: 404 },
      );
    }

    const isAutoApproved = userVerified.isVerified;

    const shipment = await prisma.shipment.create({
      data: {
        userId: Number(decoded.id),
        itemId: Number(itemId),
        type: "claim",
        userProfileId: userVerified.id,
        isAutoApproved,
        status: isAutoApproved ? "Approved" : "Pending",
        adminId: null,
      },
    });

    return NextResponse.json(
      {
        message: isAutoApproved
          ? "Barang berhasil diklaim dan langsung disetujui"
          : "Barang berhasil diklaim, menunggu verifikasi admin",
          data: shipment
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error saat mengklaim barang:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan saat mengklaim barang" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
    return (await protect(claimBarang, ["user"]))(req);
}