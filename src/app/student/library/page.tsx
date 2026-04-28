import BookCard from "@/components/student/BookCard";
import { libraryBooks } from "@/data/studentMockData";

export default function LibraryPage() {
  return (
    <div>
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Reading Library</h1>
          <p className="text-slate-500 text-sm mt-1">Browse your assigned books and reading materials.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl hover:bg-slate-50 shadow-sm flex items-center gap-2">
            <span className="text-red-500">❤️</span> Favorite Books
          </button>
          <button className="px-4 py-2 btn-primary text-white text-sm font-semibold rounded-xl shadow-sm">
            View All Assigned Books
          </button>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input 
            type="text" 
            placeholder="Search books..." 
            className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex gap-3">
          <select className="block w-full pl-3 pr-10 py-2.5 text-slate-700 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
            <option>Filter by level/category</option>
            <option>Level A1</option>
            <option>Level A2</option>
            <option>Level B1</option>
          </select>
          <select className="block w-full pl-3 pr-10 py-2.5 text-slate-700 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
            <option>Filter by course</option>
            <option>English Reading Level 1</option>
            <option>Audio Reading Practice</option>
          </select>
          <select className="block w-full pl-3 pr-10 py-2.5 text-slate-700 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
            <option>Sort books</option>
            <option>Most Recent</option>
            <option>Progress: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {libraryBooks.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
}
