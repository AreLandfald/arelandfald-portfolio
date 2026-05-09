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
  const [subsOn, setSubsOn] = useState(false);

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
  const firstLineTime = manuscriptLines?.[0]?.time ?? Infinity;
  const beforeFirstLine = activeIndex < 0 && time < firstLineTime;
  const currentLine = activeIndex >= 0 && manuscriptLines ? manuscriptLines[activeIndex] : null;

  return (
    <div>
      <button type="button" className="immersive-card-wrapper" onClick={playFromStart}>
        <div className="immersive-card">
          {imageSrc && (
            <div className="immersive-card-image-wrap">
              <img src={imageSrc} alt="" className="immersive-card-img" />
              {open && subsOn && (
                <>
                  <div className="immersive-subs-dim" aria-hidden="true" />
                  <div className="immersive-subs-overlay">
                    {beforeFirstLine && (
                      <div className="immersive-subs-dots" aria-hidden="true">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    )}
                    {currentLine && (
                      <div key={`c-${activeIndex}`} className="immersive-subs-line">
                        <span className="immersive-subs-speaker">{currentLine.speaker}</span>
                        <span className="immersive-subs-text">{currentLine.text}</span>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
        <div className="immersive-card-meta">
          <h3 dangerouslySetInnerHTML={{ __html: title }} />
          <p>{location}</p>
        </div>
      </button>

      {open && audioSrc && (
        <div style={{ marginTop: 16, padding: "0 4px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
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
                background: "rgba(0,0,0,0.12)",
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
                  background: "#000",
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
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setSubsOn((v) => !v); }}
              className="immersive-subs-toggle"
              aria-pressed={subsOn}
            >
              <span className="immersive-subs-toggle-icon" aria-hidden="true">CC</span>
              <span>{subsOn ? "Hide subtitles" : "English subtitles"}</span>
            </button>
          )}

          <audio ref={audioRef} preload="auto">
            <source src={audioSrc} />
          </audio>
        </div>
      )}
    </div>
  );
}
