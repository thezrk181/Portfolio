import { motion } from "framer-motion";
import { skillCategories } from "@/lib/portfolio/skills";
import { SectionHeader } from "./About";

export function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="container-xl">
        <SectionHeader
          eyebrow="02 · Toolkit"
          title="A polyglot's stack"
          kicker="Five categories, dozens of tools. Picked deliberately, each one earns its keep on real projects."
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group glass rounded-3xl p-10 lg:p-12 hover:bg-white/[0.04] transition-all relative overflow-hidden"
            >
              <div
                className="absolute -top-20 -right-20 size-56 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition duration-700"
                style={{ background: `radial-gradient(circle, ${cat.color}, transparent 70%)` }}
              />

              <div className="relative flex items-center justify-between mb-10">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                  {cat.name}
                </h3>
                <div
                  className="size-10 rounded-full border border-white/10 flex items-center justify-center"
                  style={{ background: `color-mix(in oklab, ${cat.color} 18%, transparent)` }}
                >
                  <span
                    className="size-2 rounded-full"
                    style={{ background: cat.color, boxShadow: `0 0 16px ${cat.color}` }}
                  />
                </div>
              </div>

              <div className="relative flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-xs font-mono tracking-wide border border-white/8 bg-white/[0.03] text-foreground/85 hover:bg-white/[0.07] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
