"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  categories: string[];
  active:     string;
  onSelect:   (c: string) => void;
  counts?:    Record<string, number>;
}

export function CategoryFilter({ categories, active, onSelect, counts = {} }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => {
        const isActive = cat === active;
        return (
          <button key={cat} onClick={() => onSelect(cat)} className={cn("pill", isActive && "active")}>
            {isActive && (
              <motion.span
                layoutId="pill-bg"
                className="absolute inset-0"
                style={{ background: "rgba(255,77,109,0.08)", border: "1px solid var(--coral)" }}
                transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
              />
            )}
            <span className="relative flex items-center gap-1.5">
              {cat}
              {counts[cat] !== undefined && (
                <span className={cn("font-mono text-[0.55rem]", isActive ? "text-[var(--coral-lt)]" : "text-[var(--faint)]")}>
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
