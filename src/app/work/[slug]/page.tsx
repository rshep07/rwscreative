import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Download, ExternalLink } from "lucide-react";
import { getProjectBySlug, projects, getRelatedProjects } from "@/data/projects";
import { GallerySection } from "@/components/sections/GallerySection";
import { ProjectCard, OverlayCard } from "@/components/ui/ProjectCard";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProjectBySlug(slug);
  if (!p) return {};
  return { title: p.title, description: p.shortDescription };
}

function renderMd(md: string) {
  return md.split("\n\n").map((block, i) => {
    const t = block.trim();
    if (t.startsWith("## ")) return (
      <h2 key={i} className="font-archivo text-2xl md:text-3xl uppercase tracking-tight text-[var(--white)] mt-10 mb-3">
        {t.replace(/^## /, "")}
      </h2>
    );
    const html = t.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>");
    return <p key={i} className="t-body text-[var(--gray)] mb-0 leading-[1.8]" dangerouslySetInnerHTML={{ __html: html }} />;
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const related = getRelatedProjects(project, 2);

  return (
    <article>
      {/* Hero */}
      <div className="relative h-[55vh] md:h-[72vh] overflow-hidden" style={{ background: "var(--dim)" }}>
        <Image src={project.heroImage} alt={project.title} fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.2) 60%, transparent 100%)" }} />
        {/* Blue bar — bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: "var(--blue)" }} />
        <div className="absolute bottom-6 gutter">
          <span className="blue-tag mb-3 inline-flex">{project.category}</span>
          <h1 className="t-heading text-[var(--white)]">{project.title}</h1>
        </div>
      </div>

      {/* Meta */}
      <div className="border-b border-[var(--border)]" style={{ background: "var(--dim)" }}>
        <div className="gutter py-5 flex flex-wrap gap-8 md:gap-14">
          {[["Role",project.role],["Client",project.client],["Year",String(project.year)]].map(([l,v])=>(
            <div key={l}>
              <p className="t-label text-[var(--gray)] mb-1">{l}</p>
              <p className="text-sm text-[var(--white)] font-medium">{v}</p>
            </div>
          ))}
          {project.tags && (
            <div>
              <p className="t-label text-[var(--gray)] mb-2">Tags</p>
              <div className="flex flex-wrap gap-1.5">{project.tags.map(tag=><span key={tag} className="blue-tag">{tag}</span>)}</div>
            </div>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="gutter py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12 md:gap-20">
        <div>
          <p className="font-archivo text-xl md:text-2xl uppercase tracking-tight text-[var(--white)] leading-tight mb-8">
            {project.shortDescription}
          </p>
          <div className="w-8 h-[2px] mb-8" style={{ background: "var(--blue)" }} />
          <div className="space-y-5">{renderMd(project.fullCaseStudy)}</div>
        </div>

        <aside className="space-y-8">
          {project.externalLinks?.length ? (
            <div>
              <p className="t-label text-[var(--gray)] mb-4">Links</p>
              {project.externalLinks.map(link=>(
                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-between py-3 border-b border-[var(--border)] text-sm text-[var(--white)] hover:text-[var(--blue)] transition-colors duration-150 group">
                  {link.label} <ExternalLink size={11} className="text-[var(--gray)] group-hover:text-[var(--blue)] transition-colors" />
                </a>
              ))}
            </div>
          ) : null}
          {project.downloadLinks?.length ? (
            <div>
              <p className="t-label text-[var(--gray)] mb-4">Downloads</p>
              {project.downloadLinks.map(dl=>(
                <a key={dl.url} href={dl.url} download={dl.filename}
                  className="flex items-center justify-between py-3 border-b border-[var(--border)] text-sm text-[var(--white)] hover:text-[var(--blue)] transition-colors duration-150 group">
                  {dl.label} <Download size={11} className="text-[var(--gray)] group-hover:text-[var(--blue)] transition-colors" />
                </a>
              ))}
            </div>
          ) : null}
        </aside>
      </div>

      {/* Gallery */}
      {project.galleryImages.length > 0 && <GallerySection images={project.galleryImages} title={project.title} />}

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-[var(--border)]" style={{ background: "var(--dim)" }}>
          <div className="gutter py-14">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-6 h-[2px]" style={{ background: "var(--blue)" }} />
              <p className="t-label" style={{ color: "var(--blue)" }}>More {project.category}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              <div className="flex flex-col gap-14">{related.filter((_,i)=>i%2===0).map((p,i)=><ProjectCard key={p.id} project={p} index={i*2} />)}</div>
              <div className="flex flex-col gap-14 sm:mt-20">{related.filter((_,i)=>i%2===1).map((p,i)=><ProjectCard key={p.id} project={p} index={i*2+1} />)}</div>
            </div>
          </div>
        </section>
      )}

      {/* Nav */}
      <div className="gutter py-10 border-t border-[var(--border)] flex items-center justify-between">
        <Link href="/work" className="inline-flex items-center gap-2 t-label text-[var(--gray)] hover:text-[var(--blue)] transition-colors duration-150">
          <ArrowLeft size={12} /> All Work
        </Link>
        <Link href="/contact" className="btn-blue">Start a Project <ArrowUpRight size={13} /></Link>
      </div>
    </article>
  );
}
