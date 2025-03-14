
import { useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import TryForFreeHero from '@/components/TryForFree/Hero';
import SearchForm from '@/components/TryForFree/SearchForm';
import SearchResults from '@/components/TryForFree/SearchResults';
import Newsletter from '@/components/Home/Newsletter';

const TryForFree = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <TryForFreeHero />
        <SearchForm />
        <SearchResults />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default TryForFree;
