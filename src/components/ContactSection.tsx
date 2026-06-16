import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Clock, Send, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Bespoke Doors & Windows',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setFormStatus('error');
      setErrorMessage('Please fill in all requested fields (Name, Email, and Phone).');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setFormStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    // Success response simulation
    setFormStatus('success');
    setErrorMessage('');
  };

  return (
    <section id="contact" className="relative bg-[#080808] py-20 lg:py-28 overflow-hidden border-b-2 border-slate-900">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF3E00] bg-black px-4 py-1.5 rounded-none border-2 border-slate-900 font-mono">
            ESTIMATOR SUPPORT
          </span>
          <h2 className="mt-6 font-display text-4xl font-black uppercase tracking-tighter text-white sm:text-5xl italic leading-none">
            STRUCTURAL ESTIMATION
          </h2>
          <p className="mt-4 text-sm text-slate-400 leading-relaxed font-sans text-justify sm:text-center">
            Ready to start your premium glass installations or general contracting project in Cochin? Our estimating engineers will analyze your CAD drafts and calculate a customized cost layout.
          </p>
        </div>

        {/* Contact Split layout */}
        <div className="mt-16 grid gap-6 lg:grid-cols-12 items-start">
          
          {/* Left panel: Info & styled vector map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info cards group */}
            <div className="space-y-4">
              <div className="rounded-none border-2 border-slate-900 bg-black p-5 flex items-start space-x-4">
                <div className="rounded-none bg-[#FF3E00]/10 border-2 border-slate-900 p-2.5 text-[#FF3E00] shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-black uppercase tracking-tight text-white text-sm">Cochin Corporate Office</h4>
                  <p className="mt-1.5 text-xs text-slate-400 leading-relaxed font-sans">
                    Rainbow Hi-Fabs & Contractors,<br />
                    Door No. X/242, Near NH Bypass, Edappally,<br />
                    Cochin, Kerala - 682024
                  </p>
                </div>
              </div>

              <div className="rounded-none border-2 border-slate-900 bg-black p-5 flex items-start space-x-4">
                <div className="rounded-none bg-[#FF3E00]/10 border-2 border-slate-900 p-2.5 text-[#FF3E00] shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-black uppercase tracking-tight text-white text-sm">Hotlines & Estimators</h4>
                  <p className="mt-1.5 text-xs text-slate-450 font-mono leading-relaxed">
                    Engineering: +91 94470 33315<br />
                    Office Desk: +91 484 270 3315
                  </p>
                </div>
              </div>

              <div className="rounded-none border-2 border-slate-900 bg-black p-5 flex items-start space-x-4">
                <div className="rounded-none bg-[#FF3E00]/10 border-2 border-slate-900 p-2.5 text-[#FF3E00] shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-black uppercase tracking-tight text-white text-sm">Online Correspondence</h4>
                  <p className="mt-1.5 text-xs text-slate-450 font-sans leading-relaxed">
                    info@rainbowhifabs.com<br />
                    estimators@rainbowhifabs.com
                  </p>
                </div>
              </div>
            </div>

            {/* Cochin Map Locator Block */}
            <div className="rounded-none border-2 border-slate-900 bg-black p-6 relative overflow-hidden" id="cochin-map-card">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.1em] text-slate-500 font-bold flex items-center">
                  <Globe className="mr-1.5 h-3.5 w-3.5 text-[#FF3E00]" />
                  GEOGRAPHIC RADAR LOCATOR
                </span>
                <span className="inline-flex items-center rounded-none bg-emerald-500/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/20 font-mono">
                  <Clock className="mr-1 h-3 w-3" />
                  Active Desk
                </span>
              </div>

              {/* Styled map container simulating exact geographical pin */}
              <div className="relative rounded-none overflow-hidden bg-slate-950 border border-slate-900 h-44 flex items-center justify-center">
                {/* Simulated geographic map grid lines */}
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#FF3E00_1px,transparent_1px)] bg-[size:1rem_1rem]"></div>
                
                {/* Coastal boundaries abstraction vector representation */}
                <svg className="absolute inset-0 w-full h-full text-slate-800 opacity-25" fill="none" viewBox="0 0 400 200">
                  <path d="M10,20 Q100,50 80,100 T150,180 T250,140 T320,190" stroke="currentColor" strokeWidth="2" />
                  <path d="M50,10 L190,90 T290,50 L380,110" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                </svg>

                {/* Main office pointer with modern radar pulse animation */}
                <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center group">
                  <span className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-[#FF3E00] text-white text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-none shadow-lg opacity-90 block whitespace-nowrap">
                    EDAPPALLY NH BYPASS
                  </span>
                  
                  {/* Radar rings */}
                  <div className="relative flex h-8 w-8 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-[#FF3E00] opacity-35"></span>
                    <span className="relative inline-flex rounded-none h-3.5 w-3.5 bg-[#FF3E00] border-2 border-slate-950"></span>
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 text-[9px] text-slate-500 font-mono">
                  COORDINATES: 10.0261° N, 76.3084° E
                </div>
              </div>
            </div>

          </div>

          {/* Right panel: High fidelity form with simulated feedback validation */}
          <div className="lg:col-span-7" id="contact-form-container">
            <div className="rounded-none border-2 border-slate-900 bg-black p-6 sm:p-8">
              
              {formStatus === 'success' ? (
                <div className="text-center py-10" id="success-screen">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-none bg-emerald-500/10 border-2 border-slate-900 text-emerald-400">
                    <CheckCircle className="h-8 w-8 animate-bounce text-emerald-400" />
                  </div>
                  <h3 className="mt-6 text-xl font-display font-black uppercase text-white italic">Proposal Request Received!</h3>
                  <p className="mt-3 text-xs text-slate-400 max-w-md mx-auto leading-relaxed text-justify sm:text-center">
                    Thank you for reaching out, <span className="font-bold text-white">{formData.name}</span>. An estimating officer will contact you at <span className="text-[#FF3E00] font-bold">{formData.phone}</span> or <span className="text-white font-bold">{formData.email}</span> within 24 business hours to analyze your architectural drafts.
                  </p>
                  <button
                    onClick={() => {
                      setFormStatus('idle');
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'Bespoke Doors & Windows',
                        message: ''
                      });
                    }}
                    className="mt-8 rounded-none bg-[#0c0c0c] border-2 border-slate-900 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:text-[#FF3E00] hover:border-[#FF3E00] transition-all cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 font-mono">
                        Contact Name <span className="text-[#FF3E00]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Kailasnath T"
                        className="w-full rounded-none border-2 border-slate-900 bg-[#0c0c0c] px-4 py-3 text-xs font-bold text-white placeholder-slate-600 focus:border-[#FF3E00] focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 font-mono">
                        Inquiry Phone <span className="text-[#FF3E00]">*</span>
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 94470 33315"
                        className="w-full rounded-none border-2 border-slate-900 bg-[#0c0c0c] px-4 py-3 text-xs font-bold text-white placeholder-slate-600 focus:border-[#FF3E00] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 font-mono">
                      Email Address <span className="text-[#FF3E00]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="kailas@yahoo.com"
                      className="w-full rounded-none border-2 border-slate-900 bg-[#0c0c0c] px-4 py-3 text-xs font-bold text-white placeholder-slate-600 focus:border-[#FF3E00] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 font-mono">
                      Required Project Service <span className="text-[#FF3E00]">*</span>
                    </label>
                    <select
                      name="service"
                      id="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full rounded-none border-2 border-slate-900 bg-[#0c0c0c] px-4 py-3 text-xs font-bold text-white placeholder-slate-600 focus:border-[#FF3E00] focus:outline-none appearance-none"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23FF3E00'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundPosition: 'right 16px center', backgroundSize: '16px', backgroundRepeat: 'no-repeat' }}
                    >
                      <option className="bg-black text-white font-bold" value="Bespoke Doors & Windows">Aluminium System Doors & Windows</option>
                      <option className="bg-black text-white font-bold" value="Structural Glazing">System Structural Glazing</option>
                      <option className="bg-black text-white font-bold" value="ACP Facades">ACP Aluminium Claddings</option>
                      <option className="bg-black text-white font-bold" value="Structural steel truss">Heavy Steel space frames</option>
                      <option className="bg-black text-white font-bold" value="Other contracting">Inquiry on General Contracting</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 font-mono">
                      Inquiry descriptions or details (Optional)
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share estimated window dimensions, glass specifications, or blueprints..."
                      className="w-full rounded-none border-2 border-slate-900 bg-[#0c0c0c] px-4 py-3 text-xs font-bold text-white placeholder-slate-600 focus:border-[#FF3E00] focus:outline-none"
                    />
                  </div>

                  {formStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-none bg-red-500/10 border-2 border-red-500/20 p-4 flex items-start space-x-2.5 text-xs text-red-400 font-mono uppercase tracking-wider"
                    >
                      <AlertCircle className="h-5 w-5 shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center rounded-none bg-[#FF3E00] hover:bg-[#e03200] py-4 text-xs font-black uppercase tracking-widest text-white transition-colors cursor-pointer"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Submit Proposal Request
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
