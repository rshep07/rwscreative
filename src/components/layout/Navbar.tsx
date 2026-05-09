"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/work",    label: "Work" },
  { href: "/about",   label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname  = usePathname();
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
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ height: "var(--nav-h)" }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#1C1C1C]" : "bg-transparent"
        )}
      >
        <div className="gutter h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-['Cormorant_Garamond',Georgia,serif] text-2xl font-light text-[var(--ink)] hover:text-[var(--lime)] transition-colors duration-300 tracking-tight">
            RWS<span className="text-[var(--lime)]">.</span>
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-10">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "label ul-link transition-colors duration-300",
                  pathname.startsWith(l.href) ? "text-[var(--lime)]" : "text-[var(--muted)] hover:text-[var(--ink)]"
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-lime ml-4">
              Let's Talk
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }}
              className="block w-6 h-px bg-[var(--ink)]"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className="block w-6 h-px bg-[var(--ink)]"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }}
              className="block w-6 h-px bg-[var(--ink)]"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[var(--bg)] flex flex-col justify-center gutter"
          >
            <nav className="flex flex-col gap-3">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={l.href}
                    className="font-['Cormorant_Garamond',Georgia,serif] text-6xl font-light text-[var(--ink)] hover:text-[var(--lime)] transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-12"
            >
              <a href="mailto:hello@rwscreative.ca" className="label text-[var(--muted)] hover:text-[var(--lime)] transition-colors">
                hello@rwscreative.ca
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
