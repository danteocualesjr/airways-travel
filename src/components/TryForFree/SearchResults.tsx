
import { Button } from "@/components/ui/button";
import { useSearchContext } from '@/context/SearchContext';
import { AlertCircle } from "lucide-react";

const SearchResults = () => {
  const { searchResults, isSearching } = useSearchContext();

  if (isSearching) {
    return (
      <section id="search-results" className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-center justify-center min-h-[300px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-500 mb-4"></div>
              <p className="text-navy-700 text-lg">Searching for the best deals...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!searchResults || searchResults.length === 0) {
    return null;
  }

  return (
    <section id="search-results" className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Search Results</h2>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {searchResults.map((result: any) => (
              <div key={result.id} className="border-b last:border-0 p-6 hover:bg-gray-50 transition-colors">
                {'airline' in result ? (
                  // Flight results
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-grow mb-4 md:mb-0 md:mr-4">
                      <div className="flex items-center mb-2">
                        <span className="text-lg font-semibold">{result.airline}</span>
                        <span className="bg-gray-100 text-xs font-medium px-2 py-1 rounded ml-2">Economy</span>
                      </div>
                      <div className="flex items-center">
                        <div>
                          <p className="font-medium">{result.from}</p>
                          <p className="text-sm text-gray-500">{result.date}</p>
                        </div>
                        <div className="mx-2 md:mx-4 text-gray-400">→</div>
                        <div>
                          <p className="font-medium">{result.to}</p>
                          <p className="text-sm text-gray-500">One way</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end">
                      <div className="flex items-center mb-2">
                        <span className="font-bold text-lg">{result.points.toLocaleString()} points</span>
                        <span className="text-sm text-gray-500 ml-2">+ {result.cash}</span>
                      </div>
                      <Button className="h-10 px-4 rounded-full bg-sky-500 hover:bg-sky-600 text-white shadow-soft">
                        Select
                      </Button>
                    </div>
                  </div>
                ) : 'name' in result ? (
                  // Hotel results
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-grow mb-4 md:mb-0 md:mr-4">
                      <div className="flex items-center mb-2">
                        <span className="text-lg font-semibold">{result.name}</span>
                        <span className="bg-gray-100 text-xs font-medium px-2 py-1 rounded ml-2">4 stars</span>
                      </div>
                      <div>
                        <p className="font-medium">{result.location}</p>
                        <p className="text-sm text-gray-500">{result.date} - 1 night</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end">
                      <div className="flex items-center mb-2">
                        <span className="font-bold text-lg">{result.points.toLocaleString()} points</span>
                        <span className="text-sm text-gray-500 ml-2">or {result.cash}</span>
                      </div>
                      <Button className="h-10 px-4 rounded-full bg-sky-500 hover:bg-sky-600 text-white shadow-soft">
                        Select
                      </Button>
                    </div>
                  </div>
                ) : (
                  // Car results
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-grow mb-4 md:mb-0 md:mr-4">
                      <div className="flex items-center mb-2">
                        <span className="text-lg font-semibold">{result.company} - {result.type}</span>
                      </div>
                      <div>
                        <p className="font-medium">{result.location}</p>
                        <p className="text-sm text-gray-500">{result.date} - 1 day rental</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end">
                      <div className="flex items-center mb-2">
                        <span className="font-bold text-lg">{result.points.toLocaleString()} points</span>
                        <span className="text-sm text-gray-500 ml-2">or {result.cash}</span>
                      </div>
                      <Button className="h-10 px-4 rounded-full bg-sky-500 hover:bg-sky-600 text-white shadow-soft">
                        Select
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-sky-50 border border-sky-100 rounded-lg p-4 flex items-start">
            <AlertCircle className="text-sky-500 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-navy-700 font-medium">Get More Options with Premium</p>
              <p className="text-navy-600 text-sm mt-1">Upgrade to access more loyalty programs, advanced filtering, and premium award availability.</p>
              <Button variant="outline" className="mt-3 h-9 rounded-full border-sky-200 text-sky-700 hover:bg-sky-100">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResults;
