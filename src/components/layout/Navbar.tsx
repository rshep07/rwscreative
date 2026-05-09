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
  const pathname  = usePathname();
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
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
      <header
        style={{ height: "var(--nav-h)" }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-200",
          scrolled || open
            ? "bg-[var(--bg)]/95 backdrop-blur-md border-b border-[var(--border)]"
            : "bg-transparent"
        )}
      >
        <div className="gutter h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-raleway font-extralight text-lg tracking-[0.2em] uppercase text-[var(--ink)] hover:text-[var(--coral)] transition-colors duration-150"
          >
            RWS<span className="text-[var(--coral)]">.</span>
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-10">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "label ul-link transition-colors duration-150",
                  pathname.startsWith(l.href) ? "text-[var(--coral)]" : "text-[var(--muted)] hover:text-[var(--ink)]"
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-coral ml-4">
              Start a Project
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center gap-[5px] p-2"
            aria-label={open ? "Close" : "Menu"}
          >
            <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
              transition={{ duration: 0.15 }}
              className="block w-5 h-px bg-[var(--ink)]" />
            <motion.span animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
              transition={{ duration: 0.15 }}
              className="block w-5 h-px bg-[var(--ink)]" />
            <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
              transition={{ duration: 0.15 }}
              className="block w-5 h-px bg-[var(--ink)]" />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 bg-[var(--bg)] flex flex-col justify-center gutter"
          >
            {/* Coral spine on left */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--coral)]" />

            <nav className="flex flex-col gap-3 pl-8">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.18 }}
                >
                  <Link href={l.href}
                    className="t-lg text-[var(--ink)] hover:text-[var(--coral)] transition-colors duration-150 block">
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }}
              className="mt-12 pl-8"
            >
              <a href="mailto:hello@rwscreative.ca" className="label text-[var(--muted)] hover:text-[var(--coral)] transition-colors">
                hello@rwscreative.ca
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
