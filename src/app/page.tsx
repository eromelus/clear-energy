"use client";

import { useRef } from "react";
import { Hero } from "@/components/hero";
import { SolarServices } from "@/components/solar-services";
import { CleanEnergyStats } from "@/components/clean-energy-stats";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  const contactFormRef = useRef(null);

  const scrollToContactForm = () => {
    contactFormRef.current?.scrollIntoView();
  };

  return (
    <>
      <Hero onButtonClick={scrollToContactForm} />
      <SolarServices />
      <CleanEnergyStats onButtonClick={scrollToContactForm} />
      <ContactForm ref={contactFormRef} />
    </>
  );
}
