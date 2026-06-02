import type { Metadata } from "next";
import SlideMenu from "@/components/SlideMenu";

export const metadata: Metadata = {
  title: "About me",
  description: "About Are Landfald — design student at AHO."
};

const DIVIDER = "0.5px solid rgba(0,0,0,0.18)";
const SUB_DIVIDER = "0.5px solid rgba(0,0,0,0.12)";

const sectionStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "220px 1fr",
  gap: "2rem",
  marginTop: "6rem",
  paddingTop: "2rem",
  borderTop: DIVIDER
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'GeistRegular', sans-serif",
  fontSize: "0.85rem",
  fontWeight: 400,
  margin: 0,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  color: "#000"
};

const bodyStyle: React.CSSProperties = {
  fontFamily: "'GeistThin', sans-serif",
  fontSize: "1.05rem",
  lineHeight: 1.85,
  margin: 0,
  color: "#000",
  fontWeight: 100
};

const eduRowStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "140px 1fr",
  gap: "2rem",
  padding: "1.2rem 0",
  borderTop: SUB_DIVIDER
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
          maxWidth: 1400,
          margin: "0 auto",
          padding: "7rem 2rem 8rem",
          background: "#fff",
          color: "#000",
          fontFamily: "'GeistRegular', sans-serif"
        }}
      >
        {/* HERO */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "3rem",
            alignItems: "end"
          }}
        >
          <h1
            style={{
              fontFamily: "'GeistThin', sans-serif",
              fontWeight: 100,
              fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.005em",
              margin: 0,
              maxWidth: "20ch"
            }}
          >
            Design that stimulates curiosity, invites reflection, and feels grounded in its context.
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

        {/* BIO */}
        <section style={{ ...sectionStyle, marginTop: "10rem" }}>
          <h2 style={labelStyle}>Bio</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <p style={bodyStyle}>
              I&apos;m a design student in the second year of the five-year Master&apos;s programme at the Oslo School of Architecture and Design (AHO). My work moves between digital and analogue tools, using both to create tangible and thoughtful experiences.
            </p>
            <p style={bodyStyle}>
              My process often starts with research, but intuition plays an equally important role. I&apos;m particularly strong in the conceptual phase of a project, where ideas are shaped, questioned and given direction through experimentation and exploration. I enjoy working both independently and collaboratively, depending on what the project calls for.
            </p>
            <p style={bodyStyle}>
              I&apos;m interested in taking time away from my studies to gain practical experience, and to better understand how design practices are shaped by cultural context.
            </p>
          </div>
        </section>

        {/* EDUCATION */}
        <section style={sectionStyle}>
          <h2 style={labelStyle}>Education</h2>
          <div>
            {education.map((e, i) => (
              <div
                key={e.year}
                style={{ ...eduRowStyle, ...(i === 0 ? { borderTop: "none", paddingTop: 0 } : null) }}
              >
                <span style={{ ...bodyStyle, fontFamily: "'GeistMono', monospace", fontSize: "0.95rem" }}>
                  {e.year}
                </span>
                <span style={bodyStyle}>{e.what}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section style={sectionStyle}>
          <h2 style={labelStyle}>Contact</h2>
          <div>
            <a
              href="mailto:are.landfald@gmail.com"
              style={{
                ...bodyStyle,
                color: "#000",
                textDecoration: "none",
                borderBottom: "0.5px solid rgba(0,0,0,0.3)",
                paddingBottom: 2
              }}
            >
              are.landfald@gmail.com
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
