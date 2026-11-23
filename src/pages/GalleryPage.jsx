import React, { useState, useEffect, useRef } from 'react';
import PageHero from '../components/PageHero';
import { galleryImages } from '../data/hotelData';
import { 
  X, ChevronLeft, ChevronRight, Maximize2, 
  Calendar, MessageCircle, Sparkles, Camera 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GalleryPage({ onOpenBooking }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const isPoppingRef = useRef(false);

  const categories = [
    { id: 'all', label: 'All Photographs' },
    { id: 'exterior', label: 'Hotel Exterior' },
    { id: 'rooms', label: 'Room Interiors' },
    { id: 'reception', label: 'Reception & Lobby' },
    { id: 'dining', label: 'Restaurant & Dining' },
    { id: 'surroundings', label: 'Nature Surroundings' }
  ];

  const filteredImages = activeFilter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  // History Popstate Handling for Mobile Back Button
  useEffect(() => {
    if (!selectedImage) return;
    window.history.pushState({ modal: 'galleryPageLightbox' }, '');
    const handlePop = () => {
      isPoppingRef.current = true;
      setSelectedImage(null);
    };
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, [selectedImage]);

  const handleCloseLightbox = () => {
    setSelectedImage(null);
    if (!isPoppingRef.current && window.history.state?.modal === 'galleryPageLightbox') {
      window.history.back();
    }
    isPoppingRef.current = false;
  };

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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowRight') handleNextImage();
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'Escape') handleCloseLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredImages]);

  return (
    <div className="bg-white text-hotel-charcoal">
      {/* 1. Page Hero Banner */}
      <PageHero
        title="VISUAL SHOWCASE"
        subtitle="A High-Resolution Photographic Journey Through Sai Siddhi Nivas and Its Serene Konkan Environs."
        breadcrumb="GALLERY"
        badge="PHOTOGRAPHY • ARCHITECTURE • SPACES"
        image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1920&auto=format&fit=crop"
      />

      {/* 2. Gallery Filters & Image Grid */}
      <section className="py-16 sm:py-24 bg-[#faf9f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.28em] text-hotel-goldDark font-semibold block mb-2">
              CAPTURED MOMENTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-hotel-charcoal font-normal uppercase">
              Explore Our Spaces
            </h2>
            <div className="w-16 h-[2px] bg-hotel-gold mx-auto my-4" />
            <p className="text-xs sm:text-sm text-neutral-600 font-light">
              Filter by spaces to view our property architecture, guest rooms, reception desk, dining facilities, and peaceful surroundings.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveFilter(c.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all border ${
                  activeFilter === c.id
                    ? 'bg-hotel-forest text-hotel-goldLight border-hotel-forest shadow-md'
                    : 'bg-white text-neutral-600 border-neutral-300 hover:border-hotel-gold hover:bg-neutral-50'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Masonry / Responsive Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence>
              {filteredImages.map((img) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  key={img.id}
                  onClick={() => setSelectedImage(img)}
                  className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-neutral-200/90 bg-hotel-forestDark"
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-hotel-forestDark/90 backdrop-blur-sm text-hotel-goldLight text-[10px] tracking-widest uppercase font-semibold rounded border border-hotel-gold/30">
                    {img.categoryLabel}
                  </div>

                  {/* Expand Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Image Title */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif text-base sm:text-lg font-normal leading-snug drop-shadow-md">
                      {img.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* 3. Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={handleCloseLightbox}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-hotel-gold p-2.5 z-30 rounded-full bg-white/10 hover:bg-white/20 transition-all"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-white hover:text-hotel-gold p-3 z-30 rounded-full bg-white/10 hover:bg-white/20 transition-all"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white hover:text-hotel-gold p-3 z-30 rounded-full bg-white/10 hover:bg-white/20 transition-all"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Image Showcase */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] w-full text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[75vh] object-contain mx-auto rounded-xl shadow-2xl border border-white/10"
              />
              <div className="mt-4 text-white">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-hotel-gold block font-semibold">
                  {selectedImage.categoryLabel}
                </span>
                <h3 className="font-serif text-lg sm:text-2xl font-light mt-0.5">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Booking CTA Strip */}
      <section className="py-14 bg-white border-t border-neutral-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h3 className="font-serif text-2xl sm:text-3xl text-hotel-forest font-normal">
            Impressed by Our Spaces?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto font-light">
            Book your room directly at Sai Siddhi Nivas for best seasonal tariffs and instant confirmation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto bg-hotel-forest hover:bg-hotel-forestDark text-white px-7 py-3 text-xs uppercase tracking-widest font-semibold shadow-md transition-all flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4 text-hotel-goldLight" />
              <span>Reserve Your Room</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
