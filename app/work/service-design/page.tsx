import type { Metadata } from "next";
import SlideMenu from "@/components/SlideMenu";
import FadeInObserver from "@/components/FadeInObserver";
import BodyClass from "@/components/BodyClass";

export const metadata: Metadata = {
  title: "Service design",
  description: "Service design project for Østensjø — Municipality of Oslo."
};

export default function ServiceDesignPage() {
  return (
    <>
      <BodyClass className="light-hero" />
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
            Design a service for early retirees (60&ndash;75) in Østensjø, aimed at facilitating organised physical activity to help them stay independent from public healthcare for as long as possible &mdash; with one constraint: no budget.
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
            Research by visiting Østensjø, and meeting:
          </h2>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1400, padding: "0 40px", marginBottom: 200 }}>
          <div className="we-have-met-grid">
            {[
              { n: 6, label: "Employees from organized training groups for retirees" },
              { n: 7, label: "Users from target group" },
              { n: 20, label: "Informal conversations with target group" }
            ].map((c) => (
              <div
                key={c.n}
                style={{
                  aspectRatio: "1 / 1",
                  borderRadius: "50%",
                  background: "#F4FFAD",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "12%",
                  color: "#3D4A00"
                }}
              >
                <div style={{ fontSize: "clamp(3.5rem, 9vw, 6rem)", fontWeight: 700, lineHeight: 1 }}>{c.n}</div>
                <div style={{ fontSize: "clamp(0.85rem, 1.1vw, 1.05rem)", marginTop: 16, lineHeight: 1.35 }}>{c.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 800, padding: "0 40px", marginBottom: 200 }}>
          <div className="we-have-met-images">
            <img src="/Assets/Ostensjo/we.have.met.jpg" alt="Visit at Østensjø" />
            <img src="/Assets/Ostensjo/we.have.met2.jpg" alt="Visit at Østensjø" />
            <img src="/Assets/Ostensjo/we.have.met3.jpg" alt="Visit at Østensjø" />
            <img src="/Assets/Ostensjo/we.have.met4.jpg" alt="Visit at Østensjø" />
          </div>
        </section>

        <section className="section-statement fade-in">
          <h2 className="statement-text section-tabloid-heading" style={{ fontSize: "3rem" }}>
            The research revealed four key findings that shaped the design of our solution.
          </h2>
        </section>

        <section className="section-full fade-in findings-section">
          <div className="findings-grid">
            {[
              {
                title: "Community",
                text: "Social connection is a primary motivation for attending organised training groups.",
                img: "/Assets/Ostensjo/nokkelfunn1.png"
              },
              {
                title: "Information",
                text: "Communication should not only provide information, but also help the target group feel both reached and seen.",
                img: "/Assets/Ostensjo/nokkelfunn2.png"
              },
              {
                title: "Prevention",
                text: "Recommendations for physical activity are often introduced only after people begin experiencing health issues.",
                img: "/Assets/Ostensjo/nokkelfunn3.png"
              },
              {
                title: "Identity",
                text: "The target group needs to feel represented.",
                img: "/Assets/Ostensjo/nokkelfunn4.png"
              }
            ].map((f) => (
              <article key={f.title} className="findings-card">
                <h3 className="findings-card-title">{f.title}</h3>
                <p className="findings-card-text">{f.text}</p>
                <div className="findings-card-image">
                  <img src={f.img} alt={f.title} />
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
