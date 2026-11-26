export const profile = {
  name: "Andrés Romero",
  fullName: "Andrés Felipe Romero Brand",
  role: "Full-Stack Developer",
  // Hero statement (the serif word is highlighted)
  headline: { before: "I build", accent: "products", after: "end to end." },
  tagline:
    "Full-stack developer with 2+ years shipping responsive web apps and cloud-native services with SvelteKit, React and NestJS on AWS and GCP, and increasingly building with LLMs and AI agents.",
  email: "andresfeliperom@hotmail.com",
  github: "https://github.com/aromerob1",
  linkedin: "https://www.linkedin.com/in/aromerobrand/",
  resumeUrl: "/Andres-Romero-CV.pdf",
  location: "Medellín, CO",
};

export const about = {
  paragraphs: [
    "I’m a full-stack developer who likes owning features from the database to the UI. I’ve built reservation platforms, payment systems, real-time tooling and internal CRMs for commercial clients, mostly remote, across products that had to ship and keep working.",
    "These days I work mostly in SvelteKit and NestJS, and move just as comfortably across React, Next.js and Astro. I’m increasingly hands-on with cloud and DevOps (GCP, AWS, Docker, CI/CD), and lately I’ve been going deep on AI engineering: integrating LLMs into products, building agentic workflows and my own MCP servers, and working daily with coding agents like Codex and Claude Code. I care about clean architecture, real-time UX and code that the next person can read.",
  ],
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "B2 · TOEFL iBT 88" },
    { name: "German", level: "B1 · Conversational" },
    { name: "French", level: "A2 · Learning" },
  ],
  education: {
    degree: "BSc, Computer & Systems Engineering",
    school: "Universidad de los Andes, Bogotá",
    period: "2020 - 2025",
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
    period: "Feb 2025 - Present",
    current: true,
    bullets: [
      "Build and maintain web apps and internal tools with SvelteKit and NestJS, with TypeScript across the stack.",
      "Design RESTful APIs and database schemas for an internal CRM platform that runs core business workflows.",
      "Build and ship marketing sites in Astro and Next.js, tuned for SEO and performance.",
      "Containerize and deploy services on GCP (Cloud Run, Cloud SQL, Cloud Storage) with automated scaling.",
    ],
    stack: ["SvelteKit", "NestJS", "Next.js", "Astro", "Node.js", "GCP", "PostgreSQL"],
  },
  {
    role: "Full-Stack Developer",
    company: "Mas Alcance",
    location: "Medellín · Remote",
    period: "Nov 2023 - Oct 2024",
    bullets: [
      "Delivered several full-stack web and mobile apps end to end for commercial clients.",
      "Built a hotel reservation platform (web + mobile) from the ground up.",
      "Developed parking-management apps with virtual wallets and automated payments.",
      "Implemented real-time chat over WebSockets and integrated thermal printers into client operations.",
    ],
    stack: ["Angular", "Ionic", "Node.js", "Express", "WebSockets", "MongoDB", "React", "MySQL"],
  },
  {
    role: "Web Development Teaching Assistant",
    company: "Universidad de los Andes × Bogotá City Hall",
    location: "Bogotá · Remote",
    period: "May 2023 - Aug 2023",
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
  status?: "daily";
  featured?: boolean;
  /** Short facts shown in the side panel of a featured card. */
  highlights?: string[];
  image?: { src: string; alt: string; caption: string; width: number; height: number };
};

export const projects: Project[] = [
  {
    title: "Personal AI Assistant",
    blurb: "Agentic assistant over WhatsApp",
    description:
      "An agentic assistant I talk to over WhatsApp, built by directing coding agents and reviewing their output, and operated daily in production: custom MCP servers (email, calendar, finance, reminders), proactive scheduled agents on a self-administered server, and local speech-to-text (whisper.cpp).",
    stack: ["TypeScript", "Node.js", "Claude Agent SDK", "MCP", "whisper.cpp"],
    status: "daily",
    featured: true,
    highlights: [
      "Custom MCP servers: email, calendar, finance, reminders",
      "Proactive scheduled agents on a self-administered server",
      "Local speech-to-text with whisper.cpp for voice notes",
      "WhatsApp as the only interface",
    ],
  },
  {
    title: "Finny",
    blurb: "Self-hosted personal finance",
    description:
      "A personal-finance system I built for my own use and run on my own server: transaction ingestion pipeline, LLM-assisted categorization, budgeting API, analytics dashboard and a WhatsApp bot interface.",
    stack: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Next.js"],
    status: "daily",
    featured: true,
    image: {
      src: "/finny-dashboard.webp",
      alt: "Finny dashboard showing the money left until the next paycheck and the daily spending pace",
      caption: "Dashboard shown with sample data.",
      width: 1600,
      height: 1000,
    },
  },
  {
    title: "Rick & Morty Explorer",
    blurb: "Full-stack GraphQL + Redis",
    description:
      "Browse, filter and star Rick and Morty characters through a custom GraphQL API (Apollo Server) with Redis caching on a Node/Express backend, served to a React front end.",
    stack: ["React", "TypeScript", "Node.js", "GraphQL", "Apollo", "Redis"],
    repo: "https://github.com/aromerob1/rick-and-morty-list",
  },
  {
    title: "Analytics Tasks Manager",
    blurb: "Full-stack task manager",
    description:
      "A full-stack task manager with JWT auth and a per-user analytics dashboard: CRUD over your own tasks plus insights on how you use them.",
    stack: ["React", "Node.js", "Express", "Sequelize", "MySQL", "JWT"],
    repo: "https://github.com/aromerob1/analytics-tasks-manager",
  },
  {
    title: "Weather Predictor",
    blurb: "Algorithmic forecasting engine",
    description:
      "A TypeScript engine that forecasts droughts, rainy seasons and optimal conditions over a 10-year span by modelling planetary alignments with geometric calculations, served over an Express API backed by SQLite.",
    stack: ["TypeScript", "Express", "SQLite", "Algorithms"],
    repo: "https://github.com/aromerob1/weather-predictor",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python"],
  },
  {
    group: "AI / LLM",
    items: ["LLM integration", "AI agents", "MCP servers", "Claude Agent SDK", "Claude Code", "Codex", "Cursor", "Prompt engineering"],
  },
  {
    group: "Frontend",
    items: ["Svelte", "SvelteKit", "React", "Next.js", "Astro", "Angular", "Tailwind CSS", "shadcn/ui", "Ionic"],
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
