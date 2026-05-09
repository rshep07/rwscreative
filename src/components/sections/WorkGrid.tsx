"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OverlayCard } from "@/components/ui/ProjectCard";
import { CategoryFilter } from "@/components/ui/CategoryFilter";
import type { Project } from "@/types";

export function WorkGrid({ projects, categories }: { projects: Project[]; categories: string[] }) {
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

  return (
    <div className="gutter py-12">
      {/* Filter bar */}
      <div className="mb-10">
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
              <p className="font-archivo text-2xl uppercase tracking-tight text-[var(--gray)]">
                Nothing here yet
              </p>
            </div>
          ) : (
            /* Consistent 2-col grid — all projects same size, all images visible immediately */
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filtered.map((p, i) => (
                <OverlayCard
                  key={p.id}
                  project={p}
                  index={i}
                  priority={i < 2}
                  aspect="aspect-[4/3]"
                />
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
