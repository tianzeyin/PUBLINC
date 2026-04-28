import Link from "next/link";
import { demoRoles } from "@/data/mockData";

export default function LoginPage() {
  return (
    <div className="min-h-screen hero-bg flex flex-col justify-center items-center px-4 py-16">
      {/* Back to home */}
      <div className="absolute top-5 left-5">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 bg-white/80 hover:bg-white border border-slate-200 rounded-xl px-3 py-2 transition-all shadow-sm"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>

      {/* Card container */}
      <div className="w-full max-w-3xl">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center text-white font-bold text-base shadow-md shadow-blue-200">
              P
            </div>
            <div>
              <div className="font-bold text-slate-800 text-base leading-tight">Publink China</div>
              <div className="text-xs text-slate-500">Learning Platform</div>
            </div>
          </div>
        </div>

        {/* Header text */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            Choose a demo role
          </h1>
          <p className="text-slate-500 text-base max-w-md mx-auto leading-relaxed">
            This is a <span className="font-semibold text-blue-600">frontend-only template</span>. Select a role to preview the corresponding dashboard.
          </p>
        </div>

        {/* Role cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {demoRoles.map((role) => (
            <Link
              key={role.id}
              href={role.href}
              className={`group relative bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-lg ${role.shadow} card-hover transition-all duration-300 flex flex-col`}
            >
              {/* Gradient top bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${role.gradient} rounded-t-2xl`} />

              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${role.gradient} flex items-center justify-center text-2xl text-white shadow-md mb-4 transition-transform duration-300 group-hover:scale-110`}>
                {role.icon}
              </div>

              <div className="flex-1">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">{role.subtitle}</p>
                <h2 className="text-xl font-bold text-slate-800 mb-2">{role.title}</h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{role.description}</p>
              </div>

              {/* Button */}
              <div className={`inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r ${role.gradient} ${role.hoverGradient} rounded-xl transition-all duration-200 shadow-sm group-hover:shadow-md`}>
                {role.buttonText}
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-slate-400 mt-8">
          No login required · Frontend template only · No real data is used
        </p>
      </div>
    </div>
  );
}
