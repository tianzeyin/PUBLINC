import Link from "next/link";
import ProgressBar from "./ProgressBar";

interface BookCardProps {
  id: string;
  title: string;
  level: string;
  status: string;
  progress: number;
  coverColor?: string;
  coverIcon?: string;
}

export default function BookCard({
  id,
  title,
  level,
  status,
  progress,
  coverColor = "bg-slate-100 text-slate-400",
  coverIcon = "📖",
}: BookCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col group hover:shadow-md transition-all">
      {/* Cover Area */}
      <div className={`h-40 flex items-center justify-center text-5xl relative ${coverColor}`}>
        {coverIcon}
        <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white backdrop-blur flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors shadow-sm">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
             <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur text-xs font-bold px-2 py-0.5 rounded shadow-sm text-slate-700">
          {level}
        </div>
      </div>
      
      {/* Info Area */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-bold text-slate-800 mb-1 leading-tight">{title}</h3>
        
        <div className="flex items-center gap-2 mb-4">
          <span className={`w-2 h-2 rounded-full ${status === 'Completed' ? 'bg-green-500' : status === 'In Progress' ? 'bg-blue-500' : 'bg-slate-300'}`}></span>
          <span className="text-xs font-medium text-slate-500">{status}</span>
        </div>

        <div className="mt-auto">
          <div className="mb-4">
             <ProgressBar progress={progress} colorClass={status === 'Completed' ? 'bg-green-500' : 'bg-blue-500'} />
          </div>
          <Link
            href={`/student/book-detail?book=${id}`}
            className="block w-full py-2 text-center text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors"
          >
            Open Book Detail
          </Link>
        </div>
      </div>
    </div>
  );
}
