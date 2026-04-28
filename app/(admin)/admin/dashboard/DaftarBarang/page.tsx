"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Shipment = {
  id: number;
  item: { name: string; imageURL: string; category: string };
  user: { name: string };
  createdAt: string;
};

export default function VerifikasiBarangPage() {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/shipments?status=pending&type=Donation")
      .then(res => res.json())
      .then(data => setShipments(data));
  }, []);

  const handleAction = async (shipmentId: number, action: string, quality?: string) => {
    try {
      setLoading(true);
      const res = await fetch("/api/verifikasiBarang", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ shipmentId, action, quality })
      });

      const text = await res.text();
      console.log("Raw response: ", text);

      if (!res.ok) {
        const text = await res.text();
        alert("Error: " + text);
        return;
      }

    let data: any;
    try{
      data = JSON.parse(text);
    }catch{
       alert("Response bukan JSON: " + text);
       return;
    }

      alert(data.message);
      // Hapus barang dari list setelah aksi
      setShipments(shipments.filter(s => s.id !== shipmentId));
    } catch (err) {
      console.error("Frontend error:", err);
      alert("Terjadi error di frontend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Verifikasi Barang Donasi</h1>
      {loading && <p className="text-blue-500">Memproses...</p>}

      <div className="space-y-4">
        {shipments.map((s) => (
          <div key={s.id} className="flex border rounded-lg p-4 shadow-sm bg-white">
            {/* Gambar barang */}
            <Image
              src={s.item.imageURL}
              alt={s.item.name}
              className="w-24 h-24 object-cover rounded-md mr-4"
            />

            {/* Detail barang */}
            <div className="flex-1">
              <h2 className="font-semibold text-lg">{s.item.name}</h2>
              <p className="text-gray-600">Kategori: {s.item.category}</p>
              <p className="text-gray-600">Donatur: {s.user.name}</p>
              <p className="text-gray-500 text-sm">
                Diajukan: {new Date(s.createdAt).toLocaleDateString()}
              </p>

              {/* Aksi */}
              <div className="mt-3 flex gap-2">
                <select
                  onChange={(e) => handleAction(s.id, "Approve", e.target.value)}
                  className="border rounded px-2 py-1"
                  defaultValue=""
                >
                  <option value="" disabled>Verifikasi (pilih kualitas)</option>
                  <option value="SangatBaik">Sangat Baik</option>
                  <option value="Baik">Baik</option>
                  <option value="CukupBaik">Cukup Baik</option>
                  <option value="Layak">Layak</option>
                  <option value="CukupLayak">Cukup Layak</option>
                </select>

                <button
                  onClick={() => handleAction(s.id, "Reject")}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Tolak
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
