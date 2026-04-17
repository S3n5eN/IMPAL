"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Loginpage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        router.push("/");
        router.refresh();
      } 
    } catch (error) {
      console.error("Login error: ", error);
    }
  }

  return (
    <div className="flex h-screen justify-between">
      <div className="flex-1 p-3">
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          <Image
            src="/Login_BG.png"
            quality={100}
            alt="Login Image"
            layout="fill"
            objectFit="cover"
            sizes=""
          />
          <div className="absolute inset-0 bg-[#007582]/70"></div>
        </div>
      </div>
      <div className=" flex-1 flex items-center justify-center flex-col p-3">
        <div className="flex-1 flex justify-start w-full text-2xl font-bold text-[#007582]">ReuseID</div>
        <div >
          <form className="flex flex-col item gap-5 px-10 py-20 rounded-lg w-100 flex-1" onSubmit={handleSubmit}>
            <div>
              <h3 className="text-center font-bold text-xl">
                Selamat Datang !
              </h3>
              <h5 className="text-center text-sm">
                Silahkan isi informasi Akun yang telah terdaftar
              </h5>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <label htmlFor="email">Email:</label>
                <input
                  className="bg-gray-300 p-2 rounded-lg"
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password">Password:</label>
                <input
                  className="bg-gray-300 p-2 rounded-lg"
                  type="password"
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="flex justify-end">
                  <Link
                    href="/forgot-password"
                    className="text-xs text-blue-500 hover:underline"
                  >
                    Lupa Password?
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <button
                className="bg-[#007582] text-white font-bold p-2 rounded-lg w-full focus:bg-[#005b65] focus:scale-98 transition duration-200"
                type="submit"
              >
                Login
              </button>
              <p className="text-center text-xs">
                Belum punya akun?{" "}
                <Link
                  href="/register"
                  className="text-blue-500 hover:underline"
                >
                  Daftar Sekarang
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className="flex justify-between items-end text-xs w-full px-6 flex-1 text-gray-400 font-semibold">
          <p>Copyright © 2025 ReuseID. All rights reserved.</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}
