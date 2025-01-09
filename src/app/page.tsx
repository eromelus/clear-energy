"use client";

import { useScroll } from "@/contexts/ScrollContext";
import { Hero } from "@/components/hero";
import { SolarServices } from "@/components/solar-services";
import { CleanEnergyStats } from "@/components/clean-energy-stats";
import { ContactForm } from "@/components/contact-form";
import { CleanEnergySolution } from "@/components/clean-energy-solution";
import { SolarDistribution } from "@/components/solar-distribution";
import { SolarProcessCarousel } from "@/components/solar-process-carousel";

export default function Home() {
  const { contactFormRef, scrollToContactForm } = useScroll();

  return (
    <>
      <Hero onButtonClick={scrollToContactForm} />
      <CleanEnergySolution onButtonClick={scrollToContactForm} />
      <SolarServices />
      <SolarDistribution onButtonClick={scrollToContactForm} />
      <SolarProcessCarousel />
      <CleanEnergyStats onButtonClick={scrollToContactForm} />
      <ContactForm ref={contactFormRef} />
    </>
  );
}
