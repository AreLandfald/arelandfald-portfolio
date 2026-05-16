"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
 * (row, col) ↔ (3-row, 2-col).
 *
 * Cells are 16:9 to match the project-page hero proportions, so the
 * whole 3×4 grid sums to a 4:3 landscape rectangle.
 *
 * Hovering any cell of a project keeps that pair at full opacity and
 * dims every other cell. CustomCursor is mounted here (not in the root
 * layout) so the mirrored ghost cursor only appears on the landing page.
 */

type Project = {
  id: string;
  href: string;
  title: string;
  year: string;
  img: string;
  imgRow: number;
  imgCol: number;
};

const PROJECTS: Project[] = [
  { id: "musical",   href: "/work/musical-instrument", title: "Musical Instrument", year: "2024", img: "/Assets/Sound toys/soundtoys.hovedbildeinstrument.h.jpg", imgRow: 0, imgCol: 0 },
  { id: "visual",    href: "/work/visual-identity",    title: "Visual Identity",    year: "2024", img: "/Assets/Diplomis/diplomis plakat mockup copy.jpg",       imgRow: 0, imgCol: 2 },
  { id: "immersive", href: "/work/immersive-sound",    title: "Immersive Sound",    year: "2024", img: "/Assets/Immersive/cover.immersive.jpg",                  imgRow: 1, imgCol: 1 },
  { id: "game",      href: "/work/gamedesign",         title: "Game Design",        year: "2025", img: "/Assets/Gamedesign/brettet.notater.med.farger.png",      imgRow: 2, imgCol: 0 },
  { id: "site",      href: "/work/website",            title: "Grammars of Noice",  year: "2025", img: "/Assets/Grammars of noice/Groise.hovedside.png",         imgRow: 2, imgCol: 2 },
  { id: "service",   href: "/work/service-design",     title: "Service Design",     year: "2025", img: "/Assets/Ostensjo/ostensjo.forsidebilde.jpg",             imgRow: 3, imgCol: 1 }
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

const DIMMED_OPACITY = 0.35;

export default function HomePage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const openMenu = () => {
    (document.querySelector(".hamburger-btn") as HTMLButtonElement | null)?.click();
  };

  const cells: Array<{ key: string; data: Cell }> = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 3; c++) cells.push({ key: `${r}-${c}`, data: getCell(r, c) });
  }

  const onEnter = (id: string) => () => setHoveredId(id);
  const onLeave = () => setHoveredId(null);
  const opacityFor = (id: string) =>
    hoveredId === null || hoveredId === id ? 1 : DIMMED_OPACITY;

  return (
    <>
      <BodyClass className="home-route" />
      <CustomCursor />
      <SlideMenu />

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

      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "#fff",
          color: "#000",
          fontFamily: "'GeistRegular', sans-serif",
          fontWeight: 400,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "90px 40px"
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(4, 1fr)",
            gap: 0,
            aspectRatio: "4 / 3",
            width: "min(calc((100vh - 220px) * 4 / 3), 92vw, 1400px)"
          }}
        >
          {cells.map(({ key, data }) => {
            if (!data) return <div key={key} />;
            const { kind, project } = data;
            const op = opacityFor(project.id);

            if (kind === "image") {
              return (
                <Link
                  key={key}
                  href={project.href}
                  aria-label={project.title}
                  onMouseEnter={onEnter(project.id)}
                  onMouseLeave={onLeave}
                  className="landing-cell"
                  style={{
                    display: "block",
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    textDecoration: "none",
                    color: "inherit",
                    opacity: op
                  }}
                >
                  <Image
                    src={project.img}
                    alt=""
                    fill
                    priority
                    sizes="(max-width: 768px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
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
                className="landing-cell"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "0 0.75rem",
                  color: "#000",
                  textDecoration: "none",
                  opacity: op,
                  gap: "0.25rem"
                }}
              >
                <span style={{ fontSize: "0.95rem", fontWeight: 400 }}>{project.title}</span>
                <span style={{ fontSize: "0.75rem", color: "#888" }}>{project.year}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
