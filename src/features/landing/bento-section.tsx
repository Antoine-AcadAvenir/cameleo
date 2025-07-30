"use client";

import { BentoGrid, BentoGridItem } from "@/components/nowts/bentoo";
import { Loader } from "@/components/nowts/loader";
import { Typography } from "@/components/nowts/typography";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Brain,
  CheckCircle,
  Palette,
  Zap,
} from "lucide-react";
import type { Variants } from "motion/react";
import { motion } from "motion/react";
import { SectionLayout } from "./section-layout";

export function BentoGridSection() {
  return (
    <SectionLayout>
      <h2 className="mb-6 text-3xl font-bold text-center">Notre méthode</h2>
      <BentoGrid className="mx-auto max-w-4xl md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </SectionLayout>
  );
}

const Skeleton1 = () => {
  const variants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex h-full flex-col gap-2"
    >
      <motion.div className="border-border bg-background flex flex-row items-start gap-2 rounded-2xl border p-3">
        <div className="size-6 shrink-0 rounded-full bg-gradient-to-r from-gray-800 to-gray-500" />
        <div>
          <p className="text-xs text-neutral-500">
            Définir vos objectifs avec un questionnaire sur mesure
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={variants}
        className="border-border bg-background flex flex-row items-start justify-end gap-2 rounded-2xl border p-3"
      >
        <p className="text-xs text-neutral-500">
          Plan personnalisé : stratégie, étapes, et résultats attendus
        </p>
        <div className="size-6 shrink-0 rounded-full bg-gradient-to-r from-gray-800 to-gray-500" />
      </motion.div>
    </motion.div>
  );
};

const Skeleton2 = () => {
  const variants: Variants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex h-full flex-col gap-2"
    >
      <motion.div>
        <Alert variant="default" className="">
          <Loader size={20} />
          <AlertTitle>Planification en cours...</AlertTitle>
        </Alert>
      </motion.div>
      <motion.div variants={variants}>
        <Alert variant="success" className="">
          <CheckCircle size={20} />
          <AlertTitle>Votre projet est validé et lancé !</AlertTitle>
        </Alert>
      </motion.div>
    </motion.div>
  );
};

const Skeleton3 = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex size-full min-h-24 flex-1 flex-col space-y-2 rounded-lg"
      style={{
        background:
          "linear-gradient(-45deg, #000000, #333333, #666666, #ffffff)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="size-full rounded-lg"></motion.div>
    </motion.div>
  );
};

const Skeleton4 = () => {
  const first = {
    initial: { x: 20, rotate: -5 },
    hover: { x: 0, rotate: 0 },
  };
  const second = {
    initial: { x: -20, rotate: 5 },
    hover: { x: 0, rotate: 0 },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 flex-row gap-4"
    >
      <motion.div
        variants={first}
        className="border-border bg-background flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border p-4"
      >
        <Typography variant="large">+50% Résultats</Typography>
        <Typography variant={"muted"}>Sur vos objectifs</Typography>
        <Typography variant={"muted"} className="text-gray-300">
          Paiement à la performance
        </Typography>
      </motion.div>
      <motion.div
        className="border-border bg-background flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border p-4"
      >
        <Typography variant="large">100% Personnalisé</Typography>
        <Typography variant={"muted"}>Suivi en temps réel</Typography>
        <Typography variant={"muted"} className="text-gray-300">
          Plan sur mesure
        </Typography>
      </motion.div>
      <motion.div
        variants={second}
        className="border-border bg-background flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border p-4"
      >
        <Typography variant="large">50% Equity</Typography>
        <Typography variant={"muted"}>Pour projets tech</Typography>
        <Typography variant={"muted"} className="text-gray-300">
          Partenariat stratégique
        </Typography>
      </motion.div>
    </motion.div>
  );
};

const Skeleton5 = () => {
  const variants = {
    initial: { x: 0 },
    animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-col gap-2"
    >
      <motion.div
        variants={variants}
        className="border-border bg-background flex flex-row items-start gap-2 rounded-2xl border p-3"
      >
        <div className="size-10 rounded-full bg-gradient-to-r from-gray-800 to-gray-500" />
        <p className="text-xs text-neutral-500">
          Freelance : passez notre certification rigoureuse
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="border-border bg-background flex flex-row items-start justify-end gap-2 rounded-2xl border p-3"
      >
        <div>
          <p className="text-xs text-neutral-500">Certification obtenue</p>
          <motion.p
            className="text-xs text-neutral-500"
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1 },
            }}
          >
            Formés à notre méthode, rémunérés aux résultats, zéro risque
          </motion.p>
        </div>
        <div className="size-6 shrink-0 rounded-full bg-gradient-to-r from-gray-800 to-gray-500" />
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Stratégie sur mesure",
    description: (
      <span className="text-sm">
        Nous définissons vos objectifs avec un questionnaire pour un plan précis et personnalisé.
      </span>
    ),
    header: <Skeleton1 />,
    className: "md:col-span-1",
    icon: <Brain size={20} />,
  },
  {
    title: "Exécution par étapes",
    description: (
      <span className="text-sm">
        Chaque étape est validée et payée pour un suivi clair et efficace.
      </span>
    ),
    header: <Skeleton2 />,
    className: "md:col-span-1",
    icon: <CheckCircle size={20} />,
  },
  {
    title: "Design brutal & efficace",
    description: (
      <span className="text-sm">
        Un style noir et blanc, percutant, qui incarne notre approche directe.
      </span>
    ),
    header: <Skeleton3 />,
    className: "md:col-span-1",
    icon: <Palette size={20} />,
  },
  {
    title: "Paiement flexible",
    description: (
      <span className="text-sm">
        Prix fixe, paiement à la performance, ou partenariat en equity : vous choisissez.
      </span>
    ),
    header: <Skeleton4 />,
    className: "md:col-span-2",
    icon: <BarChart3 size={20} />,
  },
  {
    title: "Freelances d’élite",
    description: (
      <span className="text-sm">
        Formés à notre méthode, certifiés, rémunérés aux résultats. Zéro risque, maximum d’impact.
      </span>
    ),
    header: <Skeleton5 />,
    className: "md:col-span-1",
    icon: <Zap size={20} />,
  },
];