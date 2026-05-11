import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "001", slug: "luminary-brand-identity",
    title: "Luminary Brand Identity", category: "Branding",
    tags: ["Identity", "Logo System", "Brand Guidelines", "Print"],
    shortDescription: "A complete identity system for a luxury wellness studio — built around the concept of inner radiance and warmth at scale.",
    fullCaseStudy: `## The Brief\n\nLuminary came to us as a nascent wellness brand with a clear philosophy but no visual language. They needed a complete identity that could communicate luxury, approachability, and transformational wellness simultaneously.\n\n## The Challenge\n\nWellness branding is a crowded space dominated by sterile clinical aesthetics or overly precious spa tropes. Luminary needed to feel genuinely elevated — warm without being soft, premium without being cold.\n\n## Process\n\nWe spent three weeks in discovery: interviewing founders, mapping competitor territory, and identifying the visual whitespace. The logomark draws from the geometry of a rising sun abstracted into a minimal letterform.\n\n## Outcome\n\nLuminary launched to sold-out waitlists within three weeks. The brand was featured in Wallpaper* Magazine's annual design round-up and shortlisted for a D&AD pencil.`,
    role: "Creative Director & Brand Designer", client: "Luminary Wellness", year: 2024,
    thumbnailImage: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=900&q=85",
    heroImage:      "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=1800&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&q=85",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=85",
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1200&q=85",
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1200&q=85",
    ],
    externalLinks: [{ label: "Live Site", url: "https://example.com" }],
    featured: true,
  },
  {
    id: "002", slug: "offcut-magazine",
    title: "Offcut Magazine", category: "Editorial",
    tags: ["Print", "Art Direction", "Typography", "Risograph"],
    shortDescription: "Editorial design and art direction for an independent quarterly celebrating material culture and the stories behind the things we make.",
    fullCaseStudy: `## The Brief\n\nOffcut is an independent quarterly focused on material culture — the stories behind the things we make and use. As their design partner from Issue 01, we shaped both the visual identity and the evolving design language.\n\n## Design Philosophy\n\nWe wanted Offcut to feel like the physical world it writes about: textured, tactile, imperfect in the best ways. The grid deliberately breaks itself — columns shift, bleed images interrupt spreads.\n\n## Typography\n\nCanela Display paired with a modified Founders Grotesk. Caption work in strict monospace — a nod to technical documentation aesthetics that inspire the content.\n\n## Production\n\nAll issues designed for Risograph and offset hybrid. The constraints became design features: deliberate overprints, misregistration as texture.`,
    role: "Art Director", client: "Offcut Publishing", year: 2024,
    thumbnailImage: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=900&q=85",
    heroImage:      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1800&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85",
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&q=85",
      "https://images.unsplash.com/photo-1533035336347-4e10f4493f93?w=1200&q=85",
    ],
    featured: true,
  },
  {
    id: "003", slug: "forma-packaging",
    title: "Forma Packaging System", category: "Packaging",
    tags: ["Packaging", "Structural", "Sustainable", "D&AD"],
    shortDescription: "Sustainable packaging redesign — zero virgin plastic, full shelf presence. D&AD Pencil 2024.",
    fullCaseStudy: `## The Brief\n\nForma sells beautifully designed home objects. Their existing packaging was functional but invisible. Moving into premium retail required packaging worthy of the product inside.\n\n## Constraint as Inspiration\n\nOne hard constraint: no virgin plastic anywhere. This became the creative engine.\n\n## Structural Design\n\nWorking with a packaging engineer, we developed a single-material kraft construction that assembles without adhesive — a fold pattern derived from origami that becomes decorative when partially open.\n\n## Outcome\n\n100% plastic-free. 40% reduction in material use. D&AD Packaging Design Pencil 2024. Stocked in Selfridges, Dover Street Market, and MoMA Design Store.`,
    role: "Packaging & Structural Designer", client: "Forma Home", year: 2023,
    thumbnailImage: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&q=85",
    heroImage:      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1800&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1609360028460-e5c1d97c3e08?w=1200&q=85",
      "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?w=1200&q=85",
      "https://images.unsplash.com/photo-1600003263720-95b45a7fa56c?w=1200&q=85",
    ],
    featured: false,
  },
  {
    id: "004", slug: "northlight-digital",
    title: "Northlight Digital", category: "Web Design",
    tags: ["Web Design", "UI/UX", "Motion", "Next.js"],
    shortDescription: "A scroll-driven digital experience for an architecture studio — where restraint and precision are the entire brief.",
    fullCaseStudy: `## The Brief\n\nNorthlight Architecture: restrained, precise, luminous. Their site needed to embody those qualities, not just display their work.\n\n## Concept\n\nThe visual system mirrors how Northlight controls light physically — white space is structural. Dark elements are sparse and deliberate.\n\n## Interactions\n\nScroll-driven project reveals, cursor transformation on hover, and a contact section that reveals like a blind being raised.\n\n## Technical\n\nNext.js with Framer Motion scroll-linked animations. Images via Supabase Storage. Lighthouse score: 98.`,
    role: "UI/UX Designer & Creative Developer", client: "Northlight Architecture", year: 2024,
    thumbnailImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=900&q=85",
    heroImage:      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1800&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=85",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=85",
    ],
    externalLinks: [{ label: "Live Site", url: "https://example.com" }],
    featured: true,
  },
  {
    id: "005", slug: "sol-motion",
    title: "Sol — Motion Identity", category: "Motion",
    tags: ["Motion Graphics", "Generative", "Brand Animation", "Sound"],
    shortDescription: "A living identity for a music-tech platform — generative, audio-reactive, made to move.",
    fullCaseStudy: `## The Brief\n\nSol connects artists with sync licensing. Their brand needed to feel alive — literally responsive to music.\n\n## The Motion System\n\nA generative identity where the logomark responds to audio input: pulsing, stretching, refracting based on frequency data.\n\n## Frozen States\n\nFor contexts where generative behaviour isn't possible, we created twelve "frozen motion" states — snapshots at different energy levels.\n\n## Deliverables\n\nGenerative identity engine (web component), 60+ animated assets, motion guidelines, 4-note audio logo.`,
    role: "Motion Designer & Creative Director", client: "Sol Music Technologies", year: 2024,
    thumbnailImage: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=900&q=85",
    heroImage:      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1800&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&q=85",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=85",
    ],
    featured: false,
  },
  {
    id: "006", slug: "meridian-photography",
    title: "Meridian", category: "Photography",
    tags: ["Photography", "Medium Format", "Editorial", "Print"],
    shortDescription: "40 images. 6 weeks. The industrial coastlines of Northern Europe on medium format film.",
    fullCaseStudy: `## The Project\n\nA personal editorial project: six weeks traveling the industrial coastlines of Norway, Denmark, and the north of England. The tension between infrastructure and landscape.\n\n## Approach\n\nShot entirely on medium format film. Grain, latitude, tonal subtlety — all deliberate. The light in these places is extraordinary. Post-work preserves, never interprets.\n\n## Publication\n\nAcquired by Monocle Magazine for a 12-page feature, March 2024. Limited edition print run of forty signed photographs produced with a specialist fine art printer in East London.`,
    role: "Photographer & Art Director", client: "Personal / Monocle Magazine", year: 2024,
    thumbnailImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85",
    heroImage:      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=85",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&q=85",
    ],
    featured: false,
  },
];

export const getProjectBySlug = (s: string) => projects.find(p => p.slug === s);
export const getFeatured = () => projects.filter(p => p.featured);
export const getAllCategories = (): string[] => ["All", ...Array.from(new Set(projects.map(p => p.category)))];
export const getRelated = (current: Project, n = 2) =>
  projects.filter(p => p.id !== current.id && p.category === current.category).slice(0, n);
