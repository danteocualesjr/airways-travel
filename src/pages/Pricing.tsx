
import { useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import PricingHero from '@/components/Pricing/Hero';
import PricingPlans from '@/components/Pricing/Plans';
import PricingComparison from '@/components/Pricing/Comparison';
import FAQ from '@/components/Pricing/FAQ';
import Newsletter from '@/components/Home/Newsletter';

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <PricingHero />
        <PricingPlans />
        <PricingComparison />
        <FAQ />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
