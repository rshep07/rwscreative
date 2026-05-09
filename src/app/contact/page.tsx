import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = { title: "Contact", description: "Get in touch — hello@rwscreative.ca" };

export default function ContactPage() {
  return (
    <div>
      <div className="gutter pt-14 pb-14 border-b border-[var(--border)]">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-[2px]" style={{ background: "var(--blue)" }} />
          <p className="t-label" style={{ color: "var(--blue)" }}>Contact</p>
        </div>
        <h1 className="t-heading text-[var(--white)]">
          Let's make<br/><span style={{ color: "var(--blue)" }}>something.</span>
        </h1>
      </div>

      <div className="gutter py-16 md:py-20 grid grid-cols-1 md:grid-cols-[1fr_260px] gap-14 md:gap-20">
        <div>
          <p className="font-archivo text-xl md:text-2xl uppercase tracking-tight text-[var(--white)] leading-tight mb-10 max-w-lg">
            Tell us about your project — we'll reply within 48 hours.
          </p>
          <ContactForm />
        </div>

        <aside>
          {[
            { h: "New Business", b: "We take on a small number of projects each year.", link: { l: "hello@rwscreative.ca", href: "mailto:hello@rwscreative.ca" } },
            { h: "Based In", b: "Canada — available for projects worldwide.", link: null },
            { h: "Social", b: "Follow our work and process.", links: [{ l: "Instagram", href: "https://instagram.com" }, { l: "LinkedIn", href: "https://linkedin.com" }] },
          ].map((item) => (
            <div key={item.h} className="py-7 border-b border-[var(--border)]">
              <p className="t-label text-[var(--gray)] mb-2">{item.h}</p>
              <p className="text-sm text-[var(--gray)] mb-2 leading-relaxed">{item.b}</p>
              {"link" in item && item.link && (
                <a href={item.link.href} className="text-sm text-[var(--white)] hover:text-[var(--blue)] ul-link transition-colors duration-150">{item.link.l}</a>
              )}
              {"links" in item && item.links && (
                <div className="flex flex-col gap-1">
                  {item.links.map(l=>(
                    <a key={l.l} href={l.href} target="_blank" rel="noopener noreferrer"
                      className="text-sm text-[var(--white)] hover:text-[var(--blue)] transition-colors duration-150 inline-flex items-center gap-1">
                      {l.l} <ArrowUpRight size={10} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}
