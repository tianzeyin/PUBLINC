import { institutionProfile } from "@/data/institutionMockData";

export default function InstitutionProfileCard() {
  return (
    <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-center">
        <div className="flex items-center gap-5">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border-4 border-blue-50 bg-gradient-to-br from-blue-100 to-emerald-100 text-2xl font-extrabold text-blue-700 shadow-sm">
            BFS
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">{institutionProfile.name}</h2>
            <p className="mt-1 text-sm font-medium text-slate-500">Contact person: {institutionProfile.contactPerson}</p>
            <span className="mt-3 inline-flex rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">
              {institutionProfile.status}
            </span>
          </div>
        </div>

        <div className="grid flex-1 gap-3 lg:grid-cols-2">
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Authorized Courses</p>
            <p className="mt-1 text-sm font-bold leading-relaxed text-slate-800">{institutionProfile.authorizedCoursesSummary}</p>
          </div>
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-blue-600">Account Validity</p>
            <p className="mt-1 text-sm font-bold text-blue-950">{institutionProfile.accountValidity}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
