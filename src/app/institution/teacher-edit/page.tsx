"use client";

import InstitutionLayout from "@/components/institution/InstitutionLayout";
import type { InstitutionView } from "@/components/institution/InstitutionSidebar";
import { ChipList, StatusBadge } from "@/components/institution/StudentManagementTable";
import { institutionClasses, institutionCourses, institutionTeachers } from "@/data/institutionMockData";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function InstitutionTeacherEditPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const teacherId = searchParams.get("teacher") ?? "teacher-1";
  const teacher = institutionTeachers.find((item) => item.id === teacherId) ?? institutionTeachers[0];
  const handleSelect = (view: InstitutionView) => {
    router.push(view === "home" ? "/institution" : `/institution?section=${view}`);
  };

  return (
    <InstitutionLayout activeView="teachers" onSelect={handleSelect}>
      <div className="max-w-6xl">
        <Link href="/institution?section=teachers" className="mb-5 inline-flex text-sm font-bold text-blue-700 hover:text-blue-800">
          Back to Teacher Management
        </Link>

        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-emerald-100 text-2xl font-extrabold text-blue-700">
                {teacher.name.split(" ").map((part) => part[0]).join("")}
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-blue-600">Teacher Detail</p>
                <h1 className="mt-1 text-3xl font-extrabold text-slate-900">Edit {teacher.name}</h1>
                <p className="mt-1 text-sm font-semibold text-slate-500">{teacher.phone}</p>
              </div>
            </div>
            <StatusBadge status={teacher.status} />
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            <InfoTile label="Teacher name" value={teacher.name} />
            <InfoTile label="Phone/account" value={teacher.phone} />
            <InfoTile label="Students managed" value={`${teacher.students}`} />
            <InfoTile label="Last login" value={teacher.lastLogin} />
          </div>

          <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-400">Assigned classes</p>
            <ChipList values={teacher.classes} />
          </div>
        </section>

        <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <SectionTitle>Edit Teacher Information</SectionTitle>
            <div className="grid gap-3 md:grid-cols-2">
              {["Teacher name", "Phone/account", "Email", "Account status"].map((field) => (
                <MockField key={field} label={field} />
              ))}
            </div>
            <button type="button" className="mt-5 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700">
              Save Teacher Changes
            </button>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <SectionTitle>Teacher Actions</SectionTitle>
            <div className="grid gap-2">
              {["Reset Password", "Disable / Enable Account", "Set Permissions", "Send Login Notice"].map((label) => (
                <button key={label} type="button" className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-2.5 text-left text-sm font-bold text-blue-700 hover:bg-blue-100">
                  {label}
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <SectionTitle>Assign / Remove Classes</SectionTitle>
            <div className="grid gap-3 md:grid-cols-2">
              <MockSelect label="Assign class" value="Select class" />
              <MockSelect label="Remove class" value="Select assigned class" />
              <MockField label="Role in class" />
              <MockField label="Effective date" />
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {institutionClasses.map((classItem) => (
                <label key={classItem.id} className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <span>
                    <span className="block text-sm font-extrabold text-slate-900">{classItem.name}</span>
                    <span className="text-xs font-semibold text-slate-500">{classItem.students} students &middot; {classItem.readings}</span>
                  </span>
                  <input type="checkbox" defaultChecked={teacher.classes.some((className) => classItem.name.includes(className))} className="h-4 w-4 rounded border-slate-300 text-blue-600" />
                </label>
              ))}
            </div>
            <button type="button" className="mt-5 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-700">
              Save Class Access
            </button>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <SectionTitle>Permissions</SectionTitle>
            <div className="space-y-3">
              {["View student learning data", "Manage class recordings", "Assign courses and books", "Export class reports"].map((permission) => (
                <label key={permission} className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <span className="text-sm font-bold text-slate-800">{permission}</span>
                  <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-slate-300 text-blue-600" />
                </label>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-400">Course access preview</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {institutionCourses.map((course) => (
                  <div key={course.id} className="rounded-xl bg-white p-3 text-sm shadow-sm">
                    <p className="font-bold text-slate-900">{course.name}</p>
                    <p className="mt-1 text-xs font-semibold text-slate-500">{course.level} &middot; {course.books} books/tasks</p>
                  </div>
                ))}
              </div>
            </div>
            <button type="button" className="mt-5 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700">
              Save Permissions
            </button>
          </section>
        </div>
      </div>
    </InstitutionLayout>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-800">
      <span className="inline-block h-5 w-1 rounded-full bg-blue-500" />
      {children}
    </h2>
  );
}

function InfoTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-2 text-sm font-extrabold text-slate-900">{value}</p>
    </div>
  );
}

function MockField({ label }: { label: string }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-400">{label}</span>
      <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-600 outline-none focus:border-blue-300 focus:bg-white" placeholder={label} />
    </label>
  );
}

function MockSelect({ label, value }: { label: string; value: string }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-400">{label}</span>
      <select defaultValue={value} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-600 outline-none focus:border-blue-300 focus:bg-white">
        <option>{value}</option>
      </select>
    </label>
  );
}
