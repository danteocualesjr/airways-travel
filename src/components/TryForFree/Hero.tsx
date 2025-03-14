
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-navy-900 leading-tight">
            Try Our Points
            <span className="text-gradient"> Calculator</span>
          </h1>
          <p className="text-lg md:text-xl text-navy-700 mb-10 max-w-2xl mx-auto">
            Search for flights, hotels, and car rentals using your points. Find the best value for your points, all for free.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button className="h-12 px-8 rounded-full bg-sky-500 hover:bg-sky-600 text-lg shadow-soft button-shimmer" onClick={() => {
              const searchForm = document.getElementById('search-form');
              if (searchForm) {
                searchForm.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              Start Searching
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
