import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ReviewsFull from "@/components/ReviewsFull";
import BottomCTA from "@/components/BottomCTA";

export const metadata: Metadata = {
  title: "Reviews — Wahl Citadel",
  description: "What our partners say about working with Wahl Citadel.",
};

export default function ReviewsPage() {
  return (
    <main className="">
      <PageHero
        eyebrow="Partner Reviews"
        heading="What Our Partners Say"
        subtext="We measure our success by the outcomes of the businesses we back. These are the words of the founders, directors, and executives who have partnered with Wahl Citadel."
      />
      <ReviewsFull />
      <BottomCTA
        heading="Join our growing list of partners"
        subtext="Find out how Wahl Citadel can help you achieve your investment goals."
      />
    </main>
  );
}
