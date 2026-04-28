interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  const accents = [
    "from-blue-500/10 to-blue-600/5 border-blue-100 group-hover:border-blue-200",
    "from-sky-500/10 to-sky-600/5 border-sky-100 group-hover:border-sky-200",
    "from-violet-500/10 to-violet-600/5 border-violet-100 group-hover:border-violet-200",
    "from-emerald-500/10 to-emerald-600/5 border-emerald-100 group-hover:border-emerald-200",
    "from-amber-500/10 to-amber-600/5 border-amber-100 group-hover:border-amber-200",
    "from-rose-500/10 to-rose-600/5 border-rose-100 group-hover:border-rose-200",
  ];

  const iconBg = [
    "bg-blue-100 text-blue-600",
    "bg-sky-100 text-sky-600",
    "bg-violet-100 text-violet-600",
    "bg-emerald-100 text-emerald-600",
    "bg-amber-100 text-amber-600",
    "bg-rose-100 text-rose-600",
  ];

  const accent = accents[index % accents.length];
  const icon_bg = iconBg[index % iconBg.length];

  return (
    <div
      className={`group relative bg-gradient-to-br ${accent} border rounded-2xl p-6 card-hover cursor-default transition-all duration-300`}
    >
      <div className={`w-11 h-11 rounded-xl ${icon_bg} flex items-center justify-center text-xl mb-4 transition-transform duration-300 group-hover:scale-110`}>
        {icon}
      </div>
      <h3 className="text-slate-800 font-bold text-base mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
