import { courseBookLearningData, institutionLearningData } from "@/data/adminMockData";
import ProgressBar from "./ProgressBar";
import { ActionButtons, TableShell } from "./TablePieces";

export function InstitutionLearningTable() {
  return (
    <TableShell minWidth="980px">
      <thead>
        <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
          {["Institution name", "Total students", "Active students", "Total reading time", "Completed books", "Average progress", "Average follow-reading score", "Actions"].map((heading) => (
            <th key={heading} className="p-4 first:pl-6 last:pr-6">{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {institutionLearningData.map((row) => (
          <tr key={row.id} className="text-sm hover:bg-slate-50/60">
            <td className="p-4 pl-6 font-bold text-slate-900">{row.name}</td>
            <td className="p-4 text-slate-600">{row.students}</td>
            <td className="p-4 text-slate-600">{row.active}</td>
            <td className="p-4 text-slate-600">{row.time}</td>
            <td className="p-4 text-slate-600">{row.completed}</td>
            <td className="p-4"><ProgressBar progress={row.progress} showText={false} /></td>
            <td className="p-4 font-bold text-indigo-600">{row.score}</td>
            <td className="p-4 pr-6"><ActionButtons labels={["View Institution Data", "Export Report"]} /></td>
          </tr>
        ))}
      </tbody>
    </TableShell>
  );
}

export function CourseBookLearningTable() {
  return (
    <TableShell minWidth="980px">
      <thead>
        <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
          {["Course name", "Book title", "Students started", "Students completed", "Average progress", "Average reading time", "Average follow-reading score", "Actions"].map((heading) => (
            <th key={heading} className="p-4 first:pl-6 last:pr-6">{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {courseBookLearningData.map((row) => (
          <tr key={row.id} className="text-sm hover:bg-slate-50/60">
            <td className="p-4 pl-6 font-bold text-slate-900">{row.course}</td>
            <td className="p-4 text-slate-600">{row.book}</td>
            <td className="p-4 text-slate-600">{row.started}</td>
            <td className="p-4 text-slate-600">{row.completed}</td>
            <td className="p-4"><ProgressBar progress={row.progress} showText={false} /></td>
            <td className="p-4 text-slate-600">{row.time}</td>
            <td className="p-4 font-bold text-indigo-600">{row.score}</td>
            <td className="p-4 pr-6"><ActionButtons labels={["View Course Data", "View Book Data", "Export Report"]} /></td>
          </tr>
        ))}
      </tbody>
    </TableShell>
  );
}
