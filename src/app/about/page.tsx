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
  { title: "D&AD Packaging Design Pencil",             year: "2024" },
  { title: "Wallpaper* Design Award — Brand Identity", year: "2024" },
  { title: "Communication Arts Typography Annual",     year: "2023" },
  { title: "Core77 Design Award — Packaging",          year: "2023" },
];

export default function AboutPage() {
  return (
    <div>
      {/* ── Header ── */}
      <div className="gutter pt-16 pb-20 border-b border-[var(--border)] relative overflow-hidden">
        {/* Decorative off-axis number — intentionally broken */}
        <span className="absolute -right-8 top-0 font-raleway font-extralight text-[20rem] leading-none select-none pointer-events-none"
          style={{ color: "transparent", WebkitTextStroke: "1px var(--faint)", zIndex: 0 }}>
          RWS
        </span>
        <div className="relative z-10">
          <span className="coral-tag mb-4 inline-flex">About</span>
          <h1 className="t-xl text-[var(--ink)] max-w-2xl mb-6">
            Bold work.<br />
            <span style={{ color: "var(--coral)" }}>Small list.</span>
          </h1>
          <p className="text-[var(--muted)] max-w-lg text-sm leading-relaxed tracking-wide">
            RWS Creative is an independent graphic design practice based in Canada, working worldwide.
          </p>
        </div>
      </div>

      {/* ── Story + stats ── */}
      <section className="gutter py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <div>
          <div className="flex items-center gap-3 mb-7">
            <span className="coral-rule" />
            <p className="label" style={{ color: "var(--coral)" }}>The Studio</p>
          </div>
          <div className="space-y-4 text-[var(--muted)] text-sm leading-relaxed tracking-wide">
            <p>We work with a small number of clients at any one time — enough to do exceptional work, not so many that we lose our edge.</p>
            <p>Our process is thorough, our opinions are strong, and we are rigorous about craft at every scale.</p>
            <p>We believe the best design is invisible in the best way. But we also believe beauty is a legitimate function, and we never apologise for it.</p>
          </div>
        </div>

        {/* Stats — gap-px creates hairline borders */}
        <div className="grid grid-cols-2 gap-px bg-[var(--border)] self-start">
          {[
            { n: "10+", label: "Years" },
            { n: "80+", label: "Projects" },
            { n: "4",   label: "Awards" },
            { n: "3",   label: "Continents" },
          ].map(({ n, label }) => (
            <div key={label} className="bg-[var(--bg)] p-8">
              <p className="font-raleway font-extralight text-5xl tracking-[0.04em] leading-none mb-2" style={{ color: "var(--coral)" }}>{n}</p>
              <p className="label text-[var(--muted)]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ── raised surface */}
      <section className="bg-[var(--surface)] border-y border-[var(--border)]">
        <div className="gutter py-20">
          <div className="flex items-center gap-3 mb-12">
            <span className="coral-rule" />
            <p className="label" style={{ color: "var(--coral)" }}>What We Do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {SERVICES.map((s) => (
              <div key={s.title} className="py-8 pr-10 border-b border-[var(--border)]">
                <p className="label mb-3" style={{ color: "var(--coral)" }}>{s.n}</p>
                <h3 className="t-sm text-[var(--ink)] mb-3">{s.title}</h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed tracking-wide">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recognition ── */}
      <section className="gutter py-20">
        <div className="flex items-center gap-3 mb-10">
          <span className="coral-rule" />
          <p className="label" style={{ color: "var(--coral)" }}>Recognition</p>
        </div>
        <div className="max-w-2xl">
          {AWARDS.map((a) => (
            <div key={a.title} className="flex justify-between items-start py-5 border-b border-[var(--border)] gap-6">
              <p className="text-sm text-[var(--ink)] tracking-wide">{a.title}</p>
              <p className="label text-[var(--muted)] flex-shrink-0">{a.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "var(--coral)" }}>
        <div className="gutter py-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <h2 className="t-lg text-white">Ready to make something<br />worth remembering?</h2>
          <div className="flex gap-3">
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--bg)] text-[var(--ink)] px-6 py-3 label hover:bg-white hover:text-black transition-colors duration-150">
              Get in Touch <ArrowUpRight size={13} />
            </Link>
            <Link href="/work"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 label hover:border-white transition-colors duration-150">
              View Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
