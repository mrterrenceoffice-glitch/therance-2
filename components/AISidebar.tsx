
import React, { useState } from 'react';
import { MessageSquare, Send, X, Bot, Loader2, Zap, Terminal } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const AISidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setResponse(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = 'gemini-3-flash-preview';
      
      const result = await ai.models.generateContent({
        model,
        contents: `As an AI business consultant for Therance Group, a top South African digital agency, provide a bold, innovative marketing or business growth idea for the following request: ${prompt}. Keep it professional, creative, and action-oriented. Mention how Therance Group services like Web Design, SEO, or Business Registration can help.`,
        config: {
          systemInstruction: "You are the 'Therance Strategist'. Your tone is premium, visionary, and professional. You use industry terms and speak with authority on digital transformation. Output in clean markdown.",
          temperature: 0.9,
          topP: 0.95
        }
      });

      setResponse(result.text || "I'm having trouble connecting to the matrix. Please try again.");
    } catch (err) {
      console.error(err);
      setResponse("Our AI servers are recalibrating. Please reach out to our human team at admin@therancegroup.co.za");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 right-10 z-[70] w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-3xl shadow-blue-600/40 hover:scale-110 active:scale-95 transition-all group border border-blue-400/30 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-700 to-transparent opacity-50"></div>
        <Zap className="w-10 h-10 text-white group-hover:rotate-12 transition-transform relative z-10" />
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-4 border-navy-dark animate-ping"></div>
      </button>

      {/* Sidebar Panel */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[500px] bg-navy-darker/95 backdrop-blur-2xl border-l border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.5)] z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="p-10 h-full flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                <Terminal className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className="font-heading font-black text-2xl uppercase tracking-tighter">AI <span className="text-blue-500">STRATEGIST</span></h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-3 hover:bg-white/10 rounded-xl transition-colors border border-transparent hover:border-white/10">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto mb-10 space-y-8 pr-4 custom-scrollbar">
            <div className="p-6 bg-blue-600/5 border border-blue-500/20 rounded-3xl">
              <p className="text-sm text-gray-300 italic leading-relaxed">
                "Initializing strategist module... Protocol: Digital Domination. Input your business objective for a generated blueprint."
              </p>
            </div>

            {response && (
              <div className="p-8 bg-navy-dark border border-white/5 rounded-3xl animate-fade-in shadow-2xl">
                <div className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-6 border-b border-blue-500/10 pb-4 flex items-center">
                  <Zap className="w-3 h-3 mr-2" /> Strategic Output
                </div>
                <div className="text-sm leading-relaxed whitespace-pre-wrap text-gray-300 font-light prose prose-invert">
                  {response}
                </div>
              </div>
            )}
            
            {isLoading && (
              <div className="flex flex-col items-center justify-center py-20 bg-white/5 rounded-3xl border border-white/5">
                <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-6" />
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Querying Digital Matrix...</p>
              </div>
            )}
          </div>

          <form onSubmit={handleConsult} className="relative mt-auto">
            <input 
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. Scaling a Fintech startup in SA"
              className="w-full bg-navy-dark border border-white/10 rounded-2xl px-8 py-6 pr-20 text-sm focus:border-blue-500 focus:outline-none transition-all placeholder:text-gray-600"
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="absolute right-3 top-3 bottom-3 px-5 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:bg-blue-700 disabled:opacity-50 transition-colors shadow-lg"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          
          <div className="flex items-center justify-center space-x-4 mt-8">
             <div className="h-[1px] flex-grow bg-white/5"></div>
             <p className="text-[9px] text-gray-600 uppercase font-black tracking-[0.4em]">
                Therance Intelligence 2.0
             </p>
             <div className="h-[1px] flex-grow bg-white/5"></div>
          </div>
        </div>
      </div>
      
      {/* Overlay Backdrop */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-navy-darker/60 backdrop-blur-md z-[90] animate-fade-in"
        ></div>
      )}
    </>
  );
};

export default AISidebar;
