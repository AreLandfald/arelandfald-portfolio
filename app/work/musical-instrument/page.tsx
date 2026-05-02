import type { Metadata } from "next";
import SlideMenu from "@/components/SlideMenu";
import FadeInObserver from "@/components/FadeInObserver";

export const metadata: Metadata = {
  title: "Musical instrument",
  description: "Interactive sound toy design."
};

export default function MusicalInstrumentPage() {
  return (
    <>
      <FadeInObserver />
      <SlideMenu activeSlug="musical-instrument" />

      <section className="hero-section">
        <img
          src="/Assets/Sound toys/soundtoys.hovedbildeinstrument.h.jpg"
          alt="Musical Instrument Project"
          className="hero-image-full"
        />
        <div className="hero-title-overlay">
          <h1 className="project-title-hero">Musical instrument</h1>
        </div>
        <div className="hero-meta-overlay">
          <span>Type: Interactive Design</span>
          <span className="meta-divider">|</span>
          <span>Year: 2024</span>
          <span className="meta-divider">|</span>
          <span>Role: Designer</span>
          <span className="meta-divider">|</span>
          <span>Client: Personal Project</span>
        </div>
        <div className="scroll-indicator">↓</div>
      </section>

      <main className="project-main">
        <section className="section-statement fade-in">
          <p className="statement-text" style={{ fontFamily: "GeistRegular, sans-serif" }}>
            A toy that turns gesture into sound.
          </p>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Brief</h2>
          </div>
          <div className="section-content">
            <p>
              Design an interactive sound toy that explores the relationship between physical interaction and audio feedback, creating an engaging and playful experience for users of all ages.
            </p>
          </div>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Concept</h2>
          </div>
          <div className="section-content">
            <p>
              Sound toys bridge the gap between digital and physical play, offering tactile interactions that produce immediate sonic responses. This project explores how simple gestures can create complex soundscapes.
            </p>
          </div>
        </section>

        <section className="section-statement fade-in">
          <p className="statement-text" style={{ fontFamily: "GeistRegular, sans-serif" }}>
            Every interaction is a new composition.
          </p>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Visual exploration</h2>
          </div>
          <div className="section-content">
            <p>Exploring the visual language of interactive sound design.</p>
          </div>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1400 }}>
          <img src="/Assets/Sound toys/soundtoys.hovedbildeinstrument.h.jpg" alt="Sound toys instrument" style={{ width: "100%", height: "auto", display: "block" }} />
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>About the project</h2>
          </div>
          <div className="section-content">
            <p>
              This interactive toy encourages experimentation and discovery through sound. Each interaction creates unique audio patterns, making every play session a new creative experience.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
