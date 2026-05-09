const ITEMS = [
  "Brand Identity",
  "Editorial Design",
  "Motion Graphics",
  "Packaging Design",
  "Web Design",
  "Art Direction",
  "Photography",
  "Visual Systems",
];

export function MarqueeBar() {
  // Quadruple for seamless loop
  const repeated = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-[var(--color-border)] py-3.5 bg-surf">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 32s linear infinite" }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-5 px-6">
            <span className="eyebrow c-muted text-[0.6rem]">{item}</span>
            <span className="c-accent text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
