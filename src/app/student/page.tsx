import StudentProfileCard from "@/components/student/StudentProfileCard";
import CourseCard from "@/components/student/CourseCard";
import { assignedCourses } from "@/data/studentMockData";
import Link from "next/link";

export default function StudentHomePage() {
  return (
    <div>
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Dashboard</h1>
          <p className="text-slate-500 text-sm mt-1">Welcome back to your learning portal.</p>
        </div>
        <div className="hidden sm:flex gap-3">
          <Link href="/student/library" className="btn-primary text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-sm">
            Open Library
          </Link>
          <Link href="/student/report" className="bg-white border border-slate-200 text-slate-700 text-sm font-semibold px-4 py-2 rounded-xl hover:bg-slate-50 shadow-sm">
            View Report
          </Link>
        </div>
      </div>

      <StudentProfileCard />

      <div className="mb-8">
        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-indigo-500 rounded-full inline-block"></span>
          My Classes / Assigned Courses
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {assignedCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
      
      {/* Quick access/continue reading mock section */}
      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-emerald-500 rounded-full inline-block"></span>
          Continue Reading
        </h2>
        <div className="bg-white rounded-2xl border border-slate-200 p-5 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
             <div className="w-14 h-16 bg-blue-100 rounded flex items-center justify-center text-2xl shadow-sm border border-blue-200/50">🤴</div>
             <div>
               <h3 className="font-bold text-slate-800">The Little Prince</h3>
               <p className="text-sm text-slate-500">English Reading Level 1 • 60% Complete</p>
             </div>
          </div>
          <Link href="/student/library?book=book-1" className="px-5 py-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-semibold text-sm rounded-xl transition-colors border border-emerald-100">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}
