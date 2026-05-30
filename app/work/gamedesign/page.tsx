import type { Metadata } from "next";
import BodyClass from "@/components/BodyClass";
import FadeInObserver from "@/components/FadeInObserver";
import SlideMenu from "@/components/SlideMenu";

export const metadata: Metadata = {
  title: "Game as experience",
  description: "A two-week board game project turning emergency preparedness into play."
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
      <BodyClass className="light-hero" />
      <FadeInObserver />
      <SlideMenu activeSlug="gamedesign" />

      <section className="hero-section">
        <img className="hero-image-full" src="/Assets/Gamedesign/brettet.jpeg" alt="Game as experience — board" />
        <div className="hero-title-overlay">
          <h1 className="project-title-hero">Game as experience</h1>
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
              In Beredt, players scramble to follow Norway&apos;s official survival plans &mdash; stocking water, canned food, and crispbread for at least a week.
            </p>
            <p>
              But hidden Nihilists have lost all hope of survival, craving one final feast of wine, games, and cheese before doomsday.
            </p>
            <p>Who will secure the supplies before the war erupts?</p>
            <img
              src="/Assets/Gamedesign/skannede elementer/the.board.jpg"
              alt="The board"
              style={{ width: "100%", height: "auto", display: "block", marginTop: 40 }}
            />
          </div>
        </section>

        <section className="section-statement fade-in">
          <h2 className="statement-text section-tabloid-heading">How to play</h2>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Rules</h2>
          </div>
          <div className="section-content">
            <p>
              Hand out one secret roll-card to each person. Ps: there are 3 nihilists, and 4 preppers. Once everyone has their card the game is ready to begin.
            </p>
            <ol style={{ paddingLeft: "1.5em", margin: 0 }}>
              <li>Everyone close your eyes.</li>
              <li>Nihilists, open your eyes and acknowledge each other, and close your eyes again.</li>
              <li>Everyone opens their eyes.</li>
            </ol>
            <p>
              All players start in the yellow star in the middle. The one to the left of the person reading the rules begins by rolling the dice, and then going clockwise around the table. After every round around the table, the players can choose to either vote someone out, or wait another round. Remember to not trust anyone &mdash; the preppers will have a hard time winning without uncovering the nihilist and voting them out.
            </p>
            <img
              src="/Assets/Gamedesign/skannede elementer/scan.rules.jpg"
              alt="Game rules — scanned"
              style={{ width: "100%", height: "auto", display: "block", marginTop: 40 }}
            />
          </div>
        </section>

        <section className="section-statement fade-in">
          <p className="statement-text" style={{ fontFamily: "GeistRegular, sans-serif" }}>
            A game that turns preparedness into play.
          </p>
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

        <section className="section-statement fade-in">
          <h2 className="statement-text section-tabloid-heading">Game elements</h2>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1400, padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <img
              src="/Assets/Gamedesign/skannede elementer/scan.eventcards.jpg"
              alt="Event cards — scanned"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <img
              src="/Assets/Gamedesign/skannede elementer/supplycards.jpg"
              alt="Supply cards — scanned"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </section>

        <section className="section-statement fade-in">
          <h2 className="statement-text section-tabloid-heading">Visual profile</h2>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Aesthetic</h2>
          </div>
          <div className="section-content">
            <p>
              The visual identity is built on the Oslo design system. Clean, civic, instantly recognisable, but adapted into a colourful profile that works especially well in a game format, where it helps reinforce the realistic tone while adding visual energy.
            </p>
            <img
              src="/Assets/Gamedesign/skannede elementer/scan.visual.profile.jpg"
              alt="Visual profile — scanned"
              style={{ width: "100%", height: "auto", display: "block", marginTop: 40 }}
            />
          </div>
        </section>

        <section className="section-with-heading fade-in">
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

        <section className="section-with-heading fade-in">
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

        <section className="section-statement fade-in">
          <h2 className="statement-text section-tabloid-heading">Testing &amp; prototyping</h2>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1400, padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ aspectRatio: "3 / 2", overflow: "hidden" }}>
              <img
                src="/Assets/Gamedesign/prototype2.jpg"
                alt="Prototype 2"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <div style={{ aspectRatio: "3 / 2", overflow: "hidden" }}>
              <img
                src="/Assets/Gamedesign/prototype3.jpg"
                alt="Prototype 3"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Credits</h2>
          </div>
          <div className="section-content">
            <p>
              This was a two-week group project where my main contribution was concept development. I also wrote the rules and carried out user testing.
            </p>
            <p>
              A huge thank you to Iver Raknes Finne, Marikken Antonsen, Bella Kjensli, and Hedvig Sunde.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
