import React from 'react';
import { reviewSectionData, hotelInfo } from '../data/hotelData';
import { 
  Star, Award, Quote, CheckCircle2, MessageSquarePlus, 
  ExternalLink, Sparkles, Info 
} from 'lucide-react';
import AnimateIn from './AnimateIn';
import { motion } from 'framer-motion';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 lg:py-28 text-hotel-ivory relative overflow-hidden bg-hotel-forestDark">
      {/* Locked / Fixed Parallax Background Photo (Stays in place during scroll) */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 bg-fixed pointer-events-none"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1920&auto=format&fit=crop')`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />

      {/* Luxury Translucent Dark Overlay - Leaves the resort photo clearly visible */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-hotel-forestDark/85 via-transparent to-hotel-forestDark/90 pointer-events-none z-0" />
      
      {/* Subtle Gold / Emerald Glow Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-hotel-gold/15 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <AnimateIn direction="up">
          <div className="text-center max-w-4xl mx-auto mb-14 lg:mb-20">
            <span className="text-xs sm:text-sm tracking-[0.32em] uppercase font-semibold text-hotel-goldLight mb-3 block">
              GUEST TESTIMONIALS & TRANSPARENCY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[52px] text-white font-normal uppercase tracking-[0.06em] leading-[1.15] mb-6">
              AUTHENTIC TRAVELER EXPERIENCES
            </h2>
            <div className="w-16 h-[2px] bg-hotel-gold mx-auto mb-8" />
            <p className="font-sans font-light text-base sm:text-lg text-hotel-ivory/85 leading-relaxed max-w-3xl mx-auto">
              Honest reflections from travelers and families who have stayed with us at Sai Siddhi Nivas.
            </p>
          </div>
        </AnimateIn>

        {/* Transparent Guest Policy Notice */}
        <AnimateIn direction="up" delay={0.1}>
          <div className="max-w-4xl mx-auto mb-12 p-4 rounded-xl bg-white/5 border border-hotel-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-hotel-ivory/90">
            <div className="flex items-start space-x-3">
              <Info className="w-4 h-4 text-hotel-gold shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Transparent Guest Reviews:</strong> {reviewSectionData.notice}
              </p>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={reviewSectionData.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-4 py-2 rounded-lg bg-hotel-gold hover:bg-hotel-goldHover text-hotel-forestDark font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 transition-colors shadow-md"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" />
              <span>Write a Review</span>
            </motion.a>
          </div>
        </AnimateIn>

        {/* Reviews Grid with Staggered Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewSectionData.reviews.map((rev, idx) => (
            <AnimateIn key={rev.id} direction="up" delay={0.12 * idx}>
              <motion.div 
                whileHover={{ y: -8, scale: 1.02, borderColor: '#dfbe7e', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.35)' }}
                transition={{ duration: 0.28 }}
                className="group bg-hotel-forest/80 backdrop-blur-md p-8 rounded-2xl border border-hotel-gold/20 flex flex-col justify-between transition-all duration-300 shadow-xl h-full"
              >
                <div>
                  {/* 5-Star Rating Row */}
                  <div className="flex items-center space-x-1 text-hotel-gold mb-5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-hotel-gold text-hotel-gold" />
                    ))}
                    <span className="ml-2 text-xs text-hotel-ivory/80 font-medium font-sans">5.0 / 5.0</span>
                  </div>

                  <Quote className="w-8 h-8 text-hotel-gold/30 group-hover:text-hotel-goldLight transition-colors mb-3 group-hover:scale-110 transition-transform duration-300" />
                  
                  <p className="font-serif italic text-white text-base leading-relaxed mb-6">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-sans font-semibold text-sm text-white">
                      {rev.name}
                    </h4>
                    <span className="text-xs text-hotel-goldLight font-sans">
                      {rev.location} &bull; {rev.stayType}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-semibold flex items-center space-x-1 font-sans">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{rev.badge}</span>
                  </span>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}
