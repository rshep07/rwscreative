import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="gutter nav-pt min-h-[70vh] flex flex-col justify-center">
      <span className="coral-tag mb-5 self-start">404</span>
      <h1 className="t-xl text-[var(--ink)] mb-5">Not found.</h1>
      <p className="text-[var(--muted)] text-sm leading-relaxed mb-10 max-w-sm tracking-wide">
        This page doesn't exist or has been moved.
      </p>
      <Link href="/" className="btn-coral self-start">
        <ArrowLeft size={13} /> Back Home
      </Link>
    </div>
  );
}
