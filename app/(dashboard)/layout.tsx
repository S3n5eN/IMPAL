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
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}