import type { Metadata } from "next";
import FadeInObserver from "@/components/FadeInObserver";
import SlideMenu from "@/components/SlideMenu";

export const metadata: Metadata = {
  title: "Creative AI-coding",
  description:
    "A four-week course at AHO (2025) on prompting as a craft — and on the questions that opened up along the way."
};

export default function WebsitePage() {
  return (
    <>
      <FadeInObserver />
      <SlideMenu activeSlug="website" />

      <section className="hero-section">
        <img
          src="/Assets/Grammars of noice/klasserommet.JPG"
          alt="Classroom — Creative Coding AI-edition at AHO"
          className="hero-image-full"
        />
        <div className="hero-title-overlay">
          <h1 className="project-title-hero">Creative AI-coding</h1>
        </div>
        <div className="hero-meta-overlay">
          <span>Type: Course</span>
          <span className="meta-divider">|</span>
          <span>Year: 2025 (4 weeks)</span>
          <span className="meta-divider">|</span>
          <span>Role: Student</span>
          <span className="meta-divider">|</span>
          <span>School: AHO</span>
        </div>
        <div className="scroll-indicator">↓</div>
      </section>

      <main className="project-main">
        <section className="section-statement fade-in">
          <p className="statement-text" style={{ fontFamily: "GeistRegular, sans-serif" }}>
            Prompting as a medium.
          </p>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Background</h2>
          </div>
          <div className="section-content">
            <p>
              <em>Creative Coding AI-edition</em> &mdash; a four-week course at AHO. The premise: prompting is a craft.
            </p>
            <p>
              We tested the personalities of different language models &mdash; what each one wants, what it resists, how it can be pushed. We learned to use them, and at times to manipulate them, to get what we were after.
            </p>
          </div>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1400 }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "auto", display: "block" }}
          >
            <source src="/Assets/Grammars of noice/groise.eksempel.mp4" type="video/mp4" />
          </video>
        </section>

        <section className="section-statement fade-in">
          <p className="statement-text" style={{ fontFamily: "GeistRegular, sans-serif" }}>
            Can a language model paint its own portrait?
          </p>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1400 }}>
          <video
            className="hero-image-full"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "auto", display: "block" }}
          >
            <source src="/Assets/Grammars of noice/groise.herovideo.mp4" type="video/mp4" />
          </video>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>The final project</h2>
          </div>
          <div className="section-content">
            <p>
              <em>Grammars of Noise</em> &mdash;{" "}
              <a href="https://al.groise.no/" target="_blank" rel="noopener noreferrer">
                al.groise.no
              </a>
              . The brief I set myself: get ChatGPT&nbsp;5.0 to make a self-portrait of itself.
            </p>
            <p>
              A second question ran beneath it: can a website function as a medium for a self-portrait? I hadn&apos;t seen it done.
            </p>
          </div>
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

        <section className="section-statement fade-in">
          <p className="statement-text" style={{ fontFamily: "GeistRegular, sans-serif" }}>
            The experiment proves impossible.
          </p>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Results</h2>
          </div>
          <div className="section-content">
            <p>
              A language model is built to satisfy. Any &ldquo;self-portrait&rdquo; it produces is a guess at what the user wants it to be &mdash; not the expression of an identity of its own. The failure was the finding.
            </p>
          </div>
        </section>

        <section className="section-statement fade-in">
          <h2 className="statement-text section-tabloid-heading">Presentation day</h2>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1400, padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 30 }}>
            <img src="/Assets/Grammars of noice/match1.JPG" alt="Match 1" style={{ width: "100%", height: "auto", display: "block" }} />
            <img src="/Assets/Grammars of noice/match2.JPG" alt="Match 2" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Credits</h2>
          </div>
          <div className="section-content">
            <p>
              Course taught by talented professor Enrique Encinas at AHO. Thank you.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
