import React, { useState } from 'react';
import { hotelInfo } from '../data/hotelData';
import { 
  X, Check, Bed, Maximize2, Users, Calendar, 
  ChevronLeft, ChevronRight, MessageCircle, Phone, Info 
} from 'lucide-react';

export default function RoomDetailModal({ room, onClose, onBookCategory }) {
  if (!room) return null;

  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello Sai Siddhi Nivas! I would like to book the ${room.name}.\n` +
      `Category: ${room.category}\n` +
      `Capacity: ${room.capacity}\n\n` +
      `Please let me know room availability and confirm tariff details.`
    );
    window.open(`https://wa.me/${hotelInfo.whatsapp.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex justify-center items-end sm:items-center p-0 sm:p-4 overflow-hidden animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white max-w-2xl w-full max-h-[92vh] sm:max-h-[88vh] flex flex-col rounded-t-2xl sm:rounded-2xl border border-hotel-border shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Showcase Header Strip */}
        <div className="relative h-56 sm:h-72 shrink-0 bg-hotel-forestDark overflow-hidden">
          {/* Mobile Drag Pill */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 w-12 h-1 bg-white/40 rounded-full sm:hidden" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/70 hover:bg-hotel-forest text-white flex items-center justify-center transition-colors shadow-lg"
            aria-label="Close Room Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <img
            src={room.images[activeImgIndex] || room.images[0]}
            alt={room.name}
            className="w-full h-full object-cover transition-all duration-500"
          />
          
          {/* Prev/Next arrows if multiple */}
          {room.images.length > 1 && (
            <>
              <button
                onClick={() => setActiveImgIndex((prev) => (prev - 1 + room.images.length) % room.images.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-hotel-gold hover:text-hotel-forestDark transition-all"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveImgIndex((prev) => (prev + 1) % room.images.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-hotel-gold hover:text-hotel-forestDark transition-all"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <div className="absolute bottom-3 left-4 flex space-x-1.5 z-20">
            {room.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImgIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === activeImgIndex ? 'w-6 bg-hotel-gold' : 'w-2 bg-white/50'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-3.5 left-4 z-20 px-3 py-1 bg-hotel-forestDark/90 backdrop-blur-sm text-hotel-goldLight text-[10px] sm:text-xs tracking-wider uppercase font-semibold rounded-lg border border-hotel-gold/30">
            {room.category}
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-7 space-y-4 sm:space-y-5 overscroll-contain pb-8 sm:pb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-hotel-goldDark font-semibold">
                {room.subtitle}
              </span>
              <h3 className="font-serif text-xl sm:text-3xl text-hotel-forest font-normal">
                {room.name}
              </h3>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-[9px] uppercase tracking-wider text-hotel-muted block font-sans font-medium">
                Seasonal Tariff Guidance
              </span>
              <div className="flex items-baseline justify-start sm:justify-end space-x-1 my-0.5">
                <span className="font-sans font-bold text-base sm:text-lg text-hotel-goldDark select-none">₹</span>
                <span className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-hotel-forest">
                  {room.price.toLocaleString('en-IN')}
                </span>
                <span className="font-sans text-xs text-hotel-muted font-normal">*</span>
              </div>
              <span className="text-[9.5px] text-hotel-muted block font-sans">
                / night + taxes &bull; editable placeholder
              </span>
            </div>
          </div>

          {/* Quick Specs */}
          <div className="flex flex-wrap gap-2 pt-1 border-t border-hotel-border">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-hotel-ivory rounded-lg text-xs text-hotel-charcoal border border-hotel-border">
              <Bed className="w-3.5 h-3.5 text-hotel-forest" />
              <span>{room.bed}</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-hotel-ivory rounded-lg text-xs text-hotel-charcoal border border-hotel-border">
              <Users className="w-3.5 h-3.5 text-hotel-goldDark" />
              <span>{room.capacity}</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-hotel-ivory rounded-lg text-xs text-hotel-charcoal border border-hotel-border">
              <Maximize2 className="w-3.5 h-3.5 text-hotel-forestMuted" />
              <span>{room.size}</span>
            </span>
          </div>

          <p className="text-xs sm:text-sm text-hotel-muted leading-relaxed font-light">
            {room.description}
          </p>

          {/* Inclusions */}
          <div className="border-t border-b border-hotel-border py-3.5">
            <h4 className="text-[11px] sm:text-xs uppercase tracking-widest text-hotel-forest font-semibold mb-2.5">
              Room Amenities &amp; Services
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {room.features.map((feat, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs text-hotel-charcoal/90">
                  <Check className="w-3.5 h-3.5 text-hotel-forest shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rate notice */}
          <div className="p-3 bg-hotel-ivory rounded-lg text-[10.5px] text-hotel-muted border border-hotel-border flex items-start space-x-2">
            <Info className="w-3.5 h-3.5 text-hotel-goldDark shrink-0 mt-0.5" />
            <span>
              Tariff Note: Displayed rates are starting placeholders. Final tariffs depend on guest count, dates, and season. Please enquire directly with our reception desk.
            </span>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={() => onBookCategory(room.id)}
              className="flex-1 min-h-[46px] bg-gradient-to-r from-hotel-forest to-hotel-forestDark text-hotel-goldLight hover:from-hotel-forestDark hover:to-hotel-forest py-3 px-5 rounded-xl text-xs uppercase tracking-widest font-bold text-center transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4 text-hotel-gold" />
              <span>Fill Reservation Form</span>
            </button>
            <button
              onClick={handleWhatsAppBooking}
              className="min-h-[46px] bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-5 rounded-xl text-xs uppercase tracking-widest font-bold transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
