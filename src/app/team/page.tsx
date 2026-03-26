import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TeamFull from "@/components/TeamFull";
import BottomCTA from "@/components/BottomCTA";

export const metadata: Metadata = {
  title: "Team — Wahl Citadel",
  description: "Four co-founders combining technology, asset management, law, and industrial leadership to cover every phase of the investment lifecycle.",
};

export default function TeamPage() {
  return (
    <main className="">
      <PageHero
        eyebrow="The Team"
        heading="Built to Execute"
        subtext="Wahl Citadel's co-founding team combines four disciplines rarely assembled in a single firm: technology operations, wealth management, corporate law, and industrial leadership, covering every phase of the investment lifecycle in-house."
      />
      <TeamFull />
      <BottomCTA
        heading="Work with our team"
        subtext="Get in touch to discuss how Wahl Citadel can support your next phase of growth."
        secondaryLabel="View Our Process"
        secondaryHref="/about"
      />
    </main>
  );
}
