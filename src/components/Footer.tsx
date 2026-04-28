import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center text-white font-bold text-sm">
              P
            </div>
            <div>
              <p className="text-white font-semibold text-sm leading-tight">YGBK / Publink China Learning Platform</p>
              <p className="text-xs text-slate-500 mt-0.5">© 2026 YGBK / Publink China. All rights reserved.</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-5 text-sm">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-slate-700">·</span>
            <Link href="#" className="hover:text-white transition-colors">User Agreement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
