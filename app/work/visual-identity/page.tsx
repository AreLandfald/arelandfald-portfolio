import type { Metadata } from "next";
import FadeInObserver from "@/components/FadeInObserver";
import SlideMenu from "@/components/SlideMenu";
import ScrollColorMode from "@/components/ScrollColorMode";

export const metadata: Metadata = {
  title: "Visual identity / Diplom-Is",
  description: "Visual identity redesign for Diplom-Is."
};

const colors = [
  { name: "Primary", hex: "#FAD01D" },
  { name: "Secondary", hex: "#FFFFFF" },
  { name: "Tertiary", hex: "#D31F36" },
  { name: "Flavor-based", hex: "#FFFFFF", showHex: false }
];

export default function VisualIdentityPage() {
  return (
    <>
      <FadeInObserver />
      <ScrollColorMode
        rules={[
          { sectionId: "fonts-section", bodyClass: "yellow-mode" },
          { sectionId: "color-system-section", bodyClass: "yellow-mode" }
        ]}
        exitSectionId="shelf-impact-section"
      />
      <SlideMenu activeSlug="visual-identity" />

      <section className="hero-section">
        <img
          src="/Assets/Diplomis/diplomis plakat mockup copy.jpg"
          alt="Visual identity for Diplom-Is"
          className="hero-image-full"
        />
        <div className="hero-title-overlay">
          <h1 className="project-title-hero">Visual identity</h1>
        </div>
        <div className="hero-meta-overlay">
          <span>Type: Visual Identity</span>
          <span className="meta-divider">|</span>
          <span>Year: 2024</span>
          <span className="meta-divider">|</span>
          <span>Role: Designer</span>
          <span className="meta-divider">|</span>
          <span>Client: Diplom-Is</span>
        </div>
        <div className="scroll-indicator">↓</div>
      </section>

      <main className="project-main">
        <section className="section-statement fade-in">
          <p className="statement-text" style={{ fontFamily: "GeistRegular, sans-serif" }}>
            The Norwegian ice-cream company Diplom-Is seeks to strengthen its market position by giving its core product, the ice-cream tub, a more premium look and feel.
          </p>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>About the brand</h2>
          </div>
          <div className="section-content">
            <p>
              Diplom-Is has been a symbol of everyday joy in Norway for more than 90 years. The story began in 1930, when local dairies joined forces to create ice cream made from the finest milk.
            </p>
            <p>
              Since then, Diplom-Is has grown from a small dairy initiative into one of the most recognized ice cream producers in the Nordic region.
            </p>
            <div className="heritage-grid" style={{ marginTop: 40 }}>
              <img src="/Assets/Diplomis/historie1.jpg" alt="Diplom-Is historie" style={{ aspectRatio: "1/1", objectFit: "cover", width: "100%", display: "block" }} />
              <img src="/Assets/Diplomis/historie 2.jpg" alt="Diplom-Is historie" style={{ aspectRatio: "1/1", objectFit: "cover", width: "100%", display: "block" }} />
              <img src="/Assets/Diplomis/historie3.jpg" alt="Diplom-Is historie" style={{ aspectRatio: "1/1", objectFit: "cover", width: "100%", display: "block" }} />
              <img src="/Assets/Diplomis/diplomis 9.jpg" alt="Diplom-Is historie" style={{ aspectRatio: "1/1", objectFit: "cover", width: "100%", display: "block" }} />
              <img src="/Assets/Diplomis/historie 11.jpg" alt="Diplom-Is historie" style={{ aspectRatio: "1/1", objectFit: "cover", width: "100%", display: "block" }} />
              <img src="/Assets/Diplomis/historie 13.jpg" alt="Diplom-Is historie" style={{ aspectRatio: "1/1", objectFit: "cover", width: "100%", display: "block" }} />
            </div>
          </div>
        </section>

        <section className="section-statement fade-in">
          <p className="statement-text" style={{ fontFamily: "GeistRegular, sans-serif" }}>
            A tub for many deserves a premium touch
          </p>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>The new tub</h2>
          </div>
          <div className="section-content">
            <p>The redesigned ice-cream tub embodies premium quality while maintaining approachability.</p>
          </div>
        </section>

        <section className="image-pair-grid fade-in">
          <img src="/Assets/Diplomis/notater.riktig.jpg" alt="Design notes" className="image-pair-grid-a" />
          <img src="/Assets/Diplomis/design.png" alt="The new Diplom-Is tub design" className="image-pair-grid-b" />
        </section>

        <section className="section-statement fade-in">
          <p className="statement-text" style={{ fontFamily: "GeistRegular, sans-serif" }}>
            Individually appealing, collectively powerful.
          </p>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>The system</h2>
          </div>
          <div className="section-content">
            <p>
              The design acts as a supporting element in itself, as the boxes together create a cohesive system in the freezer display. Placed side by side, they form a clean, curated visual where each package design flows into the next. Together, this creates a strong &ldquo;here I am&rdquo; effect that makes the brand highly visible.
            </p>
          </div>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: "none", padding: 0, marginBottom: 200 }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <video autoPlay loop muted playsInline style={{ width: "100%", height: "auto", display: "block" }}>
              <source src="/Assets/Diplomis/gif2.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        <section className="section-statement fade-in">
          <p className="statement-text" style={{ fontFamily: "GeistRegular, sans-serif" }}>
            Reframing the system to allow brand autonomy.
          </p>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Two categories</h2>
          </div>
          <div className="section-content">
            <p>
              I moved away from a single visual identity and restructured the system to better reflect the market reality. Iconic products like Lollipop, Kræsj Pink, and Gullpinne already function as strong, standalone ice-cream brands, and should carry that identity even in tub format.
            </p>
            <p>
              The system now gives these icons more autonomy through distinct colour worlds, while the classic flavours remain a more unified and traditional category within the same structure.
            </p>
          </div>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1400, marginBottom: 200 }}>
          <video autoPlay loop muted playsInline style={{ width: "100%", height: "auto", display: "block" }}>
            <source src="/Assets/Diplomis/output.mp4" type="video/mp4" />
          </video>
        </section>

        <section id="fonts-section" className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Fonts and colors</h2>
          </div>
          <div className="section-content">
            <p className="font-quicksand-medium" style={{ marginBottom: 20 }}>
              Quicksand Medium: The bold, friendly character of Diplom-Is comes through in every scoop. This weight is used for headings and product names, bringing warmth and approachability to the brand.
            </p>
            <p className="font-quicksand-regular" style={{ marginBottom: 40 }}>
              Quicksand Regular: Diplom-Is has been Norway&apos;s favorite ice cream since 1930, crafted with care from the finest dairy. This lighter weight provides clarity and readability for body text and supporting information.
            </p>
            <div id="color-system-section" className="color-grid-compact">
              {colors.map((c) => (
                <div key={c.name} className="color-card">
                  <div className="color-swatch" style={{ backgroundColor: c.hex, width: "100%", aspectRatio: "1/1", border: "1px solid #000" }}></div>
                  <h3 className="color-name" style={{ fontSize: "0.95rem" }}>{c.name}</h3>
                  {c.showHex !== false && <p className="color-hex" style={{ fontSize: "0.8rem" }}>{c.hex}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="shelf-impact-section" className="section-statement fade-in">
          <p className="statement-text" style={{ fontFamily: "GeistRegular, sans-serif" }}>
            Shelf impact meets campaign power.
          </p>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Marketing</h2>
          </div>
          <div className="section-content">
            <p>
              Social media and print advertising materials showcase the refreshed brand identity across various platforms.
            </p>
          </div>
        </section>

        <section className="image-pair-grid fade-in">
          <img src="/Assets/Diplomis/diplomis plakat mockup copy.jpg" alt="Poster mockup" className="image-pair-grid-a" />
          <img src="/Assets/Diplomis/instagram.diplomis2.jpg" alt="Instagram advertising" className="image-pair-grid-b" />
        </section>
      </main>
    </>
  );
}
