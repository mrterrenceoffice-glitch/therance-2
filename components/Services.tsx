import React from 'react';
import { Palette, Globe, Share2, Search, ArrowUpRight, Code, Video, Briefcase, Calendar } from 'lucide-react';
import { SERVICES } from '../constants';

const IconMap: Record<string, any> = {
  Palette, Globe, Share2, Search, Code, Video, Briefcase
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-navy-darker relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Our Arsenal</h2>
            <h3 className="text-5xl md:text-7xl font-black font-heading tracking-tighter leading-[0.9]">Digital Weapons for <br/><span className="text-white/20">Modern Growth.</span></h3>
          </div>
          <div className="max-w-sm">
            <p className="text-gray-400 text-lg leading-relaxed font-light mb-6">
              We don't just provide services. We deploy specialized units of creative and technical mastery to scale your empire.
            </p>
            <a href="#contact" className="inline-flex items-center text-xs font-black uppercase tracking-widest text-blue-400 hover:text-white transition-colors">
              Request a free consultation <ArrowUpRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = IconMap[service.icon];
            return (
              <div key={service.id} className="group relative p-10 bg-navy-dark/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] transition-all duration-700 hover:border-blue-500/50 hover:-translate-y-3 overflow-hidden">
                {/* Neon Glow */}
                <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-blue-600/0 group-hover:bg-blue-600/20 rounded-full blur-[80px] transition-all duration-700"></div>
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-16 h-16 bg-white/5 text-blue-500 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 border border-white/10 group-hover:border-blue-400 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                    {Icon && <Icon className="w-8 h-8" />}
                  </div>
                  <h4 className="text-3xl font-bold mb-6 font-heading leading-tight tracking-tight">{service.title}</h4>
                  <p className="text-gray-400 leading-relaxed mb-12 font-light">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <a href="#contact" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 group-hover:text-white transition-colors">
                      Book a free consultation <ArrowUpRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;