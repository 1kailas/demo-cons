import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Heart, BookOpen, Star, Sparkles, Share2, Award, BookOpenCheck } from 'lucide-react';
import { Article } from '../types';

export default function QualityBlogSection() {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [views, setViews] = useState(148);
  const [expanded, setExpanded] = useState(false);
  
  // Star rating states
  const [rating, setRating] = useState(5);
  const [totalRatings, setTotalRatings] = useState(24);
  const [averageRating, setAverageRating] = useState(4.9);
  const [hasRated, setHasLikedRated] = useState(false);

  const article: Article = {
    id: 'rainbow-hifabs-cochin-windows',
    title: 'Your Premier Source for Aluminum Doors and Windows in Cochin',
    excerpt: 'Are you looking for premium aluminium doors and system windows in Kerala? Discover why standard alloys and high-performance structural glazing stands as Kochi\'s leading construction choice.',
    imageUrl: 'https://static.wixstatic.com/media/d62156_3340434aaac444039a074657437a929a~mv2.png/v1/fill/w_454,h_341,fp_0.50_0.50,q_95,enc_avif,quality_auto/d62156_3340434aaac444039a074657437a929a~mv2.webp',
    publishDate: 'Jan 17, 2025',
    author: 'Rainbow hi-fabs & contractors',
    authorImage: 'https://lh3.googleusercontent.com/a/AATXAJwO3D4fHT--XGS695r2YSKFwSIsd70UuaKseP7-=s96-c',
    readTime: 4,
    likes: 0,
    views: 22,
    tags: ['Cochin Construction', 'System Windows', 'Structural Glazing', 'Aluminium Fabrication']
  };

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(prev => prev + 1);
      setHasLiked(true);
      setViews(prev => prev + 1);
    } else {
      setLikes(prev => prev - 1);
      setHasLiked(false);
    }
  };

  const handleRating = (stars: number) => {
    if (!hasRated) {
      const newTotal = totalRatings + 1;
      const newAverage = ((averageRating * totalRatings) + stars) / newTotal;
      setAverageRating(Number(newAverage.toFixed(1)));
      setTotalRatings(newTotal);
      setRating(stars);
      setHasLikedRated(true);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText('https://www.rainbowhifabs.com/post/' + article.id);
    alert('Simulated sharing of article link: Link copied directly to system clipboard.');
  };

  return (
    <section className="bg-[#0c0c0c] py-20 lg:py-28 overflow-hidden relative border-b-2 border-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF3E00] bg-black px-4 py-1.5 rounded-none border-2 border-slate-900 font-mono">
            EXPERT INSIGHTS & MEDIA
          </span>
          <h2 className="mt-6 font-display text-4xl font-black uppercase tracking-tighter text-white sm:text-5xl italic leading-none">
            ENGINEERING EDITORIAL
          </h2>
          <p className="mt-4 text-sm text-slate-400 leading-relaxed font-sans text-justify sm:text-center">
            Read comprehensive technical literature and advisory notes compiled directly by our estimators and architectural glazing designers.
          </p>
        </div>

        {/* Combined Editorial Card */}
        <div className="mx-auto max-w-4xl rounded-none border-2 border-slate-900 bg-black p-6 md:p-10 shadow-2xl relative">
          
          <div className="grid gap-8 md:grid-cols-12 items-start">
            
            {/* Visual Header */}
            <div className="md:col-span-5 relative aspect-square md:aspect-auto md:h-full w-full rounded-none overflow-hidden bg-slate-950 border border-slate-900 shrink-0">
              <img
                src={article.imageUrl}
                alt={article.title}
                onError={(e) => {
                  // Fallback beautiful architectural mock if wix asset cache is down
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=450&q=80';
                }}
                className="h-full w-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-black border border-slate-900 px-3 py-1 rounded-none text-[10px] font-mono font-bold text-[#FF3E00] uppercase tracking-wider">
                {article.publishDate}
              </div>
            </div>

            {/* Content text */}
            <div className="md:col-span-7 space-y-4">
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {article.tags.map(t => (
                  <span key={t} className="text-[10px] font-mono bg-[#0c0c0c] text-slate-500 border border-slate-900 px-2 py-0.5 rounded-none uppercase tracking-wider">
                    #{t}
                  </span>
                ))}
              </div>

              <h3 className="font-display text-xl md:text-2xl font-black text-white text-left tracking-tight uppercase italic leading-none">
                {article.title}
              </h3>

              {/* Author info & metrics */}
              <div className="flex items-center space-x-3 text-xs text-slate-400">
                <img
                  src={article.authorImage}
                  alt={article.author}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://lh3.googleusercontent.com/a/ACg8ocIj6bSHOfApHJUfCbrEAb1hOFJzdJx3A49UDZJ7Bou3YqYS7wE=s96-c';
                  }}
                  className="h-6 w-6 rounded-none border border-slate-900 shrink-0 bg-black"
                />
                <span className="font-bold text-slate-300 uppercase tracking-wide font-sans">{article.author}</span>
                <span className="text-slate-700">•</span>
                <span className="flex items-center text-slate-400">
                  <Eye className="inline h-3.5 w-3.5 mr-1 text-[#FF3E00]" />
                  {views}
                </span>
                <span className="text-slate-700">•</span>
                <span className="flex items-center text-slate-400">
                  <Heart className="inline h-3.5 w-3.5 mr-1 text-[#FF3E00]" />
                  {likes}
                </span>
              </div>

              <p className="text-xs text-slate-450 leading-relaxed font-sans text-left text-justify">
                {article.excerpt}
              </p>

              {/* Interactive expand pane button */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => {
                    setExpanded(!expanded);
                    if (!expanded) setViews(prev => prev + 1);
                  }}
                  className="inline-flex items-center space-x-2 rounded-none bg-[#FF3E00] hover:bg-[#e03200] px-6 py-3.5 text-xs font-black uppercase text-white tracking-wider cursor-pointer"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>{expanded ? 'Collapse Editorial' : 'Read Full Editorial'}</span>
                </button>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleLike}
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-none border-2 transition-all cursor-pointer ${
                      hasLiked 
                        ? 'bg-rose-500/10 border-rose-500/35 text-rose-500' 
                        : 'bg-[#0c0c0c] border-slate-900 text-slate-400 hover:text-white hover:border-[#FF3E00]'
                    }`}
                    title="Like Post"
                  >
                    <Heart className={`h-4 w-4 ${hasLiked ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={handleShare}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-none border-2 bg-[#0c0c0c] border-slate-900 text-slate-400 hover:text-white hover:border-[#FF3E00] transition-colors cursor-pointer"
                    title="Copy Article Link"
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Collapsible expanded article layout */}
          <AnimatePresence>
            {expanded && (
               <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden border-t-2 border-slate-900 mt-8 pt-8"
               >
                <div className="space-y-6 text-xs text-slate-300 leading-relaxed font-sans text-left max-w-3xl text-justify">
                  
                  <div className="p-5 rounded-none bg-[#0c0c0c] border-2 border-slate-900 flex items-start space-x-3 text-xs text-slate-300">
                    <Award className="h-5 w-5 shrink-0 mt-0.5 text-[#FF3E00]" />
                    <p>
                      <strong className="text-[#FF3E00] uppercase font-mono tracking-wider block mb-1">Expert Engineering Note:</strong> Selecting custom aluminum alloy windows requires analyzing thermal break values and acoustic dampening indicators to prevent energy leakage and maximize glass-span security in India’s humid coastal climates.
                    </p>
                  </div>

                  <h4 className="font-display font-black uppercase text-white text-base mt-6 italic tracking-tight">Why High-Performance Aluminum Reigns Supreme</h4>
                  <p>
                    Cochin’s coastal humidity and intense monsoons place extreme demands on exterior fenestration profiles. Regular raw metals corrode and traditional wood warps or suffers from moisture rot. High-grade architectural aluminum profiles from Rainbow Hifabs undergo standard electrostatic powder coating, delivering unparalleled anti-corrosion protection that lasts decades.
                  </p>

                  <h4 className="font-display font-black uppercase text-white text-base mt-6 italic tracking-tight">Acoustic Dampening & Heat Shield Systems</h4>
                  <p>
                    By introducing advanced double-glazed units (DGU) with spacer bars containing moisture-absorbing desiccants and silent argon gas fills, our window panels minimize sound penetration from Cochin Bypass roadways while reflecting thermal UV sunwaves. This reduces the mechanical utility bill of your residence significantly.
                  </p>

                  <p>
                    Our sliding systems use heavy-duty tandem steel roller wheels that allow 200kg glass panels to glid open with absolute zero effort, remaining flush and completely watertight through Kerala’s hardest rainfall cascades.
                  </p>

                  <blockquote className="border-l-4 border-[#FF3E00] pl-4 italic text-slate-400 py-2 bg-slate-950">
                    "Craftsmanship isn’t just assembling panels—it’s balancing architectural transparency, thermal engineering parameters, and robust hardware durability."
                  </blockquote>

                  {/* Rating Dashboard */}
                  <div className="rounded-none border-2 border-slate-900 bg-slate-950 p-5 mt-10">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h5 className="text-white text-xs font-black uppercase tracking-widest text-[#FF3E00] flex items-center font-mono">
                          <Sparkles className="h-4 w-4 mr-1.5" />
                          CLIENT REVIEW BOARD
                        </h5>
                        <p className="text-[10px] uppercase tracking-wider text-slate-500 mt-1 font-mono">Reviewing specialized aluminum supplier contractors in Kerala.</p>
                      </div>

                      {/* Stars system */}
                      <div className="flex items-center space-x-2">
                        <div className="flex text-[#FF3E00]">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              onClick={() => handleRating(star)}
                              disabled={hasRated}
                              className={`p-0.5 hover:scale-110 transition-transform ${hasRated ? 'cursor-default' : 'cursor-pointer'}`}
                            >
                              <Star className={`h-4.5 w-4.5 ${star <= (hasRated ? rating : averageRating) ? 'fill-current' : 'text-slate-800'}`} />
                            </button>
                          ))}
                        </div>
                        <span className="font-mono text-xs font-bold text-white">
                          {averageRating} <span className="text-slate-500 font-normal">({totalRatings} ratings)</span>
                        </span>
                      </div>
                    </div>
                    {hasRated && (
                      <p className="text-[10px] text-emerald-500 mt-2 font-mono flex items-center uppercase tracking-wider">
                        <BookOpenCheck className="h-4 w-4 mr-1 shrink-0" />
                        Rating submitted. Thank you for voting!
                      </p>
                    )}
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
