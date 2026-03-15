"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Sourcing",
    description:
      "Identifying potential investment opportunities through our extensive network of founders, advisors, and industry contacts. We actively source deals rather than waiting for them to arrive — tracking sectors and businesses months before a formal process begins.",
    detail:
      "Our sourcing edge comes from the operational credibility of our co-founders. When a technology CEO or mining executive reaches out, they are speaking with someone who has been in their seat.",
  },
  {
    number: "02",
    title: "Evaluation",
    description:
      "Thorough evaluation to assess viability, management quality, and return potential. We conduct rigorous commercial, legal, and financial due diligence — with each co-founder contributing their domain expertise to build a complete picture of every opportunity.",
    detail:
      "We stress-test assumptions, interrogate the cap table, and model downside scenarios before we model upside. Our legal co-founder leads transaction structuring to ensure terms protect all stakeholders.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Once conviction is established, Wahl Citadel determines the optimal deal structure and deploys capital efficiently. We manage the transaction end-to-end — from term sheet negotiation to completion — removing friction for the business and its founders.",
    detail:
      "Post-close, we remain active partners. Whether through board representation, strategic introductions, or hands-on operational support, our involvement does not end at settlement.",
  },
];

export default function ProcessFull() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ backgroundColor: "#fffef2", padding: "96px 0" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 40px" }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "72px" }}
        >
          <p style={{ color: "#fcb835", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" }}>
            How we work
          </p>
          <h2 style={{ fontFamily: "var(--font-season)", fontSize: "clamp(2rem, 4vw, 48px)", color: "#292929", lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: "20px" }}>
            A rigorous investment process
          </h2>
          <p style={{ color: "#292929", opacity: 0.6, fontWeight: 300, fontSize: "1rem", lineHeight: 1.75, margin: 0, maxWidth: "560px" }}>
            Every investment follows the same three-stage discipline — refined through decades of deal experience. It is what allows us to move quickly when conviction is high and hold back when it is not.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{ borderTop: "1px solid rgba(41,41,41,0.1)" }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="process-step"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
            >
              {/* Step number */}
              <div>
                <span style={{
                  fontFamily: "var(--font-public-sans)",
                  fontSize: "0.7rem", fontWeight: 600,
                  color: "#fcb835", letterSpacing: "0.1em",
                }}>
                  {step.number}
                </span>
              </div>

              {/* Title + description */}
              <div>
                <h3 style={{ fontFamily: "var(--font-season)", fontSize: "1.5rem", color: "#292929", marginBottom: "14px", fontWeight: 400 }}>
                  {step.title}
                </h3>
                <p style={{ color: "#292929", opacity: 0.65, fontWeight: 300, fontSize: "0.9rem", lineHeight: 1.75, margin: 0 }}>
                  {step.description}
                </p>
              </div>

              {/* Detail note */}
              <div style={{ borderLeft: "1px solid rgba(41,41,41,0.1)", paddingLeft: "32px" }}>
                <p style={{ color: "#292929", opacity: 0.45, fontWeight: 300, fontSize: "0.85rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
