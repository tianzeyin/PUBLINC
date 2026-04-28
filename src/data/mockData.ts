export const features = [
  {
    id: 1,
    icon: "📚",
    title: "Reading Resources",
    description:
      "Students can access assigned books, search reading materials, and continue reading from their last position.",
  },
  {
    id: 2,
    icon: "🎧",
    title: "Audio Learning",
    description:
      "Original audio resources help students improve listening skills and pronunciation.",
  },
  {
    id: 3,
    icon: "🤖",
    title: "AI Follow-Reading Score",
    description:
      "Students can practice reading aloud and receive AI-based pronunciation and fluency feedback.",
  },
  {
    id: 4,
    icon: "📊",
    title: "Learning Reports",
    description:
      "Students, teachers, and institutions can view learning progress, reading time, completion rate, and scores.",
  },
  {
    id: 5,
    icon: "👨‍🏫",
    title: "Teacher Tracking",
    description:
      "Teachers can track class activity, student progress, completed books, and learning history.",
  },
  {
    id: 6,
    icon: "🏫",
    title: "Institution Management",
    description:
      "Institutions can manage students, teachers, classes, courses, account status, and expiry dates.",
  },
];

export const roles = [
  {
    id: "student",
    icon: "🎓",
    title: "Students",
    description:
      "Access books, listen to audio, complete reading tasks, and view personal learning reports.",
    buttonText: "View Student Dashboard",
    href: "/student",
    color: "from-blue-500 to-blue-600",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
  },
  {
    id: "teacher",
    icon: "👩‍🏫",
    title: "Teachers",
    description:
      "Manage classes, check student progress, and view class learning reports.",
    buttonText: "View Teacher Dashboard",
    href: "/teacher",
    color: "from-emerald-500 to-emerald-600",
    bgLight: "bg-emerald-50",
    borderColor: "border-emerald-200",
    textColor: "text-emerald-700",
    buttonColor: "bg-emerald-600 hover:bg-emerald-700",
  },
  {
    id: "institution",
    icon: "🏛️",
    title: "Institutions",
    description:
      "Manage student accounts, teacher accounts, classes, courses, and account expiry.",
    buttonText: "View Institution Dashboard",
    href: "/institution",
    color: "from-violet-500 to-violet-600",
    bgLight: "bg-violet-50",
    borderColor: "border-violet-200",
    textColor: "text-violet-700",
    buttonColor: "bg-violet-600 hover:bg-violet-700",
  },
  {
    id: "admin",
    icon: "⚙️",
    title: "Platform Admins",
    description:
      "Manage books, courses, institutions, resources, and platform-wide learning statistics.",
    buttonText: "View Admin Dashboard",
    href: "/admin",
    color: "from-orange-500 to-orange-600",
    bgLight: "bg-orange-50",
    borderColor: "border-orange-200",
    textColor: "text-orange-700",
    buttonColor: "bg-orange-600 hover:bg-orange-700",
  },
];

export const demoRoles = [
  {
    id: "student",
    icon: "🎓",
    title: "Student",
    subtitle: "Learning Portal",
    description: "Access books, audio lessons, reading practice, and personal learning reports.",
    buttonText: "Enter as Student",
    href: "/student",
    gradient: "from-blue-500 to-blue-700",
    hoverGradient: "hover:from-blue-600 hover:to-blue-800",
    shadow: "shadow-blue-200",
  },
  {
    id: "teacher",
    icon: "👩‍🏫",
    title: "Teacher",
    subtitle: "Class Management",
    description: "Monitor student activity, track class progress, and manage assignments.",
    buttonText: "Enter as Teacher",
    href: "/teacher",
    gradient: "from-emerald-500 to-emerald-700",
    hoverGradient: "hover:from-emerald-600 hover:to-emerald-800",
    shadow: "shadow-emerald-200",
  },
  {
    id: "institution",
    icon: "🏛️",
    title: "Institution Admin",
    subtitle: "Institution Panel",
    description: "Manage accounts, teachers, students, classes, and course subscriptions.",
    buttonText: "Enter as Institution Admin",
    href: "/institution",
    gradient: "from-violet-500 to-violet-700",
    hoverGradient: "hover:from-violet-600 hover:to-violet-800",
    shadow: "shadow-violet-200",
  },
  {
    id: "admin",
    icon: "⚙️",
    title: "Platform Admin",
    subtitle: "Admin Console",
    description: "Manage platform books, courses, institutions, and global learning analytics.",
    buttonText: "Enter as Platform Admin",
    href: "/admin",
    gradient: "from-orange-500 to-orange-700",
    hoverGradient: "hover:from-orange-600 hover:to-orange-800",
    shadow: "shadow-orange-200",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Contact", href: "#contact" },
];

export const mockBookProgress = [
  { title: "Animal Farm", author: "George Orwell", progress: 72, cover: "📗" },
  { title: "The Little Prince", author: "Antoine de Saint-Exupéry", progress: 45, cover: "📘" },
  { title: "Charlotte's Web", author: "E. B. White", progress: 91, cover: "📙" },
];

export const mockStats = [
  { label: "Reading Time", value: "12.4h", sub: "This week", icon: "⏱️" },
  { label: "Books Completed", value: "8", sub: "This month", icon: "✅" },
  { label: "Avg. Score", value: "87%", sub: "Follow-reading", icon: "🎯" },
];
