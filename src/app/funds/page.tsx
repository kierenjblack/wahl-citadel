import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import InvestmentCards from "@/components/InvestmentCards";
import BottomCTA from "@/components/BottomCTA";

export const metadata: Metadata = {
  title: "Funds — Wahl Citadel",
  description: "Four investment funds — Fire, Wind, Earth, and Water — each with a distinct mandate and sector focus.",
};

export default function FundsPage() {
  return (
    <main className="">
      <PageHero
        eyebrow="Our Funds"
        heading="Four Mandates. One Conviction."
        subtext="Each fund is structured around a distinct investment thesis and elemental identity. Together they represent Wahl Citadel's philosophy: that patient, focused capital, applied with expertise, produces superior outcomes over time."
      />
      <InvestmentCards />
      <BottomCTA
        heading="Ready to invest?"
        subtext="Speak with our team to learn more about current opportunities and how to get involved."
        secondaryLabel="Meet the Team"
        secondaryHref="/team"
      />
    </main>
  );
}
