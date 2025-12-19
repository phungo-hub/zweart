import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { ProgramsOverview } from "@/components/sections/ProgramsOverview";
import { OMOMethod } from "@/components/sections/OMOMethod";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <ProgramsOverview />
      <OMOMethod />
      <HowItWorks />
      <Gallery />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
