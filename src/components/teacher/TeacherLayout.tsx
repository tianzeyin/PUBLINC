"use client";

import { useState } from "react";
import TeacherSidebar, { teacherNavItems, type TeacherView } from "./TeacherSidebar";

export default function TeacherLayout({
  activeView,
  onSelect,
  children,
}: {
  activeView: TeacherView;
  onSelect: (view: TeacherView) => void;
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeLabel = teacherNavItems.find((item) => item.view === activeView)?.name ?? "Teacher Home";

  return (
    <div className="flex min-h-screen bg-slate-50">
      <TeacherSidebar activeView={activeView} onSelect={onSelect} />

      <div className="flex h-screen flex-1 flex-col overflow-y-auto">
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white px-4 py-3 shadow-sm md:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-600 to-sky-500 text-sm font-bold text-white shadow-md">
                P
              </div>
              <div>
                <h1 className="font-bold text-slate-800">Teacher Portal</h1>
                <p className="text-xs font-medium text-slate-500">{activeLabel}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700"
            >
              Menu
            </button>
          </div>
          {menuOpen && (
            <div className="mt-3 grid gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg">
              {teacherNavItems.map((item) => (
                <button
                  key={item.view}
                  type="button"
                  onClick={() => {
                    onSelect(item.view);
                    setMenuOpen(false);
                  }}
                  className={`rounded-xl px-3 py-2 text-left text-sm font-semibold ${
                    activeView === item.view ? "bg-emerald-50 text-emerald-700" : "text-slate-600"
                  }`}
                >
                  {item.icon} {item.name}
                </button>
              ))}
            </div>
          )}
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="mx-auto w-full max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
