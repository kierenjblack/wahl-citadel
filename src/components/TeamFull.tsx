"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

type TeamMember = { name: string; title: string; discipline: string; photo: string; bio: string; points: string[]; linkedin: string; objectPosition?: string; photoScale?: number; };
const team: TeamMember[] = [
  {
    name: "Jason Nagy",
    title: "Co-founder",
    discipline: "Technology & Operations",
    photo: "/images/jason-nagy.jpg",
    bio: "Jason brings over two decades of hands-on technology leadership to Wahl Citadel. His experience spans building and commercialising IT ventures, leading health sector roll-ups, and delivering profitable exits.",
    points: [
      "20+ years of technology leadership",
      "5 years in health sector roll-ups",
      "Successfully commercialised IT ventures with profitable exits",
      "Deep expertise in enterprise technology and SaaS growth",
    ],
    linkedin: "https://linkedin.com",
  },
  {
    name: "Stephen Sedgman",
    title: "Co-founder",
    discipline: "Wealth & Asset Management",
    photo: "/images/stephen-sedgman.jpg",
    photoScale: 1.4,
    bio: "Stephen is the founder of Pilgrim Private, one of Australia's top-performing boutique asset management businesses. He has built a substantial base of High Net Worth clients across multiple market cycles.",
    points: [
      "Founder and owner of Pilgrim Private",
      "Substantial High Net Worth client base",
      "Demonstrated success in wealth creation",
      "Multi-cycle portfolio construction expertise",
    ],
    linkedin: "https://linkedin.com",
  },
  {
    name: "James Dickson",
    title: "Co-founder",
    discipline: "Corporate Law & Structuring",
    photo: "/images/james-dickson.jpg",
    bio: "James is the legal cornerstone of Wahl Citadel. His expertise in corporate structuring and governance means every investment is engineered correctly from day one — protecting investors and aligning incentives.",
    points: [
      "Skilled in negotiating complex transactions",
      "Ensures successful completion of deals",
      "Proficient in corporate structuring and governance",
      "Expertise in private equity and M&A law",
    ],
    linkedin: "https://linkedin.com",
  },
  {
    name: "Mark Pitcher",
    title: "Co-founder",
    discipline: "Industrial Leadership",
    photo: "/images/mark-pitcher.png",
    bio: "Mark is an accomplished executive with leadership across high-tech industrials, software, retail, and health and care. As Executive Chair of Clevertar, he brings a founder-operator perspective to every investment.",
    points: [
      "Executive Chair of Clevertar — AI-led aged care tech",
      "Broad leadership across multiple industries",
      "Experience in high-tech industrials and healthcare",
      "Deep expertise in board governance",
    ],
    linkedin: "https://linkedin.com",
  },
];

const disciplines = [
  { label: "Technology Operations", desc: "Building and scaling technology businesses with a focus on commercialisation and exit." },
  { label: "Wealth Management", desc: "Stewardship of capital for High Net Worth clients across multiple market cycles." },
  { label: "Corporate Law", desc: "Transaction structuring, governance, and legal completion for complex deals." },
  { label: "Industrial Leadership", desc: "Board governance and executive leadership across industrials, health, and technology." },
];

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function TeamFull() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [flipped, setFlipped] = useState<boolean[]>(Array(team.length).fill(false));
  const toggleFlip = (i: number) => setFlipped(prev => prev.map((v, idx) => idx === i ? !v : v));
  const disciplineRef = useRef(null);
  const disciplineInView = useInView(disciplineRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* Team cards */}
      <section ref={ref} style={{ backgroundColor: "#f2f1ec", padding: "80px 0 96px" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 40px" }}>
          <div className="grid-2col">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className={`team-card-wrap${flipped[i] ? " flipped" : ""}`}
                  style={{ aspectRatio: "3 / 4" }}
                  onClick={() => toggleFlip(i)}
                >
                <div className="team-card-inner">

                  {/* Front — photo only */}
                  <div className="team-card-front">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      style={{ objectFit: "cover", objectPosition: member.objectPosition ?? "top center", filter: "grayscale(100%)", transform: member.photoScale ? `scale(${member.photoScale})` : undefined }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="team-card-hint">
                      <span className="icon" style={{ fontSize: "14px" }}>touch_app</span>
                      Tap to learn more
                    </div>
                  </div>

                  {/* Back — bio details */}
                  <div className="team-card-back">
                    <p style={{ color: "#fcb835", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "10px" }}>
                      {member.discipline}
                    </p>
                    <p style={{ fontFamily: "var(--font-season)", fontSize: "1.1rem", color: "#292929", marginBottom: "2px", fontWeight: 400 }}>
                      {member.name}
                    </p>
                    <p style={{ color: "#292929", opacity: 0.4, fontSize: "0.75rem", fontWeight: 300, marginBottom: "14px" }}>
                      {member.title}
                    </p>

                    <p style={{ color: "#292929", opacity: 0.6, fontSize: "0.78rem", fontWeight: 300, lineHeight: 1.65, marginBottom: "14px" }}>
                      {member.bio}
                    </p>

                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 auto 0", display: "flex", flexDirection: "column", gap: "7px" }}>
                      {member.points.map((point, j) => (
                        <li key={j} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                          <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#fcb835", flexShrink: 0, marginTop: "7px" }} />
                          <span style={{ color: "#292929", opacity: 0.6, fontSize: "0.75rem", fontWeight: 300, lineHeight: 1.5 }}>
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: "6px", color: "#292929", fontSize: "0.75rem", fontWeight: 500, textDecoration: "none", opacity: 0.6, marginTop: "16px" }}
                    >
                      <LinkedInIcon />
                      LinkedIn
                    </a>
                  </div>

                </div>{/* team-card-inner */}
                </div>{/* team-card-wrap */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Four disciplines */}
      <section ref={disciplineRef} style={{ backgroundColor: "#292929", padding: "96px 0" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 40px" }}>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={disciplineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ marginBottom: "56px" }}
          >
            <p style={{ color: "#fcb835", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" }}>
              Our disciplines
            </p>
            <h2 style={{ fontFamily: "var(--font-season)", fontSize: "clamp(1.8rem, 3.5vw, 42px)", color: "#fffef2", lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: "20px" }}>
              Four disciplines. One firm.
            </h2>
            <p style={{ color: "#fffef2", opacity: 0.55, fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.75, margin: 0, maxWidth: "560px" }}>
              Wahl Citadel&apos;s co-founding team is built deliberately — covering every phase of the investment lifecycle in-house, without external advisors replacing internal conviction.
            </p>
          </motion.div>

          <div className="grid-4col">
            {disciplines.map((d, i) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, y: 20 }}
                animate={disciplineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                style={{
                  padding: "40px 32px 40px 0",
                  borderLeft: i > 0 ? "1px solid rgba(255,254,242,0.08)" : "none",
                  paddingLeft: i > 0 ? "32px" : "0",
                }}
              >
                <div style={{ height: "2px", width: "28px", backgroundColor: "#fcb835", marginBottom: "20px" }} />
                <h3 style={{ fontFamily: "var(--font-season)", fontSize: "1.05rem", color: "#fffef2", fontWeight: 400, marginBottom: "10px" }}>
                  {d.label}
                </h3>
                <p style={{ color: "#fffef2", opacity: 0.45, fontSize: "0.82rem", fontWeight: 300, lineHeight: 1.65, margin: 0 }}>
                  {d.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
