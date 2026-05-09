"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

// ── 2-column grid card ────────────────────────────────────────
interface ProjectCardProps {
  project:   Project;
  index?:    number;
  priority?: boolean;
  tall?:     boolean;  // optional tall aspect for visual rhythm
}

export function ProjectCard({ project, index = 0, priority, tall }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.65, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <Link href={`/work/${project.slug}`} className="block">
        {/* Image */}
        <div className={cn(
          "zoom relative overflow-hidden bg-[var(--gray-bg)] mb-5",
          tall ? "aspect-[3/4]" : "aspect-[4/3]"
        )}>
          <Image
            src={project.thumbnailImage}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
            priority={priority}
          />
          {/* Teal hover tint */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            style={{ background: "rgba(0,180,166,0.12)" }} />

          {/* View label */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300
                          translate-y-2 group-hover:translate-y-0">
            <span className="flex items-center gap-1.5 bg-white text-[var(--black)] px-3 py-1.5
                             font-space text-[0.65rem] font-semibold uppercase tracking-widest">
              View <ArrowUpRight size={11} />
            </span>
          </div>
        </div>

        {/* Caption */}
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            {/* Category chip */}
            <span className="chip mb-3 inline-flex">{project.category}</span>
            {/* Title */}
            <h3 className="d-sm text-[var(--black)] group-hover:text-[var(--teal)]
                           transition-colors duration-300 leading-tight">
              {project.title}
            </h3>
            {/* Short desc */}
            <p className="mt-2 text-sm text-[var(--gray-mid)] leading-relaxed line-clamp-2">
              {project.shortDescription}
            </p>
          </div>
          <span className="tag text-[var(--gray-mid)] flex-shrink-0 pt-1">{project.year}</span>
        </div>
      </Link>
    </motion.article>
  );
}

// ── Wide featured card (homepage, spans 2 cols) ───────────────
interface WideCardProps {
  project:  Project;
  index:    number;
}

export function WideCard({ project, index }: WideCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <Link href={`/work/${project.slug}`} className="block">
        <div className="zoom relative aspect-[16/9] overflow-hidden bg-[var(--gray-bg)] mb-5">
          <Image
            src={project.thumbnailImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            style={{ background: "rgba(0,180,166,0.1)" }} />
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <span className="flex items-center gap-1.5 bg-white text-[var(--black)] px-3 py-1.5
                             font-space text-[0.65rem] font-semibold uppercase tracking-widest">
              View Project <ArrowUpRight size={11} />
            </span>
          </div>
        </div>
        <div className="flex items-start justify-between gap-6">
          <div>
            <span className="chip mb-3 inline-flex">{project.category}</span>
            <h3 className="d-md text-[var(--black)] group-hover:text-[var(--teal)] transition-colors duration-300">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-[var(--gray-mid)] leading-relaxed max-w-lg">
              {project.shortDescription}
            </p>
          </div>
          <ArrowUpRight size={20} className="flex-shrink-0 mt-1 text-[var(--gray-lt)] group-hover:text-[var(--teal)] transition-colors duration-300" />
        </div>
      </Link>
    </motion.div>
  );
}
