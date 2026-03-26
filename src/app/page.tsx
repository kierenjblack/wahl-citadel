import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import FundsCTA from "@/components/FundsCTA";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import BottomCTA from "@/components/BottomCTA";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Process />
      <FundsCTA />
      <Team />
      <Testimonial />
      <BottomCTA />
    </main>
  );
}
