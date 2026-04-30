"use client";

import { audioPlayerData, libraryBooks } from "@/data/studentMockData";
import Link from "next/link";
import { useState } from "react";

const playerDetails: Record<
  string,
  { courseId: string; courseName: string; chapter: string; text: string[]; duration: string; current: string }
> = {
  "book-1": {
    courseId: "COURSE-ENG-01",
    courseName: "English Reading Level 1",
    chapter: "Chapter 1: The Journey Begins...",
    duration: "18:40",
    current: "02:15",
    text: [
      "Once when I was six years old I saw a magnificent picture in a book, called True Stories from Nature, about the primeval forest.",
      "In the book it said: \"Boa constrictors swallow their prey whole, without chewing it. After that they are not able to move.\"",
      "I pondered deeply, then, over the adventures of the jungle. And after some work with a colored pencil I succeeded in making my first drawing.",
    ],
  },
  "book-2": {
    courseId: "COURSE-ENG-01",
    courseName: "English Reading Level 1",
    chapter: "Unit 1: Forest Friends",
    duration: "12:10",
    current: "00:00",
    text: [
      "The small rabbit looked across the green field and listened carefully.",
      "A bird sang from the tall tree, and the rabbit followed the sound through the morning light.",
      "Every animal in the forest had a story to tell.",
    ],
  },
  "book-3": {
    courseId: "COURSE-EXT-01",
    courseName: "Reading Extension Course",
    chapter: "Chapter 2: Across the Mountain",
    duration: "24:30",
    current: "24:30",
    text: [
      "The travelers crossed the high mountain road before sunset.",
      "They carried books, food, and a promise to keep moving forward.",
      "The journey was difficult, but each step made them stronger.",
    ],
  },
  "book-4": {
    courseId: "COURSE-AUD-01",
    courseName: "Audio Reading Practice",
    chapter: "Lesson 3: How Plants Grow",
    duration: "16:25",
    current: "05:45",
    text: [
      "Plants need sunlight, water, and air to grow well.",
      "Roots take water from the soil, while leaves use sunlight to make food.",
      "When students observe a plant every day, they can see small changes become big changes.",
    ],
  },
};

