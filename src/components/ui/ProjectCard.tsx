"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

// ── 2-col grid card — broken layout ─────────────────────────
interface ProjectCardProps {
  project:   Project;
  index?:    number;
  priority?: boolean;
}

export function ProjectCard({ project, index = 0, priority }: ProjectCardProps) {
  // Alternate portrait / landscape aspect
  const isPortrait = index % 3 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-4%" }}
      transition={{ duration: 0.22, delay: (index % 2) * 0.07, ease: [0.4, 0, 0.2, 1] }}
      className="group relative"
    >
      <Link href={`/work/${project.slug}`} className="block">
        {/* Image wrapper */}
        <div className={cn(
          "zoom relative overflow-hidden bg-[var(--raised)]",
          isPortrait ? "aspect-[3/4]" : "aspect-[4/3]"
        )}>
          <Image
            src={project.thumbnailImage}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
            priority={priority}
          />

          {/* Coral tint on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[180ms]"
            style={{ background: "rgba(255,77,109,0.08)" }} />

          {/* View overlay — bottom right */}
          <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-[180ms]">
            <span className="flex items-center gap-1 bg-[var(--coral)] text-white px-3 py-1.5 label">
              View <ArrowUpRight size={10} />
            </span>
          </div>

          {/* Large decorative index — overlaps top-left corner of image, intentionally broken */}
          <span
            className="absolute -top-3 -left-2 font-raleway font-extralight text-6xl leading-none select-none pointer-events-none transition-colors duration-[180ms]"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px rgba(255,77,109,0.35)",
              lineHeight: 1,
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Caption — overlaps image bottom by pulling up with negative margin */}
        <div className="relative -mt-px pt-4">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <span className="coral-tag mb-3 inline-flex">{project.category}</span>
              <h3 className="t-sm text-[var(--ink)] group-hover:text-[var(--coral)] transition-colors duration-[150ms] leading-tight block">
                {project.title}
              </h3>
              <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed line-clamp-2 tracking-wide">
                {project.shortDescription}
              </p>
            </div>
            <span className="label text-[var(--muted)] flex-shrink-0">{project.year}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

// ── Wide feature card (homepage top slot) ───────────────────
interface FeatureCardProps {
  project: Project;
}

export function FeatureCard({ project }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      className="group"
    >
      <Link href={`/work/${project.slug}`} className="block">
        <div className="zoom relative aspect-[16/8] overflow-hidden bg-[var(--raised)] mb-5">
          <Image
            src={project.thumbnailImage}
            alt={project.title}
            fill
            sizes="90vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[180ms]"
            style={{ background: "rgba(255,77,109,0.06)" }} />

          {/* Bottom-left text overlay — intentionally broken element */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
            <span className="coral-tag mb-2 inline-flex">{project.category}</span>
            <h3 className="t-lg text-white group-hover:text-[var(--coral)] transition-colors duration-[150ms]">
              {project.title}
            </h3>
          </div>

          {/* Coral arrow — top right */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-[180ms]">
            <div className="w-9 h-9 bg-[var(--coral)] flex items-center justify-center">
              <ArrowUpRight size={16} className="text-white" />
            </div>
          </div>
        </div>

        {/* Below-image meta */}
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-[var(--muted)] leading-relaxed max-w-lg tracking-wide">
            {project.shortDescription}
          </p>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="label text-[var(--muted)]">{project.client}</span>
            <span className="label text-[var(--faint)]">·</span>
            <span className="label text-[var(--muted)]">{project.year}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
