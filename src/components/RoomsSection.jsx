import React, { useState } from 'react';
import { roomCategories, hotelInfo } from '../data/hotelData';
import { 
  Bed, Maximize2, Users, Check, ChevronRight, 
  Sparkles, Calendar, Info, Phone, ShieldCheck, Eye
} from 'lucide-react';

export default function RoomsSection({ onOpenBooking, onSelectRoomDetail }) {
  const [activeCategory, setActiveCategory] = useState(roomCategories[0].id);

  return (
    <section id="rooms" className="py-20 lg:py-28 bg-white text-hotel-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-hotel-goldDark text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            <Bed className="w-3.5 h-3.5 text-hotel-gold" />
            <span>Accommodations & Suites</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-hotel-forest font-normal tracking-tight">
            Rooms Crafted for Rest & Comfort
          </h2>
          <div className="w-20 h-0.5 bg-hotel-gold mx-auto mt-4 mb-6" />
          <p className="text-hotel-muted font-light text-base sm:text-lg leading-relaxed">
            Thoughtfully appointed air-conditioned rooms and family suites featuring soothing ambiance, spotless linens, and round-the-clock hot water.
          </p>
        </div>

        {/* Room Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {roomCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-3 rounded-full text-xs sm:text-sm tracking-wider uppercase font-medium transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'bg-hotel-forest text-hotel-goldLight border-hotel-forest shadow-md'
                  : 'bg-hotel-ivory text-hotel-muted border-hotel-border hover:border-hotel-gold'
              }`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Category Spotlight */}
        {roomCategories
          .filter((cat) => cat.id === activeCategory)
          .map((room) => (
            <div 
              key={room.id} 
              className="bg-hotel-ivory rounded-2xl border border-hotel-border overflow-hidden shadow-luxury animate-fade-in"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Images Column */}
                <div className="lg:col-span-7 relative flex flex-col justify-between">
                  <div className="relative h-[320px] sm:h-[420px] lg:h-[480px] overflow-hidden group">
                    <img
                      src={room.images[0]}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Category Tag */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-hotel-forestDark/85 backdrop-blur-sm text-hotel-ivory rounded text-xs tracking-widest uppercase border border-hotel-gold/30">
                      {room.category}
                    </div>

                    {/* Price Pill Box with Crisp Modern Rupee & Number Typography */}
                    <div className="absolute bottom-4 right-4 px-4 py-2.5 bg-hotel-forestDark/95 backdrop-blur-md rounded-xl text-white text-right border border-hotel-gold/30 shadow-lg">
                      <div className="flex items-center space-x-1 justify-end text-[10px] uppercase tracking-wider text-hotel-gold">
                        <span>Tariff Guidance</span>
                        <span className="text-[9px] bg-hotel-gold/20 text-hotel-goldLight px-1.5 py-0.5 rounded border border-hotel-gold/30 font-sans font-semibold">
                          Placeholder
                        </span>
                      </div>
                      <div className="flex items-baseline justify-end space-x-1 my-0.5">
                        <span className="font-sans font-bold text-base sm:text-lg text-hotel-goldLight select-none">₹</span>
                        <span className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                          {room.price.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <span className="text-[10px] text-hotel-ivory/80 block font-sans">
                        per night + taxes &bull; subject to seasonal confirmation
                      </span>
                    </div>
                  </div>

                  {/* Thumbnail Row */}
                  <div className="grid grid-cols-3 gap-2 p-3 bg-hotel-forestDark">
                    {room.images.map((img, i) => (
                      <div 
                        key={i} 
                        className="h-20 sm:h-24 rounded-lg overflow-hidden cursor-pointer border border-white/10 hover:border-hotel-gold transition-colors relative group"
                        onClick={() => onSelectRoomDetail(room)}
                      >
                        <img 
                          src={img} 
                          alt={`${room.name} preview ${i+1}`} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Details Column */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-hotel-goldDark font-semibold block mb-1">
                      {room.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-hotel-forest font-normal mb-3">
                      {room.name}
                    </h3>
                    
                    {/* Key Specs Pill Row */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-hotel-ivory rounded-full text-xs text-hotel-charcoal border border-hotel-border">
                        <Bed className="w-3.5 h-3.5 text-hotel-forest" />
                        <span>{room.bed}</span>
                      </div>
                      <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-hotel-ivory rounded-full text-xs text-hotel-charcoal border border-hotel-border">
                        <Users className="w-3.5 h-3.5 text-hotel-goldDark" />
                        <span>{room.capacity}</span>
                      </div>
                      <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-hotel-ivory rounded-full text-xs text-hotel-charcoal border border-hotel-border">
                        <Maximize2 className="w-3.5 h-3.5 text-hotel-forestMuted" />
                        <span>{room.size}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-hotel-muted leading-relaxed font-light mb-6">
                      {room.description}
                    </p>

                    {/* Features checklist */}
                    <div className="border-t border-b border-hotel-border/60 py-4 mb-6">
                      <h4 className="text-[11px] uppercase tracking-widest text-hotel-forest font-semibold mb-3 flex items-center justify-between">
                        <span>Room Amenities Included</span>
                        <span className="text-[10px] text-hotel-muted font-normal">24/7 Service</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {room.features.slice(0, 6).map((feat, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-xs text-hotel-charcoal/85">
                            <Check className="w-3.5 h-3.5 text-hotel-forest shrink-0" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Editable rate notice banner */}
                    <div className="p-3 bg-hotel-ivory border border-hotel-border rounded-lg mb-6 flex items-start space-x-2 text-[11px] text-hotel-muted">
                      <Info className="w-3.5 h-3.5 text-hotel-goldDark shrink-0 mt-0.5" />
                      <span>
                        Note for Hotel Management: Rates are editable placeholders. Call hotel front desk at <strong className="text-hotel-charcoal">{hotelInfo.phone}</strong> to confirm official seasonal tariffs and special family packages.
                      </span>
                    </div>
                  </div>

                  {/* Booking CTA Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => onOpenBooking({ roomType: room.id })}
                      className="flex-1 bg-gradient-to-r from-hotel-gold to-hotel-goldDark hover:from-hotel-goldHover hover:to-hotel-gold text-hotel-forestDark py-3 px-5 rounded-lg text-xs tracking-widest uppercase font-bold text-center transition-all shadow-md flex items-center justify-center space-x-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Reserve {room.name}</span>
                    </button>
                    <button
                      onClick={() => onSelectRoomDetail(room)}
                      className="py-3 px-4 border border-hotel-forest text-hotel-forest hover:bg-hotel-forest hover:text-hotel-goldLight rounded-lg text-xs tracking-widest uppercase font-semibold transition-colors text-center flex items-center justify-center space-x-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Full Details</span>
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}

        {/* Bottom Booking Guarantee */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 text-xs text-hotel-muted">
            <span className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-hotel-forest" />
              <span>Direct WhatsApp & Call Confirmation</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Check className="w-4 h-4 text-hotel-gold" />
              <span>No Advance Surprise Charges</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Sparkles className="w-4 h-4 text-hotel-forest" />
              <span>Guaranteed Spotless Sanitized Rooms</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
