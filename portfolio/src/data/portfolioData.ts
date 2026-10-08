import type { Education, Experience, NavLink, Project, Skill } from "../types"


export const NAV_LINKS: NavLink[] = [
  {
    label: "WORK",
    href: "#work",
  },
  {
    label: "EXPERIENCE",
    href: "#experience",
  },
  {
    label: "ABOUT",
    href: "#about",
  },
  {
    label: "SKILLS",
    href: "#skills",
  },
  {
    label: "EDUCATION",
    href: "#education",
  },
  {
    label: "CONTACT",
    href: "#contact",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "FitWithJD",
    tech: "React.js, Next.js, GenAI, Prompt Engineering",
    category: "AI / Full Stack",
    featured: true,
    description:
      "Production-ready AI resume analysis tool that compares resumes against job descriptions, providing ATS scoring, skill-gap detection, and section-level feedback. Uses structured prompting, semantic matching, and secure server-side API handling.",
    demo: "https://resume-analyzer-tau-jade.vercel.app/",
    github: "https://github.com/saisiri6803/cv-analyser",
  },

  {
    title: "TypingForge",
    tech: "JavaScript, HTML5, CSS3",
    category: "Frontend",
    featured: true,
    description:
      "Typing speed and accuracy testing application with real-time WPM calculation, accuracy tracking, difficulty levels, and leaderboard functionality.",
    github: "https://github.com/saisiri6803/JavaScript",
  },

  {
    title: "ExpenseTracker",
    tech: "React, Spring Boot, Java, MySQL",
    category: "Full Stack",
    featured: true,
    description:
      "Full-stack expense management application for tracking income and expenses, filtering transactions, managing records, and visualizing spending through dashboard summaries and category-based charts.",
    github: "#",
  },

  {
    title: "Finance Dashboard",
    tech: "Java, Spring Boot, Spring Security, JWT, JPA",
    category: "Backend / API",
    featured: true,
    description:
      "Spring Boot REST API for a finance dashboard with JWT authentication, role-based access control, financial record management, dashboard summaries, filtering, validation, and consistent API error handling.",
    github: "#",
  },

  {
    title: "TaskFlow API",
    tech: "Node.js, Express.js, MongoDB, JWT",
    category: "Backend / API",
    featured: true,
    description:
      "Production-oriented task management REST API with JWT authentication, complete task CRUD operations, MongoDB aggregation statistics, filtering, pagination, rate limiting, validation, and integration testing.",
    github: "https://github.com/saisiri6803/JavaScript",
  },

  {
    title: "PingPong Game",
    tech: "JavaScript, HTML5 Canvas, CSS3",
    category: "JavaScript",
    description:
      "Classic Pong game implemented with vanilla JavaScript and HTML5 Canvas featuring player-versus-computer gameplay, smooth animations, score tracking, and responsive controls.",
    github: "https://github.com/saisiri6803/JavaScript",
  },

  {
    title: "Job Application Tracker",
    tech: "React 19, TypeScript, Tailwind, Firebase",
    category: "Frontend / Firebase",
    description:
      "Job tracking application with real-time Firestore synchronization and status management for applications including Applied, Shortlisted, Rejected, and In Progress.",
    demo: "https://applicationtrackerforjobs.netlify.app/",
    github: "https://github.com/saisiri6803/job-tracker",
  },

  {
    title: "SimpleTool",
    tech: "React, TypeScript, Vite, Tailwind CSS",
    category: "Frontend / Utility",
    description:
      "Responsive multi-utility web application bringing PDF, image, file conversion, and matrix calculation tools into a single interface. Built with React, TypeScript, Vite, and Tailwind CSS with frontend scaffolding prepared for future backend integration.",
    github:
      "https://github.com/saisiri6803/Multi-Utility-App",
  },

  {
    title: "Chat Application",
    tech: "React.js, WebSocket.io, Node.js",
    category: "Full Stack",
    description:
      "Real-time communication platform built with React, Node.js, and WebSocket.io supporting instant messaging, typing indicators, and multi-user chat rooms.",
    github: "#",
  },

  {
    title: "Swipe&Match",
    tech: "React.js, TypeScript, Tailwind CSS",
    category: "Frontend",
    description:
      "Swipe-based dating application with profile creation, matching interactions, responsive UI, and an architecture designed for future real-time communication and location-based features.",
    github:
      "https://github.com/saisiri6803/Swipe-Match",
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "B.Tech Computer Science in AI & ML",
    institution:
      "Gayatri Vidya Parishad College of Engineering",
    duration: "Jul 2020 — May 2024",
    achievements: [
      "Ranked Top 10% in the program",
      "Secured 85.7% in academics",
      "Completed Honors in Full Stack Web Development",
    ],
  },
  {
    degree: "Board of Intermediate Education",
    institution: "Narayana Junior College",
    duration: "Jun 2018 — Mar 2020",
    achievements: [
      "Ranked Top 5% in the program & Qualified for JEE Advanced",
      "Secured 96.6% in academics",
      "Qualified AP EAMCET with Rank 2023",
    ],
  },
  {
    degree: "Board of Secondary School Education",
    institution:
      "Sri Siddhartha English Medium School",
    duration: "Jun 2017 — Apr 2018",
    achievements: [
      "Ranked Top in the program",
      "Secured 10 CGPA in academics",
    ],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Software Engineer",
    company: "Logile, Inc.",
    location: "Bhubaneswar, India",
    duration: "Jun 2026 — Present",
    current: true,
    description:
      "Working as a frontend engineer building scalable and accessible user interfaces for enterprise applications.",
    technologies: [
      "React",
      "TypeScript",
      "Sass",
      "Axios",
    ],
    responsibilities: [
      "Developing responsive and accessible UI screens using React and TypeScript.",
      "Building and extending reusable core components to maintain consistency across the application.",
      "Integrating REST APIs using Axios and handling loading, success, and error states across features.",
      "Developing and delivering end-to-end frontend features from requirements and UI designs to API integration.",
      "Improving accessibility and usability across application workflows and reusable components.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Accenture",
    location: "Bangalore, India",
    duration: "Jun 2024 — Feb 2026",
    description:
      "Worked on enterprise frontend applications, developing reusable React components and responsive interfaces while collaborating with design, backend, and product teams.",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Material UI",
      "Tailwind CSS",
      "React Query",
      "Jest",
      "React Testing Library",
    ],
    responsibilities: [
      "Designed and developed 15+ reusable React components aligned with enterprise design systems.",
      "Translated Figma designs into responsive, accessible, and pixel-accurate React interfaces.",
      "Integrated REST and GraphQL APIs while handling loading, error, and data states.",
      "Improved frontend performance through lazy loading, code splitting, and rendering optimizations.",
      "Developed automated tests using Jest and React Testing Library and contributed to Agile delivery.",
    ],
  },
];

export const SKILLS: Skill[] = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5 / CSS3",
      "Sass",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "Node.js",
      "Python",
      "REST APIs",
      "GraphQL",
      "WebSocket",
      "Java",
      "Spring Boot",
    ],
  },
  {
    title: "Tools & Development",
    items: [
      "Git",
      "GitHub",
      "Webpack",
      "Vite",
      "Jira",
      "CI/CD",
      "Figma",
    ],
  },
  {
    title: "Testing & Deployment",
    items: [
      "Jest",
      "React Testing Library",
      "Netlify",
      "Vercel",
    ],
  },
  {
    title: "Databases",
    items: [
      "Firebase Firestore",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      "Generative AI",
      "Large Language Models",
      "Prompt Engineering",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "NLP",
      "Computer Vision",
    ],
  },
  {
    title: "Soft Skills",
    items: [
      "Agile",
      "Problem Solving",
      "Communication",
      "Team Collaboration",
      "UI / UX Focus",
    ],
  },
];