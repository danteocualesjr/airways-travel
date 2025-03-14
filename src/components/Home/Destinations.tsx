
import { useState } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Plane, Star } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1532236204992-f5e85c024202?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    points: {
      economy: "60,000",
      business: "120,000",
    },
    airline: "ANA",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    points: {
      economy: "50,000",
      business: "100,000",
    },
    airline: "Air France",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    points: {
      economy: "55,000",
      business: "110,000",
    },
    airline: "Emirates",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    points: {
      economy: "65,000",
      business: "130,000",
    },
    airline: "Singapore Airlines",
    rating: 4.7,
  },
];

const Destinations = () => {
  const [activeClass, setActiveClass] = useState('economy');
  
  return (
    <section id="destinations" className="py-16 md:py-24 bg-navy-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block mb-3 px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm font-medium">
            Popular Destinations
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-6 text-navy-900">
            Dream Destinations with <span className="text-gradient">Award Flights</span>
          </h2>
          
          <p className="text-lg text-navy-700">
            Explore top destinations you can book using your points. Our database shows real-time availability and best-value redemptions.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm">
            <button
              onClick={() => setActiveClass('economy')}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeClass === 'economy' 
                  ? "bg-sky-500 text-white shadow-sm" 
                  : "text-navy-700 hover:text-navy-900"
              )}
            >
              Economy
            </button>
            <button
              onClick={() => setActiveClass('business')}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeClass === 'business' 
                  ? "bg-sky-500 text-white shadow-sm" 
                  : "text-navy-700 hover:text-navy-900"
              )}
            >
              Business
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <div 
              key={dest.id}
              className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium mb-1">{dest.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs text-white font-medium">{dest.rating}</span>
                    </div>
                  </div>
                  <div className="glass-card rounded-lg px-2 py-1 text-xs font-medium text-white">
                    {activeClass === 'economy' ? dest.points.economy : dest.points.business} pts
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Plane className="h-4 w-4 text-sky-500" />
                    <span className="text-sm text-navy-600">{dest.airline}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-navy-400" />
                    <span className="text-sm text-navy-600">From NYC</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full rounded-lg border-navy-200 text-navy-800 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 transition-all duration-300 group"
                >
                  <span className="flex items-center justify-center">
                    View Flights
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="rounded-full border-navy-200 text-navy-800 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 transition-all duration-300 px-6 group"
          >
            <span className="flex items-center">
              Explore All Destinations
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
