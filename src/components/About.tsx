import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { about } from "../data";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-20">
      <SectionHeading index="01" title="About" kicker="Who I am" />

      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-6">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-lg sm:text-xl leading-relaxed text-[var(--fg)]/85 text-balance">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="lg:col-span-5 space-y-5">
          <Reveal delay={0.1}>
            <div className="card p-6">
              <h3 className="font-mono-brand text-xs uppercase tracking-widest text-[var(--accent)] mb-4">
                Languages
              </h3>
              <ul className="space-y-3">
                {about.languages.map((l) => (
                  <li
                    key={l.name}
                    className="flex items-baseline justify-between gap-4"
                  >
                    <span className="font-medium">{l.name}</span>
                    <span className="text-sm text-[var(--muted)] text-right">
                      {l.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="card p-6">
              <h3 className="font-mono-brand text-xs uppercase tracking-widest text-[var(--accent)] mb-4">
                Education
              </h3>
              <p className="font-medium">{about.education.degree}</p>
              <p className="text-sm text-[var(--muted)] mt-1">
                {about.education.school}
              </p>
              <p className="text-sm text-[var(--faint)] mt-1 font-mono-brand">
                {about.education.period}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
