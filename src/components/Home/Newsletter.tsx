
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      
      toast("Newsletter subscription successful", {
        description: "You're now subscribed to our newsletter!",
        action: {
          label: "Dismiss",
          onClick: () => console.log("Dismissed"),
        },
        icon: <CheckCircle className="h-4 w-4 text-green-500" />,
      });
    }, 1500);
  };
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-navy-900 to-navy-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] opacity-20 bg-cover bg-center"></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 to-navy-900/95"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block mb-4 px-3 py-1 bg-sky-500/20 text-sky-300 rounded-full text-sm font-medium">
            Join Our Community
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-6 text-white">
            Never Miss a <span className="text-sky-400">Points Opportunity</span>
          </h2>
          
          <p className="text-lg text-sky-100 mb-8 opacity-90">
            Subscribe to our newsletter for exclusive tips, special promotions, and the latest trends in travel rewards optimization.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-grow">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 pr-12 rounded-full border-navy-600 bg-navy-800/50 backdrop-blur-sm text-white placeholder:text-navy-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 h-12"
                required
              />
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-navy-400">
                <Mail size={18} />
              </span>
            </div>
            
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="relative overflow-hidden rounded-full bg-sky-500 hover:bg-sky-600 transition-all duration-300 h-12 shadow-soft group"
            >
              <span className="relative z-10 flex items-center">
                {isSubmitting ? "Subscribing..." : "Subscribe"}
                {!isSubmitting && (
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                )}
              </span>
              <span className="absolute inset-0 button-shimmer"></span>
            </Button>
          </form>
          
          <p className="mt-4 text-sm text-sky-200/70">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-sky-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-sky-300/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Newsletter;
