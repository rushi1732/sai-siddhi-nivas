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
    <main>
      {/* 1. Full Screen Cinematic Hero Section with Floating Frosted Glass Booking Engine */}
      <Hero onOpenBooking={onOpenBooking} />

      {/* 2. About Sai Siddhi Nivas (Curated Overview) */}
      <AboutSection />

      {/* 3. Rooms & Accommodations Showcase */}
      <RoomsSection 
        onOpenBooking={onOpenBooking}
        onSelectRoomDetail={onSelectRoomDetail}
      />

      {/* 4. Hotel Amenities & Resort Comforts */}
      <AmenitiesSection onOpenBooking={onOpenBooking} />

      {/* 5. Restaurant & Dining Showcase */}
      <DiningSection onOpenBooking={onOpenBooking} />

      {/* 6. Photo Gallery Showcase */}
      <GallerySection />

      {/* 7. Prime Highway Location along MSH4 */}
      <LocationSection />

      {/* 8. Verified Guest Reviews & Ratings */}
      <ReviewsSection />

      {/* 9. Direct Contact & Reservation Enquiry Form */}
      <ContactSection />
    </main>
  );
}
