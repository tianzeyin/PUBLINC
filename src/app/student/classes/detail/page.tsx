"use client";

import ProgressBar from "@/components/student/ProgressBar";
import { assignedCourses, libraryBooks, studentProfile } from "@/data/studentMockData";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function StudentClassDetailPage() {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("course") ?? "course-1";
  const course = assignedCourses.find((item) => item.id === courseId) ?? assignedCourses[0];
  const assignedBooks = libraryBooks.slice(0, course.bookCount ? Math.min(course.bookCount, libraryBooks.length) : libraryBooks.length);

  return (
    <div>
      <div className="mb-6">
        <Link href="/student/classes" className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to My Classes
        </Link>
        <h1 className="text-2xl font-extrabold text-slate-900">{course.title}</h1>
        <p className="mt-1 text-sm text-slate-500">{studentProfile.class} • Teacher: {course.teacher}</p>
      </div>

      <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-blue-600">Course / Class Detail</p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-900">{course.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              This class includes assigned reading and audio practice tasks. Students can listen to audio, read along with content, and track progress.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <InfoTile label="Assigned Books" value={course.bookCount ? `${course.bookCount}` : `${course.taskCount} tasks`} />
              <InfoTile label="Teacher" value={course.teacher} />
              <InfoTile label="Student Class" value={studentProfile.class} />
            </div>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <ProgressBar progress={course.progress} colorClass="bg-blue-500" heightClass="h-3" />
            <Link
              href="/student/library"
              className="mt-5 block rounded-xl bg-blue-600 px-4 py-2.5 text-center text-sm font-bold text-white shadow-sm hover:bg-blue-700"
            >
              Open Books / Audio
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-800">
          <span className="inline-block h-5 w-1 rounded-full bg-emerald-500" />
          Assigned Audio Books
        </h2>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="divide-y divide-slate-100">
            {assignedBooks.map((book) => (
              <div key={book.id} className="grid grid-cols-[1fr_90px_110px_120px] items-center gap-4 px-5 py-4">
                <div>
                  <h3 className="font-bold text-slate-900">{book.title}</h3>
                  <div className="mt-1 h-1.5 w-32 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full rounded-full bg-blue-500" style={{ width: `${book.progress}%` }} />
                  </div>
                </div>
                <span className="rounded-lg bg-blue-50 px-2 py-1 text-center text-xs font-bold text-blue-700">Level {book.level}</span>
                <span className="text-sm font-semibold text-slate-500">{book.status}</span>
                <Link href={`/student/library?book=${book.id}`} className="rounded-xl bg-blue-600 px-4 py-2 text-center text-sm font-bold text-white shadow-sm hover:bg-blue-700">
                  Play
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-800">
          <span className="inline-block h-5 w-1 rounded-full bg-blue-500" />
          Class Video Recordings
        </h2>
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            { title: "Week 1 Reading Introduction", date: "2026-05-04", duration: "38 min" },
            { title: "Audio Practice Review", date: "2026-05-06", duration: "42 min" },
            { title: "Follow-Reading Feedback Class", date: "2026-05-08", duration: "35 min" },
          ].map((video) => (
            <article key={video.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex aspect-video items-center justify-center bg-slate-900 text-white">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                  <svg className="ml-1 h-7 w-7" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-extrabold text-slate-900">{video.title}</h3>
                <p className="mt-1 text-sm font-medium text-slate-500">{video.date} • {video.duration}</p>
                <button type="button" className="mt-4 rounded-xl bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 hover:bg-blue-100">
                  Watch Recording
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
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
