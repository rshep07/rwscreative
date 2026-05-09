"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, index = 0, priority, tall }:
  { project: Project; index?: number; priority?: boolean; tall?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.22, delay: (index % 2) * 0.06 }}
      className="group"
    >
      <Link href={`/work/${project.slug}`} className="block">
        <div className={cn(
          "zoom relative overflow-hidden bg-[var(--dim)] mb-4",
          tall ? "aspect-[3/4]" : "aspect-[4/3]"
        )}>
          <Image src={project.thumbnailImage} alt={project.title}
            fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" priority={priority} />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
            style={{ background: "rgba(0,191,255,0.08)" }}
          />
          <div className="absolute top-3 left-3">
            <span className="blue-tag">{project.category}</span>
          </div>
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
            <div className="w-8 h-8 flex items-center justify-center" style={{ background: "var(--blue)" }}>
              <ArrowUpRight size={14} className="text-[var(--black)]" />
            </div>
          </div>
        </div>
        <h3 className="t-sub text-[var(--white)] group-hover:text-[var(--blue)] transition-colors duration-150 leading-tight">
          {project.title}
        </h3>
        <p className="t-label text-[var(--gray)] mt-2">{project.client} · {project.year}</p>
      </Link>
    </motion.article>
  );
}
