import type { Metadata } from "next";
import ProjectNav from "@/components/ProjectNav";
import FadeInObserver from "@/components/FadeInObserver";
import ScrollColorMode from "@/components/ScrollColorMode";

export const metadata: Metadata = {
  title: "Website / A self-portrait of ChatGPT-5",
  description: "A self-portrait website made by ChatGPT-5."
};

export default function WebsitePage() {
  return (
    <>
      <FadeInObserver />
      <ScrollColorMode
        rules={[{ sectionId: "results-section", bodyClass: "dark-mode", threshold: 0.5 }]}
        rootMargin="-10% 0px"
      />
      <ProjectNav prev={{ href: "/work/visual-identity" }} next={{ href: "/work/immersive-sound" }} />

      <section className="hero-section">
        <video className="hero-image-full" autoPlay loop muted playsInline>
          <source src="/Assets/Grammars of noice/groise.herovideo.mp4" type="video/mp4" />
        </video>
        <div className="hero-title-overlay">
          <h1 className="project-title-hero">Website</h1>
        </div>
        <div className="scroll-indicator">↓</div>
      </section>

      <main className="project-main">
        <section className="section-centered fade-in">
          <h2>Description</h2>
          <p>
            The website{" "}
            <a href="https://al.groise.no/" target="_blank" rel="noopener noreferrer">
              https://al.groise.no/
            </a>{" "}
            engages with two intertwined questions: how a large language model like ChatGPT 5.0 might produce a visual self-representation, and how the website itself can operate as a medium for the construction of a self-portrait.
          </p>
        </section>

        <section className="section-full fade-in">
          <img
            src="/Assets/Grammars of noice/grammars.of.noice.png"
            alt="Grammars of Noice"
            style={{ width: "100%", height: "auto", display: "block", marginBottom: 30, border: "1px solid #000" }}
          />
          <div style={{ display: "flex", gap: 30, alignItems: "flex-end", justifyContent: "flex-end", width: "100%", flexWrap: "wrap" }}>
            <video autoPlay loop muted playsInline style={{ height: 400, width: "auto", display: "block", border: "1px solid #000" }}>
              <source src="/Assets/Grammars of noice/groise.kamera.mp4" type="video/mp4" />
            </video>
            <video autoPlay loop muted playsInline style={{ height: 400, width: "auto", display: "block", border: "1px solid #000" }}>
              <source src="/Assets/Grammars of noice/groise.animals.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        <section id="results-section" className="section-centered fade-in">
          <h2>Results</h2>
          <p>
            The experiment ultimately proves impossible: A large language model is designed to interpret and satisfy the user&apos;s expectations. Any &ldquo;self-portrait&rdquo; it produces will therefore inevitably become a reflection of what it thinks the user wants it to identify as, rather than the expression of an identity of its own.
          </p>
        </section>

        <section className="section-full fade-in">
          <h2>Presentation day</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 30, marginTop: 40 }}>
            <img src="/Assets/Grammars of noice/match1.JPG" alt="Match 1" style={{ width: "100%", height: "auto", display: "block", border: "1px solid #000" }} />
            <img src="/Assets/Grammars of noice/match2.JPG" alt="Match 2" style={{ width: "100%", height: "auto", display: "block", border: "1px solid #000" }} />
          </div>
        </section>
      </main>
    </>
  );
}
