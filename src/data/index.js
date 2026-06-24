// ============================================================
// Single source of truth for all portfolio content.
// Visual styling lives in the components; this file is data only.
// ============================================================

export const personalInfo = {
  name: "Ned",
  firstName: "Ned",
  role: "Full-Stack Developer",
  email: "tucoi229@gmail.com",
  phone: "0855654257",
  address: "339 Minh Khai, Hai Ba Trung, Ha Noi",
  github: "https://github.com/neddtu",
  cvPath: "/Duong-Dinh-Tu-CV.pdf",
  available: true,
};

// Rotating roles for the hero typing line
export const roles = [
  "ReactJS Developer",
  "Next.js Developer",
  "NestJS Developer",
  "React Native Developer",
];

// Headline stats
export const stats = [
  { value: "5+", label: "Years of experience" },
  { value: "10+", label: "Projects shipped" },
  { value: "3", label: "Companies" },
];

// Skills grouped by discipline (rendered as a structured list + marquee)
export const skillGroups = [
  {
    label: "Frontend",
    items: [
      "ReactJS",
      "NextJS",
      "TypeScript",
      "JavaScript",
      "HTML / CSS",
      "Redux",
      "Zustand",
      "Recoil",
      "React Hooks",
      "Apollo",
    ],
  },
  {
    label: "Mobile",
    items: ["React Native", "Reanimated", "CodePush", "Agora Livestream"],
  },
  {
    label: "Backend & Realtime",
    items: ["NodeJS", "NestJS", "Firebase", "Socket.IO", "WebRTC"],
  },
];

// Flat list derived from groups — used by the scrolling skills ribbon
export const skills = skillGroups.flatMap((group) => group.items);

// Work history (most recent first)
export const experiences = [
  {
    title: "React Developer",
    company: "CMC Global",
    period: "3/2022 — Present",
    location: "Hanoi, Vietnam",
    current: true,
    description: [
      "Participate in project requirements analysis and technical planning",
      "Build responsive UI components and integrate RESTful APIs",
      "Ensure clean, optimized, and maintainable code quality",
      "Deploy Android and iOS applications to Play Store and App Store",
    ],
  },
  {
    title: "React Native Developer",
    company: "PAL VN",
    period: "2/2021 — 3/2022",
    location: "Hanoi, Vietnam",
    current: false,
    description: [
      "Participated in requirements analysis and sprint planning",
      "Built cross-platform mobile UI and integrated APIs",
      "Deployed Android and iOS applications to stores",
    ],
  },
  {
    title: "React Native Developer",
    company: "NMB Technology and Solution",
    period: "06/2020 — 02/2021",
    location: "Hanoi, Vietnam",
    current: false,
    description: [
      "Participated in project requirements analysis",
      "Built UI components and integrated APIs for projects",
      "Collaborated with team members on feature development",
    ],
  },
];

// Featured projects. `icon` maps to a Lucide icon in the Projects component.
export const projects = [
  {
    title: "KSP Steel",
    category: "Enterprise · Web",
    icon: "factory",
    description:
      "Modernizing production processes, optimizing warehouse management, and supporting digital transformation for a leading steel manufacturer.",
    tags: ["ReactJS", "TypeScript", "RTK Query", "Socket.io", "Antd", "Chart.js"],
  },
  {
    title: "SOOP Live Admin",
    category: "Admin · Web",
    icon: "shield",
    description:
      "Admin platform for SOOP Live focused on content moderation and user management at scale.",
    tags: ["NextJS", "TypeScript", "Firebase", "React Query", "Radix UI"],
  },
  {
    title: "SOOP Live App",
    category: "Streaming · Mobile",
    icon: "radio",
    description:
      "Live-streaming mobile app — improving user experience, real-time interaction features, and overall platform stability.",
    tags: ["React Native", "TypeScript", "React Query", "Zustand", "Reanimated 3"],
  },
  {
    title: "Biollet Admin",
    category: "Marketplace · Web",
    icon: "image",
    description:
      "Console for administrators to purchase photo information that Biollet users list for sale, with facial-landmark editing.",
    tags: ["NextJS", "TypeScript", "Firebase", "Axios", "MUI"],
  },
  {
    title: "Biollet App",
    category: "Blockchain · Mobile",
    icon: "smartphone",
    description:
      "Blockchain app letting users list photo information for sale, detect similar photos, and edit facial landmarks.",
    tags: ["React Native", "TypeScript", "Redux", "Firebase", "FaceDetection"],
  },
  {
    title: "True-VRoom",
    category: "Realtime · Mobile",
    icon: "video",
    description:
      "Video platform for remote teams — secure meetings, live streaming, and collaboration powering productivity.",
    tags: ["React Native", "TypeScript", "WebRTC", "Socket.IO", "Redux"],
  },
];

// Navigation
export const menuItems = [
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Work", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

export const education = {
  school: "Water Resources University",
  major: "Information Technology",
  period: "09/2017 — 2021",
};

export const activities = {
  organization: "Student Information Club",
  role: "Technical Member",
  period: "10/2018 — 2020",
};
