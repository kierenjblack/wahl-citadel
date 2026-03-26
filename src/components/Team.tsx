"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

type TeamMember = { name: string; title: string; photo: string; points: string[]; linkedin: string; objectPosition?: string; photoScale?: number; };
const team: TeamMember[] = [
  {
    name: "Jason Nagy",
    title: "Co-founder",
    photo: "/images/jason-nagy.jpg",
    points: [
      "20 years of experience in technology",
      "5 years of experience in health sector roll-ups",
      "Successfully commercialised IT ventures with profitable exits",
    ],
    linkedin: "https://linkedin.com",
  },
  {
    name: "Stephen Sedgman",
    title: "Co-founder",
    photo: "/images/stephen-sedgman.jpg",
    photoScale: 1.4,
    points: [
      "Founder/owner of top-performing asset management businesses, including Pilgrim Private",
      "Substantial client base of High Net Worth accounts",
      "Demonstrated success in substantial wealth creation",
    ],
    linkedin: "https://linkedin.com",
  },
  {
    name: "James Dickson",
    title: "Co-founder",
    photo: "/images/james-dickson.jpg",
    points: [
      "Skilled in negotiating and documenting transactions",
      "Ensures the successful completion of transactions",
      "Proficient in corporate structuring and governance",
    ],
    linkedin: "https://linkedin.com",
  },
  {
    name: "Mark Pitcher",
    title: "Co-founder",
    photo: "/images/mark-pitcher.png",
    points: [
      "Executive Chair of Clevertar, overseeing strategic direction and governance",
      "Broad leadership background across multiple industries",
      "Experience in high-tech industrials, software retail, and health and care",
    ],
    linkedin: "https://linkedin.com",
  },
];

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [flipped, setFlipped] = useState<boolean[]>(Array(team.length).fill(false));
  const toggleFlip = (i: number) => setFlipped(prev => prev.map((v, idx) => idx === i ? !v : v));

  return (
    <section
      id="team"
      ref={ref}
      className="bg-cream-secondary py-24"
    >
      <div className="mx-auto max-w-[1152px] px-5 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-season text-[clamp(2rem,4vw,52px)] text-dark leading-[1.1] tracking-[-0.01em] mb-16"
        >
          Our team
        </motion.h2>

        <div className="grid-4col">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="[transform-style:preserve-3d]"
            >
              <div
                className={`team-card-wrap${flipped[i] ? " flipped" : ""} aspect-[3/4]`}
                onClick={() => toggleFlip(i)}
              >
                <div className="team-card-inner">

                  {/* Front -- photo only */}
                  <div className="team-card-front">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover grayscale"
                      style={{ objectPosition: member.objectPosition ?? "top center", transform: member.photoScale ? `scale(${member.photoScale})` : undefined }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="team-card-hint">
                      <span className="icon text-sm">touch_app</span>
                      Tap to learn more
                    </div>
                  </div>

                  {/* Back -- info */}
                  <div className="team-card-back">
                    <p className="font-season text-base text-dark mb-0.5 font-normal">
                      {member.name}
                    </p>
                    <p className="text-gold text-xs font-medium mb-4">
                      {member.title}
                    </p>

                    <ul className="list-none p-0 mt-0 mx-0 mb-auto flex flex-col gap-2">
                      {member.points.map((point, j) => (
                        <li key={j} className="flex gap-2 items-start">
                          <span className="size-1 rounded-full bg-gold shrink-0 mt-[7px]" />
                          <span className="text-dark/65 text-xs font-light leading-normal">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-dark text-xs font-medium no-underline opacity-70 mt-4"
                    >
                      <LinkedInIcon />
                      LinkedIn
                    </a>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
