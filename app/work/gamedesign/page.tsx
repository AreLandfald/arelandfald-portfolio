import type { Metadata } from "next";
import FadeInObserver from "@/components/FadeInObserver";
import SlideMenu from "@/components/SlideMenu";
import ScrollColorMode from "@/components/ScrollColorMode";

export const metadata: Metadata = {
  title: "Gamedesign",
  description: "A board game about prepping for the apocalypse."
};

const colors = [
  { name: "Necessities 1", hex: "#C3E4F1" },
  { name: "Necessities 2", hex: "#D8EBEB" },
  { name: "Text Color", hex: "#2A2856" },
  { name: "Fresh Goods", hex: "#8BC6A5" },
  { name: "Dry Goods", hex: "#F3C97A" },
  { name: "Household Items", hex: "#E68978" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Warning", hex: "#F6664C" },
  { name: "Ready", hex: "#82D6F8" }
];

export default function GamedesignPage() {
  return (
    <>
      <FadeInObserver />
      <ScrollColorMode
        rules={[
          { sectionId: "fonts-section", bodyClass: "gamedesign-dark" },
          { sectionId: "color-section", bodyClass: "blue-mode" }
        ]}
        exitSectionId="testing-section"
      />
      <SlideMenu activeSlug="gamedesign" />

      <section className="hero-section">
        <img className="hero-image-full" src="/Assets/Gamedesign/brettet.jpeg" alt="Beredt — the prepper game" />
        <div className="hero-title-overlay">
          <h1 className="project-title-hero">Gamedesign</h1>
        </div>
        <div className="hero-meta-overlay">
          <span>Type: Board Game</span>
          <span className="meta-divider">|</span>
          <span>Year: 2025 (two weeks)</span>
          <span className="meta-divider">|</span>
          <span>Role: Game Designer</span>
          <span className="meta-divider">|</span>
          <span>Client: None</span>
        </div>
        <div className="scroll-indicator">↓</div>
      </section>

      <main className="project-main">
        <section className="section-statement fade-in">
          <p className="statement-text" style={{ fontFamily: "GeistRegular, sans-serif" }}>
            The year is 2025. War looms, and panic grips the world.
          </p>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>About the game</h2>
          </div>
          <div className="section-content">
            <p>
              In Beredt, players scramble to follow Norway&apos;s official survival plans — stocking water, canned food, and crispbread for at least a week.
            </p>
            <p>
              But hidden Nihilists have lost all hope of survival, craving one final feast of wine, games, and cheese before doomsday.
            </p>
            <p>Who will secure the supplies before the war erupts?</p>
          </div>
        </section>

        <section className="section-statement fade-in">
          <p className="statement-text" style={{ fontFamily: "GeistRegular, sans-serif" }}>
            A game that turns preparedness into play.
          </p>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Rules</h2>
          </div>
          <div className="section-content">
            <p>
              The game introduces players to government emergency preparedness recommendations through gameplay — turning a serious political context into a shared moment of humour.
            </p>
          </div>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1400 }}>
          <img src="/Assets/Gamedesign/regler.kort-web.png" alt="Game Rules" style={{ width: "100%", height: "auto", display: "block" }} />
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Purpose</h2>
          </div>
          <div className="section-content">
            <p>
              The game has an educational purpose: it introduces players to government emergency preparedness recommendations in an engaging way. At the same time it lightens a serious political context and lets people share a moment of humour and enjoyment in a difficult situation.
            </p>
          </div>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Aesthetic</h2>
          </div>
          <div className="section-content">
            <p>The visual identity is built on the Oslo design system — clean, civic, instantly recognisable.</p>
          </div>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1400 }}>
          <img src="/Assets/Gamedesign/visuell identitet/oslo.designmanual.png" alt="Oslo Design Manual" style={{ width: "100%", height: "auto", display: "block" }} />
        </section>

        <section id="fonts-section" className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Fonts</h2>
          </div>
          <div className="section-content">
            <div className="font-samples">
              <p className="font-medium">
                Oslo Sans (Medium): The primary typeface for headings and important information. Strong visual hierarchy and readability.
              </p>
              <p className="font-light">
                Oslo Sans (Light): Used for body text and secondary information. Clean and approachable across the game materials.
              </p>
              <p className="font-light-italic">
                Oslo Sans (Light Italic): Adds emphasis and variation, used for special notes and flavour text.
              </p>
            </div>
          </div>
        </section>

        <section id="color-section" className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Color system</h2>
          </div>
          <div className="section-content">
            <div className="color-grid-compact" style={{ maxWidth: "100%" }}>
              {colors.map((c) => (
                <div key={c.hex + c.name} className="color-card">
                  <div className="color-swatch" style={{ backgroundColor: c.hex, aspectRatio: "1/1" }}></div>
                  <h3 className="color-name" style={{ fontSize: "0.95rem" }}>{c.name}</h3>
                  <p className="color-hex" style={{ fontSize: "0.8rem" }}>{c.hex}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testing-section" className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Testing &amp; prototyping</h2>
          </div>
          <div className="section-content">
            <p>The game was prototyped and playtested in two iterations to balance accessibility with strategic depth.</p>
          </div>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1400 }}>
          <div className="image-pair-row" style={{ alignItems: "stretch" }}>
            <img src="/Assets/Gamedesign/prototype2.jpg" alt="Prototype 2" className="image-pair-large" style={{ width: "48%" }} />
            <img src="/Assets/Gamedesign/prototype3.jpg" alt="Prototype 3" className="image-pair-small" style={{ width: "48%", marginTop: 0 }} />
          </div>
        </section>
      </main>
    </>
  );
}
