"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

// ── Full-width row card (homepage + work page) ────────────────
interface ProjectRowProps {
  project: Project;
  index:   number;
}

export function ProjectRow({ project, index }: ProjectRowProps) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 18 });
  const sy = useSpring(my, { stiffness: 120, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set(e.clientX - rect.left - 160);
    my.set(e.clientY - rect.top  - 120);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={onMove}
      className="relative border-b border-[var(--border)] group"
    >
      <Link href={`/work/${project.slug}`} className="flex items-center justify-between gutter py-8 md:py-10 gap-6">
        {/* Left — number + category */}
        <div className="flex items-center gap-6 md:gap-10 min-w-0">
          <span
            className="label flex-shrink-0 transition-colors duration-300"
            style={{ color: hovered ? "var(--lime)" : "var(--muted)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="min-w-0">
            <h3
              className="project-title text-[var(--ink)] transition-colors duration-300 truncate"
              style={{ color: hovered ? "var(--lime)" : "var(--ink)" }}
            >
              {project.title}
            </h3>
            <div className="flex items-center gap-3 mt-1.5">
              <span className="label text-[var(--muted)]">{project.category}</span>
              <span className="label text-[var(--faint)]">—</span>
              <span className="label text-[var(--muted)]">{project.year}</span>
            </div>
          </div>
        </div>

        {/* Right — arrow */}
        <motion.div
          animate={{ x: hovered ? 0 : 8, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0"
        >
          <ArrowUpRight size={22} className="text-[var(--lime)]" />
        </motion.div>
      </Link>

      {/* Floating image preview — follows cursor */}
      <motion.div
        className="absolute pointer-events-none z-20 w-72 h-48 overflow-hidden"
        style={{ left: sx, top: sy, opacity: hovered ? 1 : 0 }}
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.92 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={project.thumbnailImage}
          alt={project.title}
          fill
          sizes="288px"
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
}

// ── Grid card (work page filtered view) ──────────────────────
interface ProjectCardProps {
  project:   Project;
  index?:    number;
  priority?: boolean;
}

export function ProjectCard({ project, index = 0, priority }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <Link href={`/work/${project.slug}`} className="block">
        {/* Image */}
        <div className="img-zoom relative aspect-[4/3] bg-[var(--surface)] overflow-hidden mb-5">
          <Image
            src={project.thumbnailImage}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            priority={priority}
          />
          <div className="absolute inset-0 bg-[var(--bg)]/60 flex items-center justify-center
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="label text-[var(--lime)] flex items-center gap-1.5">
              View Case Study <ArrowUpRight size={12} />
            </span>
          </div>
        </div>

        {/* Caption */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-2xl font-light text-[var(--ink)]
                           group-hover:text-[var(--lime)] transition-colors duration-300">
              {project.title}
            </h3>
            <p className="mt-1 label text-[var(--muted)]">{project.category} · {project.year}</p>
          </div>
          <ArrowUpRight size={16} className="text-[var(--muted)] group-hover:text-[var(--lime)] transition-colors duration-300 flex-shrink-0 mt-1" />
        </div>
      </Link>
    </motion.article>
  );
}

// ── Featured large card (homepage 2-up) ─────────────────────
interface FeaturedCardProps {
  project: Project;
  index:   number;
}

export function FeaturedCard({ project, index }: FeaturedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/work/${project.slug}`} className="group block">
        <div className="img-zoom relative overflow-hidden bg-[var(--surface)] mb-5"
          style={{ aspectRatio: index === 0 ? "16/9" : "4/3" }}
        >
          <Image
            src={project.thumbnailImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-[var(--bg)]/50 opacity-0 group-hover:opacity-100
                          transition-opacity duration-300 flex items-end gutter pb-6">
            <span className="label text-[var(--lime)] flex items-center gap-1.5">
              View Project <ArrowUpRight size={12} />
            </span>
          </div>
        </div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="label text-[var(--lime)] mb-2">{project.category}</p>
            <h3 className={cn(
              "font-['Cormorant_Garamond',Georgia,serif] font-light text-[var(--ink)]",
              "group-hover:text-[var(--lime)] transition-colors duration-300",
              index === 0 ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
            )}>
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed max-w-sm">
              {project.shortDescription}
            </p>
          </div>
          <span className="label text-[var(--muted)] flex-shrink-0 mt-1">{project.year}</span>
        </div>
      </Link>
    </motion.div>
  );
}
