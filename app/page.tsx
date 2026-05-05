"use client";

import Link from "next/link";
import { useState } from "react";
import BodyClass from "@/components/BodyClass";

type Tile = { slug: string; href: string; title: string; img: string; bg: string };

const tiles: Tile[] = [
  {
    slug: "musical-instrument",
    href: "/work/musical-instrument",
    title: "Musical instrument",
    img: "/Assets/Sound toys/soundtoys.hovedbildeinstrument.h.jpg",
    bg: "/Assets/Sound toys/soundtoys.hovedbildeinstrument.h.jpg"
  },
  {
    slug: "visual-identity",
    href: "/work/visual-identity",
    title: "Visual identity",
    img: "/Assets/Diplomis/diplomis plakat mockup copy.jpg",
    bg: "/Assets/Diplomis/diplomis plakat mockup copy.jpg"
  },
  {
    slug: "immersive-sound",
    href: "/work/immersive-sound",
    title: "Immersive sound experience",
    img: "/Assets/Immersive/3.moodboard nattmannen.jpeg",
    bg: "/Assets/Immersive/3.moodboard nattmannen.jpeg"
  },
  {
    slug: "website",
    href: "/work/website",
    title: "Website",
    img: "/Assets/Grammars of noice/Groise.hovedside.png",
    bg: "/Assets/Grammars of noice/Groise.hovedside.png"
  },
  {
    slug: "gamedesign",
    href: "/work/gamedesign",
    title: "Gamedesign",
    img: "/Assets/Gamedesign/brettet.notater.med.farger.png",
    bg: "/Assets/Gamedesign/brettet.notater.med.farger.png"
  },
  {
    slug: "about",
    href: "/about",
    title: "About me",
    img: "/Assets/bilde-av-meg-til-portefolje.jpg",
    bg: "/Assets/bilde-av-meg-til-portefolje.jpg"
  }
];

export default function HomePage() {
  const [hovered, setHovered] = useState<string | null>(null);
  const titleOrder = [...tiles].reverse();
  const hoveredTile = tiles.find((t) => t.slug === hovered) ?? null;

  return (
    <>
      <BodyClass className="home-route" />

      <div
        className={`home-hover-bg${hovered ? " active" : ""}`}
        style={{ backgroundImage: hoveredTile ? `url("${hoveredTile.bg}")` : undefined }}
        aria-hidden="true"
      />

      <div className="intro-text">
        <h1 className="intro-name">ARE LANDFALD</h1>
        <p className="intro-subtitle">PORTFOLIO</p>
      </div>

      <main className="projects-grid">
        {tiles.map((t) => (
          <Link
            key={`img-${t.slug}`}
            href={t.href}
            className="grid-tile grid-tile-img"
            onMouseEnter={() => setHovered(t.slug)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(t.slug)}
            onBlur={() => setHovered(null)}
            aria-label={t.title}
          >
            <img src={t.img} alt={t.title} />
          </Link>
        ))}

        {titleOrder.map((t) => (
          <Link
            key={`title-${t.slug}`}
            href={t.href}
            className="grid-tile grid-tile-title"
            onMouseEnter={() => setHovered(t.slug)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(t.slug)}
            onBlur={() => setHovered(null)}
          >
            <span>{t.title}</span>
          </Link>
        ))}
      </main>
    </>
  );
}
