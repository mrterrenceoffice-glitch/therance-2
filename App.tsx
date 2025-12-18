import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Clients from './components/Clients';
import Pricing from './components/Pricing';
import SocialSection from './components/SocialSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#000c1a] text-white selection:bg-blue-500 selection:text-white relative isolate overflow-x-hidden">
      {/* 
         Subtle Decorative Layer - reduced further to prevent 'flickering' or 
         'transparency' feel which can be distracting 
      */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] overflow-hidden z-0 font-mono text-[10px] select-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="animate-matrix whitespace-nowrap py-2" style={{ animationDelay: `${i * 0.8}s` }}>
            10010110011010101010001111010010010101010111100101010101010101
            10010110011010101010001111010010010101010111100101010101010101
          </div>
        ))}
      </div>

      <Header isScrolled={isScrolled} />
      
      <main className="relative z-10">
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Clients />
        <Pricing />
        <SocialSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default App;