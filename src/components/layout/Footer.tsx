import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="gutter py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 pb-10 border-b border-[var(--border)]">
          <div>
            <Link href="/" className="font-archivo text-2xl uppercase tracking-tight text-[var(--white)] hover:text-[var(--blue)] transition-colors duration-150 block mb-3">
              RWS<span className="text-[var(--blue)]">.</span>
            </Link>
            <p className="t-body text-[var(--gray)] text-sm max-w-xs">
              Independent graphic design studio. Bold work. High standards.
            </p>
          </div>

          <div>
            <p className="t-label text-[var(--gray)] mb-4">Pages</p>
            <div className="flex flex-col gap-2.5">
              {([["Work","/work"],["About","/about"],["Contact","/contact"]] as const).map(([l,h])=>(
                <Link key={h} href={h} className="t-label text-[var(--gray)] hover:text-[var(--blue)] ul-link self-start transition-colors duration-150">{l}</Link>
              ))}
            </div>
          </div>

          <div>
            <p className="t-label text-[var(--gray)] mb-4">Connect</p>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:hello@rwscreative.ca" className="t-label text-[var(--gray)] hover:text-[var(--blue)] ul-link self-start transition-colors">hello@rwscreative.ca</a>
              {["Instagram","LinkedIn"].map(s=>(
                <a key={s} href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                  className="t-label text-[var(--gray)] hover:text-[var(--blue)] transition-colors inline-flex items-center gap-1">
                  {s} <ArrowUpRight size={10} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <p className="t-label text-[var(--gray)]">© {year} RWS Creative</p>
          <p className="t-label text-[var(--gray)]">rwscreative.ca</p>
        </div>
      </div>
    </footer>
  );
}
