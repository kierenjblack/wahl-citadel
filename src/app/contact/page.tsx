import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — Wahl Citadel",
  description: "Get in touch with the Wahl Citadel team. Level 30, Rialto Building, 525 Collins Street, Melbourne VIC 3000.",
};

export default function ContactPage() {
  return (
    <main className="">
      <PageHero
        eyebrow="Get in Touch"
        heading="Start the Conversation"
        subtext="Whether you are a founder seeking capital, an investor exploring our funds, or a business executive looking to partner, we would like to hear from you. Our team responds to all enquiries promptly."
      />
      <Contact />
    </main>
  );
}
