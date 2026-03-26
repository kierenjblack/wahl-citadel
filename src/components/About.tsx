"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    title: "Strategy",
    description:
      "Our team's remarkable expertise and extensive network enable us to empower businesses, ensuring they secure the necessary funding for their growth journey.",
  },
  {
    title: "Experience",
    description:
      "Wahl Citadel is renowned for attracting investments and fostering financial growth, making us the ideal destination for businesses looking to expand.",
  },
  {
    title: "Knowledge",
    description:
      "We offer four distinct funds, each representing elements of nature and tailored to specific investment objectives.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="bg-dark py-24"
    >
      <div className="mx-auto max-w-[1152px] px-5 md:px-10">
        {/* Heading + text columns */}
        <div className="grid-2col mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="font-season text-cream leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 52px)" }}
          >
            Who is Wahl Citadel?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <p className="text-cream/75 font-light text-base leading-[1.7]">
              Wahl Citadel is renowned for attracting investments and fostering
              financial growth, making us the ideal destination for businesses
              looking to expand.
            </p>
            <p className="text-cream/75 font-light text-base leading-[1.7]">
              We offer four distinct funds, each representing elements of nature
              and tailored to specific investment objectives, showcasing our
              commitment to providing diverse and optimal financial growth options.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mb-16 h-px bg-cream/[0.08]" />

        {/* 3 pillars */}
        <div className="grid-3col">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
            >
              <div className="mb-5 h-0.5 w-8 bg-gold" />
              <h3 className="mb-3 font-season text-xl font-normal text-cream">
                {p.title}
              </h3>
              <p className="text-cream/60 text-sm font-light leading-[1.7]">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
