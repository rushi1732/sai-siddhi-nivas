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

  // History tracking ref to ensure mobile back button closes open modals
  const activeModalRef = React.useRef(null);

  // Listen for browser popstate (mobile hardware back button / swipe back gesture)
  React.useEffect(() => {
    const handlePopState = () => {
      if (activeModalRef.current === 'booking') {
        activeModalRef.current = null;
        setBookingModalOpen(false);
      } else if (activeModalRef.current === 'roomDetail') {
        activeModalRef.current = null;
        setSelectedRoomDetail(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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
    activeModalRef.current = 'booking';
    window.history.pushState({ modal: 'booking' }, '');
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    if (activeModalRef.current === 'booking') {
      activeModalRef.current = null;
      if (window.history.state?.modal === 'booking') {
        window.history.back();
      }
    }
  };

  const handleSelectRoomDetail = (room) => {
    setSelectedRoomDetail(room);
    activeModalRef.current = 'roomDetail';
    window.history.pushState({ modal: 'roomDetail' }, '');
  };

  const handleCloseRoomDetail = () => {
    setSelectedRoomDetail(null);
    if (activeModalRef.current === 'roomDetail') {
      activeModalRef.current = null;
      if (window.history.state?.modal === 'roomDetail') {
        window.history.back();
      }
    }
  };

  const handleBookFromDetail = (roomId) => {
    setSelectedRoomDetail(null);
    setBookingInitialData({ roomType: roomId });
    setBookingModalOpen(true);
    activeModalRef.current = 'booking';
    window.history.replaceState({ modal: 'booking' }, '');
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
        onClose={handleCloseRoomDetail}
        onBookCategory={handleBookFromDetail}
      />
    </div>
  );
}
