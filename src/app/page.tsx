import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import FundsCTA from "@/components/FundsCTA";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Process />
      <FundsCTA />
      <Team />
      <Testimonial />
    </main>
  );
}
