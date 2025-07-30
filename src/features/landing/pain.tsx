"use client";

import { Typography } from "@/components/nowts/typography";
import { SectionLayout } from "./section-layout";

export const PainSection = () => {
  return (
    <SectionLayout
      variant="card"
      size="base"
      className="relative isolate flex flex-col items-center justify-center gap-4 overflow-hidden"
    >
      <GridBackground />

      <div className="relative z-10 flex w-full flex-col items-center gap-3 lg:gap-4 xl:gap-6">
        <Typography variant="h1">Pourquoi nous choisir</Typography>
        <Typography variant="large">
          Les agences classiques vous font perdre temps et argent. CAMELEO ne livre pas un produit mais un résultat.
        </Typography>

        <div className="flex items-start gap-4 max-lg:flex-col">
          <div className="flex-1 rounded-lg bg-black-800/20 p-4 lg:p-6">
            <Typography variant="h3" className="text-white-300">
              <span style={{ filter: "grayscale(95%)" }}>😞</span> Avec les agences classiques
            </Typography>
            <ul className="text-foreground/80 mt-4 ml-4 flex list-disc flex-col gap-2 text-lg">
              <li>Payer cher sans garantie de résultats</li>
              <li>Processus flous, délais interminables</li>
              <li>Solutions génériques, non adaptées</li>
              <li>Risques financiers élevés</li>
            </ul>
          </div>

          <div className="flex-1 rounded-lg bg-black-200/20 p-4 lg:p-6">
            <Typography variant="h3" className="text-white-300">
              <span style={{ filter: "grayscale(95%)" }}>😎</span> Avec CAMELEO
            </Typography>
            <ul className="text-foreground/80 mt-4 ml-4 flex list-disc flex-col gap-2 text-lg">
              <li>Paiement à la performance ou en equity</li>
              <li>Suivi clair, étapes validées en temps réel</li>
              <li>Plans 100% personnalisés à vos objectifs</li>
              <li>Zéro risque : vous payez ce qui marche</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

// ✅ GridBackground inclus dans ce fichier
const GridBackground = () => {
  return (
    <div className="bg-grid absolute inset-0 [mask-image:linear-gradient(180deg,transparent,var(--foreground),transparent)]" />
  );
};