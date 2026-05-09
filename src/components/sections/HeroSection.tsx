"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[var(--black)]">

      {/* ── The centrepiece: RWS fills the screen ── */}
      <div className="relative z-10 gutter">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="t-display text-[var(--white)] leading-none select-none"
          >
            RWS
          </motion.h1>
        </div>

        {/* CREATIVE — slightly smaller, blue */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="t-display leading-none select-none"
            style={{ color: "var(--blue)", fontSize: "clamp(2.5rem, 11vw, 14rem)" }}
          >
            CREATIVE.
          </motion.h1>
        </div>
      </div>

      {/* ── Bottom bar: descriptor + CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.45, ease: [0.16,1,0.3,1] }}
        className="absolute bottom-10 left-0 right-0 gutter flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 z-10"
      >
        <p className="t-label text-[var(--gray)] max-w-xs leading-relaxed">
          Independent graphic design studio — Canada.<br />
          Brand identity · Editorial · Packaging · Motion
        </p>
        <div className="flex items-center gap-3">
          <Link href="/work" className="btn-blue">
            View Work <ArrowDownRight size={14} />
          </Link>
          <Link href="/contact" className="btn-outline">
            Get in Touch
          </Link>
        </div>
      </motion.div>

      {/* ── Animated blue horizontal rule ── */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.16,1,0.3,1] }}
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left z-10"
        style={{ background: "var(--blue)" }}
      />
    </section>
  );
}
