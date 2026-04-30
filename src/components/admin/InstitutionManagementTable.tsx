import { adminInstitutions } from "@/data/adminMockData";
import ProgressBar from "./ProgressBar";
import { ActionButtons, ChipList, StatusBadge, TableShell } from "./TablePieces";

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
            <td className="p-4 pr-6"><ActionButtons labels={["Edit", "Manage Account", "Authorize Books/Courses/Packages", "View Usage", "Disable/Enable"]} /></td>
          </tr>
        ))}
      </tbody>
    </TableShell>
  );
}
