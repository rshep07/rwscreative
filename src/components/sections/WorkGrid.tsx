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

  // Split into two columns manually so we can offset the right col
  const leftCol  = filtered.filter((_, i) => i % 2 === 0);
  const rightCol = filtered.filter((_, i) => i % 2 === 1);

  return (
    <div className="gutter py-12">
      {/* Filter */}
      <div className="mb-14">
        <CategoryFilter categories={categories} active={active} onSelect={setActive} counts={counts} />
      </div>

      {/* Broken 2-col grid: right col offset down */}
      {filtered.length > 0 ? (
        <LayoutGroup>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
            {/* Left column */}
            <div className="flex flex-col gap-16">
              {leftCol.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i * 2} priority={i === 0} />
              ))}
            </div>

            {/* Right column — offset down to create intentionally broken rhythm */}
            <div className="flex flex-col gap-16 sm:mt-24">
              {rightCol.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i * 2 + 1} priority={i === 0 && leftCol.length === 0} />
              ))}
            </div>
          </div>
        </LayoutGroup>
      ) : (
        <div className="py-24 text-center">
          <p className="t-md text-[var(--ink)] mb-2">Nothing here yet</p>
          <p className="label text-[var(--muted)]">More projects coming soon</p>
        </div>
      )}
    </div>
  );
}
