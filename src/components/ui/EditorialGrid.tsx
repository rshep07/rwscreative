"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

// Aspect ratio cycle — creates editorial rhythm
const RATIOS = ["aspect-[4/3]","aspect-[3/4]","aspect-[4/3]","aspect-square","aspect-[16/9]","aspect-[3/4]"];

interface Props { projects: Project[]; categories: string[]; }

export function EditorialGrid({ projects, categories }: Props) {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => active === "All" ? projects : projects.filter(p => p.category === active),
    [active, projects]
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: projects.length };
    projects.forEach(p => { c[p.category] = (c[p.category] ?? 0) + 1; });
    return c;
  }, [projects]);

  return (
    <div className="gutter">
      {/* Filter */}
      <div className="flex flex-wrap gap-2 py-6 border-b border-[var(--rule)]">
        {categories.map(cat => (
          <button key={cat} onClick={() => setActive(cat)}
            className={cn("tag", active === cat && "active")}>
            {cat}
            {counts[cat] !== undefined && (
              <span className="ml-1.5 opacity-50">{counts[cat]}</span>
            )}
          </button>
        ))}
      </div>

      {/* Grid — 2-col with alternating ratios */}
      <AnimatePresence mode="wait">
        <motion.div key={active}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] mt-[1px]">
          {filtered.map((project, i) => (
            <motion.div key={project.id}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.2, delay: (i % 2) * 0.05 }}>
              <Link href={`/work/${project.slug}`}
                className={cn("img-wrap group relative block", RATIOS[i % RATIOS.length])}
                style={{ background: "var(--dim)" }}>
                <Image src={project.thumbnailImage} alt={project.title}
                  fill sizes="(max-width:640px) 100vw, 50vw" className="object-cover" />

                {/* Always-visible gradient + title */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="tag">{project.category}</span>
                    <span className="f-mono text-[var(--mid)]">{project.year}</span>
                  </div>
                  <h3 className="f-subhead text-[var(--canvas)] group-hover:text-[var(--accent)] transition-colors duration-150 leading-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Accent bar — appears on hover at top */}
                <div className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
                  style={{ background: "var(--accent)" }} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="py-20 text-center">
          <p className="f-mono text-[var(--mid)]">No projects in this category yet.</p>
        </div>
      )}
    </div>
  );
}
