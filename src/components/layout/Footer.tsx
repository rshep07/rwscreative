import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="gutter py-14">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10 mb-12 pb-12 border-b border-[var(--border)]">
          <div>
            <Link href="/"
              className="font-raleway font-extralight text-3xl tracking-[0.15em] uppercase text-[var(--ink)] hover:text-[var(--coral)] transition-colors duration-150 block mb-3">
              RWS<span className="text-[var(--coral)]">.</span>
            </Link>
            <p className="text-sm text-[var(--muted)] max-w-xs leading-relaxed">
              Independent graphic design studio. Bold work for brands that want to be remembered.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-12">
            <div>
              <p className="label text-[var(--muted)] mb-4">Pages</p>
              <div className="flex flex-col gap-2.5">
                {([["Work", "/work"], ["About", "/about"], ["Contact", "/contact"]] as const).map(([l, h]) => (
                  <Link key={h} href={h} className="label text-[var(--muted)] hover:text-[var(--coral)] ul-link self-start transition-colors duration-150">
                    {l}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="label text-[var(--muted)] mb-4">Connect</p>
              <div className="flex flex-col gap-2.5">
                <a href="mailto:hello@rwscreative.ca"
                  className="label text-[var(--muted)] hover:text-[var(--coral)] ul-link self-start transition-colors">
                  hello@rwscreative.ca
                </a>
                {["Instagram", "LinkedIn"].map((s) => (
                  <a key={s} href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                    className="label text-[var(--muted)] hover:text-[var(--coral)] transition-colors inline-flex items-center gap-1">
                    {s} <ArrowUpRight size={10} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <p className="label text-[var(--faint)]">© {year} RWS Creative. All rights reserved.</p>
          <p className="label text-[var(--faint)]">rwscreative.ca</p>
        </div>
      </div>
    </footer>
  );
}
