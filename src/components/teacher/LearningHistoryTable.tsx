import { learningHistory } from "@/data/teacherMockData";

export default function LearningHistoryTable({
  preview = false,
  studentName,
  showStudentName = true,
}: {
  preview?: boolean;
  studentName?: string;
  showStudentName?: boolean;
}) {
  const filteredRows = studentName
    ? learningHistory.filter((row) => row.studentName === studentName)
    : learningHistory;
  const rows = preview ? filteredRows.slice(0, 3) : filteredRows;

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[980px] border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
              {showStudentName && <th className="p-4 pl-6">Student name</th>}
              <th className={showStudentName ? "p-4" : "p-4 pl-6"}>Book title</th>
              <th className="p-4">Course name</th>
              <th className="p-4">Reading date</th>
              <th className="p-4">Listening time</th>
              <th className="p-4">Reading time</th>
              <th className="p-4">Assigned completion percentage</th>
              <th className="p-4">Completion status</th>
              <th className="p-4 pr-6 text-right">Follow-reading score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row) => (
              <tr key={row.id} className="text-sm transition-colors hover:bg-slate-50/60">
                {showStudentName && <td className="p-4 pl-6 font-bold text-slate-900">{row.studentName}</td>}
                <td className={showStudentName ? "p-4 font-semibold text-slate-700" : "p-4 pl-6 font-semibold text-slate-700"}>{row.bookTitle}</td>
                <td className="p-4 text-slate-600">{row.courseName}</td>
                <td className="p-4 text-slate-500">{row.readingDate}</td>
                <td className="p-4 text-slate-600">{row.listeningTime}</td>
                <td className="p-4 text-slate-600">{row.readingTime}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-20 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full rounded-full bg-blue-500" style={{ width: `${row.completionPercentage}%` }} />
                    </div>
                    <span className="text-xs font-bold text-slate-600">{row.completionPercentage}%</span>
                  </div>
                </td>
                <td className="p-4">
                  <span
                    className={`rounded-lg px-2 py-1 text-xs font-bold ${
                      row.status === "Completed" ? "bg-emerald-50 text-emerald-700" : "bg-blue-50 text-blue-700"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="p-4 pr-6 text-right font-extrabold text-indigo-600">{row.score}</td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={showStudentName ? 9 : 8} className="p-6 text-center text-sm font-semibold text-slate-500">
                  No learning history for this student yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
