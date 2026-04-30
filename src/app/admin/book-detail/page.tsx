"use client";

import { books } from "@/data/adminMockData";
import AdminLayout from "@/components/admin/AdminLayout";
import type { AdminView } from "@/components/admin/AdminSidebar";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const bookPreviewContent: Record<
  string,
  { chapter: string; paragraphs: string[]; audioCurrent: string; audioDuration: string }
> = {
  "book-1": {
    chapter: "Chapter 1: The Journey Begins",
    audioCurrent: "02:15",
    audioDuration: "18:40",
    paragraphs: [
      "Once when I was six years old I saw a magnificent picture in a book about the primeval forest.",
      "In the book it said: \"Boa constrictors swallow their prey whole, without chewing it. After that they are not able to move.\"",
      "I pondered deeply over the adventures of the jungle. After some work with a colored pencil, I succeeded in making my first drawing.",
    ],
  },
  "book-2": {
    chapter: "Unit 1: Forest Friends",
    audioCurrent: "00:45",
    audioDuration: "12:10",
    paragraphs: [
      "The small rabbit looked across the green field and listened carefully.",
      "A bird sang from the tall tree, and the rabbit followed the sound through the morning light.",
      "Every animal in the forest had a story to tell.",
    ],
  },
  "book-3": {
    chapter: "Lesson 3: How Plants Grow",
    audioCurrent: "05:45",
    audioDuration: "16:25",
    paragraphs: [
      "Plants need sunlight, water, and air to grow well.",
      "Roots take water from the soil, while leaves use sunlight to make food.",
      "When students observe a plant every day, they can see small changes become big changes.",
    ],
  },
  "book-4": {
    chapter: "Chapter 2: Across the Mountain",
    audioCurrent: "08:20",
    audioDuration: "24:30",
    paragraphs: [
      "The travelers crossed the high mountain road before sunset.",
      "They carried books, food, and a promise to keep moving forward.",
      "The journey was difficult, but each step made them stronger.",
    ],
  },
};

export default function AdminBookDetailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bookId = searchParams.get("book") ?? "book-1";
  const book = books.find((item) => item.id === bookId) ?? books[0];
  const preview = bookPreviewContent[book.id] ?? bookPreviewContent["book-1"];
  const handleSelect = (view: AdminView) => {
    router.push(view === "dashboard" ? "/admin" : `/admin?section=${view}`);
  };

  return (
    <AdminLayout activeView="books" onSelect={handleSelect}>
      <div className="max-w-6xl">
        <Link href="/admin?section=books" className="mb-5 inline-flex text-sm font-bold text-blue-700 hover:text-blue-800">
          Back to Book Management
        </Link>
        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[200px_1fr]">
            <div className="flex h-64 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-3xl font-extrabold text-blue-700">BOOK</div>
            <div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-bold text-blue-600">{book.course}</p>
                  <h1 className="mt-1 text-3xl font-extrabold text-slate-900">{book.title}</h1>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{book.description}</p>
                </div>
                <Link href={`/admin/book-edit?book=${book.id}`} className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700">
                  Edit Book
                </Link>
              </div>
              <div className="mt-5 grid gap-3 md:grid-cols-3">
                <InfoTile label="Level" value={book.level} />
                <InfoTile label="Reading status" value="Published" />
                <InfoTile label="Audio file status" value={book.audioStatus} />
                <InfoTile label="Text/content status" value={book.contentStatus} />
                <InfoTile label="Subtitle status" value={book.subtitleStatus} />
                <InfoTile label="Resource files" value={book.files} />
                <InfoTile label="Last updated" value={book.updated} />
              </div>
            </div>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-bold text-slate-500">Student Reading Preview</p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-900">{preview.chapter}</h2>
            <div className="mt-6 space-y-5 text-lg leading-loose text-slate-700">
              {preview.paragraphs.map((paragraph, index) => (
                <p key={paragraph} className={index === 1 ? "rounded-md bg-yellow-50 px-2" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <aside className="space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-extrabold text-slate-900">Audio Preview</h2>
              <p className="mt-1 text-sm text-slate-500">Mock playback controls for reviewing the uploaded book audio.</p>
              <div className="mt-5 flex items-center gap-4">
                <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-700">
                  <svg className="ml-1 h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="flex-1">
                  <div className="mb-1 flex justify-between text-xs font-medium text-slate-500">
                    <span>{preview.audioCurrent}</span>
                    <span>{preview.audioDuration}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[32%] rounded-full bg-blue-500" />
                  </div>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <button className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50">Replay</button>
                <button className="rounded-xl border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-bold text-blue-700 hover:bg-blue-100">Check Subtitle Sync</button>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-extrabold text-slate-900">Review Notes</h2>
              <div className="mt-4 space-y-3 text-sm">
                <StatusRow label="Audio" value={book.audioStatus} />
                <StatusRow label="Text / Content" value={book.contentStatus} />
                <StatusRow label="Subtitles" value={book.subtitleStatus} />
                <StatusRow label="Resource package" value={book.files} />
              </div>
            </section>
          </aside>
        </div>
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

function StatusRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
      <span className="font-semibold text-slate-500">{label}</span>
      <span className="font-extrabold text-slate-900">{value}</span>
    </div>
  );
}
