import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects, type Project } from "../data";

function StatusBadge({ status }: { status?: Project["status"] }) {
  if (!status) return null;
  const live = status === "live";
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono-brand uppercase tracking-wider text-[var(--muted)]">
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          live ? "bg-green-400" : "bg-[var(--accent)] animate-pulse"
        }`}
      />
      {live ? "Live" : "Building"}
    </span>
  );
}

function Card({ project, featured }: { project: Project; featured?: boolean }) {
  return (
    <article
      className={`card group relative p-7 flex flex-col h-full ${
        featured ? "sm:p-8" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4 mb-1">
        <StatusBadge status={project.status} />
        <div className="flex gap-2 text-[var(--muted)]">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} repository`}
              className="hover:text-[var(--accent)]"
            >
              <FiGithub />
            </a>
          )}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live`}
              className="hover:text-[var(--accent)]"
            >
              <FiArrowUpRight className="text-lg" />
            </a>
          )}
        </div>
      </div>

      <h3
        className={`font-display font-semibold tracking-tight mt-3 ${
          featured ? "text-2xl" : "text-xl"
        }`}
      >
        {project.title}
      </h3>
      <p className="text-sm text-[var(--accent)]/90 font-mono-brand mt-1">
        {project.blurb}
      </p>
      <p className="text-sm text-[var(--muted)] leading-relaxed mt-4 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-6">
        {project.stack.map((t) => (
          <span
            key={t}
            className="text-xs font-mono-brand px-2.5 py-1 rounded-md bg-white/[0.04] text-[var(--muted)]"
          >
            {t}
          </span>
        ))}
      </div>

      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="absolute inset-0 rounded-[1.25rem]"
          aria-label={`Open ${project.title}`}
        />
      )}
    </article>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-20">
      <SectionHeading index="03" title="Selected Work" kicker="Things I've built" />

      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        {featured.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <Card project={p} featured />
          </Reveal>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {rest.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <Card project={p} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-10 text-center">
        <a
          href="https://github.com/aromerob1?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--fg)]"
        >
          <FiGithub /> More on GitHub
          <FiArrowUpRight />
        </a>
      </Reveal>
    </section>
  );
}
