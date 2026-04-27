export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* NAVBAR */}
      <div className="flex items-center justify-between px-6 py-3 bg-white shadow">

        {/* Logo */}
        <div className="font-bold text-teal-600 text-lg">
          ReuseID
        </div>

        {/* Menu */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <p>Cara Donasi</p>
          <p>Penyaluran</p>
          <p>Tentang Kami</p>

          <button className="bg-teal-600 text-white px-3 py-1 rounded">
            Donasi
          </button>
        </div>

        {/* Search + Profile */}
        <div className="flex items-center gap-3">
          <input
            placeholder="Search here..."
            className="border px-3 py-1 rounded-full text-sm"
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf_QBRLJRChmn0T2BMxDaMfT5I41bznPm5-oiS-IAlXR2Gas8DZZ-kjj-EZ7ctjnUbC9AtormJm5wIrGDeWP20dkw9SSovADE0OgTnqcYr&s=10"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>

      {/* PAGE CONTENT */}
      {children}
    </div>
  );
}