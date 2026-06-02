import type { Metadata } from "next";
import SlideMenu from "@/components/SlideMenu";

export const metadata: Metadata = {
  title: "About me",
  description: "About Are Landfald — design student at AHO."
};

/**
 * Hero is a two-column block (image left, headline + intro right) that
 * fills the viewport. After scrolling past the hero, the page uses the
 * standard project-page layout — .section-with-heading with the label
 * absolutely positioned at left:40 and the text centred in the
 * 800 px .section-content column.
 */

const education = [
  { year: "2024 — 2026", what: "Oslo School of Architecture and Design — MA Design (ongoing)" },
  { year: "2023 — 2024", what: "Kristiania — BA Screenwriting" },
  { year: "2021",        what: "Den Skandinaviske Designhøjskole — Architecture and urbanism (precourse)" }
];

const skills = ["Adobe Suite", "Figma", "Claude Code in VS Code", "Fusion 360"];

const languages = [
  { level: "Fluent",   what: "Norwegian, English, Danish, Swedish" },
  { level: "Advanced", what: "Spanish" }
];

export default function AboutPage() {
  return (
    <>
      <SlideMenu />

      {/* Hero: image left, text right */}
      <section className="about-hero">
        <div className="about-hero-image">
          <img src="/Assets/aboutme.jpg" alt="Are Landfald" />
        </div>
        <div style={{ maxWidth: 560 }}>
          <h1
            style={{
              fontFamily: "'GeistRegular', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 400,
              letterSpacing: "0.04em",
              lineHeight: 1.05,
              textTransform: "uppercase",
              margin: 0,
              color: "#000"
            }}
          >
            Are Landfald
          </h1>
          <div
            style={{
              marginTop: "2.5rem",
              fontFamily: "'GeistThin', sans-serif",
              fontSize: "1.32rem",
              lineHeight: 1.8,
              color: "#000"
            }}
          >
            <p style={{ margin: 0 }}>
              I&apos;m a 23-year-old design student at the Oslo School of Architecture and Design (AHO), specialising in interaction design &mdash; with a background that spans service design and three-dimensional industrial design.
            </p>
            <p style={{ margin: "1.5rem 0 0" }}>
              I&apos;m drawn to immersiveness and storytelling: design that pulls people in and makes them feel something. I adapt easily to different processes &mdash; user research and testing matter to me, but so does intuition and the ability to truly inhabit a brief.
            </p>
          </div>
        </div>
      </section>

      {/* Sections — project-page layout (label left, text centred) */}
      <main className="project-main" style={{ paddingBottom: "8rem" }}>
        <section className="section-with-heading">
          <div className="section-heading">
            <h2>Skills</h2>
          </div>
          <div className="section-content">
            {skills.map((s) => (
              <div key={s}>{s}</div>
            ))}
          </div>
        </section>

        <section className="section-with-heading">
          <div className="section-heading">
            <h2>Languages</h2>
          </div>
          <div className="section-content">
            {languages.map((l) => (
              <div
                key={l.level}
                style={{
                  display: "grid",
                  gridTemplateColumns: "160px 1fr",
                  gap: "2rem",
                  padding: "1rem 0"
                }}
              >
                <span>{l.level}</span>
                <span>{l.what}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-with-heading">
          <div className="section-heading">
            <h2>Education</h2>
          </div>
          <div className="section-content">
            {education.map((e) => (
              <div
                key={e.year}
                style={{
                  display: "grid",
                  gridTemplateColumns: "160px 1fr",
                  gap: "2rem",
                  padding: "1rem 0"
                }}
              >
                <span>{e.year}</span>
                <span>{e.what}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-with-heading">
          <div className="section-heading">
            <h2>Contact</h2>
          </div>
          <div className="section-content">
            <p>
              <a href="mailto:are.landfald@gmail.com">are.landfald@gmail.com</a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
