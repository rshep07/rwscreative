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
      <div className="bg-[var(--black)] text-[var(--white)] gutter pt-16 pb-20">
        <span className="chip-dark mb-4 inline-flex">Contact</span>
        <h1 className="d-xl text-[var(--white)] leading-[0.92]">
          Let's make<br />
          <span style={{ color: "var(--teal)" }}>something.</span>
        </h1>
      </div>

      <div className="gutter py-16 md:py-20 grid grid-cols-1 md:grid-cols-[1fr_280px] gap-14 md:gap-20">
        {/* Form */}
        <div>
          <p className="font-syne font-bold text-2xl md:text-3xl text-[var(--black)] leading-tight mb-10 max-w-lg tracking-tight">
            Tell us about your project — we'll be in touch within 48 hours.
          </p>
          <ContactForm />
        </div>

        {/* Info sidebar */}
        <aside>
          {[
            {
              heading: "New Business",
              body: "We take on a small number of projects each year to ensure every client gets full attention.",
              link: { label: "hello@rwscreative.ca", href: "mailto:hello@rwscreative.ca" },
            },
            {
              heading: "Based In",
              body: "Canada — available for projects worldwide.",
              link: null,
            },
            {
              heading: "Social",
              body: "Follow our work and process.",
              links: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "LinkedIn",  href: "https://linkedin.com" },
              ],
            },
          ].map((item) => (
            <div key={item.heading} className="py-8 border-b border-[var(--border)]">
              <p className="tag text-[var(--gray-mid)] mb-3">{item.heading}</p>
              <p className="text-sm text-[var(--gray-mid)] leading-relaxed mb-3">{item.body}</p>
              {"link" in item && item.link && (
                <a href={item.link.href}
                  className="text-sm text-[var(--black)] font-medium hover:text-[var(--teal)] ul-link transition-colors">
                  {item.link.label}
                </a>
              )}
              {"links" in item && item.links && (
                <div className="flex flex-col gap-1">
                  {item.links.map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                      className="text-sm text-[var(--black)] font-medium hover:text-[var(--teal)] transition-colors inline-flex items-center gap-1">
                      {l.label} <ArrowUpRight size={11} />
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
