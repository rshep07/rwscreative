"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

// ── Primary card — image fills, title overlaid at bottom ─────

interface OverlayCardProps {
  project:    Project;
  index?:     number;
  priority?:  boolean;
  aspect?:    string;
  className?: string;
}

export function OverlayCard({
  project,
  index    = 0,
  priority = false,
  aspect   = "aspect-[4/3]",
  className,
}: OverlayCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-4%" }}
      transition={{ duration: 0.25, delay: (index % 2) * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className={cn("group", className)}
    >
      <Link href={`/work/${project.slug}`} className="block">
        <div className={cn("relative overflow-hidden bg-[var(--dim)]", aspect)}>

          {/* Image — subtle zoom on hover */}
          <Image
            src={project.thumbnailImage}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
            priority={priority}
          />

          {/* Permanent dark gradient at base for text legibility */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.35) 45%, transparent 75%)" }}
          />

          {/* Blue tint on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ background: "rgba(0,191,255,0.07)" }}
          />

          {/* Bottom text overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
            <span className="blue-tag mb-3 inline-flex">{project.category}</span>
            <h3
              className="font-archivo text-white uppercase tracking-tight leading-none transition-colors duration-150 group-hover:text-[var(--blue)]"
              style={{ fontSize: "clamp(1.1rem, 2.2vw, 2rem)" }}
            >
              {project.title}
            </h3>
            <p className="t-label mt-2" style={{ color: "rgba(255,255,255,0.45)" }}>{project.year}</p>
          </div>

          {/* Arrow — top right, on hover */}
          <motion.div
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center"
            animate={{ opacity: 0, y: -4 }}
            whileHover={{ opacity: 1, y: 0 }}
            style={{ background: "var(--blue)" }}
          >
            <ArrowUpRight size={16} style={{ color: "var(--black)" }} />
          </motion.div>
        </div>
      </Link>
    </motion.article>
  );
}

// ── Alias for backward compatibility ─────────────────────────
export const ProjectCard = OverlayCard;
