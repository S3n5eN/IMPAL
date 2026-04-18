"use client";

import { useState } from "react";
import Image from "next/image";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: username, email, password }),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {/* Container kiri: form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96 flex flex-col gap-4"
      >
        {/* Judul utama */}
        <h1 className="text-4xl font-bold text-center text-teal-400">
          ReuseID
        </h1>

        {/* Subjudul */}
        <h2 className="text-xl font-medium text-center text-black">
          Buat Akun
        </h2>

        {/* Deskripsi */}
        <p className="text-sm text-center text-black">
          Masukkan informasi kamu untuk membuat akun
        </p>

        <input
          type="text"
          placeholder="Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />

        {/* Tombol Register */}
        <button
          type="submit"
          className="bg-teal-300 text-black font-semibold py-2 rounded hover:bg-teal-400 transition"
        >
          Register
        </button>

        <p className="text-sm text-center">
          Sudah punya akun?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>

        <p className="text-xs text-center text-gray-400 mt-4">
          © 2025 ReuseID. Privacy Policy
        </p>
      </form>

      {/* Container kanan: gambar ilustrasi */}
      <div className="ml-10">
        <Image
          src="/flowchart for loop.png"
          alt="ReuseID"
          width={400}
          height={300}
          className="rounded shadow-md"
        />
      </div>
    </div>
  );
}