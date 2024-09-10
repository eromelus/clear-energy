import Image from "next/image";
import { Hero } from "@/components/hero";
import { SolarServices } from "@/components/solar-services";
import { CleanEnergyStats } from "@/components/clean-energy-stats";

export default function Home() {
  return (
    <>
      <Hero />
      <SolarServices />
      <CleanEnergyStats />
    </>
  );
}
