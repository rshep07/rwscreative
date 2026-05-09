import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="gutter nav-pt min-h-[70vh] flex flex-col justify-center">
      <p className="label text-[var(--lime)] mb-5">404</p>
      <h1 className="headline text-[var(--ink)] mb-5">Page not found.</h1>
      <p className="text-[var(--muted)] leading-relaxed mb-10 max-w-sm">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="btn-outline self-start">
        <ArrowLeft size={13} /> Back Home
      </Link>
    </div>
  );
}
