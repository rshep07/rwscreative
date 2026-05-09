import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Download, ExternalLink } from "lucide-react";
import { getProjectBySlug, projects, getRelatedProjects } from "@/data/projects";
import { GallerySection } from "@/components/sections/GallerySection";
import { ProjectCard } from "@/components/ui/ProjectCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [{ url: project.heroImage, width: 1800, height: 900 }],
    },
  };
}

// Very lightweight Markdown renderer — no dependencies
function renderMarkdown(md: string) {
  return md.split("\n\n").map((block, i) => {
    const trimmed = block.trim();
    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={i} className="font-display text-2xl md:text-[1.85rem] font-light c-ink mt-10 mb-3 leading-tight">
          {trimmed.replace(/^## /, "")}
        </h2>
      );
    }
    if (trimmed.startsWith("### ")) {
      return (
        <h3 key={i} className="font-display text-xl font-light c-ink mt-6 mb-2">
          {trimmed.replace(/^### /, "")}
        </h3>
      );
    }
    // Bold + italic inline
    const html = trimmed
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>");
    return (
      <p key={i} className="c-muted leading-[1.78] mb-0"
        dangerouslySetInnerHTML={{ __html: html }} />
    );
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project, 3);

  return (
    <article>
      {/* ── Hero ── */}
      <div className="relative h-[55vh] md:h-[72vh] overflow-hidden bg-[var(--color-border)]">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Overlaid title */}
        <div className="absolute bottom-0 left-0 right-0 gutter pb-10 md:pb-16">
          <p className="eyebrow c-accent mb-3">{project.category}</p>
          <h1
            className="font-display text-white font-light leading-[1.02] max-w-3xl"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6.5rem)", letterSpacing: "-0.025em" }}
          >
            {project.title}
          </h1>
        </div>
      </div>

      {/* ── Meta bar ── */}
      <div className="border-b border-[var(--color-border)] bg-surf">
        <div className="gutter py-6 flex flex-wrap gap-8 md:gap-14">
          {[
            { label: "Role",   value: project.role },
            { label: "Client", value: project.client },
            { label: "Year",   value: String(project.year) },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="eyebrow c-faint text-[0.58rem] mb-1">{label}</p>
              <p className="text-[0.875rem] c-ink font-medium">{value}</p>
            </div>
          ))}

          {project.tags && project.tags.length > 0 && (
            <div>
              <p className="eyebrow c-faint text-[0.58rem] mb-2">Tags</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag}
                    className="text-[0.72rem] px-2 py-0.5 border border-[var(--color-border)] rounded-full c-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Body ── */}
      <div className="gutter py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 md:gap-20">
        {/* Case study */}
        <div className="max-w-2xl">
          <p className="font-display text-2xl md:text-[1.9rem] font-light c-ink leading-[1.35] mb-8">
            {project.shortDescription}
          </p>
          <div className="w-10 h-[1.5px] bg-[var(--color-accent)] mb-8" />
          <div className="space-y-5">
            {renderMarkdown(project.fullCaseStudy)}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-10 lg:pt-1">
          {project.externalLinks && project.externalLinks.length > 0 && (
            <div>
              <p className="eyebrow c-faint text-[0.58rem] mb-4">Links</p>
              <div className="flex flex-col">
                {project.externalLinks.map((link) => (
                  <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between py-3 border-b border-[var(--color-border)]
                               text-[0.875rem] c-ink hover:c-accent transition-colors duration-300 group">
                    {link.label}
                    <ExternalLink size={12} className="c-faint group-hover:c-accent transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {project.downloadLinks && project.downloadLinks.length > 0 && (
            <div>
              <p className="eyebrow c-faint text-[0.58rem] mb-4">Downloads</p>
              <div className="flex flex-col">
                {project.downloadLinks.map((dl) => (
                  <a key={dl.url} href={dl.url} download={dl.filename}
                    className="flex items-center justify-between py-3 border-b border-[var(--color-border)]
                               text-[0.875rem] c-ink hover:c-accent transition-colors duration-300 group">
                    {dl.label}
                    <Download size={12} className="c-faint group-hover:c-accent transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>

      {/* ── Gallery ── */}
      {project.galleryImages.length > 0 && (
        <GallerySection images={project.galleryImages} title={project.title} />
      )}

      {/* ── Related work ── */}
      {related.length > 0 && (
        <section className="gutter py-16 border-t border-[var(--color-border)]">
          <div className="flex items-center gap-4 mb-10">
            <span className="accent-line" />
            <p className="eyebrow c-accent">More {project.category}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {related.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </section>
      )}

      {/* ── Footer nav ── */}
      <div className="gutter py-12 border-t border-[var(--color-border)] flex items-center justify-between">
        <Link href="/work" className="inline-flex items-center gap-2 eyebrow c-muted hover:c-ink transition-colors duration-300">
          <ArrowLeft size={13} /> All Work
        </Link>
        <Link href="/contact" className="btn-primary">
          Start a Project <ArrowUpRight size={13} />
        </Link>
      </div>
    </article>
  );
}
