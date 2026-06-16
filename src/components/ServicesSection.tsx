import { useState } from 'react';
import { LayoutGrid, Construction, Building, Layout, Disc, X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Service } from '../types';

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      id: 'aluminum-solutions',
      title: 'Bespoke Aluminum Doors & Windows',
      description: 'Ultra-slim European system sliders, touch casements, and custom pivot doors constructed from certified premium 6063-T6 architectural grade aluminum.',
      icon: 'Window',
      benefits: [
        'Premium soundproofing insulation (up to 42 dB noise subtraction)',
        'Heavy-duty multi-point security locking systems included',
        'Custom track configurations (Dual, Triple, and Invisible track)',
        'Corrosion-resistant custom powder coatings with a 15-year guarantee'
      ]
    },
    {
      id: 'structural-glazing',
      title: 'Architectural Structural Glazing',
      description: 'Elegant curtain walls, spider glazed facades, and structurally bonded glasses that transform commercial offices into high-end modern landmarks.',
      icon: 'Building',
      benefits: [
        'Engineered to withstand extreme wind load structures (ideal for Kerala coast)',
        'Seamless smooth facade view (minimal frame visibility)',
        'Superior solar control and high thermal efficiency insulation glass',
        'Integrated drainage channels preventing moisture accumulation'
      ]
    },
    {
      id: 'heavy-fabrication',
      title: 'Large-scale Structural Fabrication',
      description: 'Heavy structural design, high-span steel trusses, space frames, and factory sheds designed with high-grade quality welding protocols.',
      icon: 'Construction',
      benefits: [
        'Engineered structural drafting prior to fabrication process',
        'Top-grade anti-corrosive primer & marine epoxy coating finishes',
        'Adherence to standard BIS high-safety contracting parameters',
        'Fast and safe site erection panels with micro-millimeter tolerance check'
      ]
    },
    {
      id: 'skylights-canopies',
      title: 'Glass Skylights & Structural Canopies',
      description: 'Sophisticated overhead glass canopies, suspended steel glass entry portals, and robust leakproof skylight frameworks.',
      icon: 'LayoutGrid',
      benefits: [
        'Laminated security glass layers preventing hazard shatter upon impact',
        '100% leakproof silicon bonding sealants specialized design',
        'UV reflecting coatings keeping workspace spaces cooler',
        'Heavy-duty stainless steel tension rods and custom spider fixtures'
      ]
    },
    {
      id: 'acp-cladding',
      title: 'Aluminum Composite Cladding (ACP)',
      description: 'Fascinating exterior aesthetics with premium ACP boards, custom architectural facades, and modern metallic finishes.',
      icon: 'Disc',
      benefits: [
        'Premium fire-retardant core board variants available',
        'Extreme durability resisting dust accumulation and Cochin monsoon downpours',
        'Sleek modern colors (Slate, Charcoal, Brushed Gold, Copper, Bronze)',
        'Lightweight cladding that doesn\'t strain core building structural frames'
      ]
    },
    {
      id: 'partitions-cabins',
      title: 'Glass Cabins & Premium Office Partitions',
      description: 'High-end acoustically optimized glass workspace cabins, luxury swing glass partitions, and slim modern internal partitions.',
      icon: 'Layout',
      benefits: [
        'Slim profile boundaries maximizing visual clarity and transparency',
        'Superior acoustic privacy with double glazed configurations',
        'Integrated glass manifest designs or frosted graphic patterns',
        'Soft-closing hydraulic sliding systems from top European brands'
      ]
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Window': return Layout; // Use Layout for Window representations cleanly
      case 'Building': return Building;
      case 'Construction': return Construction;
      case 'LayoutGrid': return LayoutGrid;
      case 'Disc': return Disc;
      default: return Layout;
    }
  };

  return (
    <section id="services" className="relative bg-[#0c0c0c] py-20 lg:py-28 overflow-hidden border-b-2 border-slate-900">
      {/* Absolute design grid boundaries */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-45"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF3E00] bg-black px-4 py-1.5 rounded-none border-2 border-slate-900 font-mono">
            OUR SERVICES
          </span>
          <h2 className="mt-6 font-display text-4xl font-black uppercase tracking-tighter text-white sm:text-5xl italic leading-none">
            SPECIFICATION FABRICATION
          </h2>
          <p className="mt-4 text-sm text-slate-400 leading-relaxed font-sans text-justify sm:text-center">
            From luxury structural system doors and windows in dynamic private villas to curtain glazing on sleek commercial skyscrapers, we provide Cochin’s highly recognized fabrication services.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedService(service)}
                className="group relative cursor-pointer overflow-hidden rounded-none border-2 border-slate-900 bg-black p-8 hover:border-[#FF3E00]/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex rounded-none bg-[#0c0c0c] border-2 border-slate-900 p-3 text-[#FF3E00] group-hover:bg-[#FF3E00] group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-lg font-black uppercase tracking-tight text-white group-hover:text-[#FF3E00] transition-colors italic">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-wider text-[#FF3E00] group-hover:text-white transition-all">
                  <span>Explore Specs & Benefits</span>
                  <span className="ml-1.5 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Details Lightbox Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl rounded-none border-2 border-slate-900 bg-[#080808] p-6 shadow-2xl z-10 md:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 rounded-none border-2 border-slate-900 bg-black p-2 text-slate-400 hover:text-white hover:border-[#FF3E00] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="inline-flex rounded-none bg-[#FF3E00]/10 border border-[#FF3E00]/30 p-2.5 text-[#FF3E00] mb-4">
                {(() => {
                  const Icon = getIcon(selectedService.icon);
                  return <Icon className="h-6 w-6" />;
                })()}
              </div>

              <h3 className="font-display text-2xl font-black uppercase text-white pr-8 italic">
                {selectedService.title}
              </h3>
              
              <p className="mt-4 text-xs text-slate-400 leading-normal text-justify">
                {selectedService.description}
              </p>

              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#FF3E00] mb-3 font-mono">
                  Execution Standards & Technical Specs:
                </h4>
                <ul className="space-y-2.5">
                  {selectedService.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start text-xs text-slate-300">
                      <span className="mr-2 text-[#FF3E00] font-bold">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Extra specifications meta block */}
              <div className="mt-6 pt-5 grid grid-cols-2 gap-4 border-t-2 border-slate-900 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                <div>
                  <span className="block text-slate-400 font-bold mb-0.5">Alloy Standard</span>
                  <span>AA 6063-T6 grade</span>
                </div>
                <div>
                  <span className="block text-slate-400 font-bold mb-0.5">Warranty</span>
                  <span>15 Years Structural Guarantee</span>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setSelectedService(null)}
                  className="rounded-none bg-[#FF3E00] hover:bg-[#e03200] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
