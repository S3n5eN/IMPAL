import { prisma } from "@/lib/prisma";
import { protect } from "@/lib/protect";
import { NextRequest, NextResponse } from "next/server";

async function pilihPengiriman(req: NextRequest, decoded: { id: string }) {
  try {
    const { shipmentId, jenisPengiriman, alamat } = await req.json();

    if (!jenisPengiriman || !shipmentId) {
      return NextResponse.json(
        { message: "Jenis pengiriman dan ID pengiriman diperlukan" },
        { status: 400 },
      );
    }

    // ==== validasi jika jenis pengiriman diluar seharusnya ====
    if (!["pickup", "delivery"].includes(jenisPengiriman)) {
      return NextResponse.json(
        { message: "Jenis pengiriman tidak valid" },
        { status: 400 },
      );
    }

    // ==== validasi kalau delivery tapi alamat tidak diisi ====
    if (jenisPengiriman === "delivery" && !alamat) {
      return NextResponse.json(
        { message: "Alamat diperlukan untuk pengiriman delivery" },
        { status: 400 },
      );
    }

    const shipment = await prisma.shipment.findFirst({
      where: { id: Number(shipmentId), userId: Number(decoded.id), type: "claim", status: "Approved", claimType: null},
    });

    if (!shipment) {
      return NextResponse.json(
        { message: "Pengiriman tidak ditemukan" },
        { status: 404 },
      );
    }

    const updateShipment = await prisma.shipment.update({
        where: { id: Number(shipmentId)},
        data: {
            claimType: jenisPengiriman,
            receiverAddress: jenisPengiriman === "delivery" ? alamat : null
        }
    });

    return NextResponse.json(
      { message: "Jenis pengiriman berhasil dipilih", shipment: updateShipment },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error memilih jenis pengiriman:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan saat memilih jenis pengiriman" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
    return (await protect(pilihPengiriman, ["user"]))(req);
}