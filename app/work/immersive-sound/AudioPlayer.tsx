"use client";

import { useEffect, useRef, useState } from "react";

function format(t: number) {
  if (!isFinite(t)) return "0:00";
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function AudioPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setTime(audio.currentTime);
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
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = ratio * (duration || 0);
  };

  const pct = duration ? (time / duration) * 100 : 0;

  return (
    <div className="audio-player-container">
      <div className="progress-bar-container" onClick={seek}>
        <div className="progress-bar" style={{ width: `${pct}%` }}></div>
      </div>
      <div className="audio-controls">
        <button className="play-pause-btn" onClick={toggle}>
          {playing ? "❚❚ Pause" : "▶ Play"}
        </button>
        <span className="audio-time">{format(time)}</span>
        <span className="audio-time">{format(duration)}</span>
      </div>
      <audio ref={audioRef} preload="metadata">
        <source src={src} />
      </audio>
    </div>
  );
}
