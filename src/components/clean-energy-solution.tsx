import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CleanEnergySolution({
  onButtonClick,
}: {
  onButtonClick: () => void;
}) {
  return (
    <section className="container max-w-6xl mx-auto px-4 py-12 md:p-8 lg:p-12">
      <div className="grid gap-8 sm:grid-cols-2 md:gap-16 lg:gap-24">
        <div className="space-y-6">
          <h2 className="text-blue font-semibold text-sm tracking-wide">
            POWERING A GREENER TOMORROW
          </h2>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-libre-baskerville font-bold text-navy leading-tight">
            Clean Energy Solutions
            <br />
            for a Sustainable Future
          </h1>
        </div>

        <div className="space-y-8 max-w-md">
          <p className="text-gray-600 text-sm leading-relaxed">
            We specialize in the safe and responsible decommissioning of solar
            projects, ensuring proper handling and recycling of end-of-life
            solar equipment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="inline-flex items-center text-sm font-bold whitespace-nowrap justify-center gap-2 bg-orange text-white px-8 py-2 hover:bg-orange/90 transition-colors w-fit rounded-none"
              onClick={onButtonClick}
            >
              Learn more
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              className="inline-flex items-center text-sm font-bold whitespace-nowrap justify-center gap-2 px-8 py-2 border-2 bg-white border-navy text-navy hover:bg-gray-50 transition-colors w-fit rounded-none"
              onClick={onButtonClick}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
