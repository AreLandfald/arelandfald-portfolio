import type { Metadata } from "next";
import SlideMenu from "@/components/SlideMenu";

export const metadata: Metadata = {
  title: "About me",
  description: "About Are Landfald — design student at AHO."
};

/**
 * About page uses the same .section-with-heading / .section-content
 * layout as the project pages: label absolutely positioned to the
 * page's far left, body text centred in a 800 px max column. Typography
 * comes straight from globals.css — no overrides. The only bespoke
 * piece is the hero, which is a text headline + portrait grid instead
 * of the project pages' full-bleed image hero.
 */

const education = [
  { year: "2024 — 2026", what: "Oslo School of Architecture and Design — MA Design (ongoing)" },
  { year: "2023 — 2024", what: "Kristiania — BA Screenwriting" },
  { year: "2021",        what: "Den Skandinaviske Designhøjskole — Architecture and urbanism (precourse)" },
  { year: "2018 — 2021", what: "Elvebakken videregående skole — Art, design and architecture" }
];

const languages = [
  { level: "Fluent",   what: "Norwegian, English, Danish, Swedish" },
  { level: "Advanced", what: "Spanish" }
];

export default function AboutPage() {
  return (
    <>
      <SlideMenu />

      <section
        style={{
          maxWidth: 1132,
          margin: "0 auto",
          padding: "7rem 40px 5rem",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "1.5rem",
          alignItems: "center",
          background: "#fff",
          color: "#000"
        }}
      >
        <h1
          style={{
            fontFamily: "'GeistRegular', sans-serif",
            fontSize: "3.6rem",
            fontWeight: 400,
            letterSpacing: "0.05em",
            lineHeight: 1.1,
            color: "#000",
            margin: 0
          }}
        >
          Are Landfald
        </h1>
        <img
          src="/Assets/aboutme.jpg"
          alt="Are Landfald"
          style={{
            width: 240,
            height: "auto",
            aspectRatio: "3 / 4",
            objectFit: "cover",
            display: "block"
          }}
        />
      </section>

      <main className="project-main">
        <section className="section-with-heading">
          <div className="section-heading">
            <h2>About</h2>
          </div>
          <div className="section-content">
            <p>
              I&apos;m a 23-year-old design student at the Oslo School of Architecture and Design (AHO), specialising in interaction design &mdash; with a background that spans service design and three-dimensional industrial design.
            </p>
            <p>
              I&apos;m drawn to immersiveness and storytelling: design that pulls people in and makes them feel something. I adapt easily to different processes &mdash; user research and testing matter to me, but so does intuition and the ability to truly inhabit a brief.
            </p>
            <p>
              What interests me most is the lived experience of design &mdash; the moment someone actually encounters it.
            </p>
          </div>
        </section>

        <section className="section-with-heading">
          <div className="section-heading">
            <h2>Skills</h2>
          </div>
          <div className="section-content" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
            <div>Adobe Suite</div>
            <div>Figma</div>
            <div>Claude Code in VS Code</div>
            <div>Fusion 360</div>
            <div>Microsoft MakeCode</div>
          </div>
        </section>

        <section className="section-with-heading">
          <div className="section-heading">
            <h2>Languages</h2>
          </div>
          <div className="section-content" style={{ fontSize: "1rem", lineHeight: 1.6 }}>
            {languages.map((l, i) => (
              <div
                key={l.level}
                style={{
                  display: "grid",
                  gridTemplateColumns: "160px 1fr",
                  gap: "2rem",
                  padding: "1rem 0",
                  borderTop: i === 0 ? "none" : "0.5px solid rgba(0,0,0,0.15)"
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
          <div className="section-content" style={{ fontSize: "1rem", lineHeight: 1.6 }}>
            {education.map((e, i) => (
              <div
                key={e.year}
                style={{
                  display: "grid",
                  gridTemplateColumns: "160px 1fr",
                  gap: "2rem",
                  padding: "1rem 0",
                  borderTop: i === 0 ? "none" : "0.5px solid rgba(0,0,0,0.15)"
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
