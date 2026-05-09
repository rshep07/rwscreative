"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import type { Project } from "@/types";

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  /* Cursor-following image */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 180, damping: 22 });
  const sy = useSpring(my, { stiffness: 180, damping: 22 });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(e.clientX - r.left - 160);
    my.set(e.clientY - r.top  - 110);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: index * 0.06, ease: [0.16,1,0.3,1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={onMove}
      className="relative border-b border-[var(--border)] group overflow-visible"
      style={{ background: hovered ? "var(--dim)" : "transparent", transition: "background 150ms" }}
    >
      <Link href={`/work/${project.slug}`}
        className="gutter flex items-center justify-between gap-6 py-6 md:py-8">

        {/* Number */}
        <span className="t-label text-[var(--gray)] w-8 flex-shrink-0 select-none">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Title + meta */}
        <div className="flex-1 min-w-0">
          <h3
            className="t-project leading-none truncate transition-colors duration-150"
            style={{ color: hovered ? "var(--blue)" : "var(--white)" }}
          >
            {project.title}
          </h3>
          <div className="flex items-center gap-4 mt-2">
            <span className="t-label text-[var(--gray)]">{project.category}</span>
            <span className="t-label text-[var(--border)]">—</span>
            <span className="t-label text-[var(--gray)]">{project.year}</span>
          </div>
        </div>

        {/* Arrow */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 8 }}
          transition={{ duration: 0.15 }}
          className="flex-shrink-0"
        >
          <div className="w-10 h-10 flex items-center justify-center"
            style={{ background: "var(--blue)" }}>
            <ArrowUpRight size={18} className="text-[var(--black)]" />
          </div>
        </motion.div>
      </Link>

      {/* Floating image — follows cursor */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="img"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            style={{ left: sx, top: sy, pointerEvents: "none", zIndex: 50 }}
            className="absolute w-72 h-44 overflow-hidden"
          >
            <Image
              src={project.thumbnailImage}
              alt={project.title}
              fill
              sizes="288px"
              className="object-cover"
            />
            {/* Blue corner accent */}
            <div className="absolute bottom-0 left-0 w-8 h-[2px]" style={{ background: "var(--blue)" }} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
