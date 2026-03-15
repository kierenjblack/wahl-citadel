"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { investments, statusConfig } from "@/data/investments";


export default function FundsCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ backgroundColor: "#292929", padding: "96px 0" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 40px" }}>

        <div className="grid-split">
          {/* Left — headline + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p style={{ color: "#fcb835", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" }}>
              Our funds
            </p>
            <h2 style={{ fontFamily: "var(--font-season)", fontSize: "clamp(2rem, 4vw, 52px)", color: "#fffef2", lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: "28px" }}>
              Current investments.
            </h2>
            <p style={{ color: "#fffef2", opacity: 0.55, fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "40px" }}>
              We deploy capital across mining and resources, litigation finance, and property development — partnering with businesses at critical inflection points. Explore our active portfolio and open opportunities.
            </p>
            <Link href="/funds" className="btn btn-primary">
              View Current Investments
            </Link>
          </motion.div>

          {/* Right — investment tiles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "rgba(255,254,242,0.08)", alignSelf: "center" }}
          >
            {investments.map((inv, i) => {
              const status = statusConfig[inv.status];
              return (
                <motion.div
                  key={inv.id}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                  style={{ backgroundColor: "#292929", padding: "24px 28px", display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: status.color, flexShrink: 0 }} />
                  <div>
                    <p style={{ fontFamily: "var(--font-season)", fontSize: "1.05rem", color: "#fffef2", fontWeight: 400, marginBottom: "2px" }}>
                      {inv.company}
                    </p>
                    <p style={{ color: "#fffef2", opacity: 0.35, fontSize: "0.72rem", fontWeight: 300, margin: 0 }}>
                      {inv.fund}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
