import type { Metadata } from "next";
import { projects, getAllCategories } from "@/data/projects";
import { WorkGrid } from "@/components/sections/WorkGrid";

export const metadata: Metadata = {
  title: "Work",
  description: "RWS Creative portfolio — brand identity, editorial, packaging, motion, and web design.",
};

export default function WorkPage() {
  const categories = getAllCategories();
  return (
    <div className="nav-pt">
      <div className="gutter pt-14 pb-12 border-b border-[var(--border)]">
        <p className="label text-[var(--lime)] mb-3">Portfolio</p>
        <h1 className="headline text-[var(--ink)] mb-4">All Work</h1>
        <p className="text-[var(--muted)] max-w-md leading-relaxed">
          Brand identity, editorial, packaging, motion, and web — each project treated as its own problem worth solving properly.
        </p>
      </div>
      <WorkGrid projects={projects} categories={categories} rowMode />
    </div>
  );
}
