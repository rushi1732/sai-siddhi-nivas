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
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full border border-hotel-border shadow-2xl overflow-hidden my-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-hotel-forest flex items-center justify-center transition-colors"
          aria-label="Close Room Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Showcase */}
        <div className="relative h-72 sm:h-96 bg-hotel-forestDark overflow-hidden">
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
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-hotel-gold hover:text-hotel-forestDark transition-all"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveImgIndex((prev) => (prev + 1) % room.images.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-hotel-gold hover:text-hotel-forestDark transition-all"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <div className="absolute bottom-3 left-4 flex space-x-1.5">
            {room.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImgIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === activeImgIndex ? 'w-6 bg-hotel-gold' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>

          <div className="absolute top-4 left-4 px-3 py-1 bg-hotel-forestDark/90 backdrop-blur-sm text-hotel-goldLight text-xs tracking-wider uppercase font-semibold rounded-lg border border-hotel-gold/30">
            {room.category}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <span className="text-xs uppercase tracking-widest text-hotel-goldDark font-semibold">
                {room.subtitle}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-hotel-forest font-normal">
                {room.name}
              </h3>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-[10px] uppercase tracking-wider text-hotel-muted block">
                Seasonal Tariff Guidance
              </span>
              <span className="font-serif text-2xl font-bold text-hotel-forest">
                ₹{room.price.toLocaleString('en-IN')}*
              </span>
              <span className="text-[10px] text-hotel-muted block">
                / night + taxes &bull; editable placeholder
              </span>
            </div>
          </div>

          {/* Quick Specs */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-hotel-border">
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
          <div className="border-t border-b border-hotel-border py-4">
            <h4 className="text-xs uppercase tracking-widest text-hotel-forest font-semibold mb-3">
              Room Amenities & Services
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.features.map((feat, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs text-hotel-charcoal/90">
                  <Check className="w-3.5 h-3.5 text-hotel-forest shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rate notice */}
          <div className="p-3 bg-hotel-ivory rounded-lg text-[11px] text-hotel-muted border border-hotel-border flex items-start space-x-2">
            <Info className="w-3.5 h-3.5 text-hotel-goldDark shrink-0 mt-0.5" />
            <span>
              Tariff Note: Displayed rates are starting placeholders. Final tariffs depend on guest count, dates, and season. Please enquire directly with our reception desk.
            </span>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onBookCategory(room.id)}
              className="flex-1 bg-gradient-to-r from-hotel-forest to-hotel-forestDark text-hotel-goldLight hover:from-hotel-forestDark hover:to-hotel-forest py-3 px-5 rounded-xl text-xs uppercase tracking-widest font-bold text-center transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4 text-hotel-gold" />
              <span>Fill Reservation Form</span>
            </button>
            <button
              onClick={handleWhatsAppBooking}
              className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-5 rounded-xl text-xs uppercase tracking-widest font-bold transition-all shadow-md flex items-center justify-center space-x-2"
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
