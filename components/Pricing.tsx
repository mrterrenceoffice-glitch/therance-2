
import React from 'react';
import { Check } from 'lucide-react';
import { PRICING_PACKAGES } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-navy-darker relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.2em] mb-4">Launch Your Business</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading mb-6">Business Registration Packages – South Africa</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional company registration services with comprehensive compliance. Get your business ready for growth and tenders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative flex flex-col p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${
                pkg.popular 
                  ? 'bg-blue-600 shadow-2xl shadow-blue-600/20 scale-105 z-10' 
                  : 'bg-navy-dark border border-white/5'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-white text-blue-600 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h4 className={`text-2xl font-bold mb-4 font-heading ${pkg.popular ? 'text-white' : 'text-white'}`}>{pkg.name}</h4>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold font-heading">{pkg.price}</span>
                  <span className={`text-xs uppercase ml-2 ${pkg.popular ? 'text-blue-100' : 'text-gray-500'}`}>One-time</span>
                </div>
                <p className={`text-sm leading-relaxed ${pkg.popular ? 'text-blue-100' : 'text-gray-400'}`}>
                  {pkg.description}
                </p>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${pkg.popular ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className={`text-sm font-medium ${pkg.popular ? 'text-white' : 'text-gray-300'}`}>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-full font-bold uppercase tracking-widest transition-all ${
                pkg.popular 
                  ? 'bg-white text-blue-600 hover:bg-gray-100' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}>
                Choose Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
