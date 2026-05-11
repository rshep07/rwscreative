import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "About", description: "About RWS Creative." };

const SERVICES = [
  ["01","Brand Identity","Marks, systems, and guidelines."],
  ["02","Editorial Design","Print, books, and publications."],
  ["03","Packaging","Structural and surface design."],
  ["04","Motion Graphics","Animation and moving image."],
  ["05","Web Design","Digital product and campaign."],
  ["06","Photography","Art direction and lens work."],
];

export default function AboutPage() {
  return (
    <div>
      <div className="gutter pt-14 pb-12 border-b border-[var(--rule)]">
        <p className="f-mono text-[var(--mid)] mb-3">About</p>
        <h1 className="f-title text-[var(--canvas)] max-w-3xl">
          Independent.<br />
          <span style={{ color: "var(--accent)" }}>Uncompromising.</span>
        </h1>
      </div>

      {/* Studio statement */}
      <div className="gutter py-14 border-b border-[var(--rule)] grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10">
        <div>
          <p className="f-mono text-[var(--accent)] mb-4">01 — Studio</p>
        </div>
        <div className="space-y-5">
          <p className="font-display text-xl md:text-2xl uppercase tracking-tight text-[var(--canvas)] leading-tight max-w-xl">
            RWS Creative is an independent graphic design practice working at the intersection of craft and commerce.
          </p>
          <p className="text-[var(--mid)] text-sm leading-relaxed max-w-lg">
            We work with a small number of clients at any one time — enough to do exceptional work, not so many that we lose our edge. Our process is thorough, our opinions are strong, and we are rigorous about craft at every scale.
          </p>
          <p className="text-[var(--mid)] text-sm leading-relaxed max-w-lg">
            We believe the best design is invisible in the best way. But we also believe that beauty is a legitimate and important function, and we never apologise for it.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="gutter py-0 border-b border-[var(--rule)] grid grid-cols-2 md:grid-cols-4">
        {[["10+","Years"],["80+","Projects"],["4","D&AD Pencils"],["3","Continents"]].map(([n,l],i) => (
          <div key={l} className={`py-10 pr-8 ${i < 3 ? "border-r border-[var(--rule)]" : ""}`}>
            <p className="font-display text-4xl md:text-5xl tracking-tight leading-none mb-2" style={{ color: "var(--accent)" }}>{n}</p>
            <p className="f-mono text-[var(--mid)]">{l}</p>
          </div>
        ))}
      </div>

      {/* Services */}
      <div className="gutter py-14 border-b border-[var(--rule)]">
        <div className="section-header mb-8">
          <span className="section-num">02</span>
          <span className="f-mono text-[var(--mid)]">Services</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {SERVICES.map(([num,title,desc],i) => (
            <div key={title}
              className={`flex items-start gap-5 py-6 border-b border-[var(--rule)] ${i % 2 === 0 ? "md:border-r md:pr-10" : "md:pl-10"}`}>
              <span className="f-mono text-[var(--accent)] flex-shrink-0">{num}</span>
              <div>
                <p className="font-display text-base uppercase tracking-tight text-[var(--canvas)] mb-1">{title}</p>
                <p className="f-mono text-[var(--mid)]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Awards */}
      <div className="gutter py-14 border-b border-[var(--rule)]">
        <div className="section-header mb-8">
          <span className="section-num">03</span>
          <span className="f-mono text-[var(--mid)]">Recognition</span>
        </div>
        <div className="max-w-2xl">
          {[
            ["D&AD Packaging Design Pencil","2024"],
            ["Wallpaper* Design Award — Brand Identity","2024"],
            ["Communication Arts Typography Annual","2023"],
            ["Core77 Design Award — Packaging","2023"],
          ].map(([title,year]) => (
            <div key={title} className="flex justify-between items-baseline py-4 border-b border-[var(--rule)] gap-6">
              <p className="text-sm text-[var(--canvas)]">{title}</p>
              <p className="f-mono text-[var(--mid)] flex-shrink-0">{year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="gutter py-16">
        <h2 className="f-title text-[var(--canvas)] mb-8 max-w-xl">
          Have something<br />worth making?
        </h2>
        <Link href="/contact" className="btn-primary">
          Get in Touch <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}
