import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--black)] text-[var(--white)]">
      <div className="gutter py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <Link href="/"
              className="font-syne font-extrabold text-2xl tracking-tight text-[var(--white)] hover:text-[var(--teal)] transition-colors duration-300 block mb-4">
              RWS<span className="text-[var(--teal)]">.</span>
            </Link>
            <p className="text-sm text-[var(--gray-mid)] leading-relaxed max-w-xs">
              Independent graphic design studio. Bold work for brands that want to be remembered.
            </p>
          </div>

          <div>
            <p className="tag text-[var(--gray-mid)] mb-5">Pages</p>
            <div className="flex flex-col gap-3">
              {([["Work", "/work"], ["About", "/about"], ["Contact", "/contact"]] as const).map(([label, href]) => (
                <Link key={href} href={href}
                  className="text-sm text-[var(--gray-mid)] hover:text-[var(--teal)] ul-link self-start transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="tag text-[var(--gray-mid)] mb-5">Connect</p>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@rwscreative.ca"
                className="text-sm text-[var(--gray-mid)] hover:text-[var(--teal)] ul-link self-start transition-colors">
                hello@rwscreative.ca
              </a>
              {["Instagram", "LinkedIn"].map((s) => (
                <a key={s} href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                  className="text-sm text-[var(--gray-mid)] hover:text-[var(--teal)] transition-colors inline-flex items-center gap-1">
                  {s} <ArrowUpRight size={11} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[var(--gray-dk)] flex flex-col sm:flex-row justify-between gap-2">
          <p className="tag text-[var(--gray-mid)]">© {year} RWS Creative</p>
          <p className="tag text-[var(--gray-mid)]">rwscreative.ca</p>
        </div>
      </div>
    </footer>
  );
}
