import { ShieldCheck, Award, Zap, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutSection() {
  const metrics = [
    { id: 'm1', value: '25+', label: 'Years of Excellence', icon: Award, color: 'text-[#FF3E00]' },
    { id: 'm2', value: '1,500+', label: 'Projects Completed', icon: ShieldCheck, color: 'text-[#FF3E00]' },
    { id: 'm3', value: '45+', label: 'Certified Fabricators', icon: Users, color: 'text-[#FF3E00]' },
    { id: 'm4', value: '100%', label: 'Quality Guarantee', icon: Zap, color: 'text-[#FF3E00]' },
  ];

  const highlights = [
    {
      title: 'Our Roots',
      text: 'Founded over two decades ago in Cochin, Kerala, Rainbow Hifabs has evolved from a small structural workspace to Kochi\'s most trusted premier contractor for high-end aluminum system windows, structurally glazed panels, and monumental fabrication masterpieces.',
    },
    {
      title: 'Uncompromising Quality',
      text: 'We adhere to strict certified fabrication standards, sourcing top-tier premium hardware, architectural glass types (Reflective Blue, Frosted, Dark Grey, Clear toughened), and multi-point security locking systems that ensure weather resilience in Kerala\'s humid coastal climate.',
    },
    {
      title: 'Structural Innovation',
      text: 'Our architectural glazing and structural engineering systems are meticulously drafted and tested for maximum wind load resistance, air tightness, and water tightness. We bring contemporary European styles and sleek minimalist slide designs to Cochin\'s structural landscape.',
    },
  ];

  return (
    <section id="about" className="relative bg-[#080808] py-20 lg:py-28 overflow-hidden border-b-2 border-slate-900">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF3E00] bg-black px-4 py-1.5 rounded-none border-2 border-slate-900 font-mono">
            ABOUT RAINBOW HIFABS
          </span>
          <h2 className="mt-6 font-display text-4xl font-black uppercase tracking-tighter text-white sm:text-5xl italic leading-none">
            ENGINEERING CRAFTSMANSHIP
          </h2>
          <p className="mt-4 text-sm text-slate-400 leading-relaxed font-sans text-justify sm:text-center">
            For more than 25 years, we have set the standard for high-performance architectural system windows, heavy-duty structural glazing, and structural design solutions throughout Kerala.
          </p>
        </div>

        {/* Content Grids */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative rounded-none border-2 border-slate-900 bg-black p-8 hover:border-[#FF3E00]/60 transition-all"
            >
              <div className="absolute top-0 left-0 w-8 h-1 bg-[#FF3E00] group-hover:w-20 transition-all"></div>
              <h3 className="font-display text-lg font-black uppercase tracking-tight text-white group-hover:text-[#FF3E00] transition-colors italic">
                {item.title}
              </h3>
              <p className="mt-4 text-xs text-slate-400 leading-relaxed font-sans text-justify">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Interactive Metrics Grid */}
        <div className="mt-16 sm:mt-20 rounded-none border-2 border-slate-900 bg-black p-8 lg:p-12 relative overflow-hidden">
          <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x-2 divide-slate-900">
            {metrics.map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.id} className="pt-6 sm:pt-0 sm:px-6 first:pl-0 last:pr-0 text-center sm:text-left flex flex-col justify-between">
                  <div className="flex justify-center sm:justify-start items-center space-x-3 mb-2">
                    <div className="p-2 rounded-none bg-slate-950 border-2 border-slate-900">
                      <IconComp className="h-5 w-5 text-[#FF3E00]" />
                    </div>
                    <span className="font-display text-3xl font-black text-white tracking-widest font-mono">
                      {item.value}
                    </span>
                  </div>
                  <p className="text-xs font-mono uppercase tracking-widest text-slate-500">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
