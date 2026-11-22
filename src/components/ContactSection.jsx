import React, { useState } from 'react';
import { hotelInfo, roomCategories } from '../data/hotelData';
import { 
  Phone, Mail, MapPin, Calendar, Users, 
  Send, MessageCircle, CheckCircle2, ShieldCheck, 
  Sparkles, Clock, AlertCircle 
} from 'lucide-react';
import AnimateIn from './AnimateIn';
import { motion } from 'framer-motion';

// Local date helper to avoid timezone issues
const getLocalDateString = (d = new Date()) => {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export default function ContactSection() {
  const today = getLocalDateString();
  const tomorrow = getLocalDateString(new Date(Date.now() + 86400000));
  const threeDaysLater = getLocalDateString(new Date(Date.now() + 86400000 * 3));

  const [formData, setFormData] = useState({
    guestName: '',
    mobileNumber: '',
    checkInDate: tomorrow,
    checkOutDate: threeDaysLater,
    numberOfGuests: '2 Persons',
    roomPreference: roomCategories[0].name,
    specialRequest: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    error: ''
  });

  const validatePhone = (num) => {
    const cleaned = num.replace(/\D/g, '');
    return cleaned.length >= 10;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.guestName.trim()) {
      setStatus({ submitted: false, error: 'Please enter your full name.' });
      return;
    }
    if (!validatePhone(formData.mobileNumber)) {
      setStatus({ submitted: false, error: 'Please enter a valid 10-digit mobile number.' });
      return;
    }

    setStatus({
      submitted: true,
      error: ''
    });
  };

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent(
      `Hello Sai Siddhi Nivas!\n\n` +
      `I would like to enquire about room booking:\n` +
      `• *Guest Name:* ${formData.guestName || 'Guest'}\n` +
      `• *Mobile:* ${formData.mobileNumber || 'Not provided'}\n` +
      `• *Room Preference:* ${formData.roomPreference}\n` +
      `• *Check-in Date:* ${formData.checkInDate}\n` +
      `• *Check-out Date:* ${formData.checkOutDate}\n` +
      `• *Persons / Guests:* ${formData.numberOfGuests}\n` +
      `• *Special Requests:* ${formData.specialRequest || 'None'}\n\n` +
      `Please check availability and confirm tariffs.`
    );
    window.open(`https://wa.me/${hotelInfo.whatsapp.replace('+', '')}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white text-hotel-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimateIn direction="up">
          <div className="text-center max-w-4xl mx-auto mb-14 lg:mb-20">
            <span className="text-xs sm:text-sm tracking-[0.32em] uppercase font-semibold text-hotel-goldDark mb-3 block">
              DIRECT RESERVATIONS & CONCIERGE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[52px] text-hotel-charcoal font-normal uppercase tracking-[0.06em] leading-[1.15] mb-6">
              CONNECT WITH OUR HOSPITALITY TEAM
            </h2>
            <div className="w-16 h-[2px] bg-hotel-gold mx-auto mb-8" />
            <p className="font-sans font-light text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              Send your booking enquiry directly to our reservation desk or connect immediately on WhatsApp and phone for instant room confirmation.
            </p>
          </div>
        </AnimateIn>

        {/* Contact & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Action Box */}
            <AnimateIn direction="right" delay={0.1}>
              <div className="p-6 sm:p-8 bg-hotel-forestDark text-hotel-ivory rounded-2xl border border-hotel-gold/30 shadow-luxury">
                <span className="text-[11px] uppercase tracking-widest text-hotel-gold font-semibold block mb-2">
                  Fastest Response
                </span>
                <h3 className="font-serif text-2xl text-white font-normal mb-3">
                  Immediate Booking Assistance
                </h3>
                <p className="text-xs sm:text-sm text-hotel-ivory/80 font-light leading-relaxed mb-6">
                  Prefer immediate confirmation? Reach our front desk directly through WhatsApp or a quick phone call.
                </p>

                <div className="space-y-3">
                  {/* WhatsApp Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={handleWhatsAppBooking}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-4 rounded-xl text-xs uppercase tracking-widest font-bold transition-all shadow-md flex items-center justify-center space-x-2.5 active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Booking (+91 9764764359)</span>
                  </motion.button>

                  {/* Direct Call Button */}
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={`tel:${hotelInfo.phoneRaw}`}
                    className="w-full bg-hotel-gold hover:bg-hotel-goldHover text-hotel-forestDark py-3.5 px-4 rounded-xl text-xs uppercase tracking-widest font-bold transition-all shadow-md flex items-center justify-center space-x-2.5 active:scale-95"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Hotel ({hotelInfo.phone})</span>
                  </motion.a>
                </div>

                {/* Operating hours note */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center space-x-2 text-xs text-hotel-ivory/70">
                  <Clock className="w-4 h-4 text-hotel-gold shrink-0" />
                  <span>Front Desk Desk Operates 24 Hours &bull; Instant Support</span>
                </div>
              </div>
            </AnimateIn>

            {/* Address & Details Box */}
            <AnimateIn direction="right" delay={0.2}>
              <div className="p-6 bg-hotel-ivory rounded-2xl border border-hotel-border shadow-sm space-y-4">
                <h4 className="font-serif text-lg text-hotel-forest font-semibold">
                  Hotel Location & Address
                </h4>
                <div className="space-y-3 text-xs text-hotel-muted font-light leading-relaxed">
                  <div className="flex items-start space-x-2.5">
                    <MapPin className="w-4 h-4 text-hotel-goldDark shrink-0 mt-0.5" />
                    <span>{hotelInfo.address}</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <span className="font-semibold text-hotel-forest">Plus Code:</span>
                    <span className="font-mono bg-white px-2 py-0.5 rounded border border-hotel-border text-hotel-charcoal font-medium">
                      {hotelInfo.plusCode}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Phone className="w-4 h-4 text-hotel-goldDark shrink-0" />
                    <a href={`tel:${hotelInfo.phoneRaw}`} className="text-hotel-forest font-semibold hover:underline">
                      {hotelInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
            </AnimateIn>

          </div>

          {/* Right Column: Booking Enquiry Form */}
          <div className="lg:col-span-7">
            <AnimateIn direction="left" delay={0.15}>
              <div className="bg-hotel-ivory p-6 sm:p-10 rounded-2xl border border-hotel-border shadow-luxury">
                
                <div className="mb-6 pb-4 border-b border-hotel-border">
                  <span className="text-[11px] uppercase tracking-widest text-hotel-goldDark font-semibold block">
                    Reservation Enquiry Form
                  </span>
                  <h3 className="font-serif text-2xl text-hotel-forest font-normal">
                    Tell Us About Your Stay Plans
                  </h3>
                  <p className="text-xs text-hotel-muted font-light mt-1">
                    Fill out the details below. Our team will verify room availability and contact you promptly.
                  </p>
                </div>

                {status.submitted ? (
                  <div className="p-8 text-center space-y-5 bg-white rounded-xl border border-emerald-300 shadow-sm animate-fade-in">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-2xl text-hotel-forest">
                      Enquiry Received Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm text-hotel-muted max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-hotel-charcoal">{formData.guestName}</strong>. Your enquiry for <strong className="text-hotel-charcoal">{formData.roomPreference}</strong> from <strong className="text-hotel-charcoal">{formData.checkInDate}</strong> to <strong className="text-hotel-charcoal">{formData.checkOutDate}</strong> has been received by Sai Siddhi Nivas. Our reservation team will reach out to <strong className="text-hotel-charcoal">{formData.mobileNumber}</strong> shortly to confirm availability and discuss tariff details.
                    </p>
                    <div className="p-3 bg-hotel-ivory rounded-lg text-xs text-hotel-muted text-left border border-hotel-border">
                      <span className="font-semibold block text-hotel-forest mb-1">Status Note:</span>
                      Please note this is an enquiry submission. Rooms are guaranteed upon direct confirmation with hotel management.
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                      <button
                        type="button"
                        onClick={handleWhatsAppBooking}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider font-bold flex items-center justify-center space-x-2 shadow"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Send Message on WhatsApp</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setStatus({ submitted: false, error: '' })}
                        className="border border-hotel-border px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider font-semibold text-hotel-charcoal hover:bg-white"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {status.error && (
                      <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs flex items-center space-x-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{status.error}</span>
                      </div>
                    )}

                    {/* Name & Mobile Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-hotel-forest font-semibold mb-1.5">
                          Guest Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.guestName}
                          onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                          className="w-full bg-white border border-hotel-border rounded-lg px-3.5 py-2.5 text-sm text-hotel-charcoal focus:outline-none focus:border-hotel-gold transition-colors font-sans"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-hotel-forest font-semibold mb-1.5">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 9764764359"
                          value={formData.mobileNumber}
                          onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                          className="w-full bg-white border border-hotel-border rounded-lg px-3.5 py-2.5 text-sm text-hotel-charcoal focus:outline-none focus:border-hotel-gold transition-colors font-sans"
                        />
                      </div>
                    </div>

                    {/* Dates: Check-in & Check-out */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-hotel-forest font-semibold mb-1.5">
                          Check-in Date *
                        </label>
                        <input
                          type="date"
                          required
                          min={today}
                          value={formData.checkInDate}
                          onChange={(e) => {
                            const newIn = e.target.value;
                            if (newIn && newIn < today) return;
                            const updates = { checkInDate: newIn };
                            if (formData.checkOutDate <= newIn) {
                              const nextDate = new Date(newIn);
                              nextDate.setDate(nextDate.getDate() + 1);
                              updates.checkOutDate = getLocalDateString(nextDate);
                            }
                            setFormData({ ...formData, ...updates });
                          }}
                          className="w-full bg-white border border-hotel-border rounded-lg px-3.5 py-2.5 text-sm text-hotel-charcoal focus:outline-none focus:border-hotel-gold transition-colors font-sans"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-hotel-forest font-semibold mb-1.5">
                          Check-out Date *
                        </label>
                        <input
                          type="date"
                          required
                          min={formData.checkInDate || today}
                          value={formData.checkOutDate}
                          onChange={(e) => {
                            const newOut = e.target.value;
                            if (newOut && newOut < (formData.checkInDate || today)) return;
                            setFormData({ ...formData, checkOutDate: newOut });
                          }}
                          className="w-full bg-white border border-hotel-border rounded-lg px-3.5 py-2.5 text-sm text-hotel-charcoal focus:outline-none focus:border-hotel-gold transition-colors font-sans"
                        />
                      </div>
                    </div>

                    {/* Number of Guests & Room Preference */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-hotel-forest font-semibold mb-1.5">
                          Persons / Guests *
                        </label>
                        <select
                          value={formData.numberOfGuests}
                          onChange={(e) => setFormData({ ...formData, numberOfGuests: e.target.value })}
                          className="w-full bg-white border border-hotel-border rounded-lg px-3.5 py-2.5 text-sm text-hotel-charcoal focus:outline-none focus:border-hotel-gold transition-colors font-sans"
                        >
                          <option value="1 Person">1 Person</option>
                          <option value="2 Persons">2 Persons</option>
                          <option value="3 Persons">3 Persons</option>
                          <option value="4 Persons">4 Persons</option>
                          <option value="5+ Persons (Family)">5+ Persons (Family)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-hotel-forest font-semibold mb-1.5">
                          Room Preference *
                        </label>
                        <select
                          value={formData.roomPreference}
                          onChange={(e) => setFormData({ ...formData, roomPreference: e.target.value })}
                          className="w-full bg-white border border-hotel-border rounded-lg px-3.5 py-2.5 text-sm text-hotel-charcoal focus:outline-none focus:border-hotel-gold transition-colors font-sans"
                        >
                          {roomCategories.map((r) => (
                            <option key={r.id} value={r.name}>
                              {r.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Special Request */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-hotel-forest font-semibold mb-1.5">
                        Special Request / Notes (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. Ground floor preference, early arrival time, extra mattress, dining requests..."
                        value={formData.specialRequest}
                        onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                        className="w-full bg-white border border-hotel-border rounded-lg px-3.5 py-2.5 text-sm text-hotel-charcoal focus:outline-none focus:border-hotel-gold transition-colors font-sans"
                      />
                    </div>

                    {/* Buttons: Submit Enquiry, WhatsApp Booking, Call Hotel */}
                    <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="bg-gradient-to-r from-hotel-forest to-hotel-forestDark hover:from-hotel-forestDark hover:to-hotel-forest text-hotel-goldLight py-3 px-4 rounded-xl text-xs uppercase tracking-widest font-bold transition-all shadow-md flex items-center justify-center space-x-2"
                      >
                        <Send className="w-3.5 h-3.5 text-hotel-gold" />
                        <span>Submit Enquiry</span>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        onClick={handleWhatsAppBooking}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-xl text-xs uppercase tracking-widest font-bold transition-all shadow-md flex items-center justify-center space-x-2"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp Booking</span>
                      </motion.button>

                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={`tel:${hotelInfo.phoneRaw}`}
                        className="border border-hotel-goldDark text-hotel-forest hover:bg-hotel-forest hover:text-hotel-goldLight py-3 px-4 rounded-xl text-xs uppercase tracking-widest font-bold transition-all text-center flex items-center justify-center space-x-2"
                      >
                        <Phone className="w-3.5 h-3.5 text-hotel-gold" />
                        <span>Call Hotel</span>
                      </motion.a>
                    </div>

                    <p className="text-[11px] text-hotel-muted text-center pt-2">
                      * Submission creates a formal reservation request. Our reservation desk will verify availability and reach out to confirm your booking.
                    </p>

                  </form>
                )}

              </div>
            </AnimateIn>
          </div>

        </div>

      </div>
    </section>
  );
}
