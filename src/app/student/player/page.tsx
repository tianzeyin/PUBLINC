"use client";

import StudentAudioBar from "@/components/student/StudentAudioBar";
import { audioBookDetails, libraryBooks } from "@/data/studentMockData";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function PlayerPage() {
  const searchParams = useSearchParams();
  const initialBookId = searchParams.get("book");
  const [selectedBookId, setSelectedBookId] = useState<string | null>(initialBookId);
  const selectedBook = libraryBooks.find((book) => book.id === selectedBookId);
  const selectedDetails = selectedBook ? audioBookDetails[selectedBook.id] : null;

  return (
    <div className={selectedBook && selectedDetails ? "pb-32" : ""}>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Reading / Audio Player</h1>
          <p className="mt-1 text-sm text-slate-500">Choose an audio book. The player stays at the bottom while you browse.</p>
        </div>
        <Link href="/student/library" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Available Books
        </Link>
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-extrabold text-slate-900">Audio Playlist</h2>
            <p className="mt-1 text-sm text-slate-500">Press play to open the bottom player menu.</p>
          </div>
          <div className="text-xs font-semibold text-slate-500">{libraryBooks.length} books available</div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200">
          {libraryBooks.map((book) => {
            const isSelected = selectedBookId === book.id;
            return (
              <button
                key={book.id}
                type="button"
                onClick={() => setSelectedBookId(book.id)}
                className={`grid w-full grid-cols-[44px_1fr_88px_110px] items-center gap-4 border-b border-slate-100 px-4 py-3 text-left transition-colors last:border-b-0 hover:bg-slate-50 ${
                  isSelected ? "bg-blue-50/70" : "bg-white"
                }`}
              >
                <div className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-extrabold ${isSelected ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"}`}>
                  {isSelected ? "▶" : "♪"}
                </div>
                <div className="min-w-0">
                  <h3 className="truncate font-extrabold text-slate-900">{book.title}</h3>
                  <div className="mt-1 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full rounded-full bg-blue-500" style={{ width: `${book.progress}%` }} />
                  </div>
                </div>
                <span className="rounded-lg bg-blue-50 px-2 py-1 text-center text-xs font-bold text-blue-700">Level {book.level}</span>
                <span className="text-sm font-semibold text-slate-500">{isSelected ? "Playing" : book.status}</span>
              </button>
            );
          })}
        </div>
      </section>

      {!selectedBook || !selectedDetails ? (
        <section className="mt-6 rounded-2xl border border-dashed border-blue-200 bg-blue-50/60 p-10 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-lg font-extrabold text-blue-700 shadow-sm">
            ▶
          </div>
          <h2 className="text-xl font-extrabold text-slate-900">Press play to start listening</h2>
          <p className="mt-2 text-sm text-slate-600">The bottom player menu appears after you select a book.</p>
        </section>
      ) : (
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-bold text-blue-600">{selectedDetails.courseName}</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-900">{selectedBook.title}</h2>
          <p className="mt-1 text-sm font-medium text-slate-500">{selectedDetails.chapter}</p>
          <p className="mt-4 text-sm text-slate-600">
            Audio is playing in the bottom menu. Use Show Content to open the book cover and text while the player stays in place.
          </p>
        </section>
      )}

      {selectedBook && selectedDetails && (
        <StudentAudioBar
          bookId={selectedBook.id}
          title={selectedBook.title}
          courseName={selectedDetails.courseName}
          current={selectedDetails.current}
          duration={selectedDetails.duration}
          progress={selectedBook.progress}
        />
      )}
    </div>
  );
}
