import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Team", href: "#team" },
  { label: "Press", href: "#press" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-xl bg-background/60 border-b border-border" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="size-8 rounded-full bg-gradient-to-br from-gold to-gold-soft glow-gold" />
          <span className="font-display text-xl tracking-tight">Lumen<span className="text-gradient-gold">&</span>Co</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-full bg-gold px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition glow-gold"
          >
            Book a call
          </a>
        </div>
      </div>
    </header>
  );
}
