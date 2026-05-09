import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with RWS Creative — hello@rwscreative.ca",
};

export default function ContactPage() {
  return (
    <div className="nav-pt">
      <div className="gutter pt-14 pb-12 border-b border-[var(--border)]">
        <p className="label text-[var(--lime)] mb-4">Contact</p>
        <h1 className="headline text-[var(--ink)]">
          Let's make<br />
          <span className="text-[var(--lime)] italic">something.</span>
        </h1>
      </div>

      <div className="gutter py-16 md:py-24 grid grid-cols-1 md:grid-cols-[1fr_320px] gap-14 md:gap-20">
        {/* Form */}
        <div>
          <p className="font-['Cormorant_Garamond',Georgia,serif] text-2xl md:text-3xl font-light text-[var(--ink)] leading-[1.3] mb-10 max-w-lg">
            Tell us about your project and we'll be in touch within 48 hours.
          </p>
          <ContactForm />
        </div>

        {/* Info */}
        <aside className="space-y-0">
          {[
            {
              heading: "New Business",
              content: (
                <a href="mailto:hello@rwscreative.ca"
                  className="text-sm text-[var(--ink)] hover:text-[var(--lime)] ul-link transition-colors">
                  hello@rwscreative.ca
                </a>
              ),
              note: "We take on a small number of projects each year."
            },
            {
              heading: "Based In",
              content: <p className="text-sm text-[var(--ink)]">Canada</p>,
              note: "Available for projects worldwide."
            },
            {
              heading: "Social",
              content: (
                <div className="flex flex-col gap-1">
                  {[["Instagram", "https://instagram.com"], ["LinkedIn", "https://linkedin.com"]].map(([label, href]) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      className="text-sm text-[var(--ink)] hover:text-[var(--lime)] transition-colors inline-flex items-center gap-1">
                      {label} <ArrowUpRight size={11} />
                    </a>
                  ))}
                </div>
              ),
              note: ""
            }
          ].map((item) => (
            <div key={item.heading} className="py-8 border-b border-[var(--border)]">
              <p className="label text-[var(--muted)] mb-3">{item.heading}</p>
              {item.content}
              {item.note && <p className="text-xs text-[var(--muted)] mt-2 leading-relaxed">{item.note}</p>}
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}
