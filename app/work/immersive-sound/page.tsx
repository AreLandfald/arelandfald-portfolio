import type { Metadata } from "next";
import ProjectNav from "@/components/ProjectNav";
import FadeInObserver from "@/components/FadeInObserver";
import StoryCard from "./StoryCard";
import AudioPlayer from "./AudioPlayer";

export const metadata: Metadata = {
  title: "Immersive sound experience",
  description: "Immersive sound experience at Oslo Museum."
};

const scene1Manuscript = [
  { time: 14, speaker: "Narrator", text: "You now stand by the nightman's mound, where the earth is filthy and tainted by all that is vile." },
  { time: 22, speaker: "Narrator", text: "Beneath your feet lie unclean remains—carcasses of livestock and the refuse of humanity." },
  { time: 30, speaker: "Narrator", text: "The air is heavy with stench, a raw reek of death and decay." },
  { time: 38, speaker: "Narrator", text: "In the yard, you see Jokum. He stands bent over his shovel, digging into the black earth." },
  { time: 45, speaker: "Narrator", text: "At his feet lies a dead man, pale as snow, with a bluish mark around his neck—as though he met his end in a noose." },
  { time: 60, speaker: "Jokum", text: "Come here, boy!" },
  { time: 62, speaker: "Narrator", text: "He is speaking to you." },
  { time: 66, speaker: "Jokum", text: "When I am finished here, you will come with me to Mr. Thorsen. It concerns his horse—it is dead." },
  { time: 76, speaker: "Narrator", text: "The nightman's trade was often passed down from father to son, as it was a dishonorable occupation that few others would take on." },
  { time: 85, speaker: "Jokum", text: "Off we go!" }
];

export default function ImmersiveSoundPage() {
  return (
    <>
      <FadeInObserver />
      <ProjectNav prev={{ href: "/work/website" }} next={{ href: "/work/gamedesign" }} />

      <section className="hero-section">
        <img
          src="/Assets/Immersive/3.moodboard nattmannen.jpeg"
          alt="Moodboard for Nattmannen project"
          className="hero-image-full"
        />
        <div className="hero-title-overlay">
          <h1 className="project-title-hero">Immersive sound experience</h1>
        </div>
        <div className="scroll-indicator">↓</div>
      </section>

      <main className="project-main">
        <section className="section-centered fade-in">
          <p style={{ fontSize: "1.2rem", marginBottom: 0 }}>
            Oslo Museum struggles to engage younger audiences, who often experience traditional museum formats as passive and disconnected.
          </p>
        </section>

        <section className="section-centered fade-in">
          <p style={{ fontSize: "1.2rem", marginBottom: 0 }}>
            We explored how location-based audio storytelling could bring history out of the museum and into the city itself — meeting young audiences where they already are.
          </p>
        </section>

        <section className="section-full fade-in">
          <h2>Fragments of scenes</h2>
          <div className="story-cards-grid">
            <StoryCard
              title="Scene 1: The Nightman&apos;s Mound"
              location="Near the old town hall, where merchants once gathered"
              description="As twilight settles over the nightman's mound, the air hangs heavy with rot and buried filth. Jokum stands bent over his shovel, carving into the black earth, while at his feet lies a pale, lifeless man marked by the noose. He calls you closer — there is more work to be done."
              imageSrc="/Assets/Immersive/scene1.png"
              audioSrc="/Assets/Immersive/scene 1 til portfølje copy.mp3"
              manuscriptLines={scene1Manuscript}
            />
            <StoryCard
              title="Scene 2: The Stable"
              location="In front of the ancient stone cathedral"
              description="Church bells echo through the morning mist. The faithful gather for mass, but the nightman's work is far from holy. His presence taints this sacred ground..."
            />
            <StoryCard
              title="Scene 3: The Outhouse"
              location="Behind the merchant's house, near the old stables"
              description="The smell of hay and horses fills the air. A dead animal lies in the corner — another job only the nightman will touch. Society's outcasts doing society's dirty work..."
              audioSrc="/Assets/Immersive/i stallen.m4a"
            />
            <StoryCard
              title="Scene 4: Gallows Hill"
              location="At the edge of town, where justice is served"
              description="A crowd gathers in grim silence. The executioner prepares his tools, and beside him stands his assistant — the nightman. Together, they carry out the city's darkest duty..."
            />
          </div>
        </section>

        <section className="section-centered fade-in">
          <h2>&ldquo;Welcome... Put on your glasses...&rdquo;</h2>
          <AudioPlayer src="/Assets/Immersive/nattmannen intro.m4a" />
          <p>
            The year is 1684. Here you will meet the city&apos;s most hated yet most essential workers: the nightmen. Under the cover of darkness, they emptied toilets, carried away dead animals, and took care of what no one else would touch. Scorned by the public, cast out from respectable society, and yet vital to the city&apos;s health and order.
          </p>
        </section>

        <section className="section-centered fade-in">
          <h2>Prototyping</h2>
          <img src="/Assets/Immersive/bilde fra prototype.png" alt="Prototype screenshot" />
        </section>

        <section className="section-centered fade-in">
          <h2>Trailer to prototype</h2>
          <div className="video-wrapper">
            <div className="video-container">
              <video controls playsInline style={{ width: "100%", height: "100%", display: "block" }}>
                <source src="/Assets/Immersive/3.nattmannen.video-web.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        <section className="section-centered fade-in">
          <h2>About the project</h2>
          <p>
            «Nattmannen» — or the nightman, also known as the executioner&apos;s assistant — handled the city&apos;s most unpleasant tasks in the 17th and 18th centuries: emptying latrines, removing dead animals, and assisting with executions. Seen as impure and dishonorable, he and his family lived isolated from society.
          </p>
        </section>

        <section className="section-full fade-in">
          <h2>Onboarding / Marketing</h2>
          <div className="image-grid">
            <img src="/Assets/Immersive/avisen.4.png" alt="Newspaper advertisement for Nattmannen" />
            <img src="/Assets/Immersive/henge.plakater.utenoutline.png" alt="Hanging posters for Nattmannen" />
          </div>
          <p className="image-caption">Marketing materials and onboarding assets for the immersive sound experience.</p>

          <div className="image-grid">
            <img src="/Assets/Immersive/veiviser321.png" alt="Wayfinding signage for Nattmannen experience" />
            <img src="/Assets/Immersive/veivisere3.png" alt="Directional signage for Nattmannen experience" />
          </div>
          <p className="image-caption">Wayfinding and directional signage designed to guide visitors through the immersive experience.</p>

          <div className="image-grid">
            <img src="/Assets/nattmannen.nettside1.png" alt="Nattmannen website design - homepage" />
            <img src="/Assets/nattmannen.nettside2.png" alt="Nattmannen website design - content page" />
          </div>
          <p className="image-caption">Website design showcasing the digital presence and online interface for the Nattmannen experience.</p>

          <img src="/Assets/Immersive/3.echoes.png" alt="Echos.xyz app interface" style={{ width: "100%", marginTop: "2rem" }} />
          <p className="image-caption">The Echos.xyz app interface used for the GPS-based audio experience delivery.</p>
        </section>
      </main>
    </>
  );
}
