export function TableShell({ children, minWidth = "980px" }: { children: React.ReactNode; minWidth?: string }) {
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

export function StatusBadge({ status }: { status: string }) {
  const className =
    status === "Active" || status === "Uploaded" || status === "Ready" || status === "Completed"
      ? "bg-emerald-50 text-emerald-700"
      : status === "Disabled" || status === "Draft" || status === "Missing"
        ? "bg-slate-100 text-slate-600"
        : "bg-amber-50 text-amber-700";

  return <span className={`rounded-lg px-2 py-1 text-xs font-bold ${className}`}>{status}</span>;
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

export function ActionButtons({ labels }: { labels: string[] }) {
  return (
    <div className="flex min-w-80 flex-wrap gap-2">
      {labels.map((label) => (
        <button key={label} type="button" className="rounded-lg bg-blue-50 px-2.5 py-1.5 text-xs font-bold text-blue-700 hover:bg-blue-100">
          {label}
        </button>
      ))}
    </div>
  );
}
