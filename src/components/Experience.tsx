import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "../data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-24 scroll-mt-20"
    >
      <SectionHeading index="02" title="Experience" kicker="Where I've worked" />

      <div className="relative">
        <div className="absolute left-0 sm:left-[8.5rem] top-2 bottom-2 w-px bg-[var(--hairline)]" />

        <div className="space-y-12">
          {experience.map((job, i) => (
            <Reveal key={job.company + job.period} delay={i * 0.05}>
              <div className="grid sm:grid-cols-[8.5rem_1fr] gap-3 sm:gap-8">
                <div className="hidden sm:block text-right pr-8">
                  <p className="font-mono-brand text-xs text-[var(--muted)] leading-relaxed">
                    {job.period}
                  </p>
                </div>

                <div className="relative pl-6 sm:pl-8">
                  <span
                    className={`absolute left-[-4px] sm:left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full ring-4 ring-[var(--bg)] ${
                      job.current ? "bg-[var(--accent)]" : "bg-[var(--faint)]"
                    }`}
                  />
                  <p className="sm:hidden font-mono-brand text-xs text-[var(--muted)] mb-2">
                    {job.period}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    {job.current && (
                      <span className="text-[10px] uppercase tracking-wider font-mono-brand px-2 py-0.5 rounded-full bg-[var(--accent)]/15 text-[var(--accent)]">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-[var(--muted)] mb-4">
                    {job.company} · {job.location}
                  </p>
                  <ul className="space-y-2">
                    {job.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-2.5 text-sm sm:text-[0.95rem] text-[var(--fg)]/75 leading-relaxed"
                      >
                        <span className="text-[var(--accent)] mt-1.5 shrink-0">
                          ▸
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.stack.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono-brand px-2.5 py-1 rounded-md bg-white/[0.04] border border-[var(--hairline)] text-[var(--muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
