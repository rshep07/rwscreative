"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { CategoryFilter } from "@/components/ui/CategoryFilter";
import type { Project } from "@/types";

interface WorkGridProps {
  projects:   Project[];
  categories: string[];
}

// Alternate tall cards to add visual rhythm in the 2-col grid
const TALL_PATTERN = [false, true, true, false, false, true];

export function WorkGrid({ projects, categories }: WorkGridProps) {
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
    <div className="gutter py-12">
      {/* Filter bar */}
      <div className="mb-12">
        <CategoryFilter categories={categories} active={active} onSelect={setActive} counts={counts} />
      </div>

      <LayoutGroup>
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16 items-start"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{   opacity: 0, y: 12  }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard
                  project={project}
                  index={i}
                  priority={i < 2}
                  tall={TALL_PATTERN[i % TALL_PATTERN.length]}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {filtered.length === 0 && (
        <div className="py-28 text-center col-span-2">
          <p className="d-md text-[var(--black)] mb-2">Nothing here yet</p>
          <p className="tag text-[var(--gray-mid)]">More coming soon</p>
        </div>
      )}
    </div>
  );
}
