import type { Metadata } from "next";
import SlideMenu from "@/components/SlideMenu";
import FadeInObserver from "@/components/FadeInObserver";
import VideoPlayer from "./VideoPlayer";

export const metadata: Metadata = {
  title: "Synthesizer",
  description: "A handmade gesture-controlled synthesizer — design, build, code."
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
          <span>Year: 2024</span>
          <span className="meta-divider">|</span>
          <span>Role: Designer &amp; Builder</span>
          <span className="meta-divider">|</span>
          <span>Client: Personal Project</span>
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

        <section className="section-statement fade-in">
          <h2 className="statement-text section-tabloid-heading">Manual</h2>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1400, padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            <img src="/Assets/Sound toys/how.to.use.jpg" alt="Manual page 1" style={{ width: "100%", height: "auto", display: "block" }} />
            <img src="/Assets/Sound toys/how.to.use2.jpg" alt="Manual page 2" style={{ width: "100%", height: "auto", display: "block" }} />
            <img src="/Assets/Sound toys/how.to.use3.jpg" alt="Manual page 3" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        </section>

        <section className="section-statement fade-in">
          <h2 className="statement-text section-tabloid-heading">User Testing &amp; Prototyping</h2>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1400, padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, alignItems: "start" }}>
            <VideoPlayer src="/Assets/Sound toys/instrument.test.mp4" maxHeight="55vh" />
            <VideoPlayer src="/Assets/Sound toys/instrumentprototyping.mp4" maxHeight="55vh" />
          </div>
        </section>

        <section className="section-statement fade-in">
          <h2 className="statement-text section-tabloid-heading">Programming</h2>
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
            <h2>Building the Instrument</h2>
          </div>
          <div className="section-content">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
              <img src="/Assets/Sound toys/bygging1.JPG" alt="Construction step 1" style={{ width: "100%", height: "auto", display: "block" }} />
              <img src="/Assets/Sound toys/bygging2.JPG" alt="Construction step 2" style={{ width: "100%", height: "auto", display: "block" }} />
              <img src="/Assets/Sound toys/bygging3.JPG" alt="Construction step 3" style={{ width: "100%", height: "auto", display: "block" }} />
              <img src="/Assets/Sound toys/bygging4.JPG" alt="Construction step 4" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </div>
        </section>

        <section className="section-statement fade-in">
          <h2 className="statement-text section-tabloid-heading">Result</h2>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1400, padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            <img src="/Assets/Sound toys/instrument.ferdig1.JPG" alt="Finished instrument" style={{ width: "100%", height: "auto", display: "block" }} />
            <img src="/Assets/Sound toys/instrument.ferdig3.jpg" alt="Finished instrument" style={{ width: "100%", height: "auto", display: "block" }} />
            <img src="/Assets/Sound toys/instrument.ferdig2.jpg" alt="Finished instrument" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Credits</h2>
          </div>
          <div className="section-content">
            <p>
              My contributions included design, building, and programming the instrument. Programming was done in collaboration with Tobias Stark-Olsen.
            </p>
            <p>
              A huge thank you to Tobias Stark-Olsen for also producing the music.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
