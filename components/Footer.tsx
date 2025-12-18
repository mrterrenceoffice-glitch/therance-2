
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { ALL_SERVICES } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-darker pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="flex flex-col items-start">
            <div className="mb-8">
              <Logo />
            </div>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                <p>52 Wordsworth St, Dalpark, Brakpan, 1543</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <p>081-542-9766</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <p className="break-all">admin@therancegroup.co.za</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-8 text-white">Expertise</h4>
            <ul className="space-y-3">
              {ALL_SERVICES.map(service => (
                <li key={service.id}>
                  <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors text-xs font-bold uppercase tracking-widest">{service.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Insights */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-8 text-white">Insights</h4>
            <ul className="space-y-6">
              {[
                "The Future of Web 3.0 in Africa",
                "Conversion-First Design Strategies",
                "SEO for Modern Businesses"
              ].map((title, i) => (
                <li key={i}>
                  <a href="#" className="group block">
                    <span className="block text-[10px] text-gray-600 mb-1 uppercase font-bold tracking-[0.2em]">Strategy</span>
                    <span className="text-xs font-bold text-gray-400 group-hover:text-blue-400 transition-colors uppercase tracking-widest">{title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-8 text-white">Connect</h4>
            <div className="flex items-center space-x-4 mb-8">
              <Facebook className="w-5 h-5 text-gray-500 hover:text-blue-400 transition-colors cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-500 hover:text-pink-400 transition-colors cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-500 hover:text-blue-400 transition-colors cursor-pointer" />
            </div>
            <p className="text-[10px] text-gray-600 uppercase font-bold tracking-[0.2em] leading-loose">
              Pioneering digital excellence through creativity and technical mastery.
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-gray-600 text-[10px] font-bold uppercase tracking-[0.3em] gap-4">
          <p>© 2025 Therance Group Pty Ltd.</p>
          <div className="flex items-center space-x-6">
            <span className="text-blue-600/50">Modernizing Africa</span>
            <span>South Africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
