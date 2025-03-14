
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Search, CalendarIcon, MapPin, Plane, Car, Building } from "lucide-react";
import { useSearchContext } from '@/context/SearchContext';

type SearchType = 'flights' | 'hotels' | 'cars';

type SearchFormValues = {
  query: string;
  from: string;
  to: string;
  date: string;
};

const SearchForm = () => {
  const [searchType, setSearchType] = useState<SearchType>('flights');
  const { setSearchResults, setIsSearching } = useSearchContext();
  
  const form = useForm<SearchFormValues>({
    defaultValues: {
      query: '',
      from: '',
      to: '',
      date: new Date().toISOString().split('T')[0]
    }
  });

  const mockSearchData = {
    flights: [
      { id: 1, from: 'New York (JFK)', to: 'London (LHR)', airline: 'Delta Airlines', points: 55000, cash: '$5.60', date: '2023-10-15' },
      { id: 2, from: 'New York (JFK)', to: 'London (LHR)', airline: 'American Airlines', points: 70000, cash: '$5.60', date: '2023-10-15' },
      { id: 3, from: 'New York (JFK)', to: 'London (LHR)', airline: 'British Airways', points: 60000, cash: '$200.00', date: '2023-10-15' },
      { id: 4, from: 'New York (JFK)', to: 'Paris (CDG)', airline: 'Air France', points: 65000, cash: '$150.00', date: '2023-10-18' },
      { id: 5, from: 'New York (JFK)', to: 'Tokyo (HND)', airline: 'ANA', points: 95000, cash: '$56.30', date: '2023-10-20' },
    ],
    hotels: [
      { id: 1, name: 'Marriott Downtown', location: 'New York', points: 60000, cash: '$320.00', date: '2023-10-15' },
      { id: 2, name: 'Hilton Times Square', location: 'New York', points: 50000, cash: '$290.00', date: '2023-10-15' },
      { id: 3, name: 'Hyatt Regency', location: 'New York', points: 25000, cash: '$250.00', date: '2023-10-15' },
    ],
    cars: [
      { id: 1, type: 'Economy', company: 'Hertz', location: 'New York', points: 15000, cash: '$45.00', date: '2023-10-15' },
      { id: 2, type: 'Mid-size', company: 'Enterprise', location: 'New York', points: 18000, cash: '$55.00', date: '2023-10-15' },
      { id: 3, type: 'SUV', company: 'Avis', location: 'New York', points: 25000, cash: '$75.00', date: '2023-10-15' },
    ]
  };

  const onSubmit = (data: SearchFormValues) => {
    console.log('Search form submitted:', data);
    setIsSearching(true);
    
    // Simulate API call with a delay
    setTimeout(() => {
      setSearchResults(mockSearchData[searchType]);
      setIsSearching(false);
      
      // Scroll to results
      const resultsElement = document.getElementById('search-results');
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1500);
  };

  return (
    <section id="search-form" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Find the Best Value for Your Points</h2>
          
          <div className="flex justify-center mb-6 border-b">
            <button 
              className={`px-4 py-2 font-medium ${searchType === 'flights' ? 'text-sky-600 border-b-2 border-sky-600' : 'text-gray-500'}`}
              onClick={() => setSearchType('flights')}
            >
              <Plane className="inline-block mr-2 h-4 w-4" />
              Flights
            </button>
            <button 
              className={`px-4 py-2 font-medium ${searchType === 'hotels' ? 'text-sky-600 border-b-2 border-sky-600' : 'text-gray-500'}`}
              onClick={() => setSearchType('hotels')}
            >
              <Building className="inline-block mr-2 h-4 w-4" />
              Hotels
            </button>
            <button 
              className={`px-4 py-2 font-medium ${searchType === 'cars' ? 'text-sky-600 border-b-2 border-sky-600' : 'text-gray-500'}`}
              onClick={() => setSearchType('cars')}
            >
              <Car className="inline-block mr-2 h-4 w-4" />
              Cars
            </button>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {searchType === 'flights' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="from"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>From</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                            <Input placeholder="Origin city or airport" className="pl-10" {...field} />
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="to"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>To</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                            <Input placeholder="Destination city or airport" className="pl-10" {...field} />
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              )}
              
              {searchType === 'hotels' && (
                <FormField
                  control={form.control}
                  name="query"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Destination</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                          <Input placeholder="City, area, or hotel name" className="pl-10" {...field} />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              )}
              
              {searchType === 'cars' && (
                <FormField
                  control={form.control}
                  name="query"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pickup Location</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                          <Input placeholder="City or airport" className="pl-10" {...field} />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              )}
              
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                        <Input type="date" className="pl-10" {...field} />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="w-full h-12 rounded-full bg-sky-500 hover:bg-sky-600 text-white shadow-soft">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
