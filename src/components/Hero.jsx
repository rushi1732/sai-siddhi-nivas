import React, { useState, useEffect } from 'react';
import { heroSlides, hotelInfo, roomCategories } from '../data/hotelData';
import { 
  Calendar, Users, Home, ChevronRight, ChevronLeft, 
  Sparkles, MapPin, Phone, ShieldCheck, ArrowRight
} from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(roomCategories[0].id);
  const [guests, setGuests] = useState("2 Adults");
  const [dates, setDates] = useState({
    checkIn: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    checkOut: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0]
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

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[680px] md:min-h-[720px] md:max-h-[860px] flex items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 overflow-hidden bg-hotel-forestDark">
      {/* Background Images Crossfade */}
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
          {/* Subtle multi-layer luxury overlay for high legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-hotel-forestDark via-hotel-forestDark/55 to-black/60" />
          <div className="absolute inset-0 bg-hotel-forestDark/30 mix-blend-multiply" />
        </div>
      ))}

      {/* Slide Navigation Controls */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-black/40 backdrop-blur-md text-hotel-ivory hover:bg-hotel-gold hover:text-hotel-forestDark border border-white/20 transition-all duration-300"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-black/40 backdrop-blur-md text-hotel-ivory hover:bg-hotel-gold hover:text-hotel-forestDark border border-white/20 transition-all duration-300"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-4 sm:mt-8">
        
        {/* Location & Trust Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-hotel-forestDark/80 backdrop-blur-md border border-hotel-gold/40 text-hotel-goldLight text-xs tracking-[0.2em] uppercase font-medium mb-6 animate-fade-in shadow-lg">
          <MapPin className="w-3.5 h-3.5 text-hotel-gold" />
          <span>Near Modka Agar, MSH4 &bull; Kirtanwadi Tarf, Maharashtra</span>
        </div>

        {/* Main Heading (Exact Match) */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-wide text-white leading-[1.1] mb-5 drop-shadow-md">
          Experience Comfort. Discover Hospitality.
        </h1>

        {/* Subheading (Exact Match) */}
        <p className="max-w-3xl mx-auto font-sans font-light text-base sm:text-xl text-hotel-ivory/95 tracking-wide leading-relaxed mb-8">
          Welcome to Sai Siddhi Nivas – Your Perfect Stay Experience.
        </p>

        {/* 3 Required CTA Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-10">
          <button
            onClick={() => onOpenBooking()}
            className="px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-hotel-gold to-hotel-goldDark hover:from-hotel-goldHover hover:to-hotel-gold text-hotel-forestDark text-xs sm:text-sm uppercase tracking-widest font-bold transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 border border-hotel-goldLight/40 flex items-center space-x-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Stay</span>
          </button>

          <a
            href="#rooms"
            onClick={(e) => scrollToSection(e, '#rooms')}
            className="px-6 sm:px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all border border-white/30 hover:border-hotel-gold hover:text-hotel-gold flex items-center space-x-2"
          >
            <span>Explore Rooms</span>
            <ArrowRight className="w-4 h-4 text-hotel-gold" />
          </a>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="px-6 sm:px-7 py-3.5 rounded-full bg-hotel-forestDark/70 hover:bg-hotel-forestDark backdrop-blur-md text-hotel-ivory text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all border border-hotel-gold/30 hover:border-hotel-gold flex items-center space-x-2"
          >
            <Phone className="w-4 h-4 text-hotel-gold" />
            <span>Contact Us</span>
          </a>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center items-center space-x-2 mb-8">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-8 bg-hotel-gold' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Quick Booking Engine Bar */}
        <div className="bg-hotel-forestDark/95 backdrop-blur-xl border border-hotel-gold/30 rounded-2xl p-4 sm:p-6 shadow-2xl max-w-4xl mx-auto text-left">
          <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-[11px] uppercase tracking-widest text-hotel-gold font-semibold flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Booking & Immediate Enquiry</span>
            </span>
            <span className="text-[11px] text-hotel-ivory/70 hidden sm:inline">
              Call Direct: <strong className="text-white">{hotelInfo.phone}</strong>
            </span>
          </div>

          <form onSubmit={handleQuickSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            
            {/* Check-In */}
            <div>
              <label className="block text-[11px] uppercase tracking-widest text-hotel-ivory/80 font-medium mb-1.5 flex items-center space-x-1.5">
                <Calendar className="w-3 h-3 text-hotel-gold" />
                <span>Check In</span>
              </label>
              <input
                type="date"
                value={dates.checkIn}
                onChange={(e) => setDates({ ...dates, checkIn: e.target.value })}
                className="w-full bg-hotel-forest/90 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-hotel-ivory focus:outline-none focus:border-hotel-gold transition-colors"
                required
              />
            </div>

            {/* Check-Out */}
            <div>
              <label className="block text-[11px] uppercase tracking-widest text-hotel-ivory/80 font-medium mb-1.5 flex items-center space-x-1.5">
                <Calendar className="w-3 h-3 text-hotel-gold" />
                <span>Check Out</span>
              </label>
              <input
                type="date"
                value={dates.checkOut}
                onChange={(e) => setDates({ ...dates, checkOut: e.target.value })}
                className="w-full bg-hotel-forest/90 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-hotel-ivory focus:outline-none focus:border-hotel-gold transition-colors"
                required
              />
            </div>

            {/* Room Category */}
            <div>
              <label className="block text-[11px] uppercase tracking-widest text-hotel-ivory/80 font-medium mb-1.5 flex items-center space-x-1.5">
                <Home className="w-3 h-3 text-hotel-gold" />
                <span>Room Type</span>
              </label>
              <select
                value={selectedRoom}
                onChange={(e) => setSelectedRoom(e.target.value)}
                className="w-full bg-hotel-forest/90 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-hotel-ivory focus:outline-none focus:border-hotel-gold transition-colors"
              >
                {roomCategories.map((r) => (
                  <option key={r.id} value={r.id} className="bg-hotel-forestDark text-white">
                    {r.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Search / Inquire CTA Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-hotel-gold to-hotel-goldDark hover:from-hotel-goldHover hover:to-hotel-gold text-hotel-forestDark py-2.5 sm:py-3 px-4 rounded-lg text-xs uppercase tracking-widest font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Check Availability</span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
