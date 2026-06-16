import React, { useState } from 'react';
import { Mail, ArrowRight, ShieldAlert, Globe, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribedEmail.trim() && /^\S+@\S+\.\S+$/.test(subscribedEmail)) {
      setSubscribeSuccess(true);
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <footer className="bg-black border-t-2 border-slate-900 text-slate-400 font-sans">
      
      {/* Top Footer widget */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-12">
          
          {/* Column 1: Brand details */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-display font-black text-2xl text-white tracking-tighter uppercase italic leading-none">
              <span className="text-[#FF3E00]">RAINBOW</span> HIFABS
            </span>
            <p className="text-xs leading-relaxed text-slate-500 max-w-sm text-justify">
              Premier contract installers, fabricators, and structural glazing experts delivering exceptional aluminum doors, system sliding windows, and space frames across South India since 1999.
            </p>
            <div className="flex space-x-2 pt-2">
              <button 
                onClick={() => alert('Simulated external social routing: Opening Rainbow Telegram Desk')}
                className="h-9 w-9 rounded-none border-2 border-slate-900 bg-black hover:border-[#FF3E00] hover:text-white transition-all flex items-center justify-center text-xs text-slate-400 cursor-pointer"
                title="Telegram Support"
              >
                <MessageSquare className="h-4 w-4" />
              </button>
              <button 
                onClick={() => alert('Simulated external social routing: Opening Rainbow LinkedIn Page')}
                className="h-9 w-9 rounded-none border-2 border-slate-900 bg-black hover:border-[#FF3E00] hover:text-white transition-all flex items-center justify-center text-xs text-slate-400 cursor-pointer"
                title="LinkedIn Portfolio"
              >
                <Globe className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-black uppercase tracking-widest text-white text-xs italic">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-bold uppercase tracking-wider">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => onNavigate(item.toLowerCase())}
                  className="text-left text-slate-500 hover:text-[#FF3E00] transition-colors py-0.5 cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Newsletter container */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display font-black uppercase tracking-widest text-white text-xs italic">TECHNICAL BRIEFING</h4>
            <p className="text-xs text-slate-500 text-justify">
              Subscribe to receive estimate updates, pricing guides, and details on new European system window releases.
            </p>
            {subscribeSuccess ? (
              <span className="block text-xs font-mono text-emerald-500 bg-emerald-500/5 border-2 border-slate-900 p-2.5 rounded-none uppercase tracking-wider">
                ✓ Enrolled! High-fidelity insights will be sent to {subscribedEmail}.
              </span>
            ) : (
              <form onSubmit={handleSubscribe} className="flex space-x-2">
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={subscribedEmail}
                  onChange={(e) => setSubscribedEmail(e.target.value)}
                  className="rounded-none border-2 border-slate-900 bg-[#0c0c0c] px-3 py-2.5 text-xs text-white placeholder-slate-600 focus:border-[#FF3E00] focus:outline-none grow font-bold"
                />
                <button
                  type="submit"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-none bg-[#FF3E00] text-white hover:bg-[#e03200] transition-colors shadow cursor-pointer font-bold shrink-0"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom copyright section */}
        <div className="border-t-2 border-slate-900 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-4 uppercase font-mono tracking-widest">
          <p>© 2026 Rainbow Hifabs. Registered Contractor Cochin India.</p>
          <div className="flex items-center space-x-1.5 text-[9px] text-slate-700">
            <ShieldAlert className="h-3.5 w-3.5 text-[#FF3E00]" />
            <span>ISO 9001:2015 Glazing Certified Code</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
