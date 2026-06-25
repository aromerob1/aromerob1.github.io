import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--hairline)]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono-brand text-sm text-[var(--muted)]">
          <span className="text-[var(--accent)]">{"{"}</span>
          AR
          <span className="text-[var(--accent)]">{"}"}</span>
          <span className="ml-3 text-[var(--faint)]">
            © {new Date().getFullYear()} {profile.fullName}
          </span>
        </p>
        <p className="text-xs text-[var(--faint)]">
          Built with React, Tailwind & Framer Motion.
        </p>
      </div>
    </footer>
  );
}
