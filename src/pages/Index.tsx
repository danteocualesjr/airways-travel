
import { useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Hero from '@/components/Home/Hero';
import PointsCalculator from '@/components/Home/PointsCalculator';
import Destinations from '@/components/Home/Destinations';
import Features from '@/components/Home/Features';
import Newsletter from '@/components/Home/Newsletter';
import FAQ from '@/components/Home/FAQ';

const Index = () => {
  useEffect(() => {
    // Smooth scroll to section when URL has hash
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <PointsCalculator />
        <Destinations />
        <Features />
        <Newsletter />
        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
