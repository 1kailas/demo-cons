import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Calendar, MapPin, Layers, Settings, X, Palette, Activity } from 'lucide-react';
import { Project } from '../types';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'systems' | 'glazing' | 'industrial'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'marriott-casements',
      title: 'Premium Aluminium System Casements',
      category: 'systems',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      location: 'Marine Drive, Cochin',
      year: '2024',
      description: 'Custom minimal profile system casement layout for a premium waterfront high-rise collection. Engineered with extreme moisture sealing barriers to protect against saltwater spray and high sea winds.',
      specs: {
        systemType: 'Minimal sliding system',
        profileColor: 'Champagne Gold Powder Coat',
        glassSpec: '12mm double-toughened acoustic glass'
      }
    },
    {
      id: 'villa-glass',
      title: 'Bespoke Luxury Villa Glazing',
      category: 'systems',
      imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      location: 'Kakkanad, Cochin',
      year: '2023',
      description: 'Sleek luxury villa with 3.2-meter tall sliding glass panels. Dual invisible floor tracks were embedded flush with the premium marble floor to create an integrated indoor-outdoor living flow.',
      specs: {
        systemType: 'Invisible flush floor tracking sliding',
        profileColor: 'Midnight Charcoal Matte Anodized',
        glassSpec: '6mm Clear + 12Argon + 6mm Low-E reflective'
      }
    },
    {
      id: 'infopark-facade',
      title: 'Spider-bonded Glazing System',
      category: 'glazing',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      location: 'Infopark Phase II, Kakkanad',
      year: '2022',
      description: 'Structural spider fitting panels containing double-glazed monolithic panels. This serves as the lobby facade with integrated structural steel back-support structures.',
      specs: {
        systemType: 'Facade Spider fitting',
        profileColor: 'Anodized Silver brackets',
        glassSpec: '15mm monolithic clear toughened'
      }
    },
    {
      id: 'gold-acp-atrium',
      title: 'ACP Cladding & Curtain Atrium',
      category: 'glazing',
      imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      location: 'Edappally, Kochi',
      year: '2023',
      description: 'Modern commercial atrium utilizing custom-profile metallic copper gold ACP panels paired with high-performance curtain glazed frames.',
      specs: {
        systemType: 'Architectural ACP & structural curtain walls',
        profileColor: 'Metallic Brushed Bronze Cladding',
        glassSpec: '8mm Reflective Emerald Sun-blocking'
      }
    },
    {
      id: 'industrial-shed',
      title: 'Heavy Structural Steel Space Frame',
      category: 'industrial',
      imageUrl: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=800&q=80',
      location: 'Kalamassery Industrial Area, Cochin',
      year: '2021',
      description: 'Heavy architectural steel truss framework, featuring wide-span steel support brackets designed specifically for heavy equipment handling warehouses.',
      specs: {
        systemType: 'Heavy structural truss & space framing',
        profileColor: 'Zinc-phosphate anti-corrosion gray epoxy',
        glassSpec: 'None (Polycarbonate Skylights integrated)'
      }
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="bg-[#080808] py-20 lg:py-28 text-white relative border-b-2 border-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-slate-900 pb-12">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF3E00] bg-black px-4 py-1.5 rounded-none border-2 border-slate-900 font-mono">
              COMPLETED PORTFOLIOS
            </span>
            <h2 className="mt-6 font-display text-4xl font-black uppercase tracking-tighter text-white sm:text-5xl italic leading-none">
              MONUMENTAL STRUCTURAL WORKS
            </h2>
          </div>
          
          {/* Quick Filter Tabs */}
          <div className="mt-8 md:mt-0 flex flex-wrap gap-2">
            {(['all', 'systems', 'glazing', 'industrial'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-none px-5 py-2.5 text-xs font-bold uppercase tracking-wider border-2 transition-all cursor-pointer ${
                  activeFilter === filter 
                    ? 'bg-[#FF3E00] text-white border-[#FF3E00]' 
                    : 'bg-black text-slate-400 hover:text-white border-slate-900'
                }`}
              >
                {filter === 'systems' ? 'Doors & Windows' : filter === 'glazing' ? 'Glazing / ACP' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolios Gallery Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer overflow-hidden rounded-none border-2 border-slate-900 bg-black p-5 hover:border-[#FF3E00]/60 transition-all flex flex-col justify-between"
              >
                {/* Visual Thumbnail */}
                <div className="relative aspect-16/10 overflow-hidden rounded-none border border-slate-900 bg-slate-950">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3E00]">SPECIFICATIONS SHEET →</span>
                  </div>
                </div>

                {/* Info block */}
                <div className="mt-5">
                  <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-slate-500">
                    <MapPin className="h-3.5 w-3.5 text-[#FF3E00]" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-black uppercase tracking-tight text-white group-hover:text-[#FF3E00] transition-colors line-clamp-1 italic">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Specs Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xs"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-lg border-l-2 border-slate-900 bg-black p-6 md:p-8 shadow-2xl h-full overflow-y-auto z-10 flex flex-col justify-between"
            >
              <div>
                {/* Close Trigger */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#FF3E00] font-bold">TECHNICAL SUMMARY SHEET</span>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="rounded-none border-2 border-slate-900 bg-[#0c0c0c] p-2 text-slate-450 hover:text-white hover:border-[#FF3E00] transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Big Preview Image */}
                <div className="rounded-none border border-slate-900 overflow-hidden aspect-16/9 bg-slate-900 mb-6">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-display text-2xl font-black uppercase text-white italic">
                  {selectedProject.title}
                </h3>
                
                <p className="mt-3 text-xs text-slate-450 leading-relaxed text-justify">
                  {selectedProject.description}
                </p>

                {/* Specifications Grid */}
                <div className="mt-8 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#FF3E00] border-b-2 border-slate-900 pb-2 flex items-center font-mono">
                    <Settings className="h-4 w-4 mr-2" />
                    Engineering Specifications
                  </h4>
                  
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="bg-[#0c0c0c] border-2 border-slate-900 p-4 rounded-none flex items-start space-x-2.5">
                      <Layers className="h-4.5 w-4.5 text-[#FF3E00] shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-[8px] uppercase text-slate-500 font-mono tracking-wider">System Type</span>
                        <span className="text-xs font-bold text-white">{selectedProject.specs.systemType}</span>
                      </div>
                    </div>
                    
                    <div className="bg-[#0c0c0c] border-2 border-slate-900 p-4 rounded-none flex items-start space-x-2.5">
                      <Palette className="h-4.5 w-4.5 text-[#FF3E00] shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-[8px] uppercase text-slate-500 font-mono tracking-wider">Profile Finish</span>
                        <span className="text-xs font-bold text-white">{selectedProject.specs.profileColor}</span>
                      </div>
                    </div>

                    <div className="bg-[#0c0c0c] border-2 border-slate-900 p-4 rounded-none flex items-start space-x-2.5 sm:col-span-2">
                      <Activity className="h-4.5 w-4.5 text-[#FF3E00] shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-[8px] uppercase text-slate-500 font-mono tracking-wider">Architectural Glass Spec</span>
                        <span className="text-xs font-bold text-white">{selectedProject.specs.glassSpec}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Meta details */}
                <div className="mt-8 grid grid-cols-2 gap-4 border-t-2 border-slate-900 pt-6 text-xs text-slate-400 uppercase font-mono tracking-widest">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-[#FF3E00]" />
                    <span>{selectedProject.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-[#FF3E00]" />
                    <span>Completed {selectedProject.year}</span>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full rounded-none bg-[#FF3E00] hover:bg-[#e03200] py-4 text-xs font-black uppercase tracking-widest text-white transition-colors cursor-pointer text-center block"
                >
                  Close Specification View
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
