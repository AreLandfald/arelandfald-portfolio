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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      if (audio.duration && isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  const onProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration || !isFinite(audio.duration)) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = Math.max(0, Math.min(1, ratio)) * audio.duration;
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
  const prevLine = activeIndex > 0 && manuscriptLines ? manuscriptLines[activeIndex - 1] : null;
  const currentLine = activeIndex >= 0 && manuscriptLines ? manuscriptLines[activeIndex] : null;

  return (
    <>
      <button type="button" className="immersive-card-wrapper" onClick={() => setExpanded(true)}>
        <div className="immersive-card">
          {imageSrc && <img src={imageSrc} alt="" className="immersive-card-img" />}
        </div>
        <div className="immersive-card-meta">
          <h3 dangerouslySetInnerHTML={{ __html: title }} />
          <p>{location}</p>
        </div>
      </button>

      {expanded && (
        <div className="immersive-overlay" onClick={closeOverlay} role="dialog" aria-modal="true">
          <button type="button" className="immersive-close" onClick={closeOverlay} aria-label="Close">
            ×
          </button>

          <div className="immersive-stage" onClick={(e) => e.stopPropagation()}>
            {imageSrc && <img src={imageSrc} alt="" className="immersive-cover-img" />}

            {manuscriptLines && manuscriptLines.length > 0 && (
              <div className="immersive-manuscript">
                {prevLine && (
                  <div className="ms-line ms-prev" key={`p-${activeIndex}`}>
                    <span className="ms-speaker">{prevLine.speaker}</span>
                    <div className="ms-text">{prevLine.text}</div>
                  </div>
                )}
                {currentLine && (
                  <div className="ms-line ms-current" key={`c-${activeIndex}`}>
                    <span className="ms-speaker">{currentLine.speaker}</span>
                    <div className="ms-text">{currentLine.text}</div>
                  </div>
                )}
              </div>
            )}

            {audioSrc && (
              <div className="immersive-controls">
                <button
                  type="button"
                  className="immersive-play-btn"
                  onClick={togglePlay}
                  aria-label={playing ? "Pause" : "Play"}
                >
                  {playing ? "❚❚" : "▶"}
                </button>
                <div
                  className="immersive-progress"
                  onClick={onProgressClick}
                  role="slider"
                  aria-valuemin={0}
                  aria-valuemax={duration || 0}
                  aria-valuenow={time}
                  tabIndex={0}
                >
                  <div className="immersive-progress-fill" style={{ width: `${pct}%` }} />
                </div>
                <span className="immersive-time">
                  {format(time)} / {format(duration)}
                </span>
                <audio ref={audioRef} preload="auto">
                  <source src={audioSrc} />
                </audio>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
