import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "About RWS Creative — an independent graphic design studio working at the intersection of craft and commerce.",
};

const SERVICES = [
  {
    title: "Brand Identity",
    desc: "Logo systems, visual identities, and brand guidelines built to endure. From mark-making to complete brand worlds.",
  },
  {
    title: "Editorial Design",
    desc: "Books, magazines, and print publications designed with typographic rigour and narrative intelligence.",
  },
  {
    title: "Packaging",
    desc: "Structural and graphic packaging that commands shelf presence without sacrificing material integrity.",
  },
  {
    title: "Motion Graphics",
    desc: "Animated brand elements, title sequences, and generative identity systems that live and breathe.",
  },
  {
    title: "Web Design",
    desc: "Design systems and interactive experiences for digital products, campaigns, and portfolio sites.",
  },
  {
    title: "Photography",
    desc: "Art-directed photography for editorial, brand, and commercial contexts — studio and location.",
  },
];

const CLIENTS = [
  "Luminary Wellness",
  "Offcut Publishing",
  "Forma Home",
  "Northlight Architecture",
  "Sol Music Technologies",
  "Monocle Magazine",
  "Various Personal Projects",
];

const AWARDS = [
  { title: "D&AD Packaging Design Pencil", year: "2024" },
  { title: "Wallpaper* Design Award — Brand Identity", year: "2024" },
  { title: "Communication Arts Typography Annual", year: "2023" },
  { title: "Core77 Design Award — Packaging", year: "2023" },
];

export default function AboutPage() {
  return (
    <div>
      {/* ── Page header ── */}
      <div className="gutter pt-14 pb-16 border-b border-[var(--color-border)]">
        <p className="eyebrow c-accent mb-3">About</p>
        <h1 className="h-xl c-ink max-w-3xl">
          An independent studio built on craft.
        </h1>
      </div>

      {/* ── Story + image ── */}
      <section className="gutter py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden order-2 md:order-1">
          <Image
            src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=900&q=85"
            alt="RWS Creative studio"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Text */}
        <div className="order-1 md:order-2 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="accent-line" />
            <span className="eyebrow c-accent">Our Story</span>
          </div>

          <p className="font-display text-2xl md:text-[1.85rem] font-light c-ink leading-[1.3] mb-6">
            Founded in 2015, RWS Creative has grown from a one-person operation into a collaborative practice working across every medium where design matters.
          </p>

          <div className="space-y-4 text-[0.9375rem] c-muted leading-relaxed">
            <p>
              We work with a small number of clients at any one time — enough to do exceptional work, not so many that we lose our edge. Our process is thorough, our opinions are strong, and we are rigorous about craft at every scale.
            </p>
            <p>
              We believe the best design is invisible in the best way — it works so well that nobody needs to notice it. But we also believe that beauty is a legitimate and important function, and we never apologise for it.
            </p>
            <p>
              Based between Canada and Europe, we work with clients across every industry and at every scale — from independent publishers to global brands.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-[var(--color-border)]">
            <p className="eyebrow c-faint text-[0.58rem] mb-3">Based in</p>
            <p className="text-[0.9375rem] c-ink">Canada · London · Porto</p>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="border-t border-[var(--color-border)] bg-surf">
        <div className="gutter py-20 md:py-24">
          <div className="flex items-center gap-3 mb-12">
            <span className="accent-line" />
            <p className="eyebrow c-accent">What We Do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {SERVICES.map((s, i) => (
              <div key={s.title} className="py-8 pr-8 border-b border-[var(--color-border)]
                                            md:border-r last:border-r-0
                                            [&:nth-child(2n)]:md:border-r-0
                                            lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0">
                <p className="eyebrow c-faint text-[0.58rem] mb-3">0{i + 1}</p>
                <h3 className="font-display text-xl font-light c-ink mb-3">{s.title}</h3>
                <p className="text-sm c-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clients ── */}
      <section className="gutter py-20 md:py-24 border-t border-[var(--color-border)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="accent-line" />
              <p className="eyebrow c-accent">Clients & Collaborators</p>
            </div>
            <div className="flex flex-col">
              {CLIENTS.map((client) => (
                <p
                  key={client}
                  className="py-4 border-b border-[var(--color-border)] font-display text-xl font-light c-ink hover:c-accent transition-colors duration-300"
                >
                  {client}
                </p>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="accent-line" />
              <p className="eyebrow c-accent">Recognition</p>
            </div>
            <div className="flex flex-col">
              {AWARDS.map((award) => (
                <div key={award.title} className="py-4 border-b border-[var(--color-border)] flex justify-between gap-4">
                  <p className="text-sm c-ink leading-snug">{award.title}</p>
                  <p className="eyebrow c-faint text-[0.6rem] flex-shrink-0 pt-0.5">{award.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Profile image ── */}
      <section className="gutter pb-20 md:pb-28">
        <div className="relative aspect-[21/9] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85"
            alt="RWS Creative studio space"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-end gutter pb-10">
            <div>
              <p className="eyebrow c-accent mb-2">Based in Canada</p>
              <p className="font-display text-3xl font-light text-white">Working worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-[var(--color-border)]">
        <div className="gutter py-20 text-center">
          <p className="eyebrow c-accent mb-4">Ready to work together?</p>
          <h2 className="h-lg c-ink mb-8 max-w-2xl mx-auto">
            Let's make something worth remembering.
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Get in Touch <ArrowUpRight size={13} />
            </Link>
            <Link href="/work" className="btn-ghost">
              View Work <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
