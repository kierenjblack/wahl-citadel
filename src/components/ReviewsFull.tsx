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
    "I wholeheartedly recommend the Wahl team to any business seeking a capital partner for a strategic alliance in growth. Their dedication to excellence and genuine interest in our success set them apart, making our experience not only financially rewarding but marked by trust, collaboration, and a shared commitment to long-term success.",
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
      <section ref={ref} className="bg-cream py-28">
        <div className="mx-auto max-w-[1152px] px-5 md:px-10">
          <motion.div
            className="grid-split"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Left: attribution */}
            <div>
              <p className="mb-1 font-season text-[1.1rem] font-normal text-dark">
                {quote.name}
              </p>
              <p className="mb-0.5 text-[0.8rem] font-light text-dark opacity-55">
                {quote.role}
              </p>
              <p className="m-0 text-[0.8rem] font-light text-dark opacity-40">
                {quote.company}
              </p>
            </div>

            {/* Right: quote */}
            <div>
              <div className="mb-5 font-season text-[3rem] sm:text-[4rem] md:text-[5rem] leading-[0.8] text-gold">
                &ldquo;
              </div>
              {quote.paragraphs.map((para, i) => (
                <p key={i} className={`text-base font-light leading-[1.8] text-dark opacity-75 ${i > 0 ? "mt-[18px]" : "m-0"}`}>
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section ref={statsRef} className="bg-dark py-16">
        <div className="mx-auto max-w-[1152px] px-5 md:px-10">
          <div className="grid-stats">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center"
              >
                <p
                  className="mb-2 font-season leading-none text-cream"
                  style={{ fontSize: "clamp(2rem, 4vw, 48px)" }}
                >
                  {stat.value}
                </p>
                <p className="m-0 text-xs font-normal uppercase tracking-[0.08em] text-cream opacity-40">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing — partner commitment section */}
      <section ref={closingRef} className="bg-dark py-24">
        <div className="mx-auto max-w-[1152px] px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={closingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.12em] text-gold">
              Partner experiences
            </p>
            <h2
              className="mb-5 font-season leading-[1.1] tracking-[-0.01em] text-cream"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 42px)" }}
            >
              Building lasting partnerships
            </h2>
            <p className="m-0 max-w-[560px] text-[0.95rem] font-light leading-[1.75] text-cream/60">
              We measure our success not by returns alone, but by the quality of relationships we build. Every engagement is built on transparency, aligned incentives, and a shared commitment to long-term outcomes.
            </p>
          </motion.div>

          {/* Placeholder cards */}
          <div className="investment-grid">
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex min-h-[180px] flex-col items-center justify-center gap-4 rounded-xl border border-cream/10 bg-cream/[0.05] px-8 py-12">
                <div className="h-px w-8 bg-cream/15" />
                <p className="m-0 text-center text-xs font-light text-cream/25">
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
