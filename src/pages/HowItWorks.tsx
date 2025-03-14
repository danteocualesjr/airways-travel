
import { useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import HowItWorksHero from '@/components/HowItWorks/Hero';
import Steps from '@/components/HowItWorks/Steps';
import Benefits from '@/components/HowItWorks/Benefits';
import Testimonials from '@/components/HowItWorks/Testimonials';
import Newsletter from '@/components/Home/Newsletter';

const HowItWorks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <HowItWorksHero />
        <Steps />
        <Benefits />
        <Testimonials />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
