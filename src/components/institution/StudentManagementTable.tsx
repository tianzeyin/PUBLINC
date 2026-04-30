import { institutionStudents } from "@/data/institutionMockData";

export default function StudentManagementTable() {
  return (
    <TableShell minWidth="1100px">
      <thead>
        <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
          {["Student name", "Phone/account", "Class", "Assigned courses", "Account status", "Account expiry date", "Actions"].map((heading) => (
            <th key={heading} className="p-4 first:pl-6 last:pr-6">{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {institutionStudents.map((student) => (
          <tr key={student.id} className="text-sm hover:bg-slate-50/60">
            <td className="p-4 pl-6 font-bold text-slate-900">{student.name}</td>
            <td className="p-4 text-slate-600">{student.phone}</td>
            <td className="p-4 text-slate-600">{student.className}</td>
            <td className="p-4">
              <ChipList values={student.courses} />
            </td>
            <td className="p-4"><StatusBadge status={student.status} /></td>
            <td className="p-4 text-slate-600">{student.expiryDate}</td>
            <td className="p-4 pr-6">
              <ActionButtons labels={["Edit", "Assign Class", "Reset Password", "Disable/Enable", "Change Expiry"]} />
            </td>
          </tr>
        ))}
      </tbody>
    </TableShell>
  );
}

export function TableShell({ children, minWidth = "900px" }: { children: React.ReactNode; minWidth?: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left" style={{ minWidth }}>
          {children}
        </table>
      </div>
    </div>
  );
}

export function ChipList({ values }: { values: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {values.map((value) => (
        <span key={value} className="rounded-lg bg-slate-50 px-2 py-1 text-xs font-bold text-slate-600">
          {value}
        </span>
      ))}
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const className =
    status === "Active"
      ? "bg-emerald-50 text-emerald-700"
      : status === "Disabled"
        ? "bg-slate-100 text-slate-600"
        : "bg-amber-50 text-amber-700";

  return <span className={`rounded-lg px-2 py-1 text-xs font-bold ${className}`}>{status}</span>;
}

export function ActionButtons({ labels }: { labels: string[] }) {
  return (
    <div className="flex min-w-72 flex-wrap gap-2">
      {labels.map((label) => (
        <button key={label} type="button" className="rounded-lg bg-blue-50 px-2.5 py-1.5 text-xs font-bold text-blue-700 hover:bg-blue-100">
          {label}
        </button>
      ))}
    </div>
  );
}
