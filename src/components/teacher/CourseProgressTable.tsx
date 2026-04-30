import { courseBookProgress } from "@/data/teacherMockData";

export default function CourseProgressTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
              <th className="p-4 pl-6">Course name</th>
              <th className="p-4">Book title</th>
              <th className="p-4">Students started</th>
              <th className="p-4">Students completed</th>
              <th className="p-4">Average progress</th>
              <th className="p-4">Average follow-reading score</th>
              <th className="p-4 pr-6 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {courseBookProgress.map((row) => (
              <tr key={row.id} className="text-sm transition-colors hover:bg-slate-50/60">
                <td className="p-4 pl-6 font-bold text-slate-900">{row.courseName}</td>
                <td className="p-4 font-semibold text-slate-700">{row.bookTitle}</td>
                <td className="p-4 text-slate-600">{row.studentsStarted}</td>
                <td className="p-4 text-slate-600">{row.studentsCompleted}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-20 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full rounded-full bg-emerald-500" style={{ width: `${row.averageProgress}%` }} />
                    </div>
                    <span className="text-xs font-bold text-slate-600">{row.averageProgress}%</span>
                  </div>
                </td>
                <td className="p-4 font-extrabold text-indigo-600">{row.averageScore}</td>
                <td className="p-4 pr-6 text-right">
                  <button type="button" className="rounded-lg bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700 hover:bg-emerald-100">
                    View Progress
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
