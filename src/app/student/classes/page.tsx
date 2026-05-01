import CourseCard from "@/components/student/CourseCard";
import { assignedCourses, studentProfile } from "@/data/studentMockData";

export default function StudentClassesPage() {
  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">My Classes</h1>
          <p className="mt-1 text-sm text-slate-500">
            View all classes and assigned courses for {studentProfile.name}.
          </p>
        </div>
        <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
          {studentProfile.class}
        </div>
      </div>

      <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-3">
          <StatTile label="Assigned Courses" value={`${assignedCourses.length}`} />
          <StatTile label="Institution" value={studentProfile.institution} />
          <StatTile label="Teacher Support" value="3 teachers" />
        </div>
      </section>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {assignedCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}

function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-extrabold text-slate-900">{value}</p>
    </div>
  );
}
