import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function SolarDistribution({
  onButtonClick,
}: {
  onButtonClick: () => void;
}) {
  return (
    <div className="p-1 bg-white">
      <div className="grid sm:grid-cols-6 min-h-[500px] sm:min-h-[600px]">
        <div className="col-span-2 sm:col-span-4 flex flex-col justify-center py-4 sm:pr-4 bg-blue order-1">
          <div className="text-white space-y-6 sm:max-w-xl max-w-6xl px-6 mx-auto">
            <div className="w-8 h-8">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-full h-full"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold leading-tight font-libre-baskerville">
              Efficient Distribution of Solar Equipment Distribution
            </h1>

            <p className="text-sm opacity-90 leading-relaxed">
              By choosing our company for your solar decommissioning needs, you
              can enjoy numerous benefits. Our services ensure environmental
              compliance, cost savings, and safety throughout the process.
            </p>

            <div className="flex flex-row gap-4 pt-4">
              <Button
                className="inline-flex items-center text-sm font-bold justify-center px-8 py-2 bg-navy text-white rounded-none hover:bg-[#002B5C] transition-colors whitespace-nowrap"
                onClick={onButtonClick}
              >
                Learn more
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                className="inline-flex items-center text-sm font-bold justify-center px-8 py-2 border-2 bg-blue border-white text-white rounded-none hover:bg-white/10 transition-colors"
                onClick={onButtonClick}
              >
                Contact
              </Button>
            </div>
          </div>
        </div>

        <div className="relative sm:block col-span-2 sm:col-span-2 bg-white order-2 sm:order-2 aspect-[3/4] sm:aspect-auto">
          <div className="absolute inset-1">
            <Image
              src="/images/solar-workers.png"
              alt="Solar panel installation workers"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
