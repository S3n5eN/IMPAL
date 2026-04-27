export default function DashboardPage() {
  const items = [
    {
      name: "Susu MBG",
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
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HERO */}
      <div className="relative w-full h-[350px] md:h-[450px]">
        
        <div className="grid grid-cols-2 h-full">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/12/Joko_Widodo_2019_official_portrait.jpg"
            className="w-full h-full object-cover"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Gibran_Rakabuming_Raka_2023.jpg"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-700/70 flex flex-col justify-center px-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            DONASI
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold">
            BARANG BEKAS
          </h2>

          <div className="mt-4 inline-block bg-orange-400 text-black px-4 py-2 rounded-full font-semibold w-fit">
            BERBAGI UNTUK SESAMA
          </div>

          <p className="mt-4 text-sm md:text-base">
            PAKAIAN • BUKU • MAINAN • PERALATAN
          </p>

          <p className="text-sm md:text-base mt-1">
            MINGGU, 12 OKTOBER • 09:00 - 16:00
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h2 className="text-lg font-bold mb-4">Rekomendasi Barang:</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-3">

              <img
                src={item.img}
                className="w-full h-32 object-cover rounded-md"
              />

              <h3 className="font-semibold mt-2">{item.name}</h3>

              <p className="text-sm text-gray-500">
                Keadaan: Baik
              </p>

              <p className="text-sm text-gray-500">
                Lokasi: {item.lokasi}
              </p>

              <button className="mt-3 w-full bg-teal-600 text-white py-1.5 rounded-lg text-sm hover:bg-teal-700">
                Hubungi Pemilik
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}