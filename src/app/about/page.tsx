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
  { title: "D&AD Packaging Design Pencil",           year: "2024" },
  { title: "Wallpaper* Design Award — Brand Identity", year: "2024" },
  { title: "Communication Arts Typography Annual",    year: "2023" },
  { title: "Core77 Design Award — Packaging",         year: "2023" },
];

export default function AboutPage() {
  return (
    <div>
      {/* ── Dark header ── */}
      <div className="bg-[var(--black)] text-[var(--white)] gutter pt-16 pb-20">
        <span className="chip-dark mb-4 inline-flex">About</span>
        <h1 className="d-xl text-[var(--white)] max-w-3xl leading-[0.92] mb-8">
          Bold work.<br />
          <span style={{ color: "var(--teal)" }}>Small list.</span>
        </h1>
        <p className="text-[var(--gray-mid)] max-w-xl leading-relaxed text-lg">
          RWS Creative is an independent graphic design practice based in Canada, working worldwide.
        </p>
      </div>

      {/* ── Story + stats ── */}
      <section className="gutter py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <div>
          <div className="flex items-center gap-3 mb-7">
            <span className="teal-rule" />
            <p className="tag" style={{ color: "var(--teal)" }}>The Studio</p>
          </div>
          <div className="space-y-5 text-[var(--gray-mid)] leading-relaxed">
            <p>We work with a small number of clients at any one time — enough to do exceptional work, not so many that we lose our edge.</p>
            <p>Our process is thorough, our opinions are strong, and we are rigorous about craft at every scale.</p>
            <p>We believe the best design is invisible in the best way. But we also believe beauty is a legitimate function, and we never apologise for it.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 border border-[var(--border)] self-start">
          {[
            { n: "10+", label: "Years" },
            { n: "80+", label: "Projects" },
            { n: "4",   label: "Awards" },
            { n: "3",   label: "Continents" },
          ].map(({ n, label }, i) => (
            <div key={label}
              className={`p-8 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b" : ""} border-[var(--border)]`}>
              <p className="font-syne font-extrabold text-5xl leading-none mb-2" style={{ color: "var(--teal)" }}>{n}</p>
              <p className="tag text-[var(--gray-mid)]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ── gray bg */}
      <section className="bg-[var(--gray-bg)] border-y border-[var(--border)]">
        <div className="gutter py-20">
          <div className="flex items-center gap-3 mb-12">
            <span className="teal-rule" />
            <p className="tag" style={{ color: "var(--teal)" }}>What We Do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {SERVICES.map((s) => (
              <div key={s.title} className="py-8 pr-10 border-b border-[var(--border)]">
                <p className="tag mb-3" style={{ color: "var(--teal)" }}>{s.n}</p>
                <h3 className="font-syne font-bold text-xl text-[var(--black)] mb-3 tracking-tight">{s.title}</h3>
                <p className="text-sm text-[var(--gray-mid)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recognition ── */}
      <section className="gutter py-20">
        <div className="flex items-center gap-3 mb-10">
          <span className="teal-rule" />
          <p className="tag" style={{ color: "var(--teal)" }}>Recognition</p>
        </div>
        <div className="max-w-2xl">
          {AWARDS.map((a) => (
            <div key={a.title}
              className="flex justify-between items-start py-5 border-b border-[var(--border)] gap-6">
              <p className="text-[var(--black)] font-medium">{a.title}</p>
              <p className="tag text-[var(--gray-mid)] flex-shrink-0">{a.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── teal */}
      <section style={{ background: "var(--teal)" }}>
        <div className="gutter py-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <h2 className="d-lg text-white leading-tight">
            Ready to make something<br />worth remembering?
          </h2>
          <div className="flex gap-3">
            <Link href="/contact" className="btn-black">Get in Touch <ArrowUpRight size={13} /></Link>
            <Link href="/work" className="btn-white">View Work</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
