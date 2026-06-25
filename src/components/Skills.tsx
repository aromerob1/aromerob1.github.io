import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-20">
      <SectionHeading index="04" title="Toolbox" kicker="What I work with" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={(i % 3) * 0.06}>
            <div className="card p-6 h-full">
              <h3 className="font-mono-brand text-xs uppercase tracking-widest text-[var(--muted)] mb-4">
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-lg bg-white/[0.03] border border-[var(--hairline)] text-[var(--fg)]/85 hover:border-[var(--accent)]/40 hover:text-[var(--fg)] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
