"use client";

import { animate } from "motion/react";
import { useEffect, useRef } from "react";
import { SectionLayout } from "./section-layout";

type StatProps = {
  number: number;
  suffix: string;
  text: string;
};

const stats: StatProps[] = [
  {
    number: 69.4,
    suffix: " %",
    text: "Des entreprises affirment que leur présence en ligne est leur premier levier de croissance. Lire, c’est bien. Agir, c’est mieux. Il est temps de passer à l’action.",
  },
  {
    number: 69.4,
    suffix: " B",
    text: "Le marché numérique français est évalué à 69,4 milliards d’euros en 2024. Alors, vous hésitez encore ?",
  },
  {
    number: +69.4,
    suffix: " %",
    text: "C’est la croissance du chiffre d’affaires des entreprises engagées dans leur transformation digitale. Et vous, vous attendiez quoi ?",
  },
  {
    number: 69.4,
    suffix: " %",
    text: "des clients préfèrent payer pour un résultat concret plutôt que pour une prestation sans garantie. Chez CAMELEO, le risque, c’est nous qui le prenons.",
  },
];

export function StatsSection() {
  return (
    <SectionLayout size="sm">
      <div className="grid w-full items-center gap-12 sm:grid-cols-2 md:-mx-5 md:max-w-none md:grid-cols-4 md:gap-0">
        {stats.map((stat, index) => (
          <div key={index} className="relative text-center md:px-5">
            <h4 className="mb-2 text-2xl font-bold tabular-nums md:text-3xl">
              <Counter from={0} to={stat.number} />

              {stat.suffix}
            </h4>
            <p className="text-muted-foreground text-sm">{stat.text}</p>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}

function Counter({
  from,
  to,
  duration = 2,
}: {
  from: number;
  to: number;
  duration?: number;
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!nodeRef.current) return;
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration,
      ease: "easeInOut",

      onUpdate(value) {
        node.textContent = value.toFixed(2);
      },
    });

    return () => controls.stop();
  }, [from, to, duration]);

  return <span ref={nodeRef}>{from}</span>;
}
