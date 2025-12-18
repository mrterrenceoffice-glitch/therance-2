
import React from 'react';
import { ArrowRight, Sparkles, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-56 lg:pb-48 overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none opacity-40"></div>
      <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none opacity-40"></div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-5 py-2 mb-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] animate-fade-in shadow-xl">
            <Sparkles className="w-3 h-3" />
            <span>Pioneering Digital Mastery</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-black leading-[0.85] mb-12 tracking-[-0.05em] font-heading drop-shadow-2xl">
            Digital<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-700 animate-gradient-x">Legends.</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-400 max-w-3xl mb-16 font-light leading-tight tracking-tight">
            We architect <span className="text-white font-medium">unforgettable digital narratives</span>. From bespoke engineering to market domination, your vision is our mission.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-24">
            <a href="#contact" className="group w-full sm:w-auto px-12 py-6 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest rounded-full transition-all flex items-center justify-center space-x-3 shadow-2xl shadow-blue-600/40 hover:-translate-y-1">
              <span>Start Strategy</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#portfolio" className="group w-full sm:w-auto px-12 py-6 bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-widest rounded-full transition-all border border-white/10 flex items-center justify-center space-x-2 backdrop-blur-sm">
              <span>Our Work</span>
              <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
          </div>

          {/* Dynamic Trust Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-16 border-t border-white/5">
            {[
              { label: 'Innovations', val: '250+' },
              { label: 'Years Active', val: '05' },
              { label: 'Client Retention', val: '98%' },
              { label: 'Global Reach', val: '12' },
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-4xl font-black text-white tracking-tighter">{stat.val}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-[0.25em] font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
