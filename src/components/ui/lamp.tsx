"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function LampDemo() {
  return <LampContainer />;
}

export const LampContainer = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute left-1/2 -translate-x-1/2 z-50", // absolute pour rester au-dessus
        className
      )}
    >
      <div className="relative flex items-center justify-center isolate">
        {/* Cône gauche */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "60rem" }} // augmente sur desktop
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute right-1/2 h-56 w-[45rem] md:w-[60rem] lg:w-[80rem] bg-gradient-conic from-black/20 dark:from-white via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
        />

        {/* Cône droit */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "60rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute left-1/2 h-56 w-[30rem] md:w-[60rem] lg:w-[80rem] bg-gradient-conic from-transparent via-transparent to-black/20 dark:to-white [--conic-position:from_290deg_at_center_top]"
        />

        {/* Glow central */}
        <div className="absolute z-50 h-36 w-[28rem] md:w-[56rem] lg:w-[60rem] -translate-y-1/2 rounded-full bg-black/20 dark:bg-white opacity-50 blur-3xl"></div>

        {/* Partie centrale lumineuse */}
        <motion.div
          initial={{ width: "1rem" }}
          whileInView={{ width: "20rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-black/20 dark:bg-white blur-3xl"
        />

        {/* Barre horizontale */}
        <motion.div
          initial={{ width: "5rem" }}
          whileInView={{ width: "45rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute z-50 h-1 w-[30rem] -translate-y-[7rem] bg-black/80 dark:bg-white"
        />
      </div>
    </div>
  );
};
