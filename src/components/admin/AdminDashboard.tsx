"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import AdminLayout from "./AdminLayout";
import type { AdminView } from "./AdminSidebar";
import AdminStatCard from "./AdminStatCard";
import AdminUserTable from "./AdminUserTable";
import BookManagementTable from "./BookManagementTable";
import CourseManagementTable from "./CourseManagementTable";
import { CourseBookLearningTable, InstitutionLearningTable } from "./LearningStatisticsTable";
import InstitutionManagementTable from "./InstitutionManagementTable";
import ProgressBar from "./ProgressBar";
import ResourceFileTable from "./ResourceFileTable";
import UploadPanelMock from "./UploadPanelMock";
import { adminStats, chartCards, learningStatsCards, platformOverview } from "@/data/adminMockData";

export default function AdminDashboard() {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  const initialView = isAdminView(section) ? section : "dashboard";
  const [activeView, setActiveView] = useState<AdminView>(initialView);

  return (
    <AdminLayout activeView={activeView} onSelect={setActiveView}>
      {activeView === "dashboard" && <DashboardHome onSelect={setActiveView} />}
      {activeView === "books" && <BookManagement />}
      {activeView === "resources" && <ResourceManagement />}
      {activeView === "institutions" && <InstitutionManagement />}
      {activeView === "courses" && <CourseManagement />}
      {activeView === "statistics" && <LearningStatistics />}
      {activeView === "settings" && <AdminSettings />}
    </AdminLayout>
  );
}

function isAdminView(value: string | null): value is AdminView {
  return value === "dashboard" || value === "books" || value === "resources" || value === "institutions" || value === "courses" || value === "statistics" || value === "settings";
}

function PageHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">{title}</h1>
        {description && <p className="mt-1 text-sm text-slate-500">{description}</p>}
      </div>
      <div className="flex flex-wrap gap-2">
        <button type="button" className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm hover:bg-slate-50">Export</button>
        <button type="button" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-blue-700">Refresh</button>
      </div>
    </div>
  );
}

function SectionTitle({ children, accent = "blue" }: { children: React.ReactNode; accent?: "blue" | "emerald" | "sky" }) {
  const accentClass = accent === "emerald" ? "bg-emerald-500" : accent === "sky" ? "bg-sky-500" : "bg-blue-500";
  return (
    <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-800">
      <span className={`inline-block h-5 w-1 rounded-full ${accentClass}`} />
      {children}
    </h2>
  );
}

