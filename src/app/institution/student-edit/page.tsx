"use client";

import InstitutionLayout from "@/components/institution/InstitutionLayout";
import type { InstitutionView } from "@/components/institution/InstitutionSidebar";
import { ChipList, StatusBadge } from "@/components/institution/StudentManagementTable";
import { authorizedBooks, institutionClasses, institutionCourses, institutionStudents } from "@/data/institutionMockData";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function InstitutionStudentEditPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const studentId = searchParams.get("student") ?? "stu-1";
  const student = institutionStudents.find((item) => item.id === studentId) ?? institutionStudents[0];
  const handleSelect = (view: InstitutionView) => {
    router.push(view === "home" ? "/institution" : `/institution?section=${view}`);
  };

  return (
    <InstitutionLayout activeView="students" onSelect={handleSelect}>
      <div className="max-w-6xl">
        <Link href="/institution?section=students" className="mb-5 inline-flex text-sm font-bold text-blue-700 hover:text-blue-800">
          Back to Student Management
        </Link>

        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-emerald-100 text-2xl font-extrabold text-blue-700">
                {student.name.split(" ").map((part) => part[0]).join("")}
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-blue-600">Student Detail</p>
                <h1 className="mt-1 text-3xl font-extrabold text-slate-900">Edit {student.name}</h1>
                <p className="mt-1 text-sm font-semibold text-slate-500">{student.phone}</p>
              </div>
            </div>
            <StatusBadge status={student.status} />
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            <InfoTile label="Student name" value={student.name} />
            <InfoTile label="Phone/account" value={student.phone} />
            <InfoTile label="Current class" value={student.className} />
            <InfoTile label="Account expiry" value={student.expiryDate} />
          </div>

          <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-400">Assigned courses</p>
            <ChipList values={student.courses} />
          </div>
        </section>

        <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <SectionTitle>Edit Student Information</SectionTitle>
            <div className="grid gap-3 md:grid-cols-2">
              {["Student name", "Phone/account", "Parent contact", "Account status"].map((field) => (
                <MockField key={field} label={field} />
              ))}
            </div>
            <button type="button" className="mt-5 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700">
              Save Student Changes
            </button>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <SectionTitle>Account Actions</SectionTitle>
            <div className="grid gap-2">
              {["Reset Password", "Disable / Enable Account", "Change Account Expiry", "Send Account Notice"].map((label) => (
                <button key={label} type="button" className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-2.5 text-left text-sm font-bold text-blue-700 hover:bg-blue-100">
                  {label}
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <SectionTitle>Assign Class</SectionTitle>
            <div className="grid gap-3 md:grid-cols-2">
              <MockSelect label="Current class" value={student.className} />
              <MockSelect label="Assign to class" value="Select class" />
              <MockField label="Effective date" />
              <MockField label="Assignment note" />
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {institutionClasses.map((classItem) => (
                <div key={classItem.id} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-sm font-extrabold text-slate-900">{classItem.name}</p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">{classItem.teacher} &middot; {classItem.students} students</p>
                </div>
              ))}
            </div>
            <button type="button" className="mt-5 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-700">
              Save Class Assignment
            </button>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <SectionTitle>Assign Courses / Books</SectionTitle>
            <div className="space-y-3">
              {institutionCourses.map((course) => (
                <label key={course.id} className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <span>
                    <span className="block text-sm font-extrabold text-slate-900">{course.name}</span>
                    <span className="text-xs font-semibold text-slate-500">{course.level} &middot; {course.books} books/tasks</span>
                  </span>
                  <input type="checkbox" defaultChecked={student.courses.includes(course.name)} className="h-4 w-4 rounded border-slate-300 text-blue-600" />
                </label>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-400">Available book preview</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {authorizedBooks.map((book) => (
                  <div key={book.id} className="rounded-xl bg-white p-3 text-sm shadow-sm">
                    <p className="font-bold text-slate-900">{book.title}</p>
                    <p className="mt-1 text-xs font-semibold text-slate-500">{book.course} &middot; Level {book.level}</p>
                  </div>
                ))}
              </div>
            </div>
            <button type="button" className="mt-5 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700">
              Save Course Assignment
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
