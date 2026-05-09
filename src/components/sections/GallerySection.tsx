"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Expand, X, ChevronLeft, ChevronRight } from "lucide-react";

export function GallerySection({ images, title }: { images: string[]; title: string }) {
  const [open, setOpen] = useState(false);
  const [idx,  setIdx]  = useState(0);
  const prev = () => setIdx(i => (i - 1 + images.length) % images.length);
  const next = () => setIdx(i => (i + 1) % images.length);

  return (
    <>
      <section className="gutter pb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-6 h-[2px]" style={{ background: "var(--blue)" }} />
          <p className="t-label" style={{ color: "var(--blue)" }}>Gallery — {images.length} images</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <motion.button key={i} onClick={() => { setIdx(i); setOpen(true); }}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.2, delay: i * 0.05 }}
              className={`zoom relative group w-full bg-[var(--dim)] overflow-hidden ${i === 0 ? "sm:col-span-2 aspect-[16/7]" : "aspect-[4/3]"}`}
              aria-label={`Open image ${i+1}`}>
              <Image unoptimized src={src} alt={`${title} ${i+1}`} fill sizes="(max-width:640px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-150 flex items-center justify-center">
                <Expand size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[200] flex items-center justify-center" style={{ background: "rgba(10,10,10,0.97)" }}
            onClick={() => setOpen(false)}>
            <button onClick={() => setOpen(false)} className="absolute top-5 right-5 text-[var(--gray)] hover:text-[var(--white)] transition-colors p-2">
              <X size={22} />
            </button>
            <p className="absolute top-6 left-1/2 -translate-x-1/2 t-label text-[var(--gray)]">{idx+1} / {images.length}</p>
            {images.length > 1 && <>
              <button onClick={e => { e.stopPropagation(); prev(); }} className="absolute left-4 md:left-8 p-3 text-[var(--gray)] hover:text-[var(--blue)] transition-colors">
                <ChevronLeft size={26} />
              </button>
              <button onClick={e => { e.stopPropagation(); next(); }} className="absolute right-4 md:right-8 p-3 text-[var(--gray)] hover:text-[var(--blue)] transition-colors">
                <ChevronRight size={26} />
              </button>
            </>}
            <motion.div key={idx} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }} transition={{ duration: 0.15 }}
              className="relative w-full max-w-5xl aspect-[4/3] mx-14 md:mx-28" onClick={e => e.stopPropagation()}>
              <Image src={images[idx]} alt={`Image ${idx+1}`} fill sizes="95vw" className="object-contain" priority />
            </motion.div>
            {images.length > 1 && (
              <div className="absolute bottom-6 flex gap-1.5">
                {images.map((_,i) => (
                  <div key={i} className="h-[2px] rounded-full transition-all duration-150"
                    style={{ width: i===idx ? "1.5rem" : "0.4rem", background: i===idx ? "var(--blue)" : "var(--dim)" }} />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
