import Link from "next/link";

export type TeacherView =
  | "home"
  | "classes"
  | "class-detail"
  | "students"
  | "student-detail"
  | "resources"
  | "report"
  | "course-progress"
  | "account";

export const teacherNavItems: { name: string; view: TeacherView; icon: string }[] = [
  { name: "Teacher Home", view: "home", icon: "🏠" },
  { name: "My Classes", view: "classes", icon: "📚" },
  { name: "Student List", view: "students", icon: "👥" },
  { name: "Resource Management", view: "resources", icon: "🎧" },
  { name: "Class Learning Report", view: "report", icon: "📊" },
  { name: "Course / Book Progress", view: "course-progress", icon: "📖" },
  { name: "Account Management", view: "account", icon: "⚙️" },
];

export default function TeacherSidebar({
  activeView,
  onSelect,
}: {
  activeView: TeacherView;
  onSelect: (view: TeacherView) => void;
}) {
  return (
    <aside className="hidden h-screen w-72 shrink-0 flex-col border-r border-slate-200 bg-white md:flex">
      <div className="flex items-center gap-3 border-b border-slate-100 p-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-sky-500 text-sm font-bold text-white shadow-md">
          P
        </div>
        <div>
          <h2 className="font-bold leading-tight text-slate-800">Teacher Portal</h2>
          <p className="text-[10px] text-slate-500">Publink China</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        {teacherNavItems.map((item) => {
          const isActive = activeView === item.view;
          return (
            <button
              key={item.view}
              type="button"
              onClick={() => onSelect(item.view)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-all ${
                isActive
                  ? "border border-emerald-100 bg-emerald-50 text-emerald-700 shadow-sm"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      <div className="border-t border-slate-100 p-4">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-600 transition-all hover:bg-red-50"
        >
          <span className="text-lg">🚪</span>
          Logout
        </Link>
      </div>
    </aside>
  );
}
