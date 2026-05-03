import type { Metadata } from "next";
import SlideMenu from "@/components/SlideMenu";
import FadeInObserver from "@/components/FadeInObserver";
import StoryCard from "./StoryCard";
import AudioPlayer from "./AudioPlayer";

export const metadata: Metadata = {
  title: "Immersive sound experience",
  description: "Immersive sound experience at Oslo Museum."
};

const scene2Manuscript = [
  { time: 21, speaker: "Mr. Thorsen", text: "Who is that?" },
  { time: 22, speaker: "Jokum", text: "It's my son, Mr. Thorsen. We need more men to get the horse lifted onto the wagon." },
  { time: 26, speaker: "Mr. Thorsen", text: "Yes. Do your duty, but keep yourself, and that filthy little rascal, at a proper distance. Understood?" },
  { time: 32, speaker: "Jokum", text: "Yes, Mr. Thorsen." },
  { time: 35, speaker: "Mr. Thorsen", text: "Here she is. Make sure to skin her and get the rest into the ground before the stench sets in. I can't stand any more of that devilish smell from The Nightman's Mound. Understood?" },
  { time: 51, speaker: "Narrator", text: "The nightmen were kept outside of all decent company, and people shunned them because their honor was low and their work looked down upon." },
  { time: 62, speaker: "Jokum", text: "Yes, hurry up. Now take that rope there and tie it around the legs. No, the legs! Yes, that won't do. Useless. Now go clean the toilet so you can be of some use." }
];

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
      <SlideMenu activeSlug="immersive-sound" />

      <section className="hero-section">
        <img
          src="/Assets/Immersive/3.moodboard nattmannen.jpeg"
          alt="Moodboard for Nattmannen project"
          className="hero-image-full"
        />
        <div className="hero-title-overlay">
          <h1 className="project-title-hero">Immersive sound</h1>
        </div>
        <div className="hero-meta-overlay">
          <span>Type: Sound Installation</span>
          <span className="meta-divider">|</span>
          <span>Year: 2024</span>
          <span className="meta-divider">|</span>
          <span>Role: Designer</span>
          <span className="meta-divider">|</span>
          <span>Client: Oslo Museum</span>
        </div>
        <div className="scroll-indicator">↓</div>
      </section>

      <main className="project-main">
        <section className="section-statement fade-in">
          <p className="statement-text" style={{ fontFamily: "GeistRegular, sans-serif" }}>
            History out of the museum, into the city.
          </p>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Background</h2>
          </div>
          <div className="section-content">
            <p>
              Oslo Museum struggles to engage younger audiences, who often experience traditional museum formats as passive and disconnected.
            </p>
            <p>
              We explored how location-based audio storytelling could bring history out of the museum and into the city itself — meeting young audiences where they already are.
            </p>
          </div>
        </section>

        <section className="section-statement fade-in">
          <p className="statement-text" style={{ fontFamily: "GeistRegular, sans-serif" }}>
            Four scenes from 1684.
          </p>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Fragments of scenes</h2>
          </div>
          <div className="section-content" style={{ maxWidth: 1100 }}>
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
                audioSrc="/Assets/Immersive/scene 2 copy.mp3"
                manuscriptLines={scene2Manuscript}
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
          </div>
        </section>

        <section className="section-statement fade-in">
          <p className="statement-text" style={{ fontFamily: "GeistRegular, sans-serif" }}>
            &ldquo;Welcome... put on your glasses.&rdquo;
          </p>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Introduction</h2>
          </div>
          <div className="section-content">
            <AudioPlayer src="/Assets/Immersive/nattmannen intro.m4a" />
            <p>
              The year is 1684. Here you will meet the city&apos;s most hated yet most essential workers: the nightmen. Under the cover of darkness, they emptied toilets, carried away dead animals, and took care of what no one else would touch. Scorned by the public, cast out from respectable society — and yet vital to the city&apos;s health and order.
            </p>
          </div>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>About the project</h2>
          </div>
          <div className="section-content">
            <p>
              «Nattmannen» — or the nightman, also known as the executioner&apos;s assistant — handled the city&apos;s most unpleasant tasks in the 17th and 18th centuries: emptying latrines, removing dead animals, and assisting with executions. Seen as impure and dishonorable, he and his family lived isolated from society.
            </p>
          </div>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Prototyping</h2>
          </div>
          <div className="section-content">
            <p>An early on-site prototype tested how visitors would respond to spatial audio cues.</p>
          </div>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1400 }}>
          <img src="/Assets/Immersive/bilde fra prototype.png" alt="Prototype screenshot" style={{ width: "100%", height: "auto", display: "block" }} />
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Trailer</h2>
          </div>
          <div className="section-content">
            <p>A short trailer captured the prototype&apos;s atmosphere and pacing.</p>
          </div>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1400 }}>
          <video controls playsInline style={{ width: "100%", height: "auto", display: "block" }}>
            <source src="/Assets/Immersive/3.nattmannen.video-web.mp4" type="video/mp4" />
          </video>
        </section>

        <section className="section-statement fade-in">
          <p className="statement-text" style={{ fontFamily: "GeistRegular, sans-serif" }}>
            From newspaper to street to phone.
          </p>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Marketing</h2>
          </div>
          <div className="section-content">
            <p>
              Marketing materials, wayfinding signage, a companion website and the Echos.xyz delivery app — all tuned to the same hushed, period-correct tone.
            </p>
          </div>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1400 }}>
          <div className="image-grid">
            <img src="/Assets/Immersive/avisen.4.png" alt="Newspaper advertisement for Nattmannen" />
            <img src="/Assets/Immersive/henge.plakater.utenoutline.png" alt="Hanging posters for Nattmannen" />
          </div>
          <div className="image-grid">
            <img src="/Assets/Immersive/veiviser321.png" alt="Wayfinding signage" />
            <img src="/Assets/Immersive/veivisere3.png" alt="Directional signage" />
          </div>
          <div className="image-grid">
            <img src="/Assets/nattmannen.nettside1.png" alt="Nattmannen website — homepage" />
            <img src="/Assets/nattmannen.nettside2.png" alt="Nattmannen website — content page" />
          </div>
          <img src="/Assets/Immersive/3.echoes.png" alt="Echos.xyz app interface" style={{ width: "100%", display: "block", marginTop: "2rem" }} />
        </section>
      </main>
    </>
  );
}
