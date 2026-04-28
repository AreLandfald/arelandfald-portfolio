"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(min-width: 768px)").matches) return;

    const baseStyle = `
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

    const main = document.createElement("img");
    main.id = "custom-cursor";
    main.src = "/Assets/cursor.png";
    main.alt = "";
    main.style.cssText = baseStyle;
    document.body.appendChild(main);

    const mirror = document.createElement("img");
    mirror.id = "custom-cursor-mirror";
    mirror.src = "/Assets/cursor.png";
    mirror.alt = "";
    mirror.style.cssText = baseStyle + "display: none;";
    document.body.appendChild(mirror);

    let raf = 0;
    let lastX = 0;
    let lastY = 0;

    const move = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        main.style.left = lastX + "px";
        main.style.top = lastY + "px";

        const isHome = document.body.classList.contains("home-route");
        if (isHome) {
          mirror.style.display = "block";
          mirror.style.left = window.innerWidth - lastX + "px";
          mirror.style.top = window.innerHeight - lastY + "px";
        } else {
          mirror.style.display = "none";
        }

        const el = document.elementFromPoint(lastX, lastY);
        const size = el && window.getComputedStyle(el).cursor === "pointer" ? "36px" : "32px";
        main.style.width = size;
        main.style.height = size;
        mirror.style.width = size;
        mirror.style.height = size;

        raf = 0;
      });
    };

    document.addEventListener("mousemove", move);
    return () => {
      document.removeEventListener("mousemove", move);
      if (raf) cancelAnimationFrame(raf);
      main.remove();
      mirror.remove();
    };
  }, []);

  return null;
}
