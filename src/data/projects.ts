// ─────────────────────────────────────────────────────────────
// PROJECT DATA — rwscreative.ca
// Version 1: local TypeScript file (no CMS needed yet).
//
// To add a project: copy an entry below, give it a new id/slug,
// and fill in your content. Images can be:
//   - Unsplash URLs (demo)
//   - Supabase Storage public URLs (production)
//   - /public/images/... local paths
//
// To migrate to Supabase DB later:
//   1. Create `projects` table matching the Project interface
//   2. Replace these arrays with supabase.from('projects') queries
//   3. Move images to Supabase Storage bucket
// ─────────────────────────────────────────────────────────────

import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "rws-001",
    slug: "luminary-brand-identity",
    title: "Luminary Brand Identity",
    category: "Branding",
    tags: ["Identity", "Logo System", "Brand Guidelines", "Print"],
    shortDescription:
      "A complete brand identity system for a luxury wellness studio built around the concept of inner radiance.",
    fullCaseStudy: `## The Brief

Luminary came to us as a nascent wellness brand with a clear philosophy but no visual language. They needed a complete identity that could communicate luxury, approachability, and transformational wellness simultaneously.

## The Challenge

Wellness branding is a crowded space dominated by either sterile clinical aesthetics or overly precious spa tropes. Luminary needed to feel genuinely elevated without any of the clichés.

## The Process

We began with an extensive discovery phase — interviewing founders, visiting the physical space, and auditing 60+ competitor brands. From this, we identified a key whitespace: warmth at scale. Most luxury wellness brands feel cold; most warm brands feel small.

The logomark draws from the geometry of a rising sun abstracted into a minimal letterform. The wordmark pairs a custom-drawn serif with tight, precise tracking.

## The System

The final deliverable included primary and secondary logotypes, a custom colour palette of seven tones, typography guidelines, photography art direction, print collateral templates, and a full digital brand guidelines document.

## The Outcome

Luminary launched to sold-out waitlists within three weeks of opening. The brand was featured in Wallpaper* Magazine's annual design round-up.`,
    role: "Creative Director & Brand Designer",
    client: "Luminary Wellness",
    year: 2024,
    thumbnailImage: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&q=85",
    heroImage: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=1800&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&q=85",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=85",
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1200&q=85",
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1200&q=85",
    ],
    externalLinks: [{ label: "Live Site", url: "https://example.com" }],
    featured: true,
    publishedAt: "2024-09-01",
  },
  {
    id: "rws-002",
    slug: "offcut-magazine",
    title: "Offcut Magazine",
    category: "Editorial",
    tags: ["Print", "Editorial Design", "Typography", "Art Direction"],
    shortDescription:
      "Editorial design and art direction for Offcut, an independent quarterly celebrating material culture and craft.",
    fullCaseStudy: `## The Brief

Offcut is an independent quarterly focused on material culture — the stories behind the things we make and use. As their design partner from Issue 01, we shaped both the visual identity and the evolving design language of each issue.

## Design Philosophy

We wanted Offcut to feel like the physical world it writes about — textured, tactile, imperfect in the best ways. The grid system deliberately breaks itself: columns shift, bleed images interrupt spreads, pull quotes collide with photography.

## Typography

We paired Canela Display for its warmth and editorial credibility with a modified version of Founders Grotesk for body text. Caption work uses a strict monospaced system — a nod to the technical documentation aesthetics that inspire the magazine's content.

## Production

All issues are designed for Risograph and offset hybrid printing. The constraints of Risograph production directly influenced layout decisions — deliberate overprints, misregistration treated as a design feature rather than an error.`,
    role: "Art Director",
    client: "Offcut Publishing",
    year: 2024,
    thumbnailImage: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=85",
    heroImage: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1800&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85",
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&q=85",
      "https://images.unsplash.com/photo-1533035336347-4e10f4493f93?w=1200&q=85",
    ],
    downloadLinks: [{ label: "Issue 01 Lookbook", url: "#", filename: "offcut-01-lookbook.pdf" }],
    featured: true,
    publishedAt: "2024-06-15",
  },
  {
    id: "rws-003",
    slug: "forma-packaging",
    title: "Forma Packaging System",
    category: "Packaging",
    tags: ["Packaging", "Sustainable", "Structural Design"],
    shortDescription:
      "Sustainable packaging redesign for a minimal home goods brand — zero plastic, full shelf presence, D&AD awarded.",
    fullCaseStudy: `## The Brief

Forma sells beautifully designed home objects. Their existing packaging was functional but invisible — generic brown boxes with a label. As they moved into premium retail, they needed packaging worthy of the product inside.

## Constraint as Inspiration

The brief had one hard constraint: no virgin plastic, anywhere. This became our creative engine rather than a limitation. Every structural and graphic decision was made through the lens of material responsibility.

## Structural Design

Working with a packaging engineer, we developed a single-material kraft construction that assembles without adhesive. The fold pattern is derived from traditional origami — a functional geometry that becomes decorative when partially assembled.

## Results

The final system is 100% plastic-free with a 40% reduction in material use versus previous packaging. It won the 2024 D&AD Packaging Design pencil and is now stocked in Selfridges, Dover Street Market, and MoMA Design Store.`,
    role: "Packaging & Structural Designer",
    client: "Forma Home",
    year: 2023,
    thumbnailImage: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=85",
    heroImage: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1800&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1609360028460-e5c1d97c3e08?w=1200&q=85",
      "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?w=1200&q=85",
      "https://images.unsplash.com/photo-1600003263720-95b45a7fa56c?w=1200&q=85",
    ],
    featured: false,
    publishedAt: "2023-11-20",
  },
  {
    id: "rws-004",
    slug: "northlight-digital",
    title: "Northlight Digital Experience",
    category: "Web Design",
    tags: ["Web Design", "UI/UX", "Motion", "Interaction Design"],
    shortDescription:
      "A scroll-driven website for an architecture studio — where white space does the heavy lifting.",
    fullCaseStudy: `## The Brief

Northlight Architecture wanted a website that embodied their design ethos: restrained, precise, luminous. Existing architecture portfolio sites tend to be either gallery-heavy catalogues or overly minimal to the point of invisibility.

## Concept: Controlled Light

The entire visual system is built around the control of white space and typographic weight — mirroring how Northlight controls light in their physical spaces. Dark elements are sparse and deliberate. White breathes.

## Key Interactions

Projects reveal through a horizontal crop that expands as you scroll past them. The cursor transforms into a project indicator on hover. Gallery images stack in a physics-based pile that scatters on scroll.

## Technical Approach

Built in Next.js with Framer Motion for scroll-linked animations. Images served via Supabase Storage with automatic WebP conversion. Lighthouse performance score: 98.`,
    role: "UI/UX Designer & Creative Developer",
    client: "Northlight Architecture",
    year: 2024,
    thumbnailImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=85",
    heroImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1800&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=85",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=85",
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&q=85",
    ],
    externalLinks: [
      { label: "Live Site", url: "https://example.com" },
      { label: "Vimeo Process Film", url: "https://vimeo.com" },
    ],
    featured: true,
    publishedAt: "2024-03-10",
  },
  {
    id: "rws-005",
    slug: "sol-motion-identity",
    title: "Sol — Motion Identity",
    category: "Motion",
    tags: ["Motion Graphics", "Brand Animation", "Generative", "Sound Design"],
    shortDescription:
      "A living brand identity for a music-tech platform — every element animated, responsive to audio.",
    fullCaseStudy: `## The Brief

Sol is a music-tech platform connecting artists with sync licensing opportunities. Their brand needed to feel alive — to literally move with music. A static logo was never on the table.

## The Motion System

We developed a generative identity where the logomark responds to audio input. The core symbol — an abstracted sun — pulses, stretches, and refracts based on frequency data from whatever music is playing.

For contexts where generative behaviour isn't possible (print, static social), we created a library of twelve "frozen motion" states — snapshots of the animation at different energy levels.

## Sound Design

Working with a sound designer, we created a distinctive four-note audio logo — a rising arpeggio that functions as sonic branding across product sounds, ads, and event contexts.

## Deliverables

Generative identity engine (web component), 60+ animated assets for social and advertising, motion guidelines, audio logo with usage documentation, and an After Effects template system for internal teams.`,
    role: "Motion Designer & Creative Director",
    client: "Sol Music Technologies",
    year: 2024,
    thumbnailImage: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=85",
    heroImage: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1800&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&q=85",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=85",
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1200&q=85",
    ],
    featured: false,
    publishedAt: "2024-01-22",
  },
  {
    id: "rws-006",
    slug: "meridian-photography",
    title: "Meridian — Photography Series",
    category: "Photography",
    tags: ["Photography", "Editorial", "Landscape", "Medium Format"],
    shortDescription:
      "A 40-image editorial series documenting industrial coastlines of Northern Europe, shot on medium format film.",
    fullCaseStudy: `## The Project

Meridian is a personal editorial project, shot across six weeks traveling the industrial coastlines of Norway, Denmark, and the north of England. The work explores the tension between industrial infrastructure and natural landscape.

## Visual Approach

Shot entirely on medium format film, the series deliberately embraces grain, latitude, and tonal subtlety. The colour grading is restrained — no crushed blacks, no heavy manipulation. The light in these places is extraordinary; the post-work is designed to preserve rather than interpret it.

## Publication

The series was acquired by Monocle Magazine for a 12-page feature in their March 2024 issue. A limited edition print run of forty signed photographs was produced in collaboration with a specialist fine art printer in East London.`,
    role: "Photographer & Art Director",
    client: "Personal / Monocle Magazine",
    year: 2024,
    thumbnailImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85",
    heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=85",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=85",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&q=85",
    ],
    featured: false,
    publishedAt: "2024-04-05",
  },
];

// ── Query helpers — replace with Supabase queries on migration ─

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return projects;
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getAllCategories(): string[] {
  const cats = Array.from(new Set(projects.map((p) => p.category)));
  return ["All", ...cats];
}

export function getCategoryCounts(): Record<string, number> {
  const counts: Record<string, number> = { All: projects.length };
  for (const p of projects) {
    counts[p.category] = (counts[p.category] ?? 0) + 1;
  }
  return counts;
}

export function getRelatedProjects(current: Project, limit = 3): Project[] {
  return projects
    .filter((p) => p.id !== current.id && p.category === current.category)
    .slice(0, limit);
}
