"use client";

import { useEffect } from "react";

type Rule = {
  sectionId: string;
  bodyClass: string;
  threshold?: number;
};

export default function ScrollColorMode({
  rules,
  exitSectionId,
  rootMargin = "0px 0px 150px 0px"
}: {
  rules: Rule[];
  exitSectionId?: string;
  rootMargin?: string;
}) {
  useEffect(() => {
    const elements: { rule?: Rule; isExit: boolean; el: HTMLElement }[] = [];
    for (const rule of rules) {
      const el = document.getElementById(rule.sectionId);
      if (el) elements.push({ rule, isExit: false, el });
    }
    if (exitSectionId) {
      const el = document.getElementById(exitSectionId);
      if (el) elements.push({ isExit: true, el });
    }
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let exitNear = false;
        const active = new Map<string, boolean>();

        entries.forEach((entry) => {
          const meta = elements.find((m) => m.el === entry.target);
          if (!meta) return;
          if (meta.isExit) {
            if (entry.isIntersecting) exitNear = true;
          } else if (meta.rule) {
            const t = meta.rule.threshold ?? 0.3;
            if (entry.isIntersecting && entry.intersectionRatio > t) {
              active.set(meta.rule.bodyClass, true);
            }
          }
        });

        const allClasses = new Set(rules.map((r) => r.bodyClass));
        if (exitNear) {
          allClasses.forEach((c) => document.body.classList.remove(c));
        } else {
          allClasses.forEach((c) => {
            if (active.get(c)) document.body.classList.add(c);
            else document.body.classList.remove(c);
          });
        }
      },
      { threshold: [0, 0.1, 0.3, 0.5, 1], rootMargin }
    );

    elements.forEach((m) => observer.observe(m.el));

    return () => {
      observer.disconnect();
      const allClasses = new Set(rules.map((r) => r.bodyClass));
      allClasses.forEach((c) => document.body.classList.remove(c));
    };
  }, [rules, exitSectionId, rootMargin]);

  return null;
}
