"use client";

import { useEffect, useRef, useState } from "react";

function fmt(t: number): string {
  if (!isFinite(t) || t < 0) return "0:00";
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/**
 * Video player styled to match the Immersive Sound covers: rounded
 * corners, a single black play/pause pill, a thin progress bar.
 *
 * Wrapper width tracks the displayed video width so the progress bar
 * never spills beyond the video frame. Implementation: aspect ratio is
 * read from the video metadata, and the wrapper width is
 * `min(100%, maxHeight * aspect)` — the same expression the browser
 * effectively uses to size the video itself, so the two stay locked.
 *
 * Audio is enabled; playback is user-initiated. Starting one player
 * pauses any other <video>/<audio> on the page.
 */
export default function VideoPlayer({
  src,
  maxHeight = "65vh"
}: {
  src: string;
  maxHeight?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [aspect, setAspect] = useState<number>(16 / 9);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const onTime = () => setTime(v.currentTime);
    const onLoaded = () => {
      setDuration(v.duration);
      if (v.videoWidth && v.videoHeight) setAspect(v.videoWidth / v.videoHeight);
    };
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onEnd = () => setPlaying(false);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("loadedmetadata", onLoaded);
    v.addEventListener("durationchange", onLoaded);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("ended", onEnd);
    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("loadedmetadata", onLoaded);
      v.removeEventListener("durationchange", onLoaded);
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      document.querySelectorAll("video,audio").forEach((m) => {
        if (m !== v) (m as HTMLMediaElement).pause();
      });
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = ref.current;
    if (!v || !v.duration || !isFinite(v.duration)) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    v.currentTime = ratio * v.duration;
  };

  const pct = duration ? (time / duration) * 100 : 0;
  const wrapperWidth = `min(100%, calc(${maxHeight} * ${aspect}))`;

  return (
    <div style={{ width: wrapperWidth, margin: "0 auto", maxWidth: "100%" }}>
      <div
        onClick={toggle}
        style={{
          position: "relative",
          width: "100%",
          borderRadius: 16,
          overflow: "hidden",
          cursor: "pointer",
          background: "#000",
          lineHeight: 0
        }}
      >
        <video
          ref={ref}
          src={src}
          playsInline
          preload="metadata"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            borderRadius: 16
          }}
        />
        {!playing && (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none"
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "rgba(0,0,0,0.55)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                paddingLeft: 4
              }}
            >
              ▶
            </div>
          </div>
        )}
      </div>

      <div
        style={{
          marginTop: 14,
          width: "100%",
          padding: "0 4px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          boxSizing: "border-box"
        }}
      >
        <button
          type="button"
          onClick={toggle}
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
            justifyContent: "center"
          }}
        >
          {playing ? "❚❚" : "▶"}
        </button>
        <div
          onClick={seek}
          style={{
            flex: 1,
            height: 3,
            background: "rgba(0,0,0,0.12)",
            borderRadius: 2,
            cursor: "pointer",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${pct}%`,
              background: "#000",
              borderRadius: 2,
              transition: "width 0.1s linear"
            }}
          />
        </div>
        <span
          style={{
            fontFamily: "'GeistMono', monospace",
            fontSize: "0.72rem",
            color: "rgba(0,0,0,0.65)",
            whiteSpace: "nowrap"
          }}
        >
          {fmt(time)} / {fmt(duration)}
        </span>
      </div>
    </div>
  );
}
