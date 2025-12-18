
import React from 'react';
import { X, CheckCircle2, TrendingUp, Target, ArrowRight } from 'lucide-react';
import { DetailedPortfolioItem } from '../constants';

interface CaseStudyModalProps {
  item: DetailedPortfolioItem;
  onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity animate-fade-in" 
        onClick={onClose}
      />
      
      {/* Content */}
      <div className="relative w-full max-w-5xl bg-navy-darker border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-float-up">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 text-white transition-all"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="overflow-y-auto">
          {/* Header Image */}
          <div className="relative h-64 md:h-96">
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-darker via-navy-darker/20 to-transparent" />
            <div className="absolute bottom-8 left-8 md:left-12 right-8">
              <span className="inline-block px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-4 shadow-xl shadow-blue-600/30">
                {item.category}
              </span>
              <h2 className="text-3xl md:text-6xl font-black font-heading text-white tracking-tighter leading-tight">
                {item.title}
              </h2>
            </div>
          </div>

          <div className="p-8 md:p-12">
            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {item.results.map((res, i) => (
                <div key={i} className="p-8 bg-blue-600/10 border border-blue-500/20 rounded-3xl group hover:border-blue-500/50 transition-all">
                  <div className="text-4xl font-black text-blue-400 mb-2 group-hover:scale-110 transition-transform origin-left">
                    {res.value}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                    {res.metric}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              <div className="space-y-12">
                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="w-5 h-5 text-blue-500" />
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white">The Challenge</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-lg font-light">
                    {item.challenge}
                  </p>
                </section>

                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white">Our Strategic Solution</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-lg font-light">
                    {item.solution}
                  </p>
                </section>
              </div>

              <div className="space-y-12">
                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <TrendingUp className="w-5 h-5 text-blue-500" />
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white">Deep Insight</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-lg font-light">
                    {item.longDescription}
                  </p>
                </section>

                <section className="p-8 bg-navy-dark rounded-3xl border border-white/5">
                  <h4 className="text-white font-bold mb-6">Client: {item.client}</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => {
                      onClose();
                      window.location.hash = 'contact';
                    }}
                    className="mt-8 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest text-[10px] rounded-xl transition-all flex items-center justify-center space-x-3"
                  >
                    <span>Achieve These Results</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
