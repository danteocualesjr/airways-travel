
import { useState } from 'react';
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Plans = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>('monthly');
  
  const plans = [
    {
      name: "Basic",
      description: "Essential travel rewards tools for casual travelers",
      monthlyPrice: 9.99,
      annualPrice: 99.99,
      features: [
        "Access to 50+ loyalty programs",
        "Basic points valuation",
        "Award flight search",
        "Email support",
        "Mobile app access"
      ],
      notIncluded: [
        "Award alerts",
        "Partner transfer recommendations",
        "Historical award pricing data",
        "Priority support",
        "Concierge booking service"
      ],
      cta: "Start Basic Plan",
      popular: false
    },
    {
      name: "Premium",
      description: "Advanced tools for frequent travelers who maximize value",
      monthlyPrice: 19.99,
      annualPrice: 199.99,
      features: [
        "Access to 100+ loyalty programs",
        "Advanced points valuation",
        "Award flight and hotel search",
        "Award alerts",
        "Partner transfer recommendations",
        "Historical award pricing data",
        "Priority email support",
        "Mobile app access"
      ],
      notIncluded: [
        "Concierge booking service"
      ],
      cta: "Start Premium Plan",
      popular: true
    },
    {
      name: "Ultimate",
      description: "Complete solution with personalized expert assistance",
      monthlyPrice: 39.99,
      annualPrice: 399.99,
      features: [
        "Access to 150+ loyalty programs",
        "Advanced points valuation",
        "Award flight and hotel search",
        "Award alerts",
        "Partner transfer recommendations",
        "Historical award pricing data",
        "Priority phone and email support",
        "Mobile app access",
        "Concierge booking service",
        "Custom travel strategy session",
        "Exclusive partner bonuses"
      ],
      notIncluded: [],
      cta: "Start Ultimate Plan",
      popular: false
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center p-1 bg-gray-100 rounded-full">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={cn(
                "px-4 py-2 text-sm rounded-full transition-all",
                billingPeriod === 'monthly'
                  ? "bg-white shadow-sm text-navy-900"
                  : "text-navy-600 hover:text-navy-900"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annually')}
              className={cn(
                "px-4 py-2 text-sm rounded-full transition-all",
                billingPeriod === 'annually'
                  ? "bg-white shadow-sm text-navy-900"
                  : "text-navy-600 hover:text-navy-900"
              )}
            >
              Annually <span className="text-green-600 font-medium">Save 16%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const price = billingPeriod === 'monthly' 
              ? plan.monthlyPrice 
              : plan.annualPrice / 12;
            
            return (
              <Card 
                key={plan.name}
                className={cn(
                  "border rounded-xl overflow-hidden relative",
                  plan.popular 
                    ? "border-sky-500 shadow-xl" 
                    : "border-gray-200 shadow-md"
                )}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-sky-500 text-white text-center py-1 text-xs font-medium">
                    MOST POPULAR
                  </div>
                )}
                
                <CardHeader className={cn(
                  "pb-0", 
                  plan.popular ? "pt-8" : "pt-6"
                )}>
                  <h3 className="text-xl font-bold text-navy-900">{plan.name}</h3>
                  <p className="text-sm text-navy-600 h-12">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-navy-900">${price.toFixed(2)}</span>
                      <span className="text-navy-600 ml-2">/month</span>
                    </div>
                    <p className="text-sm text-navy-600">
                      {billingPeriod === 'annually' 
                        ? `Billed as $${plan.annualPrice} per year`
                        : 'Billed monthly'}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex">
                        <Check className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                        <span className="text-sm text-navy-700">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.notIncluded.map((feature, index) => (
                      <div key={index} className="flex opacity-60">
                        <X className="h-5 w-5 text-navy-400 mr-3 shrink-0" />
                        <span className="text-sm text-navy-500">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    className={cn(
                      "w-full rounded-lg", 
                      plan.popular 
                        ? "bg-sky-500 hover:bg-sky-600" 
                        : "bg-navy-800 hover:bg-navy-900"
                    )}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Plans;
