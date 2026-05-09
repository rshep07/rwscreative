// ─────────────────────────────────────────────────────────────
// PORTFOLIO TYPES — rwscreative.ca
// All fields map directly to future Supabase `projects` columns.
// Migration path: replace helpers in data/projects.ts with
// `supabase.from('projects').select(...)` calls.
// ─────────────────────────────────────────────────────────────

export type ProjectCategory =
  | "Branding"
  | "Editorial"
  | "Motion"
  | "Web Design"
  | "Packaging"
  | "Photography";

export type FilterCategory = ProjectCategory | "All";

export interface ExternalLink {
  label: string;
  url: string;
}

export interface DownloadLink {
  label: string;
  url: string;           // Supabase Storage public URL or /public path
  filename?: string;
}

export interface Project {
  // ── Identifiers ──────────────────────────────────────────
  id: string;            // UUID — ready for Supabase primary key
  slug: string;          // URL slug, e.g. "luminary-brand-identity"
  title: string;

  // ── Taxonomy ─────────────────────────────────────────────
  category: ProjectCategory;
  tags?: string[];

  // ── Copy ─────────────────────────────────────────────────
  shortDescription: string;   // ≤140 chars — used in grid cards
  fullCaseStudy: string;      // Markdown-ish string for case study

  // ── Credits ──────────────────────────────────────────────
  role: string;
  client: string;
  year: number;

  // ── Media ─────────────────────────────────────────────────
  thumbnailImage: string;     // Grid card image URL
  heroImage: string;          // Full-bleed case study hero URL
  galleryImages: string[];    // Ordered array for lightbox

  // ── Links ────────────────────────────────────────────────
  externalLinks?: ExternalLink[];
  downloadLinks?: DownloadLink[];

  // ── Meta ─────────────────────────────────────────────────
  featured?: boolean;
  publishedAt?: string;       // ISO date string
}
