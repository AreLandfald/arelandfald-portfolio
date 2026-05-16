"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import BodyClass from "@/components/BodyClass";

/**
 * Landing page — 3×4 mirrored grid.
 *
 * Image cells follow this pattern (■ = image, · = label):
 *   row 0:  ■ · ■
 *   row 1:  · ■ ·
 *   row 2:  ■ · ■
 *   row 3:  · ■ ·
 *
 * Each label cell is the point-symmetric partner of an image cell —
 * (row, col) ↔ (3 - row, 2 - col) — and shows that project's title.
 * Hovering an image lights up its mirror label and swaps the intro
 * line above the grid for that project's commentary.
 */

type Project = {
  id: string;
  href: string;
  title: string;
  img: string;
  comment: string;
  imgRow: number;
  imgCol: number;
};

const INTRO = "Are Landfald is a design student from Oslo";

const PROJECTS: Project[] = [
  { id: "musical",   href: "/work/musical-instrument", title: "Musical Instrument", img: "/Assets/Sound toys/soundtoys.hovedbildeinstrument.h.jpg", comment: "[placeholder — musical instrument]", imgRow: 0, imgCol: 0 },
  { id: "visual",    href: "/work/visual-identity",    title: "Visual Identity",    img: "/Assets/Diplomis/diplomis plakat mockup copy.jpg",       comment: "[placeholder — visual identity]",    imgRow: 0, imgCol: 2 },
  { id: "immersive", href: "/work/immersive-sound",    title: "Immersive Sound",    img: "/Assets/Immersive/cover.immersive.jpg",                  comment: "[placeholder — immersive sound]",    imgRow: 1, imgCol: 1 },
  { id: "game",      href: "/work/gamedesign",         title: "Game Design",        img: "/Assets/Gamedesign/brettet.notater.med.farger.png",      comment: "[placeholder — game design]",        imgRow: 2, imgCol: 0 },
  { id: "site",      href: "/work/website",            title: "Grammars of Noice",  img: "/Assets/Grammars of noice/Groise.hovedside.png",         comment: "[placeholder — website]",            imgRow: 2, imgCol: 2 },
  { id: "service",   href: "/work/service-design",     title: "Service Design",     img: "/Assets/Ostensjo/ostensjo.forsidebilde.jpg",             comment: "[placeholder — service design]",     imgRow: 3, imgCol: 1 }
];

type Cell = { kind: "image" | "label"; project: Project } | null;

function getCell(row: number, col: number): Cell {
  const img = PROJECTS.find(p => p.imgRow === row && p.imgCol === col);
  if (img) return { kind: "image", project: img };
  const lbl = PROJECTS.find(p => 3 - p.imgRow === row && 2 - p.imgCol === col);
  if (lbl) return { kind: "label", project: lbl };
  return null;
}

const TYPE_INTERVAL_MS = 55;

export default function HomePage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [typed, setTyped] = useState("");

  // Typewriter for the intro line. Restarts from zero each time the
  // user leaves an image; pauses (and clears) while one is hovered.
  useEffect(() => {
    if (hoveredId) return;
    setTyped("");
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(INTRO.slice(0, i));
      if (i >= INTRO.length) window.clearInterval(id);
    }, TYPE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [hoveredId]);

  const hoveredProject = hoveredId ? PROJECTS.find(p => p.id === hoveredId) ?? null : null;
  const topLine = hoveredProject ? hoveredProject.comment : typed;
  const year = new Date().getFullYear();

  const cells: Array<{ key: string; data: Cell }> = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 3; c++) cells.push({ key: `${r}-${c}`, data: getCell(r, c) });
  }

  return (
    <>
      <BodyClass className="home-route" />
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "#fff",
          color: "#000",
          fontFamily: "'GeistRegular', sans-serif",
          fontWeight: 400,
          display: "flex",
          flexDirection: "column",
          padding: "1.4rem 2rem"
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "0.85rem",
            letterSpacing: "0.01em"
          }}
        >
          <span>Are Landfald</span>
          <span>Portfolio</span>
        </header>

        <div
          style={{
            textAlign: "center",
            fontSize: "1.05rem",
            margin: "3.25rem 0 2.25rem",
            minHeight: "1.5em",
            letterSpacing: "0.005em",
            whiteSpace: "pre-wrap"
          }}
        >
          {topLine}
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 0
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(4, 1fr)",
              gap: 0,
              aspectRatio: "1 / 1",
              height: "100%",
              maxHeight: "100%",
              maxWidth: "100%"
            }}
          >
            {cells.map(({ key, data }) => {
              if (!data) return <div key={key} />;
              const { kind, project } = data;
              const isActive = hoveredId === project.id;

              if (kind === "image") {
                return (
                  <Link
                    key={key}
                    href={project.href}
                    aria-label={project.title}
                    onMouseEnter={() => setHoveredId(project.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      textDecoration: "none",
                      color: "inherit"
                    }}
                  >
                    <img
                      src={project.img}
                      alt=""
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </Link>
                );
              }

              return (
                <div
                  key={key}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.95rem",
                    textAlign: "center",
                    padding: "0 0.75rem",
                    userSelect: "none",
                    opacity: isActive ? 1 : 0.55,
                    transition: "opacity 0.25s ease"
                  }}
                >
                  {project.title}
                </div>
              );
            })}
          </div>
        </div>

        <footer
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "0.85rem",
            letterSpacing: "0.01em"
          }}
        >
          <span>Oslo School of Architecture and Design</span>
          <span>{year}</span>
        </footer>
      </div>
    </>
  );
}
