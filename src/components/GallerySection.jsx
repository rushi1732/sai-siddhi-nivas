import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { galleryImages } from '../data/hotelData';
import { 
  ImageIcon, X, ChevronLeft, ChevronRight, Maximize2, 
  Sparkles, CheckCircle2, ArrowRight 
} from 'lucide-react';
import AnimateIn from './AnimateIn';
import { motion, AnimatePresence } from 'framer-motion';

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

  const isPoppingGalleryRef = React.useRef(false);

  React.useEffect(() => {
    if (!selectedImage) return;
    window.history.pushState({ modal: 'galleryLightbox' }, '');
    const handlePop = () => {
      isPoppingGalleryRef.current = true;
      setSelectedImage(null);
    };
    window.addEventListener('popstate', handlePop);
    return () => {
      window.removeEventListener('popstate', handlePop);
    };
  }, [selectedImage]);

  const handleCloseImage = () => {
    setSelectedImage(null);
    if (!isPoppingGalleryRef.current && window.history.state?.modal === 'galleryLightbox') {
      window.history.back();
    }
    isPoppingGalleryRef.current = false;
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

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white text-hotel-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimateIn direction="up">
          <div className="text-center max-w-4xl mx-auto mb-14 lg:mb-20">
            <span className="text-xs sm:text-sm tracking-[0.32em] uppercase font-semibold text-hotel-goldDark mb-3 block">
              VISUAL SHOWCASE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[52px] text-hotel-charcoal font-normal uppercase tracking-[0.06em] leading-[1.15] mb-6">
              GLIMPSE OF SAI SIDDHI NIVAS
            </h2>
            <div className="w-16 h-[2px] bg-hotel-gold mx-auto mb-8" />
            <p className="font-sans font-light text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              Explore our hotel architecture, well-appointed guest rooms, welcoming reception, dining facilities, and tranquil Konkan surroundings.
            </p>
          </div>
        </AnimateIn>

        {/* Category Filters */}
        <AnimateIn direction="up" delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((c) => (
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                key={c.id}
                onClick={() => setActiveFilter(c.id)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all border ${
                  activeFilter === c.id
                    ? 'bg-hotel-forest text-hotel-goldLight border-hotel-forest shadow-md'
                    : 'bg-hotel-ivory text-hotel-muted border-hotel-border hover:border-hotel-gold'
                }`}
              >
                {c.label}
              </motion.button>
            ))}
          </div>
        </AnimateIn>

        {/* Masonry / Editorial Image Grid with Staggered Fade-in */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4 }}
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dedicated Page Link Button */}
        <div className="mt-12 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center space-x-2 bg-hotel-forest hover:bg-hotel-forestDark text-white px-8 py-3.5 rounded text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md active:scale-95"
          >
            <span>VIEW COMPLETE PHOTO GALLERY</span>
            <ArrowRight className="w-3.5 h-3.5 text-hotel-goldLight" />
          </Link>
        </div>

      </div>

      {/* Interactive Lightbox Modal with Animated Backdrop */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={handleCloseImage}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseImage}
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
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
