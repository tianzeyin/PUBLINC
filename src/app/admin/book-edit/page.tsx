"use client";

import { books } from "@/data/adminMockData";
import AdminLayout from "@/components/admin/AdminLayout";
import type { AdminView } from "@/components/admin/AdminSidebar";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function AdminBookEditPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bookId = searchParams.get("book") ?? "book-1";
  const book = books.find((item) => item.id === bookId) ?? books[0];
  const handleSelect = (view: AdminView) => {
    router.push(view === "dashboard" ? "/admin" : `/admin?section=${view}`);
  };

  return (
    <AdminLayout activeView="books" onSelect={handleSelect}>
      <div className="max-w-5xl">
        <Link href="/admin" className="mb-5 inline-flex text-sm font-bold text-blue-700 hover:text-blue-800">
          Back to Book Management
        </Link>
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900">Edit {book.title}</h1>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Visual-only edit page for book information, resources, audio, text/content, and subtitles.
              </p>
            </div>
            <Link href={`/admin/book-detail?book=${book.id}`} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50">
              View Details
            </Link>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {["Book title", "Level", "Course/album", "Reading status", "Audio file status", "Text/content status", "Subtitle status"].map((field) => (
              <div key={field} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-500">
                {field}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Save Book Information", "Delete Book", "Download Resource Files", "Manage Book Audio", "Manage Book Text/Content", "Subtitle Settings"].map((label) => (
              <button key={label} type="button" className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-2.5 text-sm font-bold text-blue-700 hover:bg-blue-100">
                {label}
              </button>
            ))}
          </div>
        </section>
      </div>
    </AdminLayout>
  );
}
