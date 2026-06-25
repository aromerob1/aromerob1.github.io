import { techMarquee } from "../lib/icons";

export default function Marquee() {
  const row = [...techMarquee, ...techMarquee];
  return (
    <div className="relative py-10 border-y border-[var(--hairline)] overflow-hidden">
      <div
        className="marquee-track"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="marquee gap-12 pr-12">
          {row.map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 text-[var(--muted)] hover:text-[var(--fg)] transition-colors shrink-0"
            >
              <t.Icon className="text-2xl" />
              <span className="font-mono-brand text-sm whitespace-nowrap">
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
