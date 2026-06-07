import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <nav className="container-xl flex items-center justify-between gap-8 px-6">
        <a
          href="#hero"
          className="font-mono text-sm tracking-widest text-foreground/90 hover:text-foreground transition"
        >
          ZK<span className="text-cosmic-violet">.</span>
        </a>

        <div
          className={`hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full glass transition ${
            scrolled ? "opacity-100" : "opacity-90"
          }`}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition rounded-full hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-medium tracking-widest uppercase glass hover:bg-white/8 transition"
        ></a>
      </nav>
    </header>
  );
}
