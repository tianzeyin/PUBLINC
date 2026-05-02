"use client";

import AdminLayout from "@/components/admin/AdminLayout";
import type { AdminView } from "@/components/admin/AdminSidebar";
import { resourceFiles } from "@/data/adminMockData";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminBookCreatePage() {
  const router = useRouter();
  const audioFiles = resourceFiles.filter((file) => file.type === "Audio");
  const contentFiles = resourceFiles.filter((file) => file.type === "Text Content" || file.type === "PDF" || file.name.endsWith(".docx"));
  const coverFiles = resourceFiles.filter((file) => file.type === "Cover Image");
  const subtitleFiles = resourceFiles.filter((file) => file.type === "Subtitle");
  const handleSelect = (view: AdminView) => {
    router.push(view === "dashboard" ? "/admin" : `/admin?section=${view}`);
  };

  return (
    <AdminLayout activeView="books" onSelect={handleSelect}>
      <div className="max-w-6xl">
        <Link href="/admin?section=books" className="mb-5 inline-flex text-sm font-bold text-blue-700 hover:text-blue-800">
          Back to Book Management
        </Link>

        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-blue-600">Create new book</p>
              <h1 className="mt-1 text-3xl font-extrabold text-slate-900">Assemble Book Resources</h1>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
                Create a book by combining book metadata with uploaded MP3 audio, PDF/text content, subtitles, and a book cover from Resource File Management.
              </p>
            </div>
            <Link href="/admin?section=resources" className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-2.5 text-sm font-bold text-blue-700 hover:bg-blue-100">
              Open File Management
            </Link>
          </div>
        </section>

        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <SectionTitle>Book Information</SectionTitle>
            <div className="grid gap-3 md:grid-cols-2">
              <MockField label="Book title" />
              <MockSelect label="Book level" value="A2" />
              <MockSelect label="Course / album" value="English Reading Level 1" />
              <MockSelect label="Reading status" value="Draft" />
              <div className="md:col-span-2">
                <MockTextArea label="Book description" />
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-4">
              <p className="text-sm font-extrabold text-slate-900">Creation rule</p>
              <p className="mt-1 text-sm font-semibold leading-relaxed text-slate-600">
                A new book record is created by naming the book and attaching at least one content resource, such as an MP3 audio file, a PDF/text file, or a cover image.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <SectionTitle>Upload New Files</SectionTitle>
            <div className="grid gap-3 sm:grid-cols-2">
              <UploadBox title="Upload MP3 audio" helper="MP3, WAV" />
              <UploadBox title="Upload PDF / text" helper="PDF, DOCX, TXT" />
              <UploadBox title="Upload book cover" helper="JPG, PNG" />
              <UploadBox title="Upload subtitles" helper="SRT, VTT" />
            </div>
            <p className="mt-4 text-xs font-semibold text-slate-500">
              These upload controls are visual placeholders. Uploaded files would appear in Resource File Management before being attached to a book.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
            <SectionTitle>Select Existing Resource Files</SectionTitle>
            <div className="grid gap-5 lg:grid-cols-4">
              <ResourcePicker title="Audio file" files={audioFiles} fallback="No MP3 selected" />
              <ResourcePicker title="PDF / content file" files={contentFiles} fallback="No PDF selected" />
              <ResourcePicker title="Book cover" files={coverFiles} fallback="No cover selected" />
              <ResourcePicker title="Subtitle file" files={subtitleFiles} fallback="No subtitle selected" />
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
            <SectionTitle>Book Assembly Preview</SectionTitle>
            <div className="grid gap-4 lg:grid-cols-[180px_1fr]">
              <div className="flex h-56 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-lg font-extrabold text-blue-700">
                Cover
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <PreviewItem label="Book title" value="New book title" />
                <PreviewItem label="Course / album" value="English Reading Level 1" />
                <PreviewItem label="Audio" value={audioFiles[0]?.name ?? "Select MP3 audio"} />
                <PreviewItem label="PDF / content" value={contentFiles[0]?.name ?? "Select PDF or text file"} />
                <PreviewItem label="Cover" value={coverFiles[0]?.name ?? "Select cover image"} />
                <PreviewItem label="Subtitles" value={subtitleFiles[0]?.name ?? "Optional subtitle file"} />
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700">
                Create Book
              </button>
              <button type="button" className="rounded-xl border border-blue-100 bg-blue-50 px-5 py-2.5 text-sm font-bold text-blue-700 hover:bg-blue-100">
                Save as Draft
              </button>
              <button type="button" className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50">
                Clear Selection
              </button>
            </div>
          </section>
        </div>
      </div>
    </AdminLayout>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-800">
      <span className="inline-block h-5 w-1 rounded-full bg-blue-500" />
      {children}
    </h2>
  );
}

function MockField({ label }: { label: string }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-400">{label}</span>
      <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-600 outline-none focus:border-blue-300 focus:bg-white" placeholder={label} />
    </label>
  );
}

function MockTextArea({ label }: { label: string }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-400">{label}</span>
      <textarea className="min-h-28 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-600 outline-none focus:border-blue-300 focus:bg-white" placeholder={label} />
    </label>
  );
}

function MockSelect({ label, value }: { label: string; value: string }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-400">{label}</span>
      <select defaultValue={value} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-600 outline-none focus:border-blue-300 focus:bg-white">
        <option>{value}</option>
      </select>
    </label>
  );
}

function UploadBox({ title, helper }: { title: string; helper: string }) {
  return (
    <div className="flex min-h-32 flex-col items-center justify-center rounded-2xl border border-dashed border-blue-200 bg-blue-50/70 p-4 text-center">
      <p className="text-sm font-extrabold text-blue-800">{title}</p>
      <p className="mt-1 text-xs font-semibold text-slate-500">{helper}</p>
      <button type="button" className="mt-3 rounded-xl bg-white px-3 py-2 text-xs font-bold text-blue-700 shadow-sm hover:bg-blue-100">
        Choose File
      </button>
    </div>
  );
}

function ResourcePicker({
  title,
  files,
  fallback,
}: {
  title: string;
  files: typeof resourceFiles;
  fallback: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="mb-3 text-sm font-extrabold text-slate-900">{title}</p>
      <div className="space-y-2">
        {(files.length > 0 ? files : [{ id: fallback, name: fallback, type: "", status: "Missing", size: "", uploadDate: "", book: "", course: "", uploadedBy: "" }]).map((file, index) => (
          <label key={file.id} className="flex items-start gap-3 rounded-xl bg-white p-3 shadow-sm">
            <input type="radio" name={title} defaultChecked={index === 0 && files.length > 0} className="mt-1 h-4 w-4 border-slate-300 text-blue-600" />
            <span className="min-w-0">
              <span className="block truncate text-sm font-bold text-slate-800">{file.name}</span>
              <span className="mt-0.5 block text-xs font-semibold text-slate-500">{file.status} {file.size ? `/ ${file.size}` : ""}</span>
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

function PreviewItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-2 truncate text-sm font-extrabold text-slate-900">{value}</p>
    </div>
  );
}
