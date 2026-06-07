export interface Skill {
  name: string;
  category: string;
  level: number; // 1-5
  color: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  color: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: "code",
    color: "#818CF8",
    skills: ["Python", "TypeScript", "JavaScript", "C++", "SQL", "8086 Assembly", "HTML", "CSS"],
  },
  {
    name: "Frontend",
    icon: "monitor",
    color: "#38BDF8",
    skills: ["React", "Next.js", "Tailwind CSS", "Three.js", "Framer Motion", "GSAP"],
  },
  {
    name: "Backend",
    icon: "server",
    color: "#10B981",
    skills: ["Flask", "Node.js", "Express", "PostgreSQL", "REST APIs", "Supabase"],
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
      "Redis",
    ],
  },
  {
    name: "Tools & Platforms",
    icon: "wrench",
    color: "#F59E0B",
    skills: ["Git", "GitHub", "Vercel", "Cloudinary", "ngrok", "DOSBox","Vercel","Render"],
  },
];
