<<<<<<< Updated upstream
// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div>
//       {/* NAVBAR - sticky */}
//       <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 bg-[#f5f0e8] shadow-sm">

//         {/* Logo */}
//         <div className="font-bold text-teal-600 text-lg">
//           ReuseID
//         </div>

//         {/* Menu */}
//         <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
//           <a href="#" className="hover:text-teal-600 transition-colors">Cara Donasi</a>
//           <a href="#" className="hover:text-teal-600 transition-colors">Penyaluran</a>
//           <a href="#" className="hover:text-teal-600 transition-colors">Tentang Kami</a>

//           <button className="bg-teal-600 text-white px-3 py-1 rounded hover:bg-teal-700 transition-colors">
//             Donasi
//           </button>
//         </nav>

//         {/* Search + Profile */}
//         <div className="flex items-center gap-3">
//           <input
//             placeholder="Search here..."
//             className="border border-gray-300 bg-white px-3 py-1 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
//           />

//           <img
//             src="https://i.pravatar.cc/150?img=3"
//             alt="User profile"
//             className="w-8 h-8 rounded-full object-cover cursor-pointer"
//           />
//         </div>
//       </div>

//       {/* PAGE CONTENT */}
//       {children}
//     </div>
//   );
// }
export default function RootDashboardLayout({
=======
import Link from "next/link";

export default function DashboardLayout({
>>>>>>> Stashed changes
  children,
}: {
  children: React.ReactNode;
}) {
<<<<<<< Updated upstream
  return <>{children}</>;
=======
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
            <Link href="/dashboard/form/tambahBarang">Donasi</Link>
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
>>>>>>> Stashed changes
}