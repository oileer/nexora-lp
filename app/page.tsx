import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgressRail } from "@/components/motion";
import {
  Hero,
  Marquee,
  Problem,
  Segments,
  Differential,
  HowItWorks,
  Cases,
  DashboardShowcase,
  Audience,
  ContactCTA,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgressRail />
      <Navbar />
      <Hero />
      <Marquee />
      <Problem />
      <Segments />
      <Differential />
      <HowItWorks />
      <Cases />
      <DashboardShowcase />
      <Audience />
      <ContactCTA />
      <Footer />
    </main>
  );
}
