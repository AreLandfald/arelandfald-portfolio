import type { Metadata } from "next";
import ProjectNav from "@/components/ProjectNav";
import FadeInObserver from "@/components/FadeInObserver";

export const metadata: Metadata = {
  title: "Musical instrument",
  description: "Interactive sound toy design."
};

export default function MusicalInstrumentPage() {
  return (
    <>
      <FadeInObserver />
      <ProjectNav prev={{ href: "/work/gamedesign" }} next={{ href: "/work/visual-identity" }} />

      <section className="hero-section">
        <img
          src="/Assets/Sound toys/soundtoys.hovedbildeinstrument.h.jpg"
          alt="Musical Instrument Project"
          className="hero-image-full"
        />
        <div className="hero-title-overlay">
          <h1 className="project-title-hero">Musical instrument</h1>
        </div>
        <div className="scroll-indicator">↓</div>
      </section>

      <main className="project-main">
        <section className="section-centered fade-in">
          <h2>Brief</h2>
          <p>
            Design an interactive sound toy that explores the relationship between physical interaction and audio feedback, creating an engaging and playful experience for users of all ages.
          </p>
        </section>

        <section className="section-centered fade-in">
          <h2>Concept</h2>
          <p>
            Sound toys bridge the gap between digital and physical play, offering tactile interactions that produce immediate sonic responses. This project explores how simple gestures can create complex soundscapes.
          </p>
        </section>

        <section className="section-full fade-in">
          <h2>Visual Exploration</h2>
          <img src="/Assets/Sound toys/soundtoys.hovedbildeinstrument.h.jpg" alt="Sound toys instrument" />
          <p className="image-caption">Exploring the visual language of interactive sound design.</p>
        </section>

        <section className="section-centered fade-in">
          <h2>About the project</h2>
          <p>
            This interactive toy encourages experimentation and discovery through sound. Each interaction creates unique audio patterns, making every play session a new creative experience.
          </p>
        </section>
      </main>
    </>
  );
}
