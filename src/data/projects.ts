import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "rws-001", slug: "luminary-brand-identity",
    title: "Luminary Brand Identity", category: "Branding",
    tags: ["Identity", "Logo System", "Brand Guidelines", "Print"],
    shortDescription: "A complete brand identity system for a luxury wellness studio built around the concept of inner radiance.",
    fullCaseStudy: `## The Brief\n\nLuminary came to us as a nascent wellness brand with a clear philosophy but no visual language. They needed a complete identity that could communicate luxury, approachability, and transformational wellness simultaneously.\n\n## The Challenge\n\nWellness branding is a crowded space dominated by either sterile clinical aesthetics or overly precious spa tropes. Luminary needed to feel genuinely elevated without the clichés.\n\n## The Process\n\nWe began with an extensive discovery phase — interviewing founders, visiting the physical space, and auditing 60+ competitor brands. From this, we identified a key whitespace: warmth at scale.\n\n## The Outcome\n\nLuminary launched to sold-out waitlists within three weeks of opening. The brand was featured in Wallpaper* Magazine's annual design round-up.`,
    role: "Creative Director & Brand Designer", client: "Luminary Wellness", year: 2024,
    thumbnailImage: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&q=85",
    heroImage:      "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=1800&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&q=85",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=85",
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1200&q=85",
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1200&q=85",
    ],
    externalLinks: [{ label: "Live Site", url: "https://example.com" }],
    featured: true, publishedAt: "2024-09-01",
  },
  {
    id: "rws-002", slug: "offcut-magazine",
    title: "Offcut Magazine", category: "Editorial",
    tags: ["Print", "Editorial Design", "Typography", "Art Direction"],
    shortDescription: "Editorial design and art direction for Offcut, an independent quarterly celebrating material culture.",
    fullCaseStudy: `## The Brief\n\nOffcut is an independent quarterly focused on material culture — the stories behind the things we make and use. As their design partner from Issue 01, we shaped both the visual identity and design language.\n\n## Design Philosophy\n\nWe wanted Offcut to feel like the physical world it writes about — textured, tactile, imperfect in the best ways.\n\n## Typography\n\nWe paired Canela Display for warmth and editorial credibility with a modified Founders Grotesk for body text.\n\n## Production\n\nAll issues designed for Risograph and offset hybrid printing. The constraints directly influenced layout decisions.`,
    role: "Art Director", client: "Offcut Publishing", year: 2024,
    thumbnailImage: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=85",
    heroImage:      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1800&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85",
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&q=85",
      "https://images.unsplash.com/photo-1533035336347-4e10f4493f93?w=1200&q=85",
    ],
    downloadLinks: [{ label: "Issue 01 Lookbook", url: "#" }],
    featured: true, publishedAt: "2024-06-15",
  },
  {
    id: "rws-003", slug: "forma-packaging",
    title: "Forma Packaging System", category: "Packaging",
    tags: ["Packaging", "Sustainable", "Structural Design"],
    shortDescription: "Sustainable packaging redesign for a minimal home goods brand — zero plastic, full shelf presence.",
    fullCaseStudy: `## The Brief\n\nForma sells beautifully designed home objects. Their existing packaging was functional but invisible. As they moved into premium retail, they needed packaging worthy of what was inside.\n\n## Constraint as Inspiration\n\nThe brief had one hard constraint: no virgin plastic, anywhere. This became our creative engine.\n\n## Results\n\n100% plastic-free, 40% reduction in material use, and a 2024 D&AD Packaging Design pencil.`,
    role: "Packaging & Structural Designer", client: "Forma Home", year: 2023,
    thumbnailImage: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=85",
    heroImage:      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1800&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1609360028460-e5c1d97c3e08?w=1200&q=85",
      "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?w=1200&q=85",
      "https://images.unsplash.com/photo-1600003263720-95b45a7fa56c?w=1200&q=85",
    ],
    featured: false, publishedAt: "2023-11-20",
  },
  {
    id: "rws-004", slug: "northlight-digital",
    title: "Northlight Digital Experience", category: "Web Design",
    tags: ["Web Design", "UI/UX", "Motion"],
    shortDescription: "A scroll-driven website for an architecture studio where white space does the heavy lifting.",
    fullCaseStudy: `## The Brief\n\nNorthlight Architecture wanted a website that embodied their design ethos: restrained, precise, luminous.\n\n## Concept\n\nThe entire visual system is built around the control of white space and typographic weight — mirroring how Northlight controls light in their physical spaces.\n\n## Technical\n\nBuilt in Next.js with Framer Motion for scroll-linked animations. Lighthouse performance score: 98.`,
    role: "UI/UX Designer & Creative Developer", client: "Northlight Architecture", year: 2024,
    thumbnailImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=85",
    heroImage:      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1800&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=85",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=85",
    ],
    externalLinks: [{ label: "Live Site", url: "https://example.com" }],
    featured: true, publishedAt: "2024-03-10",
  },
  {
    id: "rws-005", slug: "sol-motion-identity",
    title: "Sol — Motion Identity", category: "Motion",
    tags: ["Motion Graphics", "Brand Animation", "Generative"],
    shortDescription: "A living brand identity for a music-tech platform — every element animated, responsive to audio.",
    fullCaseStudy: `## The Brief\n\nSol is a music-tech platform connecting artists with sync licensing. Their brand needed to feel alive — to literally move with music.\n\n## The Motion System\n\nWe developed a generative identity where the logomark responds to audio input, pulsing and refracting based on frequency data.\n\n## Deliverables\n\nGenerative identity engine, 60+ animated assets, motion guidelines, and audio logo.`,
    role: "Motion Designer & Creative Director", client: "Sol Music Technologies", year: 2024,
    thumbnailImage: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=85",
    heroImage:      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1800&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&q=85",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=85",
    ],
    featured: false, publishedAt: "2024-01-22",
  },
  {
    id: "rws-006", slug: "meridian-photography",
    title: "Meridian — Photography Series", category: "Photography",
    tags: ["Photography", "Editorial", "Medium Format"],
    shortDescription: "A 40-image editorial series documenting industrial coastlines of Northern Europe on medium format film.",
    fullCaseStudy: `## The Project\n\nMeridian is a personal editorial project, shot across six weeks traveling the industrial coastlines of Norway, Denmark, and the north of England.\n\n## Visual Approach\n\nShot entirely on medium format film. The colour grading is restrained — the light in these places is extraordinary; the post-work preserves rather than interprets it.\n\n## Publication\n\nAcquired by Monocle Magazine for a 12-page feature. Limited edition print run of forty signed photographs.`,
    role: "Photographer & Art Director", client: "Personal / Monocle Magazine", year: 2024,
    thumbnailImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85",
    heroImage:      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=85",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&q=85",
    ],
    featured: false, publishedAt: "2024-04-05",
  },
];

export const getProjectBySlug    = (slug: string) => projects.find((p) => p.slug === slug);
export const getFeaturedProjects = ()              => projects.filter((p) => p.featured);
export const getAllCategories    = ()              => ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
export const getRelatedProjects  = (current: Project, limit = 2) =>
  projects.filter((p) => p.id !== current.id && p.category === current.category).slice(0, limit);
export const getCategoryCounts   = () => {
  const c: Record<string, number> = { All: projects.length };
  projects.forEach((p) => { c[p.category] = (c[p.category] ?? 0) + 1; });
  return c;
};
