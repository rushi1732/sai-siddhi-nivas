import React, { useState } from 'react';
import { galleryImages } from '../data/hotelData';
import { 
  ImageIcon, X, ChevronLeft, ChevronRight, Maximize2, 
  Sparkles, CheckCircle2 
} from 'lucide-react';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', label: 'All Photographs' },
    { id: 'exterior', label: 'Hotel Exterior' },
    { id: 'rooms', label: 'Room Interiors' },
    { id: 'reception', label: 'Reception & Lobby' },
    { id: 'dining', label: 'Restaurant & Dining' },
    { id: 'surroundings', label: 'Property Surroundings' }
  ];

  const filteredImages = activeFilter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  const handleNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(i => i.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const handlePrevImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(i => i.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white text-hotel-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-hotel-goldDark text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            <ImageIcon className="w-3.5 h-3.5 text-hotel-gold" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-hotel-forest font-normal tracking-tight">
            Glimpse of Sai Siddhi Nivas
          </h2>
          <div className="w-20 h-0.5 bg-hotel-gold mx-auto mt-4 mb-6" />
          <p className="text-hotel-muted font-light text-base sm:text-lg leading-relaxed">
            Explore our hotel architecture, well-appointed guest rooms, welcoming reception, dining facilities, and tranquil Konkan surroundings.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveFilter(c.id)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all border ${
                activeFilter === c.id
                  ? 'bg-hotel-forest text-hotel-goldLight border-hotel-forest shadow-md'
                  : 'bg-hotel-ivory text-hotel-muted border-hotel-border hover:border-hotel-gold'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Masonry / Editorial Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden cursor-pointer shadow-luxury border border-hotel-border bg-hotel-forestDark"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[10px] uppercase tracking-widest text-hotel-gold font-semibold mb-1">
                  {img.categoryLabel}
                </span>
                <h4 className="font-serif text-lg text-white font-normal">
                  {img.title}
                </h4>
              </div>

              {/* Expand Icon Bubble */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                <Maximize2 className="w-3.5 h-3.5 text-hotel-goldLight" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-hotel-gold p-2 z-20 rounded-full bg-white/10 hover:bg-white/20 transition-all"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-hotel-gold p-3 z-20 rounded-full bg-white/10 hover:bg-white/20 transition-all"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-hotel-gold p-3 z-20 rounded-full bg-white/10 hover:bg-white/20 transition-all"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Image Showcase Container */}
          <div 
            className="relative max-w-5xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[75vh] object-contain mx-auto rounded-xl shadow-2xl border border-white/10"
            />
            <div className="text-center mt-4 text-white">
              <span className="text-xs uppercase tracking-widest text-hotel-gold block font-semibold">
                {selectedImage.categoryLabel}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-light mt-0.5">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
