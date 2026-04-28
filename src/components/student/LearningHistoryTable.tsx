import { learningHistory } from "@/data/studentMockData";

export default function LearningHistoryTable() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-semibold">
              <th className="p-4 pl-6">Book Title</th>
              <th className="p-4">Course Name</th>
              <th className="p-4">Date</th>
              <th className="p-4">Listening Time</th>
              <th className="p-4">Reading Time</th>
              <th className="p-4">Progress</th>
              <th className="p-4">Status</th>
              <th className="p-4 pr-6 text-right">Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {learningHistory.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/50 transition-colors text-sm">
                <td className="p-4 pl-6 font-bold text-slate-800">{row.bookTitle}</td>
                <td className="p-4 text-slate-600">{row.courseName}</td>
                <td className="p-4 text-slate-500">{row.date}</td>
                <td className="p-4 text-slate-600">{row.listeningTime}</td>
                <td className="p-4 text-slate-600">{row.readingTime}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: `${row.progress}%` }}></div>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">{row.progress}%</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className={`inline-flex px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide ${
                    row.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {row.status}
                  </span>
                </td>
                <td className="p-4 pr-6 text-right font-bold text-indigo-600">{row.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
