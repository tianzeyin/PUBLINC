import { studentProfile } from "@/data/studentMockData";

export default function StudentProfileCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8 flex flex-col md:flex-row items-start md:items-center gap-6">
      <div className="flex-shrink-0 relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={studentProfile.avatarUrl}
          alt={studentProfile.name}
          className="w-20 h-20 rounded-full object-cover border-4 border-blue-50 shadow-sm"
        />
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full" title="Online"></div>
      </div>
      
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold text-slate-900 mb-1">
          {studentProfile.name}
        </h2>
        <p className="text-sm text-slate-500 mb-3 font-medium">
          @{studentProfile.username}
        </p>
        
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <div className="flex items-center gap-1.5 text-slate-600">
            <span className="text-slate-400">🏫</span>
            {studentProfile.institution}
          </div>
          <div className="flex items-center gap-1.5 text-slate-600">
            <span className="text-slate-400">🎓</span>
            {studentProfile.class}
          </div>
          <div className="flex items-center gap-1.5 text-slate-600">
            <span className="text-slate-400">⏳</span>
            Valid until {studentProfile.expiryDate}
          </div>
        </div>
      </div>

      <div className="w-full md:w-auto bg-blue-50 rounded-xl p-4 border border-blue-100 flex-shrink-0 text-center">
        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">Today&apos;s Progress</p>
        <p className="text-sm font-bold text-blue-900">
          {studentProfile.todayProgress}
        </p>
      </div>
    </div>
  );
}
