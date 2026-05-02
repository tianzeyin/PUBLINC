"use client";

import InstitutionLayout from "@/components/institution/InstitutionLayout";
import type { InstitutionView } from "@/components/institution/InstitutionSidebar";
import ProgressBar from "@/components/institution/ProgressBar";
import { ChipList, StatusBadge, TableShell } from "@/components/institution/StudentManagementTable";
import { authorizedBooks, institutionClasses, institutionCourses, institutionStudents } from "@/data/institutionMockData";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function InstitutionCourseDetailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const courseId = searchParams.get("course") ?? "course-1";
  const course = institutionCourses.find((item) => item.id === courseId) ?? institutionCourses[0];
  const courseBooks = authorizedBooks.filter((book) => book.course === course.name);
  const visibleBooks = courseBooks.length > 0 ? courseBooks : authorizedBooks.slice(0, 3);
  const assignedClasses = institutionClasses.filter((classItem) =>
    course.assignedClasses.some((className) => classItem.name.includes(className)),
  );
  const assignedStudents = institutionStudents.filter((student) => student.courses.includes(course.name));
  const handleSelect = (view: InstitutionView) => {
    router.push(view === "home" ? "/institution" : `/institution?section=${view}`);
  };

  return (
    <InstitutionLayout activeView="courses" onSelect={handleSelect}>
      <div className="max-w-6xl">
        <Link href="/institution?section=courses" className="mb-5 inline-flex text-sm font-bold text-blue-700 hover:text-blue-800">
          Back to Course Management
        </Link>

        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-blue-600">Course Detail</p>
              <h1 className="mt-1 text-3xl font-extrabold text-slate-900">{course.name}</h1>
              <p className="mt-2 text-sm font-semibold text-slate-500">Level {course.level}</p>
            </div>
            <div className="rounded-xl bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700">
              {course.assignedStudents} assigned students
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            <InfoTile label="Course level" value={course.level} />
            <InfoTile label="Books / tasks" value={`${course.books}`} />
            <InfoTile label="Assigned classes" value={`${course.assignedClasses.length}`} />
            <InfoTile label="Assigned students" value={`${course.assignedStudents}`} />
          </div>

          <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-400">Average course progress</p>
            <ProgressBar progress={course.progress} colorClass="bg-blue-600" />
          </div>
        </section>

        <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
            <SectionTitle>Books In This Course</SectionTitle>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {visibleBooks.map((book) => (
                <article key={book.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-sm font-extrabold text-blue-700">
                    BK
                  </div>
                  <h3 className="font-extrabold text-slate-900">{book.title}</h3>
                  <p className="mt-1 text-sm font-medium text-slate-500">{book.course}</p>
                  <span className="mt-4 inline-flex rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">{book.level}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <SectionTitle>Classes Assigned</SectionTitle>
            <div className="space-y-3">
              {(assignedClasses.length > 0 ? assignedClasses : institutionClasses.slice(0, 2)).map((classItem) => (
                <div key={classItem.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-extrabold text-slate-900">{classItem.name}</p>
                      <p className="mt-1 text-xs font-semibold text-slate-500">{classItem.teacher} &middot; {classItem.students} students</p>
                    </div>
                    <span className="rounded-lg bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700">{classItem.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <SectionTitle>Course Actions</SectionTitle>
            <div className="grid gap-2">
              {["Assign Course to Class", "Assign Course to Student", "Remove Course from Class", "Remove Course from Student", "View Course Progress"].map((label) => (
                <button key={label} type="button" className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-2.5 text-left text-sm font-bold text-blue-700 hover:bg-blue-100">
                  {label}
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <SectionTitle>Assign Course To Class</SectionTitle>
            <div className="space-y-3">
              {institutionClasses.map((classItem) => (
                <label key={classItem.id} className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <span>
                    <span className="block text-sm font-extrabold text-slate-900">{classItem.name}</span>
                    <span className="text-xs font-semibold text-slate-500">{classItem.teacher} &middot; {classItem.students} students</span>
                  </span>
                  <input type="checkbox" defaultChecked={course.assignedClasses.some((className) => classItem.name.includes(className))} className="h-4 w-4 rounded border-slate-300 text-blue-600" />
                </label>
              ))}
            </div>
            <button type="button" className="mt-5 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-700">
              Save Class Assignment
            </button>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <SectionTitle>Assign Course To Student</SectionTitle>
            <div className="grid gap-3 md:grid-cols-2">
              <MockSelect label="Select student" value="Select student" />
              <MockSelect label="Assignment status" value="Assigned" />
              <MockField label="Start date" />
              <MockField label="Assignment note" />
            </div>
            <div className="mt-4 space-y-3">
              {institutionStudents.slice(0, 4).map((student) => (
                <label key={student.id} className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <span>
                    <span className="block text-sm font-extrabold text-slate-900">{student.name}</span>
                    <span className="text-xs font-semibold text-slate-500">{student.className}</span>
                  </span>
                  <input type="checkbox" defaultChecked={student.courses.includes(course.name)} className="h-4 w-4 rounded border-slate-300 text-blue-600" />
                </label>
              ))}
            </div>
            <button type="button" className="mt-5 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700">
              Save Student Assignment
            </button>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
            <SectionTitle>Assigned Students Preview</SectionTitle>
            <TableShell minWidth="780px">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
                  {["Student name", "Phone/account", "Class", "Assigned courses", "Status"].map((heading) => (
                    <th key={heading} className="p-4 first:pl-6 last:pr-6">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {(assignedStudents.length > 0 ? assignedStudents : institutionStudents.slice(0, 3)).map((student) => (
                  <tr key={student.id} className="text-sm">
                    <td className="p-4 pl-6 font-bold text-slate-900">{student.name}</td>
                    <td className="p-4 text-slate-600">{student.phone}</td>
                    <td className="p-4 text-slate-600">{student.className}</td>
                    <td className="p-4"><ChipList values={student.courses} /></td>
                    <td className="p-4 pr-6"><StatusBadge status={student.status} /></td>
                  </tr>
                ))}
              </tbody>
            </TableShell>
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
