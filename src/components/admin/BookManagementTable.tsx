import { books } from "@/data/adminMockData";
import { ActionButtons, StatusBadge, TableShell } from "./TablePieces";

export default function BookManagementTable() {
  return (
    <TableShell minWidth="1180px">
      <thead>
        <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
          {["Book cover", "Book title", "Book level", "Course/album", "Audio status", "Text/content status", "Subtitle status", "Resource files", "Last updated", "Actions"].map((heading) => (
            <th key={heading} className="p-4 first:pl-6 last:pr-6">{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {books.map((book) => (
          <tr key={book.id} className="text-sm hover:bg-slate-50/60">
            <td className="p-4 pl-6"><div className="flex h-12 w-10 items-center justify-center rounded-lg bg-blue-50 text-xs font-extrabold text-blue-700">BK</div></td>
            <td className="p-4 font-bold text-slate-900">{book.title}</td>
            <td className="p-4 text-slate-600">{book.level}</td>
            <td className="p-4 text-slate-600">{book.course}</td>
            <td className="p-4"><StatusBadge status={book.audioStatus} /></td>
            <td className="p-4"><StatusBadge status={book.contentStatus} /></td>
            <td className="p-4"><StatusBadge status={book.subtitleStatus} /></td>
            <td className="p-4 text-slate-600">{book.files}</td>
            <td className="p-4 text-slate-600">{book.updated}</td>
            <td className="p-4 pr-6">
              <ActionButtons labels={["View Details", "Edit", "Delete", "Download Resources", "Manage Audio", "Manage Text/Content", "Subtitle Settings"]} />
            </td>
          </tr>
        ))}
      </tbody>
    </TableShell>
  );
}
