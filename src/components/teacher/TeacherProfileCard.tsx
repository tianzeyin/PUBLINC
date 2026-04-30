import { teacherProfile } from "@/data/teacherMockData";

export default function TeacherProfileCard() {
  return (
    <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
        <div className="flex items-center gap-5">
          <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-4 border-emerald-50 bg-gradient-to-br from-emerald-100 to-sky-100 text-3xl font-bold text-emerald-700 shadow-sm">
            MZ
            <span className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full border-2 border-white bg-emerald-500" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">{teacherProfile.name}</h2>
            <p className="mt-1 text-sm font-medium text-slate-500">@{teacherProfile.username}</p>
            <p className="mt-3 text-sm font-semibold text-slate-700">{teacherProfile.institution}</p>
          </div>
        </div>

        <div className="grid flex-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-blue-600">Assigned Classes</p>
            <p className="mt-1 text-xl font-extrabold text-blue-950">{teacherProfile.assignedClasses}</p>
          </div>
          <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-emerald-600">Students</p>
            <p className="mt-1 text-xl font-extrabold text-emerald-950">{teacherProfile.totalStudents}</p>
          </div>
          <div className="rounded-xl border border-cyan-100 bg-cyan-50 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-cyan-600">Today</p>
            <p className="mt-1 text-sm font-bold text-cyan-950">{teacherProfile.todayActivity}</p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-sky-600">Class Progress</p>
            <p className="mt-1 text-sm font-bold text-sky-950">{teacherProfile.classProgressSummary}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
