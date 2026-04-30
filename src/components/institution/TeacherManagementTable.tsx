import { institutionTeachers } from "@/data/institutionMockData";
import { ActionButtons, ChipList, StatusBadge, TableShell } from "./StudentManagementTable";

export default function TeacherManagementTable() {
  return (
    <TableShell minWidth="1080px">
      <thead>
        <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
          {["Teacher name", "Phone/account", "Assigned classes", "Number of students", "Account status", "Last login time", "Actions"].map((heading) => (
            <th key={heading} className="p-4 first:pl-6 last:pr-6">{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {institutionTeachers.map((teacher) => (
          <tr key={teacher.id} className="text-sm hover:bg-slate-50/60">
            <td className="p-4 pl-6 font-bold text-slate-900">{teacher.name}</td>
            <td className="p-4 text-slate-600">{teacher.phone}</td>
            <td className="p-4"><ChipList values={teacher.classes} /></td>
            <td className="p-4 text-slate-600">{teacher.students}</td>
            <td className="p-4"><StatusBadge status={teacher.status} /></td>
            <td className="p-4 text-slate-600">{teacher.lastLogin}</td>
            <td className="p-4 pr-6">
              <ActionButtons labels={["Edit", "Assign Class", "Remove Class", "Reset Password", "Disable/Enable", "Set Permissions"]} />
            </td>
          </tr>
        ))}
      </tbody>
    </TableShell>
  );
}
