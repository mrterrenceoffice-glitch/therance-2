
import React from 'react';
import { Users, Target, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-navy-darker overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/team1/400/500" alt="Team Work" className="rounded-2xl shadow-2xl" />
                <div className="p-6 bg-blue-600 rounded-2xl text-center">
                  <span className="block text-3xl font-bold mb-1">5+</span>
                  <span className="text-xs uppercase font-bold tracking-widest">Years Exp</span>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="p-6 bg-navy-dark border border-white/10 rounded-2xl text-center">
                  <span className="block text-3xl font-bold mb-1 text-blue-400">250+</span>
                  <span className="text-xs uppercase font-bold tracking-widest">Projects</span>
                </div>
                <img src="https://picsum.photos/seed/team2/400/500" alt="Design Lab" className="rounded-2xl shadow-2xl" />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.2em] mb-4">This is Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-heading mb-8">Digital Mastery Meets Business Innovation</h3>
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>
                At Therance Group, we don't just provide services; we craft digital legends. Our philosophy is rooted in the belief that every brand has a unique story waiting to be told through the lens of modern technology and creative mastery.
              </p>
              <p>
                We blend technical precision with artistic flair to build brands that don't just exist—they dominate. From the initial conceptualization to final deployment and scaling, our team is dedicated to your digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-600/10 rounded-xl text-blue-500">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Our Mission</h4>
                  <p className="text-sm text-gray-500">To empower businesses through disruptive digital solutions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-600/10 rounded-xl text-blue-500">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Our Values</h4>
                  <p className="text-sm text-gray-500">Integrity, innovation, and absolute creative freedom.</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="inline-block mt-12 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest rounded-full transition-all">
              Meet The Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
