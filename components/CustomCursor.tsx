"use client";

import { useEffect } from "react";

const CURSOR_SRC = "/Assets/cursor.png";
const POINTER_SRC = "/Assets/pointer.png";
const CURSOR_DIMS = { w: 22, h: 28 };
const POINTER_DIMS = { w: 28, h: 28 };

// True if the real cursor is hovering over a clickable target.
// Walks ancestors so clicks on inner spans/imgs inside an <a>/<button> still count.
function isClickable(el: Element | null): boolean {
  let cur: Element | null = el;
  while (cur) {
    const tag = cur.tagName?.toLowerCase();
    if (tag === "a" || tag === "button") return true;
    if (cur.getAttribute("role") === "button") return true;
    cur = cur.parentElement;
  }
  if (el instanceof HTMLElement) {
    return getComputedStyle(el).cursor === "pointer";
  }
  return false;
}

export default function CustomCursor() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(min-width: 768px)").matches) return;

    const ghost = document.createElement("div");
    ghost.setAttribute("aria-hidden", "true");
    ghost.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      pointer-events: none;
      z-index: 2147483647;
      background-repeat: no-repeat;
      background-position: top left;
      background-size: contain;
      display: none;
      user-select: none;
    `;
    document.body.appendChild(ghost);

    let raf = 0;
    let lastX = 0;
    let lastY = 0;
    let currentSrc = "";

    const paint = () => {
      const el = document.elementFromPoint(lastX, lastY);
      const pointer = isClickable(el);
      const src = pointer ? POINTER_SRC : CURSOR_SRC;
      const dims = pointer ? POINTER_DIMS : CURSOR_DIMS;

      if (currentSrc !== src) {
        ghost.style.backgroundImage = `url("${src}")`;
        currentSrc = src;
      }
      ghost.style.width = dims.w + "px";
      ghost.style.height = dims.h + "px";

      // Point-symmetric mirror: top-right real → bottom-left ghost.
      ghost.style.left = (window.innerWidth - lastX) + "px";
      ghost.style.top = (window.innerHeight - lastY) + "px";
      ghost.style.display = "block";
    };

    const onMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        paint();
        raf = 0;
      });
    };

    const onLeave = () => {
      ghost.style.display = "none";
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
      ghost.remove();
    };
  }, []);

  return null;
}