export default function PlayerPage() {
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const selectedBook = libraryBooks.find((book) => book.id === selectedBookId);
  const selectedDetails = selectedBook ? playerDetails[selectedBook.id] : null;
  const progress = selectedBook?.progress ?? audioPlayerData.progress;

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Reading / Audio Player</h1>
          <p className="mt-1 text-sm text-slate-500">Choose a book first, then start listening and reading.</p>
        </div>
        <Link href="/student/library" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Available Books
        </Link>
      </div>

      <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-extrabold text-slate-900">Select a Book</h2>
            <p className="mt-1 text-sm text-slate-500">Audio controls appear after a book is selected.</p>
          </div>
          <div className="text-xs font-semibold text-slate-500">{libraryBooks.length} books available</div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {libraryBooks.map((book) => {
            const isSelected = selectedBookId === book.id;
            return (
              <button
                key={book.id}
                type="button"
                onClick={() => setSelectedBookId(book.id)}
                className={`rounded-2xl border bg-white p-4 text-left shadow-sm transition-all hover:shadow-md ${
                  isSelected ? "border-blue-300 ring-2 ring-blue-100" : "border-slate-200"
                }`}
              >
                <div className={`mb-4 flex h-28 items-center justify-center rounded-xl text-4xl ${book.coverColor}`}>
                  {book.coverIcon}
                </div>
                <h3 className="font-extrabold text-slate-900">{book.title}</h3>
                <div className="mt-2 flex items-center justify-between text-xs font-bold">
                  <span className="rounded-lg bg-blue-50 px-2 py-1 text-blue-700">Level {book.level}</span>
                  <span className="text-slate-500">{book.status}</span>
                </div>
                <div className="mt-4">
                  <div className="mb-1 flex justify-between text-xs font-bold text-slate-500">
                    <span>Progress</span>
                    <span>{book.progress}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full rounded-full bg-blue-500" style={{ width: `${book.progress}%` }} />
                  </div>
                </div>
                <div className={`mt-4 rounded-xl px-3 py-2 text-center text-sm font-bold ${isSelected ? "bg-blue-600 text-white" : "bg-slate-50 text-slate-700"}`}>
                  {isSelected ? "Selected" : "Start Audio"}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {!selectedBook || !selectedDetails ? (
        <section className="rounded-2xl border border-dashed border-blue-200 bg-blue-50/60 p-10 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-lg font-extrabold text-blue-700 shadow-sm">
            ▶
          </div>
          <h2 className="text-xl font-extrabold text-slate-900">Select a book to open the audio player</h2>
          <p className="mt-2 text-sm text-slate-600">The reading text, playback controls, and learning data panel will show here.</p>
        </section>
      ) : (
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className={`flex h-24 w-20 shrink-0 items-center justify-center rounded-xl text-4xl ${selectedBook.coverColor}`}>
                  {selectedBook.coverIcon}
                </div>
                <div>
                  <p className="text-sm font-bold text-blue-600">{selectedDetails.courseName}</p>
                  <h2 className="mt-1 text-2xl font-bold text-slate-900">{selectedBook.title}</h2>
                  <p className="mt-1 text-sm font-medium text-slate-500">{selectedDetails.chapter}</p>
                </div>
              </div>

              <div className="space-y-5 text-lg leading-loose text-slate-700">
                {selectedDetails.text.map((paragraph, index) => (
                  <p key={paragraph} className={index === 1 ? "rounded-md bg-yellow-50 px-2" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-4">
                <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-md transition-colors hover:bg-blue-700">
                  <svg className="ml-1 h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>

                <div className="flex-1">
                  <div className="mb-1 flex justify-between text-xs font-medium text-slate-500">
                    <span>{selectedDetails.current}</span>
                    <span>{selectedDetails.duration}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full bg-blue-500" style={{ width: `${Math.max(progress, 15)}%` }} />
                  </div>
                </div>
              </div>

              <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-medium">
                <span className="text-slate-500">Audio Progress: {Math.max(progress, 15)}%</span>
                <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
                  Continue from last position
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="h-full rounded-2xl border border-slate-700 bg-slate-800 p-6 text-slate-300 shadow-sm">
              <div className="mb-6 flex items-center gap-2 border-b border-slate-700 pb-4">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <h3 className="text-sm font-bold tracking-wide text-white">Learning Data Saved From This Page</h3>
              </div>

              <div className="space-y-4 text-sm font-mono">
                <div><span className="text-slate-500">Student ID:</span> <span className="text-emerald-400">{audioPlayerData.studentId}</span></div>
                <div><span className="text-slate-500">Book ID:</span> <span className="text-blue-400">{selectedBook.id}</span></div>
                <div><span className="text-slate-500">Course ID:</span> <span className="text-amber-400">{selectedDetails.courseId}</span></div>
                <div className="my-2 h-px bg-slate-700" />
                <div><span className="text-slate-500">Listening Time:</span> <span className="text-white">{audioPlayerData.listeningTime}</span></div>
                <div><span className="text-slate-500">Reading Time:</span> <span className="text-white">{audioPlayerData.readingTime}</span></div>
                <div><span className="text-slate-500">Progress:</span> <span className="text-white">{progress}%</span></div>
                <div><span className="text-slate-500">Status:</span> <span className="text-white">{selectedBook.status}</span></div>
                <div><span className="text-slate-500">Last Position:</span> <span className="text-white">{audioPlayerData.lastPosition}</span></div>
                <div className="my-2 h-px bg-slate-700" />
                <div><span className="text-slate-500">Sync Time:</span> <span className="text-slate-400">{audioPlayerData.timestamp}</span></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
