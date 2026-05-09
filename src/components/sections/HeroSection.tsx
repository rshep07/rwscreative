"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const EASE = [0.4, 0, 0.2, 1] as const;

export function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: "600px" }}
    >
      {/* ── Left half — text ── */}
      <div
        className="absolute inset-y-0 left-0 flex flex-col justify-end gutter pb-16 md:pb-20"
        style={{ width: "50%", background: "var(--bg)", zIndex: 1 }}
      >
        {/* Studio label */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2, ease: EASE }}
          className="mb-8"
        >
          <span className="coral-tag">Independent Design Studio — Canada</span>
        </motion.div>

        {/* Giant tracked headline */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.35, delay: 0.3, ease: EASE }}
            className="t-hero text-[var(--ink)] leading-none"
          >
            RWS
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.35, delay: 0.38, ease: EASE }}
            className="t-hero text-[var(--coral)] leading-none"
          >
            Creative
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.5, ease: EASE }}
          className="text-[var(--muted)] text-sm leading-relaxed max-w-[280px] mb-8"
        >
          Brand identity, editorial, packaging, and motion — connected by craft and intention.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.58, ease: EASE }}
          className="flex items-center gap-3"
        >
          <Link href="/work" className="btn-coral">
            View Work <ArrowRight size={13} />
          </Link>
          <Link href="/contact" className="btn-ghost-light">
            Start a Project <ArrowUpRight size={13} />
          </Link>
        </motion.div>
      </div>

      {/* ── Coral spine at the split ── */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.35, delay: 0.15, ease: EASE }}
        className="coral-spine"
        style={{ left: "50%", transformOrigin: "top" }}
      />

      {/* ── Right half — image ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1, ease: EASE }}
        className="absolute inset-y-0 right-0 zoom"
        style={{ width: "50%", zIndex: 0 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=90"
          alt="RWS Creative — featured work"
          fill
          sizes="50vw"
          className="object-cover"
          priority
        />
        {/* Subtle dark-left vignette so left spine reads cleanly */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(12,12,12,0.4) 0%, transparent 30%)" }} />
      </motion.div>

      {/* ── Mobile fallback: stacked ── */}
      <style>{`
        @media (max-width: 640px) {
          #hero-left  { width: 100% !important; height: 55% !important; top: 45% !important; justify-content: flex-start !important; padding-top: 2rem !important; }
          #hero-right { width: 100% !important; height: 45% !important; bottom: unset !important; top: 0 !important; }
          .coral-spine { display: none; }
        }
      `}</style>
    </section>
  );
}
