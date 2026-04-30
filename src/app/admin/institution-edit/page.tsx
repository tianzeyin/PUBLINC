"use client";

import AdminLayout from "@/components/admin/AdminLayout";
import type { AdminView } from "@/components/admin/AdminSidebar";
import ProgressBar from "@/components/admin/ProgressBar";
import { adminInstitutions } from "@/data/adminMockData";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function AdminInstitutionEditPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const institutionId = searchParams.get("institution") ?? "inst-1";
  const institution = adminInstitutions.find((item) => item.id === institutionId) ?? adminInstitutions[0];
  const handleSelect = (view: AdminView) => {
    router.push(view === "dashboard" ? "/admin" : `/admin?section=${view}`);
  };

  return (
    <AdminLayout activeView="institutions" onSelect={handleSelect}>
      <div className="max-w-6xl">
        <Link href="/admin?section=institutions" className="mb-5 inline-flex text-sm font-bold text-blue-700 hover:text-blue-800">
          Back to Institution Management
        </Link>

        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900">Edit {institution.name}</h1>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Visual-only institution edit page for account settings, authorization, usage review, and status controls.
              </p>
            </div>
            <span className="rounded-xl bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700">{institution.status}</span>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <InfoTile label="Institution name" value={institution.name} />
            <InfoTile label="Contact person" value={institution.contact} />
            <InfoTile label="Contact phone" value={institution.phone} />
            <InfoTile label="Students" value={`${institution.students}`} />
            <InfoTile label="Teachers" value={`${institution.teachers}`} />
            <InfoTile label="Status" value={institution.status} />
          </div>

          <div className="mt-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-400">Institution usage</p>
            <ProgressBar progress={institution.usage} colorClass="bg-emerald-500" />
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Save Institution", "Manage Account", "Authorize Books/Courses/Packages", "View Usage", "Disable/Enable"].map((label) => (
              <button key={label} type="button" className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-2.5 text-sm font-bold text-blue-700 hover:bg-blue-100">
                {label}
              </button>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-extrabold text-slate-900">Authorize Books / Courses / Packages</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {["Select institution", "Select books", "Select courses", "Select package", "Start date", "Expiry date"].map((field) => (
              <div key={field} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-500">
                {field}
              </div>
            ))}
          </div>
          <button type="button" className="mt-4 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700">
            Save Authorization
          </button>
        </section>
      </div>
    </AdminLayout>
  );
}

function InfoTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-extrabold text-slate-900">{value}</p>
    </div>
  );
}
