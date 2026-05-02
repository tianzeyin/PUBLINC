"use client";

import InstitutionLayout from "@/components/institution/InstitutionLayout";
import type { InstitutionView } from "@/components/institution/InstitutionSidebar";
import ProgressBar from "@/components/institution/ProgressBar";
import { ChipList, StatusBadge, TableShell } from "@/components/institution/StudentManagementTable";
import { authorizedBooks, institutionClasses, institutionStudents, institutionTeachers } from "@/data/institutionMockData";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function InstitutionClassDetailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const classId = searchParams.get("class") ?? "class-3";
  const classItem = institutionClasses.find((item) => item.id === classId) ?? institutionClasses[0];
  const classStudents = institutionStudents.filter((student) => student.className === classItem.name);
  const fallbackStudents = classStudents.length > 0 ? classStudents : institutionStudents.slice(0, 3);
  const handleSelect = (view: InstitutionView) => {
    router.push(view === "home" ? "/institution" : `/institution?section=${view}`);
  };

  return (
    <InstitutionLayout activeView="classes" onSelect={handleSelect}>
      <div className="max-w-6xl">
        <Link href="/institution?section=classes" className="mb-5 inline-flex text-sm font-bold text-blue-700 hover:text-blue-800">
          Back to Class Management
        </Link>

        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-blue-600">Class Detail</p>
              <h1 className="mt-1 text-3xl font-extrabold text-slate-900">{classItem.name}</h1>
              <p className="mt-2 text-sm font-semibold text-slate-500">Assigned teacher: {classItem.teacher}</p>
            </div>
            <div className="rounded-xl bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700">
              {classItem.activeStudents} active today
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            <InfoTile label="Students" value={`${classItem.students}`} />
            <InfoTile label="Assigned readings" value={classItem.readings} />
            <InfoTile label="Average score" value={`${classItem.score}`} />
            <InfoTile label="Active students" value={`${classItem.activeStudents}`} />
          </div>

          <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-400">Average class progress</p>
            <ProgressBar progress={classItem.progress} colorClass="bg-blue-600" />
          </div>
        </section>

        <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <SectionTitle>Edit Class Information</SectionTitle>
            <div className="grid gap-3 md:grid-cols-2">
              <MockField label="Class name" />
              <MockSelect label="Assigned teacher" value={classItem.teacher} />
              <MockField label="Class capacity" />
              <MockField label="Class note" />
            </div>
            <button type="button" className="mt-5 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700">
              Save Class Changes
            </button>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <SectionTitle>Class Actions</SectionTitle>
            <div className="grid gap-2">
              {["Assign Teacher", "Assign Readings", "Add Students", "Remove Students", "Export Class Report"].map((label) => (
                <button key={label} type="button" className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-2.5 text-left text-sm font-bold text-blue-700 hover:bg-blue-100">
                  {label}
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
            <SectionTitle>Students In This Class</SectionTitle>
            <TableShell minWidth="760px">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
                  {["Student name", "Phone/account", "Assigned courses", "Status", "Expiry date"].map((heading) => (
                    <th key={heading} className="p-4 first:pl-6 last:pr-6">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {fallbackStudents.map((student) => (
                  <tr key={student.id} className="text-sm">
                    <td className="p-4 pl-6 font-bold text-slate-900">{student.name}</td>
                    <td className="p-4 text-slate-600">{student.phone}</td>
                    <td className="p-4"><ChipList values={student.courses} /></td>
                    <td className="p-4"><StatusBadge status={student.status} /></td>
                    <td className="p-4 pr-6 text-slate-600">{student.expiryDate}</td>
                  </tr>
                ))}
              </tbody>
            </TableShell>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <SectionTitle>Assign Teacher</SectionTitle>
            <div className="space-y-3">
              {institutionTeachers.map((teacher) => (
                <label key={teacher.id} className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <span>
                    <span className="block text-sm font-extrabold text-slate-900">{teacher.name}</span>
                    <span className="text-xs font-semibold text-slate-500">{teacher.students} students managed</span>
                  </span>
                  <input type="radio" name="teacher" defaultChecked={teacher.name === classItem.teacher} className="h-4 w-4 border-slate-300 text-blue-600" />
                </label>
              ))}
            </div>
            <button type="button" className="mt-5 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-700">
              Save Teacher Assignment
            </button>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <SectionTitle>Assign Readings</SectionTitle>
            <div className="space-y-3">
              {authorizedBooks.map((book) => (
                <label key={book.id} className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <span>
                    <span className="block text-sm font-extrabold text-slate-900">{book.title}</span>
                    <span className="text-xs font-semibold text-slate-500">{book.course} &middot; Level {book.level}</span>
                  </span>
                  <input type="checkbox" defaultChecked={book.course.includes("English") || classItem.name.includes("Audio")} className="h-4 w-4 rounded border-slate-300 text-blue-600" />
                </label>
              ))}
            </div>
            <button type="button" className="mt-5 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700">
              Save Reading Assignment
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
