import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, getFeaturedProjects } from "@/data/projects";
import { ProjectRow } from "@/components/ui/ProjectCard";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeBar } from "@/components/sections/MarqueeBar";

export default function HomePage() {
  const featured = getFeaturedProjects();
  // Show featured first, then fill with others up to 6
  const displayed = [
    ...featured,
    ...projects.filter((p) => !p.featured),
  ].slice(0, 6);

  return (
    <>
      <HeroSection />
      <MarqueeBar />

      {/* ── Selected Work ── */}
      <section>
        {/* Section header */}
        <div className="gutter py-14 flex items-end justify-between border-b border-[var(--border)]">
          <div>
            <p className="label text-[var(--lime)] mb-3">Selected Work</p>
            <h2 className="headline text-[var(--ink)]">Projects</h2>
          </div>
          <Link href="/work" className="btn-outline hidden md:inline-flex">
            All Work <ArrowUpRight size={13} />
          </Link>
        </div>

        {/* Full-width project rows */}
        <div>
          {displayed.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="gutter py-10 md:hidden">
          <Link href="/work" className="btn-outline w-full justify-center">
            All Work <ArrowUpRight size={13} />
          </Link>
        </div>
      </section>

      {/* ── About strip ── */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="gutter py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="label text-[var(--lime)] mb-5">About RWS Creative</p>
            <h2 className="headline text-[var(--ink)] mb-7">
              Design that earns its place.
            </h2>
            <p className="text-[var(--muted)] leading-relaxed mb-4 max-w-md">
              RWS Creative is an independent graphic design practice. We work with brands who want bold, lasting visual identities — not safe, forgettable work.
            </p>
            <p className="text-[var(--muted)] leading-relaxed mb-10 max-w-md">
              Small client list. Full attention. High standards.
            </p>
            <Link href="/about" className="btn-outline">
              Our Story <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-0 border border-[var(--border)]">
            {[
              { n: "10+", label: "Years" },
              { n: "80+", label: "Projects" },
              { n: "4",   label: "D&AD Pencils" },
              { n: "3",   label: "Continents" },
            ].map(({ n, label }, i) => (
              <div key={label} className={`p-8 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b" : ""} border-[var(--border)]`}>
                <p className="font-['Cormorant_Garamond',Georgia,serif] text-5xl font-light text-[var(--lime)] mb-1">{n}</p>
                <p className="label text-[var(--muted)]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-[var(--border)]">
        <div className="gutter py-24 md:py-32 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <p className="label text-[var(--lime)] mb-4">Start Something</p>
            <h2 className="headline text-[var(--ink)] max-w-2xl">
              Got a project?<br />Let's talk.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link href="/contact" className="btn-lime">
              Get in Touch <ArrowUpRight size={13} />
            </Link>
            <a href="mailto:hello@rwscreative.ca" className="btn-outline">
              hello@rwscreative.ca
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
