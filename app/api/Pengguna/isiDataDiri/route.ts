import { pengguna } from "@/types/pengguna";
import { NextRequest } from "next/server";

// ==== Ini Method Isi Data Diri Pengguna ====
export async function isiDataDiri(req: Request) {
    const body: Pick<pengguna, "dataDiri"> = await req.json();
}