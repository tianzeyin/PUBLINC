import { books } from "@/data/adminMockData";
import Link from "next/link";
import { StatusBadge, TableShell } from "./TablePieces";

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
              <div className="flex min-w-40 flex-wrap gap-2">
                <Link
                  href={`/admin/book-detail?book=${book.id}`}
                  className="rounded-lg bg-blue-600 px-2.5 py-1.5 text-xs font-bold text-white hover:bg-blue-700"
                >
                  View Details
                </Link>
                <Link
                  href={`/admin/book-edit?book=${book.id}`}
                  className="rounded-lg bg-blue-50 px-2.5 py-1.5 text-xs font-bold text-blue-700 hover:bg-blue-100"
                >
                  Edit
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </TableShell>
  );
}
