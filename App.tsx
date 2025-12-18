
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
import AISidebar from './components/AISidebar';

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
    <div className="min-h-screen bg-navy-dark text-white selection:bg-blue-500 selection:text-white">
      {/* Decorative Binary/Matrix Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] overflow-hidden z-0 font-mono text-xs select-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="animate-matrix whitespace-nowrap" style={{ animationDelay: `${i * 0.5}s` }}>
            ////0 10 001 01100 //// 1101 010 1010 //// 0011 1101 0010 ////
            ////0 10 001 01100 //// 1101 010 1010 //// 0011 1101 0010 ////
            ////0 10 001 01100 //// 1101 010 1010 //// 0011 1101 0010 ////
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
      
      {/* Interactive AI Business Consultant */}
      <AISidebar />
    </div>
  );
};

export default App;
