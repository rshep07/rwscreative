"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { ProjectRow, ProjectCard } from "@/components/ui/ProjectCard";
import { CategoryFilter } from "@/components/ui/CategoryFilter";
import type { Project } from "@/types";

interface WorkGridProps {
  projects:   Project[];
  categories: string[];
  rowMode?:   boolean; // full-width rows vs grid
}

export function WorkGrid({ projects, categories, rowMode = false }: WorkGridProps) {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => active === "All" ? projects : projects.filter((p) => p.category === active),
    [active, projects]
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: projects.length };
    for (const p of projects) c[p.category] = (c[p.category] ?? 0) + 1;
    return c;
  }, [projects]);

  return (
    <div>
      {/* Filter */}
      <div className="gutter py-8 border-b border-[var(--border)]">
        <CategoryFilter categories={categories} active={active} onSelect={setActive} counts={counts} />
      </div>

      {/* Project list / grid */}
      <LayoutGroup>
        {rowMode || active === "All" ? (
          /* Full-width numbered rows */
          <div className="border-t border-[var(--border)]">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <ProjectRow key={p.id} project={p} index={i} />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          /* Grid for filtered category */
          <motion.div
            layout
            className="gutter py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{   opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProjectCard project={p} index={i} priority={i < 3} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </LayoutGroup>

      {filtered.length === 0 && (
        <div className="gutter py-28 text-center">
          <p className="font-['Cormorant_Garamond',Georgia,serif] text-4xl font-light text-[var(--ink)] mb-2">
            Nothing here yet
          </p>
          <p className="label text-[var(--muted)]">Try a different category</p>
        </div>
      )}
    </div>
  );
}
