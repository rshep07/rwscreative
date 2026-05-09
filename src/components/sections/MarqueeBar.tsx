const ITEMS = ["Brand Identity","Editorial Design","Motion Graphics","Packaging","Web Design","Art Direction","Photography","Visual Systems"];
export function MarqueeBar() {
  const rep = [...ITEMS,...ITEMS,...ITEMS,...ITEMS];
  return (
    <div className="overflow-hidden border-y border-[var(--border)] py-3" style={{ background: "var(--dim)" }}>
      <div className="flex whitespace-nowrap" style={{ animation: "marquee 36s linear infinite" }}>
        {rep.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-8">
            <span className="t-label text-[var(--gray)]">{item}</span>
            <span style={{ color: "var(--blue)" }} className="text-xs leading-none">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
