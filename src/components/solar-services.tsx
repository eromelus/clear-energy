"use client";

import { ArrowRight } from "lucide-react";

export function SolarServices() {
  return (
    <div className="bg-[#002b3d] text-white">
      <div className="max-w-6xl mx-auto p-4 md:p-8 lg:p-12">
        <div className="lg:flex lg:gap-16 xl:gap-24">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h2 className="text-amber-500 font-semibold mb-3 text-sm">
              SAFE, EFFICIENT, SUSTAINABLE
            </h2>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Expert Solar Decommissioning Services for a Greener Future
            </h1>
            <div className="space-y-4 text-sm md:text-base md:w-1/2 lg:w-full">
              <p>
                Our expert team specializes in solar decommissioning services
                that are both efficient and sustainable.
              </p>
              <p>
                We follow industry best practices to safely dismantle and remove
                solar systems, minimizing waste and environmental impact.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 lg:pl-8">
            <div className="space-y-6">
              {[
                "Solar Decommissioning Services",
                "Efficient and Sustainable Solar Panel Disposal",
                {
                  text: "Our team handles the safe removal and proper disposal of solar panels, adhering to environmental regulations.",
                  isDescription: true,
                },
                "Replacement OEM Solar Panels",
                "Distributing Solar Panels on the Buy and Sell Side",
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-3 ${
                    typeof item === "object" && item.isDescription
                      ? "text-xs pl-8"
                      : ""
                  }`}
                >
                  {typeof item === "string" && (
                    <ArrowRight className="text-blue-400 flex-shrink-0 w-6 h-6" />
                  )}
                  <span
                    className={
                      typeof item === "string"
                        ? "text-lg md:text-xl lg:text-2xl font-light leading-tight"
                        : "text-xs"
                    }
                  >
                    {typeof item === "string" ? item : item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
