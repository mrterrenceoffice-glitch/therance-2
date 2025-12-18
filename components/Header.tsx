
import React, { useState } from 'react';
import { Menu, X, ChevronDown, Facebook, Instagram } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About Us', href: '#about' },
    { name: 'The Team', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const services = [
    'Graphic Design', 'Web Design', 'Social Media Marketing', 'SEO Services',
    'Web Development', 'Explainer Videos', 'LinkedIn Social Selling', 'Business Registration'
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-darker/95 backdrop-blur-md py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <a href="#" className="group flex items-center transition-transform hover:scale-105 active:scale-95">
          <Logo light={true} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.slice(0, 2).map((item) => (
            <a key={item.name} href={item.href} className="text-[10px] font-black hover:text-blue-400 transition-colors uppercase tracking-[0.25em]">{item.name}</a>
          ))}
          
          <div className="relative">
            <button 
              onMouseEnter={() => setServicesDropdownOpen(true)}
              className="flex items-center space-x-1 text-[10px] font-black hover:text-blue-400 transition-colors uppercase tracking-[0.25em]"
            >
              <span>Services</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            {servicesDropdownOpen && (
              <div 
                onMouseLeave={() => setServicesDropdownOpen(false)}
                className="absolute top-full left-0 w-64 bg-navy-darker border border-blue-900/50 mt-2 py-4 shadow-2xl rounded-2xl animate-fade-in"
              >
                {services.map((service) => (
                  <a key={service} href="#" className="block px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:bg-blue-600/20 transition-all">
                    {service}
                  </a>
                ))}
              </div>
            )}
          </div>

          {navItems.slice(2).map((item) => (
            <a key={item.name} href={item.href} className="text-[10px] font-black hover:text-blue-400 transition-colors uppercase tracking-[0.25em]">{item.name}</a>
          ))}
        </nav>

        {/* CTA Section */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center space-x-4 text-gray-500">
            <Facebook className="w-4 h-4 hover:text-blue-400 cursor-pointer transition-colors" />
            <Instagram className="w-4 h-4 hover:text-pink-400 cursor-pointer transition-colors" />
          </div>
          <a href="#contact" className="px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full transition-all hover:scale-105 shadow-xl shadow-blue-600/30">
            Start Project
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-navy-dark z-[60] transition-transform duration-500 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-12">
             <Logo />
             <button onClick={() => setMobileMenuOpen(false)}><X className="w-8 h-8 text-blue-500" /></button>
          </div>
          <div className="flex flex-col space-y-8 flex-grow">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-4xl font-black uppercase tracking-tighter hover:text-blue-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                {item.name}
              </a>
            ))}
          </div>
          <div className="pt-8 border-t border-white/10">
            <a href="#contact" className="block w-full py-5 bg-blue-600 text-center rounded-2xl font-black uppercase tracking-[0.2em]" onClick={() => setMobileMenuOpen(false)}>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
