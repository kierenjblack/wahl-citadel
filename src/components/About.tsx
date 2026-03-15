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
      style={{ backgroundColor: "#292929", padding: "96px 0" }}
    >
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 40px" }}>
        {/* Heading + text columns */}
        <div className="grid-2col" style={{ marginBottom: "80px" }}>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{
              fontFamily: "var(--font-season)",
              fontSize: "clamp(2rem, 4vw, 52px)",
              color: "#fffef2",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            Who is Wahl Citadel?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <p style={{ color: "#fffef2", opacity: 0.75, fontWeight: 300, fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
              Wahl Citadel is renowned for attracting investments and fostering
              financial growth, making us the ideal destination for businesses
              looking to expand.
            </p>
            <p style={{ color: "#fffef2", opacity: 0.75, fontWeight: 300, fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
              We offer four distinct funds, each representing elements of nature
              and tailored to specific investment objectives, showcasing our
              commitment to providing diverse and optimal financial growth options.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "rgba(255,254,242,0.08)", marginBottom: "64px" }} />

        {/* 3 pillars */}
        <div className="grid-3col">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
            >
              <div
                style={{
                  width: "32px",
                  height: "2px",
                  backgroundColor: "#fcb835",
                  marginBottom: "20px",
                }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-season)",
                  fontSize: "1.25rem",
                  color: "#fffef2",
                  marginBottom: "12px",
                  fontWeight: 400,
                }}
              >
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
  );
}
