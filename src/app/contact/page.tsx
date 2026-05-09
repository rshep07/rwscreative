import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with RWS Creative — hello@rwscreative.ca",
};

const INFO = [
  {
    heading: "New Projects",
    body: "We take on a small number of projects each year to ensure every client gets our full attention.",
    cta: { label: "hello@rwscreative.ca", href: "mailto:hello@rwscreative.ca" },
  },
  {
    heading: "Based In",
    body: "Canada — available for projects worldwide, with experience working across North America and Europe.",
    cta: null,
  },
  {
    heading: "Social",
    body: "Follow our process and latest work on Instagram and LinkedIn.",
    links: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "LinkedIn",  href: "https://linkedin.com" },
    ],
  },
];

export default function ContactPage() {
  return (
    <div>
      {/* ── Header ── */}
      <div className="gutter pt-14 pb-16 border-b border-[var(--color-border)]">
        <p className="eyebrow c-accent mb-3">Contact</p>
        <h1 className="h-xl c-ink max-w-2xl">
          Let's make something.
        </h1>
      </div>

      {/* ── Main grid ── */}
      <div className="gutter py-16 md:py-24 grid grid-cols-1 md:grid-cols-[1fr_380px] gap-14 md:gap-20">
        {/* Form */}
        <div>
          <p className="font-display text-2xl md:text-3xl font-light c-ink leading-[1.3] mb-10 max-w-lg">
            Tell us about your project and we'll be in touch within 48 hours.
          </p>
          <ContactForm />
        </div>

        {/* Info */}
        <aside className="space-y-10 md:pt-2">
          {INFO.map((item) => (
            <div key={item.heading} className="pt-8 border-t border-[var(--color-border)] first:pt-0 first:border-0">
              <p className="eyebrow c-faint text-[0.58rem] mb-3">{item.heading}</p>
              <p className="text-sm c-muted leading-relaxed mb-3">{item.body}</p>
              {item.cta && (
                <a
                  href={item.cta.href}
                  className="text-sm c-ink hover:c-accent link-line transition-colors duration-300"
                >
                  {item.cta.label}
                </a>
              )}
              {item.links && (
                <div className="flex flex-col gap-1">
                  {item.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm c-ink hover:c-accent transition-colors duration-300 inline-flex items-center gap-1"
                    >
                      {link.label} <ArrowUpRight size={11} />
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
