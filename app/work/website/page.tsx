import type { Metadata } from "next";
import FadeInObserver from "@/components/FadeInObserver";
import SlideMenu from "@/components/SlideMenu";
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
      <SlideMenu activeSlug="website" />

      <section className="hero-section">
        <video className="hero-image-full" autoPlay loop muted playsInline>
          <source src="/Assets/Grammars of noice/groise.herovideo.mp4" type="video/mp4" />
        </video>
        <div className="hero-title-overlay">
          <h1 className="project-title-hero">Website</h1>
        </div>
        <div className="hero-meta-overlay">
          <span>Type: Website</span>
          <span className="meta-divider">|</span>
          <span>Year: 2025 (1 week)</span>
          <span className="meta-divider">|</span>
          <span>Role: Artist &amp; Developer</span>
          <span className="meta-divider">|</span>
          <span>Client: Personal Project</span>
        </div>
        <div className="scroll-indicator">↓</div>
      </section>

      <main className="project-main">
        <section className="section-statement fade-in">
          <p className="statement-text" style={{ fontFamily: "GeistRegular, sans-serif" }}>
            Can a language model paint its own portrait?
          </p>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>About the project</h2>
          </div>
          <div className="section-content">
            <p>
              The website{" "}
              <a href="https://al.groise.no/" target="_blank" rel="noopener noreferrer">
                al.groise.no
              </a>{" "}
              engages with two intertwined questions: how a large language model like ChatGPT&nbsp;5.0 might produce a visual self-representation, and how the website itself can operate as a medium for the construction of a self-portrait.
            </p>
          </div>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1400 }}>
          <img
            src="/Assets/Grammars of noice/grammars.of.noice.png"
            alt="Grammars of Noice"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1400, padding: "80px 40px" }}>
          <div className="image-pair-row">
            <video autoPlay loop muted playsInline className="image-pair-large" style={{ display: "block" }}>
              <source src="/Assets/Grammars of noice/groise.kamera.mp4" type="video/mp4" />
            </video>
            <video autoPlay loop muted playsInline className="image-pair-small image-pair-offset" style={{ display: "block" }}>
              <source src="/Assets/Grammars of noice/groise.animals.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        <section id="results-section" className="section-statement fade-in">
          <p className="statement-text" style={{ fontFamily: "GeistRegular, sans-serif" }}>
            The experiment ultimately proves impossible.
          </p>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Results</h2>
          </div>
          <div className="section-content">
            <p>
              A large language model is designed to interpret and satisfy the user&apos;s expectations. Any &ldquo;self-portrait&rdquo; it produces will therefore inevitably become a reflection of what it thinks the user wants it to identify as, rather than the expression of an identity of its own.
            </p>
          </div>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Presentation day</h2>
          </div>
          <div className="section-content" />
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1400, padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 30 }}>
            <img src="/Assets/Grammars of noice/match1.JPG" alt="Match 1" style={{ width: "100%", height: "auto", display: "block" }} />
            <img src="/Assets/Grammars of noice/match2.JPG" alt="Match 2" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        </section>
      </main>
    </>
  );
}
