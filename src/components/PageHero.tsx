"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  heading: string;
  subtext: string;
}

export default function PageHero({ eyebrow, heading, subtext }: PageHeroProps) {
  return (
    <section className="bg-dark pt-32 pb-24">
      <div className="mx-auto max-w-[1152px] px-5 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gold text-xs font-medium tracking-[0.12em] uppercase mb-4"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-season text-[clamp(2.5rem,5vw,64px)] text-cream leading-[1.05] tracking-[-0.02em] mb-6 max-w-[760px]"
        >
          {heading}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-cream/60 font-light text-base leading-[1.75] max-w-[600px]"
        >
          {subtext}
        </motion.p>
      </div>
    </section>
  );
}
