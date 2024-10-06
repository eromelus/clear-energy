"use client";

import { Button } from "@/components/ui/button";

export function CleanEnergyStats({
  onButtonClick,
}: {
  onButtonClick: () => void;
}) {
  const stats = [
    { value: "120", label: "Strategic Partnership Formed" },
    { value: "10+", label: "Years of Solar Decommissioning Expertise" },
    { value: "50k", label: "Solar Panels Recycled" },
    { value: "90%", label: "Reduction in Solar Waste to Landfills" },
  ];

  return (
    <div className="bg-white p-6 md:p-8 lg:p-10 max-w-4xl mx-auto">
      <h2 className="text-xs md:text-sm lg:text-base font-bold text-blue mb-2 md:mb-3 lg:mb-4 text-center uppercase tracking-wider">
        Our Commitment to Excellence
      </h2>
      <p className="text-xl md:text-2xl lg:text-3xl text-navy mb-6 md:mb-8 lg:mb-10 text-center font-libre-baskerville font-bold">
        We&#39;re dedicated to providing exceptional clean energy solutions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 md:mb-8 lg:mb-10">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-5xl md:text-6xl lg:text-7xl text-navy mb-2">
              {stat.value}
            </div>
            <div className="text-sm md:text-base lg:text-lg text-navy">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Button
          onClick={onButtonClick}
          className="bg-orange hover:bg-orange-400 text-white font-bold px-6 py-3 rounded-none"
        >
          Get a Quote
        </Button>
      </div>
    </div>
  );
}
