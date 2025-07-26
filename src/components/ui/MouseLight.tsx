"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function MouseLight({
  variant = "landing",
}: {
  variant?: "landing" | "dashboard";
}) {
  const [position, setPosition] = useState({ x: -500, y: -500 });
  const [hoveredEl, setHoveredEl] = useState<HTMLElement | null>(null);
  const { theme } = useTheme();

  // Renvoie l'intensité du zoom selon le tag
  function getScaleByTag(tag: string) {
    switch (tag) {
      case "H1":
      case "H2":
        return 1.06;
      case "H3":
      case "H4":
        return 1.045;
      case "IMG":
      case "BUTTON":
      case "A":
        return 1.035;
      case "P":
      case "SPAN":
      case "LI":
        return 1.02;
      default:
        return 1.0; // Pas d’effet par défaut
    }
  }

  useEffect(() => {
    if (variant === "dashboard") return; // On désactive tout

    let lastEl: HTMLElement | null = null;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      const allowedTags = ["IMG", "BUTTON", "A", "P", "SPAN", "H1", "H2", "H3", "H4", "H5", "H6", "LI"];

      if (
        el &&
        allowedTags.includes(el.tagName) &&
        !el.classList.contains("no-hover-effect")
      ) {
        if (el !== lastEl) {
          if (lastEl) {
            lastEl.style.transition = "transform 0.2s ease-out, filter 0.2s ease-out";
            lastEl.style.transform = "";
            lastEl.style.filter = "";
          }

          const scale = getScaleByTag(el.tagName);
          if (scale > 1) {
            el.style.transition = "transform 0.2s ease-out, filter 0.2s ease-out";
            el.style.transform = `scale(${scale})`;
            el.style.filter = `drop-shadow(0 0 10px ${
              theme === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.2)"
            })`;
          }

          lastEl = el;
          setHoveredEl(el);
        }
      } else {
        if (lastEl) {
          lastEl.style.transition = "transform 0.2s ease-out, filter 0.2s ease-out";
          lastEl.style.transform = "";
          lastEl.style.filter = "";
          lastEl = null;
          setHoveredEl(null);
        }
      }
    };

    const onMouseLeave = () => {
      if (lastEl) {
        lastEl.style.transform = "";
        lastEl.style.filter = "";
        lastEl = null;
        setHoveredEl(null);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      if (lastEl) {
        lastEl.style.transform = "";
        lastEl.style.filter = "";
      }
    };
  }, [theme, variant]);

  if (variant === "dashboard") return null; // Supprimer totalement la lumière si dashboard

  const lightColor = theme === "dark"
    ? "rgba(255,255,255,0.3)"
    : "rgba(0,0,0,0.2)";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999] w-[300px] h-[300px] rounded-full"
      style={{
        transform: `translate(${position.x - 150}px, ${position.y - 150}px)`,
        background: `radial-gradient(circle, ${lightColor} 0%, transparent 70%)`,
        filter: "blur(40px)",
        transition: "transform 0.05s ease-out",
        mixBlendMode: theme === "dark" ? "screen" : "multiply",
      }}
    />
  );
}
