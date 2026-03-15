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
    <section id="process" ref={ref} style={{ backgroundColor: "#fffef2", padding: "96px 0" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 40px" }}>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ color: "#fcb835", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px" }}
        >
          How we work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08 }}
          style={{ fontFamily: "var(--font-season)", fontSize: "clamp(2rem, 4vw, 52px)", color: "#292929", lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: "64px" }}
        >
          Investment process
        </motion.h2>

        {/* Horizontal progress line — desktop only */}
        <div className="process-hline" style={{ position: "relative", marginBottom: "0" }}>
          <div style={{ height: "1px", backgroundColor: "rgba(41,41,41,0.12)", width: "100%" }} />
          <div style={{
            position: "absolute", top: 0, left: 0, height: "1px",
            backgroundColor: "#fcb835",
            width: `${pct}%`,
            transition: lineTransition,
          }} />
          {steps.map((_, i) => (
            <div key={i} style={{
              position: "absolute", top: "50%",
              left: `${(i + 1) * 33.33}%`,
              transform: "translate(-50%, -50%)",
              width: "5px", height: "5px", borderRadius: "50%",
              backgroundColor: activeStep >= i ? "#fcb835" : "rgba(41,41,41,0.2)",
              transition: "background-color 0.3s ease",
            }} />
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
                style={{ paddingTop: "40px", position: "relative" }}
              >
                {/* Dot on the vertical line — mobile only */}
                <div className="process-dot" style={{
                  backgroundColor: activeStep >= i ? "#fcb835" : "rgba(41,41,41,0.2)",
                }} />

                <p style={{
                  fontFamily: "var(--font-public-sans)",
                  fontSize: "0.7rem", fontWeight: 600,
                  color: activeStep === i ? "#fcb835" : "rgba(252,184,53,0.45)",
                  letterSpacing: "0.1em", marginBottom: "20px",
                  transition: "color 0.4s ease",
                }}>
                  {step.number}
                </p>
                <h3 style={{
                  fontFamily: "var(--font-season)",
                  fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                  color: "#292929", marginBottom: "12px", fontWeight: 400,
                  opacity: activeStep === i ? 1 : 0.5,
                  transition: "opacity 0.4s ease",
                }}>
                  {step.title}
                </h3>
                <p style={{
                  color: "#292929",
                  opacity: activeStep === i ? 0.65 : 0.3,
                  fontWeight: 300, fontSize: "0.875rem", lineHeight: 1.7, margin: 0,
                  transition: "opacity 0.4s ease",
                }}>
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
