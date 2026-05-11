import Link from "next/link";

export function Footer() {
  const yr = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--rule)]">
      <div className="gutter py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex flex-col gap-1">
          <Link href="/" className="font-display text-xl tracking-tight uppercase text-[var(--canvas)] hover:text-[var(--accent)] transition-colors duration-150">
            RWS<span style={{ color: "var(--accent)" }}>.</span>
          </Link>
          <p className="f-mono text-[var(--mid)]">Independent Design Studio — Canada</p>
        </div>

        <nav className="flex gap-8">
          {[["Work","/work"],["About","/about"],["Contact","/contact"]].map(([l,h]) => (
            <Link key={h} href={h} className="f-mono text-[var(--mid)] hover:text-[var(--accent)] transition-colors duration-150">{l}</Link>
          ))}
        </nav>

        <div className="flex flex-col gap-1 text-right">
          <a href="mailto:hello@rwscreative.ca" className="f-mono text-[var(--mid)] hover:text-[var(--accent)] transition-colors duration-150">
            hello@rwscreative.ca
          </a>
          <p className="f-mono text-[var(--rule)]">© {yr} RWS Creative</p>
        </div>
      </div>
    </footer>
  );
}
