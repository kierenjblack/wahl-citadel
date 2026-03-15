import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ReviewsFull from "@/components/ReviewsFull";

export const metadata: Metadata = {
  title: "Reviews — Wahl Citadel",
  description: "What our partners say about working with Wahl Citadel.",
};

export default function ReviewsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Partner Reviews"
        heading="What Our Partners Say"
        subtext="We measure our success by the outcomes of the businesses we back. These are the words of the founders, directors, and executives who have partnered with Wahl Citadel."
      />
      <ReviewsFull />
    </main>
  );
}
