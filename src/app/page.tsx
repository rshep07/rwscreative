import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { OverlayCard } from "@/components/ui/ProjectCard";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeBar } from "@/components/sections/MarqueeBar";

export default function HomePage() {
  // Featured first, then rest — show up to 6
  const sorted   = [...projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  const displayed = sorted.slice(0, 6);

  return (
    <>
      <HeroSection />
      <MarqueeBar />

      {/* ── Selected Work — 2-col image grid, previews visible immediately ── */}
      <section>
        <div className="gutter pt-16 pb-8 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-[2px]" style={{ background: "var(--blue)" }} />
              <p className="t-label" style={{ color: "var(--blue)" }}>Selected Work</p>
            </div>
            <h2 className="font-archivo text-4xl md:text-6xl uppercase tracking-tight text-[var(--white)]">
              Projects
            </h2>
          </div>
          <Link href="/work" className="btn-outline hidden md:inline-flex mb-1">
            All Work <ArrowUpRight size={13} />
          </Link>
        </div>

        {/* 2-col grid — equal cards, all images visible immediately */}
        <div className="gutter pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {displayed.map((project, i) => (
              <OverlayCard
                key={project.id}
                project={project}
                index={i}
                priority={i < 2}
                aspect="aspect-[4/3]"
              />
            ))}
          </div>
        </div>

        <div className="gutter pb-10 md:hidden">
          <Link href="/work" className="btn-outline w-full justify-center">
            All Work <ArrowUpRight size={13} />
          </Link>
        </div>
      </section>

      {/* ── About strip ── */}
      <section className="border-t border-[var(--border)]" style={{ background: "var(--dim)" }}>
        <div className="gutter py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[2px]" style={{ background: "var(--blue)" }} />
              <p className="t-label" style={{ color: "var(--blue)" }}>About</p>
            </div>
            <h2 className="font-archivo text-4xl md:text-5xl uppercase tracking-tight text-[var(--white)] mb-6 leading-tight">
              Design that earns its place.
            </h2>
            <p className="t-body text-[var(--gray)] mb-8 max-w-md">
              RWS Creative is an independent graphic design practice. Small client list. Full attention. High standards.
            </p>
            <Link href="/about" className="btn-outline">Our Story <ArrowUpRight size={13} /></Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-px" style={{ background: "var(--border)" }}>
            {[["10+","Years"],["80+","Projects"],["4","D&AD Pencils"],["3","Continents"]].map(([n, l]) => (
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
        <div className="gutter py-20 md:py-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <h2 className="font-archivo text-4xl md:text-6xl uppercase tracking-tight leading-none"
            style={{ color: "var(--black)" }}>
            Got a project?<br />Let's talk.
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 font-archivo text-sm uppercase tracking-tight transition-colors duration-150 hover:bg-[var(--dim)] hover:text-[var(--white)]"
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
