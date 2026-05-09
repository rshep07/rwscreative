import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = { title: "About", description: "About RWS Creative." };

const SERVICES = [
  ["01","Brand Identity","Logo systems, visual identities, and brand guidelines built to endure."],
  ["02","Editorial Design","Books, magazines, and print publications with typographic rigour."],
  ["03","Packaging","Structural and graphic packaging that commands shelf presence."],
  ["04","Motion Graphics","Animated brand elements, title sequences, generative identity systems."],
  ["05","Web Design","Design systems and interactive experiences for digital products."],
  ["06","Photography","Art-directed photography for editorial, brand, and campaign contexts."],
];

const AWARDS = [
  ["D&AD Packaging Design Pencil","2024"],
  ["Wallpaper* Design Award — Brand Identity","2024"],
  ["Communication Arts Typography Annual","2023"],
  ["Core77 Design Award — Packaging","2023"],
];

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <div className="gutter pt-14 pb-16 border-b border-[var(--border)]">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-[2px]" style={{ background: "var(--blue)" }} />
          <p className="t-label" style={{ color: "var(--blue)" }}>About</p>
        </div>
        <h1 className="t-heading text-[var(--white)] max-w-2xl">
          Bold work.<br /><span style={{ color: "var(--blue)" }}>Small list.</span>
        </h1>
      </div>

      {/* Story + stats */}
      <section className="gutter py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-[2px]" style={{ background: "var(--blue)" }} />
            <p className="t-label" style={{ color: "var(--blue)" }}>The Studio</p>
          </div>
          <div className="space-y-4 t-body text-[var(--gray)]">
            <p>We work with a small number of clients at any one time — enough to do exceptional work, not so many that we lose our edge.</p>
            <p>Our process is thorough, our opinions are strong, and we are rigorous about craft at every scale.</p>
            <p>We believe the best design is invisible in the best way. But beauty is a legitimate function, and we never apologise for it.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-px" style={{ background: "var(--border)" }}>
          {[["10+","Years"],["80+","Projects"],["4","Awards"],["3","Continents"]].map(([n,l])=>(
            <div key={l} className="p-8" style={{ background: "var(--black)" }}>
              <p className="font-archivo text-5xl leading-none mb-2" style={{ color: "var(--blue)" }}>{n}</p>
              <p className="t-label text-[var(--gray)]">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-[var(--border)]" style={{ background: "var(--dim)" }}>
        <div className="gutter py-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-6 h-[2px]" style={{ background: "var(--blue)" }} />
            <p className="t-label" style={{ color: "var(--blue)" }}>What We Do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {SERVICES.map(([n,title,desc])=>(
              <div key={title} className="py-8 pr-10 border-b border-[var(--border)]">
                <p className="t-label mb-3" style={{ color: "var(--blue)" }}>{n}</p>
                <h3 className="font-archivo text-xl uppercase tracking-tight text-[var(--white)] mb-3">{title}</h3>
                <p className="text-sm text-[var(--gray)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="gutter py-20">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-6 h-[2px]" style={{ background: "var(--blue)" }} />
          <p className="t-label" style={{ color: "var(--blue)" }}>Recognition</p>
        </div>
        <div className="max-w-2xl">
          {AWARDS.map(([title,year])=>(
            <div key={title} className="flex justify-between items-start py-5 border-b border-[var(--border)] gap-6">
              <p className="text-[var(--white)] font-medium">{title}</p>
              <p className="t-label text-[var(--gray)] flex-shrink-0">{year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--blue)" }}>
        <div className="gutter py-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <h2 className="t-heading leading-none" style={{ color: "var(--black)" }}>Ready to make<br/>something great?</h2>
          <div className="flex gap-3">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 font-archivo text-sm uppercase tracking-tight"
              style={{ background: "var(--black)", color: "var(--white)" }}>
              Get in Touch <ArrowUpRight size={13} />
            </Link>
            <Link href="/work" className="btn-outline-dark">View Work</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
