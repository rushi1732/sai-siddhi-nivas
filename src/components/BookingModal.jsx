import React, { useState, useEffect } from 'react';
import { roomCategories, hotelInfo } from '../data/hotelData';
import { 
  X, Calendar, Users, CheckCircle2, Phone, 
  MessageCircle, Sparkles, Send, AlertCircle, Info 
} from 'lucide-react';
import { motion } from 'framer-motion';

// Local date helper to avoid timezone issues
const getLocalDateString = (d = new Date()) => {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export default function BookingModal({ isOpen, onClose, initialData = {} }) {
  const today = getLocalDateString();
  const tomorrow = getLocalDateString(new Date(Date.now() + 86400000));
  const threeDaysLater = getLocalDateString(new Date(Date.now() + 86400000 * 3));

  const [adults, setAdults] = useState(initialData.adults || 2);
  const [children, setChildren] = useState(initialData.children || 0);

  const [formData, setFormData] = useState({
    guestName: '',
    mobileNumber: '',
    roomType: initialData.roomType || roomCategories[0].id,
    checkIn: initialData.checkIn || tomorrow,
    checkOut: initialData.checkOut || threeDaysLater,
    specialRequests: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    error: ''
  });

  useEffect(() => {
    if (initialData.roomType) {
      setFormData(prev => ({
        ...prev,
        roomType: initialData.roomType,
        checkIn: initialData.checkIn || prev.checkIn,
        checkOut: initialData.checkOut || prev.checkOut,
      }));
    }
    if (initialData.adults !== undefined) setAdults(Number(initialData.adults) || 2);
    if (initialData.children !== undefined) setChildren(Number(initialData.children) || 0);
  }, [initialData]);

  if (!isOpen) return null;

  const selectedRoomObj = roomCategories.find(r => r.id === formData.roomType) || roomCategories[0];

  // Calculate nights
  const checkInDate = new Date(formData.checkIn);
  const checkOutDate = new Date(formData.checkOut);
  const diffTime = Math.max(0, checkOutDate - checkInDate);
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  const estimatedTotal = nights * selectedRoomObj.price;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.guestName.trim()) {
      setStatus({ submitted: false, error: 'Please enter your full name.' });
      return;
    }
    const cleaned = formData.mobileNumber.replace(/\D/g, '');
    if (cleaned.length < 10) {
      setStatus({ submitted: false, error: 'Please enter a valid 10-digit mobile number.' });
      return;
    }
    setStatus({ submitted: true, error: '' });
  };

  const handleWhatsAppRedirect = () => {
    const totalGuestsText = `${adults} Adult${adults > 1 ? 's' : ''}${children > 0 ? `, ${children} Child${children > 1 ? 'ren' : ''}` : ''}`;
    const text = encodeURIComponent(
      `Hello Sai Siddhi Nivas!\n\n` +
      `I would like to enquire about room booking:\n` +
      `• *Guest Name:* ${formData.guestName || 'Guest'}\n` +
      `• *Mobile Number:* ${formData.mobileNumber || 'Not provided'}\n` +
      `• *Room Category:* ${selectedRoomObj.name}\n` +
      `• *Dates:* ${formData.checkIn} to ${formData.checkOut} (${nights} Night${nights > 1 ? 's' : ''})\n` +
      `• *Adults:* ${adults}\n` +
      `• *Children:* ${children}\n` +
      `• *Total Guests:* ${totalGuestsText}\n` +
      `• *Estimated Tariff:* ₹${estimatedTotal.toLocaleString('en-IN')}\n` +
      `• *Special Requests:* ${formData.specialRequests || 'None'}\n\n` +
      `Please verify room availability and confirm tariff details.`
    );
    window.open(`https://wa.me/${hotelInfo.whatsapp.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white max-w-3xl w-full border border-neutral-200/90 shadow-2xl overflow-hidden my-4 sm:my-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Strip: One&Only Luxury Aesthetic */}
        <div className="bg-hotel-forestDark px-6 sm:px-8 py-5 text-hotel-ivory flex items-center justify-between border-b border-hotel-gold/30">
          <div>
            <span className="text-[10px] tracking-[0.28em] uppercase font-semibold text-hotel-gold block mb-1">
              SAI SIDDHI NIVAS &bull; KIRTANWADI TARF
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
              Book Your Stay &amp; Reservation Enquiry
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 border border-white/20 hover:border-hotel-gold text-white/80 hover:text-white rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
            aria-label="Close Booking Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {status.submitted ? (
          <div className="p-8 sm:p-12 text-center space-y-5 animate-fade-in bg-white">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-800 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h4 className="font-serif text-2xl sm:text-3xl text-hotel-forest">
              Reservation Enquiry Received
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto leading-relaxed">
              Thank you, <strong className="text-neutral-900">{formData.guestName}</strong>. Your enquiry for <strong className="text-neutral-900">{selectedRoomObj.name}</strong> from <strong className="text-neutral-900">{formData.checkIn}</strong> to <strong className="text-neutral-900">{formData.checkOut}</strong> ({adults} Adult{adults > 1 ? 's' : ''}{children > 0 ? `, ${children} Child${children > 1 ? 'ren' : ''}` : ''}) has been logged. Our hotel team will call or message <strong className="text-neutral-900">{formData.mobileNumber}</strong> shortly to confirm availability and discuss tariffs.
            </p>
            
            <div className="p-4 bg-neutral-50 rounded border border-neutral-200 text-xs text-neutral-600 text-left max-w-lg mx-auto">
              <span className="font-semibold block text-hotel-forest mb-1">Booking Policy:</span>
              As per hotel guidelines, room reservations are confirmed directly by our desk staff. For immediate instant confirmation, you may message our manager on WhatsApp below.
            </div>

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={handleWhatsAppRedirect}
                className="bg-[#133826] hover:bg-hotel-forestDark text-white px-7 py-3.5 text-xs tracking-wider uppercase font-semibold flex items-center justify-center space-x-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant Confirmation on WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="border border-neutral-300 px-6 py-3.5 text-xs tracking-wider uppercase font-semibold text-neutral-700 hover:bg-neutral-100"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6 bg-white">
            
            {status.error && (
              <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{status.error}</span>
              </div>
            )}

            {/* Live Room Summary Strip - Clean Stylish Rupee & Number Typography */}
            <div className="p-4 sm:p-5 bg-neutral-50/70 border border-neutral-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <span className="text-[10px] uppercase tracking-[0.24em] text-hotel-goldDark font-semibold block mb-0.5">
                  SELECTED CATEGORY
                </span>
                <span className="font-serif text-xl sm:text-2xl text-hotel-forest font-semibold block">
                  {selectedRoomObj.name}
                </span>
                <span className="text-xs text-neutral-500 block font-sans mt-0.5">
                  {selectedRoomObj.capacity} &bull; {selectedRoomObj.size}
                </span>
              </div>
              
              {/* Stylish Rupee Sign & Crisp Modern Numbers */}
              <div className="text-left sm:text-right">
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 block font-sans font-medium">
                  ESTIMATED TARIFF ({nights} NIGHT{nights > 1 ? 'S' : ''})
                </span>
                <div className="flex items-baseline justify-start sm:justify-end space-x-1 my-0.5">
                  <span className="font-sans font-bold text-lg text-hotel-goldDark select-none">₹</span>
                  <span className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">
                    {estimatedTotal.toLocaleString('en-IN')}
                  </span>
                  <span className="font-sans text-xs text-neutral-400 font-normal">*</span>
                </div>
                <span className="text-[10px] text-neutral-400 block font-sans">*Seasonal rates confirmed on call</span>
              </div>
            </div>

            {/* Form Fields: Styled Exactly Like Homepage Floating Engine */}
            <div className="space-y-4">
              
              {/* Row 1: Full Name & Mobile Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] tracking-[0.22em] uppercase font-semibold text-neutral-500 block">
                    FULL NAME *
                  </label>
                  <div className="border border-gray-300 hover:border-gray-500 focus-within:border-hotel-forest transition-colors bg-gray-50/50 focus-within:bg-white p-2.5">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Iyer"
                      value={formData.guestName}
                      onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                      className="w-full bg-transparent text-xs text-neutral-900 font-medium focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] tracking-[0.22em] uppercase font-semibold text-neutral-500 block">
                    MOBILE NUMBER (FOR CONFIRMATION) *
                  </label>
                  <div className="border border-gray-300 hover:border-gray-500 focus-within:border-hotel-forest transition-colors bg-gray-50/50 focus-within:bg-white p-2.5">
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9764764359"
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      className="w-full bg-transparent text-xs text-neutral-900 font-medium focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Dates: Check In & Check Out */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] tracking-[0.22em] uppercase font-semibold text-neutral-500 block">
                    CHECK-IN DATE (ARRIVAL) *
                  </label>
                  <div className="border border-gray-300 hover:border-gray-500 focus-within:border-hotel-forest transition-colors bg-gray-50/50 focus-within:bg-white p-2.5">
                    <input
                      type="date"
                      required
                      min={today}
                      value={formData.checkIn}
                      onChange={(e) => {
                        const newIn = e.target.value;
                        if (newIn && newIn < today) return;
                        const updates = { checkIn: newIn };
                        if (formData.checkOut <= newIn) {
                          const nextDate = new Date(newIn);
                          nextDate.setDate(nextDate.getDate() + 1);
                          updates.checkOut = getLocalDateString(nextDate);
                        }
                        setFormData({ ...formData, ...updates });
                      }}
                      className="w-full bg-transparent text-xs text-neutral-900 font-medium focus:outline-none cursor-pointer"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] tracking-[0.22em] uppercase font-semibold text-neutral-500 block">
                    CHECK-OUT DATE (DEPARTURE) *
                  </label>
                  <div className="border border-gray-300 hover:border-gray-500 focus-within:border-hotel-forest transition-colors bg-gray-50/50 focus-within:bg-white p-2.5">
                    <input
                      type="date"
                      required
                      min={formData.checkIn || today}
                      value={formData.checkOut}
                      onChange={(e) => {
                        const newOut = e.target.value;
                        if (newOut && newOut < (formData.checkIn || today)) return;
                        setFormData({ ...formData, checkOut: newOut });
                      }}
                      className="w-full bg-transparent text-xs text-neutral-900 font-medium focus:outline-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: ADULTS, CHILDREN & ROOM CATEGORY (Matching Homepage Hero Booking Engine) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Adults Counter Selector */}
                <div className="space-y-1.5">
                  <label className="text-[10px] tracking-[0.22em] uppercase font-semibold text-neutral-500 block">
                    ADULTS
                  </label>
                  <div className="h-[46px] border border-gray-300 flex items-center justify-between px-2 bg-gray-50/50 hover:border-gray-500 transition-colors">
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.85 }}
                      type="button"
                      onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                      className="w-8 h-8 flex items-center justify-center text-neutral-600 hover:text-black hover:bg-gray-200 text-sm font-semibold transition-colors rounded-sm"
                      aria-label="Decrease Adults"
                    >
                      &minus;
                    </motion.button>
                    <span className="text-xs font-semibold text-neutral-900 tracking-wider">
                      {adults}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.85 }}
                      type="button"
                      onClick={() => setAdults((prev) => Math.min(10, prev + 1))}
                      className="w-8 h-8 flex items-center justify-center text-neutral-600 hover:text-black hover:bg-gray-200 text-sm font-semibold transition-colors rounded-sm"
                      aria-label="Increase Adults"
                    >
                      &#43;
                    </motion.button>
                  </div>
                </div>

                {/* Children Counter Selector */}
                <div className="space-y-1.5">
                  <label className="text-[10px] tracking-[0.22em] uppercase font-semibold text-neutral-500 block">
                    CHILDREN
                  </label>
                  <div className="h-[46px] border border-gray-300 flex items-center justify-between px-2 bg-gray-50/50 hover:border-gray-500 transition-colors">
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.85 }}
                      type="button"
                      onClick={() => setChildren((prev) => Math.max(0, prev - 1))}
                      className="w-8 h-8 flex items-center justify-center text-neutral-600 hover:text-black hover:bg-gray-200 text-sm font-semibold transition-colors rounded-sm"
                      aria-label="Decrease Children"
                    >
                      &minus;
                    </motion.button>
                    <span className="text-xs font-semibold text-neutral-900 tracking-wider">
                      {children}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.85 }}
                      type="button"
                      onClick={() => setChildren((prev) => Math.min(8, prev + 1))}
                      className="w-8 h-8 flex items-center justify-center text-neutral-600 hover:text-black hover:bg-gray-200 text-sm font-semibold transition-colors rounded-sm"
                      aria-label="Increase Children"
                    >
                      &#43;
                    </motion.button>
                  </div>
                </div>

                {/* Room Category Dropdown */}
                <div className="space-y-1.5">
                  <label className="text-[10px] tracking-[0.22em] uppercase font-semibold text-neutral-500 block">
                    ROOM CATEGORY *
                  </label>
                  <div className="h-[46px] border border-gray-300 hover:border-gray-500 focus-within:border-hotel-forest transition-colors bg-gray-50/50 focus-within:bg-white px-2.5 flex items-center">
                    <select
                      value={formData.roomType}
                      onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                      className="w-full bg-transparent text-xs text-neutral-900 font-medium focus:outline-none cursor-pointer"
                    >
                      {roomCategories.map((r) => (
                        <option key={r.id} value={r.id}>
                          {r.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

              </div>

              {/* Row 4: Special Request */}
              <div className="space-y-1.5">
                <label className="text-[10px] tracking-[0.22em] uppercase font-semibold text-neutral-500 block">
                  SPECIAL REQUEST / HIGHWAY ARRIVAL TIME (OPTIONAL)
                </label>
                <div className="border border-gray-300 hover:border-gray-500 focus-within:border-hotel-forest transition-colors bg-gray-50/50 focus-within:bg-white p-2.5">
                  <textarea
                    rows={2}
                    placeholder="e.g. Late night check-in, ground floor room, extra pillow, dining requests..."
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="w-full bg-transparent text-xs text-neutral-900 font-medium focus:outline-none"
                  />
                </div>
              </div>

            </div>

            {/* Action Buttons: Matching One&Only Luxury Aesthetic */}
            <div className="pt-2 space-y-3">
              <button
                type="submit"
                className="w-full bg-hotel-forestDark hover:bg-hotel-gold text-white hover:text-hotel-forestDark py-4 px-6 text-xs font-semibold tracking-[0.22em] uppercase transition-all shadow-md active:scale-95 flex items-center justify-center space-x-2"
              >
                <Send className="w-3.5 h-3.5 text-hotel-goldLight" />
                <span>SUBMIT RESERVATION ENQUIRY</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppRedirect}
                className="w-full bg-white hover:bg-neutral-50 text-emerald-800 border border-emerald-300/80 py-3 px-4 text-xs font-semibold tracking-[0.16em] uppercase transition-all shadow-sm flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>INSTANT WHATSAPP CONFIRMATION</span>
              </button>
            </div>

            {/* Trust Assurance Strip */}
            <div className="pt-1 text-center">
              <span className="text-[10px] text-neutral-400 font-light tracking-wider uppercase block">
                &bull; Best Direct Rates Guaranteed &bull; Instant WhatsApp Confirmation &bull; No Advance Booking Fees &bull;
              </span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
