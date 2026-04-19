import { pengguna } from "@/types/pengguna";
import { NextResponse } from "next/server";

// ==== Ini method ambil semua poin pengguna ===== 
// ==== Ini mengantikan tambah poin, tambah poin itu cuman admin yang bisa tentukan, karena perlu barang yang didonasikan penguna perlu quality check ====
// ==== Karena kita ga mengirim kan data apa apa (body), maka kita perlu id untuk mencari pengguna yang sesuai dengan id di database dan mengambil poinnya saja ====
export async function getPoin(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;
}