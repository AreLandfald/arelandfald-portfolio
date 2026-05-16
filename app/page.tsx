"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import BodyClass from "@/components/BodyClass";
import CustomCursor from "@/components/CustomCursor";
import SlideMenu from "@/components/SlideMenu";

/**
 * Landing page — 3×4 mirrored grid.
 *
 *   row 0:  ■ · ■           ■ = image cell (link)
 *   row 1:  · ■ ·           · = label cell (link to same project)
 *   row 2:  ■ · ■
 *   row 3:  · ■ ·
 *
 * Each label is the point-symmetric partner of an image —
 * (row, col) ↔ (3-row, 2-col). Hovering either cell of a project
 * lights up the label and swaps the intro line for that project's
 * commentary.
 *
 * Corners mirror the same point-symmetric pattern:
 *   "Are Landfald" (top-left)  ↔  "About me" (bottom-right)  → /about
 *   hamburger     (top-right)  ↔  "Menu"     (bottom-left)   → opens SlideMenu
 *
 * CustomCursor is mounted here (not in the root layout) so the
 * mirrored ghost cursor only appears on the landing page.
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
const TYPE_INTERVAL_MS = 55;

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

const cornerBase: React.CSSProperties = {
  position: "fixed",
  fontFamily: "'GeistRegular', sans-serif",
  fontWeight: 400,
  fontSize: "0.85rem",
  letterSpacing: "0.01em",
  color: "#000",
  textDecoration: "none",
  background: "transparent",
  border: 0,
  padding: 0,
  zIndex: 2000
};

export default function HomePage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [typed, setTyped] = useState("");

  // Typewriter. Restarts from char 0 each time hover ends.
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

  const openMenu = () => {
    (document.querySelector(".hamburger-btn") as HTMLButtonElement | null)?.click();
  };

  const cells: Array<{ key: string; data: Cell }> = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 3; c++) cells.push({ key: `${r}-${c}`, data: getCell(r, c) });
  }

  const onEnter = (id: string) => () => setHoveredId(id);
  const onLeave = () => setHoveredId(null);

  return (
    <>
      <BodyClass className="home-route" />
      <CustomCursor />
      <SlideMenu />

      {/* Four corners */}
      <Link href="/about" style={{ ...cornerBase, top: "28px", left: "28px" }}>
        Are Landfald
      </Link>
      <button
        type="button"
        onClick={openMenu}
        style={{ ...cornerBase, bottom: "28px", left: "28px", cursor: "pointer" }}
      >
        Menu
      </button>
      <Link href="/about" style={{ ...cornerBase, bottom: "28px", right: "28px" }}>
        About me
      </Link>

      {/* Main canvas */}
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
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 32px"
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: "1rem",
            minHeight: "1.5em",
            marginBottom: "1.5rem",
            letterSpacing: "0.005em",
            whiteSpace: "pre-wrap"
          }}
        >
          {topLine}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(4, 1fr)",
            gap: 0,
            aspectRatio: "1 / 1",
            width: "min(calc(100vh - 140px), 92vw, 1200px)"
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
                  onMouseEnter={onEnter(project.id)}
                  onMouseLeave={onLeave}
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
              <Link
                key={key}
                href={project.href}
                onMouseEnter={onEnter(project.id)}
                onMouseLeave={onLeave}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "0 0.75rem",
                  fontSize: "0.95rem",
                  fontWeight: 400,
                  color: "#000",
                  textDecoration: "none",
                  opacity: isActive ? 1 : 0.5,
                  transition: "opacity 0.25s ease"
                }}
              >
                {project.title}
              </Link>
            );
          })}
        </div>
      </div>

    </>
  );
}
