export default function ProgressBar({
  progress,
  colorClass = "bg-blue-500",
  heightClass = "h-2",
  showText = true,
}: {
  progress: number;
  colorClass?: string;
  heightClass?: string;
  showText?: boolean;
}) {
  return (
    <div className="w-full">
      {showText && (
        <div className="flex justify-between items-center mb-1.5 text-xs font-semibold">
          <span className="text-slate-600 uppercase tracking-wide">Progress</span>
          <span className="text-slate-900">{progress}%</span>
        </div>
      )}
      <div className={`w-full bg-slate-100 rounded-full overflow-hidden ${heightClass}`}>
        <div
          className={`h-full rounded-full transition-all duration-500 ${colorClass}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
