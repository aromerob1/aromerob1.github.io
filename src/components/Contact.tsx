import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";
import { profile } from "../data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-28 scroll-mt-20 text-center"
    >
      <Reveal>
        <p className="eyebrow mb-6">Let's talk</p>
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
          Have a role or project
          <br />
          <span className="font-serif-italic accent-gradient font-normal">
            in mind?
          </span>
        </h2>
        <p className="mt-7 max-w-md mx-auto text-[var(--muted)] text-balance">
          I’m open to full-stack and backend opportunities. The fastest way to
          reach me is email — I usually reply within a day.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <a
          href={`mailto:${profile.email}`}
          className="group inline-flex items-center gap-3 mt-10 px-6 py-4 rounded-full bg-[var(--accent)] text-black font-medium text-lg hover:opacity-90"
        >
          <FiMail />
          {profile.email}
          <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </Reveal>

      <Reveal delay={0.18}>
        <div className="mt-10 flex items-center justify-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--hairline)] text-[var(--muted)] hover:text-[var(--fg)] hover:border-white/25"
          >
            <FiLinkedin /> LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--hairline)] text-[var(--muted)] hover:text-[var(--fg)] hover:border-white/25"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--hairline)] text-[var(--muted)] hover:text-[var(--fg)] hover:border-white/25"
          >
            Resume
          </a>
        </div>
      </Reveal>
    </section>
  );
}
