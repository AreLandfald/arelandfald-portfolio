import type { Metadata } from "next";
import SlideMenu from "@/components/SlideMenu";

export const metadata: Metadata = {
  title: "About me",
  description: "About Are Landfald — design student at AHO."
};

/**
 * Typography on this page mirrors the project pages exactly:
 *   - Body / labels:  GeistThin, 1.32rem, line-height 1.8, weight 400
 *     (matches .section-heading + .section-content from globals.css)
 *   - Large headline: GeistRegular, 3.6rem, weight 400, letter-spacing
 *     0.05em (matches .project-title-hero, with color overridden to
 *     #000 because we're on a white background, not a hero overlay).
 *
 * Container width is sized so the right (content) cell of the
 * 220px / 1fr grid lines up with the 800px text column used by
 * .section-content on project pages — 220 label + 32 gap + 800 cell
 * + 40 padding × 2 = 1132 px.
 */

const TEXT: React.CSSProperties = {
  fontFamily: "'GeistThin', sans-serif",
  fontSize: "1.32rem",
  lineHeight: 1.8,
  fontWeight: 400,
  color: "#000",
  margin: 0
};

const sectionStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "220px 1fr",
  gap: "2rem",
  marginTop: "7rem"
};

const education = [
  { year: "2024 — 2026", what: "Oslo School of Architecture and Design — MA Design (ongoing)" },
  { year: "2023 — 2024", what: "Kristiania — BA Screenwriting" },
  { year: "2021",        what: "Den Skandinaviske Designhøjskole — Architecture and urbanism (precourse)" }
];

export default function AboutPage() {
  return (
    <>
      <SlideMenu />

      <main
        style={{
          maxWidth: 1132,
          margin: "0 auto",
          padding: "7rem 40px 8rem",
          background: "#fff",
          color: "#000"
        }}
      >
        {/* HERO */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "3rem",
            alignItems: "center",
            marginBottom: "10rem"
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
            src="/Assets/bilde-av-meg-til-portefolje.jpg"
            alt="Are Landfald"
            style={{
              width: 200,
              height: "auto",
              aspectRatio: "3 / 4",
              objectFit: "cover",
              display: "block"
            }}
          />
        </section>

        {/* ABOUT */}
        <section style={sectionStyle}>
          <h2 style={TEXT}>About</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>
            <p style={TEXT}>
              I&apos;m a design student in the second year of the five-year Master&apos;s programme at the Oslo School of Architecture and Design (AHO). My work moves between digital and analogue tools, using both to create tangible and thoughtful experiences.
            </p>
            <p style={TEXT}>
              My process often starts with research, but intuition plays an equally important role. I&apos;m particularly strong in the conceptual phase of a project, where ideas are shaped, questioned and given direction through experimentation and exploration. I enjoy working both independently and collaboratively, depending on what the project calls for.
            </p>
            <p style={TEXT}>
              I&apos;m interested in taking time away from my studies to gain practical experience, and to better understand how design practices are shaped by cultural context.
            </p>
          </div>
        </section>

        {/* EDUCATION */}
        <section style={sectionStyle}>
          <h2 style={TEXT}>Education</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {education.map((e) => (
              <div
                key={e.year}
                style={{
                  display: "grid",
                  gridTemplateColumns: "160px 1fr",
                  gap: "2rem"
                }}
              >
                <span style={TEXT}>{e.year}</span>
                <span style={TEXT}>{e.what}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section style={sectionStyle}>
          <h2 style={TEXT}>Contact</h2>
          <div>
            <a
              href="mailto:are.landfald@gmail.com"
              style={{ ...TEXT, color: "#000", textDecoration: "underline" }}
            >
              are.landfald@gmail.com
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
