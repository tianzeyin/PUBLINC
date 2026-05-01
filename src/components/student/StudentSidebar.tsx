"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Student Home", href: "/student", icon: "🏠" },
  { name: "My Classes", href: "/student/classes", icon: "🎓" },
  { name: "Books / Audio", href: "/student/library", icon: "🎧" },
  { name: "Learning History", href: "/student/history", icon: "🗓️" },
  { name: "Learning Report", href: "/student/report", icon: "📊" },
  { name: "Personal Center", href: "/student/profile", icon: "👤" },
];

export default function StudentSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-slate-200 h-screen sticky top-0 flex flex-col hidden md:flex">
      <div className="p-6 border-b border-slate-100 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
          P
        </div>
        <div>
          <h2 className="font-bold text-slate-800 leading-tight">Student Portal</h2>
          <p className="text-[10px] text-slate-500">Publink China</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href === "/student/classes" && pathname.startsWith("/student/classes/"));
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm font-medium ${
                isActive
                  ? "bg-blue-50 text-blue-700 shadow-sm border border-blue-100/50"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm font-medium text-red-600 hover:bg-red-50"
        >
          <span className="text-lg">🚪</span>
          Logout
        </Link>
      </div>
    </aside>
  );
}
