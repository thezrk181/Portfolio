import { motion } from "framer-motion";
import { SectionHeader } from "./About";

const SOCIALS = [
  { label: "Email", value: "zaryabkhanloh@gmail.com", href: "mailto:zaryabkhanloh@gmail.com" },
  { label: "GitHub", value: "@thezrk181", href: "https://github.com/thezrk181" },
  { label: "Location", value: "Pakistan", href: null },
];

export function Contact() {
  return (
    <section id="contact" className="section-pad relative">
      <div className="container-xl">
        <SectionHeader
          eyebrow="05 · Contact"
          title="Let's build something cinematic."
          kicker="Open to internships, freelance, and collaborations on ambitious projects. The inbox is quiet — feel free to break the silence."
        />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Big mailto card */}
          <motion.a
            href="mailto:zaryabkhanloh@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 group glass-strong rounded-3xl p-12 lg:p-16 flex flex-col gap-10 hover:bg-white/[0.05] transition relative overflow-hidden"
          >
            <div
              className="absolute -top-32 -right-32 size-80 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition duration-700"
              style={{
                background: "radial-gradient(circle, var(--cosmic-violet), transparent 70%)",
              }}
            />

            <div className="relative flex flex-col gap-4">
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-cosmic-violet">
                Drop a Line
              </span>
              <span
                className="font-semibold tracking-[-0.02em] leading-[1.1] text-gradient break-all sm:break-normal"
                style={{ fontSize: "clamp(1.5rem, 4vw, 2.75rem)" }}
              >
                zaryabkhanloh@gmail.com
              </span>
            </div>

            <div className="relative inline-flex items-center gap-3 text-sm font-medium tracking-wider uppercase text-foreground/90 group-hover:text-foreground transition">
              Compose email
              <span className="transition-transform group-hover:translate-x-1.5">→</span>
            </div>
          </motion.a>

          {/* Socials */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {SOCIALS.map((s, i) => {
              const inner = (
                <div className="glass rounded-3xl p-8 lg:p-10 flex items-center justify-between gap-6 hover:bg-white/[0.05] transition">
                  <div className="flex flex-col gap-2 min-w-0">
                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                      {s.label}
                    </span>
                    <span className="text-base sm:text-lg font-medium text-foreground truncate">
                      {s.value}
                    </span>
                  </div>
                  {s.href && (
                    <span className="size-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-cosmic-violet/40 transition">
                      <span className="text-lg">↗</span>
                    </span>
                  )}
                </div>
              );

              const Comp = s.href ? motion.a : motion.div;
              return (
                <Comp
                  key={s.label}
                  {...(s.href
                    ? {
                        href: s.href,
                        target: s.href.startsWith("http") ? "_blank" : undefined,
                        rel: "noreferrer",
                      }
                    : {})}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                  className="group block"
                >
                  {inner}
                </Comp>
              );
            })}
          </div>
        </div>

        <div className="mt-32 pt-10 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs font-mono tracking-wider text-muted-foreground">
          <span>© {new Date().getFullYear()} Zaryab Khan · Crafted with obsession.</span>
          <span>Built in TanStack Start · Three.js · Framer Motion</span>
        </div>
      </div>
    </section>
  );
}
