import Image from "next/image";
import { Hero } from "@/components/hero";
import { SolarServices } from "@/components/solar-services";

export default function Home() {
  return (
    <>
      <Hero />
      <SolarServices />
    </>
  );
}
