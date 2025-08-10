"use client";
import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic({
  src = "/sounds/bg-music.mp3",
  minVolume = 0.02,
  maxVolume = 0.08,
  fadeInDuration = 1000,   // ms
  fadeOutDuration = 10000  // ms
}: {
  src?: string;
  minVolume?: number;
  maxVolume?: number;
  fadeInDuration?: number;
  fadeOutDuration?: number;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeTimeoutRef = useRef<number | null>(null);
  const fadeIntervalRef = useRef<number | null>(null);
  const [started, setStarted] = useState(false);
  const targetVolume = Math.max(minVolume, Math.min(0.05, maxVolume));

  // Fonction pour faire un fade vers un volume donné sur une durée ms
  const fadeTo = (toVolume: number, duration: number) => {
    if (!audioRef.current) return;
    if (fadeIntervalRef.current !== null) {
      clearInterval(fadeIntervalRef.current);
    }

    const audio = audioRef.current;
    const fromVolume = audio.volume;
    const steps = 30;
    const stepTime = duration / steps;
    let currentStep = 0;

    fadeIntervalRef.current = window.setInterval(() => {
      currentStep++;
      const newVolume = fromVolume + ((toVolume - fromVolume) * (currentStep / steps));
      audio.volume = Math.min(Math.max(newVolume, 0), 1);

      if (currentStep >= steps) {
        if (fadeIntervalRef.current !== null) {
          clearInterval(fadeIntervalRef.current);
          fadeIntervalRef.current = null;
        }
      }
    }, stepTime);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (!started) {
        const audio = audioRef.current;
        if (audio) {
          audio.volume = 0;
          audio.play().catch((err) => console.warn("Lecture bloquée :", err));
          fadeTo(targetVolume, fadeInDuration);
          setStarted(true);
        }
      } else {
        // Si déjà démarré, remonte doucement le volume à targetVolume
        fadeTo(targetVolume, 1000);
      }

      // Reset timer de fade-out
      if (fadeTimeoutRef.current !== null) {
        clearTimeout(fadeTimeoutRef.current);
      }
      fadeTimeoutRef.current = window.setTimeout(() => {
        // Fade-out après 10 secondes d'inactivité de scroll
        fadeTo(0, fadeOutDuration);
      }, fadeOutDuration);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (fadeTimeoutRef.current !== null) {
        clearTimeout(fadeTimeoutRef.current);
      }
      if (fadeIntervalRef.current !== null) {
        clearInterval(fadeIntervalRef.current);
      }
    };
  }, [started, fadeInDuration, fadeOutDuration, targetVolume]);

  return <audio ref={audioRef} src={src} preload="auto" loop />;
}