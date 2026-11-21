import React, { useState, useEffect } from 'react';
import { heroSlides, resortInfo, roomCategories } from '../data/cranganorData';
import { Calendar, Users, Home, ChevronRight, ChevronLeft, Award, Sparkles, MapPin } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(roomCategories[0].id);
  const [guests, setGuests] = useState("2 Adults");
  const [dates, setDates] = useState({
    checkIn: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
    checkOut: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0]
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleQuickSearch = (e) => {
    e.preventDefault();
    onOpenBooking({
      roomType: selectedRoom,
      checkIn: dates.checkIn,
      checkOut: dates.checkOut,
      guests
    });
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 lg:pb-24 overflow-hidden">
      {/* Background Images with crossfade */}
      {heroSlides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } transition-transform duration-[8000ms]`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle gradient overlays for cinematic mood */}
          <div className="absolute inset-0 bg-gradient-to-t from-chateau-riverDark via-chateau-riverDark/40 to-black/50" />
          <div className="absolute inset-0 bg-chateau-river/20 mix-blend-multiply" />
        </div>
      ))}

      {/* Slide Navigation Controls */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm text-chateau-sand hover:bg-chateau-gold hover:text-chateau-riverDark border border-white/20 transition-all"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm text-chateau-sand hover:bg-chateau-gold hover:text-chateau-riverDark border border-white/20 transition-all"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-8">
        
        {/* Heritage Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-chateau-river/80 backdrop-blur-md border border-chateau-gold/40 text-chateau-gold text-xs tracking-[0.2em] uppercase font-medium mb-6 animate-fade-in shadow-md">
          <Award className="w-3.5 h-3.5 text-amber-300" />
          <span>TripAdvisor Travelers' Choice &bull; Kochi's Highest Rated Riverside Chateau</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-wide text-chateau-sand leading-[1.1] mb-4">
          Immerse in the Soul of Old Cochyn
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto font-sans font-light text-base sm:text-xl text-chateau-sand/90 tracking-wide leading-relaxed mb-8">
          A boutique riverside retreat of ten handcrafted rooms on the banks of River Periyar, Kerala. Inspired by Indo-Dutch heritage and the 3,000-year seafaring legacy of ancient Muziris.
        </p>

        {/* Slide Indicators */}
        <div className="flex justify-center items-center space-x-2 mb-10">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-8 bg-chateau-gold' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Quick Booking Engine Bar */}
        <div className="bg-chateau-riverDark/95 backdrop-blur-md border border-chateau-gold/30 rounded-xl p-4 sm:p-5 shadow-2xl max-w-4xl mx-auto text-left">
          <form onSubmit={handleQuickSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            
            {/* Check-In */}
            <div>
              <label className="block text-[11px] uppercase tracking-widest text-chateau-sand/70 font-semibold mb-1 flex items-center space-x-1.5">
                <Calendar className="w-3 h-3 text-chateau-gold" />
                <span>Check In</span>
              </label>
              <input
                type="date"
                value={dates.checkIn}
                onChange={(e) => setDates({ ...dates, checkIn: e.target.value })}
                className="w-full bg-chateau-river/80 border border-white/15 rounded px-3 py-2 text-sm text-chateau-sand focus:outline-none focus:border-chateau-gold transition-colors"
                required
              />
            </div>

            {/* Check-Out */}
            <div>
              <label className="block text-[11px] uppercase tracking-widest text-chateau-sand/70 font-semibold mb-1 flex items-center space-x-1.5">
                <Calendar className="w-3 h-3 text-chateau-gold" />
                <span>Check Out</span>
              </label>
              <input
                type="date"
                value={dates.checkOut}
                onChange={(e) => setDates({ ...dates, checkOut: e.target.value })}
                className="w-full bg-chateau-river/80 border border-white/15 rounded px-3 py-2 text-sm text-chateau-sand focus:outline-none focus:border-chateau-gold transition-colors"
                required
              />
            </div>

            {/* Room Category */}
            <div>
              <label className="block text-[11px] uppercase tracking-widest text-chateau-sand/70 font-semibold mb-1 flex items-center space-x-1.5">
                <Home className="w-3 h-3 text-chateau-gold" />
                <span>Category</span>
              </label>
              <select
                value={selectedRoom}
                onChange={(e) => setSelectedRoom(e.target.value)}
                className="w-full bg-chateau-river/80 border border-white/15 rounded px-3 py-2 text-sm text-chateau-sand focus:outline-none focus:border-chateau-gold transition-colors"
              >
                {roomCategories.map((r) => (
                  <option key={r.id} value={r.id} className="bg-chateau-riverDark text-chateau-sand">
                    {r.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Action */}
            <div>
              <button
                type="submit"
                className="w-full bg-chateau-terracotta hover:bg-chateau-terracottaHover text-white py-2.5 px-4 rounded text-xs tracking-widest uppercase font-semibold transition-all shadow-md flex items-center justify-center space-x-2 hover:shadow-lg active:scale-95"
              >
                <span>Check Rates</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </form>
          
          <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] text-chateau-sand/70 gap-2">
            <span className="flex items-center space-x-1 text-chateau-gold">
              <Sparkles className="w-3 h-3" />
              <span>Gourmet South Indian & Continental Breakfast Included</span>
            </span>
            <span className="flex items-center space-x-1">
              <MapPin className="w-3 h-3 text-chateau-gold" />
              <span>20 km (30 mins) from Cochin Airport (COK)</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
