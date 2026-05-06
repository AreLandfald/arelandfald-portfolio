import Link from "next/link";
import BodyClass from "@/components/BodyClass";

const T = {
  musical: { href: "/work/musical-instrument", title: "Musical instrument", img: "/Assets/Sound toys/soundtoys.hovedbildeinstrument.h.jpg" },
  visual: { href: "/work/visual-identity", title: "Visual identity", img: "/Assets/Diplomis/diplomis plakat mockup copy.jpg" },
  immersive: { href: "/work/immersive-sound", title: "Immersive sound experience", img: "/Assets/Immersive/3.moodboard nattmannen.jpeg" },
  gamedesign: { href: "/work/gamedesign", title: "Gamedesign", img: "/Assets/Gamedesign/brettet.notater.med.farger.png" },
  website: { href: "/work/website", title: "Website", img: "/Assets/Grammars of noice/Groise.hovedside.png" },
  service: { href: "/work/service-design", title: "Service design", img: null as string | null },
  about: { href: "/about", title: "About me", img: "/Assets/bilde-av-meg-til-portefolje.jpg" }
};

function ImgTile({ tile }: { tile: { href: string; title: string; img: string | null } }) {
  return (
    <Link href={tile.href} className={`hg-tile hg-img${tile.img ? "" : " hg-placeholder"}`}>
      {tile.img ? <img src={tile.img} alt={tile.title} /> : <span>{tile.title}</span>}
    </Link>
  );
}

function TextTile({ tile }: { tile: { href: string; title: string } }) {
  return (
    <Link href={tile.href} className="hg-tile hg-text">
      <span>{tile.title}</span>
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      <BodyClass className="home-route" />

      <main className="home-grid">
        {/* Row 1 — images */}
        <ImgTile tile={T.musical} />
        <ImgTile tile={T.visual} />
        <ImgTile tile={T.immersive} />
        <ImgTile tile={T.gamedesign} />

        {/* Row 2 */}
        <div className="hg-tile hg-brand">ARE LANDFALD</div>
        <ImgTile tile={T.website} />
        <ImgTile tile={T.service} />
        <ImgTile tile={T.about} />

        {/* Row 3 */}
        <TextTile tile={T.about} />
        <TextTile tile={T.service} />
        <TextTile tile={T.website} />
        <div className="hg-tile hg-brand">PORTFOLIO</div>

        {/* Row 4 — texts */}
        <TextTile tile={T.gamedesign} />
        <TextTile tile={T.immersive} />
        <TextTile tile={T.visual} />
        <TextTile tile={T.musical} />
      </main>
    </>
  );
}
