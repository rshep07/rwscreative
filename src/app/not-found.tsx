import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="gutter nav-pt min-h-[70vh] flex flex-col justify-center">
      <span className="chip mb-5 inline-flex">404</span>
      <h1 className="d-xl text-[var(--black)] mb-5">Page not found.</h1>
      <p className="text-[var(--gray-mid)] leading-relaxed mb-10 max-w-sm">
        This page doesn't exist or has been moved.
      </p>
      <Link href="/" className="btn-teal self-start">
        <ArrowLeft size={13} /> Back Home
      </Link>
    </div>
  );
}
