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
    <div>
      <div className="bg-[var(--black)] text-[var(--white)] gutter pt-16 pb-14">
        <span className="chip-dark mb-4 inline-flex">Portfolio</span>
        <h1 className="d-xl text-[var(--white)] mb-4">All Work</h1>
        <p className="text-[var(--gray-mid)] max-w-md leading-relaxed">
          Brand identity, editorial, packaging, motion, and web — each project treated as its own problem worth solving properly.
        </p>
      </div>
      <WorkGrid projects={projects} categories={categories} />
    </div>
  );
}
