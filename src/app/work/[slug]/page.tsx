import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProjectBySlug, projects, getRelated } from "@/data/projects";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProjectBySlug(slug);
  if (!p) return {};
  return { title: p.title, description: p.shortDescription };
}

function renderMd(md: string) {
  return md.split("\n\n").map((block, i) => {
    const t = block.trim();
    if (t.startsWith("## ")) {
      return (
        <h2 key={i} className="font-display text-xl md:text-2xl uppercase tracking-tight text-[var(--canvas)] mt-10 mb-3">
          {t.replace(/^## /, "")}
        </h2>
      );
    }
    const html = t.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>");
    return <p key={i} className="text-[var(--mid)] leading-[1.8] text-sm" dangerouslySetInnerHTML={{ __html: html }} />;
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const related = getRelated(project, 2);

  return (
    <article>

      {/* ── Full-width hero image ── */}
      <div className="relative w-full" style={{ height: "65vh", minHeight: "400px" }}>
        <Image src={project.heroImage} alt={project.title}
          fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/20 to-transparent" />
      </div>

      {/* ── Project title + metadata ── */}
      <div className="gutter">
        {/* Title block */}
        <div className="py-8 border-b border-[var(--rule)]">
          <div className="flex flex-wrap gap-1.5 mb-4">
            <span className="tag" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
              {project.category}
            </span>
            {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
          <h1 className="f-title text-[var(--canvas)] max-w-4xl">{project.title}</h1>
        </div>

        {/* Meta grid — clean 4-col */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[var(--rule)]">
          {[
            ["Role",   project.role],
            ["Client", project.client],
            ["Year",   String(project.year)],
            ["Type",   project.category],
          ].map(([label, value]) => (
            <div key={label} className="py-5 pr-8 border-r border-[var(--rule)] last:border-r-0">
              <p className="f-mono text-[var(--mid)] mb-1.5">{label}</p>
              <p className="text-sm text-[var(--canvas)] font-medium leading-snug">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Body — lead + case study ── */}
      <div className="gutter py-14 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-16 border-b border-[var(--rule)]">
        {/* Lead statement */}
        <div className="md:pt-1">
          <p className="f-mono text-[var(--accent)] mb-4">Overview</p>
          <p className="font-display text-base md:text-lg uppercase tracking-tight text-[var(--canvas)] leading-tight">
            {project.shortDescription}
          </p>
          {project.externalLinks?.map(link => (
            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 mt-6 f-mono text-[var(--accent)] hover:text-[var(--canvas)] transition-colors duration-150">
              {link.label} <ArrowUpRight size={10} />
            </a>
          ))}
        </div>

        {/* Case study text */}
        <div className="space-y-4">
          {renderMd(project.fullCaseStudy)}
        </div>
      </div>

      {/* ── Gallery — editorial image layout ── */}
      {project.galleryImages.length > 0 && (
        <div className="gutter py-12 border-b border-[var(--rule)]">
          <div className="section-header mb-6">
            <span className="section-num">Gallery</span>
            <span className="f-mono text-[var(--mid)]">{project.galleryImages.length} Images</span>
          </div>

          {/* First image — full width */}
          <div className="w-full aspect-video mb-[2px] img-wrap relative overflow-hidden"
            style={{ background: "var(--dim)" }}>
            <Image src={project.galleryImages[0]} alt={`${project.title} — 1`}
              fill className="object-cover" sizes="100vw" />
          </div>

          {/* Remaining — 2-col pairing */}
          {project.galleryImages.length > 1 && (
            <div className="grid grid-cols-2 gap-[2px] mb-[2px]">
              {project.galleryImages.slice(1).map((src, i) => (
                <div key={i} className="img-wrap relative aspect-[4/3] overflow-hidden"
                  style={{ background: "var(--dim)" }}>
                  <Image src={src} alt={`${project.title} — ${i + 2}`}
                    fill className="object-cover" sizes="50vw" />
                </div>
              ))}
            </div>
          )}

          <p className="f-caption mt-3">{project.title} — {project.client}, {project.year}</p>
        </div>
      )}

      {/* ── Related projects ── */}
      {related.length > 0 && (
        <div className="gutter py-12 border-b border-[var(--rule)]">
          <div className="section-header mb-6">
            <span className="section-num">Next</span>
            <span className="f-mono text-[var(--mid)]">More {project.category}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2px]">
            {related.map(p => (
              <Link key={p.id} href={`/work/${p.slug}`}
                className="img-wrap group relative aspect-[4/3] overflow-hidden"
                style={{ background: "var(--dim)" }}>
                <Image src={p.thumbnailImage} alt={p.title} fill
                  className="object-cover" sizes="50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/75 to-transparent" />
                <div className="absolute bottom-0 p-5">
                  <span className="tag mb-2 inline-flex">{p.category}</span>
                  <p className="f-subhead text-[var(--canvas)] group-hover:text-[var(--accent)] transition-colors duration-150">
                    {p.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* ── Footer nav ── */}
      <div className="gutter py-8 flex items-center justify-between">
        <Link href="/work"
          className="f-mono text-[var(--mid)] hover:text-[var(--accent)] transition-colors duration-150 flex items-center gap-1">
          <ArrowLeft size={10} /> All Work
        </Link>
        <Link href="/contact" className="btn-primary">
          Start a Project <ArrowUpRight size={12} />
        </Link>
      </div>
    </article>
  );
}
