import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="gutter py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <Link
              href="/"
              className="font-['Cormorant_Garamond',Georgia,serif] text-3xl font-light text-[var(--ink)] hover:text-[var(--lime)] transition-colors duration-300 block mb-4"
            >
              RWS<span className="text-[var(--lime)]">.</span>
            </Link>
            <p className="text-sm text-[var(--muted)] leading-relaxed max-w-xs">
              Independent graphic design studio. Bold work for brands that want to be remembered.
            </p>
          </div>

          <div>
            <p className="label text-[var(--muted)] mb-5">Pages</p>
            <div className="flex flex-col gap-3">
              {([["Work", "/work"], ["About", "/about"], ["Contact", "/contact"]] as const).map(([label, href]) => (
                <Link key={href} href={href} className="text-sm text-[var(--muted)] hover:text-[var(--lime)] ul-link self-start transition-colors duration-300">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="label text-[var(--muted)] mb-5">Connect</p>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@rwscreative.ca" className="text-sm text-[var(--muted)] hover:text-[var(--lime)] ul-link self-start transition-colors">
                hello@rwscreative.ca
              </a>
              {(["Instagram", "LinkedIn"] as const).map((s) => (
                <a key={s} href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                  className="text-sm text-[var(--muted)] hover:text-[var(--lime)] transition-colors inline-flex items-center gap-1">
                  {s} <ArrowUpRight size={11} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between gap-2">
          <p className="label text-[var(--muted)]">© {year} RWS Creative</p>
          <p className="label text-[var(--muted)]">rwscreative.ca</p>
        </div>
      </div>
    </footer>
  );
}
