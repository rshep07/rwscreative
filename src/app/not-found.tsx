import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function NotFound() {
  return (
    <div className="gutter nav-pt min-h-[70vh] flex flex-col justify-center">
      <span className="blue-tag mb-5 self-start">404</span>
      <h1 className="t-heading text-[var(--white)] mb-5">Not Found.</h1>
      <p className="t-body text-[var(--gray)] mb-10 max-w-sm">This page doesn't exist or has been moved.</p>
      <Link href="/" className="btn-blue self-start"><ArrowLeft size={13} /> Back Home</Link>
    </div>
  );
}
