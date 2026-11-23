import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import RoomsSection from '../components/RoomsSection';
import AmenitiesSection from '../components/AmenitiesSection';
import DiningSection from '../components/DiningSection';
import GallerySection from '../components/GallerySection';
import LocationSection from '../components/LocationSection';
import ReviewsSection from '../components/ReviewsSection';
import ContactSection from '../components/ContactSection';

export default function HomePage({ onOpenBooking, onSelectRoomDetail }) {
  return (
    <main className="relative bg-white w-full">
      {/* 1. Full Screen Cinematic Hero Section - Sticky Parallax Locked Background */}
      <div 
        className="sticky top-0 h-screen w-full z-0 overflow-hidden"
        style={{ position: 'sticky', top: 0 }}
      >
        <Hero onOpenBooking={onOpenBooking} />
      </div>

      {/* 2. Content Layer - Glides Smoothly UP and OVER the Locked Hero Photo */}
      <div className="relative z-10 bg-white shadow-[0_-30px_60px_rgba(0,0,0,0.85)]">
        {/* About Sai Siddhi Nivas */}
        <AboutSection />

        {/* Rooms & Accommodations Showcase */}
        <RoomsSection 
          onOpenBooking={onOpenBooking}
          onSelectRoomDetail={onSelectRoomDetail}
        />

        {/* Hotel Amenities & Resort Comforts (with Locked Parallax Background Photo) */}
        <AmenitiesSection onOpenBooking={onOpenBooking} />

        {/* Restaurant & Dining Showcase */}
        <DiningSection onOpenBooking={onOpenBooking} />

        {/* Photo Gallery Showcase */}
        <GallerySection />

        {/* Prime Highway Location along MSH4 */}
        <LocationSection />

        {/* Verified Guest Reviews & Ratings */}
        <ReviewsSection />

        {/* Direct Contact & Reservation Enquiry Form */}
        <ContactSection />
      </div>
    </main>
  );
}
