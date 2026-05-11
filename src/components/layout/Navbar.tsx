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
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 10);
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
          (solid || open) ? "bg-[var(--ink)]/95 backdrop-blur-sm border-b border-[var(--rule)]" : "bg-transparent"
        )}
      >
        <div className="gutter h-full flex items-center justify-between">
          {/* Wordmark */}
          <Link href="/"
            className="font-display text-base tracking-tight uppercase text-[var(--canvas)] hover:text-[var(--accent)] transition-colors duration-150">
            RWS<span style={{ color: "var(--accent)" }}>.</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {LINKS.map(l => (
              <Link key={l.href} href={l.href}
                className={cn(
                  "f-mono transition-colors duration-150",
                  pathname.startsWith(l.href) ? "text-[var(--accent)]" : "text-[var(--mid)] hover:text-[var(--canvas)]"
                )}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary ml-4">
              Start a Project
            </Link>
          </div>

          {/* Mobile */}
          <button onClick={() => setOpen(v => !v)} className="md:hidden p-2" aria-label="Menu">
            <div className="flex flex-col gap-[5px]">
              <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} transition={{ duration: 0.15 }}
                className="block w-5 h-px bg-[var(--canvas)]" />
              <motion.span animate={{ opacity: open ? 0 : 1 }} transition={{ duration: 0.1 }}
                className="block w-5 h-px bg-[var(--canvas)]" />
              <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} transition={{ duration: 0.15 }}
                className="block w-5 h-px bg-[var(--canvas)]" />
            </div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 bg-[var(--ink)] flex flex-col justify-center gutter">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--accent)]" />
            <nav className="flex flex-col gap-1 pl-8">
              {LINKS.map((l, i) => (
                <motion.div key={l.href} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.15 }}>
                  <Link href={l.href}
                    className="f-title text-[var(--canvas)] hover:text-[var(--accent)] transition-colors duration-150 block">
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="f-mono text-[var(--mid)] mt-12 pl-8">
              hello@rwscreative.ca
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
