import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import RoomsSection from './components/RoomsSection';
import DiningSection from './components/DiningSection';
import ExperiencesSection from './components/ExperiencesSection';
import ArtsSocietySection from './components/ArtsSocietySection';
import PoolSpaSection from './components/PoolSpaSection';
import GallerySection from './components/GallerySection';
import LocationSection from './components/LocationSection';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import RoomDetailModal from './components/RoomDetailModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState({});
  const [selectedRoomDetail, setSelectedRoomDetail] = useState(null);

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
    <div className="min-h-screen bg-chateau-sand text-chateau-charcoal font-sans selection:bg-chateau-gold selection:text-white">
      {/* Top Fixed Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Flow */}
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        <OurStory />
        <RoomsSection 
          onOpenBooking={handleOpenBooking}
          onSelectRoomDetail={handleSelectRoomDetail}
        />
        <DiningSection />
        <ExperiencesSection />
        <ArtsSocietySection />
        <PoolSpaSection />
        <GallerySection />
        <LocationSection />
        <ReviewsSection />
      </main>

      {/* Heritage Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

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
