import { adminInstitutions } from "@/data/adminMockData";
import Link from "next/link";
import ProgressBar from "./ProgressBar";
import { ChipList, StatusBadge, TableShell } from "./TablePieces";

export default function InstitutionManagementTable() {
  return (
    <TableShell minWidth="1120px">
      <thead>
        <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
          {["Institution name", "Contact person", "Contact phone", "Students", "Teachers", "Authorized books/courses/packages", "Institution usage", "Status", "Actions"].map((heading) => (
            <th key={heading} className="p-4 first:pl-6 last:pr-6">{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {adminInstitutions.map((inst) => (
          <tr key={inst.id} className="text-sm hover:bg-slate-50/60">
            <td className="p-4 pl-6 font-bold text-slate-900">{inst.name}</td>
            <td className="p-4 text-slate-600">{inst.contact}</td>
            <td className="p-4 text-slate-600">{inst.phone}</td>
            <td className="p-4 text-slate-600">{inst.students}</td>
            <td className="p-4 text-slate-600">{inst.teachers}</td>
            <td className="p-4"><ChipList values={inst.authorized} /></td>
            <td className="p-4"><ProgressBar progress={inst.usage} showText={false} /></td>
            <td className="p-4"><StatusBadge status={inst.status} /></td>
            <td className="p-4 pr-6">
              <Link
                href={`/admin/institution-edit?institution=${inst.id}`}
                className="rounded-lg bg-blue-600 px-2.5 py-1.5 text-xs font-bold text-white hover:bg-blue-700"
              >
                Edit
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </TableShell>
  );
}
