
import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const SocialSection: React.FC = () => {
  const socials = [
    { name: 'Facebook', label: 'Join the Conversation', icon: Facebook, color: 'bg-[#1877F2]' },
    { name: 'X (Twitter)', label: 'Follow Us on X', icon: Twitter, color: 'bg-black border border-white/20' },
    { name: 'Instagram', label: 'Join Our Circle', icon: Instagram, color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]' },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.2em] mb-4">Connect With Us</h2>
        <h3 className="text-4xl md:text-5xl font-bold font-heading mb-12">Follow Our Digital Journey</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {socials.map((social) => (
            <a 
              key={social.name} 
              href="#" 
              className="group p-8 bg-navy-darker border border-white/5 rounded-3xl flex flex-col items-center justify-center transition-all duration-500 hover:border-blue-500/50 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${social.color} rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:rotate-12 transition-transform duration-500 shadow-xl`}>
                <social.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-2 uppercase tracking-widest">{social.name}</h4>
              <p className="text-gray-500 text-sm group-hover:text-blue-400 transition-colors">{social.label}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
