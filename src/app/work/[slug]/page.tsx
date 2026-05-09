import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Download, ExternalLink } from "lucide-react";
import { getProjectBySlug, projects, getRelatedProjects } from "@/data/projects";
import { GallerySection } from "@/components/sections/GallerySection";

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
        <h2 key={i}
          className="font-archivo uppercase tracking-tight text-[var(--white)] mt-10 mb-3"
          style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)", letterSpacing: "-0.01em" }}>
          {t.replace(/^## /, "")}
        </h2>
      );
    }
    const html = t
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>");
    return (
      <p key={i} className="t-body text-[var(--gray)] leading-[1.8] mb-0"
        dangerouslySetInnerHTML={{ __html: html }} />
    );
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
      <div className="relative overflow-hidden" style={{ height: "60vh", minHeight: "380px", background: "var(--dim)" }}>
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
          unoptimized
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.25) 55%, transparent 100%)" }}
        />
        {/* Blue bar — left edge */}
        <div className="absolute top-0 left-0 bottom-0 w-[3px]" style={{ background: "var(--blue)" }} />

        <div className="absolute bottom-0 gutter pb-10 pl-8">
          <span className="blue-tag mb-3 inline-flex">{project.category}</span>
          <h1
            className="font-archivo text-[var(--white)] uppercase leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6.5rem)", letterSpacing: "-0.025em" }}
          >
            {project.title}
          </h1>
        </div>
      </div>

      {/* ── Meta bar — fixed grid layout so values don't run together ── */}
      <div className="border-b border-[var(--border)]" style={{ background: "var(--dim)" }}>
        <div className="gutter py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Role */}
            <div>
              <p className="t-label text-[var(--gray)] mb-2">Role</p>
              <p className="text-sm text-[var(--white)] font-medium leading-snug">{project.role}</p>
            </div>
            {/* Client */}
            <div>
              <p className="t-label text-[var(--gray)] mb-2">Client</p>
              <p className="text-sm text-[var(--white)] font-medium">{project.client}</p>
            </div>
            {/* Year */}
            <div>
              <p className="t-label text-[var(--gray)] mb-2">Year</p>
              <p className="text-sm text-[var(--white)] font-medium">{project.year}</p>
            </div>
            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div>
                <p className="t-label text-[var(--gray)] mb-2">Tags</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="blue-tag">{tag}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="gutter py-14 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-12 md:gap-16">
        <div>
          <p
            className="font-archivo uppercase tracking-tight text-[var(--white)] leading-tight mb-8"
            style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.75rem)", letterSpacing: "-0.01em" }}
          >
            {project.shortDescription}
          </p>
          <div className="w-8 h-[2px] mb-8" style={{ background: "var(--blue)" }} />
          <div className="space-y-5">{renderMd(project.fullCaseStudy)}</div>
        </div>

        <aside className="space-y-8">
          {project.externalLinks && project.externalLinks.length > 0 && (
            <div>
              <p className="t-label text-[var(--gray)] mb-3">Links</p>
              {project.externalLinks.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-between py-3 border-b border-[var(--border)] text-sm text-[var(--white)] hover:text-[var(--blue)] transition-colors duration-150 group">
                  {link.label}
                  <ExternalLink size={11} className="text-[var(--gray)] group-hover:text-[var(--blue)] transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>
          )}
          {project.downloadLinks && project.downloadLinks.length > 0 && (
            <div>
              <p className="t-label text-[var(--gray)] mb-3">Downloads</p>
              {project.downloadLinks.map((dl) => (
                <a key={dl.url} href={dl.url} download={dl.filename}
                  className="flex items-center justify-between py-3 border-b border-[var(--border)] text-sm text-[var(--white)] hover:text-[var(--blue)] transition-colors duration-150 group">
                  {dl.label}
                  <Download size={11} className="text-[var(--gray)] group-hover:text-[var(--blue)] transition-colors flex-shrink-0" />
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
        <section className="border-t border-[var(--border)]" style={{ background: "var(--dim)" }}>
          <div className="gutter py-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-5 h-[2px]" style={{ background: "var(--blue)" }} />
              <p className="t-label" style={{ color: "var(--blue)" }}>More {project.category}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((p) => (
                <Link key={p.id} href={`/work/${p.slug}`} className="group block relative overflow-hidden aspect-[4/3] bg-[var(--dim)]">
                  <Image src={p.thumbnailImage} alt={p.title} fill sizes="50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.04]" unoptimized />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 55%)" }} />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="blue-tag mb-2 inline-flex">{p.category}</span>
                    <p className="font-archivo text-white uppercase leading-none group-hover:text-[var(--blue)] transition-colors"
                      style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", letterSpacing: "-0.01em" }}>
                      {p.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Footer nav ── */}
      <div className="gutter py-10 border-t border-[var(--border)] flex items-center justify-between">
        <Link href="/work" className="inline-flex items-center gap-2 t-label text-[var(--gray)] hover:text-[var(--blue)] transition-colors duration-150">
          <ArrowLeft size={12} /> All Work
        </Link>
        <Link href="/contact" className="btn-blue">
          Start a Project <ArrowUpRight size={13} />
        </Link>
      </div>
    </article>
  );
}
