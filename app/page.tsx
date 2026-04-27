'use client";'
import { Playfair_Display, DM_Sans } from "next/font/google";
import Link from "next/link";
import Logo from "@/public/Logo/Logo.svg";
import Image from "next/image";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  style: ["italic", "normal"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

// Components
const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-[#F5F2EB]/90 backdrop-blur-sm border-b border-[#D8D4CC] px-6 lg:px-16 py-4 flex justify-between items-center">
    {/* Berikan ukuran spesifik atau persentase pada parent */}
    <div className=" flex items-center justify-center relative h-10 w-32">
      <Image src={Logo} alt="Logo ReuseID" className="object-contain" />
    </div>

    <div className="hidden lg:flex items-center gap-8">
      <div className="flex gap-6 text-sm font-medium text-[#1A1A18]">
        {/* UBAH: Menggunakan tag <a> biasa untuk anchor link agar smooth scroll berfungsi */}
        <a
          href="#cara-kerja"
          className="hover:underline underline-offset-4 transition-all"
        >
          Cara Kerja
        </a>
        <a
          href="#fitur"
          className="hover:underline underline-offset-4 transition-all"
        >
          Fitur
        </a>
        <a
          href="#faq"
          className="hover:underline underline-offset-4 transition-all"
        >
          FAQ
        </a>
      </div>
      <div className="h-4 border-r border-[#D8D4CC]" />
      <div className="flex items-center gap-4">
        {/* TETAP gunakan <Link> untuk pindah halaman */}
        <Link
          href="/login"
          className="text-sm font-medium hover:text-[#007582] transition-colors"
        >
          Masuk
        </Link>
        <Link
          href="/register"
          className="border border-[#1A1A18] px-4 py-1.5 text-sm font-medium hover:bg-[#1A1A18] hover:text-[#F5F2EB] transition-colors"
        >
          Daftar Gratis
        </Link>
      </div>
    </div>
    <div className="lg:hidden">
      <Link
        href="/register"
        className="border border-[#1A1A18] px-3 py-1 text-xs font-medium hover:bg-[#1A1A18] hover:text-[#F5F2EB] transition-colors"
      >
        Daftar
      </Link>
    </div>
  </nav>
);

const Hero = () => (
  <section className="min-h-screen grid lg:grid-cols-[65fr_35fr] items-center px-6 lg:px-16 py-20 lg:py-0 relative overflow-hidden">
    <div className="animate-[fadeUp_0.7s_cubic-bezier(0.16,1,0.3,1)_both]">
      <label className="text-[10px] lg:text-xs uppercase tracking-[0.2em] text-[#007582] font-semibold mb-6 block">
        Platform Donasi Barang Bekas · Gratis & Terverifikasi
      </label>
      <h1
        className={`${playfair.className} font-black text-5xl md:text-7xl xl:text-8xl leading-[1.1] text-[#1A1A18] mb-8`}
      >
        Barang Bekasmu,
        <br />
        <span className="italic">Berkah</span> untuk
        <br />
        Sesama.
      </h1>
      <p className="text-lg text-[#6B6860] max-w-md leading-relaxed mb-10 [animation-delay:100ms] animate-[fadeUp_0.7s_cubic-bezier(0.16,1,0.3,1)_both]">
        Reuse ID menghubungkan donatur dan penerima barang bekas layak pakai.
        Gratis, transparan, dan tanpa transaksi uang.
      </p>
      <div className="flex flex-wrap gap-4 [animation-delay:200ms] animate-[fadeUp_0.7s_cubic-bezier(0.16,1,0.3,1)_both]">
        <Link
          href="/register"
          className="bg-[#1A1A18] text-[#F5F2EB] px-8 py-4 text-sm font-medium hover:bg-[#007582] transition-colors"
        >
          Daftar Sekarang
        </Link>
        <Link
          href="/login"
          className="border border-[#1A1A18] bg-transparent px-8 py-4 text-sm font-medium hover:bg-[#1A1A18] hover:text-[#F5F2EB] transition-colors"
        >
          Sudah Punya Akun? Masuk
        </Link>
      </div>
    </div>

    <div className="hidden lg:block relative h-full min-h-[500px]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-[#007582] animate-[spinSlow_30s_linear_infinite]" />
      <div className="absolute top-1/4 right-1/3 w-6 h-6 bg-[#007582] animate-[float_4s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 rounded-full border border-[#D8D4CC] animate-[float_5s_ease-in-out_infinite_1s]" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] tracking-[0.4em] text-[#D8D4CC] font-bold">
        REUSE · REDUCE · RECYCLE
      </div>
    </div>

    {/* Marquee Ticker */}
    <div className="absolute bottom-0 left-0 w-full border-y border-[#007582] bg-[#92b5b9] py-4 overflow-hidden">
      <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite] gap-12 text-[10px] tracking-[0.3em] text-[#eeeeee] font-bold uppercase">
        <span>
          Donasi · Reuse · Berbagi · Peduli · Lingkungan · Gratis ·
          Terverifikasi ·{" "}
        </span>
        <span>
          Donasi · Reuse · Berbagi · Peduli · Lingkungan · Gratis ·
          Terverifikasi ·{" "}
        </span>
        <span>
          Donasi · Reuse · Berbagi · Peduli · Lingkungan · Gratis ·
          Terverifikasi ·{" "}
        </span>
        <span>
          Donasi · Reuse · Berbagi · Peduli · Lingkungan · Gratis ·
          Terverifikasi ·{" "}
        </span>
      </div>
    </div>
  </section>
);

const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Daftar & Verifikasi",
      desc: "Buat akun dengan email valid. Identitasmu akan diverifikasi oleh admin sebelum bisa menerima barang.",
    },
    {
      num: "02",
      title: "Unggah atau Cari Barang",
      desc: "Donasikan barang bekasmu dengan foto dan deskripsi lengkap, atau cari barang yang kamu butuhkan dari donatur di sekitarmu.",
    },
    {
      num: "03",
      title: "Jemput atau Kirim",
      desc: "Pilih metode pengambilan — jemput langsung ke lokasi atau via jasa pengiriman dengan biaya ditanggung penerima.",
    },
  ];

  return (
    <section
      id="cara-kerja"
      // UBAH: Tambahkan scroll-mt-24 agar judul tidak tertutup Navbar
      className="scroll-mt-24 py-32 lg:py-48 px-6 lg:px-16 bg-[#F5F2EB]"
    >
      <div className="mb-20">
        <label className="text-[10px] uppercase tracking-[0.3em] text-[#007582] font-bold block mb-4">
          BAGAIMANA CARA KERJANYA
        </label>
        <h2
          className={`${playfair.className} text-4xl lg:text-6xl font-black text-[#1A1A18]`}
        >
          Semudah tiga langkah.
        </h2>
      </div>
      <div className="grid md:grid-cols-3 border-t border-[#D8D4CC] pt-12 gap-12">
        {steps.map((step, i) => (
          <div key={i} className="group cursor-default">
            <span
              className={`${playfair.className} text-8xl lg:text-9xl text-[#E8E4DA] font-black leading-none block mb-4 transition-colors group-hover:text-[#007582]/10`}
            >
              {step.num}
            </span>
            <div className="w-10 h-px bg-[#007582] mb-6" />
            <h3 className="text-xl font-bold text-[#1A1A18] mb-4">
              {step.title}
            </h3>
            <p className="text-[#6B6860] leading-relaxed text-sm lg:text-base">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "Donasi Barang",
      desc: "Upload foto dan deskripsi barang bekasmu. Barang langsung tayang dan bisa dilihat oleh calon penerima.",
      span: "md:col-span-1 min-h-[20rem]",
      icon: (
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      ),
    },
    {
      title: "Cari Barang Gratis",
      desc: "Temukan barang layak pakai dari donatur di sekitarmu. Sepenuhnya gratis tanpa syarat tersembunyi.",
      span: "md:col-span-1 min-h-[20rem]",
      icon: <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
    },
    {
      title: "Hubungi Donatur Langsung",
      desc: "Chat atau telepon donatur langsung dari aplikasi. Tanya kondisi barang sebelum kamu ambil.",
      span: "md:col-span-1",
      icon: (
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      ),
    },
    {
      title: "Peta Titik Pengumpulan",
      desc: "Lihat titik-titik lokasi pengumpulan barang bekas terdekat dari posisimu.",
      span: "md:col-span-1",
      icon: (
        <>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </>
      ),
    },
    {
      title: "Info Kegiatan Sosial",
      desc: "Pantau event dan kegiatan donasi yang sedang berlangsung di area sekitarmu.",
      span: "md:col-span-2",
      icon: (
        <>
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87" />
          <path d="M16 3.13a4 4 0 010 7.75" />
        </>
      ),
    },
  ];

  return (
    <section
      id="fitur"
      // UBAH: Tambahkan scroll-mt-24
      className="scroll-mt-24 py-32 lg:py-48 px-6 lg:px-16 border-t border-[#D8D4CC]"
    >
      <div className="max-w-xl mb-20">
        <label className="text-[10px] uppercase tracking-[0.3em] text-[#007582] font-bold block mb-4">
          FITUR PLATFORM
        </label>
        <h2
          className={`${playfair.className} text-4xl lg:text-6xl font-black italic text-[#1A1A18] mb-6`}
        >
          Semua yang kamu butuhkan.
        </h2>
        <p className="text-[#6B6860] leading-relaxed">
          Reuse ID dirancang agar proses donasi semudah dan setransparan mungkin
          bagi semua orang.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-[1px] bg-[#D8D4CC] border border-[#D8D4CC]">
        {features.map((f, i) => (
          <div
            key={i}
            className={`bg-[#F5F2EB] p-10 lg:p-16 hover:-translate-y-1.5 transition-transform duration-500 cursor-default ${f.span}`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 text-[#007582] mb-8"
            >
              {f.icon}
            </svg>
            <h3 className="text-2xl font-bold text-[#1A1A18] mb-4">
              {f.title}
            </h3>
            <p className="text-[#6B6860] leading-relaxed max-w-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const HeroSection2 = () => (
  <section className="py-32 lg:py-48 px-6 lg:px-16 bg-[#007582] text-[#F5F2EB] relative overflow-hidden">
    <div className="grid lg:grid-cols-[55fr_45fr] gap-20 items-center">
      <div>
        <label className="text-[10px] uppercase tracking-[0.3em] text-[#F5F2EB]/50 font-bold block mb-4">
          PROGRAM PENGHARGAAN
        </label>
        <h2
          className={`${playfair.className} text-4xl lg:text-7xl font-black mb-8 leading-tight`}
        >
          Jadilah Pahlawan Hijau.
        </h2>
        <p className="text-lg text-[#F5F2EB]/80 leading-relaxed mb-10 max-w-lg">
          Setiap barang yang kamu donasikan menghasilkan poin. Ketika poinmu
          mencapai batas tertentu, admin akan mengirimkan sertifikat digital
          eksklusif sebagai bentuk apresiasi kontribusimu.
        </p>
        <Link
          href="/register"
          className="border border-[#F5F2EB]/40 px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#F5F2EB] hover:text-[#007582] transition-all duration-300 inline-block"
        >
          Mulai Donasi
        </Link>
      </div>

      <div className="relative">
        <div className="bg-[#F5F2EB]/5 border border-[#F5F2EB]/20 p-12 lg:p-20 rotate-3 scale-90 lg:scale-100 backdrop-blur-sm relative z-10">
          <div className="border border-[#F5F2EB]/20 p-8 lg:p-12 text-center flex flex-col items-center">
            <span className="text-[8px] lg:text-[10px] tracking-[0.5em] text-[#F5F2EB]/40 font-black mb-8 uppercase">
              Sertifikat Penghargaan
            </span>
            <div className="w-12 h-px bg-[#F5F2EB]/20 mb-10" />
            <span
              className={`${playfair.className} italic text-4xl lg:text-6xl text-[#F5F2EB] mb-6`}
            >
              Pahlawan Hijau
            </span>
            <div className="w-32 h-px bg-[#F5F2EB]/10 mb-6" />
            <span className="text-sm tracking-widest text-[#F5F2EB]/30 font-medium">
              NAMAMU DI SINI
            </span>
            <svg
              className="w-16 h-16 absolute bottom-8 right-8 text-[#F5F2EB]/10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="1.5"
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              />
              <path strokeWidth="1.5" d="M8 12L11 15L16 9" />
            </svg>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full border border-[#F5F2EB]/10 -rotate-3 -z-0" />
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const faqs = [
    {
      q: "Apakah Reuse ID benar-benar gratis untuk semua orang?",
      a: "Ya, sepenuhnya gratis. Tidak ada biaya pendaftaran atau biaya tersembunyi. Jika kamu memilih pengiriman via jasa kurir, biaya pengiriman ditanggung oleh penerima — bukan platform.",
    },
    {
      q: "Bagaimana cara memastikan kondisi barang sesuai?",
      a: "Donatur wajib mencantumkan foto dan deskripsi kondisi barang secara jujur. Kamu juga bisa menghubungi donatur langsung melalui fitur chat atau telepon untuk bertanya lebih lanjut sebelum mengambil keputusan.",
    },
    {
      q: "Siapa saja yang bisa mendaftar di Reuse ID?",
      a: "Siapa pun yang memiliki email valid bisa mendaftar. Untuk bisa menerima barang, kamu perlu melengkapi data diri yang akan diverifikasi oleh admin — ini untuk menjaga keamanan dan kepercayaan semua pengguna.",
    },
    {
      q: "Bagaimana proses pengiriman atau pengambilan barang?",
      a: "Ada dua pilihan: jemput langsung ke lokasi donatur atau titik pengumpulan, atau menggunakan jasa pengiriman pilihan kamu dengan biaya ditanggung sendiri.",
    },
    {
      q: "Apakah data pribadi saya akan aman?",
      a: "Data kamu dienkripsi dan hanya digunakan untuk keperluan verifikasi identitas. Kami tidak menjual atau membagikan informasi pribadi ke pihak mana pun.",
    },
  ];

  return (
    <section
      id="faq"
      // UBAH: Tambahkan scroll-mt-24
      className="scroll-mt-24 py-32 lg:py-48 px-6 lg:px-16 border-b border-[#D8D4CC]"
    >
      <div className="max-w-2xl mx-auto">
        <label className="text-[10px] uppercase tracking-[0.3em] text-[#007582] font-bold block mb-4 text-center">
          PERTANYAAN UMUM
        </label>
        <h2
          className={`${playfair.className} text-4xl lg:text-6xl font-black text-[#1A1A18] text-center mb-20`}
        >
          Ada yang ingin kamu tanyakan?
        </h2>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group border-t border-[#D8D4CC] last:border-b py-8 overflow-hidden"
            >
              <summary className="flex justify-between items-center cursor-pointer list-none list-inside">
                <h3 className="text-lg lg:text-xl font-bold text-[#1A1A18] group-hover:text-[#007582] transition-colors">
                  {faq.q}
                </h3>
                <span className="text-2xl text-[#6B6860] group-open:rotate-45 transition-transform duration-300">
                  +
                </span>
              </summary>
              <div className="pt-6 text-[#6B6860] leading-relaxed text-base">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTAFinal = () => (
  <section className="py-40 px-6 bg-[#1A1A18] text-center">
    <h2
      className={`${playfair.className} text-5xl md:text-8xl font-black text-[#F5F2EB] mb-8`}
    >
      Siap memulai?
    </h2>
    <p className="text-xl text-[#9B9890] mb-12 max-w-xl mx-auto">
      Bergabung dengan Reuse ID dan jadilah bagian dari gerakan reuse culture.
    </p>
    <div className="flex flex-wrap justify-center gap-6">
      <Link
        href="/register"
        className="bg-[#F5F2EB] text-[#1A1A18] px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-[#007582] hover:text-[#F5F2EB] transition-all duration-300"
      >
        Daftar Sekarang — Gratis
      </Link>
      <Link
        href="/login"
        className="border border-[#F5F2EB]/20 text-[#F5F2EB] px-10 py-5 text-sm font-black uppercase tracking-widest hover:border-[#F5F2EB] transition-all duration-300"
      >
        Sudah Punya Akun
      </Link>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#1A1A18] border-t border-[#F5F2EB]/10 px-6 lg:px-16 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
    <span
      className={`${playfair.className} italic text-2xl font-black text-[#F5F2EB]`}
    >
      Reuse ID
    </span>
    <p className="text-[10px] tracking-[0.2em] text-[#9B9890] uppercase font-bold">
      © 2025 Reuse ID · Dibuat dengan niat baik.
    </p>
  </footer>
);

export default function Page() {
  return (
    <div
      className={`${dmSans.variable} ${playfair.variable} font-sans bg-[#F5F2EB] text-[#1A1A18] selection:bg-[#007582] selection:text-[#F5F2EB]`}
    >
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <HeroSection2 />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
}