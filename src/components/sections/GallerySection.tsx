"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lightbox } from "@/components/ui/Lightbox";
import { Expand } from "lucide-react";

interface GallerySectionProps {
  images: string[];
  title:  string;
}

export function GallerySection({ images, title }: GallerySectionProps) {
  const [open,  setOpen]  = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i: number) => { setIndex(i); setOpen(true); };
  const close  = ()          => setOpen(false);
  const prev   = ()          => setIndex((i) => (i - 1 + images.length) % images.length);
  const next   = ()          => setIndex((i) => (i + 1) % images.length);

  return (
    <>
      <section className="gutter pb-20">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="accent-line" />
          <p className="eyebrow c-accent">Gallery</p>
          <span className="eyebrow c-faint">— {images.length} images</span>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <motion.button
              key={i}
              onClick={() => openAt(i)}
              aria-label={`Open image ${i + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={`
                relative img-zoom group w-full
                bg-[var(--color-border)] overflow-hidden
                ${i === 0 ? "sm:col-span-2 aspect-[16/7]" : "aspect-[4/3]"}
              `}
            >
              <Image
                src={src}
                alt={`${title} — image ${i + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
              {/* Hover state */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30
                              transition-colors duration-300 flex items-center justify-center">
                <Expand
                  size={20}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <Lightbox
        images={images}
        index={index}
        open={open}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </>
  );
}
