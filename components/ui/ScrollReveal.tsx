"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const selectors = [
      ".specialties-section .section-kicker",
      ".specialties-section .section-heading-row h2",
      ".specialties-section .text-link",
      ".specialty-card",

      ".tech-v2-intro",
      ".tech-v2-principle",
      ".process-v2-step",
      ".tech-v2-capabilities",

      ".cases-v2-header > div",
      ".cases-v2-intro",
      ".case-v2-card",
      ".cases-v2-bottom",

      ".why-section .section-kicker",
      ".why-section h2",
      ".reasons-grid article",
      ".why-photo",

      ".contact-band-inner",
      ".footer-grid > *",
    ];

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(selectors.join(","))
    );

    if (!elements.length) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      elements.forEach((element) => {
        element.classList.add("rs-reveal-visible");
      });

      return;
    }

    const staggerClasses = [
      "specialty-card",
      "process-v2-step",
      "case-v2-card",
    ];

    const staggerGroups = new Map<string, number>();

    elements.forEach((element) => {
      element.classList.add("rs-reveal");

      const matchedClass = staggerClasses.find((className) =>
        element.classList.contains(className)
      );

      if (matchedClass) {
        const index = staggerGroups.get(matchedClass) ?? 0;

        element.style.setProperty(
          "--rs-delay",
          `${Math.min(index * 70, 280)}ms`
        );

        staggerGroups.set(matchedClass, index + 1);
      }
    });

    let observer: IntersectionObserver | null = null;

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          const element = entry.target as HTMLElement;

          element.classList.add("rs-reveal-visible");
          observer?.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    elements.forEach((element) => {
      observer?.observe(element);
    });

    return () => {
      observer?.disconnect();
    };
  }, []);

  return null;
}