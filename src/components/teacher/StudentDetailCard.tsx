import { studentDetail } from "@/data/teacherMockData";
import ProgressBar from "./ProgressBar";

export default function StudentDetailCard() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
        <div className="flex items-center gap-5">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-4 border-blue-50 bg-gradient-to-br from-blue-100 to-emerald-100 text-2xl font-extrabold text-blue-700">
            LM
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">{studentDetail.name}</h2>
            <p className="mt-1 text-sm font-medium text-slate-500">{studentDetail.phone}</p>
            <p className="mt-3 text-sm font-semibold text-slate-700">{studentDetail.institution}</p>
          </div>
        </div>

        <div className="grid flex-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <InfoTile label="Class" value={studentDetail.className} />
          <InfoTile label="Completed Books" value={`${studentDetail.completedBooks}`} />
          <InfoTile label="Incomplete Books" value={`${studentDetail.incompleteBooks}`} />
          <InfoTile label="Last Active" value={studentDetail.lastActive} />
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
          <ProgressBar progress={studentDetail.readingProgress} label="Reading Progress" colorClass="bg-blue-500" heightClass="h-2.5" />
        </div>
        <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-emerald-700">Assigned Courses / Readings</p>
          <div className="flex flex-wrap gap-2">
            {studentDetail.assignedCourses.map((course) => (
              <span key={course} className="rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-emerald-700 shadow-sm">
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-extrabold text-slate-800">{value}</p>
    </div>
  );
}
