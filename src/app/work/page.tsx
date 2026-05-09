import type { Metadata } from "next";
import { projects, getAllCategories } from "@/data/projects";
import { WorkGrid } from "@/components/sections/WorkGrid";

export const metadata: Metadata = {
  title: "Work",
  description: "Browse the RWS Creative portfolio — brand identity, editorial, packaging, motion, and web design.",
};

export default function WorkPage() {
  const categories = getAllCategories();

  return (
    <div>
      {/* Header */}
      <div className="gutter pt-14 pb-10 border-b border-[var(--color-border)]">
        <p className="eyebrow c-accent mb-3">Portfolio</p>
        <h1 className="h-xl c-ink mb-4">All Work</h1>
        <p className="c-muted max-w-lg text-[0.9375rem] leading-relaxed">
          A selection of projects across brand identity, editorial design, packaging, motion graphics, web design, and photography.
        </p>
      </div>

      {/* Filterable grid */}
      <WorkGrid projects={projects} categories={categories} />
    </div>
  );
}
