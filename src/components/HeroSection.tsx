import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen hero-bg flex items-center pt-16 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="flex justify-center">
          {/* Copy */}
          <div className="max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-3 py-1.5 text-xs font-semibold text-blue-700 mb-6">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
              EdTech Platform · YGBK / Publink China
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 leading-tight mb-5">
              Smart Reading and{" "}
              <span className="gradient-text">Audio Learning</span>{" "}
              Platform
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              An education technology platform that helps students improve reading, listening, and speaking skills through digital books,
              audio resources, AI follow-reading practice, and learning reports.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/login"
                className="px-6 py-3 text-sm font-semibold text-white btn-primary rounded-xl shadow-lg shadow-blue-200 inline-flex items-center gap-2"
              >
                Start Learning
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <a
                href="#features"
                className="px-6 py-3 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all hover:shadow-md inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                View Demo
              </a>
            </div>

            {/* Social proof strip */}
            <div className="mt-10 flex items-center justify-center gap-6">
              <div className="flex -space-x-2">
                {["🧑‍🎓","👩‍🎓","🧑‍🏫","👩‍🏫"].map((e, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-white border-2 border-white flex items-center justify-center text-sm shadow-sm">{e}</div>
                ))}
              </div>
              <p className="text-sm text-slate-500">
                Trusted by <span className="text-slate-700 font-semibold">10,000+</span> students &amp; teachers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
