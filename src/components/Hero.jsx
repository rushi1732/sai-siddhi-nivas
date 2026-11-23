import React, { useState, useEffect } from 'react';
import { heroSlides, hotelInfo, roomCategories } from '../data/hotelData';
import {
  ChevronLeft, ChevronRight, Calendar, Users,
  Tag, BedDouble, ArrowRight, ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Helper function to format date in local timezone YYYY-MM-DD
const getLocalDateString = (d = new Date()) => {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export default function Hero({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [roomType, setRoomType] = useState(roomCategories[0].id);
  const [promoCode, setPromoCode] = useState('');

  // Current today date string to strictly restrict past dates
  const today = getLocalDateString();

  // Dates: tomorrow to 3 days later
  const tomorrow = getLocalDateString(new Date(Date.now() + 86400000));
  const threeDaysLater = getLocalDateString(new Date(Date.now() + 86400000 * 3));
  const [checkIn, setCheckIn] = useState(tomorrow);
  const [checkOut, setCheckOut] = useState(threeDaysLater);

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

  const handleAvailabilitySubmit = (e) => {
    e.preventDefault();
    onOpenBooking({
      checkIn,
      checkOut,
      adults,
      children,
      guests: `${adults} Adult${adults > 1 ? 's' : ''}${children > 0 ? `, ${children} Child${children > 1 ? 'ren' : ''}` : ''}`,
      roomType,
      promoCode
    });
  };

  return (
    <div className="relative w-full bg-hotel-forestDark">
      {/* 1. CINEMATIC HERO SLIDER SECTION (100% Full Viewport Display) */}
      <section className="relative w-full min-h-screen lg:h-screen flex flex-col justify-between overflow-hidden bg-hotel-forestDark">

        {/* Background Image Slider with Cinematic Crossfade */}
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              } transition-transform duration-[9000ms]`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            {/* Elegant Luxury Gradient Overlay for Contrast & Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35" />
            <div className="absolute inset-0 bg-hotel-forestDark/10 mix-blend-multiply" />
          </div>
        ))}

        {/* Slider Navigation Arrows (Left & Right) */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/30 bg-black/25 hover:bg-white text-white hover:text-hotel-forestDark backdrop-blur-sm flex items-center justify-center transition-all duration-300 group"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
        </button>

        <button
          onClick={handleNextSlide}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/30 bg-black/25 hover:bg-white text-white hover:text-hotel-forestDark backdrop-blur-sm flex items-center justify-center transition-all duration-300 group"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
        </button>

        {/* 3. HERO CONTENT: Left-Aligned Editorial Text */}
        <div className="relative z-10 w-full max-w-[1500px] mx-auto px-4 sm:px-10 lg:px-16 pt-24 sm:pt-28 lg:pt-32 flex-1 flex flex-col justify-center text-left">
          <div className="max-w-xl lg:max-w-2xl py-4 sm:py-6">

            {/* Eyebrow / Category Tag */}
            <motion.div
              key={`eyebrow-${currentSlide}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center space-x-2 mb-3"
            >
              <span className="w-6 h-[1.5px] bg-hotel-gold" />
              <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-semibold text-hotel-goldLight drop-shadow">
                {heroSlides[currentSlide].eyebrow}
              </span>
            </motion.div>

            {/* Main Heading in Elegant Serif Typography (All Caps) */}
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="font-serif text-[22px] sm:text-4xl lg:text-5xl xl:text-6xl text-white font-normal uppercase tracking-tight sm:tracking-[0.04em] leading-[1.18] drop-shadow-lg"
            >
              {heroSlides[currentSlide].headingLine1}
              <span className="block text-hotel-ivory">
                {heroSlides[currentSlide].headingLine2}
              </span>
            </motion.h1>

            {/* Description in Clean Modern Typography */}
            <motion.p
              key={`desc-${currentSlide}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
              className="font-sans text-xs sm:text-base lg:text-lg text-hotel-ivory/90 font-light leading-relaxed max-w-xl mt-3 sm:mt-4 drop-shadow"
            >
              {heroSlides[currentSlide].description}
            </motion.p>
          </div>
        </div>

        {/* Bottom Area: Pagination Dots & Floating Frosted Glass Booking Bar */}
        <div className="relative z-30 w-full">
          
          {/* Small Centered Pagination Dots */}
          <div className="flex items-center justify-center space-x-2 mb-2 sm:mb-3">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`rounded-full transition-all duration-300 ${idx === currentSlide
                    ? 'w-7 h-1.5 bg-white'
                    : 'w-2 h-1.5 bg-white/45 hover:bg-white/80'
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* 4. FLOATING BOOKING ENGINE (Transparent Frosted Glass / Glassmorphism) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 w-full"
          >
            <div className="bg-black/40 sm:bg-black/35 backdrop-blur-2xl rounded-sm sm:rounded-md shadow-[0_30px_70px_rgba(0,0,0,0.6)] border border-white/20 p-3.5 sm:p-5 lg:p-6 transition-all hover:bg-black/45 hover:border-white/30">

              <form onSubmit={handleAvailabilitySubmit} className="grid grid-cols-2 lg:grid-cols-12 gap-2.5 sm:gap-4 lg:gap-5 items-end">

                {/* Field 1: Check-in & Check-out Dates */}
                <div className="col-span-2 lg:col-span-4 space-y-1">
                  <label className="text-[10px] tracking-[0.22em] uppercase font-bold text-white/90 block">
                    CHECK-IN / CHECK-OUT
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative border border-white/25 hover:border-hotel-gold/70 transition-colors p-2 flex flex-col justify-center bg-white/10 hover:bg-white/15 focus-within:bg-white/20 focus-within:border-hotel-gold backdrop-blur-md rounded-sm">
                      <span className="text-[9px] uppercase tracking-wider text-white/70 font-semibold">Arrival</span>
                      <input
                        type="date"
                        value={checkIn}
                        min={today}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (val && val < today) return;
                          setCheckIn(val);
                          if (checkOut <= val) {
                            const nextDate = new Date(val);
                            nextDate.setDate(nextDate.getDate() + 1);
                            setCheckOut(getLocalDateString(nextDate));
                          }
                        }}
                        className="w-full bg-transparent text-xs text-white font-medium focus:outline-none cursor-pointer [color-scheme:dark]"
                        required
                      />
                    </div>
                    <div className="relative border border-white/25 hover:border-hotel-gold/70 transition-colors p-2 flex flex-col justify-center bg-white/10 hover:bg-white/15 focus-within:bg-white/20 focus-within:border-hotel-gold backdrop-blur-md rounded-sm">
                      <span className="text-[9px] uppercase tracking-wider text-white/70 font-semibold">Departure</span>
                      <input
                        type="date"
                        value={checkOut}
                        min={checkIn || today}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (val && val < (checkIn || today)) return;
                          setCheckOut(val);
                        }}
                        className="w-full bg-transparent text-xs text-white font-medium focus:outline-none cursor-pointer [color-scheme:dark]"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Field 2: Adults Selector (- / + Counter) */}
                <div className="col-span-1 lg:col-span-2 space-y-1">
                  <label className="text-[10px] tracking-[0.22em] uppercase font-bold text-white/90 block">
                    ADULTS
                  </label>
                  <div className="h-[46px] border border-white/25 hover:border-hotel-gold/70 flex items-center justify-between px-2 bg-white/10 hover:bg-white/15 focus-within:bg-white/20 transition-colors backdrop-blur-md rounded-sm">
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.85 }}
                      type="button"
                      onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                      className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 text-sm font-semibold transition-colors rounded-sm"
                      aria-label="Decrease Adults"
                    >
                      &minus;
                    </motion.button>
                    <span className="text-xs font-bold text-white tracking-wider">
                      {adults}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.85 }}
                      type="button"
                      onClick={() => setAdults((prev) => Math.min(10, prev + 1))}
                      className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 text-sm font-semibold transition-colors rounded-sm"
                      aria-label="Increase Adults"
                    >
                      &#43;
                    </motion.button>
                  </div>
                </div>

                {/* Field 3: Children Selector (- / + Counter) */}
                <div className="col-span-1 lg:col-span-2 space-y-1">
                  <label className="text-[10px] tracking-[0.22em] uppercase font-bold text-white/90 block">
                    CHILDREN
                  </label>
                  <div className="h-[46px] border border-white/25 hover:border-hotel-gold/70 flex items-center justify-between px-2 bg-white/10 hover:bg-white/15 focus-within:bg-white/20 transition-colors backdrop-blur-md rounded-sm">
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.85 }}
                      type="button"
                      onClick={() => setChildren((prev) => Math.max(0, prev - 1))}
                      className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 text-sm font-semibold transition-colors rounded-sm"
                      aria-label="Decrease Children"
                    >
                      &minus;
                    </motion.button>
                    <span className="text-xs font-bold text-white tracking-wider">
                      {children}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.85 }}
                      type="button"
                      onClick={() => setChildren((prev) => Math.min(8, prev + 1))}
                      className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 text-sm font-semibold transition-colors rounded-sm"
                      aria-label="Increase Children"
                    >
                      &#43;
                    </motion.button>
                  </div>
                </div>

                {/* Field 4: Room Type */}
                <div className="col-span-2 lg:col-span-2 space-y-1">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] tracking-[0.22em] uppercase font-bold text-white/90 block">
                      ROOM TYPE
                    </label>
                  </div>
                  <div className="h-[46px] border border-white/25 hover:border-hotel-gold/70 flex items-center px-2 bg-white/10 hover:bg-white/15 focus-within:bg-white/20 transition-colors backdrop-blur-md rounded-sm">
                    <select
                      value={roomType}
                      onChange={(e) => setRoomType(e.target.value)}
                      className="w-full bg-transparent text-xs text-white font-medium focus:outline-none cursor-pointer [color-scheme:dark]"
                    >
                      {roomCategories.map((r) => (
                        <option key={r.id} value={r.id} className="bg-hotel-forestDark text-white py-1">
                          {r.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Field 5: CHECK AVAILABILITY Action Button */}
                <div className="col-span-2 lg:col-span-2">
                  <motion.button
                    whileHover={{ scale: 1.03, boxShadow: '0 10px 25px -5px rgba(212,163,115,0.5)' }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="w-full h-[46px] bg-hotel-gold hover:bg-hotel-goldLight text-hotel-forestDark text-xs tracking-[0.22em] uppercase font-bold transition-all shadow-xl active:scale-95 flex items-center justify-center space-x-2 border border-hotel-gold"
                  >
                    <span>CHECK AVAILABILITY</span>
                  </motion.button>
                </div>

              </form>

              {/* Bottom Optional Promo Code & Best Tariff Guarantee Notice */}
              <div className="mt-2.5 pt-2 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-white/80">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="flex items-center space-x-1.5 font-medium">
                    <Tag className="w-3.5 h-3.5 text-hotel-gold shrink-0" />
                    <span className="text-white/80">Promo / corporate code?</span>
                  </span>
                  <input
                    type="text"
                    placeholder="ENTER CODE"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                    className="border-b border-white/40 focus:border-hotel-gold px-1.5 py-0.5 text-xs text-white font-medium tracking-wider uppercase focus:outline-none w-24 bg-transparent placeholder:text-white/50"
                  />
                </div>

                <div className="hidden sm:flex items-center space-x-1.5 text-hotel-goldLight font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-hotel-gold shrink-0" />
                  <span>Best Rates Guaranteed &bull; Instant Confirmation &bull; No Booking Fees</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </section>
    </div>
  );
}
