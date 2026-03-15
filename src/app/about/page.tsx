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
        heading="Where Capital Meets Conviction"
        subtext="We are a Melbourne-based private equity and growth funding firm operating at the intersection of strategic capital allocation and deep sector expertise. Since our founding, we have partnered with founders and executives who refuse to settle for ordinary outcomes."
      />
      <AboutFull />
      <ProcessFull />
    </main>
  );
}
