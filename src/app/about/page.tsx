import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AboutFull from "@/components/AboutFull";
import ProcessFull from "@/components/ProcessFull";
import BottomCTA from "@/components/BottomCTA";

export const metadata: Metadata = {
  title: "About — Wahl Citadel",
  description: "Melbourne-based private equity and growth funding firm operating at the intersection of strategic capital allocation and deep sector expertise.",
};

export default function AboutPage() {
  return (
    <main className="">
      <PageHero
        eyebrow="About Wahl Citadel"
        heading="Turn Ambition Into Wealth"
        subtext="The founders of Wahl Citadel came together to develop and offer a new class of investing. Precision Equity was born. They agreed on principles that would guide strategy, ensure capital meets precision, risk meets reward and ambition transforms into wealth."
      />
      <AboutFull />
      <ProcessFull />
      <BottomCTA
        heading="Interested in partnering with us?"
        subtext="Learn more about our team, our process, and how we can help your business grow."
        secondaryLabel="Meet the Team"
        secondaryHref="/team"
      />
    </main>
  );
}
