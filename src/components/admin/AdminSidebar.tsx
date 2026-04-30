import Link from "next/link";

export type AdminView = "dashboard" | "books" | "resources" | "institutions" | "courses" | "statistics" | "settings";

export const adminNavItems: { name: string; view: AdminView; icon: string }[] = [
  { name: "Admin Dashboard", view: "dashboard", icon: "D" },
  { name: "Book Management", view: "books", icon: "B" },
  { name: "Resource File Management", view: "resources", icon: "R" },
  { name: "Institution Management", view: "institutions", icon: "I" },
  { name: "Course Management", view: "courses", icon: "C" },
  { name: "Learning Statistics", view: "statistics", icon: "L" },
  { name: "Admin User Settings", view: "settings", icon: "A" },
];

export default function AdminSidebar({ activeView, onSelect }: { activeView: AdminView; onSelect: (view: AdminView) => void }) {
  return (
    <aside className="hidden h-screen w-72 shrink-0 flex-col border-r border-slate-200 bg-white md:flex">
      <div className="flex items-center gap-3 border-b border-slate-100 p-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 to-emerald-500 text-sm font-bold text-white shadow-md">
          P
        </div>
        <div>
          <h2 className="font-bold leading-tight text-slate-800">Platform Admin</h2>
          <p className="text-[10px] text-slate-500">Publink China</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        {adminNavItems.map((item) => {
          const isActive = activeView === item.view;
          return (
            <button
              key={item.view}
              type="button"
              onClick={() => onSelect(item.view)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-all ${
                isActive ? "border border-blue-100 bg-blue-50 text-blue-700 shadow-sm" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span className={`flex h-6 w-6 items-center justify-center rounded-lg text-xs font-extrabold ${isActive ? "bg-white text-blue-700" : "bg-slate-100 text-slate-500"}`}>
                {item.icon}
              </span>
              {item.name}
            </button>
          );
        })}
      </nav>

      <div className="border-t border-slate-100 p-4">
        <Link href="/" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-600 transition-all hover:bg-red-50">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-red-50 text-xs font-extrabold">L</span>
          Logout
        </Link>
      </div>
    </aside>
  );
}
