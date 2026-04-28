"use client";

import Link from "next/link";

export default function DashboardPage() {
  const items = [
    {
      name: "SUSU MBG",
      lokasi: "Bandung",
      img: "https://minhajshahabah.id/wp-content/uploads/2026/01/Susu-Program-MBG-Susu-UHT-Rekombinasi-Cek-BPOM-Halal-Fakta-Gizi-2026.jpg",
    },
    {
      name: "Rantang MBG",
      lokasi: "Tangerang",
      img: "https://tse4.mm.bing.net/th/id/OIP.ypnvU_HI7FSJwCbgfVlgjwEsCo?pid=Api&h=220&P=0",
    },
    {
      name: "Mobil MBG",
      lokasi: "Jakarta",
      img: "https://indoposco.id/wp-content/uploads/2025/06/Mobil-MBG.jpg",
    },
    {
      name: "Lu nyawit?",
      lokasi: "Bandung",
      img: "https://tse1.mm.bing.net/th/id/OIP.pO362oBeloQF4mMAzCf3JwHaE8?pid=Api&h=220&P=0",
    },
    {
      name: "Baju Anak",
      lokasi: "Surabaya",
      img: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400",
    },
    {
      name: "Sepatu Bekas",
      lokasi: "Yogyakarta",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    },
    {
      name: "Buku Pelajaran",
      lokasi: "Bandung",
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
    },
    {
      name: "Mainan Anak",
      lokasi: "Jakarta",
      img: "https://images.unsplash.com/photo-1558877385-81a1c7e67d72?w=400",
    },
  ];

  return (
    <div className="bg-[#f5f0e8] min-h-screen">

      {/* NAVBAR */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 bg-[#f5f0e8] shadow-sm">
        <div className="font-bold text-teal-600 text-lg">ReuseID</div>

        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-teal-600 transition-colors">Cara Donasi</a>
          <a href="#" className="hover:text-teal-600 transition-colors">Penyaluran</a>
          <a href="#" className="hover:text-teal-600 transition-colors">Tentang Kami</a>
          <button className="bg-teal-600 text-white px-3 py-1 rounded hover:bg-teal-700 transition-colors">
            Donasi
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <input
            placeholder="Search here..."
            className="border border-gray-300 bg-white px-3 py-1 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <img
            src="https://i.pravatar.cc/150?img=3"
            alt="User profile"
            className="w-8 h-8 rounded-full object-cover cursor-pointer"
          />
        </div>
      </div>

      {/* HERO */}
      <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden">
        <div className="grid grid-cols-2 h-full">
          <img
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800"
            alt="Donasi"
            className="w-full h-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800"
            alt="Komunitas"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/85 to-teal-600/75 flex flex-col items-center justify-center text-white text-center px-10">
          <h1 className="text-4xl md:text-6xl font-bold">DONASI</h1>
          <h2 className="text-2xl md:text-4xl font-semibold">BARANG BEKAS</h2>
          <div className="mt-4 inline-block bg-orange-400 text-black px-4 py-2 rounded-full font-semibold">
            BERBAGI UNTUK SESAMA
          </div>
          <p className="mt-4 text-sm md:text-base">PAKAIAN • BUKU • MAINAN • PERALATAN</p>
          <p className="text-sm md:text-base mt-1">MINGGU, 12 OKTOBER • 09:00 - 16:00</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h2 className="text-lg font-bold mb-4 text-gray-800">Rekomendasi Barang:</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 flex flex-col">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-32 object-cover rounded-md"
              />
              <h3 className="font-semibold mt-2 text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500">Keadaan: Baik</p>
              <p className="text-sm text-gray-500">Lokasi: {item.lokasi}</p>

              <button className="mt-3 w-full bg-teal-600 text-white py-1.5 rounded-lg text-sm hover:bg-teal-700 transition-colors">
                Hubungi Pemilik
              </button>

              <div className="mt-2 flex justify-center">
                <Link
                  href={`/dashboard/konfirmasi?name=${encodeURIComponent(item.name)}&lokasi=${encodeURIComponent(item.lokasi)}&img=${encodeURIComponent(item.img)}`}
                  className="bg-green-500 text-white px-5 py-1.5 rounded-lg text-sm hover:bg-green-600 transition-colors"
                >
                  Ajukan
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}