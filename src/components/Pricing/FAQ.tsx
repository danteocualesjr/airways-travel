
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time. If you cancel, you will have access to Airways until the end of your current billing period."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, including Visa, MasterCard, American Express, and Discover. We also accept PayPal for payment."
    },
    {
      question: "Is there a free trial available?",
      answer: "We offer a 14-day free trial for our Premium plan, allowing you to explore our platform before committing. No credit card is required to start the trial."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new rate will be prorated for the remainder of your billing cycle. If you downgrade, the new rate will take effect at the start of your next billing cycle."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 14-day money-back guarantee. If you're not satisfied with your subscription within the first 14 days, contact our support team for a full refund."
    },
    {
      question: "Is there a discount for annual subscriptions?",
      answer: "Yes, we offer a 16% discount on all annual subscriptions compared to paying monthly."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No, there are no hidden fees. The price you see is the price you pay. We are transparent about our pricing and what's included in each plan."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-900">Frequently Asked Questions</h2>
            <p className="text-lg text-navy-700">
              Everything you need to know about our pricing and plans.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-navy-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-navy-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
