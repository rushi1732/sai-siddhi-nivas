import React, { useState } from 'react';
import { X, Check, Bed, Maximize2, Waves, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

export default function RoomDetailModal({ room, onClose, onBookCategory }) {
  if (!room) return null;

  const [activeImgIndex, setActiveImgIndex] = useState(0);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full border border-chateau-border shadow-2xl overflow-hidden my-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-chateau-terracotta flex items-center justify-center transition-colors"
          aria-label="Close Room Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Showcase */}
        <div className="relative h-72 sm:h-96 bg-chateau-riverDark overflow-hidden">
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
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-chateau-gold hover:text-chateau-riverDark"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveImgIndex((prev) => (prev + 1) % room.images.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-chateau-gold hover:text-chateau-riverDark"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}

          <div className="absolute bottom-3 left-4 flex space-x-1.5">
            {room.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImgIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === activeImgIndex ? 'w-6 bg-chateau-gold' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <span className="text-xs uppercase tracking-widest text-chateau-terracotta font-semibold">
                {room.subtitle}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-chateau-river font-normal">
                {room.name}
              </h3>
            </div>
            <div className="text-left sm:text-right">
              <span className="font-serif text-2xl font-bold text-chateau-river">
                ₹{room.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-chateau-muted block">/ night + taxes &bull; Breakfast included</span>
            </div>
          </div>

          {/* Quick Specs */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-chateau-border/60">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-chateau-sand rounded text-xs text-chateau-charcoal border border-chateau-border">
              <Bed className="w-3.5 h-3.5 text-chateau-terracotta" />
              <span>{room.bed}</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-chateau-sand rounded text-xs text-chateau-charcoal border border-chateau-border">
              <Maximize2 className="w-3.5 h-3.5 text-chateau-gold" />
              <span>{room.size}</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-chateau-sand rounded text-xs text-chateau-charcoal border border-chateau-border">
              <Waves className="w-3.5 h-3.5 text-teal-600" />
              <span>{room.view}</span>
            </span>
          </div>

          <p className="text-xs sm:text-sm text-chateau-muted leading-relaxed font-light">
            {room.description}
          </p>

          {/* Inclusions */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-chateau-river font-semibold mb-3">
              Room Amenities & Heritage Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.features.map((feat, i) => (
                <div key={i} className="flex items-center space-x-2 text-xs text-chateau-charcoal/80">
                  <Check className="w-3.5 h-3.5 text-chateau-terracotta shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-chateau-border flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 border border-chateau-border rounded text-xs tracking-wider uppercase font-medium text-chateau-charcoal hover:bg-chateau-sand"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookCategory(room.id);
              }}
              className="px-6 py-2.5 bg-chateau-terracotta hover:bg-chateau-terracottaHover text-white rounded text-xs tracking-widest uppercase font-semibold flex items-center space-x-2 shadow-md"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-200" />
              <span>Book This Category</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
