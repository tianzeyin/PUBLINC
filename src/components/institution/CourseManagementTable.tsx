import { institutionCourses } from "@/data/institutionMockData";
import Link from "next/link";
import ProgressBar from "./ProgressBar";
import { ChipList, TableShell } from "./StudentManagementTable";

export default function CourseManagementTable() {
  return (
    <TableShell minWidth="1080px">
      <thead>
        <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
          {["Course name", "Course level", "Number of books", "Assigned classes", "Assigned students", "Average progress", "Actions"].map((heading) => (
            <th key={heading} className="p-4 first:pl-6 last:pr-6">{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {institutionCourses.map((course) => (
          <tr key={course.id} className="text-sm hover:bg-slate-50/60">
            <td className="p-4 pl-6 font-bold text-slate-900">{course.name}</td>
            <td className="p-4 text-slate-600">{course.level}</td>
            <td className="p-4 text-slate-600">{course.books}</td>
            <td className="p-4"><ChipList values={course.assignedClasses} /></td>
            <td className="p-4 text-slate-600">{course.assignedStudents}</td>
            <td className="p-4"><ProgressBar progress={course.progress} showText={false} /></td>
            <td className="p-4 pr-6">
              <Link href={`/institution/course-detail?course=${course.id}`} className="inline-flex rounded-lg bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700 hover:bg-blue-100">
                View Course
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </TableShell>
  );
}
