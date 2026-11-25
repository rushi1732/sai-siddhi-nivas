import React, { useState, useEffect } from 'react';
import { heroSlides, hotelInfo } from '../data/hotelData';
import { ChevronLeft, ChevronRight, ChevronDown, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Parallax scroll hooks for locked hero effect
  const { scrollY } = useScroll();
  const heroImageScale = useTransform(scrollY, [0, 900], [1, 1.08]);
  const heroCenterOpacity = useTransform(scrollY, [0, 350], [1, 0]);
  const heroCenterY = useTransform(scrollY, [0, 350], [0, -40]);

  // Automatic slide rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <div className="relative w-full h-full bg-hotel-forestDark">
      {/* 1. CINEMATIC HERO SLIDER SECTION (100% Full Viewport Display) */}
      <section className="relative w-full h-screen flex flex-col justify-between overflow-hidden bg-hotel-forestDark select-none">

        {/* Background Image Slider with Cinematic Crossfade and Locked Scale Parallax */}
        {heroSlides.map((slide, idx) => (
          <motion.div
            key={idx}
            style={{ scale: heroImageScale }}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title || 'Sai Siddhi Nivas'}
              className="w-full h-full object-cover object-center"
            />
            {/* Elegant Luxury Dark Transparent Gradient Overlay for Cinematic Atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
            <div className="absolute inset-0 bg-hotel-forestDark/15 mix-blend-multiply" />
          </motion.div>
        ))}

        {/* Slider Navigation Arrows (Left & Right) */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/25 bg-black/25 hover:bg-white text-white hover:text-hotel-forestDark backdrop-blur-sm flex items-center justify-center transition-all duration-300 group"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
        </button>

        <button
          onClick={handleNextSlide}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/25 bg-black/25 hover:bg-white text-white hover:text-hotel-forestDark backdrop-blur-sm flex items-center justify-center transition-all duration-300 group"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
        </button>

        {/* Top Spacer to balance center alignment */}
        <div className="h-16 sm:h-20" />

        {/* 2. CENTER ICONIC BRAND PRESENTATION (Pure, Grand, Minimalist Luxury) */}
        <motion.div 
          style={{ opacity: heroCenterOpacity, y: heroCenterY }}
          className="relative z-10 w-full max-w-4xl mx-auto px-4 flex flex-col items-center justify-center text-center my-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center space-y-3 sm:space-y-4"
          >
            {/* Subtle Luxury Monogram Emblem */}
            <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full border border-hotel-gold/60 bg-black/35 backdrop-blur-md flex items-center justify-center mb-1 shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
              <span className="font-serif italic font-semibold text-lg sm:text-2xl text-hotel-goldLight tracking-widest pl-1">
                SS
              </span>
            </div>

            {/* Grand Center Hotel Name */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="font-serif italic text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-normal tracking-wide drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]">
                Sai Siddhi
              </h1>
              <span className="font-sans text-xs sm:text-sm md:text-base tracking-[0.45em] sm:tracking-[0.6em] uppercase text-hotel-goldLight font-medium block drop-shadow-lg -mt-1 sm:-mt-2">
                NIVAS
              </span>
            </div>

            {/* Delicate Golden Divider */}
            <div className="w-20 sm:w-28 h-[1.5px] bg-gradient-to-r from-transparent via-hotel-gold to-transparent my-2" />

            {/* Location & Heritage Tagline */}
            <p className="font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.32em] sm:tracking-[0.4em] uppercase text-white/85 font-light drop-shadow-md">
              KIRTANWADI TARF &bull; MAHARASHTRA
            </p>
          </motion.div>
        </motion.div>

        {/* 3. BOTTOM SCROLL INDICATOR & SLIDER PAGINATION DOTS */}
        <div className="relative z-20 pb-6 sm:pb-10 flex flex-col items-center space-y-3">
          
          {/* Slider Pagination Dots */}
          <div className="flex items-center justify-center space-x-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? 'w-7 h-1.5 bg-hotel-gold'
                    : 'w-2 h-1.5 bg-white/40 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Animated Scroll Down Prompt */}
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
            className="flex flex-col items-center space-y-1 text-white/70 pt-1 pointer-events-none"
          >
            <span className="text-[9px] uppercase tracking-[0.3em] font-light">Scroll to Explore</span>
            <ChevronDown className="w-4 h-4 text-hotel-gold" />
          </motion.div>
        </div>

      </section>
    </div>
  );
}
