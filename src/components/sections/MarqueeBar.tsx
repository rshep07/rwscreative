const ITEMS = [
  "Brand Identity", "Editorial Design", "Motion Graphics",
  "Packaging Design", "Web Design", "Art Direction", "Photography", "Visual Systems",
];

export function MarqueeBar() {
  const rep = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-[var(--border)] py-4 bg-[var(--white)]">
      <div className="flex whitespace-nowrap" style={{ animation: "marquee 34s linear infinite" }}>
        {rep.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6">
            <span className="tag text-[var(--gray-mid)]">{item}</span>
            <span style={{ color: "var(--teal)" }} className="text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
