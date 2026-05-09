import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { MarqueeBar } from "@/components/sections/MarqueeBar";

export default function HomePage() {
  // Show first 4 projects in the above-fold grid
  const sorted   = [...projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  const gridProjects = sorted.slice(0, 4);
  const remaining    = sorted.slice(4);

  return (
    <>
      {/* ═══════════════════════════════════════════════
          ABOVE THE FOLD — split layout, no scroll needed
      ═══════════════════════════════════════════════ */}
      <section
        className="flex flex-col md:flex-row"
        style={{ height: "100svh", minHeight: "600px" }}
      >
        {/* ── LEFT: Studio identity ── */}
        <div
          className="flex flex-col justify-between p-8 md:p-12 lg:p-16 flex-shrink-0"
          style={{
            width: "100%",
            background: "var(--black)",
            borderRight: "2px solid var(--blue)",
          }}
        >
          {/* Mobile: compact, Desktop: full-height flex column */}
          <style>{`
            @media (min-width: 768px) {
              #hero-left { width: 42%; height: 100%; }
            }
          `}</style>

          {/* Top — eyebrow */}
          <div className="flex items-center gap-3">
            <div className="w-5 h-[2px]" style={{ background: "var(--blue)" }} />
            <p className="t-label" style={{ color: "var(--blue)" }}>
              Design Studio — Canada
            </p>
          </div>

          {/* Middle — big type */}
          <div>
            <h1
              className="font-archivo text-[var(--white)] leading-[0.87] select-none"
              style={{ fontSize: "clamp(3.5rem, 8vw, 9rem)", letterSpacing: "-0.025em" }}
            >
              RWS
            </h1>
            <h1
              className="font-archivo leading-[0.87] select-none"
              style={{
                fontSize: "clamp(3.5rem, 8vw, 9rem)",
                letterSpacing: "-0.025em",
                color: "var(--blue)",
              }}
            >
              CREATIVE.
            </h1>
          </div>

          {/* Bottom — descriptor + CTAs */}
          <div>
            <p className="t-label text-[var(--gray)] mb-6 leading-relaxed">
              Brand Identity · Editorial<br />
              Packaging · Motion · Web
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/work" className="btn-blue">
                All Work <ArrowRight size={13} />
              </Link>
              <Link href="/contact" className="btn-outline">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* ── RIGHT: 2×2 project preview grid ── */}
        <div
          id="hero-right"
          className="flex-1 grid grid-cols-2 grid-rows-2"
          style={{ gap: "2px", background: "var(--border)" }}
        >
          {gridProjects.map((project, i) => (
            <Link
              key={project.id}
              href={`/work/${project.slug}`}
              className="group relative overflow-hidden"
              style={{ background: "var(--dim)" }}
            >
              <Image
                src={project.thumbnailImage}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 50vw, 30vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                priority={i < 4}
                unoptimized
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 55%)" }}
              />
              {/* Blue tint on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: "rgba(0,191,255,0.08)" }}
              />
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <span className="blue-tag mb-2 inline-flex">{project.category}</span>
                <p
                  className="font-archivo text-white uppercase leading-none transition-colors duration-150 group-hover:text-[var(--blue)]"
                  style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.1rem)", letterSpacing: "-0.01em" }}
                >
                  {project.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <MarqueeBar />

      {/* ── Remaining projects (if more than 4) ── */}
      {remaining.length > 0 && (
        <section>
          <div className="gutter pt-14 pb-8 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-5 h-[2px]" style={{ background: "var(--blue)" }} />
                <p className="t-label" style={{ color: "var(--blue)" }}>More Work</p>
              </div>
              <h2
                className="font-archivo text-[var(--white)] uppercase leading-none"
                style={{ fontSize: "clamp(2rem, 5vw, 5rem)", letterSpacing: "-0.02em" }}
              >
                More Projects
              </h2>
            </div>
            <Link href="/work" className="btn-outline hidden md:inline-flex mb-1">
              View All <ArrowUpRight size={13} />
            </Link>
          </div>
          <div className="gutter pb-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {remaining.map((p, i) => (
              <Link key={p.id} href={`/work/${p.slug}`} className="group block relative overflow-hidden aspect-[4/3] bg-[var(--dim)]">
                <Image src={p.thumbnailImage} alt={p.title} fill sizes="50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.04]" unoptimized />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 55%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <span className="blue-tag mb-2 inline-flex">{p.category}</span>
                  <p className="font-archivo text-white uppercase leading-none group-hover:text-[var(--blue)] transition-colors duration-150"
                    style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", letterSpacing: "-0.01em" }}>
                    {p.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── About strip ── */}
      <section className="border-t border-[var(--border)]" style={{ background: "var(--dim)" }}>
        <div className="gutter py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-[2px]" style={{ background: "var(--blue)" }} />
              <p className="t-label" style={{ color: "var(--blue)" }}>About</p>
            </div>
            <h2 className="font-archivo text-[var(--white)] uppercase leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)", letterSpacing: "-0.02em" }}>
              Design that earns its place.
            </h2>
            <p className="t-body text-[var(--gray)] mb-7 max-w-md">
              RWS Creative is an independent graphic design practice. Small client list. Full attention. High standards.
            </p>
            <Link href="/about" className="btn-outline">Our Story <ArrowUpRight size={13} /></Link>
          </div>
          <div className="grid grid-cols-2 gap-px" style={{ background: "var(--border)" }}>
            {[["10+","Years"],["80+","Projects"],["4","D&AD Pencils"],["3","Continents"]].map(([n,l]) => (
              <div key={l} className="p-8" style={{ background: "var(--black)" }}>
                <p className="font-archivo text-5xl leading-none mb-2" style={{ color: "var(--blue)" }}>{n}</p>
                <p className="t-label text-[var(--gray)]">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "var(--blue)" }}>
        <div className="gutter py-16 md:py-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <h2 className="font-archivo uppercase leading-none"
            style={{ fontSize: "clamp(2rem, 5vw, 5.5rem)", letterSpacing: "-0.02em", color: "var(--black)" }}>
            Got a project?<br />Let's talk.
          </h2>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 font-archivo text-sm uppercase tracking-tight transition-colors hover:bg-[var(--dim)] hover:text-[var(--white)]"
              style={{ background: "var(--black)", color: "var(--white)" }}>
              Get in Touch <ArrowUpRight size={13} />
            </Link>
            <a href="mailto:hello@rwscreative.ca" className="btn-outline-dark">
              hello@rwscreative.ca
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
