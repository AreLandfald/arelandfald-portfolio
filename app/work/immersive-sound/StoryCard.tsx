"use client";

import { useEffect, useRef, useState } from "react";

type Line = { time: number; speaker: string; text: string };

function format(t: number) {
  if (!isFinite(t) || t < 0) return "0:00";
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

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
  const [expanded, setExpanded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => {
      setTime(audio.currentTime);
      if (manuscriptLines?.length) {
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
      }
    };
    const onLoaded = () => setDuration(audio.duration);
    const onEnd = () => setPlaying(false);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("ended", onEnd);
    };
  }, [manuscriptLines]);

  useEffect(() => {
    if (!expanded) return;
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeOverlay();
    };
    document.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [expanded]);

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
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

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = ratio * duration;
  };

  const closeOverlay = () => {
    setExpanded(false);
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      setPlaying(false);
    }
  };

  const pct = duration ? (time / duration) * 100 : 0;

  return (
    <>
      <button
        type="button"
        className="story-card-modern"
        onClick={() => setExpanded(true)}
      >
        <div className="story-card-cover">
          {imageSrc ? (
            <img src={imageSrc} alt={title} />
          ) : (
            <div className="story-card-cover-placeholder" />
          )}
          {audioSrc && <span className="story-card-play-icon">▶</span>}
        </div>
        <div className="story-card-meta">
          <h3 dangerouslySetInnerHTML={{ __html: title }} />
          <p>{location}</p>
        </div>
      </button>

      {expanded && (
        <div className="story-overlay-modern" onClick={closeOverlay} role="dialog" aria-modal="true">
          <div className="story-overlay-content" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="overlay-close" aria-label="Close" onClick={closeOverlay}>
              ×
            </button>

            {imageSrc && (
              <img src={imageSrc} alt={title} className="overlay-cover" />
            )}

            <h2 className="overlay-title" dangerouslySetInnerHTML={{ __html: title }} />
            <p className="overlay-location">{location}</p>
            <p className="overlay-description">{description}</p>

            {audioSrc && (
              <>
                <div className="overlay-progress" onClick={seek}>
                  <div className="overlay-progress-fill" style={{ width: `${pct}%` }} />
                </div>
                <div className="overlay-controls">
                  <button type="button" className="overlay-play-btn" onClick={togglePlay} aria-label={playing ? "Pause" : "Play"}>
                    {playing ? "❚❚" : "▶"}
                  </button>
                  <span className="overlay-time">
                    {format(time)} <span className="overlay-time-divider">/</span> {format(duration)}
                  </span>
                </div>
                <audio ref={audioRef} preload="metadata">
                  <source src={audioSrc} />
                </audio>
              </>
            )}

            {manuscriptLines && manuscriptLines.length > 0 && (
              <div className="overlay-manuscript">
                {manuscriptLines.map((line, i) => (
                  <div key={i} className={`overlay-manuscript-line${i === activeIndex ? " active" : ""}`}>
                    <span className="overlay-manuscript-speaker">{line.speaker}</span>
                    <span className="overlay-manuscript-text">{line.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
