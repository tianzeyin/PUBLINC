export const teacherProfile = {
  name: "Ms. Zhang",
  username: "zhang.teacher",
  institution: "Beijing Future School",
  assignedClasses: 3,
  totalStudents: 86,
  todayActivity: "42 students active today",
  classProgressSummary: "Average class progress: 64%",
  phone: "13900000000",
};

export const teacherStats = [
  { label: "Total Classes", value: "3", tone: "blue" },
  { label: "Total Students", value: "86", tone: "emerald" },
  { label: "Active Today", value: "42", tone: "cyan" },
  { label: "Average Reading Progress", value: "64%", tone: "indigo" },
  { label: "Completed Books This Week", value: "38", tone: "green" },
  { label: "Average Follow-Reading Score", value: "87", tone: "sky" },
];

export const todayActivities = [
  { id: "act-1", student: "Li Ming", detail: "completed \"Animal Stories\"" },
  { id: "act-2", student: "Wang Yu", detail: "listened to \"The Little Prince\" for 18 minutes" },
  { id: "act-3", student: "Chen Wei", detail: "scored 91 on follow-reading practice" },
  { id: "act-4", student: "Liu Xin", detail: "started \"Science Readers\"" },
];

export const teacherClasses = [
  {
    id: "class-3",
    name: "Class 3 - English Reading",
    students: 32,
    courses: ["English Reading Level 1", "Audio Reading Practice"],
    averageProgress: 68,
    activeToday: 19,
  },
  {
    id: "class-4",
    name: "Class 4 - Audio Practice",
    students: 28,
    courses: ["Audio Reading Practice"],
    averageProgress: 57,
    activeToday: 13,
  },
  {
    id: "class-5",
    name: "Class 5 - AI Follow-Reading",
    students: 26,
    courses: ["AI Follow-Reading Training"],
    averageProgress: 72,
    activeToday: 10,
  },
];

export const students = [
  {
    id: "stu-1",
    name: "Li Ming",
    className: "Class 3 - English Reading",
    progress: 68,
    totalReadingTime: "12.5 hours",
    status: "Active",
    lastActive: "2026-05-04 14:30",
  },
  {
    id: "stu-2",
    name: "Wang Yu",
    className: "Class 3 - English Reading",
    progress: 42,
    totalReadingTime: "8.2 hours",
    status: "Active",
    lastActive: "2026-05-04 13:10",
  },
  {
    id: "stu-3",
    name: "Chen Wei",
    className: "Class 4 - Audio Practice",
    progress: 91,
    totalReadingTime: "20.1 hours",
    status: "Active",
    lastActive: "2026-05-03 18:45",
  },
  {
    id: "stu-4",
    name: "Liu Xin",
    className: "Class 5 - AI Follow-Reading",
    progress: 35,
    totalReadingTime: "6.4 hours",
    status: "Expiring Soon",
    lastActive: "2026-05-02 16:20",
  },
];

export const classDetail = {
  className: "Class 3 - English Reading",
  teacherName: "Ms. Zhang",
  students: 32,
  assignedReadings: "12 books",
  classReadingProgress: 68,
  completedStudents: 21,
  completedStudentsPercentage: 66,
  activeStudentsPercentage: 59,
};

export const assignedReadings = [
  {
    id: "reading-1",
    bookTitle: "The Little Prince",
    courseName: "English Reading Level 1",
    level: "A2",
    studentsStarted: 28,
    studentsCompleted: 18,
    averageProgress: 60,
  },
  {
    id: "reading-2",
    bookTitle: "Animal Stories",
    courseName: "English Reading Level 1",
    level: "A1",
    studentsStarted: 32,
    studentsCompleted: 21,
    averageProgress: 76,
  },
  {
    id: "reading-3",
    bookTitle: "Science Readers",
    courseName: "Audio Reading Practice",
    level: "A2",
    studentsStarted: 24,
    studentsCompleted: 12,
    averageProgress: 52,
  },
];

export const studentDetail = {
  name: "Li Ming",
  phone: "13800000000",
  institution: "Beijing Future School",
  className: "Class 3 - English Reading",
  assignedCourses: ["English Reading Level 1", "Audio Reading Practice"],
  readingProgress: 68,
  completedBooks: 8,
  incompleteBooks: 4,
  lastActive: "2026-05-04 14:30",
  listeningTime: "5.4 hours",
  readingTime: "7.1 hours",
  completionPercentage: 68,
};

export const studentAssignedCourses = [
  {
    id: "student-course-1",
    courseName: "English Reading Level 1",
    bookTitle: "Animal Stories",
    level: "A1",
    progress: 100,
    status: "Completed",
  },
  {
    id: "student-course-2",
    courseName: "English Reading Level 1",
    bookTitle: "The Little Prince",
    level: "A2",
    progress: 60,
    status: "In Progress",
  },
  {
    id: "student-course-3",
    courseName: "Audio Reading Practice",
    bookTitle: "Science Readers",
    level: "A2",
    progress: 35,
    status: "In Progress",
  },
];

