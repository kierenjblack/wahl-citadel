"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { investments, statusConfig } from "@/data/investments";

export default function FundsCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-dark py-24">
      <div className="mx-auto max-w-[1152px] px-5 md:px-10">

        <div className="grid-split">
          {/* Left — headline + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold text-xs font-medium tracking-[0.12em] uppercase mb-4">
              Our funds
            </p>
            <h2 className="font-season text-cream leading-[1.1] tracking-tight mb-7" style={{ fontSize: "clamp(2rem, 4vw, 52px)" }}>
              Current investments.
            </h2>
            <p className="text-cream opacity-55 font-light text-[0.95rem] leading-[1.75] mb-10">
              We deploy capital across mining and resources, litigation finance, and property development, partnering with businesses at critical inflection points. Explore our active portfolio and open opportunities.
            </p>
            <Link href="/funds" className="btn btn-primary">
              View Current Investments
            </Link>
          </motion.div>

          {/* Right — roadmap timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative self-center pl-0 md:pl-8"
          >

            <div className="flex flex-col gap-1">
              {investments.map((inv, i) => {
                const status = statusConfig[inv.status];
                return (
                  <Link href={`/investments/${inv.id}`} key={inv.id} className="no-underline">
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                    className="relative py-5 px-7 rounded-lg transition-colors duration-200 hover:bg-cream/[0.04]"
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-[-32px] top-1/2 -translate-y-1/2 items-center justify-center">
                      {/* Outer pulse ring */}
                      <motion.div
                        className="absolute size-5 rounded-full"
                        style={{ backgroundColor: status.color }}
                        animate={{
                          opacity: [0.15, 0.3, 0.15],
                          scale: [1, 1.4, 1],
                        }}
                        transition={{
                          duration: inv.status === "green" ? 1.5 : inv.status === "amber" ? 2.5 : 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      {/* Inner solid dot */}
                      <motion.div
                        className="relative size-2.5 rounded-full"
                        style={{ backgroundColor: status.color }}
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                          delay: 0.5 + i * 0.15,
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <p className="font-season text-[1.05rem] text-cream font-normal mb-1">
                        {inv.company}
                      </p>
                      <span className="text-[0.65rem] font-medium tracking-wide px-2 py-0.5 rounded-full" style={{ backgroundColor: `${status.color}15`, color: status.color }}>
                        {status.label}
                      </span>
                    </div>
                  </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
