import { adminUsers } from "@/data/adminMockData";
import { ActionButtons, StatusBadge, TableShell } from "./TablePieces";

export default function AdminUserTable() {
  return (
    <TableShell minWidth="1080px">
      <thead>
        <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
          {["Admin name", "Phone/account", "Email", "Admin role", "Permission level", "Account status", "Last login time", "Actions"].map((heading) => (
            <th key={heading} className="p-4 first:pl-6 last:pr-6">{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {adminUsers.map((admin) => (
          <tr key={admin.id} className="text-sm hover:bg-slate-50/60">
            <td className="p-4 pl-6 font-bold text-slate-900">{admin.name}</td>
            <td className="p-4 text-slate-600">{admin.account}</td>
            <td className="p-4 text-slate-600">{admin.email}</td>
            <td className="p-4 text-slate-600">{admin.role}</td>
            <td className="p-4 text-slate-600">{admin.permission}</td>
            <td className="p-4"><StatusBadge status={admin.status} /></td>
            <td className="p-4 text-slate-600">{admin.lastLogin}</td>
            <td className="p-4 pr-6"><ActionButtons labels={["Edit Admin Account", "Disable/Enable Admin Account", "Reset Admin Password", "Set Permissions"]} /></td>
          </tr>
        ))}
      </tbody>
    </TableShell>
  );
}
