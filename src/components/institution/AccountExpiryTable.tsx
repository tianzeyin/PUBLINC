import { expiringAccounts } from "@/data/institutionMockData";
import { ActionButtons, StatusBadge, TableShell } from "./StudentManagementTable";

export default function AccountExpiryTable() {
  return (
    <TableShell minWidth="980px">
      <thead>
        <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
          {["Name", "Account type", "Phone/account", "Class / assigned classes", "Current status", "Start date", "Expiry date", "Actions"].map((heading) => (
            <th key={heading} className="p-4 first:pl-6 last:pr-6">{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {expiringAccounts.map((account) => (
          <tr key={account.id} className="text-sm hover:bg-slate-50/60">
            <td className="p-4 pl-6 font-bold text-slate-900">{account.name}</td>
            <td className="p-4 text-slate-600">{account.type}</td>
            <td className="p-4 text-slate-600">{account.phone}</td>
            <td className="p-4 text-slate-600">{account.classes}</td>
            <td className="p-4"><StatusBadge status={account.status} /></td>
            <td className="p-4 text-slate-600">{account.startDate}</td>
            <td className="p-4 text-slate-600">{account.expiryDate}</td>
            <td className="p-4 pr-6">
              <ActionButtons labels={["Extend Validity", "Disable Account", "Enable Account"]} />
            </td>
          </tr>
        ))}
      </tbody>
    </TableShell>
  );
}
