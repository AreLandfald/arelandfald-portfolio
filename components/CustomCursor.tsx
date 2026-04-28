"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(min-width: 768px)").matches) return;

    const cursor = document.createElement("img");
    cursor.id = "custom-cursor";
    cursor.src = "/Assets/cursor.png";
    cursor.alt = "";
    cursor.style.cssText = `
      position: fixed;
      width: 32px;
      height: 32px;
      pointer-events: none;
      z-index: 2147483647;
      transform: translate(-50%, -50%);
      transition: width 0.1s, height 0.1s;
      top: 0;
      left: 0;
    `;
    document.body.appendChild(cursor);

    let raf = 0;
    let lastX = 0;
    let lastY = 0;

    const move = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        cursor.style.left = lastX + "px";
        cursor.style.top = lastY + "px";
        const el = document.elementFromPoint(lastX, lastY);
        if (el) {
          const cs = window.getComputedStyle(el);
          if (cs.cursor === "pointer") {
            cursor.style.width = "36px";
            cursor.style.height = "36px";
          } else {
            cursor.style.width = "32px";
            cursor.style.height = "32px";
          }
        }
        raf = 0;
      });
    };

    document.addEventListener("mousemove", move);
    return () => {
      document.removeEventListener("mousemove", move);
      if (raf) cancelAnimationFrame(raf);
      cursor.remove();
    };
  }, []);

  return null;
}
