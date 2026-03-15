"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const quote = {
  fund: "Wind Fund",
  name: "Rob Tindall",
  role: "Director, LKI",
  company: "Silicon Resources Australia",
  paragraphs: [
    "I am pleased to commend Wahl Citadel for the outstanding partnership we experienced during a crucial phase of our business at Silicon Resources Australia. From the beginning, the Wahl Citadel team demonstrated skillful professionalism, providing strategic insights and transparent communication that greatly contributed to the success of our collaboration.",
    "Their commitment to growth, coupled with their expertise, resulted in tailored solutions to infuse the required capital into our business, making Mark, Jason, Stephen, and James invaluable and trusted partners in our journey.",
    "I wholeheartedly recommend the Wahl team to any business seeking a capital partner for a strategic alliance in growth. Their dedication to excellence and genuine interest in our success set them apart — making our experience not only financially rewarding but marked by trust, collaboration, and a shared commitment to long-term success.",
  ],
};

const stats = [
  { value: "100%", label: "Partner Retention" },
  { value: "4", label: "Active Fund Mandates" },
  { value: "3+", label: "Portfolio Companies" },
  { value: "L30", label: "Rialto, Melbourne" },
];

export default function ReviewsFull() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });
  const closingRef = useRef(null);
  const closingInView = useInView(closingRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* Featured testimonial */}
      <section ref={ref} style={{ backgroundColor: "#fffef2", padding: "96px 0" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 40px" }}>
          <motion.div
            className="grid-split"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Left: attribution */}
            <div>
              <div style={{
                display: "inline-block",
                border: "1px solid rgba(41,41,41,0.2)",
                borderRadius: "40px",
                padding: "4px 14px",
                fontSize: "0.7rem",
                fontWeight: 500,
                color: "#292929",
                marginBottom: "28px",
              }}>
                {quote.fund}
              </div>
              <p style={{ fontFamily: "var(--font-season)", fontSize: "1.1rem", color: "#292929", marginBottom: "4px", fontWeight: 400 }}>
                {quote.name}
              </p>
              <p style={{ color: "#292929", opacity: 0.55, fontSize: "0.8rem", fontWeight: 300, marginBottom: "2px" }}>
                {quote.role}
              </p>
              <p style={{ color: "#292929", opacity: 0.4, fontSize: "0.8rem", fontWeight: 300, margin: 0 }}>
                {quote.company}
              </p>
            </div>

            {/* Right: quote */}
            <div>
              <div style={{ fontFamily: "var(--font-season)", fontSize: "5rem", color: "#fcb835", lineHeight: 0.8, marginBottom: "20px" }}>
                &ldquo;
              </div>
              {quote.paragraphs.map((para, i) => (
                <p key={i} style={{
                  color: "#292929", opacity: 0.75, fontWeight: 300,
                  fontSize: "1rem", lineHeight: 1.8,
                  margin: i > 0 ? "18px 0 0 0" : "0",
                }}>
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section ref={statsRef} style={{ backgroundColor: "#292929", padding: "64px 0" }}>
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
                <p style={{ fontFamily: "var(--font-season)", fontSize: "clamp(2rem, 4vw, 48px)", color: "#fffef2", lineHeight: 1, marginBottom: "8px" }}>
                  {stat.value}
                </p>
                <p style={{ color: "#fffef2", opacity: 0.4, fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.08em", textTransform: "uppercase", margin: 0 }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing — partner commitment section */}
      <section ref={closingRef} style={{ backgroundColor: "#f2f1ec", padding: "96px 0" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 40px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={closingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ marginBottom: "64px" }}
          >
            <p style={{ color: "#fcb835", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" }}>
              Partner experiences
            </p>
            <h2 style={{ fontFamily: "var(--font-season)", fontSize: "clamp(1.8rem, 3.5vw, 42px)", color: "#292929", lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: "20px" }}>
              Building lasting partnerships
            </h2>
            <p style={{ color: "#292929", opacity: 0.6, fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.75, margin: 0, maxWidth: "560px" }}>
              We measure our success not by returns alone, but by the quality of relationships we build. Every engagement is built on transparency, aligned incentives, and a shared commitment to long-term outcomes.
            </p>
          </motion.div>

          {/* Placeholder cards */}
          <div className="investment-grid">
            {[1, 2, 3].map((n) => (
              <div key={n} style={{
                backgroundColor: "#fffef2",
                borderRadius: "12px",
                padding: "48px 32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                minHeight: "180px",
              }}>
                <div style={{ width: "32px", height: "1px", backgroundColor: "rgba(41,41,41,0.15)" }} />
                <p style={{ color: "#292929", opacity: 0.2, fontSize: "0.75rem", fontWeight: 300, textAlign: "center", margin: 0 }}>
                  Review coming soon
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
