import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard, FeatureCard } from "@/components/ui/ProjectCard";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeBar } from "@/components/sections/MarqueeBar";

export default function HomePage() {
  const sorted = [...projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  const feature = sorted[0];
  const grid    = sorted.slice(1, 5); // up to 4 in the broken grid

  // Split for offset columns
  const leftCol  = grid.filter((_, i) => i % 2 === 0);
  const rightCol = grid.filter((_, i) => i % 2 === 1);

  return (
    <>
      {/* ── Split-screen hero ── */}
      <HeroSection />
      <MarqueeBar />

      {/* ── Selected work ── */}
      <section className="bg-[var(--bg)]">
        <div className="gutter pt-20 pb-6 flex items-end justify-between">
          <div>
            <span className="coral-tag mb-4 inline-flex">Selected Work</span>
            <h2 className="t-xl text-[var(--ink)]">Projects</h2>
          </div>
          <Link href="/work" className="btn-ghost hidden md:inline-flex">
            All Work <ArrowUpRight size={13} />
          </Link>
        </div>

        {/* Wide feature card */}
        {feature && (
          <div className="gutter pb-14">
            <FeatureCard project={feature} />
          </div>
        )}

        {/* Broken 2-col grid */}
        {grid.length > 0 && (
          <div className="gutter pb-16 grid grid-cols-1 sm:grid-cols-2 gap-x-10 border-t border-[var(--border)] pt-14">
            <div className="flex flex-col gap-16">
              {leftCol.map((p, i) => <ProjectCard key={p.id} project={p} index={i * 2} />)}
            </div>
            <div className="flex flex-col gap-16 sm:mt-24">
              {rightCol.map((p, i) => <ProjectCard key={p.id} project={p} index={i * 2 + 1} />)}
            </div>
          </div>
        )}

        <div className="gutter pb-10 md:hidden">
          <Link href="/work" className="btn-ghost w-full justify-center">
            All Work <ArrowUpRight size={13} />
          </Link>
        </div>
      </section>

      {/* ── About ── slightly raised surface, off-axis header */}
      <section className="bg-[var(--surface)] border-t border-[var(--border)]">
        <div className="gutter py-20 md:py-28">
          {/* Intentionally broken: heading that extends past gutter with a coral rule overlapping it */}
          <div className="relative mb-12">
            <span className="coral-tag mb-4 inline-flex">About</span>
            <h2 className="t-xl text-[var(--ink)] max-w-3xl">
              Design that earns<br />
              its place.
            </h2>
            {/* Off-axis decorative coral line */}
            <div className="absolute -right-4 top-1/2 hidden lg:block"
              style={{ width: "6rem", height: "1.5px", background: "var(--coral)", transform: "rotate(-8deg)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="space-y-4 text-[var(--muted)] leading-relaxed tracking-wide text-sm">
              <p>RWS Creative is an independent graphic design practice. We work with brands who want bold, lasting visual identities — not safe, forgettable work.</p>
              <p>Small client list. Full attention. High standards.</p>
              <div className="pt-4">
                <Link href="/about" className="btn-coral">
                  Our Story <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>

            {/* Stats — slightly off-axis for broken feel */}
            <div className="grid grid-cols-2 gap-px bg-[var(--border)]">
              {[
                { n: "10+", label: "Years" },
                { n: "80+", label: "Projects" },
                { n: "4",   label: "D&AD Pencils" },
                { n: "3",   label: "Continents" },
              ].map(({ n, label }) => (
                <div key={label} className="bg-[var(--raised)] p-8">
                  <p className="font-raleway font-extralight text-5xl tracking-[0.04em] text-[var(--coral)] mb-1 leading-none">{n}</p>
                  <p className="label text-[var(--muted)]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA — coral bg ── */}
      <section style={{ background: "var(--coral)" }}>
        <div className="gutter py-20 md:py-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <p className="label text-white/60 mb-4">Let's Work Together</p>
            <h2 className="t-lg text-white">Got a project?<br />Let's talk.</h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--bg)] text-[var(--ink)] px-6 py-3 label hover:bg-white hover:text-black transition-colors duration-150">
              Get in Touch <ArrowUpRight size={13} />
            </Link>
            <a href="mailto:hello@rwscreative.ca"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 label hover:border-white transition-colors duration-150">
              hello@rwscreative.ca
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
