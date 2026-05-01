import Link from "next/link";

export default function StudentAudioBar({
  bookId,
  title,
  courseName,
  current,
  duration,
  progress,
  showContentLink = true,
}: {
  bookId: string;
  title: string;
  courseName: string;
  current: string;
  duration: string;
  progress: number;
  showContentLink?: boolean;
}) {
  const playerProgress = Math.max(progress, 15);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-10px_30px_rgba(15,23,42,0.10)] backdrop-blur md:left-64">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 lg:flex-row lg:items-center">
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-bold text-blue-600">{courseName}</p>
          <h3 className="truncate text-sm font-extrabold text-slate-900">{title}</h3>
        </div>

        <div className="flex flex-1 items-center gap-4 lg:max-w-xl">
          <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-700">
            <svg className="ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </button>
          <div className="flex-1">
            <div className="mb-1 flex justify-between text-xs font-medium text-slate-500">
              <span>{current}</span>
              <span>{duration}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-blue-500" style={{ width: `${playerProgress}%` }} />
            </div>
          </div>
        </div>

        {showContentLink && (
          <Link
            href={`/student/book-content?book=${bookId}`}
            className="shrink-0 rounded-xl border border-blue-100 bg-blue-50 px-4 py-2.5 text-center text-sm font-bold text-blue-700 hover:bg-blue-100"
          >
            Show Content
          </Link>
        )}
      </div>
    </div>
  );
}
