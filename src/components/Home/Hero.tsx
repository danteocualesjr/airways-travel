
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, Globe, Search, PlaneTakeoff, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [email, setEmail] = useState('');
  
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="max-w-xl">
              <span className="inline-block mb-4 px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm font-medium">
                Introducing Airways
              </span>
              
              <h1 className="font-display font-semibold mb-6 tracking-tight text-navy-900">
                Unlock the True Value of Your <span className="text-gradient">Travel Points</span>
              </h1>
              
              <p className="text-lg text-navy-700 mb-8">
                Find and book the perfect award flights with our smart search technology. Stop wasting points, maximize your travel rewards.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 pr-12 rounded-full border border-navy-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all duration-200"
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-navy-400">
                    <Mail size={18} />
                  </span>
                </div>
                
                <Button 
                  className="relative overflow-hidden rounded-full bg-sky-500 hover:bg-sky-600 transition-all duration-300 shadow-soft group"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                  <span className="absolute inset-0 button-shimmer"></span>
                </Button>
              </div>
              
              <div className="flex items-center space-x-3 text-sm text-navy-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-navy-100"
                    >
                      <img
                        src={`https://randomuser.me/api/portraits/women/${i + 10}.jpg`}
                        alt="User avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span>Join 10,000+ members already booking smarter</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              <div className="relative z-10 p-2 rounded-xl bg-white/80 backdrop-blur-sm shadow-card overflow-hidden border border-white/40">
                <img
                  src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Travel destination"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
                
                <div className="absolute bottom-6 left-6 right-6 glass-card rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-navy-900 font-medium">New York → Paris</h4>
                    <p className="text-sm text-navy-600">60,000 points + $121</p>
                  </div>
                  <Button size="sm" className="rounded-full bg-sky-500 hover:bg-sky-600">
                    <ArrowRight size={16} />
                  </Button>
                </div>
                
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="text-xs font-medium text-navy-900">Best Value</span>
                </div>
              </div>
              
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-sky-300/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-navy-300/20 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
              
              <div className="absolute top-1/4 -left-6 glass-card rounded-lg p-3 shadow-card animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h5 className="font-medium text-navy-900 text-sm">25+ Airlines</h5>
                    <p className="text-xs text-navy-600">Search all at once</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-1/4 -right-6 glass-card rounded-lg p-3 shadow-card animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center text-navy-600">
                    <PlaneTakeoff size={20} />
                  </div>
                  <div>
                    <h5 className="font-medium text-navy-900 text-sm">2.4x Value</h5>
                    <p className="text-xs text-navy-600">Avg. point value</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
