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
  return {
    title: p.title,
    description: p.shortDescription,
    openGraph: { images: [{ url: p.heroImage }] },
  };
}

function renderMarkdown(md: string) {
  return md.split("\n\n").map((block, i) => {
    const t = block.trim();
    if (t.startsWith("## ")) {
      return (
        <h2 key={i} className="font-['Cormorant_Garamond',Georgia,serif] text-2xl md:text-3xl font-light text-[var(--ink)] mt-10 mb-3">
          {t.replace(/^## /, "")}
        </h2>
      );
    }
    const html = t
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>");
    return <p key={i} className="text-[var(--muted)] leading-[1.8] mb-0" dangerouslySetInnerHTML={{ __html: html }} />;
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const related = getRelatedProjects(project, 3);

  return (
    <article className="nav-pt">
      {/* ── Full-bleed hero ── */}
      <div className="relative h-[60vh] md:h-[75vh] overflow-hidden bg-[var(--surface)]">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 gutter pb-12 md:pb-16">
          <p className="label text-[var(--lime)] mb-3">{project.category}</p>
          <h1
            className="font-['Cormorant_Garamond',Georgia,serif] text-[var(--ink)] font-light leading-[0.95]"
            style={{ fontSize: "clamp(2.5rem, 6.5vw, 7rem)", letterSpacing: "-0.03em" }}
          >
            {project.title}
          </h1>
        </div>
      </div>

      {/* ── Meta bar ── */}
      <div className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="gutter py-6 flex flex-wrap gap-8 md:gap-14">
          {[
            { label: "Role",   value: project.role },
            { label: "Client", value: project.client },
            { label: "Year",   value: String(project.year) },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="label text-[var(--muted)] mb-1.5">{label}</p>
              <p className="text-sm text-[var(--ink)] font-medium">{value}</p>
            </div>
          ))}
          {project.tags && project.tags.length > 0 && (
            <div>
              <p className="label text-[var(--muted)] mb-1.5">Tags</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="label px-2.5 py-1 border border-[var(--border)] text-[var(--muted)]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Body ── */}
      <div className="gutter py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 md:gap-20">
        <div className="max-w-2xl">
          <p className="font-['Cormorant_Garamond',Georgia,serif] text-2xl md:text-[1.85rem] font-light text-[var(--ink)] leading-[1.35] mb-8">
            {project.shortDescription}
          </p>
          <div className="w-10 h-px bg-[var(--lime)] mb-8" />
          <div className="space-y-5">
            {renderMarkdown(project.fullCaseStudy)}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-10 lg:pt-2">
          {project.externalLinks && project.externalLinks.length > 0 && (
            <div>
              <p className="label text-[var(--muted)] mb-4">Links</p>
              {project.externalLinks.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-between py-3 border-b border-[var(--border)]
                             text-sm text-[var(--ink)] hover:text-[var(--lime)] transition-colors group">
                  {link.label}
                  <ExternalLink size={12} className="text-[var(--muted)] group-hover:text-[var(--lime)] transition-colors" />
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
                             text-sm text-[var(--ink)] hover:text-[var(--lime)] transition-colors group">
                  {dl.label}
                  <Download size={12} className="text-[var(--muted)] group-hover:text-[var(--lime)] transition-colors" />
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
        <section className="gutter py-16 border-t border-[var(--border)]">
          <div className="flex items-center gap-4 mb-10">
            <span className="lime-dash" />
            <p className="label text-[var(--lime)]">More {project.category}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {related.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
          </div>
        </section>
      )}

      {/* ── Footer nav ── */}
      <div className="gutter py-12 border-t border-[var(--border)] flex items-center justify-between">
        <Link href="/work" className="inline-flex items-center gap-2 label text-[var(--muted)] hover:text-[var(--lime)] transition-colors">
          <ArrowLeft size={13} /> All Work
        </Link>
        <Link href="/contact" className="btn-lime">
          Start a Project <ArrowUpRight size={13} />
        </Link>
      </div>
    </article>
  );
}
