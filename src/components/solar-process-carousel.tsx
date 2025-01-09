"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wrench, Heart, Sparkles, CircleDot } from "lucide-react";

export function SolarProcessCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      step: "STEP 1",
      title: "Initial Assessment",
      content: [
        "Our team conducts a thorough on-site inspection of your solar system to assess its size, components, and condition.",
        "We gather necessary information to develop a customized decommissioning plan tailored to your specific needs.",
      ],
      icon: Wrench,
      bgColor: "bg-[#0B1C2C]",
      stepColor: "text-[#0B1C2C]",
    },
    {
      step: "STEP 2",
      title: "Safe Dismantling",
      content: [
        "Our skilled technicians carefully disconnect the solar panels from the grid and remove any necessary safety measures.",
        "We safely dismantle the solar panels, inverters, and other components, ensuring minimal damage to the equipment or surrounding area.",
      ],
      icon: Heart,
      bgColor: "bg-[#F5A742]",
      stepColor: "text-[#F5A742]",
    },
    {
      step: "STEP 3",
      title: "Material Recycling",
      content: [
        "Our skilled technicians carefully disconnect the solar panels from the grid and remove any necessary safety measures.",
        "We safely dismantle the solar panels, inverters, and other components, ensuring minimal damage to the equipment or surrounding area.",
      ],
      icon: Sparkles,
      bgColor: "bg-[#3B82F6]",
      stepColor: "text-[#3B82F6]",
    },
    {
      step: "STEP 4",
      title: "Component Resale",
      content: [
        "Our skilled technicians carefully disconnect the solar panels from the grid and remove any necessary safety measures.",
        "We safely dismantle the solar panels, inverters, and other components, ensuring minimal damage to the equipment or surrounding area.",
      ],
      icon: CircleDot,
      bgColor: "bg-[#64748B]",
      stepColor: "text-[#64748B]",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length / 2 - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length / 2 - 1 : prev - 1));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 md:p-8 lg:p-10 pt-2">
      <div className="mb-12 flex items-end justify-between">
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-12">
          <h2 className="text-blue text-xs md:text-sm lg:text-base font-bold tracking-wide uppercase mt-2">
            HOW IT WORKS
          </h2>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-navy font-libre-baskerville">
            Our Solar
            <br />
            Decommissioning
            <br />
            Process
          </h1>
        </div>
        <div className="flex gap-2 ml-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="h-12 w-12 bg-slate-100 hover:bg-slate-200 border-none shadow-none rounded-none"
            aria-label="Previous slide"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-slate-600"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="h-12 w-12 bg-slate-100 hover:bg-slate-200 border-none shadow-none rounded-none"
            aria-label="Next slide"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-slate-600"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {[0, 2].map((startIndex) => (
            <div
              key={startIndex}
              className="flex flex-col sm:flex-row w-full flex-shrink-0 gap-4"
            >
              {slides.slice(startIndex, startIndex + 2).map((slide, index) => {
                const Icon = slide.icon;
                return (
                  <div key={index} className="relative w-full sm:w-1/2 pt-8">
                    <div className="absolute top-0 left-0 bg-white z-10 w-24 h-24 sm:w-32 sm:h-32 flex items-end justify-center pb-2 sm:pb-4 shadow-sm">
                      <span
                        className={`text-base sm:text-lg font-medium tracking-wide ${slide.stepColor} text-center`}
                      >
                        {slide.step}
                      </span>
                    </div>
                    <Card
                      className={`${slide.bgColor} text-white p-8 sm:p-12 pb-6 sm:pb-8 h-full pt-24 sm:pt-32`}
                    >
                      <div className="mb-4 mt-8 sm:mt-12">
                        <h3 className="text-3xl sm:text-4xl font-serif">
                          {slide.title}
                        </h3>
                      </div>
                      <div className="space-y-2">
                        {slide.content.map((text, i) => (
                          <p
                            key={i}
                            className="text-white/90 text-xs sm:text-sm leading-relaxed"
                          >
                            {text}
                          </p>
                        ))}
                      </div>
                      <Icon className="absolute top-28 sm:top-36 right-8 sm:right-12 w-12 h-12 sm:w-16 sm:h-16 text-white/10" />
                    </Card>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
