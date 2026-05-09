import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="gutter min-h-[70vh] flex flex-col items-start justify-center">
      <p className="eyebrow c-accent mb-4">404</p>
      <h1 className="font-display text-5xl md:text-7xl font-light c-ink mb-4">Page not found</h1>
      <p className="c-muted text-[0.9375rem] leading-relaxed mb-10 max-w-sm">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="btn-ghost">
        <ArrowLeft size={13} /> Back to Home
      </Link>
    </div>
  );
}
