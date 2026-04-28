export const studentProfile = {
  name: "Li Ming",
  username: "liming2026",
  institution: "Beijing Future School",
  class: "Class 3 - English Reading",
  expiryDate: "2026-08-28",
  todayProgress: "45 minutes completed today",
  phone: "13800000000",
  avatarUrl: "https://i.pravatar.cc/150?u=liming",
};

export const assignedCourses = [
  {
    id: "course-1",
    title: "English Reading Level 1",
    teacher: "Ms. Zhang",
    progress: 68,
    bookCount: 12,
  },
  {
    id: "course-2",
    title: "Audio Reading Practice",
    teacher: "Mr. Wang",
    progress: 42,
    bookCount: 8,
  },
  {
    id: "course-3",
    title: "AI Follow-Reading Training",
    teacher: "Ms. Liu",
    progress: 75,
    taskCount: 15,
  },
];

export const libraryBooks = [
  {
    id: "book-1",
    title: "The Little Prince",
    level: "A2",
    status: "In Progress",
    progress: 60,
    coverColor: "bg-blue-100 text-blue-600",
    coverIcon: "🤴",
  },
  {
    id: "book-2",
    title: "Animal Stories",
    level: "A1",
    status: "Not Started",
    progress: 0,
    coverColor: "bg-emerald-100 text-emerald-600",
    coverIcon: "🦊",
  },
  {
    id: "book-3",
    title: "Journey to the West",
    level: "B1",
    status: "Completed",
    progress: 100,
    coverColor: "bg-orange-100 text-orange-600",
    coverIcon: "🐒",
  },
  {
    id: "book-4",
    title: "Science Readers",
    level: "A2",
    status: "In Progress",
    progress: 35,
    coverColor: "bg-violet-100 text-violet-600",
    coverIcon: "🔬",
  },
];

export const learningHistory = [
  {
    id: "hist-1",
    bookTitle: "The Little Prince",
    courseName: "English Reading Level 1",
    date: "2026-05-04",
    listeningTime: "18 min",
    readingTime: "25 min",
    progress: 60,
    status: "In Progress",
    score: 86,
  },
  {
    id: "hist-2",
    bookTitle: "Animal Stories",
    courseName: "English Reading Level 1",
    date: "2026-05-03",
    listeningTime: "12 min",
    readingTime: "16 min",
    progress: 100,
    status: "Completed",
    score: 91,
  },
  {
    id: "hist-3",
    bookTitle: "Science Readers",
    courseName: "Audio Reading Practice",
    date: "2026-05-02",
    listeningTime: "20 min",
    readingTime: "22 min",
    progress: 35,
    status: "In Progress",
    score: 82,
  },
];

export const learningReportData = {
  dailyReadingTime: "45 minutes",
  weeklyReadingTime: "4.5 hours",
  monthlyReadingTime: "18 hours",
  totalBooksCompleted: 12,
  averageScore: 88,
  learningStreak: "7 days",
  readingRanking: "#5 in class",
};

export const audioPlayerData = {
  studentId: "STU-001",
  bookId: "BOOK-102",
  courseId: "COURSE-ENG-01",
  listeningTime: "18 minutes",
  readingTime: "25 minutes",
  progress: 60,
  status: "In Progress",
  lastPosition: "Chapter 1, Paragraph 8",
  timestamp: "2026-05-04 14:30",
};
