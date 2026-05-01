import Link from "next/link";
import ProgressBar from "./ProgressBar";

interface CourseCardProps {
  id: string;
  title: string;
  teacher: string;
  progress: number;
  bookCount?: number;
  taskCount?: number;
}

export default function CourseCard({
  id,
  title,
  teacher,
  progress,
  bookCount,
  taskCount,
}: CourseCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center text-xl shadow-sm border border-indigo-100/50 flex-shrink-0">
          📚
        </div>
        <div className="bg-slate-50 text-slate-500 text-xs font-medium px-2.5 py-1 rounded-md border border-slate-100">
          Teacher: {teacher}
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-slate-800 mb-1 leading-tight line-clamp-2">
        {title}
      </h3>
      
      <p className="text-sm text-slate-500 mb-5 font-medium">
        {bookCount ? `${bookCount} assigned books` : `${taskCount} practice tasks`}
      </p>

      <div className="mt-auto">
        <div className="mb-5">
          <ProgressBar progress={progress} colorClass="bg-indigo-500" />
        </div>

        <Link
          href={`/student/classes/detail?course=${id}`}
          className="block w-full py-2.5 text-center text-sm font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-colors border border-indigo-100/50"
        >
          Enter Course
        </Link>
      </div>
    </div>
  );
}
