"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/work",    label: "Work"    },
  { href: "/about",   label: "About"   },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ height: "var(--nav-h)" }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-400",
          scrolled
            ? "bg-[#F7F7F5]/95 backdrop-blur-sm border-b border-[var(--border)]"
            : "bg-transparent"
        )}
      >
        <div className="gutter h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-syne font-extrabold text-xl tracking-tight text-[var(--black)] hover:text-[var(--teal)] transition-colors duration-300"
          >
            RWS<span className="text-[var(--teal)]">.</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "tag ul-link transition-colors duration-300",
                  pathname.startsWith(l.href)
                    ? "text-[var(--teal)]"
                    : "text-[var(--gray-mid)] hover:text-[var(--black)]"
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-teal ml-2">
              Let's Talk
            </Link>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
              className="block h-[1.5px] w-6 bg-[var(--black)] origin-center" />
            <motion.span animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
              className="block h-[1.5px] w-6 bg-[var(--black)]" />
            <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
              className="block h-[1.5px] w-6 bg-[var(--black)] origin-center" />
          </button>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{   opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[var(--white)] flex flex-col justify-center gutter"
          >
            <nav className="flex flex-col gap-2">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link href={l.href}
                    className="font-syne font-extrabold text-5xl text-[var(--black)] hover:text-[var(--teal)] transition-colors duration-300 leading-tight">
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }} className="mt-12">
              <a href="mailto:hello@rwscreative.ca"
                className="tag text-[var(--gray-mid)] hover:text-[var(--teal)] transition-colors">
                hello@rwscreative.ca
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
