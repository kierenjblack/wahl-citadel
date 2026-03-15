"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const funds = [
  {
    name: "Fire Fund",
    tag: "Technology · Innovation",
    thesis:
      "Ignite your investments with the Fire Fund, where innovation meets cutting-edge technology. Fueled by high-tech opportunities and a passion for transformative growth, this fund sparks the future.",
    strategy:
      "The Fire Fund invests in groundbreaking tech companies and disruptive startups — from SaaS platforms to deep-tech ventures — illuminating the future with today's innovations. We target businesses with strong IP, recurring revenue models, and clear paths to scale.",
    focus: ["Enterprise Software", "Health Technology", "Deep Tech", "Digital Platforms"],
  },
  {
    name: "Wind Fund",
    tag: "Dynamic · Agility",
    thesis:
      "Influential and adaptive, the Wind Fund is grounded in stability and flowing with liquidity. Embrace the dynamic spirit, navigating the landscape with agility and adaptability across fast-moving sectors.",
    strategy:
      "Our Wind Fund embraces the dynamic nature of growth industries, capturing the energy of innovation and adapting swiftly to market dynamics. We focus on businesses in transition — those repositioning for scale, executing acquisitions, or entering new markets.",
    focus: ["Growth Businesses", "Market Expansion", "Strategic Acquisitions", "Sector Transitions"],
  },
  {
    name: "Earth Fund",
    tag: "Mining · Stability",
    thesis:
      "Explore prosperity with our Earth Fund. Rooted in mining and resources, it offers a stable foundation for long-term growth and resilient investments in real assets with enduring value.",
    strategy:
      "The Earth Fund focuses on industry bedrock — especially mining, resources, and industrial businesses. Our investments, like ore, yield enduring value when carefully refined. We back management teams with proven track records in resource extraction and development.",
    focus: ["Mining & Exploration", "Critical Minerals", "Industrial Operations", "Resource Development"],
  },
  {
    name: "Water Fund",
    tag: "Liquidity · Adaptability",
    thesis:
      "Flow with opportunity in the Water Fund. Navigating the dynamic financial landscape, it offers liquidity and adaptability — designed to move fluidly across opportunity sets without sacrificing discipline.",
    strategy:
      "The Water Fund flows with liquidity and adaptability, navigating market currents and seizing time-sensitive opportunities. Structured for speed of deployment, it provides bridge capital, mezzanine solutions, and flexible structures at critical inflection points.",
    focus: ["Bridge Financing", "Mezzanine Capital", "Distressed Opportunities", "Special Situations"],
  },
];

export default function FundsFull() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ backgroundColor: "#292929", padding: "96px 0" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 40px" }}>

        {/* Intro text beneath PageHero */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ color: "#fffef2", opacity: 0.55, fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.75, maxWidth: "640px", marginBottom: "64px" }}
        >
          Each fund is structured around a distinct investment thesis and elemental identity. Patient, focused capital — applied with expertise — produces superior outcomes over time.
        </motion.p>

        {/* Fund cards — 2-col grid */}
        <div className="grid-funds">
          {funds.map((fund, i) => (
            <motion.div
              key={fund.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              style={{ backgroundColor: "#fffef2", padding: "52px 48px" }}
            >
              <p style={{ color: "#fcb835", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "8px" }}>
                {fund.tag}
              </p>
              <h2 style={{ fontFamily: "var(--font-season)", fontSize: "1.8rem", color: "#292929", marginBottom: "24px", fontWeight: 400, letterSpacing: "-0.01em" }}>
                {fund.name}
              </h2>
              <p style={{ color: "#292929", opacity: 0.75, fontWeight: 300, fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "28px" }}>
                {fund.thesis}
              </p>

              <div style={{ borderTop: "1px solid rgba(41,41,41,0.1)", paddingTop: "24px", marginBottom: "24px" }}>
                <p style={{ color: "#292929", opacity: 0.4, fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px" }}>
                  Investment Strategy
                </p>
                <p style={{ color: "#292929", opacity: 0.65, fontWeight: 300, fontSize: "0.85rem", lineHeight: 1.7, margin: 0 }}>
                  {fund.strategy}
                </p>
              </div>

              <div>
                <p style={{ color: "#292929", opacity: 0.4, fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
                  Focus Areas
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {fund.focus.map((area) => (
                    <span key={area} style={{
                      display: "inline-block",
                      border: "1px solid rgba(41,41,41,0.18)",
                      borderRadius: "40px",
                      padding: "4px 12px",
                      fontSize: "0.72rem",
                      fontWeight: 400,
                      color: "#292929",
                      opacity: 0.7,
                    }}>
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
