import { studentProfile } from "@/data/studentMockData";

export default function ProfilePage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-slate-900">Personal Center</h1>
        <p className="text-slate-500 text-sm mt-1">Manage your account and profile settings.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Header Cover */}
        <div className="h-32 bg-gradient-to-r from-blue-500 to-sky-400"></div>
        
        {/* Profile Info */}
        <div className="px-8 pb-8 relative">
          <div className="-mt-12 mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={studentProfile.avatarUrl} 
              alt={studentProfile.name} 
              className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover bg-white"
            />
          </div>
          
          <h2 className="text-2xl font-bold text-slate-900 mb-1">{studentProfile.name}</h2>
          <p className="text-slate-500 font-medium mb-6">@{studentProfile.username}</p>

          <div className="grid md:grid-cols-2 gap-y-6 gap-x-8 mb-8">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Phone / Account</p>
              <p className="text-slate-800 font-medium">{studentProfile.phone}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Institution</p>
              <p className="text-slate-800 font-medium">{studentProfile.institution}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Class</p>
              <p className="text-slate-800 font-medium">{studentProfile.class}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Account Expiry Date</p>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-50 text-amber-700 border border-amber-200 text-sm font-medium">
                ⏳ {studentProfile.expiryDate}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
            <button className="px-5 py-2.5 bg-blue-50 text-blue-700 hover:bg-blue-100 font-semibold rounded-xl transition-colors text-sm text-center">
              Change Password
            </button>
            <button className="px-5 py-2.5 bg-red-50 text-red-600 hover:bg-red-100 font-semibold rounded-xl transition-colors text-sm text-center">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
