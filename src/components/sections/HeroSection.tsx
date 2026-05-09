"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const E = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  return (
    <section
      className="relative flex flex-col justify-between overflow-hidden"
      style={{ minHeight: "100svh", background: "var(--black)" }}
    >
      {/* ── Main type block — vertically centred ── */}
      <div className="flex-1 flex flex-col justify-center gutter">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1, ease: E }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-8 h-[2px]" style={{ background: "var(--blue)" }} />
          <p className="t-label" style={{ color: "var(--blue)" }}>
            Independent Design Studio — Canada
          </p>
        </motion.div>

        {/* RWS — white */}
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.45, delay: 0.2, ease: E }}
            className="font-archivo text-[var(--white)] leading-[0.88] select-none"
            style={{ fontSize: "clamp(5rem, 20vw, 22rem)", letterSpacing: "-0.02em" }}
          >
            RWS
          </motion.p>
        </div>

        {/* CREATIVE — blue, same weight, slightly smaller so it reads as one unit */}
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.45, delay: 0.3, ease: E }}
            className="font-archivo leading-[0.88] select-none"
            style={{
              fontSize: "clamp(2.8rem, 11vw, 12rem)",
              letterSpacing: "-0.02em",
              color: "var(--blue)",
            }}
          >
            CREATIVE.
          </motion.p>
        </div>
      </div>

      {/* ── Bottom strip — descriptor left, CTAs right ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5, ease: E }}
        className="gutter pb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
      >
        <p className="t-label text-[var(--gray)]">
          Brand Identity · Editorial · Packaging · Motion · Web
        </p>
        <div className="flex items-center gap-3">
          <Link href="/work" className="btn-blue">
            View Work <ArrowRight size={13} />
          </Link>
          <Link href="/contact" className="btn-outline">
            Get in Touch
          </Link>
        </div>
      </motion.div>

      {/* ── Blue rule — bottom edge ── */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.35, ease: E }}
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
        style={{ background: "var(--blue)" }}
      />
    </section>
  );
}
