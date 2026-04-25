import { pengguna } from "@/types/pengguna";
import { NextResponse } from "next/server";

// ==== Ini method ambil semua poin pengguna ===== 
export async function getPoin(req: Request, decoded: { id: string }) {
    // ==== ini tinggal query ambil poin pengguna berdasarkan id decoded.id aja ====
}