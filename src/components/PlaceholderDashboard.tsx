import Link from "next/link";

interface PlaceholderPageProps {
  role: string;
  icon: string;
  subtitle: string;
  nextSteps: string[];
  gradient: string;
  accentBg: string;
  accentText: string;
}

function PlaceholderDashboard({
  role,
  icon,
  subtitle,
  nextSteps,
  gradient,
  accentBg,
  accentText,
}: PlaceholderPageProps) {
  return (
    <div className={`min-h-screen bg-gradient-to-br ${gradient} flex flex-col items-center justify-center px-4 py-16`}>
      {/* Back button */}
      <div className="absolute top-5 left-5">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-3 py-2 transition-all"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>

      <div className="text-center max-w-lg">
        {/* Icon circle */}
        <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-4xl mx-auto mb-6 shadow-xl">
          {icon}
        </div>

        {/* Badge */}
        <div className={`inline-block text-xs font-semibold ${accentBg} ${accentText} rounded-full px-3 py-1 mb-4`}>
          {subtitle}
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">{role} Dashboard</h1>
        <p className="text-white/70 text-lg mb-2">Coming Next</p>

        {/* Divider */}
        <div className="h-px w-16 bg-white/30 rounded-full mx-auto my-6" />

        {/* What's coming */}
        <p className="text-white/60 text-sm mb-4 font-medium uppercase tracking-widest">Planned Features</p>
        <ul className="text-left inline-flex flex-col gap-3 mb-8">
          {nextSteps.map((s) => (
            <li key={s} className="flex items-start gap-3 text-white/80 text-sm">
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">✓</span>
              {s}
            </li>
          ))}
        </ul>

        <Link
          href="/login"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl transition-all"
        >
          Switch Role
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export function StudentPlaceholder() {
  return (
    <PlaceholderDashboard
      role="Student Learning"
      icon="🎓"
      subtitle="Student Portal"
      gradient="from-blue-600 via-blue-700 to-blue-900"
      accentBg="bg-blue-400/30"
      accentText="text-white"
      nextSteps={[
        "Book library and assigned reading list",
        "Audio lessons and pronunciation practice",
        "AI follow-reading scoring system",
        "Personal learning progress reports",
        "Reading history and completion tracking",
      ]}
    />
  );
}

export function TeacherPlaceholder() {
  return (
    <PlaceholderDashboard
      role="Teacher Management"
      icon="👩‍🏫"
      subtitle="Teacher Panel"
      gradient="from-emerald-600 via-emerald-700 to-emerald-900"
      accentBg="bg-emerald-400/30"
      accentText="text-white"
      nextSteps={[
        "Class overview and student list management",
        "Per-student reading activity timeline",
        "Class progress and completion rate reports",
        "Assignment and task management tools",
        "Learning analytics and trend charts",
      ]}
    />
  );
}

export function InstitutionPlaceholder() {
  return (
    <PlaceholderDashboard
      role="Institution Management"
      icon="🏛️"
      subtitle="Institution Admin"
      gradient="from-violet-600 via-violet-700 to-violet-900"
      accentBg="bg-violet-400/30"
      accentText="text-white"
      nextSteps={[
        "Account management (students & teachers)",
        "Class and course assignment tools",
        "Account status and expiry date controls",
        "Institution-wide learning statistics",
        "Bulk account creation and import",
      ]}
    />
  );
}

export function AdminPlaceholder() {
  return (
    <PlaceholderDashboard
      role="Admin Console"
      icon="⚙️"
      subtitle="Platform Admin"
      gradient="from-orange-500 via-orange-600 to-orange-800"
      accentBg="bg-orange-300/30"
      accentText="text-white"
      nextSteps={[
        "Global book and resource library management",
        "Course and curriculum creation tools",
        "Institution account oversight and billing",
        "Platform-wide learning analytics dashboard",
        "System configuration and feature flags",
      ]}
    />
  );
}
