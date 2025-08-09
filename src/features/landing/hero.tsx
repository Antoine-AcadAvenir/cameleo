"use client";

import { CircleSvg } from "@/components/svg/circle-svg";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/components/nowts/typography";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { LiquidBubbles } from "@/components/ui/liquidbubbles.tsx";

export const Hero = () => {
  return (
    <div className="relative isolate flex flex-col overflow-hidden -mt-16">

      {/* EFFET LIQUID BUBBLES - FIXÉ, HAUT, TOUT DEVANT */}
      <div
        className="pointer-events-none absolute top-[-150px] left-0 w-full h-[80%] z-[9999]"
      >
        <LiquidBubbles />
      </div>

      {/* FOND */}
      <GridBackground />
      <GradientBackground />

      {/* CONTENU */}
      <main className="relative z-10 py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Typography
              variant="h1"
              className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl lg:text-7xl"
            >
              ! CAMELEO façonne votre succès{" "}
              <span className="relative inline-block">
                <span>numérique !</span>
                <CircleSvg className="fill-primary absolute inset-0" />
              </span>
            </Typography>

            <Typography
              variant="large"
              className="text-muted-foreground mt-8 text-lg font-medium text-pretty sm:text-xl/8"
            >
              <span style={{ filter: 'grayscale(95%)' }}>🧠</span> Stratégie.
              <span style={{ filter: 'grayscale(95%)' }}> 💻</span> Développement. SaaS & Sites web.
              <span style={{ filter: 'grayscale(95%)' }}> 🎨</span> Design.
              <span style={{ filter: 'grayscale(95%)' }}> ✍️</span> Copywriting.
              <span style={{ filter: 'grayscale(95%)' }}> 🎥</span> Création de contenu.
              <span style={{ filter: 'grayscale(95%)' }}> 🤖</span> Automatisation & IA.
              <span style={{ filter: 'grayscale(95%)' }}> 📢</span> Publicité.
              <span style={{ filter: 'grayscale(95%)' }}> 🤝</span> Partenariats.
              <span style={{ filter: 'grayscale(95%)' }}> 🔍</span> Recherche & innovation.
              <span style={{ filter: 'grayscale(95%)' }}> 📊</span> Analyse de données.
              <span style={{ filter: 'grayscale(95%)' }}> 📱</span> Applications mobiles.
              <span style={{ filter: 'grayscale(95%)' }}> ☁️</span> Cloud & hébergement.
              <span style={{ filter: 'grayscale(95%)' }}> 🛠️</span> Support & maintenance. <br />
              Chaque pixel compte. Vous avez une idée ? Nous la créons de zéro.
            </Typography>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/auth/signup">
                <LiquidButton className="text-base px-6 py-3">
                  Façonner
                </LiquidButton>
              </Link>

              <Link
                href="#pricing"
                className={buttonVariants({ size: "lg", variant: "link" })}
              >
                Devenir partenaire <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* IMAGE AVEC Z-INDEX FAIBLE */}
          <div className="relative z-0">
            <Image
              alt="App screenshot"
              src="/images/screenshot.png"
              width={1280}
              height={720}
              className="mt-16 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-24"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

const GridBackground = () => {
  return (
    <div className="bg-grid absolute inset-0 -z-10 [mask-image:linear-gradient(180deg,transparent,var(--foreground),transparent)]" />
  );
};

const GradientBackground = () => {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="from-gray-800 to-black dark:from-gray-200 dark:to-white relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="from-black to-gray-800 dark:from-white dark:to-gray-200 relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </>
  );
};