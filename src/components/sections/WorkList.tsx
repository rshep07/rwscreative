"use client";
import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectRow } from "@/components/ui/ProjectRow";
import { CategoryFilter } from "@/components/ui/CategoryFilter";
import type { Project } from "@/types";

export function WorkList({ projects, categories }: { projects: Project[]; categories: string[] }) {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => active === "All" ? projects : projects.filter((p) => p.category === active),
    [active, projects]
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: projects.length };
    projects.forEach(p => { c[p.category] = (c[p.category] ?? 0) + 1; });
    return c;
  }, [projects]);

  return (
    <div>
      {/* Filter bar */}
      <div className="gutter py-8 border-b border-[var(--border)]">
        <CategoryFilter categories={categories} active={active} onSelect={setActive} counts={counts} />
      </div>

      {/* Top border of list */}
      <div className="border-t border-[var(--border)]">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div key={p.id} layout
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}>
              <ProjectRow project={p} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="gutter py-24 text-center">
            <p className="t-sub text-[var(--gray)]">Nothing here yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
