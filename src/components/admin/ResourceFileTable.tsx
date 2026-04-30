import { resourceFiles } from "@/data/adminMockData";
import { ActionButtons, StatusBadge, TableShell } from "./TablePieces";

export default function ResourceFileTable() {
  return (
    <TableShell minWidth="1020px">
      <thead>
        <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
          {["File name", "File type", "Related book", "Related course", "Upload status", "File size", "Uploaded by", "Upload date", "Actions"].map((heading) => (
            <th key={heading} className="p-4 first:pl-6 last:pr-6">{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {resourceFiles.map((file) => (
          <tr key={file.id} className="text-sm hover:bg-slate-50/60">
            <td className="p-4 pl-6 font-bold text-slate-900">{file.name}</td>
            <td className="p-4 text-slate-600">{file.type}</td>
            <td className="p-4 text-slate-600">{file.book}</td>
            <td className="p-4 text-slate-600">{file.course}</td>
            <td className="p-4"><StatusBadge status={file.status} /></td>
            <td className="p-4 text-slate-600">{file.size}</td>
            <td className="p-4 text-slate-600">{file.uploadedBy}</td>
            <td className="p-4 text-slate-600">{file.uploadDate}</td>
            <td className="p-4 pr-6"><ActionButtons labels={["Preview", "Replace", "Download", "Delete"]} /></td>
          </tr>
        ))}
      </tbody>
    </TableShell>
  );
}
