import type { Metadata } from "next";
import SlideMenu from "@/components/SlideMenu";
import FadeInObserver from "@/components/FadeInObserver";
import VideoPlayer from "./VideoPlayer";

export const metadata: Metadata = {
  title: "Synthesizer",
  description: "A handmade gesture-controlled synthesizer — three-week project (2026)."
};

export default function MusicalInstrumentPage() {
  return (
    <>
      <FadeInObserver />
      <SlideMenu activeSlug="musical-instrument" />

      <section className="hero-section">
        <img
          src="/Assets/Sound toys/soundtoys.hovedbildeinstrument.h.jpg"
          alt="Synthesizer"
          className="hero-image-full"
        />
        <div className="hero-title-overlay">
          <h1 className="project-title-hero">Synthesizer</h1>
        </div>
        <div className="hero-meta-overlay">
          <span>Type: Instrument</span>
          <span className="meta-divider">|</span>
          <span>Year: 2026 (three weeks)</span>
          <span className="meta-divider">|</span>
          <span>Role: Designer &amp; programmer</span>
          <span className="meta-divider">|</span>
          <span>Client: None</span>
        </div>
        <div className="scroll-indicator">↓</div>
      </section>

      <main className="project-main">
        <section className="section-statement fade-in">
          <p className="statement-text" style={{ fontFamily: "GeistRegular, sans-serif" }}>
            A toy that turns gesture into sound.
          </p>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1100, padding: "0 40px" }}>
          <VideoPlayer src="/Assets/Sound toys/interaktive.leker.mp4" maxHeight="65vh" />
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>How to use</h2>
          </div>
          <div className="section-content">
            <p>
              With the left-hand scanner, you can scan any coordinate to instantly create a rhythm. Scan a new coordinate, and the current rhythm fades into a new one.
            </p>
            <p>
              The right-hand scanner controls the melody. Every coordinate contains both a rhythm and a melody, but you first need to scan a coordinate to unlock it. Then lift the scanner, hold the black button, and tilt it.
            </p>
            <p>
              As you move, different angles trigger different notes, creating a flowing melody while the synthesizer lights up in response.
            </p>
          </div>
        </section>

        <section className="image-pair-grid fade-in">
          <img src="/Assets/Sound toys/instrument.ferdig2.jpg" alt="The synthesizer" className="image-pair-grid-a" />
          <img src="/Assets/Sound toys/are spiller.jpg" alt="Playing the synthesizer" className="image-pair-grid-b" />
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Logic &amp; Code</h2>
          </div>
          <div className="section-content">
            <p>
              We programmed the instrument in Microsoft MakeCode &mdash; mapping the micro:bit&apos;s accelerometer and buttons to pitch and triggers.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16, marginTop: 40 }}>
              <img src="/Assets/Sound toys/microbit1.JPG" alt="MakeCode editor — main loop" style={{ width: "100%", height: "auto", display: "block" }} />
              <img src="/Assets/Sound toys/microbit4.png" alt="MakeCode editor — supporting logic" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </div>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2 style={{ lineHeight: 1 }}>Building the Instrument</h2>
          </div>
          <div className="section-content">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
              {[1, 2, 3, 4].map((n) => (
                <div key={n} style={{ aspectRatio: "4 / 3", overflow: "hidden" }}>
                  <img
                    src={`/Assets/Sound toys/bygging${n}.JPG`}
                    alt={`Construction step ${n}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-statement fade-in">
          <h2 className="statement-text section-tabloid-heading">The finished product</h2>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1400, padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            <img src="/Assets/Sound toys/instrument.ferdig1.JPG" alt="Finished instrument" style={{ width: "100%", height: "auto", display: "block" }} />
            <img src="/Assets/Sound toys/instrument.ferdig3.jpg" alt="Finished instrument" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        </section>

        <section className="section-statement fade-in">
          <h2 className="statement-text section-tabloid-heading">User Testing &amp; Prototyping</h2>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1400, padding: "0 40px", marginBottom: 200 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24, alignItems: "start" }}>
            <VideoPlayer src="/Assets/Sound toys/instrument.test.mp4" maxHeight="55vh" />
            <VideoPlayer src="/Assets/Sound toys/instrumentprototyping.mp4" maxHeight="55vh" />
          </div>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1400, padding: "0 40px" }}>
          <img
            src="/Assets/Sound toys/soundtoys.hovedbildeinstrument.h.jpg"
            alt="Synthesizer — overview"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Credits</h2>
          </div>
          <div className="section-content">
            <p>
              My contributions included design, building, and programming the instrument. Programming was done in collaboration with Tobias Stark-Olsen.
            </p>
            <p style={{ marginTop: 40, fontSize: "0.95rem", opacity: 0.75 }}>
              A huge thank you to Tobias Stark-Olsen for also producing the music.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
