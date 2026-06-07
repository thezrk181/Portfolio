import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";

const Scene3D = lazy(() => import("./Scene3D"));

const ROLES = [
  "Full-Stack Developer",
  "AI Automation Builder",
  "Low-Level Systems Coder",
  "CS Student @ FAST NUCES",
];

function Typewriter() {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
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

  return (
    <span className="inline-flex items-center gap-0.5">
      <span className="text-muted-foreground">{text}</span>
      <span className="inline-block w-[2px] h-[1em] bg-cosmic-violet ml-1 animate-blink" />
    </span>
  );
}

export function Hero() {
  const [is3D, setIs3D] = useState(false);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Enable 3D scene on all devices including mobile
    setIs3D(true);
  }, []);

  useEffect(() => {
    const btn = ctaRef.current;
    if (!btn) return;
    const move = (e: MouseEvent) => {
      const r = btn.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) * 0.22;
      const dy = (e.clientY - (r.top + r.height / 2)) * 0.22;
      btn.style.transform = `translate(${dx}px,${dy}px)`;
    };
    const leave = () => (btn.style.transform = "translate(0,0)");
    btn.addEventListener("mousemove", move);
    btn.addEventListener("mouseleave", leave);
    return () => {
      btn.removeEventListener("mousemove", move);
      btn.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-svh flex items-center justify-center overflow-hidden"
    >
      {is3D && (
        <div className="absolute inset-0 z-[1]">
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </div>
      )}

      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(5,5,12,0.78) 100%)",
        }}
      />

      <div className="container-xl relative z-10 flex flex-col items-center text-center px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-10"
        ></motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-bold tracking-[-0.045em] leading-[0.95] text-foreground"
          style={{ fontSize: "clamp(3.5rem, 11vw, 9rem)" }}
        >
          Zaryab <span className="text-gradient">Khan</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 font-mono text-base sm:text-lg min-h-[2rem]"
        >
          <Typewriter />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-10 max-w-xl text-base sm:text-lg text-muted-foreground leading-[1.9]"
        >
          I build intelligent systems and full-stack platforms, from AI automations and RAG
          pipelines to production-ready web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-5"
        >
          <a
            ref={ctaRef}
            href="#projects"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-medium tracking-wider uppercase text-background transition-transform duration-300 ease-out will-change-transform"
            style={{
              background:
                "linear-gradient(120deg, var(--cosmic-violet), var(--cosmic-indigo) 50%, var(--cosmic-cyan))",
              boxShadow:
                "0 20px 60px -20px color-mix(in oklab, var(--cosmic-violet) 70%, transparent)",
            }}
          >
            View My Work
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium tracking-wider uppercase glass hover:bg-white/8 transition"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-muted-foreground/60 to-transparent" />
      </motion.div>
    </section>
  );
}
