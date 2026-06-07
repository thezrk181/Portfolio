import { motion } from "framer-motion";
import { timelineEvents } from "@/lib/portfolio/experience";
import { SectionHeader } from "./About";

export function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="container-xl">
        <SectionHeader
          eyebrow="04 · Journey"
          title="A timeline of building"
          kicker="Education, projects, and inflection points, the path so far."
        />

        <div className="mt-24 relative">
          {/* Center line */}
          <div
            aria-hidden
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
            style={{
              background:
                "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--cosmic-violet) 50%, transparent) 10%, color-mix(in oklab, var(--cosmic-cyan) 50%, transparent) 90%, transparent)",
            }}
          />

          <div className="flex flex-col gap-20 md:gap-28">
            {timelineEvents.map((e, i) => {
              const right = i % 2 === 1;
              return (
                <motion.div
                  key={e.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7 }}
                  className={`relative grid md:grid-cols-2 gap-10 items-center ${
                    right ? "md:[direction:rtl]" : ""
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-2 md:top-1/2 md:-translate-y-1/2 z-10">
                    <div
                      className="size-5 rounded-full border-2 border-background"
                      style={{
                        background: e.color,
                        boxShadow: `0 0 0 4px color-mix(in oklab, ${e.color} 25%, transparent), 0 0 24px ${e.color}`,
                      }}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={`pl-16 md:pl-0 ${right ? "md:pr-16 md:[direction:ltr]" : "md:pr-0 md:pl-16"}`}
                  >
                    <div className="glass rounded-3xl p-10 lg:p-12 flex flex-col gap-6">
                      <div className="flex items-center gap-4">
                        <span
                          className="font-mono text-xs tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
                          style={{
                            background: `color-mix(in oklab, ${e.color} 18%, transparent)`,
                            color: e.color,
                            border: `1px solid color-mix(in oklab, ${e.color} 35%, transparent)`,
                          }}
                        >
                          {e.year}
                        </span>
                        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                          {e.type}
                        </span>
                      </div>

                      <div className="flex flex-col gap-2">
                        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground leading-snug">
                          {e.title}
                        </h3>
                        <p className="text-sm font-mono text-muted-foreground">{e.subtitle}</p>
                      </div>

                      <p className="text-[15px] text-foreground/80 leading-[1.9]">
                        {e.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {e.tags.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1.5 rounded-full text-[11px] font-mono border border-white/8 text-foreground/70"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for opposite column */}
                  <div className="hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
