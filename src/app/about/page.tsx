import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "About RWS Creative — independent graphic design studio.",
};

const SERVICES = [
  { n: "01", title: "Brand Identity",   desc: "Logo systems, visual identities, and brand guidelines built to endure." },
  { n: "02", title: "Editorial Design", desc: "Books, magazines, and print publications with typographic rigour." },
  { n: "03", title: "Packaging",        desc: "Structural and graphic packaging that commands shelf presence." },
  { n: "04", title: "Motion Graphics",  desc: "Animated brand elements, title sequences, generative identity systems." },
  { n: "05", title: "Web Design",       desc: "Design systems and interactive experiences for digital products." },
  { n: "06", title: "Photography",      desc: "Art-directed photography for editorial, brand, and campaign contexts." },
];

const AWARDS = [
  { title: "D&AD Packaging Design Pencil",          year: "2024" },
  { title: "Wallpaper* Design Award — Brand Identity", year: "2024" },
  { title: "Communication Arts Typography Annual",   year: "2023" },
  { title: "Core77 Design Award — Packaging",        year: "2023" },
];

export default function AboutPage() {
  return (
    <div className="nav-pt">
      {/* ── Page header ── */}
      <div className="gutter pt-14 pb-0 border-b border-[var(--border)]">
        <p className="label text-[var(--lime)] mb-4">About</p>
        <h1 className="headline text-[var(--ink)] pb-14 max-w-3xl">
          Bold work.<br />
          <span className="text-[var(--lime)] italic">Small list.</span>
        </h1>
      </div>

      {/* ── Intro ── */}
      <section className="gutter py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <div>
          <div className="flex items-center gap-3 mb-7">
            <span className="lime-dash" />
            <p className="label text-[var(--lime)]">The Studio</p>
          </div>
          <p className="font-['Cormorant_Garamond',Georgia,serif] text-2xl md:text-[1.85rem] font-light text-[var(--ink)] leading-[1.3] mb-6">
            RWS Creative is an independent graphic design studio based in Canada, working worldwide.
          </p>
          <div className="space-y-4 text-[var(--muted)] leading-relaxed">
            <p>
              We work with a small number of clients at any one time — enough to do exceptional work, not so many that we lose our edge. Our process is thorough, our opinions are strong, and we are rigorous about craft at every scale.
            </p>
            <p>
              We believe the best design is invisible in the best way. But we also believe beauty is a legitimate function, and we never apologise for it.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-0 border border-[var(--border)] self-start">
          {[
            { n: "10+", label: "Years" },
            { n: "80+", label: "Projects" },
            { n: "4",   label: "Awards" },
            { n: "3",   label: "Continents" },
          ].map(({ n, label }, i) => (
            <div key={label}
              className={`p-8 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b" : ""} border-[var(--border)]`}>
              <p className="font-['Cormorant_Garamond',Georgia,serif] text-5xl font-light text-[var(--lime)] mb-1">{n}</p>
              <p className="label text-[var(--muted)]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="gutter py-20">
          <div className="flex items-center gap-3 mb-12">
            <span className="lime-dash" />
            <p className="label text-[var(--lime)]">What We Do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {SERVICES.map((s) => (
              <div key={s.title} className="py-8 pr-8 border-b border-[var(--border)]">
                <p className="label text-[var(--lime)] mb-3">{s.n}</p>
                <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-2xl font-light text-[var(--ink)] mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recognition ── */}
      <section className="gutter py-20 border-t border-[var(--border)]">
        <div className="flex items-center gap-3 mb-10">
          <span className="lime-dash" />
          <p className="label text-[var(--lime)]">Recognition</p>
        </div>
        <div className="max-w-2xl">
          {AWARDS.map((a) => (
            <div key={a.title} className="flex justify-between items-start py-5 border-b border-[var(--border)] gap-6">
              <p className="text-[var(--ink)]">{a.title}</p>
              <p className="label text-[var(--muted)] flex-shrink-0">{a.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="gutter py-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <h2 className="headline text-[var(--ink)] max-w-xl">
            Ready to make something worth remembering?
          </h2>
          <div className="flex gap-3 flex-shrink-0">
            <Link href="/contact" className="btn-lime">Get in Touch <ArrowUpRight size={13} /></Link>
            <Link href="/work"    className="btn-outline">View Work</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
