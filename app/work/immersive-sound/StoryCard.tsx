"use client";

import { useEffect, useRef, useState } from "react";

type Line = { time: number; speaker: string; text: string };

export default function StoryCard({
  title,
  location,
  description,
  imageSrc,
  audioSrc,
  manuscriptLines
}: {
  title: string;
  location: string;
  description: string;
  imageSrc?: string;
  audioSrc?: string;
  manuscriptLines?: Line[];
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !manuscriptLines?.length) return;

    const onUpdate = () => {
      const t = audio.currentTime;
      let idx = -1;
      for (let i = 0; i < manuscriptLines.length; i++) {
        const cur = manuscriptLines[i].time;
        const nxt = manuscriptLines[i + 1]?.time ?? Infinity;
        if (t >= cur && t < nxt) {
          idx = i;
          break;
        }
      }
      setActiveIndex(idx);
    };
    audio.addEventListener("timeupdate", onUpdate);
    return () => audio.removeEventListener("timeupdate", onUpdate);
  }, [manuscriptLines]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      document.querySelectorAll("audio").forEach((a) => {
        if (a !== audio) a.pause();
      });
      audio.play().catch(() => {});
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="story-card">
      <div className="story-card-image-container">
        {imageSrc ? (
          <img src={imageSrc} alt={title} className="story-card-image" />
        ) : (
          <div
            className="story-card-image"
            style={{ background: "linear-gradient(135deg, #d0d0d0 0%, #e8e8e8 100%)" }}
          />
        )}
        {audioSrc && (
          <button
            className={`story-card-play-btn${playing ? " playing" : ""}`}
            onClick={toggle}
            aria-label={playing ? "Pause" : "Play"}
            style={{
              position: "absolute",
              bottom: 15,
              left: 15,
              width: 50,
              height: 50,
              background: "rgba(255,255,255,0.95)",
              border: "1px solid #000",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 2,
              fontSize: 16
            }}
          >
            {playing ? "❚❚" : "▶"}
          </button>
        )}
      </div>
      <div className="story-card-content">
        <h3 className="story-card-title">{title}</h3>
        <p className="story-card-location">{location}</p>
        <p className="story-card-description">{description}</p>

        {manuscriptLines && playing && (
          <div style={{ marginTop: 20, paddingTop: 20, borderTop: "1px solid #e0e0e0" }}>
            {manuscriptLines.map((line, i) => (
              <div
                key={i}
                style={{
                  padding: "6px 0",
                  opacity: i === activeIndex ? 1 : 0.4,
                  transition: "opacity 0.3s"
                }}
              >
                <div style={{ fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", opacity: 0.7 }}>
                  {line.speaker}
                </div>
                <div style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>{line.text}</div>
              </div>
            ))}
          </div>
        )}

        {audioSrc && (
          <audio ref={audioRef} preload="none" onEnded={() => setPlaying(false)}>
            <source src={audioSrc} />
          </audio>
        )}
      </div>
    </div>
  );
}
