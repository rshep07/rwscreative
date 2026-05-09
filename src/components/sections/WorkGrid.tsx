"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OverlayCard } from "@/components/ui/ProjectCard";
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
    projects.forEach((p) => { c[p.category] = (c[p.category] ?? 0) + 1; });
    return c;
  }, [projects]);

  // Split: first card goes full-width hero, rest into 2-col grid
  const [hero, ...rest] = filtered;

  return (
    <div className="gutter py-12">
      {/* Filter */}
      <div className="mb-12">
        <CategoryFilter categories={categories} active={active} onSelect={setActive} counts={counts} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-archivo text-2xl uppercase tracking-tight text-[var(--gray)]">Nothing here yet</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">

              {/* Hero card — full width, cinematic aspect ratio */}
              {hero && (
                <OverlayCard
                  project={hero}
                  index={0}
                  priority
                  aspect="aspect-[16/8] md:aspect-[21/9]"
                />
              )}

              {/* Rest — 2-col grid with tall portrait cards */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {rest.map((p, i) => (
                    <OverlayCard
                      key={p.id}
                      project={p}
                      index={i + 1}
                      aspect="aspect-[4/3] md:aspect-[3/2]"
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
