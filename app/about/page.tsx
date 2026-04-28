import type { Metadata } from "next";
import Link from "next/link";
import BodyClass from "@/components/BodyClass";
import FadeInObserver from "@/components/FadeInObserver";

export const metadata: Metadata = {
  title: "About me",
  description: "About Are Landfald — design student at AHO."
};

export default function AboutPage() {
  return (
    <>
      <BodyClass className="about-route" />
      <FadeInObserver />

      <header className="project-header">
        <Link href="/" className="back-link">
          ← Back to portfolio
        </Link>
      </header>

      <section className="hero-section">
        <img
          className="hero-image-full"
          src="/Assets/bilde-av-meg-til-portefolje.jpg"
          alt="Are Landfald"
        />
        <div className="hero-title-overlay">
          <h1 className="project-title-hero">About me</h1>
        </div>
        <div className="scroll-indicator">↓</div>
      </section>

      <main className="project-main">
        <section className="section-centered fade-in">
          <h2>Bio</h2>
          <p>
            I&apos;m a design student in the second year of the five-year Master&apos;s programme at the Oslo School of Architecture and Design (AHO). My work moves between digital and analogue tools, using both to create tangible and thoughtful experiences.
          </p>
          <p>
            My process often starts with research, but intuition plays an equally important role. I&apos;m particularly strong in the conceptual phase of a project, where ideas are shaped, questioned and given direction through experimentation and exploration. I enjoy working both independently and collaboratively, depending on what the project calls for.
          </p>
          <p>
            I aim to create design that stimulates curiosity, invites reflection, and feels grounded in its context.
          </p>
          <p>
            I&apos;m interested in taking time away from my studies to gain practical experience, and to better understand how design practices are shaped by cultural context.
          </p>
        </section>

        <section className="section-centered fade-in">
          <h2>Education</h2>
          <p>2024 - 2026 / Oslo School of Architecture and Design — MA Design (ongoing)</p>
          <p>2023 - 2024 / Kristiania — BA Screenwriting</p>
          <p>2021 / Den Skandinaviske Designhøjskole — Architecture and urbanism (precourse)</p>
        </section>

        <section className="section-centered fade-in">
          <h2>Skills</h2>
          <p>Visual Identity Design, Branding, Typography, Digital Design, Print Design</p>
        </section>

        <section className="section-centered fade-in">
          <h2>Contact</h2>
          <p>
            <a href="mailto:are.landfald@gmail.com">are.landfald@gmail.com</a>
          </p>
        </section>
      </main>
    </>
  );
}
