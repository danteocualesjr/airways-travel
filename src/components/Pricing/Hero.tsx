
import { Check } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-navy-900 leading-tight">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h1>
          <p className="text-lg md:text-xl text-navy-700 mb-6 max-w-2xl mx-auto">
            Choose the plan that's right for you and start maximizing your travel rewards today.
          </p>
          <div className="flex items-center justify-center space-x-2 mb-10">
            <div className="flex items-center justify-center space-x-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100">
                <Check className="h-4 w-4 text-sky-600" />
              </div>
              <span className="text-sm text-navy-700">No hidden fees</span>
            </div>
            <div className="h-4 w-px bg-gray-300" />
            <div className="flex items-center justify-center space-x-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100">
                <Check className="h-4 w-4 text-sky-600" />
              </div>
              <span className="text-sm text-navy-700">Cancel anytime</span>
            </div>
            <div className="h-4 w-px bg-gray-300" />
            <div className="flex items-center justify-center space-x-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100">
                <Check className="h-4 w-4 text-sky-600" />
              </div>
              <span className="text-sm text-navy-700">14-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
