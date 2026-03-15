"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    title: "Rare Opportunities Lead to Extraordinary Outcomes",
    description:
      "We sift through as many opportunities as necessary to secure rare opportunities with asymmetric risk/reward. Well-managed risk enables exceptional returns.",
  },
  {
    title: "Success is Engineered",
    description:
      "Exceptional returns don't happen by chance; they are the result of strategy, expertise, and relentless execution.",
  },
  {
    title: "Smart Risk. Big Rewards.",
    description:
      "Bold decisions create the greatest wealth. We take calculated risks — reckless risk is prohibited. Precision over speculation, always.",
  },
  {
    title: "Performance is the Currency of Trust",
    description:
      "Trust is earned deal-by-deal and return-by-return. Our founding partners invest first and exit last — full alignment from day one.",
  },
  {
    title: "Investors' Interests Aligned",
    description:
      "Investors' success is Wahl Citadel's success. Our returns are aligned with the returns to our investors and all other stakeholders.",
  },
];

const stats = [
  { value: "4", label: "Investment Funds" },
  { value: "30+", label: "Years Combined Experience" },
  { value: "Melbourne", label: "Headquartered" },
  { value: "ASX", label: "Listed Company Experience" },
];

export default function AboutFull() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });
  const philRef = useRef(null);
  const philInView = useInView(philRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* Narrative + pillars */}
      <section ref={ref} style={{ backgroundColor: "#292929", padding: "80px 0 96px" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 40px" }}>

          {/* Two-column intro text */}
          <div className="grid-2col" style={{ marginBottom: "64px" }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              style={{ color: "#fffef2", opacity: 0.75, fontWeight: 300, fontSize: "1rem", lineHeight: 1.8, margin: 0 }}
            >
              The founders of Wahl Citadel came together to develop and offer a new class of investing. Precision Equity was born — and with it, a set of core principles to guide strategy, ensure capital precision, and transform ambition into wealth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.12 }}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <p style={{ color: "#fffef2", opacity: 0.75, fontWeight: 300, fontSize: "1rem", lineHeight: 1.8, margin: 0 }}>
                Our purpose: turn ambition into wealth by transforming rare opportunities into exceptional returns.
              </p>
              <p style={{ color: "#fffef2", opacity: 0.75, fontWeight: 300, fontSize: "1rem", lineHeight: 1.8, margin: 0 }}>
                Based at Level 30, Rialto Building, we operate from the heart of Melbourne&apos;s financial district — a different way to invest.
              </p>
            </motion.div>
          </div>

          {/* Divider */}
          <div style={{ height: "1px", backgroundColor: "rgba(255,254,242,0.08)", marginBottom: "56px" }} />

          {/* 5 founding principles */}
          <div className="grid-3col">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              >
                <div style={{ width: "32px", height: "2px", backgroundColor: "#fcb835", marginBottom: "20px" }} />
                <h3 style={{ fontFamily: "var(--font-season)", fontSize: "1.25rem", color: "#fffef2", marginBottom: "12px", fontWeight: 400 }}>
                  {p.title}
                </h3>
                <p style={{ color: "#fffef2", opacity: 0.6, fontWeight: 300, fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section ref={statsRef} style={{ backgroundColor: "#fcb835", padding: "64px 0" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 40px" }}>
          <div className="grid-stats">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{ textAlign: "center" }}
              >
                <p style={{ fontFamily: "var(--font-season)", fontSize: "clamp(2rem, 4vw, 48px)", color: "#292929", lineHeight: 1, marginBottom: "8px" }}>
                  {stat.value}
                </p>
                <p style={{ color: "#292929", opacity: 0.65, fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.08em", textTransform: "uppercase", margin: 0 }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section ref={philRef} style={{ backgroundColor: "#fffef2", padding: "96px 0" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 40px" }}>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={philInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p style={{ color: "#fcb835", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" }}>
              Our philosophy
            </p>
            <h2 style={{ fontFamily: "var(--font-season)", fontSize: "clamp(1.8rem, 3.5vw, 42px)", color: "#292929", lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: "28px" }}>
              Precision Equity — a new class of investing.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "640px" }}>
              <p style={{ color: "#292929", opacity: 0.75, fontWeight: 300, fontSize: "1rem", lineHeight: 1.75, margin: 0 }}>
                Smart risk. Big rewards. A different way to invest. Welcome to Precision Equity — where we transform rare opportunities into exceptional returns through strategy, expertise, and relentless execution.
              </p>
              <p style={{ color: "#292929", opacity: 0.75, fontWeight: 300, fontSize: "1rem", lineHeight: 1.75, margin: 0 }}>
                Whether you are looking to invest or seeking growth capital, Wahl Citadel brings the alignment, discipline, and network to make it happen.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