export const learningHistory = [
  {
    id: "history-1",
    studentName: "Li Ming",
    bookTitle: "The Little Prince",
    courseName: "English Reading Level 1",
    readingDate: "2026-05-04",
    listeningTime: "18 min",
    readingTime: "25 min",
    completionPercentage: 60,
    status: "In Progress",
    score: 86,
  },
  {
    id: "history-2",
    studentName: "Li Ming",
    bookTitle: "Animal Stories",
    courseName: "English Reading Level 1",
    readingDate: "2026-05-03",
    listeningTime: "12 min",
    readingTime: "16 min",
    completionPercentage: 100,
    status: "Completed",
    score: 91,
  },
  {
    id: "history-3",
    studentName: "Wang Yu",
    bookTitle: "Science Readers",
    courseName: "Audio Reading Practice",
    readingDate: "2026-05-02",
    listeningTime: "20 min",
    readingTime: "22 min",
    completionPercentage: 35,
    status: "In Progress",
    score: 82,
  },
  {
    id: "history-4",
    studentName: "Chen Wei",
    bookTitle: "Journey to the West",
    courseName: "AI Follow-Reading Training",
    readingDate: "2026-05-01",
    listeningTime: "30 min",
    readingTime: "35 min",
    completionPercentage: 100,
    status: "Completed",
    score: 94,
  },
];

export const classReportStats = [
  { label: "Daily class reading time", value: "18.5 hours", tone: "blue" },
  { label: "Weekly class reading time", value: "92 hours", tone: "emerald" },
  { label: "Monthly class reading time", value: "360 hours", tone: "cyan" },
  { label: "Average book completion rate", value: "72%", tone: "green" },
  { label: "Average follow-reading score", value: "87", tone: "indigo" },
  { label: "Class ranking", value: "#2", detail: "among institution classes", tone: "sky" },
];

export const dailyReadingTime = [
  { day: "Mon", hours: 14 },
  { day: "Tue", hours: 17 },
  { day: "Wed", hours: 19 },
  { day: "Thu", hours: 16 },
  { day: "Fri", hours: 22 },
  { day: "Sat", hours: 11 },
  { day: "Sun", hours: 13 },
];

export const weeklyClassProgress = [
  { className: "Class 3", progress: 68 },
  { className: "Class 4", progress: 57 },
  { className: "Class 5", progress: 72 },
];

export const classRanking = [
  { rank: 1, className: "Class 5 - AI Follow-Reading", averageProgress: 72, averageScore: 89, activeStudents: 10 },
  { rank: 2, className: "Class 3 - English Reading", averageProgress: 68, averageScore: 87, activeStudents: 19 },
  { rank: 3, className: "Class 4 - Audio Practice", averageProgress: 57, averageScore: 84, activeStudents: 13 },
];

export const courseProgressCards = [
  {
    id: "course-progress-1",
    name: "English Reading Level 1",
    booksLabel: "Books",
    books: 12,
    studentsStarted: 28,
    studentsCompleted: 21,
    averageProgress: 68,
  },
  {
    id: "course-progress-2",
    name: "Audio Reading Practice",
    booksLabel: "Books",
    books: 8,
    studentsStarted: 24,
    studentsCompleted: 15,
    averageProgress: 57,
  },
  {
    id: "course-progress-3",
    name: "AI Follow-Reading Training",
    booksLabel: "Practice tasks",
    books: 15,
    studentsStarted: 26,
    studentsCompleted: 18,
    averageProgress: 72,
  },
];

export const courseBookProgress = [
  {
    id: "book-progress-1",
    courseName: "English Reading Level 1",
    bookTitle: "Animal Stories",
    studentsStarted: 32,
    studentsCompleted: 21,
    averageProgress: 76,
    averageScore: 91,
  },
  {
    id: "book-progress-2",
    courseName: "English Reading Level 1",
    bookTitle: "The Little Prince",
    studentsStarted: 28,
    studentsCompleted: 18,
    averageProgress: 60,
    averageScore: 86,
  },
  {
    id: "book-progress-3",
    courseName: "Audio Reading Practice",
    bookTitle: "Science Readers",
    studentsStarted: 24,
    studentsCompleted: 15,
    averageProgress: 57,
    averageScore: 82,
  },
  {
    id: "book-progress-4",
    courseName: "AI Follow-Reading Training",
    bookTitle: "Journey to the West",
    studentsStarted: 26,
    studentsCompleted: 18,
    averageProgress: 72,
    averageScore: 94,
  },
];
