export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  type: "education" | "project" | "achievement";
  color: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "fast-nuces",
    year: "2024 – Present",
    title: "BS Computer Science",
    subtitle: "FAST NUCES",
    description:
      "Pursuing a Bachelor's in Computer Science at one of Pakistan's top engineering universities. Coursework spans AI, Database Systems, Probability & Statistics, Computer Architecture, and Software Engineering.",
    tags: ["AI", "Database Systems", "Computer Architecture", "Software Engineering"],
    type: "education",
    color: "#818CF8",
  },
  {
    id: "studdy-buddy-event",
    year: "2026",
    title: "StuddyBuddy AI — RAG Study Assistant",
    subtitle: "AI Automation Project",
    description:
      "Built a full-stack RAG-based PDF study assistant using n8n, Gemini 2.5 Flash, and Pinecone. Deployed on Vercel with a self-hosted n8n backend. Students upload notes and chat with an AI tutor.",
    tags: ["n8n", "RAG", "Gemini", "Pinecone", "Next.js"],
    type: "project",
    color: "#A78BFA",
  },
  {
    id: "google-meet-event",
    year: "2026",
    title: "Google Meet Auto-Attendance Bot",
    subtitle: "Personal Automation",
    description:
      "Engineered an n8n workflow that automatically joins scheduled Google Meet classes at configured times — zero manual intervention required.",
    tags: ["n8n", "Browser Automation", "Scheduling"],
    type: "project",
    color: "#06B6D4",
  },
  {
    id: "mxk-event",
    year: "2025",
    title: "MXK Canvas — Art E-commerce Platform",
    subtitle: "Database Systems Final Project",
    description:
      "Architected and built a full-stack art e-commerce platform with raw PostgreSQL, advanced SQL features (Triggers, Stored Procedures, Cursors), Next.js frontend, and Cloudinary image management.",
    tags: ["Next.js", "Flask", "PostgreSQL", "Raw SQL"],
    type: "project",
    color: "#818CF8",
  },
  {
    id: "t20-event",
    year: "2025",
    title: "T20 Cricket Analytics Platform",
    subtitle: "Probability & Statistics Project",
    description:
      "Developed a statistical analysis web app for 2006 ICC T20 players. Implemented descriptive stats, probability distributions, and linear regression (R²=0.674) with an interactive Next.js dashboard.",
    tags: ["Python", "Pandas", "Scipy", "Flask", "Statistics"],
    type: "project",
    color: "#10B981",
  },
  {
    id: "urban-threads-event",
    year: "2024",
    title: "Urban Threads AI CRM Agent",
    subtitle: "AI Automation Project",
    description:
      "Built a dual-model AI CRM support agent using Groq, Pinecone, and Redis. Implemented gatekeeper logging for clean 1-session-1-row Google Sheets CRM entries via LLM-validated closure.",
    tags: ["Groq", "Pinecone", "Redis", "RAG", "Google Sheets"],
    type: "project",
    color: "#38BDF8",
  },
  {
    id: "assembly-event",
    year: "2024",
    title: "BreakOut — 8086 Assembly Game",
    subtitle: "Computer Architecture Project",
    description:
      "Wrote a fully functional brick-breaker arcade game in 16-bit 8086 Assembly. Implemented direct VGA rendering, PIT audio engine, and full collision physics — no standard library.",
    tags: ["8086 Assembly", "NASM", "VGA", "Systems Programming"],
    type: "project",
    color: "#F59E0B",
  },
  {
    id: "vibetribe-event",
    year: "2024",
    title: "VIBE — Cinematic Photography Portfolio",
    subtitle: "Personal Creative Project",
    description:
      "Built a responsive photography portfolio from scratch using pure HTML & CSS. Features a cinematic grid layout showcasing visual storytelling. Live on GitHub Pages.",
    tags: ["HTML", "CSS", "Photography", "GitHub Pages"],
    type: "project",
    color: "#8B5CF6",
  },
];
