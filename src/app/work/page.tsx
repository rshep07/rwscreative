import type { Metadata } from "next";
import { projects, getAllCategories } from "@/data/projects";
import { EditorialGrid } from "@/components/ui/EditorialGrid";

export const metadata: Metadata = {
  title: "Work",
  description: "RWS Creative portfolio — brand identity, editorial, packaging, motion, and web design.",
};

export default function WorkPage() {
  return (
    <div>
      {/* Header */}
      <div className="gutter pt-14 pb-0">
        <div className="flex items-end justify-between pb-5 border-b border-[var(--rule)]">
          <div>
            <p className="f-mono text-[var(--mid)] mb-2">{projects.length.toString().padStart(2,"0")} Projects</p>
            <h1 className="f-title text-[var(--canvas)]">Work</h1>
          </div>
          <p className="f-mono text-[var(--mid)] hidden md:block pb-1">rwscreative.ca/work</p>
        </div>
      </div>

      <EditorialGrid projects={projects} categories={getAllCategories()} />
    </div>
  );
}
