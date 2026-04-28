import type { Metadata } from "next";
import ProjectNav from "@/components/ProjectNav";
import FadeInObserver from "@/components/FadeInObserver";
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
      <ProjectNav prev={{ href: "/work/immersive-sound" }} next={{ href: "/work/visual-identity" }} />

      <section className="hero-section">
        <img className="hero-image-full" src="/Assets/Gamedesign/brettet.jpeg" alt="Gamedesign / The prepper game" />
        <div className="hero-title-overlay">
          <h1 className="project-title-hero">Gamedesign</h1>
        </div>
        <div className="scroll-indicator">↓</div>
      </section>

      <main className="project-main">
        <section className="section-centered fade-in">
          <h2>Description</h2>
          <p>
            The year is 2025. War looms, and panic grips the world. In Beredt, players scramble to follow Norway&apos;s official survival plans — stocking water, canned food, and crispbread for at least a week.
          </p>
          <p>But hidden Nihilists have lost all hope of survival, craving one final feast of wine, games, and cheese before doomsday.</p>
          <p>Who will secure the supplies before the war erupts?</p>
        </section>

        <section className="section-full fade-in">
          <h2>Rules</h2>
          <img src="/Assets/Gamedesign/regler.kort-web.png" alt="Game Rules" />
        </section>

        <section className="section-centered fade-in">
          <h2>Purpose</h2>
          <p>
            This game has an educational purpose: it introduces players to government emergency preparedness recommendations in an engaging way. At the same time, it aims to lighten a serious political context and allow people to share a moment of humor and enjoyment in a difficult situation.
          </p>
        </section>

        <section className="section-full fade-in">
          <h2>Aesthetic</h2>
          <img src="/Assets/Gamedesign/visuell identitet/oslo.designmanual.png" alt="Oslo Design Manual" />
        </section>

        <section id="fonts-section" className="section-centered fade-in">
          <h2>Fonts</h2>
          <div className="font-samples">
            <p className="font-medium">
              Oslo Sans (Medium): This is the primary typeface used for headings and important information. It provides strong visual hierarchy and readability.
            </p>
            <p className="font-light">
              Oslo Sans (Light): This lighter weight is used for body text and secondary information. It creates a clean and approachable reading experience throughout the game materials.
            </p>
            <p className="font-light-italic">
              Oslo Sans (Light Italic): This italic variant adds emphasis and variation. It&apos;s used for special notes, flavor text, and to draw attention to specific game elements.
            </p>
          </div>
        </section>

        <section id="color-section" className="section-full fade-in">
          <h2>Color System</h2>
          <div className="color-grid">
            {colors.map((c) => (
              <div key={c.hex + c.name} className="color-card">
                <div className="color-swatch" style={{ backgroundColor: c.hex }}></div>
                <h3 className="color-name">{c.name}</h3>
                <p className="color-hex">{c.hex}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="testing-section" className="section-full fade-in">
          <h2>Testing &amp; Prototyping</h2>
          <div className="prototype-grid">
            <img src="/Assets/Gamedesign/prototype2.jpg" alt="Prototype 2" />
            <img src="/Assets/Gamedesign/prototype3.jpg" alt="Prototype 3" />
          </div>
        </section>
      </main>
    </>
  );
}