function DashboardHome({ onSelect }: { onSelect: (view: AdminView) => void }) {
  return (
    <>
      <PageHeader title="Platform Admin Dashboard" description="Platform-wide content, institutions, learning activity, and admin operations." />
      <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {adminStats.map((stat) => <AdminStatCard key={stat.label} {...stat} />)}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <SectionTitle accent="emerald">Platform Overview</SectionTitle>
          <div className="space-y-5">
            {platformOverview.map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-700">{item.label}</span>
                  <span className="text-sm font-semibold text-slate-500">{item.value}</span>
                </div>
                <ProgressBar progress={item.progress} showText={false} colorClass="bg-emerald-500" />
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <SectionTitle accent="sky">Quick Actions</SectionTitle>
          <div className="grid gap-3 sm:grid-cols-2">
            <ActionButton label="Add Book" onClick={() => onSelect("books")} />
            <ActionButton label="Create Course" onClick={() => onSelect("courses")} />
            <ActionButton label="Create Institution Account" onClick={() => onSelect("institutions")} />
            <ActionButton label="Upload Resources" onClick={() => onSelect("resources")} />
            <ActionButton label="View Learning Statistics" onClick={() => onSelect("statistics")} />
            <ActionButton label="Create Admin Account" onClick={() => onSelect("settings")} />
          </div>
        </section>
      </div>
    </>
  );
}

function BookManagement() {
  return (
    <>
      <PageHeader title="Book Management" description="Manage book metadata, content, audio, subtitles, and downloadable resources." />
      <div className="mb-5 flex flex-wrap gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <Link href="/admin/book-create" className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-blue-700">
          Add Book
        </Link>
        {["Batch Import Books", "Download Resource Files"].map((label) => (
          <button key={label} type="button" className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-2.5 text-sm font-bold text-blue-700 transition-colors hover:bg-blue-100">
            {label}
          </button>
        ))}
      </div>
      <FilterBar searchPlaceholder="Search books" filters={["Filter by level", "Filter by course", "Filter by status", "Sort by updated date"]} />
      <div className="mb-8"><BookManagementTable /></div>
    </>
  );
}

function ResourceManagement() {
  return (
    <>
      <PageHeader title="Resource File Management" description="Upload, review, replace, download, and organize platform resource files." />
      <ActionBar labels={["Add Books", "Batch Import Books", "Upload Book Resource Files", "Create Book Resources", "Upload Audio Files", "Upload Subtitle Files", "Batch Upload Covers", "Crop / Adjust Covers"]} />
      <div className="mb-8"><UploadPanelMock /></div>
      <div className="mb-8"><ResourceFileTable /></div>
      <SectionTitle accent="emerald">Cover Crop / Adjust</SectionTitle>
      <section className="grid gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[220px_1fr]">
        <div className="flex h-64 items-center justify-center rounded-2xl bg-blue-50 text-lg font-extrabold text-blue-700">Cover Preview</div>
        <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-emerald-200 bg-emerald-50/60 p-6 text-center">
          <div className="flex h-36 w-28 items-center justify-center rounded-xl border-2 border-blue-400 bg-white text-sm font-bold text-slate-500">Crop Frame</div>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {["Crop Cover", "Adjust Cover", "Save Cover"].map((label) => <ActionButton key={label} label={label} />)}
          </div>
        </div>
      </section>
    </>
  );
}

function InstitutionManagement() {
  return (
    <>
      <PageHeader title="Institution Management" description="Manage institution accounts, authorization, status, and platform usage." />
      <ActionBar labels={["Create Institution Account", "Export Institution List"]} />
      <FilterBar searchPlaceholder="Search institutions" filters={["Filter by status", "Filter by authorized course", "Sort by usage"]} />
      <div className="mb-8"><InstitutionManagementTable /></div>
    </>
  );
}

function CourseManagement() {
  return (
    <>
      <PageHeader title="Course Management" description="Manage platform-level courses, book membership, status, and institution authorization." />
      <ActionBar labels={["Create Course", "Add Books to Course", "Authorize Course to Institution", "Export Course List"]} />
      <FilterBar searchPlaceholder="Search course" filters={["Filter by level", "Filter by status", "Sort by number of books"]} />
      <div className="mb-8"><CourseManagementTable /></div>
    </>
  );
}

function LearningStatistics() {
  return (
    <>
      <PageHeader title="Learning Statistics" description="Platform-wide learning time, book completion, institution activity, and exportable reports." />
      <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {learningStatsCards.map((stat) => <AdminStatCard key={stat.label} {...stat} />)}
      </div>
      <div className="mb-8 grid gap-5 lg:grid-cols-4">
        {chartCards.map((chart) => <ChartCard key={chart.title} title={chart.title} values={chart.values} />)}
      </div>
      <div className="mb-8">
        <SectionTitle>Institution Learning Data</SectionTitle>
        <InstitutionLearningTable />
      </div>
      <div className="mb-8">
        <SectionTitle accent="emerald">Course / Book Learning Data</SectionTitle>
        <CourseBookLearningTable />
      </div>
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <SectionTitle accent="sky">Export Learning Reports</SectionTitle>
        <div className="flex flex-wrap gap-3">
          {["Export Institution Learning Report", "Export Course Learning Report", "Export Book Learning Report", "Export Full Platform Report"].map((label) => <ActionButton key={label} label={label} />)}
        </div>
      </section>
    </>
  );
}

function AdminSettings() {
  return (
    <>
      <PageHeader title="Admin User Settings" description="Manage platform admin accounts, roles, permission levels, and access status." />
      <ActionBar labels={["Create Admin Account", "Export Admin List"]} />
      <FilterBar searchPlaceholder="Search admin users" filters={["Filter by role", "Filter by account status", "Sort by last login"]} />
      <div className="mb-8"><AdminUserTable /></div>
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <SectionTitle accent="emerald">Create / Edit Admin Account</SectionTitle>
        <div className="grid gap-3 md:grid-cols-3">
          {["Admin name", "Phone/account", "Email", "Admin role", "Permission level", "Account status"].map((field) => (
            <div key={field} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-500">{field}</div>
          ))}
        </div>
        <button type="button" className="mt-4 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700">Save Admin Account</button>
      </section>
    </>
  );
}

function ActionBar({ labels }: { labels: string[] }) {
  return (
    <div className="mb-5 flex flex-wrap gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      {labels.map((label, index) => <ActionButton key={label} label={label} variant={index === 0 ? "solid" : "light"} />)}
    </div>
  );
}

function FilterBar({ searchPlaceholder, filters }: { searchPlaceholder: string; filters: string[] }) {
  return (
    <div className="mb-5 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:grid-cols-[1.2fr_repeat(4,minmax(0,0.8fr))]">
      <input type="search" placeholder={searchPlaceholder} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-300 focus:bg-white" />
      {filters.map((filter) => (
        <select key={filter} defaultValue="" className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-600 outline-none focus:border-blue-300 focus:bg-white">
          <option value="">{filter}</option>
        </select>
      ))}
    </div>
  );
}

function ActionButton({ label, variant = "solid", onClick }: { label: string; variant?: "solid" | "light"; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
        variant === "solid" ? "bg-blue-600 text-white shadow-sm hover:bg-blue-700" : "border border-blue-100 bg-blue-50 text-blue-700 hover:bg-blue-100"
      }`}
    >
      {label}
    </button>
  );
}

function ChartCard({ title, values }: { title: string; values: number[] }) {
  const max = Math.max(...values);
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-5 text-base font-extrabold text-slate-900">{title}</h3>
      <div className="flex h-32 items-end gap-2">
        {values.map((value, index) => (
          <div key={`${title}-${index}`} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex h-24 w-full items-end rounded-t-lg bg-slate-50">
              <div className="w-full rounded-t-lg bg-gradient-to-t from-blue-600 to-emerald-400" style={{ height: `${(value / max) * 100}%` }} />
            </div>
            <span className="text-[10px] font-bold text-slate-500">{value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
