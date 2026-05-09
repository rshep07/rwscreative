"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY   = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade   = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const textY  = useTransform(scrollYProgress, [0, 0.55], ["0%", "-8%"]);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-end overflow-hidden">
      {/* Parallax photo */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 z-0 scale-[1.08]">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=90"
          alt="RWS Creative studio"
          fill sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Two-layer gradient: heavy at bottom for type legibility, softer at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: fade, y: textY }}
        className="relative z-10 gutter pb-16 md:pb-24 w-full"
      >
        {/* Chip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7"
        >
          <span className="chip-dark">Independent Design Studio — Canada</span>
        </motion.div>

        {/* Big headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="d-hero text-white mb-4 max-w-5xl"
        >
          Bold work.
          <br />
          <span style={{ color: "var(--teal)" }}>Built to last.</span>
        </motion.h1>

        {/* Subline + CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-8"
        >
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-sm">
            Brand identity, editorial, packaging, and motion — connected by craft and intention.
          </p>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link href="/work" className="btn-teal">
              View Work <ArrowDownRight size={14} />
            </Link>
            <Link href="/contact" className="btn-outline-white">
              Start a Project <ArrowUpRight size={13} />
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 right-[var(--g)] w-px h-14 bg-white/20 origin-bottom z-10"
      />
    </section>
  );
}
