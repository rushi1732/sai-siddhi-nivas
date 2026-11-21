import React, { useState } from 'react';
import { roomCategories } from '../data/cranganorData';
import { Bed, Maximize2, Waves, Check, ChevronRight, Sparkles, ShieldAlert, Calendar } from 'lucide-react';

export default function RoomsSection({ onOpenBooking, onSelectRoomDetail }) {
  const [activeCategory, setActiveCategory] = useState(roomCategories[0].id);

  return (
    <section id="rooms" className="py-20 lg:py-28 bg-white text-chateau-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-chateau-terracotta text-xs font-semibold tracking-[0.25em] uppercase mb-2 block">
            Exclusive Accommodations
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-chateau-river font-normal tracking-tight">
            Ten Exquisite Rooms by the River
          </h2>
          <div className="w-20 h-0.5 bg-chateau-gold mx-auto mt-4 mb-6" />
          <p className="text-chateau-muted font-light text-base sm:text-lg leading-relaxed">
            Inspired by the Indo-Dutch heritage architecture of Cochin's royal palaces. Featuring soaring ceilings, colonnaded verandahs, antique teak furniture, and uninterrupted vistas of the tranquil Periyar River.
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
                  ? 'bg-chateau-river text-chateau-gold border-chateau-river shadow-md'
                  : 'bg-chateau-sand text-chateau-muted border-chateau-border hover:border-chateau-gold/50'
              }`}
            >
              <span>{cat.name}</span>
              <span className="ml-2 text-[10px] opacity-80">({cat.count.split(' ')[0]})</span>
            </button>
          ))}
        </div>

        {/* Selected Category Spotlight */}
        {roomCategories
          .filter((cat) => cat.id === activeCategory)
          .map((room) => (
            <div key={room.id} className="bg-chateau-sand rounded-2xl border border-chateau-border overflow-hidden shadow-xl animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Images Column */}
                <div className="lg:col-span-7 relative flex flex-col justify-between">
                  <div className="relative h-[320px] sm:h-[420px] lg:h-[480px] overflow-hidden group">
                    <img
                      src={room.images[0]}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-chateau-river/80 backdrop-blur-sm text-chateau-sand rounded text-xs tracking-widest uppercase border border-chateau-gold/30">
                      {room.count}
                    </div>
                    <div className="absolute bottom-4 right-4 px-4 py-2 bg-chateau-riverDark/90 backdrop-blur-md rounded text-white text-right">
                      <span className="text-[10px] uppercase tracking-wider text-chateau-gold block">Nightly Rate</span>
                      <span className="font-serif text-xl sm:text-2xl font-semibold text-white">₹{room.price.toLocaleString('en-IN')}</span>
                      <span className="text-[10px] text-chateau-sand/70 block">+ taxes &bull; Breakfast included</span>
                    </div>
                  </div>

                  {/* Thumbnail Row */}
                  <div className="grid grid-cols-3 gap-2 p-3 bg-chateau-riverDark/95">
                    {room.images.map((img, i) => (
                      <div 
                        key={i} 
                        className="h-20 sm:h-24 rounded overflow-hidden cursor-pointer border border-white/10 hover:border-chateau-gold transition-colors"
                        onClick={() => onSelectRoomDetail(room)}
                      >
                        <img src={img} alt={`${room.name} preview ${i+1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Details Column */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-chateau-terracotta font-semibold block mb-1">
                      {room.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-chateau-river font-normal mb-3">
                      {room.name}
                    </h3>
                    
                    {/* Key Specs Pill Row */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-chateau-sand rounded-full text-xs text-chateau-charcoal border border-chateau-border">
                        <Bed className="w-3.5 h-3.5 text-chateau-terracotta" />
                        <span>{room.bed}</span>
                      </div>
                      <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-chateau-sand rounded-full text-xs text-chateau-charcoal border border-chateau-border">
                        <Maximize2 className="w-3.5 h-3.5 text-chateau-gold" />
                        <span>{room.size}</span>
                      </div>
                      <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-chateau-sand rounded-full text-xs text-chateau-charcoal border border-chateau-border">
                        <Waves className="w-3.5 h-3.5 text-teal-600" />
                        <span>{room.view}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-chateau-muted leading-relaxed font-light mb-6">
                      {room.description}
                    </p>

                    {/* Features checklist */}
                    <div className="border-t border-b border-chateau-border/60 py-4 mb-6">
                      <h4 className="text-[11px] uppercase tracking-widest text-chateau-river font-semibold mb-3">
                        Room Inclusions & Amenities
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {room.features.slice(0, 6).map((feat, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-xs text-chateau-charcoal/80">
                            <Check className="w-3.5 h-3.5 text-chateau-terracotta shrink-0" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Booking CTA Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => onOpenBooking({ roomType: room.id })}
                      className="flex-1 bg-chateau-terracotta hover:bg-chateau-terracottaHover text-white py-3 px-5 rounded text-xs tracking-widest uppercase font-semibold text-center transition-all shadow-md flex items-center justify-center space-x-2"
                    >
                      <Calendar className="w-4 h-4 text-amber-200" />
                      <span>Reserve {room.name}</span>
                    </button>
                    <button
                      onClick={() => onSelectRoomDetail(room)}
                      className="py-3 px-4 border border-chateau-river text-chateau-river hover:bg-chateau-river hover:text-chateau-sand rounded text-xs tracking-widest uppercase font-medium transition-colors text-center"
                    >
                      Full Details
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}

        {/* Mass Booking Transparency Policy */}
        <div className="mt-12 p-4 sm:p-5 rounded-xl bg-chateau-sand border border-chateau-gold/30 flex items-start space-x-4 max-w-3xl mx-auto">
          <ShieldAlert className="w-5 h-5 text-chateau-gold mt-0.5 shrink-0" />
          <div className="text-xs text-chateau-muted leading-relaxed">
            <span className="font-semibold text-chateau-river block mb-0.5">Tranquility & Mass Booking Policy</span>
            To protect the peaceful atmosphere of our sanctuary, online multiple-room bookings are moderated. If your family or group requires two or more rooms, our concierge team will be delighted to coordinate your reservation directly.
          </div>
        </div>

      </div>
    </section>
  );
}
