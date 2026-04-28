import { audioPlayerData } from "@/data/studentMockData";
import Link from "next/link";

export default function PlayerPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div className="mb-4 flex items-center justify-between">
        <Link href="/student/book-detail" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Detail
        </Link>
        <div className="text-xs font-semibold px-3 py-1 bg-amber-50 border border-amber-200 text-amber-700 rounded-lg flex items-center gap-1.5">
          <span>🔒</span> Skipping is disabled during first listening.
        </div>
      </div>

      <div className="flex-1 grid lg:grid-cols-3 gap-6 min-h-0">
        {/* Main Player Area */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Content Area */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-200 p-8 overflow-y-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Chapter 1: The Journey Begins...</h2>
            <div className="prose prose-slate max-w-none text-lg leading-loose">
              <p>
                Once when I was six years old I saw a magnificent picture in a book, called True Stories from Nature, about the primeval forest. It was a picture of a boa constrictor in the act of swallowing an animal. Here is a copy of the drawing.
              </p>
              <p className="bg-yellow-50 px-2 rounded-md">
                In the book it said: &quot;Boa constrictors swallow their prey whole, without chewing it. After that they are not able to move, and they sleep through the six months that they need for digestion.&quot;
              </p>
              <p>
                I pondered deeply, then, over the adventures of the jungle. And after some work with a colored pencil I succeeded in making my first drawing. My Drawing Number One. It looked something like this:
              </p>
            </div>
          </div>

          {/* Audio Controls */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex-shrink-0">
            <div className="flex items-center gap-4 mb-4">
              <button className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-md transition-colors flex-shrink-0">
                <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600 flex items-center justify-center transition-colors flex-shrink-0">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div className="flex-1">
                <div className="flex justify-between text-xs font-medium text-slate-500 mb-1">
                  <span>02:15</span>
                  <span>18:40</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[15%]"></div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center text-sm font-medium border-t border-slate-100 pt-4 mt-2">
              <span className="text-slate-500">Audio Progress: 15%</span>
              <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                Continue from last position
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Data Tracking Panel */}
        <div className="lg:col-span-1">
          <div className="bg-slate-800 rounded-2xl shadow-sm border border-slate-700 p-6 text-slate-300 h-full">
            <div className="flex items-center gap-2 mb-6 border-b border-slate-700 pb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <h3 className="font-bold text-white text-sm tracking-wide">Learning Data Saved From This Page</h3>
            </div>
            
            <div className="space-y-4 text-sm font-mono">
              <div><span className="text-slate-500">Student ID:</span> <span className="text-emerald-400">{audioPlayerData.studentId}</span></div>
              <div><span className="text-slate-500">Book ID:</span> <span className="text-blue-400">{audioPlayerData.bookId}</span></div>
              <div><span className="text-slate-500">Course ID:</span> <span className="text-amber-400">{audioPlayerData.courseId}</span></div>
              <div className="h-px bg-slate-700 my-2"></div>
              <div><span className="text-slate-500">Listening Time:</span> <span className="text-white">{audioPlayerData.listeningTime}</span></div>
              <div><span className="text-slate-500">Reading Time:</span> <span className="text-white">{audioPlayerData.readingTime}</span></div>
              <div><span className="text-slate-500">Progress:</span> <span className="text-white">{audioPlayerData.progress}%</span></div>
              <div><span className="text-slate-500">Status:</span> <span className="text-white">{audioPlayerData.status}</span></div>
              <div><span className="text-slate-500">Last Position:</span> <span className="text-white">{audioPlayerData.lastPosition}</span></div>
              <div className="h-px bg-slate-700 my-2"></div>
              <div><span className="text-slate-500">Sync Time:</span> <span className="text-slate-400">{audioPlayerData.timestamp}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
