import type { Metadata } from "next";
import { projects, getAllCategories } from "@/data/projects";
import { WorkGrid } from "@/components/sections/WorkGrid";

export const metadata: Metadata = {
  title: "Work",
  description: "RWS Creative portfolio — brand identity, editorial, packaging, motion, and web design.",
};

export default function WorkPage() {
  return (
    <div>
      <div className="gutter pt-14 pb-10 border-b border-[var(--border)]">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-[2px]" style={{ background: "var(--blue)" }} />
          <p className="t-label" style={{ color: "var(--blue)" }}>Portfolio</p>
        </div>
        <h1 className="font-archivo text-5xl md:text-7xl uppercase tracking-tight text-[var(--white)] leading-none">
          All Work
        </h1>
      </div>
      <WorkGrid projects={projects} categories={getAllCategories()} />
    </div>
  );
}
