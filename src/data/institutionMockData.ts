export const institutionProfile = {
  name: "Beijing Future School",
  contactPerson: "Irene Li",
  contactPhone: "+86 18600000000",
  contactEmail: "contact@beijingfutureschool.com",
  address: "Beijing, China",
  status: "Active",
  authorizedCourses: [
    "English Reading Level 1",
    "Audio Reading Practice",
    "AI Follow-Reading Training",
    "Reading Extension Course",
  ],
  authorizedCoursesSummary: "English Reading Level 1, Audio Reading Practice, AI Follow-Reading Training",
  accountValidity: "2026-05-04 to 2026-08-28",
};

export const institutionStats = [
  { label: "Total Students", value: "520", tone: "blue" },
  { label: "Total Teachers", value: "35", tone: "emerald" },
  { label: "Total Classes", value: "18", tone: "sky" },
  { label: "Authorized Courses", value: "6", tone: "indigo" },
  { label: "Active Students Today", value: "286", tone: "green" },
  { label: "Expiring Accounts", value: "42", tone: "amber" },
];

export const studentAccountCredits = {
  totalCredits: 600,
  usedCredits: 520,
  remainingCredits: 80,
  pendingAccounts: 4,
  renewalDate: "2026-08-28",
};

export const teacherAccountLimit = {
  totalAccounts: 40,
  usedAccounts: 35,
  remainingAccounts: 5,
};

export const learningOverview = [
  { label: "Average reading progress", value: "67%" },
  { label: "Average follow-reading score", value: "86" },
  { label: "Total reading time this month", value: "1,280 hours" },
];

export const institutionStudents = [
  {
    id: "stu-1",
    name: "Li Ming",
    phone: "13800000000",
    className: "Class 3 - English Reading",
    courses: ["English Reading Level 1", "Audio Reading Practice"],
    status: "Active",
    expiryDate: "2026-08-28",
  },
  {
    id: "stu-2",
    name: "Wang Yu",
    phone: "13800000001",
    className: "Class 4 - Audio Practice",
    courses: ["Audio Reading Practice"],
    status: "Active",
    expiryDate: "2026-08-28",
  },
  {
    id: "stu-3",
    name: "Chen Wei",
    phone: "13800000002",
    className: "Class 5 - AI Follow-Reading",
    courses: ["AI Follow-Reading Training"],
    status: "Expiring Soon",
    expiryDate: "2026-05-30",
  },
  {
    id: "stu-4",
    name: "Liu Xin",
    phone: "13800000003",
    className: "Class 3 - English Reading",
    courses: ["English Reading Level 1"],
    status: "Disabled",
    expiryDate: "2026-06-15",
  },
];

export const institutionTeachers = [
  {
    id: "teacher-1",
    name: "Ms. Zhang",
    phone: "13900000000",
    classes: ["Class 3", "Class 4"],
    students: 60,
    status: "Active",
    lastLogin: "2026-05-04 15:20",
  },
  {
    id: "teacher-2",
    name: "Mr. Wang",
    phone: "13900000001",
    classes: ["Class 5"],
    students: 26,
    status: "Active",
    lastLogin: "2026-05-04 11:40",
  },
  {
    id: "teacher-3",
    name: "Ms. Liu",
    phone: "13900000002",
    classes: ["Class 6", "Class 7"],
    students: 58,
    status: "Expiring Soon",
    lastLogin: "2026-05-03 18:10",
  },
  {
    id: "teacher-4",
    name: "Mr. Chen",
    phone: "13900000003",
    classes: ["Class 8"],
    students: 31,
    status: "Disabled",
    lastLogin: "2026-04-28 09:30",
  },
];

export const institutionClasses = [
  {
    id: "class-3",
    name: "Class 3 - English Reading",
    teacher: "Ms. Zhang",
    students: 32,
    readings: "12 books",
    progress: 68,
    score: 87,
    activeStudents: 19,
  },
  {
    id: "class-4",
    name: "Class 4 - Audio Practice",
    teacher: "Ms. Zhang",
    students: 28,
    readings: "8 books",
    progress: 57,
    score: 84,
    activeStudents: 13,
  },
  {
    id: "class-5",
    name: "Class 5 - AI Follow-Reading",
    teacher: "Mr. Wang",
    students: 26,
    readings: "15 tasks",
    progress: 72,
    score: 89,
    activeStudents: 10,
  },
  {
    id: "class-6",
    name: "Class 6 - Reading Extension",
    teacher: "Ms. Liu",
    students: 30,
    readings: "10 books",
    progress: 61,
    score: 82,
    activeStudents: 14,
  },
];

export const institutionCourses = [
  {
    id: "course-1",
    name: "English Reading Level 1",
    level: "A1-A2",
    books: 12,
    assignedClasses: ["Class 3", "Class 6"],
    assignedStudents: 128,
    progress: 68,
  },
  {
    id: "course-2",
    name: "Audio Reading Practice",
    level: "A2",
    books: 8,
    assignedClasses: ["Class 4"],
    assignedStudents: 86,
    progress: 57,
  },
  {
    id: "course-3",
    name: "AI Follow-Reading Training",
    level: "A2-B1",
    books: 15,
    assignedClasses: ["Class 5"],
    assignedStudents: 72,
    progress: 72,
  },
  {
    id: "course-4",
    name: "Reading Extension Course",
    level: "B1",
    books: 10,
    assignedClasses: ["Class 6"],
    assignedStudents: 64,
    progress: 61,
  },
];

export const authorizedBooks = [
  { id: "book-1", title: "The Little Prince", level: "A2", course: "English Reading Level 1" },
  { id: "book-2", title: "Animal Stories", level: "A1", course: "English Reading Level 1" },
  { id: "book-3", title: "Science Readers", level: "A2", course: "Audio Reading Practice" },
  { id: "book-4", title: "Journey to the West", level: "B1", course: "AI Follow-Reading Training" },
];

export const accountSummary = [
  { label: "Active student accounts", value: "496", tone: "blue" },
  { label: "Active teacher accounts", value: "32", tone: "emerald" },
  { label: "Expiring within 30 days", value: "42", tone: "amber" },
  { label: "Expired accounts", value: "18", tone: "red" },
  { label: "Disabled accounts", value: "9", tone: "slate" },
];

export const expiringAccounts = [
  {
    id: "expiry-1",
    name: "Chen Wei",
    type: "Student",
    phone: "13800000002",
    classes: "Class 5 - AI Follow-Reading",
    status: "Expiring Soon",
    startDate: "2026-05-04",
    expiryDate: "2026-05-30",
  },
  {
    id: "expiry-2",
    name: "Ms. Liu",
    type: "Teacher",
    phone: "13900000002",
    classes: "Class 6, Class 7",
    status: "Expiring Soon",
    startDate: "2026-05-04",
    expiryDate: "2026-05-30",
  },
  {
    id: "expiry-3",
    name: "Liu Xin",
    type: "Student",
    phone: "13800000003",
    classes: "Class 3 - English Reading",
    status: "Disabled",
    startDate: "2026-05-04",
    expiryDate: "2026-06-15",
  },
];
