import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import RoomDetailModal from './components/RoomDetailModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AccommodationPage from './pages/AccommodationPage';
import DiningPage from './pages/DiningPage';
import ExperiencesPage from './pages/ExperiencesPage';
import GalleryPage from './pages/GalleryPage';
import LocationPage from './pages/LocationPage';
import ContactPage from './pages/ContactPage';

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
      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Luxury Golden Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Top Fixed Header with Luxury Monogram & Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Routing between dedicated pages */}
      <Routes>
        <Route 
          path="/" 
          element={
            <HomePage 
              onOpenBooking={handleOpenBooking} 
              onSelectRoomDetail={handleSelectRoomDetail} 
            />
          } 
        />
        <Route 
          path="/about" 
          element={<AboutPage onOpenBooking={handleOpenBooking} />} 
        />
        <Route 
          path="/accommodation" 
          element={
            <AccommodationPage 
              onOpenBooking={handleOpenBooking} 
              onSelectRoomDetail={handleSelectRoomDetail} 
            />
          } 
        />
        <Route 
          path="/dining" 
          element={<DiningPage onOpenBooking={handleOpenBooking} />} 
        />
        <Route 
          path="/experiences" 
          element={<ExperiencesPage onOpenBooking={handleOpenBooking} />} 
        />
        <Route 
          path="/gallery" 
          element={<GalleryPage onOpenBooking={handleOpenBooking} />} 
        />
        <Route 
          path="/location" 
          element={<LocationPage onOpenBooking={handleOpenBooking} />} 
        />
        <Route 
          path="/contact" 
          element={<ContactPage onOpenBooking={handleOpenBooking} />} 
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

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
