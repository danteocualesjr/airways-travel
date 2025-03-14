
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { 
  CommandDialog, 
  CommandInput, 
  CommandList, 
  CommandEmpty, 
  CommandGroup, 
  CommandItem 
} from "@/components/ui/command";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  
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

  const searchableItems = [
    { name: 'Home', description: 'Main page', href: '/' },
    { name: 'How It Works', description: 'Learn how Airways works', href: '/how-it-works' },
    { name: 'Pricing', description: 'Our pricing plans', href: '/pricing' },
    { name: 'Try for Free', description: 'Try our service for free', href: '/try-for-free' },
    { name: 'Points Calculator', description: 'Calculate your points value', href: '/#calculator' },
    { name: 'Destinations', description: 'Explore destinations', href: '/#destinations' },
    { name: 'FAQ', description: 'Frequently asked questions', href: '/#faq' },
    // Features
    { name: 'Points Comparison', description: 'Compare points across programs', href: '/#features' },
    { name: 'Real-Time Availability', description: 'Check real-time availability', href: '/#features' },
    { name: 'Award Alerts', description: 'Get alerts for award availability', href: '/#features' },
    // Popular destinations
    { name: 'New York', description: 'Flights to New York', href: '/try-for-free' },
    { name: 'London', description: 'Flights to London', href: '/try-for-free' },
    { name: 'Tokyo', description: 'Flights to Tokyo', href: '/try-for-free' },
    { name: 'Paris', description: 'Flights to Paris', href: '/try-for-free' },
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
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button 
              className="rounded-full bg-sky-500 hover:bg-sky-600 shadow-soft transition-all-300"
              onClick={() => navigate('/try-for-free')}
            >
              Try for Free
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
            <Link
              to="/try-for-free"
              className="text-lg font-medium text-navy-900 hover:text-sky-600 transition-all-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Try for Free
            </Link>
          </nav>
          
          <div className="mt-auto space-y-4">
            <Button 
              variant="outline" 
              className="w-full justify-center rounded-full"
              onClick={() => {
                setMobileMenuOpen(false);
                setSearchOpen(true);
              }}
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button 
              className="w-full justify-center rounded-full bg-sky-500 hover:bg-sky-600"
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/try-for-free');
              }}
            >
              Try for Free
            </Button>
          </div>
        </div>
      </div>

      {/* Command Search Dialog */}
      <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
        <CommandInput placeholder="Search for pages, features, destinations..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            {searchableItems.filter(item => ['Home', 'How It Works', 'Pricing', 'Try for Free'].includes(item.name)).map((item) => (
              <CommandItem 
                key={item.href} 
                onSelect={() => {
                  navigate(item.href);
                  setSearchOpen(false);
                }}
              >
                {item.name}
                <span className="text-sm text-muted-foreground ml-2">{item.description}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          
          <CommandGroup heading="Features">
            {searchableItems.filter(item => ['Points Comparison', 'Real-Time Availability', 'Award Alerts', 'Points Calculator'].includes(item.name)).map((item) => (
              <CommandItem 
                key={item.href} 
                onSelect={() => {
                  navigate(item.href);
                  setSearchOpen(false);
                }}
              >
                {item.name}
                <span className="text-sm text-muted-foreground ml-2">{item.description}</span>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandGroup heading="Popular Destinations">
            {searchableItems.filter(item => ['New York', 'London', 'Tokyo', 'Paris'].includes(item.name)).map((item) => (
              <CommandItem 
                key={item.href} 
                onSelect={() => {
                  navigate(item.href);
                  setSearchOpen(false);
                }}
              >
                {item.name}
                <span className="text-sm text-muted-foreground ml-2">{item.description}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  );
};

export default Header;
