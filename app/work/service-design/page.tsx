import type { Metadata } from "next";
import SlideMenu from "@/components/SlideMenu";
import FadeInObserver from "@/components/FadeInObserver";

export const metadata: Metadata = {
  title: "Service design",
  description: "Service design project for Østensjø — Municipality of Oslo."
};

export default function ServiceDesignPage() {
  return (
    <>
      <FadeInObserver />
      <SlideMenu activeSlug="service-design" />

      <section className="hero-section">
        <img
          src="/Assets/Ostensjo/ostensjo.forsidebilde.jpg"
          alt="Service design — Østensjø"
          className="hero-image-full"
        />
        <div className="hero-title-overlay">
          <h1 className="project-title-hero">Service design</h1>
        </div>
        <div className="hero-meta-overlay">
          <span>Type: Service design</span>
          <span className="meta-divider">|</span>
          <span>Year: 2025</span>
          <span className="meta-divider">|</span>
          <span>Role: Designer</span>
          <span className="meta-divider">|</span>
          <span>Client: Municipality of Oslo</span>
        </div>
        <div className="scroll-indicator">↓</div>
      </section>

      <main className="project-main">
        <section className="section-statement fade-in">
          <h2 className="statement-text section-tabloid-heading" style={{ fontSize: "3rem" }}>
            A project about physical activity, volunteering, and local community pride.
          </h2>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Background</h2>
          </div>
          <div className="section-content">
            <p>
              An aging population is growing. We&apos;re living longer and there are more of us. This is fundamentally positive, but it challenges how we organize society. The public sector cannot bear full responsibility for the elderly alone.
            </p>
          </div>
        </section>

        <section className="section-statement fade-in">
          <h2 className="statement-text section-tabloid-heading" style={{ fontSize: "3rem" }}>
            Design a service for early retirees (60&ndash;75) in Østensjø, aimed at encouraging physical activity to help them stay independent from public healthcare for as long as possible.
          </h2>
        </section>
      </main>
    </>
  );
}
