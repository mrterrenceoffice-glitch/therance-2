import React, { useState, useRef } from 'react';
import { ArrowRight, Sparkles, ChevronRight } from 'lucide-react';

const ParallaxButton: React.FC<{
  children: React.ReactNode;
  className: string;
  href: string;
  primary?: boolean;
}> = ({ children, className, href, primary }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * -12;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <a
      ref={buttonRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${rotate.x === 0 && rotate.y === 0 ? 1 : 1.05})`,
        transition: 'transform 0.15s cubic-bezier(0.23, 1, 0.32, 1)',
      }}
      className={`${className} perspective-1000 will-change-transform`}
    >
      {children}
      {primary && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      )}
    </a>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-56 lg:pb-48 overflow-hidden bg-[#000c1a]">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none opacity-40"></div>
      <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none opacity-40"></div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-5 py-2 mb-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] animate-fade-in shadow-xl">
            <Sparkles className="w-3 h-3" />
            <span>Pioneering Digital Mastery</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-black leading-[0.85] mb-12 tracking-[-0.05em] font-heading drop-shadow-2xl text-white">
            Digital<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-700 animate-gradient-x">Legends.</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-400 max-w-3xl mb-16 font-light leading-tight tracking-tight">
            We architect <span className="text-white font-medium">unforgettable digital narratives</span>. From bespoke engineering to market domination, your vision is our mission.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-24">
            <ParallaxButton 
              href="#contact" 
              primary 
              className="group relative w-full sm:w-auto px-12 py-6 bg-blue-600 text-white font-black uppercase tracking-widest rounded-full flex items-center justify-center space-x-3 shadow-2xl shadow-blue-600/40"
            >
              <span>Book a free consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </ParallaxButton>

            <ParallaxButton 
              href="#portfolio" 
              className="group w-full sm:w-auto px-12 py-6 bg-white/5 text-white font-black uppercase tracking-widest rounded-full border border-white/10 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>Review Our Excellence</span>
              <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </ParallaxButton>
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