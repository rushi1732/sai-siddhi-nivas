import React, { useState, useEffect } from 'react';
import { roomCategories, hotelInfo } from '../data/hotelData';
import { 
  X, Calendar, Users, CheckCircle2, Phone, 
  MessageCircle, Sparkles, Send, AlertCircle, Info 
} from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialData = {} }) {
  const [formData, setFormData] = useState({
    guestName: '',
    mobileNumber: '',
    roomType: initialData.roomType || roomCategories[0].id,
    checkIn: initialData.checkIn || new Date(Date.now() + 86400000).toISOString().split('T')[0],
    checkOut: initialData.checkOut || new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
    guests: initialData.guests || '2 Persons',
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
        guests: initialData.guests || prev.guests
      }));
    }
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
    const text = encodeURIComponent(
      `Hello Sai Siddhi Nivas!\n\n` +
      `I would like to enquire about room booking:\n` +
      `• *Guest Name:* ${formData.guestName || 'Guest'}\n` +
      `• *Mobile Number:* ${formData.mobileNumber || 'Not provided'}\n` +
      `• *Room Preference:* ${selectedRoomObj.name}\n` +
      `• *Dates:* ${formData.checkIn} to ${formData.checkOut} (${nights} Night${nights > 1 ? 's' : ''})\n` +
      `• *Number of Guests:* ${formData.guests}\n` +
      `• *Special Requests:* ${formData.specialRequests || 'None'}\n\n` +
      `Please verify room availability and confirm tariff details.`
    );
    window.open(`https://wa.me/${hotelInfo.whatsapp.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full border border-hotel-border shadow-2xl overflow-hidden my-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Strip */}
        <div className="bg-hotel-forestDark px-6 py-5 text-hotel-ivory flex items-center justify-between border-b border-hotel-gold/30">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-hotel-gold font-semibold block">
              Sai Siddhi Nivas &bull; Kirtanwadi Tarf
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
              Book Your Stay & Reservation Enquiry
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-hotel-ivory/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close Booking Modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {status.submitted ? (
          <div className="p-8 text-center space-y-5 animate-fade-in">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-2xl text-hotel-forest">
              Reservation Enquiry Received
            </h4>
            <p className="text-xs sm:text-sm text-hotel-muted max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-hotel-charcoal">{formData.guestName}</strong>. Your enquiry for <strong className="text-hotel-charcoal">{selectedRoomObj.name}</strong> from <strong className="text-hotel-charcoal">{formData.checkIn}</strong> to <strong className="text-hotel-charcoal">{formData.checkOut}</strong> has been logged. Our hotel team will call or message <strong className="text-hotel-charcoal">{formData.mobileNumber}</strong> shortly to confirm availability and discuss tariffs.
            </p>
            
            <div className="p-3 bg-hotel-ivory rounded-lg text-xs text-hotel-muted text-left border border-hotel-border">
              <span className="font-semibold block text-hotel-forest">Booking Policy:</span>
              As per hotel guidelines, room reservations are confirmed directly by our desk staff. For immediate instant confirmation, you may message our manager on WhatsApp below.
            </div>

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={handleWhatsAppRedirect}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg text-xs tracking-widest uppercase font-bold flex items-center justify-center space-x-2 shadow"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant Confirmation on WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="border border-hotel-border px-6 py-3 rounded-lg text-xs tracking-widest uppercase font-semibold text-hotel-charcoal hover:bg-hotel-ivory"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            
            {status.error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{status.error}</span>
              </div>
            )}

            {/* Live Room Summary Strip - Clean Stylish Rupee & Number Typography */}
            <div className="p-4 rounded-xl bg-hotel-ivory border border-hotel-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-hotel-goldDark font-semibold block">
                  Selected Category
                </span>
                <span className="font-serif text-lg text-hotel-forest font-semibold block">
                  {selectedRoomObj.name}
                </span>
                <span className="text-xs text-hotel-muted block font-sans">
                  {selectedRoomObj.capacity} &bull; {selectedRoomObj.size}
                </span>
              </div>
              
              {/* Stylish Rupee Sign & Crisp Modern Numbers */}
              <div className="text-left sm:text-right">
                <span className="text-[11px] uppercase tracking-wider text-hotel-muted block font-sans font-medium">
                  Estimated Tariff ({nights} Night{nights > 1 ? 's' : ''})
                </span>
                <div className="flex items-baseline justify-start sm:justify-end space-x-1 my-0.5">
                  <span className="font-sans font-bold text-lg text-hotel-goldDark select-none">₹</span>
                  <span className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-hotel-forest">
                    {estimatedTotal.toLocaleString('en-IN')}
                  </span>
                  <span className="font-sans text-xs text-hotel-muted font-normal">*</span>
                </div>
                <span className="text-[10px] text-hotel-muted block font-sans">*Seasonal rates confirmed on call</span>
              </div>
            </div>

            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-hotel-forest font-semibold mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maya Iyer"
                  value={formData.guestName}
                  onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                  className="w-full bg-white border border-hotel-border rounded-lg px-3 py-2 text-sm text-hotel-charcoal focus:outline-none focus:border-hotel-gold transition-colors font-sans"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-hotel-forest font-semibold mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9764764359"
                  value={formData.mobileNumber}
                  onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                  className="w-full bg-white border border-hotel-border rounded-lg px-3 py-2 text-sm text-hotel-charcoal focus:outline-none focus:border-hotel-gold transition-colors font-sans"
                />
              </div>
            </div>

            {/* Dates: Check In & Check Out */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-hotel-forest font-semibold mb-1">
                  Check-in Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.checkIn}
                  onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                  className="w-full bg-white border border-hotel-border rounded-lg px-3 py-2 text-sm text-hotel-charcoal focus:outline-none focus:border-hotel-gold transition-colors font-sans"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-hotel-forest font-semibold mb-1">
                  Check-out Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.checkOut}
                  onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                  className="w-full bg-white border border-hotel-border rounded-lg px-3 py-2 text-sm text-hotel-charcoal focus:outline-none focus:border-hotel-gold transition-colors font-sans"
                />
              </div>
            </div>

            {/* Room Type & Persons/Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-hotel-forest font-semibold mb-1">
                  Room Category *
                </label>
                <select
                  value={formData.roomType}
                  onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                  className="w-full bg-white border border-hotel-border rounded-lg px-3 py-2 text-sm text-hotel-charcoal focus:outline-none focus:border-hotel-gold transition-colors font-sans"
                >
                  {roomCategories.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-hotel-forest font-semibold mb-1">
                  Persons / Guests *
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full bg-white border border-hotel-border rounded-lg px-3 py-2 text-sm text-hotel-charcoal focus:outline-none focus:border-hotel-gold transition-colors font-sans"
                >
                  <option value="1 Person">1 Person</option>
                  <option value="2 Persons">2 Persons</option>
                  <option value="3 Persons">3 Persons</option>
                  <option value="4 Persons">4 Persons</option>
                  <option value="5+ Persons (Family)">5+ Persons (Family)</option>
                </select>
              </div>
            </div>

            {/* Special Request */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-hotel-forest font-semibold mb-1">
                Special Request / Highway Arrival Time
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Late night check-in, ground floor room, extra pillow..."
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                className="w-full bg-white border border-hotel-border rounded-lg px-3 py-2 text-sm text-hotel-charcoal focus:outline-none focus:border-hotel-gold transition-colors font-sans"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-hotel-forest to-hotel-forestDark text-hotel-goldLight py-3 px-4 rounded-xl text-xs uppercase tracking-widest font-bold transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <Send className="w-3.5 h-3.5 text-hotel-gold" />
                <span>Submit Reservation Enquiry</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppRedirect}
                className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-5 rounded-xl text-xs uppercase tracking-widest font-bold transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
