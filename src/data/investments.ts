export type InvestmentStatus = "green" | "amber" | "red";
export type FundKey = "earth" | "wind" | "fire" | "water";

export interface Investment {
  id: string;
  company: string;
  fund: string;
  fundKey: FundKey;
  status: InvestmentStatus;
  description: string[];
  cta?: { label: string; href: string };
}

export const investments: Investment[] = [
  {
    id: "sra",
    company: "Silica Resources Australia",
    fund: "Earth Fund",
    fundKey: "earth",
    status: "amber",
    description: [
      "Silica Resources Australia (SRA) commercially mines, processes and sells high purity silica sand.",
      "It is the owner of the Mourilyan Silica Sands Project, which aims to position Australia as a major exporter of silica flour to the Asia-Pacific region, including Japan and the US.",
      "The project has created local jobs and enhanced infrastructure while preserving the environment.",
    ],
  },
  {
    id: "montem",
    company: "Montem",
    fund: "Water Fund",
    fundKey: "water",
    status: "red",
    description: [
      "Montem is a litigation investment fund. Montem has a claim for damages against the government of Alberta, Canada to recover damages arising from the constructive taking of Montem's freehold mineral rights and coal leases.",
      "Montem has also brought claims for damages in private nuisance and unjust enrichment. A summary of the litigation is available upon request.",
      "As a result, Montem has made a claim for damages against Alberta for constructive taking in the amount of approximately $1.76 billion or, in the alternative, damages caused by Alberta's private nuisance and to recover the extent of Alberta's unjust enrichment.",
      "The trial has been set for mid 2025.",
    ],
  },
  {
    id: "avp",
    company: "AVP",
    fund: "Water Fund",
    fundKey: "water",
    status: "amber",
    description: [
      "The AVP fund has all the attributes of Wahl Citadel's approach to asymmetric risk with aspirational upside. The creative JV partnership with the land developer shields from time based risk erosion commonly associated with commercial property development.",
      "Distinctive project advantages leveraging the explosive growth of Adelaide's Outer North, AVP (Angle Vale Park) is set for success.",
      "Learn more by watching this short video.",
    ],
    cta: { label: "Learn More", href: "/contact" },
  },
];

export const statusConfig: Record<InvestmentStatus, { color: string; label: string }> = {
  green: { color: "#22c55e", label: "Initial Capital Raise Open" },
  amber: { color: "#f59e0b", label: "Second and Subsequent Rounds in Progress" },
  red:   { color: "#ef4444", label: "Investment Opportunity Closed — Fully Subscribed" },
};
