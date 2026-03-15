import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AboutFull from "@/components/AboutFull";
import ProcessFull from "@/components/ProcessFull";

export const metadata: Metadata = {
  title: "About — Wahl Citadel",
  description: "Melbourne-based private equity and growth funding firm operating at the intersection of strategic capital allocation and deep sector expertise.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Wahl Citadel"
        heading="Turn Ambition Into Wealth"
        subtext="The founders of Wahl Citadel came together to develop and offer a new class of investing — Precision Equity. Transforming rare opportunities into exceptional returns through strategy, expertise, and relentless execution."
      />
      <AboutFull />
      <ProcessFull />
    </main>
  );
}
