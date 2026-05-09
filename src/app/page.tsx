import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";
import { FeaturedCard } from "@/components/ui/ProjectCard";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeBar } from "@/components/sections/MarqueeBar";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Marquee ── */}
      <MarqueeBar />

      {/* ── Featured work ── */}
      <section className="gutter py-24 md:py-32">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="eyebrow c-accent mb-3">Selected Work</p>
            <h2 className="h-lg c-ink">Featured Projects</h2>
          </div>
          <Link
            href="/work"
            className="hidden md:flex items-center gap-2 eyebrow c-muted hover:c-ink link-line transition-colors duration-300"
          >
            View All <ArrowRight size={13} />
          </Link>
        </div>

        <div className="flex flex-col gap-20 md:gap-28">
          {featured.map((project, i) => (
            <FeaturedCard key={project.id} project={project} index={i} reverse={i % 2 === 1} />
          ))}
        </div>

        <div className="mt-12 md:hidden flex justify-center">
          <Link href="/work" className="btn-ghost">
            View All Work <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* ── Stats band ── */}
      <section className="border-y border-[var(--color-border)] bg-surf">
        <div className="gutter py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: "10+", label: "Years of Practice" },
            { n: "80+", label: "Projects Delivered" },
            { n: "4",   label: "D&AD Pencils" },
            { n: "3",   label: "Continents" },
          ].map(({ n, label }) => (
            <div key={label}>
              <p className="font-display text-4xl md:text-5xl font-light c-ink mb-1">{n}</p>
              <p className="eyebrow c-muted text-[0.62rem]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── About teaser ── */}
      <section className="gutter py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <p className="eyebrow c-accent mb-4">About RWS Creative</p>
          <h2 className="font-display text-4xl md:text-5xl font-light c-ink mb-6 leading-[1.08]">
            Design that earns its place in the world
          </h2>
          <p className="text-[0.9375rem] c-muted leading-relaxed mb-4">
            RWS Creative is an independent graphic design practice working with brands, publishers, and institutions who believe design can be both commercially rigorous and genuinely beautiful.
          </p>
          <p className="text-[0.9375rem] c-muted leading-relaxed mb-8">
            Our work spans brand identity, editorial, packaging, motion, and digital — connected by a commitment to craft, restraint, and ideas that outlast trends.
          </p>
          <Link href="/about" className="btn-ghost">
            Learn More <ArrowUpRight size={13} />
          </Link>
        </div>

        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85"
            alt="RWS Creative studio workspace"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-[var(--color-border)]">
        <div className="gutter py-20 md:py-28 text-center">
          <p className="eyebrow c-accent mb-4">Let's Work Together</p>
          <h2 className="h-lg c-ink mb-8 max-w-2xl mx-auto">
            Have a project in mind?
          </h2>
          <Link href="/contact" className="btn-primary">
            Get in Touch <ArrowUpRight size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}
