import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Download, ExternalLink } from "lucide-react";
import { getProjectBySlug, projects, getRelatedProjects } from "@/data/projects";
import { GallerySection } from "@/components/sections/GallerySection";
import { ProjectCard } from "@/components/ui/ProjectCard";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
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
        <h2 key={i} className="font-raleway font-light text-2xl md:text-3xl text-[var(--ink)] mt-10 mb-3 tracking-[0.03em] uppercase">
          {t.replace(/^## /, "")}
        </h2>
      );
    }
    const html = t.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>");
    return <p key={i} className="text-[var(--muted)] leading-[1.8] mb-0 text-sm tracking-wide" dangerouslySetInnerHTML={{ __html: html }} />;
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const related = getRelatedProjects(project, 2);

  return (
    <article>
      {/* ── Hero ── */}
      <div className="relative h-[58vh] md:h-[72vh] overflow-hidden bg-[var(--raised)]">
        <Image src={project.heroImage} alt={project.title} fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,12,12,0.9) 0%, rgba(12,12,12,0.3) 50%, transparent 100%)" }} />

        {/* Coral spine — left edge */}
        <div className="absolute top-0 bottom-0 left-0 w-[3px]" style={{ background: "var(--coral)" }} />

        <div className="absolute bottom-0 gutter pb-12 md:pb-16 pl-8">
          <span className="coral-tag mb-4 inline-flex">{project.category}</span>
          <h1 className="t-xl text-white max-w-4xl">{project.title}</h1>
        </div>
      </div>

      {/* ── Meta bar ── */}
      <div className="bg-[var(--surface)] border-b border-[var(--border)]">
        <div className="gutter py-6 flex flex-wrap gap-8 md:gap-14">
          {[
            { label: "Role",   value: project.role },
            { label: "Client", value: project.client },
            { label: "Year",   value: String(project.year) },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="label text-[var(--muted)] mb-1.5">{label}</p>
              <p className="text-sm text-[var(--ink)] font-medium tracking-wide">{value}</p>
            </div>
          ))}
          {project.tags && project.tags.length > 0 && (
            <div>
              <p className="label text-[var(--muted)] mb-2">Tags</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="dim-tag">{tag}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Body ── intentionally broken: lead text bleeds wider than body copy */}
      <div className="gutter py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12 md:gap-20">
        <div>
          {/* Lead — wide-tracked, pulls slightly outside normal measure */}
          <p className="font-raleway font-light text-2xl md:text-3xl text-[var(--ink)] leading-tight mb-8 tracking-[0.03em] uppercase">
            {project.shortDescription}
          </p>
          <div className="w-8 h-[1.5px] mb-8" style={{ background: "var(--coral)" }} />
          <div className="space-y-5">{renderMd(project.fullCaseStudy)}</div>
        </div>

        <aside className="space-y-8">
          {project.externalLinks && project.externalLinks.length > 0 && (
            <div>
              <p className="label text-[var(--muted)] mb-4">Links</p>
              {project.externalLinks.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-between py-3 border-b border-[var(--border)]
                             text-sm text-[var(--ink)] hover:text-[var(--coral)] transition-colors duration-150 group">
                  {link.label}
                  <ExternalLink size={11} className="text-[var(--muted)] group-hover:text-[var(--coral)] transition-colors" />
                </a>
              ))}
            </div>
          )}
          {project.downloadLinks && project.downloadLinks.length > 0 && (
            <div>
              <p className="label text-[var(--muted)] mb-4">Downloads</p>
              {project.downloadLinks.map((dl) => (
                <a key={dl.url} href={dl.url} download={dl.filename}
                  className="flex items-center justify-between py-3 border-b border-[var(--border)]
                             text-sm text-[var(--ink)] hover:text-[var(--coral)] transition-colors duration-150 group">
                  {dl.label}
                  <Download size={11} className="text-[var(--muted)] group-hover:text-[var(--coral)] transition-colors" />
                </a>
              ))}
            </div>
          )}
        </aside>
      </div>

      {/* ── Gallery ── */}
      {project.galleryImages.length > 0 && (
        <GallerySection images={project.galleryImages} title={project.title} />
      )}

      {/* ── Related ── */}
      {related.length > 0 && (
        <section className="bg-[var(--surface)] border-t border-[var(--border)]">
          <div className="gutter py-16">
            <div className="flex items-center gap-3 mb-10">
              <span className="coral-rule" />
              <p className="label text-[var(--coral)]">More {project.category}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
              <div className="flex flex-col gap-16">
                {related.filter((_, i) => i % 2 === 0).map((p, i) => <ProjectCard key={p.id} project={p} index={i * 2} />)}
              </div>
              <div className="flex flex-col gap-16 sm:mt-24">
                {related.filter((_, i) => i % 2 === 1).map((p, i) => <ProjectCard key={p.id} project={p} index={i * 2 + 1} />)}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Footer nav ── */}
      <div className="gutter py-12 border-t border-[var(--border)] flex items-center justify-between">
        <Link href="/work" className="inline-flex items-center gap-2 label text-[var(--muted)] hover:text-[var(--coral)] transition-colors duration-150">
          <ArrowLeft size={12} /> All Work
        </Link>
        <Link href="/contact" className="btn-coral">
          Start a Project <ArrowUpRight size={13} />
        </Link>
      </div>
    </article>
  );
}
