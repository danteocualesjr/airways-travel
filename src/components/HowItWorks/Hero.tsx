
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-navy-900 leading-tight">
            Maximize Your Travel 
            <span className="text-gradient"> Rewards</span>
          </h1>
          <p className="text-lg md:text-xl text-navy-700 mb-10 max-w-2xl mx-auto">
            Airways helps you unlock the full potential of your points and miles, finding the best redemption options across 100+ loyalty programs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button className="h-12 px-8 rounded-full bg-sky-500 hover:bg-sky-600 text-lg shadow-soft button-shimmer">
              Try for Free
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="outline" className="h-12 px-8 rounded-full text-lg">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
