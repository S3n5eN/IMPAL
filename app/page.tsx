'use client';
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setuser] = useState<string>("");
  const handleGetUser = async () => {
    try {
      const  res = await fetch("/api/Pengguna");
      if (res.ok) {
        const data = await res.json();
        setuser(data.name);
      } 
    } catch (error) {
      console.error("Error fetching user data: ", error);
    }
  }

  useEffect(() => {
    handleGetUser();
  }, [])

  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-4xl">Selamat datang di ReuseID <span className="font-bold text-cyan-600">{user}</span></h1>
    </div>
  );
}
