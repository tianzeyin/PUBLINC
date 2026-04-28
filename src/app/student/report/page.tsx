import ReportCard from "@/components/student/ReportCard";
import { learningReportData } from "@/data/studentMockData";

export default function ReportPage() {
  return (
    <div>
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Learning Report</h1>
          <p className="text-slate-500 text-sm mt-1">Overview of your learning statistics and progress.</p>
        </div>
        <button className="bg-white border border-slate-200 text-slate-700 text-sm font-semibold px-4 py-2 rounded-xl hover:bg-slate-50 shadow-sm flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Export PDF
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <ReportCard 
          title="Daily Reading" 
          value={learningReportData.dailyReadingTime} 
          icon="⏱️" 
          colorClass="bg-blue-100 text-blue-600" 
          subValue="Target: 60 mins"
        />
        <ReportCard 
          title="Weekly Reading" 
          value={learningReportData.weeklyReadingTime} 
          icon="📅" 
          colorClass="bg-emerald-100 text-emerald-600" 
          subValue="On track"
        />
        <ReportCard 
          title="Books Completed" 
          value={learningReportData.totalBooksCompleted} 
          icon="📚" 
          colorClass="bg-violet-100 text-violet-600" 
          subValue="Across 3 courses"
        />
        <ReportCard 
          title="Avg. Score" 
          value={learningReportData.averageScore} 
          icon="🎯" 
          colorClass="bg-amber-100 text-amber-600" 
          subValue="Top 10% in class"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Mock Chart 1 */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h3 className="font-bold text-slate-800 mb-6">Weekly Reading Time Trend</h3>
          <div className="h-48 flex items-end justify-between gap-2">
            {[30, 45, 20, 60, 40, 50, 25].map((h, i) => (
              <div key={i} className="w-full flex flex-col items-center gap-2">
                <div 
                  className="w-full bg-blue-500 rounded-t-md opacity-80 hover:opacity-100 transition-opacity" 
                  style={{ height: `${h}%` }}
                ></div>
                <span className="text-xs font-medium text-slate-400">Day {i+1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mock Chart 2 / Streaks */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl shadow-sm p-6 text-white text-center flex-1 flex flex-col justify-center">
             <div className="text-4xl mb-3">🔥</div>
             <p className="text-blue-100 text-sm font-medium uppercase tracking-wider mb-1">Learning Streak</p>
             <h3 className="text-4xl font-bold">{learningReportData.learningStreak}</h3>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 text-center flex-1 flex flex-col justify-center">
             <div className="text-4xl mb-3">🏆</div>
             <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-1">Class Ranking</p>
             <h3 className="text-3xl font-bold text-slate-800">{learningReportData.readingRanking}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
