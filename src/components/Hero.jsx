import React, { useState, useEffect } from 'react';
import { heroSlides } from '../data/hotelData';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Parallax scroll hooks for locked hero effect
  const { scrollY } = useScroll();
  const heroImageScale = useTransform(scrollY, [0, 900], [1, 1.08]);

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
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/60" />
            <div className="absolute inset-0 bg-hotel-forestDark/10 mix-blend-multiply" />
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

        {/* Clean, open center area to showcase the full, unobstructed resort photography */}
        <div className="flex-1" />

        {/* 2. BOTTOM SCROLL INDICATOR & SLIDER PAGINATION DOTS */}
        <div className="relative z-20 pb-6 sm:pb-8 flex flex-col items-center space-y-3">
          
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
