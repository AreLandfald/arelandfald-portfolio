"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const projects = [
  { slug: "visual-identity", label: "Visual identity" },
  { slug: "website", label: "Website" },
  { slug: "immersive-sound", label: "Immersive sound experience" },
  { slug: "gamedesign", label: "Gamedesign" },
  { slug: "musical-instrument", label: "Musical instrument" }
];

export default function SlideMenu({ activeSlug }: { activeSlug?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".slide-menu") && !target.closest(".hamburger-btn")) {
        setOpen(false);
      }
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  return (
    <>
      <div className="top-nav">
        <span className={`nav-brand${open ? " hidden" : ""}`}>AL</span>
        <button
          className={`hamburger-btn${open ? " active" : ""}`}
          aria-label="Menu"
          onClick={(e) => {
            e.stopPropagation();
            setOpen((v) => !v);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`slide-menu${open ? " active" : ""}`}>
        <div className="menu-content">
          <Link href="/" className="menu-link" onClick={() => setOpen(false)}>
            Main page
          </Link>
          <div className="menu-work">
            <span className="work-label">Work</span>
            <div className="work-dropdown">
              {projects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  className={`work-item${activeSlug === p.slug ? " active" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {p.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/about" className="menu-link" onClick={() => setOpen(false)}>
            About me
          </Link>
        </div>
        <div className="menu-footer">
          <p className="footer-label">Contact</p>
          <a href="mailto:are.landfald@gmail.com" className="footer-email">
            are.landfald@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}
