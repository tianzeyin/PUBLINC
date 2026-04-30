"use client";

import AdminLayout from "@/components/admin/AdminLayout";
import type { AdminView } from "@/components/admin/AdminSidebar";
import { adminCourses, books } from "@/data/adminMockData";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function AdminCourseEditPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const courseId = searchParams.get("course") ?? "course-1";
  const course = adminCourses.find((item) => item.id === courseId) ?? adminCourses[0];
  const handleSelect = (view: AdminView) => {
    router.push(view === "dashboard" ? "/admin" : `/admin?section=${view}`);
  };

  return (
    <AdminLayout activeView="courses" onSelect={handleSelect}>
      <div className="max-w-6xl">
        <Link href="/admin?section=courses" className="mb-5 inline-flex text-sm font-bold text-blue-700 hover:text-blue-800">
          Back to Course Management
        </Link>

        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900">Edit {course.name}</h1>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Visual-only course edit page for course books, level, status, authorization, and progress.
              </p>
            </div>
            <span className="rounded-xl bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700">{course.status}</span>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <InfoTile label="Course name" value={course.name} />
            <InfoTile label="Course level" value={course.level} />
            <InfoTile label="Number of books" value={`${course.books}`} />
            <InfoTile label="Authorized institutions" value={`${course.institutions}`} />
            <InfoTile label="Average progress" value={`${course.progress}%`} />
            <InfoTile label="Last updated" value={course.updated} />
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Save Course", "Delete Course", "Add Books", "Remove Books", "Set Course Level", "Set Course Status", "Authorize to Institution", "View Course Progress"].map((label) => (
              <button key={label} type="button" className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-2.5 text-sm font-bold text-blue-700 hover:bg-blue-100">
                {label}
              </button>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-extrabold text-slate-900">Books Inside This Course</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
                  {["Book title", "Level", "Audio status", "Text/content status", "Subtitle status", "Actions"].map((heading) => (
                    <th key={heading} className="p-4 first:pl-6 last:pr-6">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {books.map((book) => (
                  <tr key={book.id} className="text-sm hover:bg-slate-50/60">
                    <td className="p-4 pl-6 font-bold text-slate-900">{book.title}</td>
                    <td className="p-4 text-slate-600">{book.level}</td>
                    <td className="p-4 text-slate-600">{book.audioStatus}</td>
                    <td className="p-4 text-slate-600">{book.contentStatus}</td>
                    <td className="p-4 text-slate-600">{book.subtitleStatus}</td>
                    <td className="p-4 pr-6">
                      <div className="flex flex-wrap gap-2">
                        <button type="button" className="rounded-lg bg-blue-50 px-2.5 py-1.5 text-xs font-bold text-blue-700 hover:bg-blue-100">Remove from Course</button>
                        <Link href={`/admin/book-detail?book=${book.id}`} className="rounded-lg bg-blue-50 px-2.5 py-1.5 text-xs font-bold text-blue-700 hover:bg-blue-100">View Book</Link>
                        <Link href={`/admin/book-edit?book=${book.id}`} className="rounded-lg bg-blue-50 px-2.5 py-1.5 text-xs font-bold text-blue-700 hover:bg-blue-100">Edit Book</Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </AdminLayout>
  );
}

function InfoTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-extrabold text-slate-900">{value}</p>
    </div>
  );
}
