import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { profile } from "../data";
import { useActiveSection } from "../lib/hooks";

const links = [
  { href: "about", label: "About" },
  { href: "experience", label: "Experience" },
  { href: "work", label: "Work" },
  { href: "skills", label: "Skills" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(links.map((l) => l.href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[var(--bg)]/75 backdrop-blur-xl border-b border-[var(--hairline)]"
          : "border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono-brand text-sm tracking-tight">
          <span className="text-[var(--accent)]">{"{"}</span>
          AR
          <span className="text-[var(--accent)]">{"}"}</span>
        </a>

        <div className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={`#${l.href}`}
              className={`relative px-3 py-1.5 rounded-full transition-colors ${
                active === l.href
                  ? "text-[var(--fg)]"
                  : "text-[var(--muted)] hover:text-[var(--fg)]"
              }`}
            >
              {active === l.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-white/[0.06]"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{l.label}</span>
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-1 px-3 py-1.5 rounded-full text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="ml-1 px-4 py-1.5 rounded-full bg-[var(--accent)] text-black font-medium hover:opacity-90"
          >
            Contact
          </a>
        </div>

        <button
          className="md:hidden text-xl text-[var(--fg)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[var(--bg)]/95 backdrop-blur-xl border-b border-[var(--hairline)]"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {[...links, { href: "contact", label: "Contact" }].map((l) => (
                <a
                  key={l.href}
                  href={`#${l.href}`}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-[var(--muted)] hover:text-[var(--fg)]"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 text-[var(--accent)]"
              >
                Resume ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
