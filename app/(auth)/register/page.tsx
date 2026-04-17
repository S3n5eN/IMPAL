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
        <h1 className="text-3xl font-bold text-center text-blue-600">ReuseID</h1>
        <h2 className="text-xl font-semibold text-center">Buat Akun</h2>
        <p className="text-sm text-center text-gray-600">
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

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
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
          src="/flowchart for loop.png" // letakkan file reuseid.png di folder public/
          alt="ReuseID"
          width={400}
          height={300}
          className="rounded shadow-md"
        />
      </div>
    </div>
  );
}
