import Link from "next/link";
import BodyClass from "@/components/BodyClass";

const projects = [
  {
    cls: "project-0",
    href: "/work/visual-identity",
    img: "/Assets/Diplomis/diplomis plakat mockup copy.jpg",
    title: "Visual identity"
  },
  {
    cls: "project-1",
    href: "/work/website",
    img: "/Assets/Grammars of noice/Groise.hovedside.png",
    title: "Website"
  },
  {
    cls: "project-2",
    href: "/work/immersive-sound",
    img: "/Assets/Immersive/3.moodboard nattmannen.jpeg",
    title: "Immersive sound experience"
  },
  {
    cls: "project-3",
    href: "/work/gamedesign",
    img: "/Assets/Gamedesign/brettet.jpeg",
    title: "Gamedesign"
  },
  {
    cls: "project-4",
    href: "/work/musical-instrument",
    img: "/Assets/Sound toys/soundtoys.hovedbildeinstrument.h.jpg",
    title: "Musical instrument"
  }
];

export default function HomePage() {
  return (
    <>
      <BodyClass className="home-route" />

      <div className="intro-text">
        <h1 className="intro-name">ARE LANDFALD</h1>
        <p className="intro-subtitle">PORTFOLIO</p>
      </div>

      <main className="projects-container">
        {projects.map((p) => (
          <div key={p.cls} className={`project ${p.cls}`}>
            <Link href={p.href} className="project-image">
              <img src={p.img} alt={p.title} />
            </Link>
            <Link href={p.href} className="project-title-link">
              {p.title}
            </Link>
          </div>
        ))}

        <div className="project project-about">
          <Link href="/about" className="project-image about-image">
            <img src="/Assets/bilde-av-meg-til-portefolje.jpg" alt="Are Landfald" />
          </Link>
          <Link href="/about" className="project-title-link about-title">
            About me
          </Link>
        </div>
      </main>
    </>
  );
}
