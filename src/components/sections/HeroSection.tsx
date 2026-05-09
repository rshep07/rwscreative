"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY      = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textFade  = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const textY     = useTransform(scrollYProgress, [0, 0.6], ["0%", "-8%"]);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-end overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 z-0 scale-110">
        <Image
          src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1800&q=90"
          alt="RWS Creative studio"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
      </motion.div>

      {/* Hero content */}
      <motion.div
        style={{ opacity: textFade, y: textY }}
        className="relative z-10 gutter pb-20 md:pb-28 w-full"
      >
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow c-accent mb-5"
        >
          RWS Creative — Independent Design Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="h-hero text-white mb-8 max-w-4xl"
        >
          Craft over<br />
          <em className="c-accent not-italic">everything.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/65 text-lg leading-relaxed max-w-md mb-10"
        >
          Brand identity, editorial, packaging, and motion — connected by a commitment to ideas that outlast trends.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-3"
        >
          <Link href="/work" className="btn bg-white text-[#111010] hover:bg-[var(--color-accent)]">
            View Work <ArrowDown size={13} />
          </Link>
          <Link href="/contact"
            className="btn border border-white/35 text-white
                       hover:border-white hover:bg-white/10 transition-all"
          >
            Start a Project <ArrowUpRight size={13} />
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: textFade }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.7 }}
        className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="eyebrow text-white/30 [writing-mode:vertical-lr] text-[0.55rem]">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.9, ease: "easeInOut" }}
        >
          <ArrowDown size={13} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
