import { motion } from "framer-motion";

const STATS = [
  { value: "12+", label: "Projects Built" },
  { value: "6", label: "Tech Categories" },
  { value: "2026", label: "Graduating" },
  { value: "∞", label: "Curiosity" },
];

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-xl">
        <SectionHeader eyebrow="01 · About" title="Engineering across the stack" />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 glass rounded-3xl p-10 lg:p-14"
          >
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-cosmic-violet mb-8">
              The Story
            </p>
            <p className="text-lg sm:text-xl text-foreground/90 leading-[1.85]">
              I'm a Computer Science student at{" "}
              <span className="text-foreground font-medium">FAST NUCES</span>, building software
              that spans the entire stack, from low-level 8086 Assembly to AI-powered RAG
              pipelines.
            </p>
            <p className="mt-8 text-base sm:text-lg text-muted-foreground leading-[1.9]">
              My obsession is craft. I'd rather understand a system deeply than abstract it away,
              automate a workflow than repeat it twice, and build something precise instead of just
              passable. Every project is an excuse to learn one new layer of the machine.
            </p>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 glass-strong rounded-3xl p-10 lg:p-12 flex flex-col justify-between min-h-[280px]"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in oklab, var(--cosmic-violet) 14%, transparent), color-mix(in oklab, var(--cosmic-indigo) 8%, transparent))",
            }}
          >
            <span className="font-serif text-6xl leading-none text-cosmic-violet/60" aria-hidden>
              "
            </span>
            <p className="text-xl sm:text-2xl font-medium leading-[1.5] tracking-tight text-foreground">
              Build like an architect, think like a scientist, ship like a craftsman.
            </p>
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
              — Working Philosophy
            </p>
          </motion.div>

          {/* Stats */}
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.08 }}
              className="lg:col-span-3 glass rounded-3xl p-10 flex flex-col gap-4 hover:bg-white/[0.05] transition group"
            >
              <span className="text-5xl sm:text-6xl font-bold tracking-tight text-gradient leading-none">
                {s.value}
              </span>
              <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  kicker,
}: {
  eyebrow: string;
  title: string;
  kicker?: string;
}) {
  return (
    <div className="flex flex-col gap-6 max-w-3xl">
      <span className="chip self-start">{eyebrow}</span>
      <h2
        className="font-bold tracking-[-0.035em] leading-[1.05] text-foreground"
        style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
      >
        {title}
      </h2>
      {kicker && (
        <p className="text-base sm:text-lg text-muted-foreground leading-[1.85] max-w-2xl">
          {kicker}
        </p>
      )}
    </div>
  );
}
