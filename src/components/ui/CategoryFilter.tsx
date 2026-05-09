"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  active:     string;
  onSelect:   (c: string) => void;
  counts?:    Record<string, number>;
}

export function CategoryFilter({ categories, active, onSelect, counts = {} }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => {
        const isActive = cat === active;
        return (
          <button key={cat} onClick={() => onSelect(cat)} className={cn("pill", isActive && "active")}>
            {isActive && (
              <motion.span
                layoutId="pill-fill"
                className="absolute inset-0"
                style={{ background: "var(--teal)" }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
            <span className="relative flex items-center gap-1.5">
              {cat}
              {counts[cat] !== undefined && (
                <span className={cn("font-mono text-[0.58rem] tabular-nums", isActive ? "text-white/60" : "text-[var(--gray-lt)]")}>
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
