import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Lenis } from "../_libs/lenis.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Journey" },
  { href: "#contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "container-xl flex items-center justify-between gap-8 px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#hero",
            className: "font-mono text-sm tracking-widest text-foreground/90 hover:text-foreground transition",
            children: [
              "ZK",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cosmic-violet", children: "." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full glass transition ${scrolled ? "opacity-100" : "opacity-90"}`,
            children: LINKS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: l.href,
                className: "px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition rounded-full hover:bg-white/5",
                children: l.label
              },
              l.href
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#contact",
            className: "hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-medium tracking-widest uppercase glass hover:bg-white/8 transition"
          }
        )
      ] })
    }
  );
}
const Scene3D = reactExports.lazy(() => import("./Scene3D-kXnHfNLV.mjs"));
const ROLES = [
  "Full-Stack Developer",
  "AI Automation Builder",
  "Low-Level Systems Coder",
  "CS Student @ FAST NUCES"
];
function Typewriter() {
  const [text, setText] = reactExports.useState("");
  const [wordIdx, setWordIdx] = reactExports.useState(0);
  const [charIdx, setCharIdx] = reactExports.useState(0);
  const [deleting, setDeleting] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const word = ROLES[wordIdx % ROLES.length];
    const delay = deleting ? 45 : charIdx === word.length ? 1800 : 75;
    const t = setTimeout(() => {
      if (!deleting && charIdx === word.length) setDeleting(true);
      else if (deleting && charIdx === 0) {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % ROLES.length);
      } else setCharIdx((c) => c + (deleting ? -1 : 1));
      setText(word.slice(0, charIdx));
    }, delay);
    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-0.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: text }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-[2px] h-[1em] bg-cosmic-violet ml-1 animate-blink" })
  ] });
}
function Hero() {
  const [is3D, setIs3D] = reactExports.useState(false);
  const ctaRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    setIs3D(window.innerWidth >= 768);
  }, []);
  reactExports.useEffect(() => {
    const btn = ctaRef.current;
    if (!btn) return;
    const move = (e) => {
      const r = btn.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) * 0.22;
      const dy = (e.clientY - (r.top + r.height / 2)) * 0.22;
      btn.style.transform = `translate(${dx}px,${dy}px)`;
    };
    const leave = () => btn.style.transform = "translate(0,0)";
    btn.addEventListener("mousemove", move);
    btn.addEventListener("mouseleave", leave);
    return () => {
      btn.removeEventListener("mousemove", move);
      btn.removeEventListener("mouseleave", leave);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "hero",
      className: "relative w-full min-h-svh flex items-center justify-center overflow-hidden",
      children: [
        is3D && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-[1]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Scene3D, {}) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 z-[2] pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(5,5,12,0.78) 100%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-xl relative z-10 flex flex-col items-center text-center px-6 py-32", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 14 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.1, duration: 0.6 },
              className: "mb-10"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.h1,
            {
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              className: "font-bold tracking-[-0.045em] leading-[0.95] text-foreground",
              style: { fontSize: "clamp(3.5rem, 11vw, 9rem)" },
              children: [
                "Zaryab ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Khan" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.5, duration: 0.6 },
              className: "mt-8 font-mono text-base sm:text-lg min-h-[2rem]",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typewriter, {})
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.7, duration: 0.7 },
              className: "mt-10 max-w-xl text-base sm:text-lg text-muted-foreground leading-[1.9]",
              children: "I build intelligent systems and full-stack platforms — from AI automations and RAG pipelines to production-ready web applications."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.85, duration: 0.6 },
              className: "mt-14 flex flex-wrap items-center justify-center gap-5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    ref: ctaRef,
                    href: "#projects",
                    className: "group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-medium tracking-wider uppercase text-background transition-transform duration-300 ease-out will-change-transform",
                    style: {
                      background: "linear-gradient(120deg, var(--cosmic-violet), var(--cosmic-indigo) 50%, var(--cosmic-cyan))",
                      boxShadow: "0 20px 60px -20px color-mix(in oklab, var(--cosmic-violet) 70%, transparent)"
                    },
                    children: [
                      "View My Work",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-1", children: "→" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "#contact",
                    className: "inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium tracking-wider uppercase glass hover:bg-white/8 transition",
                    children: "Get in Touch"
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 0.6 },
            transition: { delay: 1.4, duration: 1 },
            className: "absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase", children: "Scroll" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-12 bg-gradient-to-b from-muted-foreground/60 to-transparent" })
            ]
          }
        )
      ]
    }
  );
}
const STATS = [
  { value: "12+", label: "Projects Built" },
  { value: "6", label: "Tech Categories" },
  { value: "2026", label: "Graduating" },
  { value: "∞", label: "Curiosity" }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "section-pad relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "01 · About", title: "Engineering across the stack" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.8 },
          className: "lg:col-span-7 glass rounded-3xl p-10 lg:p-14",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] tracking-[0.25em] uppercase text-cosmic-violet mb-8", children: "The Story" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg sm:text-xl text-foreground/90 leading-[1.85]", children: [
              "I'm a Computer Science student at",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "FAST NUCES" }),
              ", building software that spans the entire stack — from low-level 8086 Assembly to AI-powered RAG pipelines."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-base sm:text-lg text-muted-foreground leading-[1.9]", children: "My obsession is craft. I'd rather understand a system deeply than abstract it away, automate a workflow than repeat it twice, and build something precise instead of just passable. Every project is an excuse to learn one new layer of the machine." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.8, delay: 0.1 },
          className: "lg:col-span-5 glass-strong rounded-3xl p-10 lg:p-12 flex flex-col justify-between min-h-[280px]",
          style: {
            background: "linear-gradient(135deg, color-mix(in oklab, var(--cosmic-violet) 14%, transparent), color-mix(in oklab, var(--cosmic-indigo) 8%, transparent))"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-6xl leading-none text-cosmic-violet/60", "aria-hidden": true, children: '"' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl sm:text-2xl font-medium leading-[1.5] tracking-tight text-foreground", children: "Build like an architect, think like a scientist, ship like a craftsman." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground", children: "— Working Philosophy" })
          ]
        }
      ),
      STATS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.6, delay: 0.15 + i * 0.08 },
          className: "lg:col-span-3 glass rounded-3xl p-10 flex flex-col gap-4 hover:bg-white/[0.05] transition group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl sm:text-6xl font-bold tracking-tight text-gradient leading-none", children: s.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] tracking-[0.22em] uppercase text-muted-foreground", children: s.label })
          ]
        },
        s.label
      ))
    ] })
  ] }) });
}
function SectionHeader({
  eyebrow,
  title,
  kicker
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6 max-w-3xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip self-start", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        className: "font-bold tracking-[-0.035em] leading-[1.05] text-foreground",
        style: { fontSize: "clamp(2.25rem, 5vw, 4rem)" },
        children: title
      }
    ),
    kicker && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-lg text-muted-foreground leading-[1.85] max-w-2xl", children: kicker })
  ] });
}
const skillCategories = [
  {
    name: "Languages",
    icon: "code",
    color: "#818CF8",
    skills: ["Python", "TypeScript", "JavaScript", "C++", "SQL", "8086 Assembly", "HTML", "CSS"]
  },
  {
    name: "Frontend",
    icon: "monitor",
    color: "#38BDF8",
    skills: ["React", "Next.js", "Tailwind CSS", "Three.js", "Framer Motion", "GSAP", "shadcn-ui"]
  },
  {
    name: "Backend",
    icon: "server",
    color: "#10B981",
    skills: ["Flask", "Node.js", "Express", "PostgreSQL", "REST APIs", "Supabase"]
  },
  {
    name: "AI & ML",
    icon: "brain",
    color: "#A78BFA",
    skills: [
      "n8n",
      "Gemini API",
      "Pinecone",
      "RAG",
      "Pandas",
      "Scikit-learn",
      "Scipy",
      "Groq",
      "Redis"
    ]
  },
  {
    name: "Tools & Platforms",
    icon: "wrench",
    color: "#F59E0B",
    skills: ["Git", "GitHub", "Vercel", "Cloudinary", "ngrok", "DOSBox", "NASM", "VS Code"]
  }
];
function Skills() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "skills", className: "section-pad relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "02 · Toolkit",
        title: "A polyglot's stack",
        kicker: "Five categories, dozens of tools. Picked deliberately — each one earns its keep on real projects."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8", children: skillCategories.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.7, delay: i * 0.08 },
        className: "group glass rounded-3xl p-10 lg:p-12 hover:bg-white/[0.04] transition-all relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -top-20 -right-20 size-56 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition duration-700",
              style: { background: `radial-gradient(circle, ${cat.color}, transparent 70%)` }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-between mb-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold tracking-tight text-foreground", children: cat.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "size-10 rounded-full border border-white/10 flex items-center justify-center",
                style: { background: `color-mix(in oklab, ${cat.color} 18%, transparent)` },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "size-2 rounded-full",
                    style: { background: cat.color, boxShadow: `0 0 16px ${cat.color}` }
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex flex-wrap gap-3", children: cat.skills.map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "px-4 py-2 rounded-full text-xs font-mono tracking-wide border border-white/8 bg-white/[0.03] text-foreground/85 hover:bg-white/[0.07] transition",
              children: skill
            },
            skill
          )) })
        ]
      },
      cat.name
    )) })
  ] }) });
}
const projects = [
  {
    id: "mxk-canvas",
    title: "MXK Canvas",
    shortDesc: "Full-stack art e-commerce platform for handcrafted paintings.",
    fullDesc: "MXK Canvas is a full-stack online art & calligraphy store selling handcrafted paintings across 3 categories: Calligraphy, Abstract, and Modern. Built as a final Database Systems project at FAST NUCES, it features a Next.js storefront, a Flask backend with raw PostgreSQL queries (no ORM), advanced SQL features including Triggers, Stored Procedures, and Cursors, Cloudinary for image hosting, and a WhatsApp-integrated order flow.",
    category: "Full-Stack",
    tags: ["Next.js", "Flask", "PostgreSQL", "Raw SQL", "Triggers", "Cloudinary", "Supabase"],
    features: [
      "22 handcrafted art products across 3 categories",
      "Full cart & order system with WhatsApp checkout",
      "Raw SQL queries — no ORM, full control",
      "Advanced DB: Triggers, Stored Procedures, Cursors",
      "Admin panel for product & order management",
      "Cloudinary image upload integration",
      "Video gallery / Reels section"
    ],
    color: "#818CF8",
    accentColor: "#6366F1",
    year: "2025",
    featured: true
  },
  {
    id: "studdy-buddy",
    title: "StuddyBuddy AI",
    shortDesc: "RAG-based PDF study assistant powered by n8n and Gemini 2.5.",
    fullDesc: "StuddyBuddy is an AI-powered study assistant built with a RAG (Retrieval-Augmented Generation) architecture. Students upload their PDF lecture notes, which are chunked and indexed in Pinecone. The n8n workflow orchestrates the pipeline: embedding generation, vector search, and Gemini 2.5 Flash LLM responses. The Next.js frontend deployed on Vercel connects to a self-hosted n8n backend exposed via ngrok.",
    category: "AI & Automation",
    tags: [
      "n8n",
      "Gemini 2.5 Flash",
      "Pinecone",
      "RAG",
      "Next.js",
      "Vercel",
      "ngrok",
      "TypeScript"
    ],
    features: [
      "RAG pipeline: PDF → chunks → Pinecone embeddings",
      "Gemini 2.5 Flash for intelligent QA responses",
      "n8n workflow orchestration (self-hosted)",
      "Full-stack Next.js frontend on Vercel",
      "Real-time streaming chat interface",
      "Session history and new chat functionality"
    ],
    github: "https://github.com/thezrk181/studdy-buddy-ai",
    color: "#A78BFA",
    accentColor: "#9333EA",
    year: "2026",
    featured: true
  },
  {
    id: "urban-threads-crm",
    title: "Urban Threads AI CRM",
    shortDesc: "Dual-model AI CRM agent with RAG, Redis, and Pinecone.",
    fullDesc: "Urban Threads is an AI-powered CRM support agent for a fashion brand. Built with a dual-model architecture: a fast conversational layer (Groq) and a deep reasoning layer. Pinecone stores the product/customer knowledge base for RAG lookups. Redis caches session state for ultra-fast responses. A gatekeeper logging system validates LLM session closure and writes exactly one clean CRM row per session to Google Sheets.",
    category: "AI & Automation",
    tags: ["Groq", "Pinecone", "Redis", "RAG", "Google Sheets", "n8n", "Dual-Model LLM"],
    features: [
      "Dual-model architecture: conversational + reasoning layers",
      "Pinecone vector store for product knowledge RAG",
      "Redis session caching for sub-100ms responses",
      "LLM-validated gatekeeper for clean CRM logging",
      "1-session-1-row Google Sheets integration",
      "Zero manual CRM entry required"
    ],
    color: "#38BDF8",
    accentColor: "#0EA5E9",
    year: "2024",
    featured: true
  },
  {
    id: "assembly-brick-breaker",
    title: "Assembly Brick Breaker",
    shortDesc: "Retro 8086 arcade game built entirely in low-level Assembly.",
    fullDesc: "A retro arcade-style brick breaker game written entirely in 16-bit 8086 Assembly Language (NASM). This project demonstrates mastery of low-level system programming without any standard library abstractions. It bypasses BIOS interrupts for high-speed graphics by writing directly to VGA video memory at 0xB800, implements a custom sound engine via PIT ports, and features a full physics engine with ball-paddle-brick collision detection.",
    category: "Systems",
    tags: ["8086 Assembly", "NASM", "DOSBox", "VGA Graphics", "PIT Audio", "Custom Physics"],
    features: [
      "Direct VGA video memory writes (0xB800) for fast rendering",
      "Custom square-wave audio via Programmable Interval Timer",
      "Full collision physics: ball, paddle, brick + angle calculation",
      "Hybrid mouse (INT 0x33) & keyboard (INT 0x16) input",
      "Full game state machine: Menu → Play → Win/Loss",
      "Runs in DOSBox — drag & drop to play"
    ],
    github: "https://github.com/thezrk181/Assembly-Brick-Breaker",
    color: "#F59E0B",
    accentColor: "#D97706",
    year: "2024",
    featured: true
  },
  {
    id: "t20-analytics",
    title: "T20 Cricket Analytics",
    shortDesc: "Statistical analysis web app on 2006 ICC T20 players.",
    fullDesc: "A Probability & Statistics semester project at FAST NUCES analyzing ICC T20 cricket data for 2006 players across 15 variables. The Flask backend uses Pandas, Scipy, and Scikit-learn to compute descriptive statistics, probability distributions, linear regression models, and confidence intervals. The Next.js frontend presents interactive dashboards, histograms, Q-Q plots, and an interactive run predictor.",
    category: "Data Science",
    tags: ["Flask", "Pandas", "Scipy", "Scikit-learn", "Next.js", "Regression", "Statistics"],
    features: [
      "Dataset: 2006 ICC T20 players, 15 statistical variables",
      "Descriptive stats: mean, median, std dev, CIs",
      "Linear regression model (R² = 0.674)",
      "Probability analysis & distribution fitting",
      "Interactive run predictor (SR × Matches input)",
      "Top 10 player leaderboards with charts"
    ],
    github: "https://github.com/thezrk181/Probability-s-Project",
    color: "#10B981",
    accentColor: "#059669",
    year: "2025",
    featured: false
  },
  {
    id: "ai-pathfinder",
    title: "AI Pathfinder",
    shortDesc: "Visual search algorithm explorer with 6 uninformed strategies.",
    fullDesc: "A Python GUI application that visualizes how six different uninformed (blind) search algorithms explore a 10×10 grid to find a path from Start (S) to Target (T) while avoiding walls. Built with Tkinter for real-time step-by-step visualization showing frontier nodes, explored nodes, and the final path. Implements BFS, DFS, UCS (with diagonal cost √2), DLS, IDDFS, and Bidirectional Search.",
    category: "AI & Automation",
    tags: ["Python", "Tkinter", "BFS", "DFS", "UCS", "IDDFS", "Bidirectional Search"],
    features: [
      "6 search algorithms: BFS, DFS, UCS, DLS, IDDFS, Bidirectional",
      "Step-by-step animated visualization",
      "Color-coded: frontier (blue), explored (dark blue), path (purple)",
      "6-direction movement with diagonal cost support",
      "Configurable depth limit for DLS algorithm",
      "Real-time node expansion counter"
    ],
    github: "https://github.com/thezrk181/AI_A1_24F_0641",
    color: "#EC4899",
    accentColor: "#DB2777",
    year: "2024",
    featured: false
  },
  {
    id: "google-meet-bot",
    title: "Google Meet Attendance Bot",
    shortDesc: "n8n workflow that auto-joins scheduled Google Meet classes.",
    fullDesc: "An n8n automation workflow that automatically joins scheduled Google Meet classes at configured times without any manual intervention. The workflow reads a class schedule, triggers at the correct time, uses browser automation to navigate to the Meet URL, and joins the call — zero human input required. Integrated scheduling logic handles daily/weekly recurring classes.",
    category: "AI & Automation",
    tags: ["n8n", "Browser Automation", "Scheduling", "Google Meet", "Workflow Automation"],
    features: [
      "Fully automated class attendance — zero manual clicks",
      "Schedule-aware: handles daily/weekly recurring classes",
      "Browser automation for Meet navigation and joining",
      "Configurable time offsets (join X minutes early)",
      "Notification hooks for join confirmation"
    ],
    color: "#06B6D4",
    accentColor: "#0891B2",
    year: "2026",
    featured: false
  },
  {
    id: "rfc-grill",
    title: "RFC Grill Restaurant",
    shortDesc: "Modern fast-food restaurant web app with admin panel.",
    fullDesc: "A full-featured restaurant web application for RFC Grill built with React, TypeScript, and Tailwind CSS. Features an interactive menu page, deals section, contact form with Google Maps integration, and a full admin panel for managing menu items and orders. Built with Vite for fast development, shadcn-ui components, and a responsive design that works across all devices.",
    category: "Frontend",
    tags: ["React", "TypeScript", "Tailwind CSS", "shadcn-ui", "Vite", "Admin Panel"],
    features: [
      "Interactive menu with category filtering",
      "Deals & promotions page",
      "Contact form with location integration",
      "Full admin panel for menu management",
      "Responsive across mobile, tablet, desktop",
      "Component-driven architecture with shadcn-ui"
    ],
    color: "#F97316",
    accentColor: "#EA580C",
    year: "2024",
    featured: false
  },
  {
    id: "vibetribe",
    title: "VIBE | Photography Portfolio",
    shortDesc: "Cinematic photography portfolio — Visual.Stories by Zaryab Khan.",
    fullDesc: "A cinematic, responsive photography portfolio website built from scratch using only HTML and CSS. Features a responsive grid-based gallery layout, clean typographic hierarchy, and a minimalist dark aesthetic that lets the photography shine. Live on GitHub Pages at thezrk181.github.io/Vibetribe.",
    category: "Frontend",
    tags: ["HTML", "CSS", "Responsive Grid", "Photography", "GitHub Pages"],
    features: [
      "Responsive grid photo gallery",
      "Multi-page: Home, Work, About, Contact",
      "Minimalist dark cinematic aesthetic",
      "Zero framework — pure HTML & CSS",
      "Live on GitHub Pages"
    ],
    github: "https://github.com/thezrk181/Vibetribe",
    live: "https://thezrk181.github.io/Vibetribe/",
    color: "#8B5CF6",
    accentColor: "#7C3AED",
    year: "2024",
    featured: false
  },
  {
    id: "irepair",
    title: "iRepair API",
    shortDesc: "RESTful Express API backend for a device repair service.",
    fullDesc: "A lightweight Node.js/Express REST API backend for a device repair service portal. Serves product listings from a JSON data store with category filtering endpoints. Clean modular architecture with CORS support, static file serving, and a straightforward API contract that can be swapped to a real database.",
    category: "Backend",
    tags: ["Node.js", "Express", "REST API", "JSON", "CORS"],
    features: [
      "GET /api/products — full product catalog",
      "GET /api/products/category/:cat — filtered listings",
      "CORS-enabled for cross-origin frontend consumption",
      "Static file serving for frontend integration",
      "JSON-based mock database with hot-reload"
    ],
    color: "#6B7280",
    accentColor: "#4B5563",
    year: "2024",
    featured: false
  }
];
projects.filter((p) => p.featured);
function Projects() {
  const [active, setActive] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "projects", className: "section-pad relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          eyebrow: "03 · Selected Work",
          title: "Projects, end to end",
          kicker: "From RAG pipelines to raw SQL e-commerce to 8086 Assembly arcades. Click any card for the full story."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.button,
        {
          type: "button",
          onClick: () => setActive(p),
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.6, delay: i % 3 * 0.08 },
          className: "group text-left glass rounded-3xl overflow-hidden hover:bg-white/[0.04] transition-all flex flex-col",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-1.5 w-full",
                style: {
                  background: `linear-gradient(90deg, ${p.color}, ${p.accentColor})`
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10 flex flex-col gap-7 grow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] font-mono tracking-[0.22em] uppercase text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.category }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.year })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold tracking-tight leading-snug text-foreground group-hover:text-gradient transition", children: p.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] text-muted-foreground leading-[1.9]", children: p.shortDesc }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mt-auto", children: [
                p.tags.slice(0, 4).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "px-3 py-1.5 rounded-full text-[11px] font-mono tracking-wide border border-white/8 text-foreground/75",
                    children: t
                  },
                  t
                )),
                p.tags.length > 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-3 py-1.5 text-[11px] font-mono text-muted-foreground", children: [
                  "+",
                  p.tags.length - 4
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 flex items-center gap-2 text-sm font-medium text-foreground/90 group-hover:text-cosmic-cyan transition", children: [
                "View case study",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-1.5", children: "→" })
              ] })
            ] })
          ]
        },
        p.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectModal, { project: active, onClose: () => setActive(null) })
  ] });
}
function ProjectModal({ project, onClose }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: project && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: onClose,
      className: "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8",
      style: { background: "rgba(5,5,12,0.78)", backdropFilter: "blur(12px)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.96, y: 20 },
          animate: { opacity: 1, scale: 1, y: 0 },
          exit: { opacity: 0, scale: 0.96, y: 20 },
          transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
          onClick: (e) => e.stopPropagation(),
          "data-lenis-prevent": "true",
          className: "glass-strong rounded-3xl w-full max-w-3xl max-h-[88vh] overflow-y-auto overscroll-contain relative",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-2 w-full sticky top-0 z-10",
                style: {
                  background: `linear-gradient(90deg, ${project.color}, ${project.accentColor})`
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onClose,
                "aria-label": "Close",
                className: "absolute top-6 right-6 size-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition z-20",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg leading-none", children: "×" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10 sm:p-14 flex flex-col gap-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-[11px] font-mono tracking-[0.22em] uppercase text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: project.category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1 rounded-full bg-muted-foreground/50" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: project.year })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-bold tracking-tight leading-[1.05]",
                    style: { fontSize: "clamp(1.75rem, 4vw, 2.75rem)" },
                    children: project.title
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-lg text-foreground/85 leading-[1.95]", children: project.fullDesc }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-mono text-[11px] tracking-[0.25em] uppercase text-cosmic-violet", children: "Key Features" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-4", children: project.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    className: "flex items-start gap-4 text-[15px] text-foreground/85 leading-[1.8]",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "mt-2 size-1.5 rounded-full shrink-0",
                          style: {
                            background: project.color,
                            boxShadow: `0 0 10px ${project.color}`
                          }
                        }
                      ),
                      f
                    ]
                  },
                  f
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-mono text-[11px] tracking-[0.25em] uppercase text-cosmic-violet", children: "Stack" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2.5", children: project.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "px-3.5 py-1.5 rounded-full text-[11px] font-mono border border-white/10 text-foreground/80 bg-white/[0.03]",
                    children: t
                  },
                  t
                )) })
              ] }),
              (project.github || project.live) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 pt-2", children: [
                project.live && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: project.live,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-background",
                    style: {
                      background: `linear-gradient(120deg, ${project.color}, ${project.accentColor})`
                    },
                    children: "Live Site →"
                  }
                ),
                project.github && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: project.github,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium glass hover:bg-white/10 transition",
                    children: "View Source"
                  }
                )
              ] })
            ] })
          ]
        }
      )
    }
  ) });
}
const timelineEvents = [
  {
    id: "fast-nuces",
    year: "2024 – Present",
    title: "BS Computer Science",
    subtitle: "FAST NUCES",
    description: "Pursuing a Bachelor's in Computer Science at one of Pakistan's top engineering universities. Coursework spans AI, Database Systems, Probability & Statistics, Computer Architecture, and Software Engineering.",
    tags: ["AI", "Database Systems", "Computer Architecture", "Software Engineering"],
    type: "education",
    color: "#818CF8"
  },
  {
    id: "studdy-buddy-event",
    year: "2026",
    title: "StuddyBuddy AI — RAG Study Assistant",
    subtitle: "AI Automation Project",
    description: "Built a full-stack RAG-based PDF study assistant using n8n, Gemini 2.5 Flash, and Pinecone. Deployed on Vercel with a self-hosted n8n backend. Students upload notes and chat with an AI tutor.",
    tags: ["n8n", "RAG", "Gemini", "Pinecone", "Next.js"],
    type: "project",
    color: "#A78BFA"
  },
  {
    id: "google-meet-event",
    year: "2026",
    title: "Google Meet Auto-Attendance Bot",
    subtitle: "Personal Automation",
    description: "Engineered an n8n workflow that automatically joins scheduled Google Meet classes at configured times — zero manual intervention required.",
    tags: ["n8n", "Browser Automation", "Scheduling"],
    type: "project",
    color: "#06B6D4"
  },
  {
    id: "mxk-event",
    year: "2025",
    title: "MXK Canvas — Art E-commerce Platform",
    subtitle: "Database Systems Final Project",
    description: "Architected and built a full-stack art e-commerce platform with raw PostgreSQL, advanced SQL features (Triggers, Stored Procedures, Cursors), Next.js frontend, and Cloudinary image management.",
    tags: ["Next.js", "Flask", "PostgreSQL", "Raw SQL"],
    type: "project",
    color: "#818CF8"
  },
  {
    id: "t20-event",
    year: "2025",
    title: "T20 Cricket Analytics Platform",
    subtitle: "Probability & Statistics Project",
    description: "Developed a statistical analysis web app for 2006 ICC T20 players. Implemented descriptive stats, probability distributions, and linear regression (R²=0.674) with an interactive Next.js dashboard.",
    tags: ["Python", "Pandas", "Scipy", "Flask", "Statistics"],
    type: "project",
    color: "#10B981"
  },
  {
    id: "urban-threads-event",
    year: "2024",
    title: "Urban Threads AI CRM Agent",
    subtitle: "AI Automation Project",
    description: "Built a dual-model AI CRM support agent using Groq, Pinecone, and Redis. Implemented gatekeeper logging for clean 1-session-1-row Google Sheets CRM entries via LLM-validated closure.",
    tags: ["Groq", "Pinecone", "Redis", "RAG", "Google Sheets"],
    type: "project",
    color: "#38BDF8"
  },
  {
    id: "assembly-event",
    year: "2024",
    title: "BreakOut — 8086 Assembly Game",
    subtitle: "Computer Architecture Project",
    description: "Wrote a fully functional brick-breaker arcade game in 16-bit 8086 Assembly. Implemented direct VGA rendering, PIT audio engine, and full collision physics — no standard library.",
    tags: ["8086 Assembly", "NASM", "VGA", "Systems Programming"],
    type: "project",
    color: "#F59E0B"
  },
  {
    id: "vibetribe-event",
    year: "2024",
    title: "VIBE — Cinematic Photography Portfolio",
    subtitle: "Personal Creative Project",
    description: "Built a responsive photography portfolio from scratch using pure HTML & CSS. Features a cinematic grid layout showcasing visual storytelling. Live on GitHub Pages.",
    tags: ["HTML", "CSS", "Photography", "GitHub Pages"],
    type: "project",
    color: "#8B5CF6"
  }
];
function Experience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "experience", className: "section-pad relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "04 · Journey",
        title: "A timeline of building",
        kicker: "Education, projects, and inflection points — the path so far."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-24 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "aria-hidden": true,
          className: "absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2",
          style: {
            background: "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--cosmic-violet) 50%, transparent) 10%, color-mix(in oklab, var(--cosmic-cyan) 50%, transparent) 90%, transparent)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-20 md:gap-28", children: timelineEvents.map((e, i) => {
        const right = i % 2 === 1;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-80px" },
            transition: { duration: 0.7 },
            className: `relative grid md:grid-cols-2 gap-10 items-center ${right ? "md:[direction:rtl]" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-6 md:left-1/2 -translate-x-1/2 top-2 md:top-1/2 md:-translate-y-1/2 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "size-5 rounded-full border-2 border-background",
                  style: {
                    background: e.color,
                    boxShadow: `0 0 0 4px color-mix(in oklab, ${e.color} 25%, transparent), 0 0 24px ${e.color}`
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `pl-16 md:pl-0 ${right ? "md:pr-16 md:[direction:ltr]" : "md:pr-0 md:pl-16"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-10 lg:p-12 flex flex-col gap-6", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "font-mono text-xs tracking-[0.2em] uppercase px-3 py-1.5 rounded-full",
                          style: {
                            background: `color-mix(in oklab, ${e.color} 18%, transparent)`,
                            color: e.color,
                            border: `1px solid color-mix(in oklab, ${e.color} 35%, transparent)`
                          },
                          children: e.year
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground", children: e.type })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl sm:text-2xl font-semibold tracking-tight text-foreground leading-snug", children: e.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-mono text-muted-foreground", children: e.subtitle })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] text-foreground/80 leading-[1.9]", children: e.description }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 pt-2", children: e.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "px-3 py-1.5 rounded-full text-[11px] font-mono border border-white/8 text-foreground/70",
                        children: t
                      },
                      t
                    )) })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block" })
            ]
          },
          e.id
        );
      }) })
    ] })
  ] }) });
}
const SOCIALS = [
  { label: "Email", value: "zaryabkhanloh@gmail.com", href: "mailto:zaryabkhanloh@gmail.com" },
  { label: "GitHub", value: "@thezrk181", href: "https://github.com/thezrk181" },
  { label: "Location", value: "Pakistan", href: null }
];
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "section-pad relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "05 · Contact",
        title: "Let's build something cinematic.",
        kicker: "Open to internships, freelance, and collaborations on ambitious projects. The inbox is quiet — feel free to break the silence."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.a,
        {
          href: "mailto:zaryabkhanloh@gmail.com",
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.7 },
          className: "lg:col-span-7 group glass-strong rounded-3xl p-12 lg:p-16 flex flex-col gap-10 hover:bg-white/[0.05] transition relative overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute -top-32 -right-32 size-80 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition duration-700",
                style: {
                  background: "radial-gradient(circle, var(--cosmic-violet), transparent 70%)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] tracking-[0.25em] uppercase text-cosmic-violet", children: "Drop a Line" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-semibold tracking-[-0.02em] leading-[1.1] text-gradient break-all sm:break-normal",
                  style: { fontSize: "clamp(1.5rem, 4vw, 2.75rem)" },
                  children: "zaryabkhanloh@gmail.com"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-flex items-center gap-3 text-sm font-medium tracking-wider uppercase text-foreground/90 group-hover:text-foreground transition", children: [
              "Compose email",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-1.5", children: "→" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 flex flex-col gap-6", children: SOCIALS.map((s, i) => {
        const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-8 lg:p-10 flex items-center justify-between gap-6 hover:bg-white/[0.05] transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground", children: s.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base sm:text-lg font-medium text-foreground truncate", children: s.value })
          ] }),
          s.href && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-cosmic-violet/40 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: "↗" }) })
        ] });
        const Comp = s.href ? motion.a : motion.div;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Comp,
          {
            ...s.href ? {
              href: s.href,
              target: s.href.startsWith("http") ? "_blank" : void 0,
              rel: "noreferrer"
            } : {},
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-80px" },
            transition: { duration: 0.6, delay: 0.1 + i * 0.08 },
            className: "group block",
            children: inner
          },
          s.label
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-32 pt-10 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs font-mono tracking-wider text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Zaryab Khan · Crafted with obsession."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Built in TanStack Start · Three.js · Framer Motion" })
    ] })
  ] }) });
}
function GradientOrbs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "pointer-events-none fixed inset-0 z-0 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 opacity-[0.35]",
        style: {
          backgroundImage: "radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.6) 50%, transparent 100%),             radial-gradient(1px 1px at 70% 80%, rgba(255,255,255,0.5) 50%, transparent 100%),             radial-gradient(1.5px 1.5px at 40% 60%, rgba(200,200,255,0.4) 50%, transparent 100%),             radial-gradient(1px 1px at 85% 20%, rgba(255,255,255,0.5) 50%, transparent 100%),             radial-gradient(1px 1px at 10% 85%, rgba(255,255,255,0.4) 50%, transparent 100%)",
          backgroundSize: "600px 600px, 800px 800px, 500px 500px, 700px 700px, 900px 900px"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute -top-40 -left-40 size-[36rem] rounded-full blur-[120px] opacity-50 animate-orb-drift",
        style: { background: "radial-gradient(circle, var(--cosmic-violet) 0%, transparent 70%)" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute top-1/3 -right-40 size-[32rem] rounded-full blur-[120px] opacity-40 animate-orb-drift",
        style: {
          background: "radial-gradient(circle, var(--cosmic-cyan) 0%, transparent 70%)",
          animationDelay: "-7s"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute bottom-0 left-1/3 size-[34rem] rounded-full blur-[140px] opacity-35 animate-orb-drift",
        style: {
          background: "radial-gradient(circle, var(--cosmic-indigo) 0%, transparent 70%)",
          animationDelay: "-14s"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 opacity-[0.04]",
        style: {
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),             linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0",
        style: {
          background: "radial-gradient(ellipse 100% 80% at 50% 50%, transparent 40%, rgba(5,5,12,0.7) 100%)"
        }
      }
    )
  ] });
}
function IndexPage() {
  reactExports.useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });
    let raf = 0;
    const tick = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative isolate min-h-screen text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(GradientOrbs, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Experience, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] })
  ] });
}
export {
  IndexPage as component
};
