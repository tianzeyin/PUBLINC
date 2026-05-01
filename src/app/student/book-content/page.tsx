"use client";

import StudentAudioBar from "@/components/student/StudentAudioBar";
import { audioBookDetails, libraryBooks } from "@/data/studentMockData";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function StudentBookContentPage() {
  const searchParams = useSearchParams();
  const bookId = searchParams.get("book") ?? "book-1";
  const book = libraryBooks.find((item) => item.id === bookId) ?? libraryBooks[0];
  const details = audioBookDetails[book.id] ?? audioBookDetails["book-1"];

  return (
    <div className="pb-32">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Book Content</h1>
          <p className="mt-1 text-sm text-slate-500">Read along while the audio player remains at the bottom.</p>
        </div>
        <Link href={`/student/library?book=${book.id}`} className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Books / Audio
        </Link>
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className={`flex h-40 w-28 shrink-0 items-center justify-center rounded-xl text-6xl shadow-sm ${book.coverColor}`}>
            {book.coverIcon}
          </div>
          <div>
            <p className="text-sm font-bold text-blue-600">{details.courseName}</p>
            <h2 className="mt-1 text-3xl font-extrabold text-slate-900">{book.title}</h2>
            <p className="mt-2 text-sm font-semibold text-slate-500">{details.chapter}</p>
          </div>
        </div>

        <div className="space-y-5 text-lg leading-loose text-slate-700">
          {details.text.map((paragraph, index) => (
            <p key={paragraph} className={index === 1 ? "rounded-md bg-yellow-50 px-2" : ""}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <StudentAudioBar
        bookId={book.id}
        title={book.title}
        courseName={details.courseName}
        current={details.current}
        duration={details.duration}
        progress={book.progress}
        showContentLink={false}
      />
    </div>
  );
}
