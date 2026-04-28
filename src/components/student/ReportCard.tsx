interface ReportCardProps {
  title: string;
  value: string | number;
  icon: string;
  colorClass: string;
  subValue?: string;
}

export default function ReportCard({
  title,
  value,
  icon,
  colorClass,
  subValue,
}: ReportCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 shadow-sm ${colorClass}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
        {subValue && (
          <p className="text-xs text-slate-400 mt-1 font-medium">{subValue}</p>
        )}
      </div>
    </div>
  );
}
