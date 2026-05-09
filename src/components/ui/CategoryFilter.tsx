"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function CategoryFilter({ categories, active, onSelect, counts = {} }:
  { categories: string[]; active: string; onSelect: (c: string) => void; counts?: Record<string, number> }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => {
        const isActive = cat === active;
        return (
          <button key={cat} onClick={() => onSelect(cat)} className={cn("pill", isActive && "active")}>
            {isActive && (
              <motion.span layoutId="pill-bg"
                className="absolute inset-0" style={{ background: "var(--blue10)" }}
                transition={{ duration: 0.15 }} />
            )}
            <span className="relative flex items-center gap-1.5">
              {cat}
              {counts[cat] !== undefined && (
                <span className={cn("font-mono text-[0.55rem]", isActive ? "text-[var(--blue)]" : "text-[var(--gray)]")}>
                  {counts[cat]}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}
