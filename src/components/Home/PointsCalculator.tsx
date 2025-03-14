
import { useState } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Award, Sparkles, TrendingUp } from "lucide-react";

const PointsCalculator = () => {
  const [pointsAmount, setPointsAmount] = useState('50000');
  const [program, setProgram] = useState('chase');
  const [calculatedValue, setCalculatedValue] = useState({
    cashValue: 500,
    optimalValue: 1250,
    destination: 'Paris',
    multiplier: 2.5,
  });
  
  const programs = [
    { id: 'chase', name: 'Chase Ultimate Rewards' },
    { id: 'amex', name: 'American Express Membership Rewards' },
    { id: 'citi', name: 'Citi ThankYou Points' },
    { id: 'capital-one', name: 'Capital One Miles' },
    { id: 'marriott', name: 'Marriott Bonvoy' },
  ];
  
  const handleCalculate = () => {
    // In a real app, this would make an API call to calculate values
    const pointsNum = parseInt(pointsAmount);
    const cashValue = pointsNum * 0.01; // Assuming 1 cent per point cash value
    
    let multiplier = 2.5;
    let destination = 'Paris';
    
    if (program === 'amex') {
      multiplier = 2.2;
      destination = 'Tokyo';
    } else if (program === 'citi') {
      multiplier = 1.8;
      destination = 'London';
    } else if (program === 'capital-one') {
      multiplier = 2.0;
      destination = 'Rome';
    } else if (program === 'marriott') {
      multiplier = 1.5;
      destination = 'New York';
    }
    
    const optimalValue = cashValue * multiplier;
    
    setCalculatedValue({
      cashValue,
      optimalValue,
      destination,
      multiplier,
    });
  };
  
  return (
    <section id="calculator" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="glass-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-500">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-navy-900">
                Calculate Your Points Value
              </h3>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    Points Program
                  </label>
                  <Select
                    value={program}
                    onValueChange={setProgram}
                  >
                    <SelectTrigger className="w-full rounded-lg border-navy-200">
                      <SelectValue placeholder="Select reward program" />
                    </SelectTrigger>
                    <SelectContent>
                      {programs.map((prog) => (
                        <SelectItem key={prog.id} value={prog.id}>
                          {prog.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    Points Amount
                  </label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={pointsAmount}
                      onChange={(e) => setPointsAmount(e.target.value)}
                      className="w-full rounded-lg border-navy-200 pl-4 pr-12 py-3"
                      placeholder="Enter points amount"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-navy-500 text-sm font-medium">
                      points
                    </span>
                  </div>
                </div>
                
                <Button 
                  onClick={handleCalculate}
                  className="w-full rounded-lg bg-navy-900 hover:bg-navy-800 text-white transition-all duration-300 py-3 h-12"
                >
                  Calculate Maximum Value
                </Button>
              </div>
              
              {calculatedValue && (
                <div className="mt-8 pt-6 border-t border-navy-100">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Award className="text-navy-600 h-5 w-5" />
                        <span className="text-sm text-navy-600">Cash Value</span>
                      </div>
                      <span className="font-medium text-navy-900">${calculatedValue.cashValue.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Sparkles className="text-sky-600 h-5 w-5" />
                        <span className="text-sm text-navy-600">Optimal Transfer Value</span>
                      </div>
                      <span className="font-semibold text-sky-600">${calculatedValue.optimalValue.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="text-emerald-600 h-5 w-5" />
                        <span className="text-sm text-navy-600">Value Multiplier</span>
                      </div>
                      <span className="font-medium text-emerald-600">{calculatedValue.multiplier}x</span>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-navy-100">
                      <div className="text-center">
                        <p className="text-sm text-navy-600 mb-1">Recommended Redemption</p>
                        <p className="font-medium text-navy-900">Round-trip flight to {calculatedValue.destination}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <span className="inline-block mb-3 px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm font-medium">
              Point Value Calculator
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-6 text-navy-900">
              Discover the <span className="text-gradient">True Value</span> of Your Travel Points
            </h2>
            
            <p className="text-lg text-navy-700 mb-8">
              Not all points are created equal. Our calculator helps you understand what your points are worth and how to maximize their value for your dream destinations.
            </p>
            
            <div className="space-y-5">
              {[
                {
                  title: "Real-time Value Assessment",
                  description: "Get up-to-date valuations based on current award availability and transfer bonuses.",
                  icon: <TrendingUp className="h-5 w-5 text-sky-500" />,
                },
                {
                  title: "Smart Transfer Recommendations",
                  description: "Discover which transfer partners offer the best value for your specific travel goals.",
                  icon: <ArrowRight className="h-5 w-5 text-sky-500" />,
                },
                {
                  title: "Opportunity Alerts",
                  description: "Receive notifications when special promotions or sweet spot opportunities arise.",
                  icon: <Sparkles className="h-5 w-5 text-sky-500" />,
                }
              ].map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-navy-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-navy-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-sky-300/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-navy-300/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default PointsCalculator;
