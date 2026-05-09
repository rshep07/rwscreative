"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { useRef } from "react";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const fade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const up   = useTransform(scrollYProgress, [0, 0.5], ["0%", "-10%"]);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[var(--bg)]">

      {/* Big background number — decorative */}
      <div
        className="absolute right-[-2vw] bottom-[8vh] select-none pointer-events-none"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(16rem, 40vw, 52rem)",
          fontWeight: 300,
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: "1px #1C1C1C",
          zIndex: 0,
        }}
      >
        RWS
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity: fade, y: up }}
        className="relative z-10 gutter flex flex-col justify-end flex-1 pb-16 md:pb-20 pt-[var(--nav-h)]"
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="label text-[var(--lime)] mb-6 md:mb-8"
        >
          Independent Design Studio — Canada
        </motion.p>

        {/* Giant headline */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="display text-[var(--ink)]"
          >
            RWS
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10 md:mb-14">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
            className="display text-[var(--lime)] italic"
          >
            Creative.
          </motion.h1>
        </div>

        {/* Bottom row — tagline + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <p className="text-[var(--muted)] text-base md:text-lg leading-relaxed max-w-sm">
            Brand identity, editorial, packaging, and motion. Built to be remembered.
          </p>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link href="/work" className="btn-lime">
              View Work <ArrowDownRight size={14} />
            </Link>
            <Link href="/contact" className="btn-ghost-white">
              Start a Project
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-[var(--g)] w-px h-16 bg-[var(--border)] origin-bottom"
      />
    </section>
  );
}
