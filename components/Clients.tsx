
import React from 'react';
import { CLIENT_LOGOS } from '../constants';

const Clients: React.FC = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-navy-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-12">Our Trusted Partners</h2>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-50">
          {CLIENT_LOGOS.map((logo, idx) => (
            <img 
              key={idx} 
              src={logo} 
              alt="Client" 
              className="h-8 md:h-12 w-auto grayscale brightness-200 hover:grayscale-0 hover:brightness-100 transition-all duration-300 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
