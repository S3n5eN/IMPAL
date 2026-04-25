import { prisma } from "@/lib/prisma";
import { protect } from "@/lib/protect";
import { Barang } from "@/types/Barang";
import { NextRequest, NextResponse} from "next/server";
import { randomUUID } from "node:crypto";
import fs from "node:fs/promises";

async function simpanBarang(req: NextRequest, decoded: { id: string}){
    try {
        const formData = await req.formData();

        const data: Pick<Barang, "name" | "desc" | "foto" | "category" | "placeId"> = {
            name: formData.get("name") as string,
            desc: formData.get("desc") as string,
            foto: "",
            category: formData.get("category") as string,
            placeId: formData.get("placeId") as string, 
        }

        const foto = formData.get("foto") as File;

        if (!data.name || !data.desc || !foto || !data.category || !data.placeId) {
            return NextResponse.json({ message: "Data Tidak Lengkap"}, { status: 400})
        }

        const fileName = `${randomUUID()}-${foto.name}`;
        const buffer = new Uint8Array(await foto.arrayBuffer());
        // ==== Buat file Upload di folder public buat simpan semua foto yang diupload <-- ini kalau belum ada file uploadnya ====
        await fs.mkdir("public/uploads", { recursive: true });
        // Baru simpan file nya
        await fs.writeFile(`public/uploads/${fileName}`, buffer);

        // ==== ini simpan direktori di DB, jadi frontend tinggal ambil aja dari return getDashboard / getBarangById nanti ====
        data.foto = `/uploads/${fileName}`;

        // ==== Simpan data barang ke database ====
        const barang = await prisma.item.create({
            data: {
                name: data.name,
                description: data.desc,
                imageURL: data.foto,
                category: data.category,
                userId: Number(decoded.id),
                placeId: Number(data.placeId),
            }
        });

        // ==== Setelah barang tersimpan, buat shipment ====
        await prisma.shipment.create({
            data: {
                itemId: Number(barang.id),
                userId: Number(decoded.id),
                type: "Donation",
                status: "Pending"
            }
        })

        return NextResponse.json({message: "Barang berhasil disimpan", barang}, { status: 201})
    } catch (error) {
        console.log("Error menyimpan barang:", error);
        return NextResponse.json({ message: "Gagal menyimpan barang"}, { status: 500})
    }
}

// ==== ini Biar user doang yang bisa akses route / API ini ====
export async function POST(req: NextRequest) {
    return (await protect(simpanBarang, ["user"]))(req);
}