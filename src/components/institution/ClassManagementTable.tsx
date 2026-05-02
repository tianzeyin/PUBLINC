import { institutionClasses } from "@/data/institutionMockData";
import Link from "next/link";
import ProgressBar from "./ProgressBar";
import { TableShell } from "./StudentManagementTable";

export default function ClassManagementTable() {
  return (
    <TableShell minWidth="1040px">
      <thead>
        <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
          {["Class name", "Assigned teacher", "Students", "Assigned readings", "Average progress", "Average score", "Active students", "Actions"].map((heading) => (
            <th key={heading} className="p-4 first:pl-6 last:pr-6">{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {institutionClasses.map((row) => (
          <tr key={row.id} className="text-sm hover:bg-slate-50/60">
            <td className="p-4 pl-6 font-bold text-slate-900">{row.name}</td>
            <td className="p-4 text-slate-600">{row.teacher}</td>
            <td className="p-4 text-slate-600">{row.students}</td>
            <td className="p-4 text-slate-600">{row.readings}</td>
            <td className="p-4"><ProgressBar progress={row.progress} showText={false} /></td>
            <td className="p-4 font-bold text-indigo-600">{row.score}</td>
            <td className="p-4 text-slate-600">{row.activeStudents}</td>
            <td className="p-4 pr-6">
              <Link href={`/institution/class-detail?class=${row.id}`} className="inline-flex rounded-lg bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700 hover:bg-blue-100">
                View Class
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </TableShell>
  );
}
