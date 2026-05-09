"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images:  string[];
  index:   number;
  open:    boolean;
  onClose: () => void;
  onPrev:  () => void;
  onNext:  () => void;
}

export function Lightbox({ images, index, open, onClose, onPrev, onNext }: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, handleKey]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[300] bg-black/97 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close lightbox"
            className="absolute top-5 right-5 z-10 text-white/60 hover:text-white transition-colors p-2"
          >
            <X size={22} />
          </button>

          {/* Counter */}
          <p className="absolute top-6 left-1/2 -translate-x-1/2 eyebrow text-white/35 z-10">
            {index + 1} / {images.length}
          </p>

          {/* Prev */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              aria-label="Previous image"
              className="absolute left-3 md:left-8 z-10 p-3 text-white/50 hover:text-white
                         hover:bg-white/10 rounded-full transition-all duration-200"
            >
              <ChevronLeft size={26} />
            </button>
          )}

          {/* Image */}
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{   opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl aspect-[4/3] mx-14 md:mx-28"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index]}
              alt={`Image ${index + 1} of ${images.length}`}
              fill
              sizes="95vw"
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              aria-label="Next image"
              className="absolute right-3 md:right-8 z-10 p-3 text-white/50 hover:text-white
                         hover:bg-white/10 rounded-full transition-all duration-200"
            >
              <ChevronRight size={26} />
            </button>
          )}

          {/* Dot indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full bg-white transition-all duration-300 ${
                    i === index ? "w-5 opacity-90" : "w-1.5 opacity-25"
                  }`}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
