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
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
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
          "fixed inset-x-0 top-0 z-50 transition-all duration-150",
          scrolled || open
            ? "bg-[var(--black)]/95 backdrop-blur-sm border-b border-[var(--border)]"
            : "bg-transparent"
        )}
      >
        <div className="gutter h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/"
            className="font-archivo text-lg tracking-tight uppercase text-[var(--white)] hover:text-[var(--blue)] transition-colors duration-150">
            RWS<span className="text-[var(--blue)]">.</span>
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-10">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href}
                className={cn(
                  "t-label ul-link transition-colors duration-150",
                  pathname.startsWith(l.href) ? "text-[var(--blue)]" : "text-[var(--gray)] hover:text-[var(--white)]"
                )}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-blue ml-4">Start a Project</Link>
          </nav>

          {/* Mobile burger */}
          <button onClick={() => setOpen(v => !v)} className="md:hidden p-2 flex flex-col justify-center gap-[5px]"
            aria-label={open ? "Close" : "Menu"}>
            <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} transition={{ duration: 0.15 }}
              className="block w-5 h-px bg-[var(--white)]" />
            <motion.span animate={{ opacity: open ? 0 : 1 }} transition={{ duration: 0.1 }}
              className="block w-5 h-px bg-[var(--white)]" />
            <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} transition={{ duration: 0.15 }}
              className="block w-5 h-px bg-[var(--white)]" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 bg-[var(--black)] flex flex-col justify-center gutter"
          >
            {/* Blue line — left edge accent */}
            <div className="absolute left-0 inset-y-0 w-[3px] bg-[var(--blue)]" />

            <nav className="flex flex-col gap-2 pl-8">
              {LINKS.map((l, i) => (
                <motion.div key={l.href}
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.15 }}>
                  <Link href={l.href}
                    className="t-heading text-[var(--white)] hover:text-[var(--blue)] transition-colors duration-150 block">
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="mt-12 pl-8">
              <a href="mailto:hello@rwscreative.ca" className="t-label text-[var(--gray)] hover:text-[var(--blue)] transition-colors">
                hello@rwscreative.ca
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
