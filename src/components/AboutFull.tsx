"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    title: "Strategy",
    description:
      "We approach every investment with a disciplined framework — identifying asymmetric opportunities where capital, expertise, and timing converge. Our team's extensive network enables us to empower businesses to secure the funding they need.",
  },
  {
    title: "Experience",
    description:
      "With decades of combined experience across technology, law, asset management, and industrial leadership, Wahl Citadel has developed a pattern recognition that few firms can match. We have been on the operator side — giving us the full picture.",
  },
  {
    title: "Knowledge",
    description:
      "We offer four distinct funds, each representing an element of nature and tailored to specific investment objectives. This lets us apply the right capital instrument to each opportunity without compromise.",
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
              We are not passive capital. We bring legal, financial, operational, and technological expertise directly to every investment — working alongside management teams as genuine partners in the growth of their business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.12 }}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <p style={{ color: "#fffef2", opacity: 0.75, fontWeight: 300, fontSize: "1rem", lineHeight: 1.8, margin: 0 }}>
                Our four elemental funds — Fire, Wind, Earth, and Water — are each structured around a distinct mandate, ensuring the character of the capital matches the character of the opportunity.
              </p>
              <p style={{ color: "#fffef2", opacity: 0.75, fontWeight: 300, fontSize: "1rem", lineHeight: 1.8, margin: 0 }}>
                Based at Level 30, Rialto Building, we operate from the heart of Melbourne&apos;s financial district with a national mandate and a long-term view.
              </p>
            </motion.div>
          </div>

          {/* Divider */}
          <div style={{ height: "1px", backgroundColor: "rgba(255,254,242,0.08)", marginBottom: "56px" }} />

          {/* 3 pillars */}
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
              Patient capital. Meaningful returns.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "640px" }}>
              <p style={{ color: "#292929", opacity: 0.75, fontWeight: 300, fontSize: "1rem", lineHeight: 1.75, margin: 0 }}>
                We believe the best investment outcomes come from deep alignment between the capital provider and the business operator. That is why we structure every engagement with clarity on roles, expectations, and exit horizons before a single dollar is deployed.
              </p>
              <p style={{ color: "#292929", opacity: 0.75, fontWeight: 300, fontSize: "1rem", lineHeight: 1.75, margin: 0 }}>
                We are disciplined about sectors where we have genuine insight — technology, mining and resources, healthcare roll-ups, and dynamic growth businesses. Within these sectors, our co-founders have built, managed, listed, and exited companies. That operating experience is what differentiates us.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
