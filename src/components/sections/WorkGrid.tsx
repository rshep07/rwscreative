"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { CategoryFilter } from "@/components/ui/CategoryFilter";
import type { Project } from "@/types";

// Alternating aspect ratios for visual rhythm
const ASPECTS: Array<"4/3" | "3/4" | "square" | "5/6"> = [
  "4/3", "5/6", "4/3",
  "3/4", "4/3", "4/3",
];

interface WorkGridProps {
  projects:   Project[];
  categories: string[];
}

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
      {/* Filter */}
      <div className="mb-10">
        <CategoryFilter
          categories={categories}
          active={active}
          onSelect={setActive}
          counts={counts}
        />
      </div>

      {/* Grid */}
      <LayoutGroup>
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{   opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard
                  project={project}
                  index={i}
                  aspect={ASPECTS[i % ASPECTS.length]}
                  priority={i < 3}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {filtered.length === 0 && (
        <div className="py-24 text-center">
          <p className="font-display text-3xl font-light c-ink mb-2">No projects found</p>
          <p className="text-sm c-muted">Try selecting a different category.</p>
        </div>
      )}
    </div>
  );
}
