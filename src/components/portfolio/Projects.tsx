import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/lib/portfolio/projects";
import { SectionHeader } from "./About";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-pad relative">
      <div className="container-xl">
        <SectionHeader
          eyebrow="03 · Selected Work"
          title="Projects, end to end"
          kicker="From RAG pipelines to raw SQL e-commerce to 8086 Assembly arcades. Click any card for the full story."
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.button
              key={p.id}
              type="button"
              onClick={() => setActive(p)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group text-left glass rounded-3xl overflow-hidden hover:bg-white/[0.04] transition-all flex flex-col"
            >
              {/* Color bar */}
              <div
                className="h-1.5 w-full"
                style={{
                  background: `linear-gradient(90deg, ${p.color}, ${p.accentColor})`,
                }}
              />

              <div className="p-10 flex flex-col gap-7 grow">
                <div className="flex items-center justify-between text-[11px] font-mono tracking-[0.22em] uppercase text-muted-foreground">
                  <span>{p.category}</span>
                  <span>{p.year}</span>
                </div>

                <h3 className="text-2xl font-semibold tracking-tight leading-snug text-foreground group-hover:text-gradient transition">
                  {p.title}
                </h3>

                <p className="text-[15px] text-muted-foreground leading-[1.9]">{p.shortDesc}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tags.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-full text-[11px] font-mono tracking-wide border border-white/8 text-foreground/75"
                    >
                      {t}
                    </span>
                  ))}
                  {p.tags.length > 4 && (
                    <span className="px-3 py-1.5 text-[11px] font-mono text-muted-foreground">
                      +{p.tags.length - 4}
                    </span>
                  )}
                </div>

                <div className="pt-4 flex items-center gap-2 text-sm font-medium text-foreground/90 group-hover:text-cosmic-cyan transition">
                  View case study
                  <span className="transition-transform group-hover:translate-x-1.5">→</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          style={{ background: "rgba(5,5,12,0.78)", backdropFilter: "blur(12px)" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent="true"
            className="glass-strong rounded-3xl w-full max-w-3xl max-h-[88vh] overflow-y-auto overscroll-contain relative"
          >
            <div
              className="h-2 w-full sticky top-0 z-10"
              style={{
                background: `linear-gradient(90deg, ${project.color}, ${project.accentColor})`,
              }}
            />

            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-6 right-6 size-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition z-20"
            >
              <span className="text-lg leading-none">×</span>
            </button>

            <div className="p-10 sm:p-14 flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4 text-[11px] font-mono tracking-[0.22em] uppercase text-muted-foreground">
                  <span>{project.category}</span>
                  <span className="size-1 rounded-full bg-muted-foreground/50" />
                  <span>{project.year}</span>
                </div>
                <h3
                  className="font-bold tracking-tight leading-[1.05]"
                  style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
                >
                  {project.title}
                </h3>
              </div>

              <p className="text-base sm:text-lg text-foreground/85 leading-[1.95]">
                {project.fullDesc}
              </p>

              <div className="flex flex-col gap-5">
                <h4 className="font-mono text-[11px] tracking-[0.25em] uppercase text-cosmic-violet">
                  Key Features
                </h4>
                <ul className="flex flex-col gap-4">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-4 text-[15px] text-foreground/85 leading-[1.8]"
                    >
                      <span
                        className="mt-2 size-1.5 rounded-full shrink-0"
                        style={{
                          background: project.color,
                          boxShadow: `0 0 10px ${project.color}`,
                        }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-5">
                <h4 className="font-mono text-[11px] tracking-[0.25em] uppercase text-cosmic-violet">
                  Stack
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3.5 py-1.5 rounded-full text-[11px] font-mono border border-white/10 text-foreground/80 bg-white/[0.03]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {(project.github || project.live) && (
                <div className="flex flex-wrap gap-4 pt-2">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-background"
                      style={{
                        background: `linear-gradient(120deg, ${project.color}, ${project.accentColor})`,
                      }}
                    >
                      Live Site →
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium glass hover:bg-white/10 transition"
                    >
                      View Source
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
