export default function ProgressBar({
  progress,
  label = "Progress",
  colorClass = "bg-emerald-500",
  showText = true,
}: {
  progress: number;
  label?: string;
  colorClass?: string;
  showText?: boolean;
}) {
  return (
    <div className="w-full">
      {showText && (
        <div className="mb-1.5 flex items-center justify-between text-xs font-bold">
          <span className="uppercase tracking-wide text-slate-500">{label}</span>
          <span className="text-slate-900">{progress}%</span>
        </div>
      )}
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
        <div className={`h-full rounded-full ${colorClass}`} style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
