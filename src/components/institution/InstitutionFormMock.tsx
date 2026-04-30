export default function InstitutionFormMock({
  title,
  fields,
  actionLabel,
}: {
  title: string;
  fields: string[];
  actionLabel: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-base font-extrabold text-slate-900">{title}</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field} className="block">
            <span className="text-xs font-bold uppercase tracking-wide text-slate-400">{field}</span>
            <div className="mt-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-400">
              {field}
            </div>
          </label>
        ))}
      </div>
      <button type="button" className="mt-4 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-700">
        {actionLabel}
      </button>
    </div>
  );
}
