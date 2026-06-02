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

const skills = ["Adobe Suite", "Figma", "Claude Code in VS Code", "Fusion 360", "Sketchup", "Microsoft MakeCode"];

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
              I&apos;m a 23-year-old design student at the Oslo School of Architecture and Design (AHO), specialising in interaction design &mdash; with a foundation that spans service design and three-dimensional industrial design.
            </p>
            <p style={{ margin: "1.5rem 0 0" }}>
              My work moves across disciplines and formats: from immersive sound installations and game design to visual identity, synthesizer design, and AI-driven creative coding. At the centre of it all is a single question &mdash; how does this feel to be inside of? The quality of immersion, the depth of experience, the moment someone is fully pulled in &mdash; this is where my design thinking begins and ends.
            </p>
            <p style={{ margin: "1.5rem 0 0" }}>
              I ground my practice in research and user testing, while trusting intuition and deep creative empathy to find the idea that gives a project its direction.
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
            <p style={{ margin: 0 }}>{skills.join(", ")}</p>
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
