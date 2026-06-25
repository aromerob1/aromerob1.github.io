import Reveal from "./Reveal";
import { stats } from "../data";
import { useCountUp } from "../lib/hooks";

function CountStat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { ref, value: v } = useCountUp(value);
  return (
    <div className="py-2">
      <div className="font-display text-5xl sm:text-6xl font-semibold tracking-tight">
        <span ref={ref}>{v}</span>
        <span className="text-[var(--accent)]">{suffix}</span>
      </div>
      <p className="mt-2 text-sm text-[var(--muted)]">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 divide-x divide-[var(--hairline)]">
          {stats.map((s, i) => (
            <div key={i} className={i === 0 ? "" : "pl-8"}>
              {"value" in s && s.value !== undefined ? (
                <CountStat
                  value={s.value}
                  suffix={s.suffix ?? ""}
                  label={s.label}
                />
              ) : (
                <div className="py-2">
                  <div className="font-display text-2xl sm:text-3xl font-semibold leading-tight tracking-tight">
                    {s.kicker}
                  </div>
                  <p className="mt-3 text-sm text-[var(--muted)]">{s.label}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
