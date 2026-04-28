import Link from "next/link";

interface RoleCardProps {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
  color: string;
  bgLight: string;
  borderColor: string;
  textColor: string;
  buttonColor: string;
}

export default function RoleCard({
  icon,
  title,
  description,
  buttonText,
  href,
  color,
  bgLight,
  borderColor,
  textColor,
  buttonColor,
}: RoleCardProps) {
  return (
    <div className={`group flex flex-col bg-white border ${borderColor} rounded-2xl overflow-hidden card-hover shadow-sm shadow-slate-100/80`}>
      {/* Coloured top strip */}
      <div className={`h-1.5 bg-gradient-to-r ${color} rounded-t-2xl`} />

      <div className="p-6 flex flex-col flex-1">
        {/* Icon */}
        <div className={`w-12 h-12 rounded-2xl ${bgLight} flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110`}>
          {icon}
        </div>

        <h3 className={`font-bold text-slate-800 text-lg mb-2`}>{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed flex-1">{description}</p>

        <Link
          href={href}
          className={`mt-5 inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-white ${buttonColor} rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5`}
        >
          {buttonText}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
