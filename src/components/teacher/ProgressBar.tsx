export default function ProgressBar({
  progress,
  colorClass = "bg-emerald-500",
  heightClass = "h-2",
  showText = true,
  label = "Progress",
}: {
  progress: number;
  colorClass?: string;
  heightClass?: string;
  showText?: boolean;
  label?: string;
}) {
  return (
    <div className="w-full">
      {showText && (
        <div className="mb-1.5 flex items-center justify-between text-xs font-semibold">
          <span className="uppercase tracking-wide text-slate-500">{label}</span>
          <span className="text-slate-900">{progress}%</span>
        </div>
      )}
      <div className={`w-full overflow-hidden rounded-full bg-slate-100 ${heightClass}`}>
        <div
          className={`h-full rounded-full transition-all duration-500 ${colorClass}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
