import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
