import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function PageHero({ 
  title, 
  subtitle, 
  badge = "SAI SIDDHI NIVAS • KIRTANWADI TARF", 
  image = "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1920&auto=format&fit=crop",
  breadcrumb = title
}) {
  return (
    <section className="relative w-full h-[52vh] min-h-[380px] max-h-[520px] bg-hotel-forestDark overflow-hidden flex items-center justify-center text-center">
      {/* Background Image with Cinematic Luxury Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center scale-105 animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hotel-forestDark via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-hotel-forestDark/30 mix-blend-multiply" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        
        {/* Breadcrumb Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-hotel-goldLight font-medium mb-3 bg-black/40 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/10"
        >
          <Link to="/" className="text-white/80 hover:text-hotel-gold transition-colors">HOME</Link>
          <ChevronRight className="w-3 h-3 text-hotel-gold" />
          <span className="text-hotel-gold font-semibold">{breadcrumb}</span>
        </motion.div>

        {/* Small Top Badge */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="block text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-hotel-gold font-semibold mb-2"
        >
          {badge}
        </motion.span>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal uppercase tracking-wide leading-tight drop-shadow-md"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-sans text-xs sm:text-sm lg:text-base text-hotel-ivory/90 font-light leading-relaxed max-w-2xl mx-auto mt-3 drop-shadow"
          >
            {subtitle}
          </motion.p>
        )}

      </div>

      {/* Decorative Bottom Line Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-hotel-gold/60 to-transparent" />
    </section>
  );
}
