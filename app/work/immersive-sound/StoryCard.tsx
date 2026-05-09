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
  imageSrc,
  audioSrc,
  manuscriptLines,
}: {
  title: string;
  location: string;
  description?: string;
  imageSrc?: string;
  audioSrc?: string;
  manuscriptLines?: Line[];
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [open, setOpen] = useState(false);
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
          if (t >= cur && t < nxt) { idx = i; break; }
        }
        setActiveIndex(idx);
      }
    };
    const onLoaded = () => setDuration(audio.duration);
    const onEnd = () => setPlaying(false);

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("durationchange", onLoaded);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("durationchange", onLoaded);
      audio.removeEventListener("ended", onEnd);
    };
  }, [manuscriptLines, open]);

  const playFromStart = () => {
    setOpen(true);
    const audio = audioRef.current;
    if (!audio) return;
    document.querySelectorAll("audio").forEach((a) => { if (a !== audio) a.pause(); });
    audio.play().catch(() => {});
    setPlaying(true);
    if (audio.duration && isFinite(audio.duration)) setDuration(audio.duration);
  };

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      document.querySelectorAll("audio").forEach((a) => { if (a !== audio) a.pause(); });
      audio.play().catch(() => {});
      setPlaying(true);
      if (audio.duration && isFinite(audio.duration)) setDuration(audio.duration);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  const onProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration || !isFinite(audio.duration)) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * audio.duration;
  };

  const pct = duration ? (time / duration) * 100 : 0;
  const prevLine = activeIndex > 0 && manuscriptLines ? manuscriptLines[activeIndex - 1] : null;
  const currentLine = activeIndex >= 0 && manuscriptLines ? manuscriptLines[activeIndex] : null;

  const speakerStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "'GeistRegular', sans-serif",
    fontSize: "0.65rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#000",
    marginBottom: 4,
  };

  return (
    <div>
      <button type="button" className="immersive-card-wrapper" onClick={playFromStart}>
        <div className="immersive-card">
          {imageSrc && <img src={imageSrc} alt="" className="immersive-card-img" />}
        </div>
        <div className="immersive-card-meta">
          <h3 dangerouslySetInnerHTML={{ __html: title }} />
          <p>{location}</p>
        </div>
      </button>

      {open && audioSrc && (
        <div style={{ marginTop: 16, padding: "0 4px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <button
              type="button"
              onClick={togglePlay}
              aria-label={playing ? "Pause" : "Play"}
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                border: "none",
                background: "#000",
                color: "#fff",
                fontSize: 11,
                cursor: "pointer",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {playing ? "❚❚" : "▶"}
            </button>

            <div
              onClick={onProgressClick}
              style={{
                flex: 1,
                height: 3,
                background: "rgba(0,0,0,0.15)",
                borderRadius: 2,
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${pct}%`,
                  background: "#fff",
                  borderRadius: 2,
                  transition: "width 0.1s linear",
                }}
              />
            </div>

            <span
              style={{
                fontFamily: "'GeistMono', monospace",
                fontSize: "0.72rem",
                color: "rgba(0,0,0,0.65)",
                whiteSpace: "nowrap",
              }}
            >
              {format(time)} / {format(duration)}
            </span>
          </div>

          {manuscriptLines && manuscriptLines.length > 0 && (
            <div>
              {prevLine && (
                <div style={{ marginBottom: 12, opacity: 0.3 }}>
                  <span style={speakerStyle}>{prevLine.speaker}</span>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "'GeistRegular', sans-serif",
                      fontSize: "0.9rem",
                      color: "#000",
                      lineHeight: 1.35,
                    }}
                  >
                    {prevLine.text}
                  </span>
                </div>
              )}
              {currentLine && (
                <div
                  key={`c-${activeIndex}`}
                  style={{ opacity: 1, animation: "msCurrentSlideUp 0.55s cubic-bezier(0.16,1,0.3,1)" }}
                >
                  <span style={speakerStyle}>{currentLine.speaker}</span>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "'GeistRegular', sans-serif",
                      fontSize: "1.25rem",
                      color: "#000",
                      lineHeight: 1.35,
                    }}
                  >
                    {currentLine.text}
                  </span>
                </div>
              )}
            </div>
          )}

          <audio ref={audioRef} preload="auto">
            <source src={audioSrc} />
          </audio>
        </div>
      )}
    </div>
  );
}
