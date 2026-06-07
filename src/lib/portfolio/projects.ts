export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: "Full-Stack" | "AI & Automation" | "Data Science" | "Systems" | "Frontend" | "Backend";
  tags: string[];
  features: string[];
  github?: string;
  live?: string;
  color: string;
  accentColor: string;
  year: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "mxk-canvas",
    title: "MXK Canvas",
    shortDesc: "Full-stack art e-commerce platform for handcrafted paintings.",
    fullDesc:
      "MXK Canvas is a full-stack online art & calligraphy store selling handcrafted paintings across 3 categories: Calligraphy, Abstract, and Modern. Built as a final Database Systems project at FAST NUCES, it features a Next.js storefront, a Flask backend with raw PostgreSQL queries (no ORM), advanced SQL features including Triggers, Stored Procedures, and Cursors, Cloudinary for image hosting, and a WhatsApp-integrated order flow.",
    category: "Full-Stack",
    tags: ["Next.js", "Flask", "PostgreSQL", "Raw SQL", "Triggers", "Cloudinary", "Supabase"],
    features: [
      "22 handcrafted art products across 3 categories",
      "Full cart & order system with WhatsApp checkout",
      "Raw SQL queries — no ORM, full control",
      "Advanced DB: Triggers, Stored Procedures, Cursors",
      "Admin panel for product & order management",
      "Cloudinary image upload integration",
      "Video gallery / Reels section",
    ],
    color: "#818CF8",
    accentColor: "#6366F1",
    year: "2025",
    featured: true,
  },
  {
    id: "studdy-buddy",
    title: "StuddyBuddy AI",
    shortDesc: "RAG-based PDF study assistant powered by n8n and Gemini 2.5.",
    fullDesc:
      "StuddyBuddy is an AI-powered study assistant built with a RAG (Retrieval-Augmented Generation) architecture. Students upload their PDF lecture notes, which are chunked and indexed in Pinecone. The n8n workflow orchestrates the pipeline: embedding generation, vector search, and Gemini 2.5 Flash LLM responses. The Next.js frontend deployed on Vercel connects to a self-hosted n8n backend exposed via ngrok.",
    category: "AI & Automation",
    tags: [
      "n8n",
      "Gemini 2.5 Flash",
      "Pinecone",
      "RAG",
      "Next.js",
      "Vercel",
      "ngrok",
      "TypeScript",
    ],
    features: [
      "RAG pipeline: PDF → chunks → Pinecone embeddings",
      "Gemini 2.5 Flash for intelligent QA responses",
      "n8n workflow orchestration (self-hosted)",
      "Full-stack Next.js frontend on Vercel",
      "Real-time streaming chat interface",
      "Session history and new chat functionality",
    ],
    github: "https://github.com/thezrk181/studdy-buddy-ai",
    color: "#A78BFA",
    accentColor: "#9333EA",
    year: "2026",
    featured: true,
  },
  {
    id: "urban-threads-crm",
    title: "Urban Threads AI CRM",
    shortDesc: "Dual-model AI CRM agent with RAG, Redis, and Pinecone.",
    fullDesc:
      "Urban Threads is an AI-powered CRM support agent for a fashion brand. Built with a dual-model architecture: a fast conversational layer (Groq) and a deep reasoning layer. Pinecone stores the product/customer knowledge base for RAG lookups. Redis caches session state for ultra-fast responses. A gatekeeper logging system validates LLM session closure and writes exactly one clean CRM row per session to Google Sheets.",
    category: "AI & Automation",
    tags: ["Groq", "Pinecone", "Redis", "RAG", "Google Sheets", "n8n", "Dual-Model LLM"],
    features: [
      "Dual-model architecture: conversational + reasoning layers",
      "Pinecone vector store for product knowledge RAG",
      "Redis session caching for sub-100ms responses",
      "LLM-validated gatekeeper for clean CRM logging",
      "1-session-1-row Google Sheets integration",
      "Zero manual CRM entry required",
    ],
    color: "#38BDF8",
    accentColor: "#0EA5E9",
    year: "2024",
    featured: true,
  },
  {
    id: "assembly-brick-breaker",
    title: "Assembly Brick Breaker",
    shortDesc: "Retro 8086 arcade game built entirely in low-level Assembly.",
    fullDesc:
      "A retro arcade-style brick breaker game written entirely in 16-bit 8086 Assembly Language (NASM). This project demonstrates mastery of low-level system programming without any standard library abstractions. It bypasses BIOS interrupts for high-speed graphics by writing directly to VGA video memory at 0xB800, implements a custom sound engine via PIT ports, and features a full physics engine with ball-paddle-brick collision detection.",
    category: "Systems",
    tags: ["8086 Assembly", "NASM", "DOSBox", "VGA Graphics", "PIT Audio", "Custom Physics"],
    features: [
      "Direct VGA video memory writes (0xB800) for fast rendering",
      "Custom square-wave audio via Programmable Interval Timer",
      "Full collision physics: ball, paddle, brick + angle calculation",
      "Hybrid mouse (INT 0x33) & keyboard (INT 0x16) input",
      "Full game state machine: Menu → Play → Win/Loss",
      "Runs in DOSBox — drag & drop to play",
    ],
    github: "https://github.com/thezrk181/Assembly-Brick-Breaker",
    color: "#F59E0B",
    accentColor: "#D97706",
    year: "2024",
    featured: true,
  },
  {
    id: "t20-analytics",
    title: "T20 Cricket Analytics",
    shortDesc: "Statistical analysis web app on 2006 ICC T20 players.",
    fullDesc:
      "A Probability & Statistics semester project at FAST NUCES analyzing ICC T20 cricket data for 2006 players across 15 variables. The Flask backend uses Pandas, Scipy, and Scikit-learn to compute descriptive statistics, probability distributions, linear regression models, and confidence intervals. The Next.js frontend presents interactive dashboards, histograms, Q-Q plots, and an interactive run predictor.",
    category: "Data Science",
    tags: ["Flask", "Pandas", "Scipy", "Scikit-learn", "Next.js", "Regression", "Statistics"],
    features: [
      "Dataset: 2006 ICC T20 players, 15 statistical variables",
      "Descriptive stats: mean, median, std dev, CIs",
      "Linear regression model (R² = 0.674)",
      "Probability analysis & distribution fitting",
      "Interactive run predictor (SR × Matches input)",
      "Top 10 player leaderboards with charts",
    ],
    github: "https://github.com/thezrk181/Probability-s-Project",
    color: "#10B981",
    accentColor: "#059669",
    year: "2025",
    featured: false,
  },
  {
    id: "ai-pathfinder",
    title: "AI Pathfinder",
    shortDesc: "Visual search algorithm explorer with 6 uninformed strategies.",
    fullDesc:
      "A Python GUI application that visualizes how six different uninformed (blind) search algorithms explore a 10×10 grid to find a path from Start (S) to Target (T) while avoiding walls. Built with Tkinter for real-time step-by-step visualization showing frontier nodes, explored nodes, and the final path. Implements BFS, DFS, UCS (with diagonal cost √2), DLS, IDDFS, and Bidirectional Search.",
    category: "AI & Automation",
    tags: ["Python", "Tkinter", "BFS", "DFS", "UCS", "IDDFS", "Bidirectional Search"],
    features: [
      "6 search algorithms: BFS, DFS, UCS, DLS, IDDFS, Bidirectional",
      "Step-by-step animated visualization",
      "Color-coded: frontier (blue), explored (dark blue), path (purple)",
      "6-direction movement with diagonal cost support",
      "Configurable depth limit for DLS algorithm",
      "Real-time node expansion counter",
    ],
    github: "https://github.com/thezrk181/AI_A1_24F_0641",
    color: "#EC4899",
    accentColor: "#DB2777",
    year: "2024",
    featured: false,
  },
  {
    id: "google-meet-bot",
    title: "Google Meet Attendance Bot",
    shortDesc: "n8n workflow that auto-joins scheduled Google Meet classes.",
    fullDesc:
      "An n8n automation workflow that automatically joins scheduled Google Meet classes at configured times without any manual intervention. The workflow reads a class schedule, triggers at the correct time, uses browser automation to navigate to the Meet URL, and joins the call — zero human input required. Integrated scheduling logic handles daily/weekly recurring classes.",
    category: "AI & Automation",
    tags: ["n8n", "Browser Automation", "Scheduling", "Google Meet", "Workflow Automation"],
    features: [
      "Fully automated class attendance — zero manual clicks",
      "Schedule-aware: handles daily/weekly recurring classes",
      "Browser automation for Meet navigation and joining",
      "Configurable time offsets (join X minutes early)",
      "Notification hooks for join confirmation",
    ],
    color: "#06B6D4",
    accentColor: "#0891B2",
    year: "2026",
    featured: false,
  },
  {
    id: "rfc-grill",
    title: "RFC Grill Restaurant",
    shortDesc: "Modern fast-food restaurant web app with admin panel.",
    fullDesc:
      "A full-featured restaurant web application for RFC Grill built with React, TypeScript, and Tailwind CSS. Features an interactive menu page, deals section, contact form with Google Maps integration, and a full admin panel for managing menu items and orders. Built with Vite for fast development, shadcn-ui components, and a responsive design that works across all devices.",
    category: "Frontend",
    tags: ["React", "TypeScript", "Tailwind CSS", "shadcn-ui", "Vite", "Admin Panel"],
    features: [
      "Interactive menu with category filtering",
      "Deals & promotions page",
      "Contact form with location integration",
      "Full admin panel for menu management",
      "Responsive across mobile, tablet, desktop",
      "Component-driven architecture with shadcn-ui",
    ],
    color: "#F97316",
    accentColor: "#EA580C",
    year: "2024",
    featured: false,
  },
  {
    id: "vibetribe",
    title: "VIBE | Photography Portfolio",
    shortDesc: "Cinematic photography portfolio — Visual.Stories by Zaryab Khan.",
    fullDesc:
      "A cinematic, responsive photography portfolio website built from scratch using only HTML and CSS. Features a responsive grid-based gallery layout, clean typographic hierarchy, and a minimalist dark aesthetic that lets the photography shine. Live on GitHub Pages at thezrk181.github.io/Vibetribe.",
    category: "Frontend",
    tags: ["HTML", "CSS", "Responsive Grid", "Photography", "GitHub Pages"],
    features: [
      "Responsive grid photo gallery",
      "Multi-page: Home, Work, About, Contact",
      "Minimalist dark cinematic aesthetic",
      "Zero framework — pure HTML & CSS",
      "Live on GitHub Pages",
    ],
    github: "https://github.com/thezrk181/Vibetribe",
    live: "https://thezrk181.github.io/Vibetribe/",
    color: "#8B5CF6",
    accentColor: "#7C3AED",
    year: "2024",
    featured: false,
  },
  {
    id: "irepair",
    title: "iRepair API",
    shortDesc: "RESTful Express API backend for a device repair service.",
    fullDesc:
      "A lightweight Node.js/Express REST API backend for a device repair service portal. Serves product listings from a JSON data store with category filtering endpoints. Clean modular architecture with CORS support, static file serving, and a straightforward API contract that can be swapped to a real database.",
    category: "Backend",
    tags: ["Node.js", "Express", "REST API", "JSON", "CORS"],
    features: [
      "GET /api/products — full product catalog",
      "GET /api/products/category/:cat — filtered listings",
      "CORS-enabled for cross-origin frontend consumption",
      "Static file serving for frontend integration",
      "JSON-based mock database with hot-reload",
    ],
    color: "#6B7280",
    accentColor: "#4B5563",
    year: "2024",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const allProjects = projects;
