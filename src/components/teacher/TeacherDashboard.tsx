"use client";

import { useState } from "react";
import ClassCard from "./ClassCard";
import ClassReportCard from "./ClassReportCard";
import CourseProgressTable from "./CourseProgressTable";
import LearningHistoryTable from "./LearningHistoryTable";
import ProgressBar from "./ProgressBar";
import StudentDetailCard from "./StudentDetailCard";
import StudentTable from "./StudentTable";
import TeacherLayout from "./TeacherLayout";
import TeacherProfileCard from "./TeacherProfileCard";
import TeacherStatCard from "./TeacherStatCard";
import type { TeacherView } from "./TeacherSidebar";
import {
  assignedReadings,
  classDetail,
  classRanking,
  classReportStats,
  courseProgressCards,
  dailyReadingTime,
  studentAssignedCourses,
  studentDetail,
  teacherClasses,
  teacherProfile,
  teacherStats,
  todayActivities,
  weeklyClassProgress,
} from "@/data/teacherMockData";

export default function TeacherDashboard() {
  const [activeView, setActiveView] = useState<TeacherView>("home");

  return (
    <TeacherLayout activeView={activeView} onSelect={setActiveView}>
      {activeView === "home" && <TeacherHome onSelect={setActiveView} />}
      {activeView === "classes" && <MyClasses onSelect={setActiveView} />}
      {activeView === "class-detail" && <ClassDetail onSelect={setActiveView} />}
      {activeView === "students" && <StudentList onSelect={setActiveView} />}
      {activeView === "student-detail" && <StudentDetail />}
      {activeView === "report" && <ClassLearningReport />}
      {activeView === "course-progress" && <CourseBookProgress />}
      {activeView === "account" && <AccountManagement />}
    </TeacherLayout>
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
          Export Report
        </button>
        <button type="button" className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-emerald-700">
          Refresh View
        </button>
      </div>
    </div>
  );
}

function SectionTitle({ children, accent = "emerald" }: { children: React.ReactNode; accent?: "emerald" | "blue" | "sky" }) {
  const accentClass = accent === "blue" ? "bg-blue-500" : accent === "sky" ? "bg-sky-500" : "bg-emerald-500";
  return (
    <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-800">
      <span className={`inline-block h-5 w-1 rounded-full ${accentClass}`} />
      {children}
    </h2>
  );
}

