import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard, WideCard } from "@/components/ui/ProjectCard";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeBar } from "@/components/sections/MarqueeBar";

export default function HomePage() {
  // Show up to 4 projects on homepage — featured first
  const sorted  = [...projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  const top     = sorted[0];              // first project shown wide
  const rest    = sorted.slice(1, 4);     // next 1–3 in grid

  return (
    <>
      <HeroSection />
      <MarqueeBar />

      {/* ── Selected Work ── */}
      <section className="bg-[var(--white)]">
        <div className="gutter pt-20 pb-4 flex items-end justify-between">
          <div>
            <span className="chip mb-3 inline-flex">Selected Work</span>
            <h2 className="d-xl text-[var(--black)]">Projects</h2>
          </div>
          <Link href="/work" className="btn-outline hidden md:inline-flex">
            All Work <ArrowUpRight size={13} />
          </Link>
        </div>

        {/* Featured wide card */}
        {top && (
          <div className="gutter py-10 border-b border-[var(--border)]">
            <WideCard project={top} index={0} />
          </div>
        )}

        {/* 2-col grid for remaining */}
        {rest.length > 0 && (
          <div className="gutter py-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-14 items-start">
            {rest.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} priority={i === 0} tall={i === 1} />
            ))}
          </div>
        )}

        <div className="gutter pb-10 md:hidden">
          <Link href="/work" className="btn-outline w-full justify-center">
            All Work <ArrowUpRight size={13} />
          </Link>
        </div>
      </section>

      {/* ── About strip ── dark bg */}
      <section className="bg-[var(--black)] text-[var(--white)]">
        <div className="gutter py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <span className="chip-dark mb-5 inline-flex">About RWS Creative</span>
            <h2 className="d-lg text-[var(--white)] mb-6 leading-tight">
              Design that earns its place in the world.
            </h2>
            <p className="text-[var(--gray-mid)] leading-relaxed mb-4 max-w-md">
              RWS Creative is an independent graphic design practice working with brands who want bold, lasting visual identities — not safe, forgettable work.
            </p>
            <p className="text-[var(--gray-mid)] leading-relaxed mb-10 max-w-md">
              Small client list. Full attention. High standards.
            </p>
            <Link href="/about" className="btn-white">
              Our Story <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 border border-[var(--gray-dk)]">
            {[
              { n: "10+", label: "Years" },
              { n: "80+", label: "Projects" },
              { n: "4",   label: "D&AD Pencils" },
              { n: "3",   label: "Continents" },
            ].map(({ n, label }, i) => (
              <div key={label}
                className={`p-8 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b" : ""} border-[var(--gray-dk)]`}>
                <p className="font-syne font-extrabold text-5xl leading-none mb-2"
                  style={{ color: "var(--teal)" }}>{n}</p>
                <p className="tag text-[var(--gray-mid)]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── teal bg */}
      <section style={{ background: "var(--teal)" }}>
        <div className="gutter py-20 md:py-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <p className="tag text-white/70 mb-4">Let's Work Together</p>
            <h2 className="d-lg text-white leading-tight">
              Got a project?<br />Let's talk.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link href="/contact" className="btn-black">
              Get in Touch <ArrowUpRight size={13} />
            </Link>
            <a href="mailto:hello@rwscreative.ca" className="btn-white">
              hello@rwscreative.ca
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
