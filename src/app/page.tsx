import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects, getFeatured } from "@/data/projects";

const CAPABILITIES = [
  ["01", "Brand Identity",   "Marks, systems, and guidelines."],
  ["02", "Editorial Design", "Print, books, and publications."],
  ["03", "Packaging",        "Structural and surface design."],
  ["04", "Motion Graphics",  "Animation and moving image."],
  ["05", "Web Design",       "Digital product and campaign."],
  ["06", "Photography",      "Art direction and lens work."],
];

const CLIENTS = ["Luminary Wellness", "Offcut Publishing", "Forma Home", "Northlight Architecture", "Sol Music", "Monocle Magazine"];

export default function HomePage() {
  const featured = getFeatured();
  const collage  = projects.slice(0, 5);

  return (
    <div>

      {/* ══════════════════════════════════════════════
          HERO — magazine masthead
      ══════════════════════════════════════════════ */}
      <section className="gutter pt-20 pb-0 min-h-[92svh] flex flex-col justify-between">

        {/* Top strip */}
        <div className="flex items-center justify-between mb-8">
          <p className="f-mono text-[var(--mid)]">Graphic Design Studio — Canada</p>
          <p className="f-mono text-[var(--mid)] hidden md:block">Est. 2015 — rwscreative.ca</p>
        </div>

        {/* Masthead */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="f-display text-[var(--canvas)]">RWS</h1>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1 className="f-display" style={{ color: "var(--accent)" }}>CREATIVE.</h1>
            {/* Positioning statement — bottom-right of title */}
            <p className="f-mono text-[var(--mid)] max-w-[260px] leading-relaxed md:pb-3 md:text-right">
              Bold, highly curated design work<br />
              for brands that demand more<br />
              than a generic template.
            </p>
          </div>
        </div>

        {/* Bottom divider + scroll cue */}
        <div className="flex items-center justify-between pt-10 pb-6 border-t border-[var(--rule)]">
          <p className="f-mono text-[var(--mid)]">↓ Selected Work</p>
          <p className="f-mono text-[var(--mid)]">
            {projects.length.toString().padStart(2, "0")} Projects
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          01 — WORK COLLAGE (asymmetric editorial grid)
      ══════════════════════════════════════════════ */}
      <section className="gutter py-0">
        <div className="flex items-center justify-between py-5 border-b border-[var(--rule)]">
          <div className="section-header">
            <span className="section-num">01</span>
            <span className="f-mono text-[var(--mid)]">Selected Work</span>
          </div>
          <Link href="/work" className="f-mono text-[var(--mid)] hover:text-[var(--accent)] transition-colors duration-150 flex items-center gap-1">
            View All <ArrowUpRight size={10} />
          </Link>
        </div>

        {/* Asymmetric collage grid */}
        <div className="grid gap-[2px] pt-[2px]"
          style={{ gridTemplateColumns: "2fr 1fr", gridTemplateRows: "auto" }}>

          {/* Left — large landscape (spans 2 rows) */}
          <Link href={`/work/${collage[0]?.slug}`}
            className="img-wrap relative group"
            style={{ gridRow: "1 / 3", aspectRatio: "3/2" }}>
            {collage[0] && (
              <>
                <Image src={collage[0].thumbnailImage} alt={collage[0].title} fill
                  className="object-cover" sizes="60vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <p className="tag mb-2 inline-flex">{collage[0].category}</p>
                  <p className="f-subhead text-[var(--canvas)] group-hover:text-[var(--accent)] transition-colors duration-150">
                    {collage[0].title}
                  </p>
                </div>
              </>
            )}
          </Link>

          {/* Top-right — portrait */}
          <Link href={`/work/${collage[1]?.slug}`}
            className="img-wrap relative group aspect-[4/3]">
            {collage[1] && (
              <>
                <Image src={collage[1].thumbnailImage} alt={collage[1].title} fill
                  className="object-cover" sizes="40vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="tag mb-1.5 inline-flex">{collage[1].category}</p>
                  <p className="f-mono text-[var(--canvas)] group-hover:text-[var(--accent)] transition-colors">{collage[1].title}</p>
                </div>
              </>
            )}
          </Link>

          {/* Bottom-right — square */}
          <Link href={`/work/${collage[2]?.slug}`}
            className="img-wrap relative group aspect-square">
            {collage[2] && (
              <>
                <Image src={collage[2].thumbnailImage} alt={collage[2].title} fill
                  className="object-cover" sizes="40vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="f-mono text-[var(--canvas)] group-hover:text-[var(--accent)] transition-colors">{collage[2].title}</p>
                </div>
              </>
            )}
          </Link>
        </div>

        {/* Bottom row — 3 equal images */}
        <div className="grid grid-cols-3 gap-[2px] mt-[2px]">
          {collage.slice(3, 6).map((p) => (
            <Link key={p.id} href={`/work/${p.slug}`}
              className="img-wrap relative group aspect-video">
              <Image src={p.thumbnailImage} alt={p.title} fill className="object-cover" sizes="33vw" />
              <div className="absolute inset-0 bg-[var(--ink)]/0 group-hover:bg-[var(--ink)]/40 transition-colors duration-200 flex items-end p-3">
                <p className="f-mono text-[var(--canvas)] opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  {p.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          02 — FEATURED PROJECTS (editorial layout)
      ══════════════════════════════════════════════ */}
      <section className="gutter mt-16">
        <div className="section-header py-5 border-b border-[var(--rule)] mb-0">
          <span className="section-num">02</span>
          <span className="f-mono text-[var(--mid)]">Featured Projects</span>
        </div>

        {featured.map((project, i) => (
          <article key={project.id}
            className={`grid gap-0 border-b border-[var(--rule)] ${i % 2 === 0 ? "grid-cols-1 md:grid-cols-[1fr_2fr]" : "grid-cols-1 md:grid-cols-[2fr_1fr]"}`}>

            {/* Index + Meta — left or right depending on row */}
            <div className={`p-8 md:p-10 flex flex-col justify-between border-[var(--rule)] ${i % 2 === 0 ? "md:border-r" : "md:order-2 md:border-l"}`}>
              <div>
                <p className="f-mono text-[var(--accent)] mb-6">{String(i + 1).padStart(2, "0")}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 3).map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <h3 className="f-headline text-[var(--canvas)] mb-4">{project.title}</h3>
                <p className="text-[var(--mid)] text-sm leading-relaxed max-w-xs">{project.shortDescription}</p>
              </div>
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-[var(--rule)]">
                <div>
                  <p className="f-mono text-[var(--mid)]">{project.client}</p>
                  <p className="f-mono text-[var(--mid)]">{project.year}</p>
                </div>
                <Link href={`/work/${project.slug}`}
                  className="f-mono text-[var(--canvas)] hover:text-[var(--accent)] transition-colors duration-150 flex items-center gap-1">
                  View <ArrowRight size={10} />
                </Link>
              </div>
            </div>

            {/* Image */}
            <Link href={`/work/${project.slug}`}
              className={`img-wrap relative group aspect-[4/3] md:aspect-auto min-h-64 ${i % 2 !== 0 ? "md:order-1" : ""}`}>
              <Image src={project.thumbnailImage} alt={project.title}
                fill className="object-cover" sizes="(max-width:768px) 100vw, 66vw" />
            </Link>
          </article>
        ))}
      </section>

      {/* ══════════════════════════════════════════════
          03 — CAPABILITIES
      ══════════════════════════════════════════════ */}
      <section className="gutter mt-16 mb-0">
        <div className="section-header py-5 border-b border-[var(--rule)] mb-0">
          <span className="section-num">03</span>
          <span className="f-mono text-[var(--mid)]">Capabilities</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {CAPABILITIES.map(([num, title, desc], i) => (
            <div key={title}
              className={`flex items-start gap-5 py-6 border-b border-[var(--rule)] ${i % 2 === 0 ? "md:border-r md:pr-10" : "md:pl-10"}`}>
              <span className="f-mono text-[var(--accent)] flex-shrink-0 pt-0.5">{num}</span>
              <div>
                <p className="font-display text-base uppercase tracking-tight text-[var(--canvas)] mb-1">{title}</p>
                <p className="f-mono text-[var(--mid)]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          04 — CLIENT STRIP
      ══════════════════════════════════════════════ */}
      <section className="gutter mt-0 py-10 border-b border-[var(--rule)] overflow-hidden">
        <div className="section-header mb-6">
          <span className="section-num">04</span>
          <span className="f-mono text-[var(--mid)]">Selected Clients</span>
        </div>
        <div className="flex whitespace-nowrap" style={{ animation: "marquee 30s linear infinite" }}>
          {[...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS].map((c, i) => (
            <span key={i} className="inline-flex items-center gap-8 pr-8">
              <span className="font-display text-2xl md:text-4xl uppercase tracking-tight text-[var(--canvas)]">{c}</span>
              <span className="text-[var(--rule)] text-xl select-none">—</span>
            </span>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          05 — CONTACT CTA
      ══════════════════════════════════════════════ */}
      <section className="gutter py-20 md:py-28">
        <div className="section-header mb-10">
          <span className="section-num">05</span>
          <span className="f-mono text-[var(--mid)]">Contact</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
          <h2 className="f-title text-[var(--canvas)]">
            Let's work<br />
            <span style={{ color: "var(--accent)" }}>together.</span>
          </h2>
          <div>
            <p className="text-[var(--mid)] text-sm leading-relaxed mb-8 max-w-sm">
              We take on a small number of projects each year to ensure every client gets full attention. If you have something worth making, we'd like to hear about it.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Start a Project <ArrowRight size={12} />
              </Link>
              <a href="mailto:hello@rwscreative.ca" className="btn-outline">
                hello@rwscreative.ca
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
