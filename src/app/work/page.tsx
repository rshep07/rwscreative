import type { Metadata } from "next";
import { projects, getAllCategories } from "@/data/projects";
import { WorkGrid } from "@/components/sections/WorkGrid";

export const metadata: Metadata = {
  title: "Work",
  description: "RWS Creative — brand identity, editorial, packaging, motion, and web design.",
};

export default function WorkPage() {
  return (
    <div>
      <div className="gutter pt-16 pb-14 border-b border-[var(--border)]">
        <span className="coral-tag mb-4 inline-flex">Portfolio</span>
        <h1 className="t-xl text-[var(--ink)] mb-4">All Work</h1>
        <p className="text-[var(--muted)] max-w-md text-sm leading-relaxed tracking-wide">
          Each project treated as its own problem worth solving properly.
        </p>
      </div>
      <WorkGrid projects={projects} categories={getAllCategories()} />
    </div>
  );
}
