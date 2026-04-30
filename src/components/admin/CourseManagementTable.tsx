import { adminCourses } from "@/data/adminMockData";
import Link from "next/link";
import ProgressBar from "./ProgressBar";
import { StatusBadge, TableShell } from "./TablePieces";

export default function CourseManagementTable() {
  return (
    <TableShell minWidth="1100px">
      <thead>
        <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
          {["Course name", "Course level", "Number of books", "Course status", "Authorized institutions", "Average progress", "Last updated", "Actions"].map((heading) => (
            <th key={heading} className="p-4 first:pl-6 last:pr-6">{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {adminCourses.map((course) => (
          <tr key={course.id} className="text-sm hover:bg-slate-50/60">
            <td className="p-4 pl-6 font-bold text-slate-900">{course.name}</td>
            <td className="p-4 text-slate-600">{course.level}</td>
            <td className="p-4 text-slate-600">{course.books}</td>
            <td className="p-4"><StatusBadge status={course.status} /></td>
            <td className="p-4 text-slate-600">{course.institutions}</td>
            <td className="p-4"><ProgressBar progress={course.progress} showText={false} /></td>
            <td className="p-4 text-slate-600">{course.updated}</td>
            <td className="p-4 pr-6">
              <Link
                href={`/admin/course-edit?course=${course.id}`}
                className="rounded-lg bg-blue-600 px-2.5 py-1.5 text-xs font-bold text-white hover:bg-blue-700"
              >
                Edit Course
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </TableShell>
  );
}
