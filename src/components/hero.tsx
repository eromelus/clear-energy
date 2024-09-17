"use client";

import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="flex flex-col px-4 py-8 md:px-6 lg:px-8">
      <h1 className="mb-8 text-center text-3xl font-bold leading-tight text-navy tracking-[-2px]  md:text-4xl lg:text-left lg:text-5xl lg:pl-8 font-libre-baskerville">
        Experts in solar <br />
        decommissioning and <br />
        recycling <span className="italic font-[500]">solutions</span>.
      </h1>

      <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[16/9]">
        <Image
          src="/images/solar-panels.png"
          alt="Solar panels"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-center lg:inset-0 lg:items-start lg:justify-end">
          <div className="w-full max-w-[320px] bg-navy p-6 text-white md:max-w-[480px] lg:m-6 lg:max-w-md lg:rounded-lg">
            <p className="mb-6 text-sm md:text-base">
              We specialize in the safe and responsible decommissioning of solar
              projects, ensuring proper handling and recycling of end-of- life
              solar equipment.
            </p>
            <Link
              href="/learn-more"
              className="inline-flex items-center border border-white px-8 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-navy"
            >
              Learn More
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
