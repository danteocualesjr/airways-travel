
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Frequent Traveler",
      image: "https://randomuser.me/api/portraits/women/79.jpg",
      quote: "Airways completely changed how I use my points. I was able to book a business class flight to Tokyo that would have cost thousands of dollars, using points I didn't even realize had such value.",
      stars: 5
    },
    {
      name: "Michael Chen",
      role: "Business Executive",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "As someone who travels frequently for work, maximizing my points is essential. Airways made it simple to track and optimize all my loyalty programs in one place.",
      stars: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Family Vacation Planner",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      quote: "We were able to take our family of four to Europe using entirely points and miles, saving over $8,000. The step-by-step booking guidance was invaluable.",
      stars: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-sky-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-900">What Our Members Say</h2>
          <p className="text-lg text-navy-700">
            Join thousands of travelers who have transformed their points into unforgettable experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-soft h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="h-16 w-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-navy-900">{testimonial.name}</h4>
                    <p className="text-sm text-navy-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {Array(testimonial.stars).fill(0).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <p className="text-navy-700 italic flex-grow">{testimonial.quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
