"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

// ── Aspect ratio map ─────────────────────────────────────────
const ASPECTS: Record<string, string> = {
  "4/3":   "aspect-[4/3]",
  "3/4":   "aspect-[3/4]",
  square:  "aspect-square",
  "16/10": "aspect-[16/10]",
  "5/6":   "aspect-[5/6]",
};

// ── Grid card ────────────────────────────────────────────────
interface ProjectCardProps {
  project:   Project;
  index?:    number;
  aspect?:   keyof typeof ASPECTS;
  priority?: boolean;
  className?: string;
}

export function ProjectCard({
  project,
  index    = 0,
  aspect   = "4/3",
  priority = false,
  className,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-6%" }}
      transition={{
        duration: 0.72,
        delay: (index % 3) * 0.09,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn("group", className)}
    >
      <Link href={`/work/${project.slug}`} className="block">
        {/* Image container */}
        <div className={cn("img-zoom relative bg-[var(--color-border)] overflow-hidden", ASPECTS[aspect])}>
          <Image
            src={project.thumbnailImage}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            priority={priority}
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#111010]/55 flex items-center justify-center
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="eyebrow text-white flex items-center gap-1.5">
              Case Study <ArrowUpRight size={13} />
            </span>
          </div>

          {/* Category badge */}
          <span className="absolute top-3 left-3 eyebrow px-2.5 py-1
                           bg-[var(--color-bg)]/90 backdrop-blur-sm c-ink
                           rounded-full text-[0.6rem]">
            {project.category}
          </span>
        </div>

        {/* Caption */}
        <div className="mt-4 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="font-display text-xl font-light c-ink
                           group-hover:c-accent transition-colors duration-300 truncate">
              {project.title}
            </h3>
            <p className="mt-1 text-[0.85rem] c-muted line-clamp-2 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>
          <span className="eyebrow c-faint flex-shrink-0 pt-0.5 text-[0.6rem]">{project.year}</span>
        </div>
      </Link>
    </motion.article>
  );
}

// ── Featured / alternating card ───────────────────────────────
interface FeaturedCardProps {
  project: Project;
  index:   number;
  reverse?: boolean;
}

export function FeaturedCard({ project, index, reverse }: FeaturedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.85, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center",
        reverse && "md:[&>*:first-child]:order-2"
      )}
    >
      {/* Image */}
      <Link href={`/work/${project.slug}`} className="block img-zoom group">
        <div className="relative aspect-[4/3] bg-[var(--color-border)] overflow-hidden">
          <Image
            src={project.thumbnailImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={index === 0}
          />
        </div>
      </Link>

      {/* Text */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <span className="accent-line" />
          <span className="eyebrow c-accent">{project.category}</span>
        </div>

        <Link href={`/work/${project.slug}`}>
          <h2 className="font-display text-4xl md:text-[3.25rem] font-light c-ink
                         hover:c-accent transition-colors duration-300 leading-[1.05] mb-5">
            {project.title}
          </h2>
        </Link>

        <p className="text-[0.9375rem] c-muted leading-relaxed mb-6 max-w-sm">
          {project.shortDescription}
        </p>

        <div className="flex justify-between text-sm c-faint mb-7 pb-6 border-b border-[var(--color-border)]">
          <span>{project.client}</span>
          <span>{project.year}</span>
        </div>

        <Link href={`/work/${project.slug}`} className="btn-ghost">
          View Case Study <ArrowUpRight size={13} />
        </Link>
      </div>
    </motion.div>
  );
}
