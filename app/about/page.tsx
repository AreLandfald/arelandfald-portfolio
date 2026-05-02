import type { Metadata } from "next";
import BodyClass from "@/components/BodyClass";
import FadeInObserver from "@/components/FadeInObserver";
import SlideMenu from "@/components/SlideMenu";

export const metadata: Metadata = {
  title: "About me",
  description: "About Are Landfald — design student at AHO."
};

export default function AboutPage() {
  return (
    <>
      <BodyClass className="about-route" />
      <FadeInObserver />
      <SlideMenu />

      <section className="hero-section">
        <img
          className="hero-image-full"
          src="/Assets/bilde-av-meg-til-portefolje.jpg"
          alt="Are Landfald"
        />
        <div className="hero-title-overlay">
          <h1 className="project-title-hero">About me</h1>
        </div>
        <div className="hero-meta-overlay">
          <span>Name: Are Landfald</span>
          <span className="meta-divider">|</span>
          <span>Role: Designer</span>
          <span className="meta-divider">|</span>
          <span>Based in: Oslo</span>
          <span className="meta-divider">|</span>
          <span>Studies: AHO</span>
        </div>
        <div className="scroll-indicator">↓</div>
      </section>

      <main className="project-main">
        <section className="section-statement fade-in">
          <p className="statement-text" style={{ fontFamily: "GeistRegular, sans-serif" }}>
            Design that stimulates curiosity, invites reflection, and feels grounded in its context.
          </p>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Bio</h2>
          </div>
          <div className="section-content">
            <p>
              I&apos;m a design student in the second year of the five-year Master&apos;s programme at the Oslo School of Architecture and Design (AHO). My work moves between digital and analogue tools, using both to create tangible and thoughtful experiences.
            </p>
            <p>
              My process often starts with research, but intuition plays an equally important role. I&apos;m particularly strong in the conceptual phase of a project, where ideas are shaped, questioned and given direction through experimentation and exploration. I enjoy working both independently and collaboratively, depending on what the project calls for.
            </p>
            <p>
              I&apos;m interested in taking time away from my studies to gain practical experience, and to better understand how design practices are shaped by cultural context.
            </p>
          </div>
        </section>

        <section className="section-statement fade-in">
          <p className="statement-text" style={{ fontFamily: "GeistRegular, sans-serif" }}>
            Between research and intuition.
          </p>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Education</h2>
          </div>
          <div className="section-content">
            <p>2024 — 2026 / Oslo School of Architecture and Design — MA Design (ongoing)</p>
            <p>2023 — 2024 / Kristiania — BA Screenwriting</p>
            <p>2021 / Den Skandinaviske Designhøjskole — Architecture and urbanism (precourse)</p>
          </div>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Skills</h2>
          </div>
          <div className="section-content">
            <p>Visual identity design, branding, typography, digital design, print design.</p>
          </div>
        </section>

        <section className="section-with-heading fade-in">
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
