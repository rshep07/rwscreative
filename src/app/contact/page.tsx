import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = { title: "Contact", description: "Get in touch — hello@rwscreative.ca" };

export default function ContactPage() {
  return (
    <div>
      <div className="gutter pt-14 pb-12 border-b border-[var(--rule)]">
        <p className="f-mono text-[var(--mid)] mb-3">Contact</p>
        <h1 className="f-title text-[var(--canvas)]">
          Let's make<br />
          <span style={{ color: "var(--accent)" }}>something.</span>
        </h1>
      </div>

      <div className="gutter py-14 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-14 md:gap-20">
        <div>
          <p className="font-display text-base md:text-lg uppercase tracking-tight text-[var(--canvas)] leading-tight mb-10 max-w-lg">
            We take on a small number of projects each year. Tell us what you're working on.
          </p>
          <ContactForm />
        </div>

        <div className="space-y-0">
          {[
            { h:"New Business", v:"hello@rwscreative.ca", href:"mailto:hello@rwscreative.ca" },
            { h:"Based",        v:"Canada",               href: null },
            { h:"Instagram",    v:"@rwscreative",         href:"https://instagram.com" },
            { h:"LinkedIn",     v:"RWS Creative",         href:"https://linkedin.com" },
          ].map(item => (
            <div key={item.h} className="py-5 border-b border-[var(--rule)]">
              <p className="f-mono text-[var(--mid)] mb-1.5">{item.h}</p>
              {item.href ? (
                <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--canvas)] hover:text-[var(--accent)] transition-colors duration-150">
                  {item.v}
                </a>
              ) : (
                <p className="text-sm text-[var(--canvas)]">{item.v}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
