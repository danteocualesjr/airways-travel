
import { 
  Search, Globe, Plane, CreditCard, BarChart 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Steps = () => {
  const steps = [
    {
      icon: Search,
      title: "Find the Best Options",
      description: "Our advanced algorithm searches across 100+ loyalty programs to find the best redemption options for your points."
    },
    {
      icon: Globe,
      title: "Explore Destinations",
      description: "Discover new destinations you can reach with your existing points and miles, or set goals for future travel."
    },
    {
      icon: BarChart,
      title: "Compare Value",
      description: "See the actual dollar value of your points across different airlines and hotels to make informed decisions."
    },
    {
      icon: CreditCard,
      title: "Optimize Earning",
      description: "Get personalized recommendations for credit cards and promotions that maximize your points earning potential."
    },
    {
      icon: Plane,
      title: "Book with Confidence",
      description: "Follow our step-by-step guides to book your award travel or get expert assistance from our concierge service."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-900">How Airways Works</h2>
          <p className="text-lg text-navy-700">
            Our platform simplifies the complex world of points and miles, making it easy to maximize your travel rewards.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.slice(0, 3).map((step, index) => (
            <Card key={index} className="border-none shadow-soft hover:shadow-md transition-all-300">
              <CardContent className="p-8 text-center">
                <div className="bg-sky-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy-900">{step.title}</h3>
                <p className="text-navy-700">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {steps.slice(3).map((step, index) => (
            <Card key={index} className="border-none shadow-soft hover:shadow-md transition-all-300">
              <CardContent className="p-8 text-center">
                <div className="bg-sky-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy-900">{step.title}</h3>
                <p className="text-navy-700">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
