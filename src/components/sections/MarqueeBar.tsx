const ITEMS = [
  "Brand Identity", "Editorial Design", "Motion Graphics",
  "Packaging Design", "Web Design", "Art Direction",
  "Photography", "Visual Systems",
];

export function MarqueeBar() {
  const doubled = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-[var(--border)] py-4 bg-[var(--surface)]">
      <div className="flex whitespace-nowrap" style={{ animation: "marquee 32s linear infinite" }}>
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6">
            <span className="label text-[var(--muted)]">{item}</span>
            <span className="text-[var(--lime)] text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
