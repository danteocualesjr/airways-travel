
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Zap, Shield, BookOpen, Clock, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Globe className="h-6 w-6 text-sky-500" />,
      title: "Global Coverage",
      description: "Search across 25+ airlines and all major hotel chains simultaneously."
    },
    {
      icon: <Zap className="h-6 w-6 text-sky-500" />,
      title: "Real-time Availability",
      description: "Get up-to-date search results with actual seat availability."
    },
    {
      icon: <Shield className="h-6 w-6 text-sky-500" />,
      title: "Point Protection",
      description: "Avoid wasting points with our valuation guidance and alerts."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-sky-500" />,
      title: "Expert Guides",
      description: "Access our library of strategies to maximize your points' value."
    },
    {
      icon: <Clock className="h-6 w-6 text-sky-500" />,
      title: "Time-saving",
      description: "Find the perfect award flights in minutes, not hours."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-sky-500" />,
      title: "Exclusive Deals",
      description: "Discover limited-time transfer bonuses and sweet spots."
    }
  ];
  
  return (
    <section id="features" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block mb-3 px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm font-medium">
            Key Features
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-6 text-navy-900">
            Everything You Need to <span className="text-gradient">Maximize</span> Your Points
          </h2>
          
          <p className="text-lg text-navy-700">
            Our platform provides all the tools and insights you need to get the most value from your travel rewards points.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-500 hover:translate-y-[-5px]"
            >
              <div className="w-14 h-14 rounded-lg bg-sky-50 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-display font-medium text-navy-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-navy-600 mb-5">
                {feature.description}
              </p>
              
              <a 
                href="#" 
                className="inline-flex items-center text-sky-600 hover:text-sky-700 font-medium transition-all duration-300 group"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block bg-navy-50 rounded-2xl p-8 shadow-soft max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-navy-900">
              Ready to book your next adventure?
            </h3>
            
            <p className="text-navy-700 mb-8">
              Create an account now and start searching for your perfect award flights.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                className="relative overflow-hidden rounded-full bg-sky-500 hover:bg-sky-600 transition-all duration-300 shadow-soft group px-6"
              >
                <span className="relative z-10 flex items-center">
                  Create Free Account
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 button-shimmer"></span>
              </Button>
              
              <Button 
                variant="outline" 
                className="rounded-full border-navy-200 text-navy-800 hover:bg-navy-50 hover:border-navy-300 transition-all duration-300 px-6"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-sky-300/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-navy-300/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Features;
