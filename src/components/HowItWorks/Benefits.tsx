
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Benefits = () => {
  const benefitsList = [
    "Access to 100+ loyalty programs in one platform",
    "Real-time award availability for flights and hotels",
    "Personalized recommendations based on your points balance",
    "Historical award pricing data to identify good redemptions",
    "Expert tips and strategies from travel rewards specialists",
    "Email alerts for special promotions and opportunities",
    "Mobile app for on-the-go rewards management",
    "Free educational resources to boost your travel knowledge"
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Travel rewards dashboard" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-900">
              Why Choose Airways for Your Travel Rewards?
            </h2>
            <p className="text-lg text-navy-700 mb-8">
              Our platform gives you the tools and insights to extract maximum value from your loyalty points and frequent flyer miles.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefitsList.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <p className="text-navy-700">{benefit}</p>
                </div>
              ))}
            </div>
            
            <Button className="rounded-full px-8 py-6 h-auto text-lg bg-sky-500 hover:bg-sky-600 shadow-soft">
              Start Maximizing Your Points
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