function TeacherHome({ onSelect }: { onSelect: (view: TeacherView) => void }) {
  return (
    <>
      <PageHeader title="Teacher Home" description="A quick view of class activity, student progress, and today's learning signals." />
      <TeacherProfileCard />

      <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {teacherStats.map((stat) => (
          <TeacherStatCard key={stat.label} {...stat} />
        ))}
      </div>

      <section className="mb-8">
        <SectionTitle>My Classes</SectionTitle>
        <div className="grid gap-5 lg:grid-cols-3">
          {teacherClasses.map((classItem) => (
            <ClassCard key={classItem.id} {...classItem} onViewDetail={() => onSelect("class-detail")} />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle accent="sky">Today&apos;s Learning Activity</SectionTitle>
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="divide-y divide-slate-100">
            {todayActivities.map((activity, index) => (
              <div key={activity.id} className="flex items-start gap-4 p-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-sm font-extrabold text-emerald-700">
                  {index + 1}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{activity.student}</p>
                  <p className="mt-1 text-sm text-slate-600">{activity.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function MyClasses({ onSelect }: { onSelect: (view: TeacherView) => void }) {
  return (
    <>
      <PageHeader title="My Classes" description="All assigned classes and their current learning progress." />
      <div className="grid gap-5 lg:grid-cols-3">
        {teacherClasses.map((classItem) => (
          <ClassCard key={classItem.id} {...classItem} onViewDetail={() => onSelect("class-detail")} />
        ))}
      </div>
    </>
  );
}

function ClassDetail({ onSelect }: { onSelect: (view: TeacherView) => void }) {
  return (
    <>
      <PageHeader title="Class Detail" description="Class 3 reading progress, assigned books, and student-level previews." />
      <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          <InfoMetric label="Class name" value={classDetail.className} />
          <InfoMetric label="Teacher name" value={classDetail.teacherName} />
          <InfoMetric label="Students" value={`${classDetail.students}`} />
          <InfoMetric label="Assigned readings" value={classDetail.assignedReadings} />
          <InfoMetric label="Class progress" value={`${classDetail.classReadingProgress}%`} />
          <InfoMetric label="Completed students" value={`${classDetail.completedStudents}`} />
        </div>
      </section>

      <div className="mb-8">
        <SectionTitle>Student List Preview</SectionTitle>
        <StudentTable preview onViewDetail={() => onSelect("student-detail")} />
      </div>

      <div className="mb-8">
        <SectionTitle accent="blue">Assigned Readings</SectionTitle>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
                  <th className="p-4 pl-6">Book title</th>
                  <th className="p-4">Course name</th>
                  <th className="p-4">Level</th>
                  <th className="p-4">Students started</th>
                  <th className="p-4">Students completed</th>
                  <th className="p-4 pr-6">Average progress</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {assignedReadings.map((reading) => (
                  <tr key={reading.id} className="text-sm hover:bg-slate-50/60">
                    <td className="p-4 pl-6 font-bold text-slate-900">{reading.bookTitle}</td>
                    <td className="p-4 text-slate-600">{reading.courseName}</td>
                    <td className="p-4 text-slate-600">{reading.level}</td>
                    <td className="p-4 text-slate-600">{reading.studentsStarted}</td>
                    <td className="p-4 text-slate-600">{reading.studentsCompleted}</td>
                    <td className="p-4 pr-6">
                      <ProgressBar progress={reading.averageProgress} showText={false} />
                      <span className="mt-1 inline-block text-xs font-bold text-slate-600">{reading.averageProgress}%</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div>
        <SectionTitle accent="sky">Class Reading Progress</SectionTitle>
        <div className="grid gap-4 lg:grid-cols-3">
          <ProgressPanel title="Overall class progress" progress={classDetail.classReadingProgress} />
          <ProgressPanel title="Completed students percentage" progress={classDetail.completedStudentsPercentage} colorClass="bg-blue-500" />
          <ProgressPanel title="Active students percentage" progress={classDetail.activeStudentsPercentage} colorClass="bg-sky-500" />
        </div>
      </div>
    </>
  );
}

function StudentList({ onSelect }: { onSelect: (view: TeacherView) => void }) {
  return (
    <>
      <PageHeader title="Student List" description="Search, filter, and review mock student learning status." />
      <FilterBar
        searchPlaceholder="Search students"
        filters={["Filter by class", "Filter by account status", "Sort by progress"]}
      />
      <StudentTable onViewDetail={() => onSelect("student-detail")} />
    </>
  );
}

function StudentDetail() {
  return (
    <>
      <PageHeader title="Student Detail" description="A focused profile, assigned readings, and complete learning history for Li Ming." />
      <div className="mb-8">
        <StudentDetailCard />
      </div>

      <div className="mb-8">
        <SectionTitle>Reading Progress</SectionTitle>
        <div className="grid gap-4 lg:grid-cols-4">
          <ProgressPanel title="Overall progress" progress={studentDetail.readingProgress} />
          <InfoMetric label="Listening time" value={studentDetail.listeningTime} />
          <InfoMetric label="Reading time" value={studentDetail.readingTime} />
          <ProgressPanel title="Completion percentage" progress={studentDetail.completionPercentage} colorClass="bg-blue-500" />
        </div>
      </div>

      <div className="mb-8">
        <SectionTitle accent="blue">Assigned Courses / Readings</SectionTitle>
        <SimpleCoursesTable />
      </div>

      <div>
        <SectionTitle accent="sky">Student Learning History</SectionTitle>
        <LearningHistoryTable studentName={studentDetail.name} showStudentName={false} />
      </div>
    </>
  );
}

function ClassLearningReport() {
  const maxHours = Math.max(...dailyReadingTime.map((item) => item.hours));

  return (
    <>
      <PageHeader title="Class Learning Report" description="Class-level reading time, completion rate, ranking, and progress summaries." />
      <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {classReportStats.map((stat) => (
          <TeacherStatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <ClassReportCard title="Daily Reading Time Chart">
          <div className="flex h-56 items-end gap-3">
            {dailyReadingTime.map((item) => (
              <div key={item.day} className="flex flex-1 flex-col items-center gap-2">
                <div className="flex h-40 w-full items-end rounded-t-xl bg-slate-50">
                  <div
                    className="w-full rounded-t-xl bg-gradient-to-t from-emerald-500 to-sky-400"
                    style={{ height: `${(item.hours / maxHours) * 100}%` }}
                  />
                </div>
                <p className="text-xs font-bold text-slate-500">{item.day}</p>
                <p className="text-xs font-extrabold text-slate-900">{item.hours}h</p>
              </div>
            ))}
          </div>
        </ClassReportCard>

        <ClassReportCard title="Weekly Progress Chart">
          <div className="space-y-5">
            {weeklyClassProgress.map((item) => (
              <ProgressBar key={item.className} progress={item.progress} label={item.className} colorClass="bg-blue-500" heightClass="h-2.5" />
            ))}
          </div>
        </ClassReportCard>

        <ClassReportCard title="Completion Rate Progress Bar">
          <ProgressBar progress={72} label="Class completion percentage" colorClass="bg-emerald-500" heightClass="h-4" />
        </ClassReportCard>

        <ClassReportCard title="Class Ranking Table">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-bold uppercase tracking-wide text-slate-500">
                  <th className="pb-3">Rank</th>
                  <th className="pb-3">Class name</th>
                  <th className="pb-3">Average progress</th>
                  <th className="pb-3">Average score</th>
                  <th className="pb-3">Active students</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {classRanking.map((row) => (
                  <tr key={row.rank} className="text-sm">
                    <td className="py-3 font-extrabold text-emerald-700">#{row.rank}</td>
                    <td className="py-3 font-bold text-slate-800">{row.className}</td>
                    <td className="py-3 text-slate-600">{row.averageProgress}%</td>
                    <td className="py-3 text-slate-600">{row.averageScore}</td>
                    <td className="py-3 text-slate-600">{row.activeStudents}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ClassReportCard>
      </div>
    </>
  );
}

function CourseBookProgress() {
  return (
    <>
      <PageHeader title="Course / Book Progress" description="Assigned courses, books, task counts, and average progress." />
      <div className="mb-8 grid gap-5 lg:grid-cols-3">
        {courseProgressCards.map((course) => (
          <article key={course.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wide text-emerald-600">Assigned Course</p>
            <h3 className="mt-1 text-lg font-extrabold text-slate-900">{course.name}</h3>
            <div className="my-5 grid grid-cols-3 gap-3">
              <InfoMetric label={course.booksLabel} value={`${course.books}`} compact />
              <InfoMetric label="Started" value={`${course.studentsStarted}`} compact />
              <InfoMetric label="Completed" value={`${course.studentsCompleted}`} compact />
            </div>
            <ProgressBar progress={course.averageProgress} label="Average progress" />
          </article>
        ))}
      </div>
      <CourseProgressTable />
    </>
  );
}

function AccountManagement() {
  return (
    <>
      <PageHeader title="Account Management" description="Teacher account information and assigned class access." />
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-emerald-50 bg-gradient-to-br from-emerald-100 to-sky-100 text-3xl font-extrabold text-emerald-700">
              MZ
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">{teacherProfile.name}</h2>
              <p className="mt-1 text-sm font-medium text-slate-500">{teacherProfile.phone}</p>
              <p className="mt-3 text-sm font-semibold text-slate-700">{teacherProfile.institution}</p>
            </div>
          </div>
          <div className="flex-1 rounded-2xl border border-slate-100 bg-slate-50 p-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-400">Assigned classes</p>
            <div className="flex flex-wrap gap-2">
              {teacherClasses.map((classItem) => (
                <span key={classItem.id} className="rounded-xl bg-white px-3 py-2 text-sm font-bold text-slate-700 shadow-sm">
                  {classItem.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button type="button" className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-700">
            Change Password
          </button>
          <button type="button" className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 shadow-sm hover:bg-slate-50">
            Edit Profile
          </button>
          <button type="button" className="rounded-xl border border-red-100 bg-red-50 px-5 py-2.5 text-sm font-bold text-red-700 hover:bg-red-100">
            Logout
          </button>
        </div>
      </section>
    </>
  );
}

function FilterBar({ searchPlaceholder, filters }: { searchPlaceholder: string; filters: string[] }) {
  return (
    <div className="mb-5 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:grid-cols-[1.2fr_repeat(4,minmax(0,0.8fr))]">
      <input
        type="search"
        placeholder={searchPlaceholder}
        className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-emerald-300 focus:bg-white"
      />
      {filters.map((filter) => (
        <select
          key={filter}
          defaultValue=""
          className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-600 outline-none focus:border-emerald-300 focus:bg-white"
        >
          <option value="">{filter}</option>
        </select>
      ))}
    </div>
  );
}

function InfoMetric({ label, value, compact = false }: { label: string; value: string; compact?: boolean }) {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${compact ? "p-3" : "p-5"}`}>
      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{label}</p>
      <p className={`${compact ? "mt-1 text-base" : "mt-2 text-lg"} font-extrabold text-slate-900`}>{value}</p>
    </div>
  );
}

function ProgressPanel({ title, progress, colorClass = "bg-emerald-500" }: { title: string; progress: number; colorClass?: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <ProgressBar progress={progress} label={title} colorClass={colorClass} heightClass="h-3" />
    </div>
  );
}

function SimpleCoursesTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
              <th className="p-4 pl-6">Course name</th>
              <th className="p-4">Book title</th>
              <th className="p-4">Level</th>
              <th className="p-4">Progress</th>
              <th className="p-4 pr-6">Completion status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {studentAssignedCourses.map((course) => (
              <tr key={course.id} className="text-sm hover:bg-slate-50/60">
                <td className="p-4 pl-6 font-bold text-slate-900">{course.courseName}</td>
                <td className="p-4 text-slate-600">{course.bookTitle}</td>
                <td className="p-4 text-slate-600">{course.level}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-20 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full rounded-full bg-emerald-500" style={{ width: `${course.progress}%` }} />
                    </div>
                    <span className="text-xs font-bold text-slate-600">{course.progress}%</span>
                  </div>
                </td>
                <td className="p-4 pr-6">
                  <span className={`rounded-lg px-2 py-1 text-xs font-bold ${course.status === "Completed" ? "bg-emerald-50 text-emerald-700" : "bg-blue-50 text-blue-700"}`}>
                    {course.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
