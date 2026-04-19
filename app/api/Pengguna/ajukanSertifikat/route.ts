import { pengguna } from "@/types/pengguna";
import { NextResponse } from "next/server";

// ==== Ini method ajukan sertifikat ====
export async function ajukanSertifikat(req: Request) {
    const body: Pick<pengguna, "totalPoin"> = await req.json();
}