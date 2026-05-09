import type { Metadata } from "next";
import { projects, getAllCategories } from "@/data/projects";
import { WorkList } from "@/components/sections/WorkList";

export const metadata: Metadata = {
  title: "Work",
  description: "RWS Creative portfolio — brand identity, editorial, packaging, motion, and web design.",
};

export default function WorkPage() {
  return (
    <div>
      <div className="gutter pt-14 pb-12 border-b border-[var(--border)]">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-[2px]" style={{ background: "var(--blue)" }} />
          <p className="t-label" style={{ color: "var(--blue)" }}>Portfolio</p>
        </div>
        <h1 className="t-heading text-[var(--white)]">All Work</h1>
      </div>
      <WorkList projects={projects} categories={getAllCategories()} />
    </div>
  );
}
