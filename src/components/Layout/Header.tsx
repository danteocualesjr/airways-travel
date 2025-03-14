
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Search, ChevronDown } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Destinations', href: '/#destinations' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '/#faq' },
  ];
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-soft py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-display font-bold text-navy-900">Airways</span>
              <span className="text-2xl font-display font-bold text-sky-500">.</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-navy-700 hover:text-sky-600 transition-all-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="rounded-full">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button className="rounded-full bg-sky-500 hover:bg-sky-600 shadow-soft transition-all-300">
              Sign In
            </Button>
          </div>
          
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-navy-900" />
            ) : (
              <Menu className="h-6 w-6 text-navy-900" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-white md:hidden transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-display font-bold text-navy-900">Airways</span>
              <span className="text-2xl font-display font-bold text-sky-500">.</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="focus:outline-none"
            >
              <X className="h-6 w-6 text-navy-900" />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6 mb-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-lg font-medium text-navy-900 hover:text-sky-600 transition-all-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="mt-auto space-y-4">
            <Button variant="outline" className="w-full justify-center rounded-full">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button className="w-full justify-center rounded-full bg-sky-500 hover:bg-sky-600">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
