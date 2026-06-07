import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <nav className="container-xl relative flex items-center justify-between gap-8 px-6">
        <a
          href="#hero"
          className="font-mono text-sm tracking-widest text-foreground/90 hover:text-foreground transition z-50"
        >
          ZK<span className="text-cosmic-violet">.</span>
        </a>

        {/* Desktop Navigation */}
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

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden z-50 p-2 text-foreground/90 hover:text-foreground transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Dropdown Navigation */}
        <div
          className={`absolute top-[120%] left-0 w-full glass border-y border-white/5 flex flex-col items-center md:hidden transition-all duration-300 ${
            mobileMenuOpen ? "opacity-100 py-6 pointer-events-auto" : "opacity-0 h-0 py-0 pointer-events-none overflow-hidden border-transparent"
          }`}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Spacer for desktop layout balance */}
        <div className="hidden md:block w-8"></div>
      </nav>
    </header>
  );
}
