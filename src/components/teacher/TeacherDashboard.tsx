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
  assignedCourses,
  audioBookDetails,
  libraryBooks,
} from "@/data/studentMockData";
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
      {activeView === "resources" && <TeacherResourceManagement />}
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

      <div className="mb-8">
        <SectionTitle accent="sky">Class Reading Progress</SectionTitle>
        <div className="grid gap-4 lg:grid-cols-3">
          <ProgressPanel title="Overall class progress" progress={classDetail.classReadingProgress} />
          <ProgressPanel title="Completed students percentage" progress={classDetail.completedStudentsPercentage} colorClass="bg-blue-500" />
          <ProgressPanel title="Active students percentage" progress={classDetail.activeStudentsPercentage} colorClass="bg-sky-500" />
        </div>
      </div>

      <div>
        <SectionTitle accent="blue">Class Video Recordings</SectionTitle>
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-2xl border border-dashed border-blue-200 bg-blue-50/60 p-6 shadow-sm">
            <div className="flex min-h-52 flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-sm font-extrabold text-blue-700 shadow-sm">
                UP
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">Upload Class Recording</h3>
              <p className="mt-2 max-w-sm text-sm text-slate-600">
                Add a video recording for this class. Supported mock formats: MP4, MOV, WEBM.
              </p>
              <div className="mt-5 grid w-full max-w-md gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-blue-100 bg-white px-3 py-2.5 text-left text-sm font-semibold text-slate-500">
                  Recording title
                </div>
                <div className="rounded-xl border border-blue-100 bg-white px-3 py-2.5 text-left text-sm font-semibold text-slate-500">
                  Class date
                </div>
              </div>
              <button type="button" className="mt-4 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700">
                Upload Recording
              </button>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="mb-4 text-lg font-extrabold text-slate-900">Uploaded Recordings</h3>
            <div className="space-y-3">
              {[
                { title: "Week 1 Reading Introduction", date: "2026-05-04", duration: "38 min" },
                { title: "Audio Practice Review", date: "2026-05-06", duration: "42 min" },
                { title: "Follow-Reading Feedback Class", date: "2026-05-08", duration: "35 min" },
              ].map((video) => (
                <div key={video.title} className="flex items-center justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
                      <svg className="ml-0.5 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="truncate font-bold text-slate-900">{video.title}</p>
                      <p className="text-sm font-medium text-slate-500">{video.date} • {video.duration}</p>
                    </div>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <button type="button" className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700 hover:bg-blue-100">
                      View
                    </button>
                    <button type="button" className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-bold text-slate-600 hover:bg-slate-200">
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
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

function TeacherResourceManagement() {
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const selectedBook = libraryBooks.find((book) => book.id === selectedBookId);
  const selectedDetails = selectedBook ? audioBookDetails[selectedBook.id] : null;
  const courseFolders = assignedCourses.map((course, index) => ({
    ...course,
    books: libraryBooks.filter((_, bookIndex) => bookIndex % assignedCourses.length === index || bookIndex === index),
  }));
  const teacherPlaylist = libraryBooks.filter((book) => book.status === "In Progress" || book.status === "Completed");

  return (
    <div className={selectedBook && selectedDetails ? "pb-32" : ""}>
      <PageHeader title="Resource Management" description="Review course folders, books, audio resources, and class materials." />

      <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="grid gap-3 lg:grid-cols-[1.2fr_repeat(3,minmax(0,0.8fr))]">
          <input
            type="search"
            placeholder="Search resources"
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400 focus:border-emerald-300 focus:bg-white"
          />
          <select className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-600 outline-none focus:border-emerald-300 focus:bg-white">
            <option>Filter by class</option>
          </select>
          <select className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-600 outline-none focus:border-emerald-300 focus:bg-white">
            <option>Filter by course</option>
          </select>
          <select className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-600 outline-none focus:border-emerald-300 focus:bg-white">
            <option>Sort materials</option>
          </select>
        </div>
      </div>

      <div className="space-y-5">
        {courseFolders.map((folder, index) => (
          <section key={folder.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 bg-slate-50 px-5 py-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-sm font-extrabold text-emerald-700">
                    C{index + 1}
                  </div>
                  <div>
                    <h2 className="font-extrabold text-slate-900">{folder.title}</h2>
                    <p className="text-xs font-semibold text-slate-500">Teacher: {folder.teacher} • {folder.books.length} materials</p>
                  </div>
                </div>
              </div>
            </div>
            <TeacherResourceRows books={folder.books} selectedBookId={selectedBookId} onSelect={setSelectedBookId} />
          </section>
        ))}

        <section className="overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-sm">
          <div className="border-b border-blue-100 bg-blue-50 px-5 py-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-extrabold text-slate-900">Teacher Playlist</h2>
                <p className="text-xs font-semibold text-slate-500">A visual playlist for resources to preview before assigning or discussing in class.</p>
              </div>
              <button type="button" className="rounded-xl bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm hover:bg-blue-100">
                Create Playlist
              </button>
            </div>
          </div>
          <TeacherResourceRows books={teacherPlaylist} selectedBookId={selectedBookId} onSelect={setSelectedBookId} />
        </section>
      </div>

      {selectedBook && selectedDetails && (
        <TeacherAudioBar
          bookId={selectedBook.id}
          title={selectedBook.title}
          courseName={selectedDetails.courseName}
          current={selectedDetails.current}
          duration={selectedDetails.duration}
          progress={selectedBook.progress}
        />
      )}
    </div>
  );
}

function TeacherResourceRows({
  books,
  selectedBookId,
  onSelect,
}: {
  books: typeof libraryBooks;
  selectedBookId: string | null;
  onSelect: (bookId: string) => void;
}) {
  return (
    <div>
      <div className="hidden border-b border-slate-100 px-5 py-3 sm:block">
        <div className="grid grid-cols-[44px_1fr_90px_110px_140px] items-center gap-4 text-xs font-bold uppercase tracking-wide text-slate-500">
          <span>#</span>
          <span>Material title</span>
          <span>Level</span>
          <span>Status</span>
          <span className="text-right">Action</span>
        </div>
      </div>
      <div className="divide-y divide-slate-100">
        {books.map((book, index) => {
          const isSelected = selectedBookId === book.id;
          return (
            <div key={book.id} className={`grid grid-cols-[44px_1fr_90px_110px_140px] items-center gap-4 px-5 py-4 transition-colors hover:bg-slate-50/70 ${isSelected ? "bg-emerald-50/70" : ""}`}>
              <button
                type="button"
                onClick={() => onSelect(book.id)}
                className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-extrabold ${isSelected ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-700"}`}
                aria-label={`Preview ${book.title}`}
              >
                {isSelected ? "▶" : index + 1}
              </button>
              <div className="min-w-0">
                <button type="button" onClick={() => onSelect(book.id)} className="block w-full truncate text-left font-bold text-slate-900">
                  {book.title}
                </button>
                <p className="mt-1 text-xs font-semibold text-slate-500">Audio and reading resource</p>
              </div>
              <span className="rounded-lg bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700">Level {book.level}</span>
              <span className="text-sm font-semibold text-slate-500">{isSelected ? "Previewing" : book.status}</span>
              <div className="flex justify-end gap-2">
                <button type="button" onClick={() => onSelect(book.id)} className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-emerald-700">
                  Preview
                </button>
                <button type="button" className="rounded-xl bg-slate-50 px-3 py-2 text-sm font-bold text-slate-600 hover:bg-slate-100">
                  Assign
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TeacherAudioBar({
  title,
  courseName,
  current,
  duration,
  progress,
}: {
  bookId: string;
  title: string;
  courseName: string;
  current: string;
  duration: string;
  progress: number;
}) {
  const playerProgress = Math.max(progress, 15);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-10px_30px_rgba(15,23,42,0.10)] backdrop-blur md:left-72">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 lg:flex-row lg:items-center">
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-bold text-emerald-600">{courseName}</p>
          <h3 className="truncate text-sm font-extrabold text-slate-900">{title}</h3>
        </div>
        <div className="flex flex-1 items-center gap-4 lg:max-w-xl">
          <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md hover:bg-emerald-700">
            <svg className="ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </button>
          <div className="flex-1">
            <div className="mb-1 flex justify-between text-xs font-medium text-slate-500">
              <span>{current}</span>
              <span>{duration}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-emerald-500" style={{ width: `${playerProgress}%` }} />
            </div>
          </div>
        </div>
        <button type="button" className="shrink-0 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-2.5 text-center text-sm font-bold text-emerald-700 hover:bg-emerald-100">
          View Resource Notes
        </button>
      </div>
    </div>
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
