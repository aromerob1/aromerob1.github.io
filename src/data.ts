export const profile = {
  name: "Andrés Romero",
  fullName: "Andrés Felipe Romero Brand",
  role: "Full-Stack Developer",
  roles: ["Full-Stack Developer", "Software Engineer", "Cloud & DevOps"],
  // Hero statement (the serif word is highlighted)
  headline: { before: "I build", accent: "products", after: "end to end." },
  tagline:
    "Full-stack developer with 2+ years shipping responsive web apps and cloud-native services — React, Next.js and NestJS on AWS and GCP — and increasingly building with LLMs and AI agents.",
  email: "andresfeliperom@hotmail.com",
  github: "https://github.com/aromerob1",
  linkedin: "https://www.linkedin.com/in/aromerobrand/",
  resumeUrl: "/Andres-Romero-CV.pdf",
  location: "Remote · Based in Medellín, CO",
};

export const stats = [
  { value: 2, suffix: "+", label: "Years building software" },
  { value: 3, suffix: "", label: "Languages — ES · EN · DE" },
  { value: 15, suffix: "+", label: "Technologies across the stack" },
  { kicker: "Web · Cloud · AI", label: "Across the modern stack" },
];

export const about = {
  paragraphs: [
    "I’m a full-stack developer who likes owning features from the database to the UI. I’ve built reservation platforms, payment systems, real-time tooling and internal CRMs for commercial clients — mostly remote, across products that had to ship and keep working.",
    "I move comfortably between React/Next.js/Astro on the front and Node.js/NestJS on the back, and I’m increasingly hands-on with cloud and DevOps (GCP, AWS, Docker, CI/CD). Lately I’ve been going deep on AI engineering — integrating LLMs into products, building agentic workflows, and working daily with tools like Claude Code, Cursor and Codex. I care about clean architecture, real-time UX and code that the next person can read.",
  ],
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "B2 · TOEFL iBT 88" },
    { name: "German", level: "B1 · Conversational" },
  ],
  education: {
    degree: "BSc, Computer & Systems Engineering",
    school: "Universidad de los Andes — Bogotá",
    period: "2020 — 2025",
  },
};

export type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
  stack: string[];
};

export const experience: Job[] = [
  {
    role: "Full-Stack Developer",
    company: "Keep Calm Services",
    location: "Miami · Remote",
    period: "Jan 2025 — Present",
    current: true,
    bullets: [
      "Build and ship marketing and landing sites in Astro and Next.js, tuned for SEO and performance.",
      "Design RESTful APIs and database schemas for an internal CRM platform that runs core business workflows.",
      "Containerize and deploy services on GCP (Cloud Run, Cloud SQL, Cloud Storage) with automated scaling.",
      "Maintain and harden legacy WordPress sites — security patches and performance work.",
    ],
    stack: ["Next.js", "Astro", "NestJS", "Node.js", "GCP", "Docker", "PostgreSQL"],
  },
  {
    role: "Full-Stack Developer",
    company: "Mas Alcance",
    location: "Medellín · Remote",
    period: "Nov 2023 — Oct 2024",
    bullets: [
      "Delivered several full-stack web and mobile apps end to end for commercial clients.",
      "Built a hotel reservation platform (web + mobile) from the ground up.",
      "Developed parking-management apps with virtual wallets and automated payments.",
      "Implemented real-time chat over WebSockets and integrated thermal printers into client operations.",
    ],
    stack: ["React", "Ionic", "Node.js", "WebSockets", "MySQL"],
  },
  {
    role: "Web Development Teaching Assistant",
    company: "Universidad de los Andes × Bogotá City Hall",
    location: "Bogotá · Remote",
    period: "May 2023 — Aug 2023",
    bullets: [
      "Co-led a React & Node.js bootcamp run in partnership with Bogotá City Hall.",
      "Designed hands-on projects and exercises reinforcing UI/UX and code-quality best practices.",
    ],
    stack: ["React", "Node.js", "Teaching"],
  },
];

export type Project = {
  title: string;
  blurb: string;
  description: string;
  stack: string[];
  url?: string;
  repo?: string;
  status?: "live" | "building";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Finny",
    blurb: "Personal-finance SaaS",
    description:
      "A backend-first personal finance assistant built as a SaaS on NestJS — accounts, transactions and budgeting exposed through a clean API. Currently in active development.",
    stack: ["NestJS", "TypeScript", "PostgreSQL", "SaaS"],
    status: "building",
    featured: true,
  },
  {
    title: "Rick & Morty Explorer",
    blurb: "Full-stack GraphQL + Redis",
    description:
      "Browse, filter and star Rick and Morty characters through a custom GraphQL API (Apollo Server) with Redis caching on a Node/Express backend, served to a React front end.",
    stack: ["React", "TypeScript", "Node.js", "GraphQL", "Apollo", "Redis"],
    repo: "https://github.com/aromerob1/rick-and-morty-list",
    featured: true,
  },
  {
    title: "Analytics Tasks Manager",
    blurb: "Full-stack task manager",
    description:
      "A full-stack task manager with JWT auth and a per-user analytics dashboard — CRUD over your own tasks plus insights on how you use them.",
    stack: ["React", "Node.js", "Express", "Sequelize", "MySQL", "JWT"],
    repo: "https://github.com/aromerob1/analytics-tasks-manager",
    status: "live",
  },
  {
    title: "Tasks Center",
    blurb: "Task manager + REST API",
    description:
      "A task manager split into an independent React front end and its own REST API, with authentication and separate front/back deployments.",
    stack: ["React", "Node.js", "MongoDB"],
    url: "https://aromerob1.github.io/tasksCenter-frontend/",
    repo: "https://github.com/aromerob1/tasksCenter-api",
    status: "live",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python"],
  },
  {
    group: "AI / LLM",
    items: ["LLM integration", "AI agents", "Claude Code", "Cursor", "Codex", "Prompt engineering"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Astro", "Angular", "Tailwind CSS", "Ionic", "Material UI"],
  },
  {
    group: "Backend",
    items: ["Node.js", "NestJS", "Express", "Flask", "REST", "GraphQL"],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite"],
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS", "Google Cloud", "Docker", "CI/CD", "GitHub Actions", "Git"],
  },
  {
    group: "Practices",
    items: ["WebSockets", "Agile / Scrum", "Software Architecture", "SEO"],
  },
];
