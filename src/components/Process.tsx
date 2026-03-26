"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const TRAVEL = 900;  // ms to animate to next step
const PAUSE  = 2200; // ms to pause at each step
const TOTAL  = 3 * TRAVEL + 3 * PAUSE + 300;

const steps = [
  {
    number: "01",
    title: "Sourcing",
    description: "Sourcing involves identifying potential investment opportunities.",
  },
  {
    number: "02",
    title: "Evaluation",
    description: "The next step is thorough evaluation to assess their viability and return potential.",
  },
  {
    number: "03",
    title: "Execution",
    description: "WC decides whether to proceed and determines the deal structure and execution.",
  },
];

export default function Process() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    if (!inView) return;

    let t1: ReturnType<typeof setTimeout>,
        t2: ReturnType<typeof setTimeout>,
        t3: ReturnType<typeof setTimeout>,
        t4: ReturnType<typeof setTimeout>;

    const runCycle = () => {
      setActiveStep(-1);
      t1 = setTimeout(() => setActiveStep(0), TRAVEL);
      t2 = setTimeout(() => setActiveStep(1), TRAVEL + PAUSE + TRAVEL);
      t3 = setTimeout(() => setActiveStep(2), 2 * TRAVEL + 2 * PAUSE + TRAVEL);
      t4 = setTimeout(runCycle, TOTAL);
    };

    runCycle();
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [inView]);

  // Line progress as a percentage (0–100)
  const pct = activeStep < 0 ? 0 : ((activeStep + 1) / steps.length) * 100;
  const lineTransition = activeStep < 0 ? "none" : `all ${TRAVEL}ms ease`;

  return (
    <section id="process" ref={ref} className="bg-cream py-28">
      <div className="mx-auto max-w-[1152px] px-5 md:px-10">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-gold"
        >
          How we work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="mb-16 font-season leading-[1.1] tracking-tight text-dark"
          style={{ fontSize: "clamp(2rem, 4vw, 52px)" }}
        >
          Investment process
        </motion.h2>

        {/* Horizontal progress line — desktop only */}
        <div className="process-hline relative mb-0">
          <div className="h-px w-full bg-dark/[0.12]" />
          <div
            className="absolute top-0 left-0 h-px bg-gold"
            style={{
              width: `${pct}%`,
              transition: lineTransition,
            }}
          />
          {steps.map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-300 ease-in-out"
              style={{
                left: `${(i + 1) * 33.33}%`,
                backgroundColor: activeStep >= i ? "#fcb835" : "rgba(41,41,41,0.2)",
              }}
            />
          ))}
        </div>

        {/* Steps grid */}
        <div className="process-steps-wrap">

          {/* Vertical progress line — mobile only */}
          <div className="process-vline-wrap">
            <div className="process-vline-base" />
            <div className="process-vline-gold" style={{
              height: `${pct}%`,
              transition: lineTransition,
            }} />
          </div>

          <div className="grid-3col process-steps-grid">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
                className="relative pt-10"
              >
                {/* Dot on the vertical line — mobile only */}
                <div className="process-dot" style={{
                  backgroundColor: activeStep >= i ? "#fcb835" : "rgba(41,41,41,0.2)",
                }} />

                <p
                  className="mb-5 font-[family-name:var(--font-public-sans)] text-[0.7rem] font-semibold tracking-[0.1em] transition-colors duration-[400ms] ease-in-out"
                  style={{
                    color: activeStep === i ? "#fcb835" : "rgba(252,184,53,0.45)",
                  }}
                >
                  {step.number}
                </p>
                <h3
                  className="mb-3 font-season font-normal text-dark transition-opacity duration-[400ms] ease-in-out"
                  style={{
                    fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                    opacity: activeStep === i ? 1 : 0.5,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm font-light leading-[1.7] text-dark transition-opacity duration-[400ms] ease-in-out"
                  style={{
                    opacity: activeStep === i ? 0.65 : 0.3,
                  }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
