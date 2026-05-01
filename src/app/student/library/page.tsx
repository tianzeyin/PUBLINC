"use client";

import StudentAudioBar from "@/components/student/StudentAudioBar";
import { assignedCourses, audioBookDetails, libraryBooks } from "@/data/studentMockData";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function LibraryPage() {
  const searchParams = useSearchParams();
  const initialBookId = searchParams.get("book");
  const [selectedBookId, setSelectedBookId] = useState<string | null>(initialBookId);
  const selectedBook = libraryBooks.find((book) => book.id === selectedBookId);
  const selectedDetails = selectedBook ? audioBookDetails[selectedBook.id] : null;
  const courseFolders = assignedCourses.map((course, index) => ({
    ...course,
    books: libraryBooks.filter((_, bookIndex) => bookIndex % assignedCourses.length === index || bookIndex === index),
  }));
  const customPlaylist = libraryBooks.filter((book) => book.status === "In Progress" || book.status === "Completed");

  return (
    <div className={selectedBook && selectedDetails ? "pb-32" : ""}>
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Books / Audio</h1>
          <p className="text-slate-500 text-sm mt-1">Search assigned audio books, press play, and keep listening from the bottom player.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl hover:bg-slate-50 shadow-sm flex items-center gap-2">
            <span className="text-red-500">❤️</span> Favorite Books
          </button>
          <button className="px-4 py-2 btn-primary text-white text-sm font-semibold rounded-xl shadow-sm">
            View All Assigned Books
          </button>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input 
            type="text" 
            placeholder="Search books..." 
            className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex gap-3">
          <select className="block w-full pl-3 pr-10 py-2.5 text-slate-700 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
            <option>Filter by level/category</option>
            <option>Level A1</option>
            <option>Level A2</option>
            <option>Level B1</option>
          </select>
          <select className="block w-full pl-3 pr-10 py-2.5 text-slate-700 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
            <option>Filter by course</option>
            <option>English Reading Level 1</option>
            <option>Audio Reading Practice</option>
          </select>
          <select className="block w-full pl-3 pr-10 py-2.5 text-slate-700 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
            <option>Sort books</option>
            <option>Most Recent</option>
            <option>Progress: High to Low</option>
          </select>
        </div>
      </div>

      <div className="space-y-5">
        {courseFolders.map((folder) => (
          <section key={folder.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 bg-slate-50 px-5 py-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-lg">▣</div>
                  <div>
                    <h2 className="font-extrabold text-slate-900">{folder.title}</h2>
                    <p className="text-xs font-semibold text-slate-500">Teacher: {folder.teacher} • {folder.books.length} materials</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-blue-700">{folder.progress}% course progress</span>
              </div>
            </div>
            <PlaylistRows books={folder.books} selectedBookId={selectedBookId} onSelect={setSelectedBookId} />
          </section>
        ))}

        <section className="overflow-hidden rounded-2xl border border-emerald-200 bg-white shadow-sm">
          <div className="border-b border-emerald-100 bg-emerald-50 px-5 py-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-extrabold text-slate-900">My Playlist</h2>
                <p className="text-xs font-semibold text-slate-500">Custom playlist built from your current and completed materials.</p>
              </div>
              <button type="button" className="rounded-xl bg-white px-4 py-2 text-sm font-bold text-emerald-700 shadow-sm hover:bg-emerald-100">
                Create Playlist
              </button>
            </div>
          </div>
          <PlaylistRows books={customPlaylist} selectedBookId={selectedBookId} onSelect={setSelectedBookId} />
        </section>
      </div>

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

function PlaylistRows({
  books,
  selectedBookId,
  onSelect,
}: {
  books: typeof libraryBooks;
  selectedBookId: string | null;
  onSelect: (bookId: string) => void;
}) {
  return (
    <div>
      <div className="hidden border-b border-slate-100 px-5 py-3 sm:block">
        <div className="grid grid-cols-[44px_1fr_90px_110px_120px] items-center gap-4 text-xs font-bold uppercase tracking-wide text-slate-500">
          <span>#</span>
          <span>Audio title</span>
          <span>Level</span>
          <span>Status</span>
          <span className="text-right">Action</span>
        </div>
      </div>
      <div className="divide-y divide-slate-100">
        {books.map((book, index) => {
          const isSelected = selectedBookId === book.id;
          return (
            <div key={book.id} className={`grid grid-cols-[44px_1fr_90px_110px_120px] items-center gap-4 px-5 py-4 transition-colors hover:bg-slate-50/70 ${isSelected ? "bg-blue-50/70" : ""}`}>
              <button
                type="button"
                onClick={() => onSelect(book.id)}
                className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-extrabold ${isSelected ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-700"}`}
                aria-label={`Play ${book.title}`}
              >
                {isSelected ? "▶" : index + 1}
              </button>
              <div className="min-w-0">
                <button type="button" onClick={() => onSelect(book.id)} className="block w-full truncate text-left font-bold text-slate-900">
                  {book.title}
                </button>
                <div className="mt-1 flex items-center gap-2">
                  <div className="h-1.5 w-28 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full rounded-full bg-blue-500" style={{ width: `${book.progress}%` }} />
                  </div>
                  <span className="text-xs font-semibold text-slate-500">{book.progress}%</span>
                </div>
              </div>
              <span className="rounded-lg bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700">Level {book.level}</span>
              <span className="text-sm font-semibold text-slate-500">{isSelected ? "Playing" : book.status}</span>
              <div className="text-right">
                <button
                  type="button"
                  onClick={() => onSelect(book.id)}
                  className="inline-flex rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-blue-700"
                >
                  Play
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
