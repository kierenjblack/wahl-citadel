import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import InvestmentCards from "@/components/InvestmentCards";

export const metadata: Metadata = {
  title: "Funds — Wahl Citadel",
  description: "Four investment funds — Fire, Wind, Earth, and Water — each with a distinct mandate and sector focus.",
};

export default function FundsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Funds"
        heading="Four Mandates. One Conviction."
        subtext="Each fund is structured around a distinct investment thesis and elemental identity. Together they represent Wahl Citadel's philosophy: that patient, focused capital — applied with expertise — produces superior outcomes over time."
      />
      <InvestmentCards />
    </main>
  );
}
