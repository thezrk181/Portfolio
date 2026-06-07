import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { GradientOrbs } from "@/components/portfolio/GradientOrbs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zaryab Khan — Full-Stack & AI Developer" },
      {
        name: "description",
        content:
          "Portfolio of Zaryab Khan — Full-stack developer, AI automation builder, and low-level systems coder. CS @ FAST NUCES.",
      },
      { property: "og:title", content: "Zaryab Khan — Full-Stack & AI Developer" },
      {
        property: "og:description",
        content:
          "Selected work: RAG pipelines, raw-SQL e-commerce, 8086 Assembly arcades, and more.",
      },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    let raf = 0;
    const tick = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative isolate min-h-screen text-foreground">
      <GradientOrbs />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
