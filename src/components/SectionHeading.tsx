import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  title,
  kicker,
}: {
  index: string;
  title: string;
  kicker?: string;
}) {
  return (
    <Reveal className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono-brand text-sm text-[var(--accent)]">
          {index}
        </span>
        <span className="h-px w-10 bg-[var(--accent)]/40" />
        {kicker && (
          <span className="font-mono-brand text-xs uppercase tracking-widest text-[var(--muted)]">
            {kicker}
          </span>
        )}
      </div>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
        {title}
      </h2>
    </Reveal>
  );
}
