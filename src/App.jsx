import React, { useState } from 'react';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import RoomsSection from './components/RoomsSection';
import AmenitiesSection from './components/AmenitiesSection';
import DiningSection from './components/DiningSection';
import GallerySection from './components/GallerySection';
import LocationSection from './components/LocationSection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import RoomDetailModal from './components/RoomDetailModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState({});
  const [selectedRoomDetail, setSelectedRoomDetail] = useState(null);

  React.useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const el = document.querySelector(window.location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, []);

  const handleOpenBooking = (initialParams = {}) => {
    setBookingInitialData(initialParams);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  const handleSelectRoomDetail = (room) => {
    setSelectedRoomDetail(room);
  };

  const handleBookFromDetail = (roomId) => {
    setSelectedRoomDetail(null);
    handleOpenBooking({ roomType: roomId });
  };

  return (
    <div className="min-h-screen bg-hotel-ivory text-hotel-charcoal font-sans selection:bg-hotel-gold selection:text-white relative">
      {/* Luxury Golden Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Top Fixed Header with Luxury Monogram & Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Flow */}
      <main>
        {/* Full-screen Hero Section with Required Heading & 3 CTA buttons */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* About Sai Siddhi Nivas */}
        <AboutSection />

        {/* Rooms & Accommodations with Large Photos & Category Tabs */}
        <RoomsSection 
          onOpenBooking={handleOpenBooking}
          onSelectRoomDetail={handleSelectRoomDetail}
        />

        {/* Dedicated Hotel Amenities (Icon-based, confirmed on-site) */}
        <AmenitiesSection onOpenBooking={handleOpenBooking} />

        {/* Restaurant & Dining Section */}
        <DiningSection onOpenBooking={handleOpenBooking} />

        {/* Luxury Photo Gallery with Lightbox */}
        <GallerySection />

        {/* Prime Location along MSH4 with Plus Code & Get Directions */}
        <LocationSection />

        {/* Verified Guest Reviews & Rating Badges */}
        <ReviewsSection />

        {/* Direct Contact & Reservation Enquiry Form */}
        <ContactSection />
      </main>

      {/* Luxury Footer with Contact & Location */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Floating WhatsApp Concierge Button */}
      <FloatingWhatsApp />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialData={bookingInitialData}
      />

      {/* Room Full Details Modal */}
      <RoomDetailModal
        room={selectedRoomDetail}
        onClose={() => setSelectedRoomDetail(null)}
        onBookCategory={handleBookFromDetail}
      />
    </div>
  );
}
