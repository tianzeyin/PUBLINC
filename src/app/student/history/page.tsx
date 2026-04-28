import LearningHistoryTable from "@/components/student/LearningHistoryTable";

export default function HistoryPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-extrabold text-slate-900">Learning History</h1>
        <p className="text-slate-500 text-sm mt-1">Track your reading, listening, and follow-reading progress.</p>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span className="w-1 h-5 bg-indigo-500 rounded-full inline-block"></span>
            Recent Activity
          </h2>
          <select className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg text-slate-600 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Time</option>
            <option>This Month</option>
            <option>This Week</option>
          </select>
        </div>
        
        <LearningHistoryTable />
      </div>
      
      {/* Visual placeholder for other history types */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
           <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
             <span className="text-xl">🎤</span> Follow-reading History
           </h3>
           <div className="flex flex-col gap-3">
             {[1, 2, 3].map((i) => (
                <div key={i} className="flex justify-between items-center p-3 rounded-xl border border-slate-100 bg-slate-50">
                  <div>
                    <p className="text-sm font-bold text-slate-700">Paragraph Practice #{i}</p>
                    <p className="text-xs text-slate-500 mt-0.5">The Little Prince</p>
                  </div>
                  <div className="text-right">
                    <span className="text-indigo-600 font-bold text-sm">8{i}%</span>
                    <p className="text-[10px] text-slate-400 mt-0.5">May 0{5-i}</p>
                  </div>
                </div>
             ))}
           </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
           <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
             <span className="text-xl">🎧</span> Listening History
           </h3>
           <div className="flex flex-col gap-3">
             {[1, 2, 3].map((i) => (
                <div key={i} className="flex justify-between items-center p-3 rounded-xl border border-slate-100 bg-slate-50">
                  <div>
                    <p className="text-sm font-bold text-slate-700">Audio Lesson {i}</p>
                    <p className="text-xs text-slate-500 mt-0.5">Animal Stories</p>
                  </div>
                  <div className="text-right">
                    <span className="text-blue-600 font-bold text-sm">{10+i} min</span>
                    <p className="text-[10px] text-slate-400 mt-0.5">May 0{5-i}</p>
                  </div>
                </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
}
