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
  const [workOpen, setWorkOpen] = useState(false);
  const [overImage, setOverImage] = useState(true);

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

  useEffect(() => {
    const hero = document.querySelector(".hero-section") as HTMLElement | null;
    if (!hero) {
      setOverImage(false);
      return;
    }
    const update = () => {
      const rect = hero.getBoundingClientRect();
      setOverImage(rect.bottom > 60);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const navColor = overImage && !open ? " white-mode" : "";

  return (
    <>
      <div className="top-nav">
        <span className={`nav-brand${navColor}${open ? " hidden" : ""}`}>AL</span>
        <button
          className={`hamburger-btn${navColor}${open ? " active" : ""}`}
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
          <div className={`menu-work${workOpen ? " open" : ""}`}>
            <button
              type="button"
              className="work-label"
              aria-expanded={workOpen}
              onClick={() => setWorkOpen((v) => !v)}
            >
              Work
            </button>
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
