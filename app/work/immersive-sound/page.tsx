import type { Metadata } from "next";
import SlideMenu from "@/components/SlideMenu";
import FadeInObserver from "@/components/FadeInObserver";
import StoryCard from "./StoryCard";
import AudioPlayer from "./AudioPlayer";

export const metadata: Metadata = {
  title: "Immersive Sound Experience",
  description: "Immersive Sound Experience at Oslo Museum."
};

const scene3Manuscript = [
  { time: 23, speaker: "Narrator", text: "I know it smells devilish, but now you must finish without causing any more commotion." },
  { time: 29, speaker: "Narrator", text: "Emptying outhouses was a daily and common task for the nightman, who in the darkness took care of the city's filth and waste to keep the streets clean and the people healthy." },
  { time: 48, speaker: "Jokum", text: "Are you finished? Okay, then we're leaving now." }
];

const scene4Manuscript = [
  { time: 9, speaker: "Jokum", text: "Yes, here is good. People will see it from here." },
  { time: 15, speaker: "Jokum", text: "Okay, I'll set up the stakes, and you go fetch the heads." },
  { time: 21, speaker: "Narrator", text: "In Kristiania, it was customary for the head or limbs of the condemned to be placed on stakes. This was done as a warning example, so people would see what punishment awaited those who broke the king's law." },
  { time: 36, speaker: "Jokum", text: "Turn the heads so they're visible from the road. The master wanted to look him in the eyes while the ravens took him." },
  { time: 41, speaker: "Jokum", text: "Don't make those kinds of faces. He was a thief. That's what the executioner said. He stole grain from the farm where he worked as a servant." },
  { time: 51, speaker: "Jokum", text: "*Sigh* Yes, I've said too much. We won't speak any more about this, all right? If anyone hears us, it might be that… A nightman doesn't talk about his work." }
];

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
          src="/Assets/Immersive/cover.immersive.jpg"
          alt="Immersive Sound Experience — Nattmannen"
          className="hero-image-full"
        />
        <div className="hero-title-overlay">
          <h1 className="project-title-hero">Immersive Sound Experience</h1>
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

        <section className="section-with-heading fade-in" style={{ marginBottom: 0, paddingBottom: 40 }}>
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

        <section className="section-full fade-in" style={{ maxWidth: 1400, padding: "0 40px 80px", marginBottom: 200 }}>
          <div style={{ display: "flex", gap: 32, justifyContent: "center", alignItems: "center" }}>
            <img src="/Assets/Immersive/mockup.echoes.png" alt="Echoes mockup" style={{ height: 480, width: "auto", display: "block", margin: 0 }} />
            <img src="/Assets/Immersive/mockup.echoes2.png" alt="Echoes mockup 2" style={{ height: 480, width: "auto", display: "block", margin: 0 }} />
          </div>
        </section>

        <section className="section-statement fade-in">
          <p className="statement-text" style={{ fontFamily: "GeistRegular, sans-serif" }}>
            Fragments of four scenes from Oslo year 1684. <em>Sound on</em>.
          </p>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-content" style={{ maxWidth: 1100 }}>
            <div className="story-cards-grid">
              <StoryCard
                title="Scene 1: The Nightman&apos;s Mound"
                location="Near the old town hall, where merchants once gathered"
                description="As twilight settles over the nightman's mound, the air hangs heavy with rot and buried filth. Jokum stands bent over his shovel, carving into the black earth, while at his feet lies a pale, lifeless man marked by the noose. He calls you closer — there is more work to be done."
                imageSrc="/Assets/Immersive/cover-til-lytteropplevelse.jpg"
                audioSrc="/Assets/Immersive/scene 1 til portfølje copy.mp3"
                manuscriptLines={scene1Manuscript}
              />
              <StoryCard
                title="Scene 2: The Stable"
                location="In front of the ancient stone cathedral"
                description="Church bells echo through the morning mist. The faithful gather for mass, but the nightman's work is far from holy. His presence taints this sacred ground..."
                imageSrc="/Assets/Immersive/cover-til-lytteropplevelse2.jpg"
                audioSrc="/Assets/Immersive/scene 2 copy.mp3"
                manuscriptLines={scene2Manuscript}
              />
              <StoryCard
                title="Scene 3: The Outhouse"
                location="Behind the merchant's house, near the old stables"
                description="The smell of hay and horses fills the air. A dead animal lies in the corner — another job only the nightman will touch. Society's outcasts doing society's dirty work..."
                imageSrc="/Assets/Immersive/cover-til-lytteropplevelse3.jpg"
                audioSrc="/Assets/Immersive/scene 3 copy.mp3"
                manuscriptLines={scene3Manuscript}
              />
              <StoryCard
                title="Scene 4: Gallows Hill"
                location="At the edge of town, where justice is served"
                description="A crowd gathers in grim silence. The executioner prepares his tools, and beside him stands his assistant — the nightman. Together, they carry out the city's darkest duty..."
                imageSrc="/Assets/Immersive/cover-til-lytteropplevelse4.jpg"
                audioSrc="/Assets/Immersive/scene 4 copy.mp3"
                manuscriptLines={scene4Manuscript}
              />
            </div>
          </div>
        </section>

        <section className="section-statement fade-in">
          <p className="statement-text" style={{ fontFamily: "GeistRegular, sans-serif" }}>
            &laquo;Welcome&hellip; Put on your glasses.&raquo;
          </p>
        </section>

        <section className="section-with-heading fade-in" style={{ marginBottom: 0, paddingBottom: 40 }}>
          <div className="section-heading">
            <h2>Costuming as Experience</h2>
          </div>
          <div className="section-content">
            <p>
              Wearing a pair of custom-designed glasses inspired by medieval eyewear signals entry into another time. It deepens immersion and creates a shared identity among visitors, turning the audience itself into part of the experience. And a group of people wearing funny-looking glasses tends to make outsiders stop and wonder.
            </p>
          </div>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1400, padding: "0 40px 80px", marginBottom: 200 }}>
          <img src="/Assets/Immersive/bilde fra prototype.png" alt="Prototype on-site with custom glasses" style={{ width: "75%", height: "auto", display: "block", margin: "0 auto" }} />
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

        <section className="section-statement fade-in">
          <h2 className="statement-text section-tabloid-heading">Onboarding</h2>
        </section>

        <section className="section-with-heading fade-in" style={{ marginBottom: 0, paddingBottom: 40 }}>
          <div className="section-heading">
            <h2>Poster Campaign</h2>
          </div>
          <div className="section-content">
            <p>
              The posters were designed as a 1700s news article reporting on the Nightmen and a royal decree making it punishable to call them by their slang names. Those slurs are still in everyday use today. Most people who say them have no idea they are quoting a 300-year-old insult aimed at one of Oslo&apos;s most stigmatized groups.
            </p>
            <p>The aim was to catch people&apos;s attention through recognition.</p>
          </div>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1400, padding: "0 40px 80px" }}>
          <img src="/Assets/Immersive/henge.plakater.utenoutline.png" alt="Hanging poster campaign" style={{ width: "75%", height: "auto", display: "block", margin: "0 auto" }} />
        </section>

      </main>
    </>
  );
}
