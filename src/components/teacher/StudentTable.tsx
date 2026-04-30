import { students } from "@/data/teacherMockData";

export default function StudentTable({
  preview = false,
  onViewDetail,
}: {
  preview?: boolean;
  onViewDetail?: () => void;
}) {
  const rows = preview ? students.slice(0, 3) : students;

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[820px] border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
              <th className="p-4 pl-6">Student name</th>
              <th className="p-4">Class</th>
              <th className="p-4">Reading progress</th>
              <th className="p-4">Total reading time</th>
              <th className="p-4">Account status</th>
              <th className="p-4">Last active time</th>
              <th className="p-4 pr-6 text-right">{preview ? "Student" : "Detail"}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((student) => (
              <tr key={student.id} className="text-sm transition-colors hover:bg-slate-50/60">
                <td className="p-4 pl-6 font-bold text-slate-900">{student.name}</td>
                <td className="p-4 text-slate-600">{student.className}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-20 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full rounded-full bg-emerald-500" style={{ width: `${student.progress}%` }} />
                    </div>
                    <span className="text-xs font-bold text-slate-600">{student.progress}%</span>
                  </div>
                </td>
                <td className="p-4 text-slate-600">{student.totalReadingTime}</td>
                <td className="p-4">
                  <span
                    className={`rounded-lg px-2 py-1 text-xs font-bold ${
                      student.status === "Active" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {student.status}
                  </span>
                </td>
                <td className="p-4 text-slate-500">{student.lastActive}</td>
                <td className="p-4 pr-6 text-right">
                  <button
                    type="button"
                    onClick={onViewDetail}
                    className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700 transition-colors hover:bg-blue-100"
                  >
                    {preview ? "View Student" : "View Detail"}
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
