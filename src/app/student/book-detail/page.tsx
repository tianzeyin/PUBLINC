"use client";

import BookCard from "@/components/student/BookCard";
import { libraryBooks } from "@/data/studentMockData";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const bookDetails: Record<string, { course: string; description: string; readingStatus: string }> = {
  "book-1": {
    course: "English Reading Level 1",
    readingStatus: "In Progress",
    description:
      "A short reading book designed to help students improve vocabulary, reading comprehension, listening skills, and pronunciation practice. Follow the journey of a young prince who visits various planets in space, including Earth, and addresses themes of loneliness, friendship, love, and loss.",
  },
  "book-2": {
    course: "English Reading Level 1",
    readingStatus: "Not Started",
    description:
      "A friendly collection of short stories for early readers, with simple vocabulary, clear sentence patterns, and audio support for independent practice.",
  },
  "book-3": {
    course: "Reading Extension Course",
    readingStatus: "Completed",
    description:
      "A reading extension title adapted for intermediate learners, combining classic story scenes with comprehension tasks and follow-reading practice.",
  },
  "book-4": {
    course: "Audio Reading Practice",
    readingStatus: "In Progress",
    description:
      "A science-themed reader that helps students build listening confidence, topic vocabulary, and structured reading fluency through guided audio practice.",
  },
};

export default function BookDetailPage() {
  const searchParams = useSearchParams();
  const bookId = searchParams.get("book") ?? "book-1";
  const book = libraryBooks.find((item) => item.id === bookId) ?? libraryBooks[0];
  const detail = bookDetails[book.id] ?? bookDetails["book-1"];

  return (
    <div>
      <div className="mb-6">
        <Link href="/student/library" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 mb-4">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Library
        </Link>
        <h1 className="text-2xl font-extrabold text-slate-900">Book Detail</h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col md:flex-row gap-8">
             <div className={`w-32 h-40 flex-shrink-0 rounded-xl flex items-center justify-center text-6xl shadow-sm ${book.coverColor}`}>
                {book.coverIcon}
             </div>
             
             <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">{book.title}</h2>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-blue-50 text-blue-700 text-xs font-bold px-2 py-1 rounded border border-blue-100">Level {book.level}</span>
                      <span className="text-sm font-medium text-slate-500">Course: {detail.course}</span>
                    </div>
                  </div>
                  <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-8">
                  {detail.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link href="/student/player" className="px-6 py-3 btn-primary text-white font-semibold rounded-xl shadow-sm flex items-center gap-2">
                    <span className="text-lg">📖</span> Start Reading
                  </Link>
                  <button className="px-6 py-3 bg-white border border-slate-200 text-slate-700 font-semibold rounded-xl shadow-sm hover:bg-slate-50 flex items-center gap-2">
                    <span className="text-lg">🎧</span> Play Original Audio
                  </button>
                </div>
             </div>
          </div>
        </div>

        {/* Right Column: Summary Card */}
        <div className="lg:col-span-1">
          <h3 className="font-bold text-slate-800 mb-3">Your Progress</h3>
          <BookCard 
            id={book.id}
            title={book.title}
            level={book.level}
            status={book.status}
            progress={book.progress}
            coverColor={book.coverColor}
            coverIcon={book.coverIcon}
          />
          <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Reading Status</p>
            <p className="mt-1 text-sm font-extrabold text-slate-800">{detail.readingStatus}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
