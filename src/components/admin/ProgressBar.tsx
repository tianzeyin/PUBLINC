export default function ProgressBar({
  progress,
  label = "Progress",
  showText = true,
  colorClass = "bg-blue-500",
}: {
  progress: number;
  label?: string;
  showText?: boolean;
  colorClass?: string;
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
