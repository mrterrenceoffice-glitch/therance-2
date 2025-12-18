
import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

// The specific Google Apps Script Web App URL provided by the user
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyVshfF6NaGgGSZFKGLXibqMdBTxJe6NCWcEYz07n2GrpK5ETeiA01AGselva64XQXpbA/exec';

const CTASection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    cell: '',
    email: '',
    time: 'Morning (08:00 - 12:00)'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      /**
       * IMPORTANT FOR GOOGLE APPS SCRIPT:
       * We use 'mode: no-cors' and 'Content-Type: text/plain' to avoid CORS pre-flight errors.
       * The Apps Script 'doPost(e)' function can still parse this via JSON.parse(e.postData.contents).
       */
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
      });
      
      // With no-cors, we won't get a readable response, but if fetch doesn't throw,
      // it means the request was successfully sent to the Google servers.
      setSubmitted(true);
      setFormData({
        name: '',
        cell: '',
        email: '',
        time: 'Morning (08:00 - 12:00)'
      });
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Network error. Please check your internet connection or contact us at admin@therancegroup.co.za');
    } finally {
      setIsSending(false);
      // Auto-hide success message
      setTimeout(() => {
        if (submitted) setSubmitted(false);
      }, 8000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-navy-darker relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Text */}
            <div>
              <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8 leading-tight">
                Ready to <br />
                <span className="text-blue-500">Scale Up?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 font-light leading-relaxed">
                Take the first step towards digital dominance. Fill out the form, and our lead strategist will reach out to schedule your free consultation.
              </p>
              
              <div className="space-y-6">
                {[
                  "Free Business Health Audit",
                  "Custom Growth Strategy",
                  "Direct Access to Our Lead Developers"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-gray-300">
                    <CheckCircle2 className="w-6 h-6 text-blue-500" />
                    <span className="font-bold uppercase tracking-widest text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-navy-dark p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4 font-heading text-white">Message Received!</h4>
                  <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">Data successfully synced to our servers.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-blue-500 text-[10px] font-black uppercase tracking-widest hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-2">Full Name & Surname</label>
                    <input 
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-navy-darker border border-white/10 rounded-xl px-6 py-4 focus:border-blue-500 focus:outline-none transition-colors text-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-2">Cell Number</label>
                      <input 
                        required
                        name="cell"
                        value={formData.cell}
                        onChange={handleChange}
                        type="tel" 
                        placeholder="+27 81 123 4567"
                        className="w-full bg-navy-darker border border-white/10 rounded-xl px-6 py-4 focus:border-blue-500 focus:outline-none transition-colors text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-2">Email Address</label>
                      <input 
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email" 
                        placeholder="john@business.com"
                        className="w-full bg-navy-darker border border-white/10 rounded-xl px-6 py-4 focus:border-blue-500 focus:outline-none transition-colors text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-2">Preferable Time for Call</label>
                    <select 
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-navy-darker border border-white/10 rounded-xl px-6 py-4 focus:border-blue-500 focus:outline-none transition-colors text-white appearance-none cursor-pointer"
                    >
                      <option className="bg-navy-dark">Morning (08:00 - 12:00)</option>
                      <option className="bg-navy-dark">Afternoon (12:00 - 17:00)</option>
                      <option className="bg-navy-dark">Evening (After 17:00)</option>
                      <option className="bg-navy-dark">Anytime</option>
                    </select>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSending}
                    className="group w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-[0.3em] rounded-xl transition-all flex items-center justify-center space-x-3 shadow-xl shadow-blue-600/20 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin text-blue-200" />
                        <span className="text-blue-200">Syncing to Matrix...</span>
                      </>
                    ) : (
                      <>
                        <span className="text-blue-50">Launch Strategy</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
