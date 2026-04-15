"use client";

import { useState } from "react";

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
    alert(data.message); // tampilkan pesan dari API
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {/* Container kiri: form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center">Register</h2>

        <input
          type="text"
          placeholder="Username"
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
      </form>

      {/* Container kanan: gambar */}
      <div className="ml-10">
        <img
          src="/reuseid.png" // letakkan gambar di folder public/reuseid.png
          alt="ReuseID"
          className="w-80 rounded shadow-md"
        />
      </div>
    </div>
  );
}
