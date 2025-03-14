
import { cn } from "@/lib/utils";
import { Mail, Instagram, Twitter, Facebook, Linkedin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#" },
        { name: "How It Works", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Testimonials", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
        { name: "Cookie Policy", href: "#" },
      ],
    },
  ];
  
  return (
    <footer className="bg-navy-50 border-t border-navy-100">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-display font-bold text-navy-900">Airways</span>
              <span className="text-2xl font-display font-bold text-sky-500">.</span>
            </div>
            
            <p className="text-navy-700 mb-6 max-w-md">
              Maximize your travel rewards points. Find and book the perfect award flights with our smart search technology.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-navy-100 text-navy-700 hover:text-sky-500 hover:border-sky-500 transition-all-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-navy-100 text-navy-700 hover:text-sky-500 hover:border-sky-500 transition-all-300"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-navy-100 text-navy-700 hover:text-sky-500 hover:border-sky-500 transition-all-300"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-navy-100 text-navy-700 hover:text-sky-500 hover:border-sky-500 transition-all-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h5 className="font-display font-medium text-navy-900 mb-4">
                {group.title}
              </h5>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-navy-600 hover:text-sky-500 transition-all-300 inline-flex items-center"
                    >
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-10 mt-10 border-t border-navy-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-navy-600 text-sm mb-4 md:mb-0">
              © {currentYear} Airways. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-navy-600 hover:text-sky-500 text-sm transition-all-300">
                Privacy Policy
              </a>
              <a href="#" className="text-navy-600 hover:text-sky-500 text-sm transition-all-300">
                Terms of Service
              </a>
              <a href="#" className="text-navy-600 hover:text-sky-500 text-sm transition-all-300">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
