"use client";

import { useState } from "react";
import AccountExpiryTable from "./AccountExpiryTable";
import ClassManagementTable from "./ClassManagementTable";
import CourseManagementTable from "./CourseManagementTable";
import InstitutionFormMock from "./InstitutionFormMock";
import InstitutionLayout from "./InstitutionLayout";
import InstitutionProfileCard from "./InstitutionProfileCard";
import InstitutionStatCard from "./InstitutionStatCard";
import type { InstitutionView } from "./InstitutionSidebar";
import StudentManagementTable from "./StudentManagementTable";
import TeacherManagementTable from "./TeacherManagementTable";
import {
  accountSummary,
  authorizedBooks,
  institutionProfile,
  institutionStats,
  learningOverview,
} from "@/data/institutionMockData";

export default function InstitutionDashboard() {
  const [activeView, setActiveView] = useState<InstitutionView>("home");

  return (
    <InstitutionLayout activeView={activeView} onSelect={setActiveView}>
      {activeView === "home" && <InstitutionHome onSelect={setActiveView} />}
      {activeView === "students" && <StudentManagement />}
      {activeView === "teachers" && <TeacherManagement />}
      {activeView === "classes" && <ClassManagement />}
      {activeView === "courses" && <CourseManagement />}
      {activeView === "accounts" && <AccountOpeningExpiry />}
      {activeView === "personal" && <PersonalCenter />}
    </InstitutionLayout>
  );
}

function PageHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">{title}</h1>
        {description && <p className="mt-1 text-sm text-slate-500">{description}</p>}
      </div>
      <div className="flex flex-wrap gap-2">
        <button type="button" className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm hover:bg-slate-50">
          Export
        </button>
        <button type="button" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-blue-700">
          Refresh
        </button>
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

