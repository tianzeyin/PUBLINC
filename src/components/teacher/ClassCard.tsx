import ProgressBar from "./ProgressBar";

export default function ClassCard({
  name,
  students,
  courses,
  averageProgress,
  activeToday,
  onViewDetail,
}: {
  name: string;
  students: number;
  courses: string[];
  averageProgress: number;
  activeToday: number;
  onViewDetail?: () => void;
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-emerald-600">Assigned Class</p>
          <h3 className="mt-1 text-lg font-extrabold text-slate-900">{name}</h3>
        </div>
        <div className="rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-2 text-center">
          <p className="text-lg font-extrabold text-emerald-700">{students}</p>
          <p className="text-[11px] font-semibold text-emerald-600">students</p>
        </div>
      </div>

      <div className="mb-5 min-h-12">
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-400">Assigned Courses</p>
        <div className="flex flex-wrap gap-2">
          {courses.map((course) => (
            <span key={course} className="rounded-lg bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600">
              {course}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto space-y-4">
        <ProgressBar progress={averageProgress} label="Average Progress" />
        <div className="flex items-center justify-between rounded-xl bg-sky-50 px-3 py-2 text-sm">
          <span className="font-semibold text-sky-700">Active today</span>
          <span className="font-extrabold text-sky-950">{activeToday}</span>
        </div>
        <button
          type="button"
          onClick={onViewDetail}
          className="w-full rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-2.5 text-sm font-bold text-emerald-700 transition-colors hover:bg-emerald-100"
        >
          View Class Detail
        </button>
      </div>
    </article>
  );
}
