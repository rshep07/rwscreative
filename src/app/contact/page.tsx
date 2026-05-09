import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with RWS Creative — hello@rwscreative.ca",
};

export default function ContactPage() {
  return (
    <div>
      {/* ── Header ── */}
      <div className="gutter pt-16 pb-16 border-b border-[var(--border)]">
        <span className="coral-tag mb-4 inline-flex">Contact</span>
        <h1 className="t-xl text-[var(--ink)]">
          Let's make<br />
          <span style={{ color: "var(--coral)" }}>something.</span>
        </h1>
      </div>

      {/* ── Body ── */}
      <div className="gutter py-16 md:py-20 grid grid-cols-1 md:grid-cols-[1fr_260px] gap-14 md:gap-20">
        <div>
          <p className="font-raleway font-light text-xl md:text-2xl text-[var(--ink)] leading-tight mb-10 tracking-[0.03em] uppercase">
            Tell us about your project — we'll be in touch within 48 hours.
          </p>
          <ContactForm />
        </div>

        <aside>
          {[
            {
              heading: "New Business",
              body: "We take on a small number of projects each year.",
              link: { label: "hello@rwscreative.ca", href: "mailto:hello@rwscreative.ca" },
            },
            { heading: "Based In", body: "Canada — available worldwide.", link: null },
            {
              heading: "Social",
              body: "Follow our process and latest work.",
              links: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "LinkedIn",  href: "https://linkedin.com" },
              ],
            },
          ].map((item) => (
            <div key={item.heading} className="py-7 border-b border-[var(--border)]">
              <p className="label text-[var(--muted)] mb-2">{item.heading}</p>
              <p className="text-xs text-[var(--muted)] leading-relaxed tracking-wide mb-2">{item.body}</p>
              {"link" in item && item.link && (
                <a href={item.link.href} className="text-sm text-[var(--ink)] hover:text-[var(--coral)] ul-link transition-colors duration-150">
                  {item.link.label}
                </a>
              )}
              {"links" in item && item.links && (
                <div className="flex flex-col gap-1">
                  {item.links.map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                      className="text-sm text-[var(--ink)] hover:text-[var(--coral)] transition-colors duration-150 inline-flex items-center gap-1">
                      {l.label} <ArrowUpRight size={10} />
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
