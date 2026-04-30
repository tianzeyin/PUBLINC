export default function AuthorizationPanelMock() {
  const fields = ["Select institution", "Select books", "Select courses", "Select package", "Start date", "Expiry date"];

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-extrabold text-slate-900">Authorize Books / Courses / Packages</h3>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {fields.map((field) => (
          <div key={field} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-500">
            {field}
          </div>
        ))}
      </div>
      <button type="button" className="mt-4 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700">
        Save Authorization
      </button>
    </section>
  );
}
