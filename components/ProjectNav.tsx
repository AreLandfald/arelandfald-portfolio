"use client";

import Link from "next/link";

export default function ProjectNav({
  prev,
  next
}: {
  prev?: { href: string; label?: string };
  next?: { href: string; label?: string };
}) {
  return (
    <>
      <Link href="/" className="back-link">
        Back to portfolio
      </Link>
      <header className="project-header">
        <nav className="project-nav">
          {prev && (
            <Link href={prev.href} className="nav-link">
              ← {prev.label ?? "Previous"}
            </Link>
          )}
          {next && (
            <Link href={next.href} className="nav-link">
              {next.label ?? "Next"} →
            </Link>
          )}
        </nav>
      </header>
    </>
  );
}
