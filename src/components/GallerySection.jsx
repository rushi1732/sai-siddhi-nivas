import React, { useState } from 'react';
import { galleryImages } from '../data/cranganorData';
import { ImageIcon, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', label: 'All Photographs' },
    { id: 'chateau', label: 'Château & Verandahs' },
    { id: 'rooms', label: 'Rooms & Suites' },
    { id: 'pool', label: '20m Infinity Pool' },
    { id: 'river', label: 'River Periyar & Sunsets' },
    { id: 'arts', label: 'Arts & Culture' },
    { id: 'spa', label: 'Ayurveda Spa' }
  ];

  const filteredImages = activeFilter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-chateau-sand parchment-pattern text-chateau-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-chateau-terracotta text-xs font-semibold tracking-[0.25em] uppercase mb-2">
            <ImageIcon className="w-3.5 h-3.5 text-chateau-gold" />
            <span>Visual Glimpse</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-chateau-river font-normal tracking-tight">
            Life at Cranganor Château
          </h2>
          <div className="w-20 h-0.5 bg-chateau-gold mx-auto mt-4 mb-6" />
          <p className="text-chateau-muted font-light text-base sm:text-lg leading-relaxed">
            Moments of quiet contemplation, colonnaded shadows, rippling waters, and the timeless tapestry of Kerala's heritage.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveFilter(c.id)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all border ${
                activeFilter === c.id
                  ? 'bg-chateau-river text-chateau-gold border-chateau-river shadow-md'
                  : 'bg-white text-chateau-muted border-chateau-border hover:border-chateau-gold'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="group relative h-72 rounded-xl overflow-hidden cursor-pointer shadow-md border border-chateau-border bg-chateau-riverDark"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[10px] uppercase tracking-widest text-chateau-gold font-semibold">
                  {img.category}
                </span>
                <h4 className="font-serif text-lg text-white font-medium">
                  {img.title}
                </h4>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-chateau-gold p-2 z-10"
            aria-label="Close Lightbox"
          >
            <X className="w-7 h-7" />
          </button>
          
          <div 
            className="relative max-w-5xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain mx-auto rounded-lg shadow-2xl"
            />
            <div className="text-center mt-4 text-white">
              <span className="text-xs uppercase tracking-widest text-chateau-gold block">
                {selectedImage.category}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-light">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
