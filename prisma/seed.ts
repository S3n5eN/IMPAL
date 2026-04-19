import type { Prisma } from "@/generated/prisma/client";
import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";
import "dotenv/config";

// ==== Ini seed untuk masukan data apapun ke database, contoh disini buat admin, kalau mau coba bisa pake command `npx prisma db seed` ====
export async function main() {
  // ==== karena admin butuh tempat jadi bikin dlu tempatnya ====
  const place = await prisma.place.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Gudang Bandung",
      address: "Jl. Sudirman No. 1, Bandung",
      managerName: "Budi Santoso",
      managerPhone: "08123456789",
      operationalJam: "08:00 - 17:00",
    },
  });

  // ==== Baru bikin admin, terus connect pakai id tempat ====
  const adminData: Prisma.AdminCreateInput[] = [
    {
      name: "adminOne",
      email: "adminone@gmail.com",
      password: await bcrypt.hash("Password123", 10),
      place: { connect: { id: place.id } },
    },
  ];

  for (const data of adminData) {
    await prisma.admin.upsert({
      where: { email: data.email },
      update: {},
      create: data,
    });
  }
  console.log("Seeding berhasil");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