function InstitutionHome({ onSelect }: { onSelect: (view: InstitutionView) => void }) {
  return (
    <>
      <PageHeader title="Institution Home Dashboard" description="Institution profile, learning activity, account health, and quick admin actions." />
      <InstitutionProfileCard />

      <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {institutionStats.map((stat) => (
          <InstitutionStatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <SectionTitle accent="emerald">Learning Activity Overview</SectionTitle>
          <div className="space-y-4">
            {learningOverview.map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-4">
                <span className="text-sm font-semibold text-slate-600">{item.label}</span>
                <span className="text-lg font-extrabold text-slate-900">{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <SectionTitle accent="sky">Quick Actions</SectionTitle>
          <div className="grid gap-3 sm:grid-cols-2">
            <ActionButton label="Create Student Account" onClick={() => onSelect("students")} />
            <ActionButton label="Create Teacher Account" onClick={() => onSelect("teachers")} />
            <ActionButton label="Assign Course" onClick={() => onSelect("courses")} />
            <ActionButton label="View Expiring Accounts" onClick={() => onSelect("accounts")} />
            <ActionButton label="Export Reports" />
          </div>
        </section>
      </div>
    </>
  );
}

function StudentManagement() {
  return (
    <>
      <PageHeader title="Student Management" description="Manage student accounts, classes, course assignment, status, and expiry dates." />
      <ActionBar labels={["Create Student Account", "Export Student List"]} />
      <FilterBar searchPlaceholder="Search students" filters={["Filter by class", "Filter by account status", "Filter by assigned course", "Sort by expiry date"]} />
      <div className="mb-8">
        <StudentManagementTable />
      </div>
      <SectionTitle accent="emerald">Student Account Forms</SectionTitle>
      <div className="grid gap-4 lg:grid-cols-2">
        <InstitutionFormMock title="Create student account" fields={["Student name", "Phone/account", "Initial class", "Assigned courses"]} actionLabel="Create Student Account" />
        <InstitutionFormMock title="Edit student information" fields={["Student name", "Phone/account", "Class", "Account status"]} actionLabel="Save Student Changes" />
        <InstitutionFormMock title="Assign student to class" fields={["Select student", "Select class", "Effective date"]} actionLabel="Assign Class" />
        <InstitutionFormMock title="Reset student password" fields={["Select student", "New password", "Confirm password"]} actionLabel="Reset Password" />
        <InstitutionFormMock title="Change account expiry date" fields={["Select student", "Current expiry date", "New expiry date"]} actionLabel="Change Expiry Date" />
      </div>
    </>
  );
}

function TeacherManagement() {
  return (
    <>
      <PageHeader title="Teacher Management" description="Manage teacher accounts, assigned classes, permissions, and login status." />
      <ActionBar labels={["Create Teacher Account", "Export Teacher List"]} />
      <FilterBar searchPlaceholder="Search teachers" filters={["Filter by assigned class", "Filter by account status", "Sort by last login time"]} />
      <div className="mb-8">
        <TeacherManagementTable />
      </div>
      <SectionTitle accent="emerald">Teacher Account Forms</SectionTitle>
      <div className="grid gap-4 lg:grid-cols-2">
        <InstitutionFormMock title="Create teacher account" fields={["Teacher name", "Phone/account", "Assigned classes", "Permissions"]} actionLabel="Create Teacher Account" />
        <InstitutionFormMock title="Edit teacher information" fields={["Teacher name", "Phone/account", "Account status", "Contact note"]} actionLabel="Save Teacher Changes" />
        <InstitutionFormMock title="Assign teacher to class" fields={["Select teacher", "Select class", "Role in class"]} actionLabel="Assign Class" />
        <InstitutionFormMock title="Remove teacher from class" fields={["Select teacher", "Assigned class", "Removal date"]} actionLabel="Remove Class" />
        <InstitutionFormMock title="Reset teacher password" fields={["Select teacher", "New password", "Confirm password"]} actionLabel="Reset Password" />
        <InstitutionFormMock title="Set teacher permissions" fields={["Select teacher", "Course access", "Report access", "Account permissions"]} actionLabel="Set Permissions" />
      </div>
    </>
  );
}

function ClassManagement() {
  return (
    <>
      <PageHeader title="Class Management" description="Review classes, teachers, readings, progress, scores, and class assignment controls." />
      <div className="mb-5 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:grid-cols-[1.2fr_0.8fr_0.8fr_auto_auto]">
        <SearchInput placeholder="Search classes" />
        <SelectMock label="Filter by teacher" />
        <SelectMock label="Sort by average progress" />
        <ActionButton label="Create Class" />
        <ActionButton label="Export Class List" variant="light" />
      </div>
      <ClassManagementTable />
    </>
  );
}

function CourseManagement() {
  return (
    <>
      <PageHeader title="Course Management" description="Authorized courses, assignment actions, book previews, and course progress controls." />
      <ActionBar labels={["View Authorized Courses", "Assign Course to Class", "Assign Course to Student", "Remove Course from Class/Student", "View Books Inside Course", "View Course Progress"]} />
      <FilterBar searchPlaceholder="Search courses" filters={["Filter by course level", "Filter by assigned class", "Sort by number of books"]} />
      <div className="mb-8">
        <CourseManagementTable />
      </div>
      <SectionTitle accent="emerald">Books Inside Selected Course</SectionTitle>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {authorizedBooks.map((book) => (
          <article key={book.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-sm font-extrabold text-blue-700">
              BK
            </div>
            <h3 className="font-extrabold text-slate-900">{book.title}</h3>
            <p className="mt-1 text-sm font-medium text-slate-500">{book.course}</p>
            <span className="mt-4 inline-flex rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">{book.level}</span>
          </article>
        ))}
      </div>
    </>
  );
}

function AccountOpeningExpiry() {
  return (
    <>
      <PageHeader title="Account Management" description="Open accounts, extend validity, and review accounts close to expiry." />
      <ActionBar labels={["Open New Student Accounts", "Open New Teacher Accounts", "Extend Account Validity", "Disable Expired Accounts"]} />
      <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {accountSummary.map((stat) => (
          <InstitutionStatCard key={stat.label} {...stat} />
        ))}
      </div>

      <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <SectionTitle accent="emerald">Open / Extend Account</SectionTitle>
        <div className="grid gap-4 lg:grid-cols-5">
          <SelectMock label="Account type: Student / Teacher" />
          <SelectMock label="Select account" />
          <DateMock label="Set account start date" />
          <DateMock label="Set account expiry date" />
          <button type="button" className="rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-700">
            Save Account Dates
          </button>
        </div>
      </section>

      <div className="mb-5 flex justify-end">
        <ActionButton label="View Expiring Accounts" />
      </div>
      <AccountExpiryTable />
    </>
  );
}

function PersonalCenter() {
  return (
    <>
      <PageHeader title="Personal Center" description="Institution information, contacts, authorized courses, and account validity." />
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-start">
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border-4 border-blue-50 bg-gradient-to-br from-blue-100 to-emerald-100 text-2xl font-extrabold text-blue-700">
              BFS
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">{institutionProfile.name}</h2>
              <p className="mt-1 text-sm font-medium text-slate-500">{institutionProfile.address}</p>
              <span className="mt-3 inline-flex rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">{institutionProfile.status}</span>
            </div>
          </div>

          <div className="grid flex-1 gap-4 lg:grid-cols-2">
            <InfoTile label="Contact person" value={institutionProfile.contactPerson} />
            <InfoTile label="Contact phone" value={institutionProfile.contactPhone} />
            <InfoTile label="Contact email" value={institutionProfile.contactEmail} />
            <InfoTile label="Account validity" value={institutionProfile.accountValidity} />
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50 p-5">
          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-400">Authorized courses</p>
          <div className="flex flex-wrap gap-2">
            {institutionProfile.authorizedCourses.map((course) => (
              <span key={course} className="rounded-xl bg-white px-3 py-2 text-sm font-bold text-slate-700 shadow-sm">{course}</span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {["Edit Institution Information", "Change Logo", "Change Password", "Logout"].map((label) => (
            <button
              key={label}
              type="button"
              className={`rounded-xl px-5 py-2.5 text-sm font-bold shadow-sm ${
                label === "Logout" ? "border border-red-100 bg-red-50 text-red-700 hover:bg-red-100" : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

function ActionBar({ labels }: { labels: string[] }) {
  return (
    <div className="mb-5 flex flex-wrap gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      {labels.map((label, index) => (
        <ActionButton key={label} label={label} variant={index === 0 ? "solid" : "light"} />
      ))}
    </div>
  );
}

function FilterBar({ searchPlaceholder, filters }: { searchPlaceholder: string; filters: string[] }) {
  return (
    <div className="mb-5 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:grid-cols-[1.2fr_repeat(4,minmax(0,0.8fr))]">
      <SearchInput placeholder={searchPlaceholder} />
      {filters.map((filter) => (
        <SelectMock key={filter} label={filter} />
      ))}
    </div>
  );
}

function SearchInput({ placeholder }: { placeholder: string }) {
  return (
    <input
      type="search"
      placeholder={placeholder}
      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-300 focus:bg-white"
    />
  );
}

function SelectMock({ label }: { label: string }) {
  return (
    <select defaultValue="" className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-600 outline-none focus:border-blue-300 focus:bg-white">
      <option value="">{label}</option>
    </select>
  );
}

function DateMock({ label }: { label: string }) {
  return (
    <input
      type="text"
      placeholder={label}
      className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-600 outline-none placeholder:text-slate-400 focus:border-blue-300 focus:bg-white"
    />
  );
}

function ActionButton({
  label,
  variant = "solid",
  onClick,
}: {
  label: string;
  variant?: "solid" | "light";
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
        variant === "solid"
          ? "bg-blue-600 text-white shadow-sm hover:bg-blue-700"
          : "border border-blue-100 bg-blue-50 text-blue-700 hover:bg-blue-100"
      }`}
    >
      {label}
    </button>
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
