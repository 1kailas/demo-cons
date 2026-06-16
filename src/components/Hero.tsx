import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Layers, Sliders, ArrowRight, CheckCircle, Calculator, Eye } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  // Configurator States
  const [profileColor, setProfileColor] = useState<'charcoal' | 'gold' | 'silver' | 'white'>('charcoal');
  const [glassType, setGlassType] = useState<'clear' | 'blue' | 'frosted' | 'gray'>('blue');
  const [style, setStyle] = useState<'sliding' | 'casement'>('sliding');
  const [width, setWidth] = useState(2.4); // meters
  const [height, setHeight] = useState(2.1); // meters
  const [isOpen, setIsOpen] = useState(true);

  // Estimate calculations based on standard high-end Kerala contractor quotes
  const colorCosts = { charcoal: 1400, gold: 1800, silver: 1100, white: 1100 };
  const glassCosts = { clear: 600, blue: 950, frosted: 800, gray: 850 };
  const styleMultipliers = { sliding: 1.0, casement: 1.25 };

  const calculateEstimate = () => {
    const area = width * height;
    const baseCostRate = colorCosts[profileColor] + glassCosts[glassType];
    const totalRaw = area * baseCostRate * styleMultipliers[style];
    return Math.round(totalRaw);
  };

  const getGlassColorClass = () => {
    switch (glassType) {
      case 'blue': return 'bg-sky-500/25 border-sky-400/40 text-sky-200';
      case 'frosted': return 'bg-slate-100/15 border-slate-200/20 text-slate-100';
      case 'gray': return 'bg-slate-800/45 border-slate-700/40 text-slate-350';
      default: return 'bg-slate-200/5 border-slate-300/10 text-slate-300';
    }
  };

  const getProfileColorClass = () => {
    switch (profileColor) {
      case 'gold': return 'border-amber-400 bg-amber-500/20';
      case 'silver': return 'border-slate-300 bg-slate-200/30';
      case 'white': return 'border-white bg-slate-50';
      default: return 'border-slate-800 bg-slate-900';
    }
  };

  return (
    <section className="relative min-h-[92vh] bg-[#0c0c0c] flex items-center justify-center py-16 lg:py-24 overflow-hidden border-b-2 border-slate-900" id="hero-section">
      {/* Immersive background image / gradient cover directly resembling original post-lobby poster */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')` }}
      />
      <div className="absolute inset-0 bg-[#0c0c0c]/90 pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* Left Block: Bold branding headlines */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 rounded-none bg-black border-2 border-slate-900 px-4 py-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-[#FF3E00] backdrop-blur-sm"
            >
              <Sparkles className="h-4.5 w-4.5 text-[#FF3E00] animate-pulse" />
              <span>AA 6063-T6 STRUCTURAL ALU SPEC</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl font-black tracking-tighter text-white sm:text-6xl lg:text-7xl leading-[0.95] uppercase italic"
            >
              LEADERS IN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3E00] via-orange-500 to-[#FF3E00]">
                QUALITY FABRICATION
              </span> <br />
              AND GLAZING
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-sans tracking-tight text-slate-400 max-w-lg leading-relaxed text-justify"
            >
              For over two decades, Rainbow Hifabs has executed premier engineering, bespoke aluminum fabrication, and modern structural glazing installations throughout Cochin.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center space-x-3 rounded-none bg-[#FF3E00] hover:bg-[#e03200] px-8 py-4 text-xs font-black uppercase tracking-wider text-white transition-all shadow-xl cursor-pointer"
              >
                <span>EXPLORE PORTFOLIOS</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center space-x-3 rounded-none bg-black hover:bg-slate-950 px-8 py-4 text-xs font-black uppercase tracking-wider text-white transition-all border-2 border-slate-900 cursor-pointer"
              >
                <span>REQUEST QUOTE</span>
              </button>
            </motion.div>
          </div>

          {/* Right Block: Live Window Configurator (Extremely High Craftsmanship) */}
          <div className="lg:col-span-6" id="window-configurator-card">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 }}
              className="rounded-none border-2 border-slate-900 bg-black p-6 sm:p-8 shadow-2xl relative"
            >
              <div className="absolute top-0 right-10 w-24 h-1 bg-[#FF3E00]"></div>
              
              <div className="flex justify-between items-center mb-6 border-b-2 border-slate-900 pb-4">
                <div>
                  <h3 className="font-display text-lg font-black uppercase italic text-white flex items-center">
                    <Sliders className="h-4 w-4 mr-2 text-[#FF3E00]" />
                    Interactive Blueprint Configurator
                  </h3>
                  <p className="text-[10px] font-mono text-slate-500 uppercase mt-1">Design in real-time according to Cochin contracting standards.</p>
                </div>
                <span className="text-[9px] font-mono text-[#FF3E00] bg-[#FF3E00]/10 px-2.5 py-1 border border-[#FF3E00]/30 font-bold uppercase tracking-wider">
                  ESTIMATOR V1.2
                </span>
              </div>

              {/* Grid split */}
              <div className="grid gap-6 sm:grid-cols-2">
                
                {/* Visual Preview Section */}
                <div className="space-y-4">
                  <div className="text-[10px] font-bold text-slate-500 font-mono uppercase tracking-wider flex items-center justify-between">
                    <span>DYNAMIC BLUEPRINT</span>
                    <button 
                      onClick={() => setIsOpen(!isOpen)}
                      className="text-[#FF3E00] hover:underline hover:text-[#e03200]"
                    >
                      {isOpen ? 'Close Slider' : 'Slide Open'}
                    </button>
                  </div>

                  {/* Fully reactive frame vector simulator */}
                  <div className="aspect-[5/6] bg-slate-950 border-2 border-slate-900 rounded-none relative flex items-center justify-center p-6 overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FF3E00_1px,transparent_1px)] bg-[size:10px_10px]" />
                    
                    {/* Outer frame */}
                    <div 
                      className={`relative rounded-none border-6 shadow-2xl flex transition-all ${getProfileColorClass()}`}
                      style={{ 
                        width: '85%', 
                        height: '85%',
                        borderWidth: '8px'
                      }}
                    >
                      {/* Left Panel Glass */}
                      <div className={`w-1/2 h-full border-r-2 border-slate-900 transition-all flex items-center justify-center text-center p-2 relative ${getGlassColorClass()}`}>
                        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                        <span className="text-[8px] font-mono opacity-25 uppercase tracking-wider truncate">Fixed Frame</span>
                      </div>

                      {/* Right sliding panel glass (sliding open animation) */}
                      <motion.div 
                        initial={false}
                        animate={{ x: isOpen ? '90%' : '0%' }}
                        transition={{ type: 'spring', stiffness: 220, damping: 25 }}
                        className={`w-1/2 h-full absolute right-0 inset-y-0 border-l border-[#080808] transition-all shadow-lg flex items-center justify-center text-center p-2 z-10 ${getGlassColorClass()}`}
                        style={{ borderLeftWidth: '3px' }}
                      >
                        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                        <span className="text-[8px] font-mono opacity-25 uppercase tracking-wider truncate">Slider</span>
                      </motion.div>

                      {/* Sliding indicator */}
                      <div className="absolute bottom-1 right-2 z-20 flex space-x-1 items-center">
                        <span className="w-1.5 h-1.5 rounded-none bg-emerald-500 animate-pulse"></span>
                        <span className="text-[7px] text-slate-500 font-mono uppercase">WATERTIGHT</span>
                      </div>
                    </div>

                    {/* Quick dimension badge overlay */}
                    <div className="absolute bottom-1.5 left-2 text-[8px] font-mono text-slate-500 tracking-wide uppercase">
                      DIM: {width.toFixed(1)}M × {height.toFixed(1)}M
                    </div>
                  </div>
                </div>

                {/* Configurations parameters controls */}
                <div className="space-y-4">
                  {/* Select profile color */}
                  <div>
                    <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono mb-2 flex items-center">
                      <Layers className="h-3 w-3 mr-1 text-[#FF3E00]" /> Frame Profile
                    </span>
                    <div className="grid grid-cols-2 gap-1.5">
                      {(['charcoal', 'gold', 'silver', 'white'] as const).map(color => (
                        <button
                          key={color}
                          onClick={() => setProfileColor(color)}
                          className={`rounded-none py-1.5 px-1.5 text-[9px] font-bold border-2 capitalize transition-all cursor-pointer truncate ${
                            profileColor === color 
                              ? 'bg-slate-950 border-[#FF3E00] text-[#FF3E00]' 
                              : 'bg-black border-slate-900 text-slate-400 hover:text-white'
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Select Glass finish */}
                  <div>
                    <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono mb-2 flex items-center">
                      <Layers className="h-3 w-3 mr-1 text-[#FF3E00]" /> Architectural Glass
                    </span>
                    <div className="grid grid-cols-2 gap-1.5">
                      {(['clear', 'blue', 'frosted', 'gray'] as const).map(glass => (
                        <button
                          key={glass}
                          onClick={() => setGlassType(glass)}
                          className={`rounded-none py-1.5 px-2 text-[9px] font-bold border-2 capitalize transition-all cursor-pointer truncate ${
                            glassType === glass 
                              ? 'bg-slate-950 border-[#FF3E00] text-[#FF3E00]' 
                              : 'bg-black border-slate-900 text-slate-400 hover:text-white'
                          }`}
                        >
                          {glass === 'blue' ? 'Reflective Blue' : glass === 'gray' ? 'Smoky Gray' : glass}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Adjust dimension Width range */}
                  <div>
                    <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 select-none pb-1">
                      <span>WIDTH DIMENSION</span>
                      <span className="text-[#FF3E00] font-bold">{width} METERS</span>
                    </div>
                    <input
                      type="range"
                      min={1.2}
                      max={4.5}
                      step={0.1}
                      value={width}
                      onChange={(e) => setWidth(parseFloat(e.target.value))}
                      className="w-full accent-[#FF3E00] cursor-pointer"
                    />
                  </div>

                  {/* Adjust dimension Height range */}
                  <div>
                    <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 select-none pb-1">
                      <span>HEIGHT DIMENSION</span>
                      <span className="text-[#FF3E00] font-bold">{height} METERS</span>
                    </div>
                    <input
                      type="range"
                      min={1.2}
                      max={3.5}
                      step={0.1}
                      value={height}
                      onChange={(e) => setHeight(parseFloat(e.target.value))}
                      className="w-full accent-[#FF3E00] cursor-pointer"
                    />
                  </div>

                  {/* Choose System Style */}
                  <div>
                    <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono mb-2">
                      MECHANISM STYLE
                    </span>
                    <div className="grid grid-cols-2 gap-1.5">
                      <button
                        onClick={() => setStyle('sliding')}
                        className={`rounded-none py-1.5 text-[9px] font-bold border-2 transition-all cursor-pointer uppercase tracking-wider ${
                          style === 'sliding' 
                            ? 'bg-slate-950 border-[#FF3E00] text-[#FF3E00]' 
                            : 'bg-black border-slate-900 text-slate-450 hover:text-white'
                        }`}
                      >
                        Slim slider
                      </button>
                      <button
                        onClick={() => setStyle('casement')}
                        className={`rounded-none py-1.5 text-[9px] font-bold border-2 transition-all cursor-pointer uppercase tracking-wider ${
                          style === 'casement' 
                            ? 'bg-slate-950 border-[#FF3E00] text-[#FF3E00]' 
                            : 'bg-black border-slate-900 text-slate-450 hover:text-white'
                        }`}
                      >
                        Casement
                      </button>
                    </div>
                  </div>

                </div>

              </div>

              {/* Estimate Calculations display */}
              <div className="mt-8 border-t-2 border-slate-900 pt-5 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono text-slate-500 uppercase block tracking-widest">ESTIMATION BLUEPRINT</span>
                  <div className="flex items-baseline space-x-1.5 mt-1">
                    <span className="font-mono text-3xl font-black text-white">
                      ₹{calculateEstimate().toLocaleString('en-IN')}
                    </span>
                    <span className="text-[9px] text-slate-500 font-mono tracking-widest uppercase">per unit avg.</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    alert(`Your customizable design summary detail:\nStyle: ${style === 'sliding' ? 'Minimal slider' : 'System casement'}\nWidth: ${width}m | Height: ${height}m\nProfile: ${profileColor} | Glass: ${glassType}\nAvg Estimate: ₹${calculateEstimate().toLocaleString('en-IN')}\n\nWe will prepulate your contact sheet details with this cost breakdown automatically.`);
                    onNavigate('contact');
                  }}
                  className="inline-flex items-center space-x-2 rounded-none bg-[#FF3E00] hover:bg-[#e03200] px-5 py-3.5 text-xs font-black uppercase text-white tracking-wider cursor-pointer"
                >
                  <Calculator className="h-4.5 w-4.5" />
                  <span>Configure Design</span>
                </button>
              </div>

              {/* Terns disclosure */}
              <p className="text-[9px] text-slate-500 mt-4 leading-relaxed font-mono uppercase text-center">
                *Approximate evaluation. Actual costs depend on security handles, windload grades, and custom tracking depth.
              </p>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
