const toneClasses: Record<string, string> = {
  blue: "bg-blue-50 text-blue-700 border-blue-100",
  emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
  cyan: "bg-cyan-50 text-cyan-700 border-cyan-100",
  indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
  green: "bg-green-50 text-green-700 border-green-100",
  sky: "bg-sky-50 text-sky-700 border-sky-100",
};

export default function TeacherStatCard({
  label,
  value,
  detail,
  tone = "emerald",
}: {
  label: string;
  value: string;
  detail?: string;
  tone?: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className={`mb-4 inline-flex rounded-xl border px-2.5 py-1 text-xs font-bold ${toneClasses[tone] ?? toneClasses.emerald}`}>
        Learning metric
      </div>
      <p className="text-sm font-semibold text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-extrabold text-slate-900">{value}</p>
      {detail && <p className="mt-1 text-xs font-medium text-slate-500">{detail}</p>}
    </div>
  );
}
