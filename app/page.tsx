"use client";

import { useState } from "react";
import Link from "next/link";
import BodyClass from "@/components/BodyClass";

/**
 * Landing page — mirrored grid.
 *
 * Each project = TWO boxes (image + title) placed at point-symmetric
 * positions across the viewport center. Both boxes are clickable links.
 */

type Project = {
  id: string;
  href: string;
  title: string;
  img: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

// Image-box positions in % of viewport. Each title auto-renders at the
// point-symmetric mirror position (100 - x - w, 100 - y - h).
const PROJECTS: Project[] = [
  { id: "musical",   href: "/work/musical-instrument", title: "Musical Instrument", img: "/Assets/Sound toys/soundtoys.hovedbildeinstrument.h.jpg", x: 6,  y: 6,  w: 15, h: 14 },
  { id: "visual",    href: "/work/visual-identity",    title: "Visual Identity",    img: "/Assets/Diplomis/diplomis plakat mockup copy.jpg",       x: 26, y: 3,  w: 18, h: 12 },
  { id: "immersive", href: "/work/immersive-sound",    title: "Immersive Sound",    img: "/Assets/Immersive/cover.immersive.jpg",                  x: 50, y: 8,  w: 14, h: 11 },
  { id: "game",      href: "/work/gamedesign",         title: "Game Design",        img: "/Assets/Gamedesign/brettet.notater.med.farger.png",      x: 70, y: 3,  w: 15, h: 13 },
  { id: "site",      href: "/work/website",            title: "Grammars of Noice",  img: "/Assets/Grammars of noice/Groise.hovedside.png",         x: 6,  y: 27, w: 16, h: 12 },
  { id: "service",   href: "/work/service-design",     title: "Service Design",     img: "/Assets/Ostensjo/ostensjo.forsidebilde.jpg",             x: 30, y: 30, w: 16, h: 12 },
  { id: "about",     href: "/about",                   title: "About",              img: "/Assets/bilde-av-meg-til-portefolje.jpg",                x: 58, y: 28, w: 14, h: 14 }
];

const CORNERS = [
  { label: "Are",          pos: { top: "1.2rem",    left: "1.2rem"  } },
  { label: "@arelandfald", pos: { top: "1.2rem",    right: "1.2rem" } },
  { label: "Instagram",    pos: { bottom: "1.2rem", left: "1.2rem"  } },
  { label: "Landfald",     pos: { bottom: "1.2rem", right: "1.2rem" } }
];

const EDGES: Array<{ label: string; href: string | null; pos: React.CSSProperties }> = [
  { label: "About",                  href: "/about",                          pos: { top: "18%", left: "1.2rem" } },
  { label: "Contact",                href: "/contact",                        pos: { top: "36%", left: "1.2rem" } },
  { label: "Work",                   href: null,                              pos: { top: "62%", left: "1.2rem" } },
  { label: "@are.landfald",          href: null,                              pos: { top: "18%", right: "1.2rem" } },
  { label: "are.landfald@gmail.com", href: "mailto:are.landfald@gmail.com",   pos: { top: "36%", right: "1.2rem" } },
  { label: "Me",                     href: "/about",                          pos: { top: "62%", right: "1.2rem" } }
];

const BOX: React.CSSProperties = {
  position: "absolute",
  border: "1px solid #000",
  background: "#fff",
  boxSizing: "border-box",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.85rem",
  fontFamily: "'GeistMono', monospace",
  padding: "0.4rem 0.6rem",
  textAlign: "center",
  userSelect: "none",
  textDecoration: "none",
  color: "#000",
  transition: "background-color 0.15s"
};

const STATIC_LABEL: React.CSSProperties = {
  position: "absolute",
  border: "1px solid #000",
  background: "#fff",
  padding: "0.35rem 0.7rem",
  fontFamily: "'GeistMono', monospace",
  fontSize: "0.78rem",
  whiteSpace: "nowrap",
  userSelect: "none",
  textDecoration: "none",
  color: "#000"
};

export default function HomePage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <>
      <BodyClass className="home-route" />
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "#fff",
          overflow: "hidden",
          color: "#000"
        }}
      >
        {PROJECTS.map((p) => {
          const mx = 100 - p.x - p.w;
          const my = 100 - p.y - p.h;
          const isHovered = hoveredId === p.id;

          const imageBox: React.CSSProperties = {
            ...BOX,
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.w}%`,
            height: `${p.h}%`,
            padding: 0,
            background: isHovered ? "#f0f0f0" : "#fff"
          };
          const titleBox: React.CSSProperties = {
            ...BOX,
            left: `${mx}%`,
            top: `${my}%`,
            width: `${p.w}%`,
            height: `${p.h}%`,
            background: isHovered ? "#f0f0f0" : "#fff"
          };

          return (
            <div key={p.id}>
              <Link
                href={p.href}
                style={imageBox}
                onMouseEnter={() => setHoveredId(p.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </Link>
              <Link
                href={p.href}
                style={titleBox}
                onMouseEnter={() => setHoveredId(p.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <span>{p.title}</span>
              </Link>
            </div>
          );
        })}

        {CORNERS.map((c) => (
          <div key={c.label} style={{ ...STATIC_LABEL, ...c.pos }}>
            {c.label}
          </div>
        ))}
        {EDGES.map((e) =>
          e.href ? (
            <Link key={e.label} href={e.href} style={{ ...STATIC_LABEL, ...e.pos }}>
              {e.label}
            </Link>
          ) : (
            <div key={e.label} style={{ ...STATIC_LABEL, ...e.pos }}>
              {e.label}
            </div>
          )
        )}
      </div>
    </>
  );
}
