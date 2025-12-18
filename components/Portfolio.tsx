
import React, { useState } from 'react';
import { PORTFOLIO } from '../constants';
import { PortfolioCategory } from '../types';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<PortfolioCategory>('All');
  
  const categories: PortfolioCategory[] = [
    'All', 'UX/UI', 'Branding', 'Web Development', 'Social Media', 'Logo Design'
  ];

  const filteredItems = filter === 'All' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-32 bg-navy-darker relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Elite Portfolio</h2>
            <h3 className="text-5xl md:text-7xl font-black font-heading tracking-tighter">Impact over <br/><span className="text-blue-600/80">everything.</span></h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-full border transition-all ${
                  filter === cat 
                    ? 'bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-600/30' 
                    : 'border-white/10 text-gray-500 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento-style Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:grid-rows-2">
          {filteredItems.slice(0, 6).map((item, idx) => {
            const spans = [
              "md:col-span-3 md:row-span-1", // 1st
              "md:col-span-3 md:row-span-1", // 2nd
              "md:col-span-2 md:row-span-1", // 3rd
              "md:col-span-4 md:row-span-1", // 4th
              "md:col-span-3 md:row-span-1", // 5th
              "md:col-span-3 md:row-span-1", // 6th
            ][idx] || "md:col-span-2";

            return (
              <div 
                key={item.id} 
                className={`group relative overflow-hidden rounded-[2.5rem] bg-navy-dark border border-white/5 transition-all duration-500 hover:border-blue-500/30 ${spans}`}
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover grayscale opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-10 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-[9px] font-black uppercase tracking-widest rounded-full border border-blue-500/20 mb-3">
                      {item.category}
                    </span>
                    <h4 className="text-2xl font-bold font-heading leading-tight">{item.title}</h4>
                  </div>
                  <div className="flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <button className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-white group/btn">
                      <span>View Case Study</span>
                      <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-32 text-gray-600 border border-dashed border-white/5 rounded-[3rem]">
            <p className="text-sm font-black uppercase tracking-widest">Awaiting Project Reveal</p>
          </div>
        )}

        <div className="mt-20 text-center">
          <button className="px-14 py-6 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-black uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 shadow-2xl">
            See the Archives
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
