"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Sourcing",
    description:
      "Identifying potential investment opportunities through our extensive network of founders, advisors, and industry contacts. We actively source deals rather than waiting for them to arrive, tracking sectors and businesses months before a formal process begins.",
    detail:
      "Our sourcing edge comes from the operational credibility of our co-founders. When a technology CEO or mining executive reaches out, they are speaking with someone who has been in their seat.",
  },
  {
    number: "02",
    title: "Evaluation",
    description:
      "Thorough evaluation to assess viability, management quality, and return potential. We conduct rigorous commercial, legal, and financial due diligence, with each co-founder contributing their domain expertise to build a complete picture of every opportunity.",
    detail:
      "We stress-test assumptions, interrogate the cap table, and model downside scenarios before we model upside. Our legal co-founder leads transaction structuring to ensure terms protect all stakeholders.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Once conviction is established, Wahl Citadel determines the optimal deal structure and deploys capital efficiently. We manage the transaction end-to-end, from term sheet negotiation to completion, removing friction for the business and its founders.",
    detail:
      "Post-close, we remain active partners. Whether through board representation, strategic introductions, or hands-on operational support, our involvement does not end at settlement.",
  },
];

export default function ProcessFull() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-cream py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-10">

        {/* Section header */}
        <div className="mb-[72px]">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gold text-xs font-medium tracking-[0.12em] uppercase mb-4"
          >
            How we work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-season text-[clamp(2rem,4vw,48px)] text-dark leading-[1.1] tracking-tight mb-5"
          >
            A rigorous investment process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="text-dark/60 font-light text-base leading-[1.75] max-w-[560px]"
          >
            Every investment follows the same three-stage discipline, refined through decades of deal experience. It is what allows us to move quickly when conviction is high and hold back when it is not.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="border-t border-dark/10">
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
                <span className="font-[family-name:var(--font-public-sans)] text-[0.7rem] font-semibold text-gold tracking-[0.1em]">
                  {step.number}
                </span>
              </div>

              {/* Title + description */}
              <div>
                <h3 className="font-season text-2xl text-dark mb-3.5 font-normal">
                  {step.title}
                </h3>
                <p className="text-dark/65 font-light text-[0.9rem] leading-[1.75]">
                  {step.description}
                </p>
              </div>

              {/* Detail note */}
              <div className="border-l border-dark/10 pl-8">
                <p className="text-dark/45 font-light text-[0.85rem] leading-[1.7] italic">
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
