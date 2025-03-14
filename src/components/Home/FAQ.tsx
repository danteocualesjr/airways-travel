
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Airways and how does it work?",
      answer: "Airways is a platform that helps you maximize your travel rewards points. We search across multiple airlines and loyalty programs to find the best award flight options based on your points balance, preferences, and travel goals."
    },
    {
      question: "Is Airways better than booking directly through my airline's website?",
      answer: "Yes! Airways searches across multiple airlines and alliance partners simultaneously, showing you options you might miss when searching on a single airline site. We also provide point valuations to ensure you're getting the best value for your points."
    },
    {
      question: "Which points programs does Airways support?",
      answer: "We support all major flexible points programs (Chase Ultimate Rewards, American Express Membership Rewards, Citi ThankYou, Capital One Miles) as well as major airline and hotel loyalty programs like United MileagePlus, Delta SkyMiles, American AAdvantage, Marriott Bonvoy, and more."
    },
    {
      question: "Can I book flights directly through Airways?",
      answer: "Yes, Airways offers a seamless booking experience. Once you find the perfect award flight, you can book directly through our platform, and we'll handle the transfer of points and reservation process."
    },
    {
      question: "How does Airways make money if the service is free?",
      answer: "While we offer a free tier with basic search functionality, our premium subscription provides advanced features like real-time award alerts, unlimited searches, and expert booking assistance. We also earn referral commissions when users sign up for credit cards through our platform."
    },
    {
      question: "How accurate is the award availability shown on Airways?",
      answer: "Our platform connects directly to airline databases to show real-time availability. We update our search results frequently to ensure accuracy, though availability can change quickly for popular routes and premium cabins."
    }
  ];
  
  return (
    <section id="faq" className="py-16 md:py-24 bg-navy-50 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block mb-3 px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm font-medium">
            Frequently Asked Questions
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-6 text-navy-900">
            Everything You Need to <span className="text-gradient">Know</span>
          </h2>
          
          <p className="text-lg text-navy-700">
            Have questions about how Airways works? Find quick answers to common questions below.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-xl overflow-hidden shadow-soft border border-navy-100"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-medium text-navy-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-navy-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-navy-700 mb-5">
            Still have questions? We're here to help.
          </p>
          
          <Button 
            variant="outline" 
            className="rounded-full border-navy-200 text-navy-800 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 transition-all duration-300 px-6 group"
          >
            <span className="flex items-center">
              Contact Support
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
