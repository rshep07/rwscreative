import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] mt-auto">
      <div className="gutter py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-display text-2xl font-light c-ink hover:c-accent transition-colors duration-300 block mb-3"
            >
              RWS<span className="c-accent">.</span>
            </Link>
            <p className="text-sm c-muted leading-relaxed max-w-xs">
              Independent graphic design studio. Brand identity, editorial, packaging, motion, and web design.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="eyebrow c-faint mb-4">Pages</p>
            <div className="flex flex-col gap-2.5">
              {[["Work", "/work"], ["About", "/about"], ["Contact", "/contact"]].map(([label, href]) => (
                <Link key={href} href={href} className="text-sm c-muted hover:c-ink link-line self-start transition-colors duration-300">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow c-faint mb-4">Connect</p>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:hello@rwscreative.ca" className="text-sm c-muted hover:c-ink link-line self-start transition-colors duration-300">
                hello@rwscreative.ca
              </a>
              {[["Instagram", "https://instagram.com"], ["LinkedIn", "https://linkedin.com"]].map(([label, href]) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-sm c-muted hover:c-ink transition-colors duration-300 inline-flex items-center gap-1">
                  {label} <ArrowUpRight size={11} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="eyebrow c-faint">© {year} RWS Creative. All rights reserved.</p>
          <p className="eyebrow c-faint">rwscreative.ca</p>
        </div>
      </div>
    </footer>
  );
}
