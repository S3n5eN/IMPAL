const { PrismaMariaDb } = require("@prisma/adapter-mariadb");
const { PrismaClient } = require("./generated/prisma/client.js");

const adapter = new PrismaMariaDb({
    host: "localhost",
    user: "root",
    password: "",
    database: "reuseid",
    port: 3306,
});

const prisma = new PrismaClient({ adapter });

async function main() {
    const users = await prisma.user.findMany();
    console.log("Koneksi berhasil! Users:", users);
}

main().catch(console.error).finally(() => prisma.$disconnect());
async function main() {
    console.log("Mencoba koneksi...");
    const users = await prisma.user.findMany();
    console.log("Koneksi berhasil! Jumlah users:", users.length);
}

async function main() {
    console.log("Mencoba koneksi...");
    const users = await prisma.user.findMany();
    console.log("Koneksi berhasil! Jumlah users:", users.length);
}