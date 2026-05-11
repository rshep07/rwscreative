import Link from "next/link";
export default function NotFound() {
  return (
    <div className="gutter nav-pt min-h-[70vh] flex flex-col justify-center border-b border-[var(--rule)]">
      <p className="f-mono text-[var(--accent)] mb-4">404</p>
      <h1 className="f-title text-[var(--canvas)] mb-6">Not found.</h1>
      <p className="text-[var(--mid)] text-sm mb-10">This page doesn't exist or has been moved.</p>
      <Link href="/" className="btn-outline self-start">← Back Home</Link>
    </div>
  );
}
