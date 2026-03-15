"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const funds = [
  {
    name: "Fire Fund",
    tag: "Technology",
    body: "Ignite your investments with the Fire Fund, where innovation meets cutting-edge technology. Fueled by high-tech opportunities and a passion for transformative growth, this fund sparks the future.",
    strategy: "The Fire Fund invests in groundbreaking tech companies and disruptive startups, illuminating the future with today's innovations.",
  },
  {
    name: "Wind Fund",
    tag: "Dynamic",
    body: "Influential Fund, where change meets innovation, grounded in stability and flowing with liquidity. Embrace the dynamic spirit of our Wind Fund, navigating the landscape with agility and adaptability.",
    strategy: "Our Wind Fund embraces the dynamic nature of industries, capturing the energy of innovation and adapting swiftly to market dynamics.",
  },
  {
    name: "Earth Fund",
    tag: "Mining",
    body: "Explore prosperity with our Earth Fund. Rooted in mining and resources, it offers a stable foundation for long-term growth and resilient investments.",
    strategy: "The Earth Fund focuses on industry bedrock, especially mining and resources. Our investments, like ore, yield enduring value when carefully refined.",
  },
  {
    name: "Water Fund",
    tag: "Liquidity",
    body: "Flow with opportunity in the Liquidity Fund. Navigating the dynamic financial landscape, it offers liquidity and adaptability for a smooth investor journey.",
    strategy: "The Water Fund flows with liquidity and adaptability, navigating market currents and seizing opportunities. Dive into a fluid investment experience that moves with economic tides.",
  },
];

export default function Funds() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="our-funds"
      ref={ref}
      style={{ backgroundColor: "#292929", padding: "96px 0" }}
    >
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 40px" }}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            color: "#fcb835",
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          Our offerings
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08 }}
          style={{
            fontFamily: "var(--font-season)",
            fontSize: "clamp(2rem, 4vw, 52px)",
            color: "#fffef2",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            marginBottom: "64px",
          }}
        >
          Funds
        </motion.h2>

        <div className="grid-funds">
          {funds.map((fund, i) => (
            <motion.div
              key={fund.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 + i * 0.08 }}
              style={{
                backgroundColor: "#fffef2",
                padding: "48px",
              }}
            >
              <p
                style={{
                  color: "#fcb835",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                {fund.tag}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-season)",
                  fontSize: "1.5rem",
                  color: "#292929",
                  marginBottom: "20px",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                }}
              >
                {fund.name}
              </h3>
              <p
                style={{
                  color: "#292929",
                  opacity: 0.75,
                  fontWeight: 300,
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                }}
              >
                {fund.body}
              </p>
              <div style={{ borderTop: "1px solid rgba(41,41,41,0.1)", paddingTop: "20px" }}>
                <p style={{ color: "#292929", opacity: 0.45, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
                  Investment Strategy
                </p>
                <p style={{ color: "#292929", opacity: 0.6, fontWeight: 300, fontSize: "0.85rem", lineHeight: 1.65, margin: 0 }}>
                  {fund.strategy}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
