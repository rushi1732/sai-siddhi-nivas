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
    <section id="contact" className="py-20 lg:py-28 bg-[#faf9f6] text-hotel-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Matching Homepage One&Only Luxury Aesthetic */}
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
              Send your booking enquiry directly to our reservation desk or connect immediately on WhatsApp and phone for instant room confirmation and personalized Konkan hospitality.
            </p>
          </div>
        </AnimateIn>

        {/* Contact & Reservation Grid: Symmetrical Luxury Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Atmospheric Property Showcase & Minimalist Concierge Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Cinematic Property Showcase Card */}
            <AnimateIn direction="right" delay={0.1}>
              <div className="relative w-full h-[240px] sm:h-[280px] overflow-hidden border border-neutral-200/90 shadow-md group">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop"
                  alt="Sai Siddhi Nivas Property & Concierge"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[9.5px] uppercase tracking-[0.28em] text-hotel-goldLight font-semibold block mb-1">
                    NEAR MODKA AGAR &bull; MSH4 CORRIDOR
                  </span>
                  <p className="font-serif italic text-base sm:text-lg text-white font-light leading-snug">
                    "A tranquil haven designed for restful stopovers, peaceful family stays, and genuine warmth."
                  </p>
                </div>
              </div>
            </AnimateIn>

            {/* Concierge Desk Information (Crisp Pure White Architecture) */}
            <AnimateIn direction="right" delay={0.2}>
              <div className="bg-white border border-neutral-200/90 shadow-[0_15px_40px_rgba(0,0,0,0.04)] p-6 sm:p-8 space-y-6">
                <div>
                  <span className="text-[10px] tracking-[0.24em] uppercase font-semibold text-hotel-goldDark block mb-1">
                    DIRECT CONTACT & CONCIERGE
                  </span>
                  <h3 className="font-serif text-2xl text-hotel-charcoal font-normal">
                    Personalized Stay Assistance
                  </h3>
                </div>

                <div className="space-y-4 text-xs text-neutral-600 font-light divide-y divide-neutral-100">
                  
                  {/* Phone */}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">Front Desk Direct</span>
                    <a 
                      href={`tel:${hotelInfo.phoneRaw}`} 
                      className="font-medium text-neutral-900 hover:text-hotel-gold transition-colors flex items-center space-x-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-hotel-gold shrink-0" />
                      <span>{hotelInfo.phone}</span>
                    </a>
                  </div>

                  {/* WhatsApp */}
                  <div className="pt-3 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">WhatsApp Concierge</span>
                    <button 
                      onClick={handleWhatsAppBooking}
                      className="font-medium text-neutral-900 hover:text-emerald-700 transition-colors flex items-center space-x-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>+91 9764764359</span>
                    </button>
                  </div>

                  {/* Email */}
                  <div className="pt-3 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">Reservation Email</span>
                    <a 
                      href={`mailto:${hotelInfo.email}`} 
                      className="font-medium text-neutral-900 hover:text-hotel-gold transition-colors flex items-center space-x-1.5"
                    >
                      <Mail className="w-3.5 h-3.5 text-hotel-gold shrink-0" />
                      <span>{hotelInfo.email}</span>
                    </a>
                  </div>

                  {/* Address */}
                  <div className="pt-3 flex items-start justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium shrink-0 pt-0.5">Hotel Address</span>
                    <div className="text-right pl-4">
                      <div className="flex items-center justify-end space-x-1 text-neutral-900 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-hotel-gold shrink-0" />
                        <span>Near Modka Agar, MSH4</span>
                      </div>
                      <span className="text-[11px] text-neutral-500 block mt-0.5">Kirtanwadi Tarf, Maharashtra 415703</span>
                    </div>
                  </div>

                  {/* Plus Code */}
                  <div className="pt-3 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">Google Plus Code</span>
                    <span className="font-mono bg-neutral-50 px-2 py-0.5 border border-neutral-200 text-hotel-forest font-semibold text-[11px]">
                      {hotelInfo.plusCode}
                    </span>
                  </div>

                  {/* Operating Hours */}
                  <div className="pt-3 flex items-center justify-between text-neutral-500">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">Front Desk Hours</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-hotel-gold shrink-0" />
                      <span>24 Hours &bull; Instant Support</span>
                    </div>
                  </div>

                </div>

                {/* Direct Action Buttons matching Hero style */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppBooking}
                    className="w-full bg-[#133826] hover:bg-hotel-forestDark text-white py-3 px-4 text-xs font-semibold tracking-[0.18em] uppercase transition-all shadow-md active:scale-95 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Chat</span>
                  </button>

                  <a
                    href={`tel:${hotelInfo.phoneRaw}`}
                    className="w-full bg-white hover:bg-neutral-50 text-hotel-forestDark border border-neutral-300 py-3 px-4 text-xs font-semibold tracking-[0.18em] uppercase transition-all shadow-sm active:scale-95 flex items-center justify-center space-x-2 text-center"
                  >
                    <Phone className="w-3.5 h-3.5 text-hotel-gold" />
                    <span>Call Front Desk</span>
                  </a>
                </div>

              </div>
            </AnimateIn>

          </div>

          {/* Right Column: Reservation Engine Styled Exactly Like Homepage Booking Bar */}
          <div className="lg:col-span-7">
            <AnimateIn direction="left" delay={0.15}>
              <div className="bg-white border border-neutral-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-6 sm:p-10">
                
                {/* Form Header Strip */}
                <div className="mb-8 pb-5 border-b border-neutral-200">
                  <span className="text-[10px] tracking-[0.24em] uppercase font-semibold text-hotel-goldDark block mb-1">
                    RESERVATION ENQUIRY ENGINE
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-hotel-charcoal font-normal">
                    Tell Us About Your Stay Plans
                  </h3>
                  <p className="text-xs text-neutral-500 font-light mt-1.5 leading-relaxed">
                    Submit your booking requirements below. Our team verifies real-time room availability and confirms your reservation immediately.
                  </p>
                </div>

                {status.submitted ? (
                  <div className="p-8 text-center space-y-5 bg-neutral-50/70 border border-neutral-200 shadow-sm animate-fade-in">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-2xl text-hotel-forest">
                      Enquiry Received Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-neutral-900">{formData.guestName}</strong>. Your enquiry for <strong className="text-neutral-900">{formData.roomPreference}</strong> from <strong className="text-neutral-900">{formData.checkInDate}</strong> to <strong className="text-neutral-900">{formData.checkOutDate}</strong> has been transmitted directly to Sai Siddhi Nivas. Our reservation team will reach out to <strong className="text-neutral-900">{formData.mobileNumber}</strong> shortly to confirm availability and discuss tariff details.
                    </p>
                    <div className="p-3 bg-white rounded border border-neutral-200 text-xs text-neutral-600 text-left">
                      <span className="font-semibold block text-hotel-forest mb-1">Status Note:</span>
                      Please note this is an enquiry submission. Rooms are guaranteed upon direct confirmation with hotel management.
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                      <button
                        type="button"
                        onClick={handleWhatsAppBooking}
                        className="bg-[#133826] hover:bg-hotel-forestDark text-white px-6 py-3 text-xs uppercase tracking-wider font-semibold flex items-center justify-center space-x-2 shadow"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Send Message on WhatsApp</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setStatus({ submitted: false, error: '' })}
                        className="border border-neutral-300 px-6 py-3 text-xs uppercase tracking-wider font-semibold text-neutral-700 hover:bg-neutral-100"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {status.error && (
                      <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center space-x-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{status.error}</span>
                      </div>
                    )}

                    {/* Row 1: Name & Mobile Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] tracking-[0.22em] uppercase font-semibold text-neutral-500 block">
                          GUEST FULL NAME *
                        </label>
                        <div className="border border-gray-300 hover:border-gray-500 focus-within:border-hotel-forest transition-colors bg-gray-50/50 focus-within:bg-white p-2.5">
                          <input
                            type="text"
                            required
                            placeholder="e.g. Rahul Sharma"
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

                    {/* Row 2: Arrival & Departure Dates (Exact match with hero booking engine) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] tracking-[0.22em] uppercase font-semibold text-neutral-500 block">
                          CHECK-IN (ARRIVAL) *
                        </label>
                        <div className="border border-gray-300 hover:border-gray-500 focus-within:border-hotel-forest transition-colors bg-gray-50/50 focus-within:bg-white p-2.5">
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
                            className="w-full bg-transparent text-xs text-neutral-900 font-medium focus:outline-none cursor-pointer"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] tracking-[0.22em] uppercase font-semibold text-neutral-500 block">
                          CHECK-OUT (DEPARTURE) *
                        </label>
                        <div className="border border-gray-300 hover:border-gray-500 focus-within:border-hotel-forest transition-colors bg-gray-50/50 focus-within:bg-white p-2.5">
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
                            className="w-full bg-transparent text-xs text-neutral-900 font-medium focus:outline-none cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Number of Guests & Room Preference */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] tracking-[0.22em] uppercase font-semibold text-neutral-500 block">
                          PERSONS / GUESTS *
                        </label>
                        <div className="h-[46px] border border-gray-300 hover:border-gray-500 focus-within:border-hotel-forest transition-colors bg-gray-50/50 focus-within:bg-white px-2.5 flex items-center">
                          <select
                            value={formData.numberOfGuests}
                            onChange={(e) => setFormData({ ...formData, numberOfGuests: e.target.value })}
                            className="w-full bg-transparent text-xs text-neutral-900 font-medium focus:outline-none cursor-pointer"
                          >
                            <option value="1 Person">1 Person</option>
                            <option value="2 Persons">2 Persons</option>
                            <option value="3 Persons">3 Persons</option>
                            <option value="4 Persons">4 Persons</option>
                            <option value="5+ Persons (Family)">5+ Persons (Family)</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] tracking-[0.22em] uppercase font-semibold text-neutral-500 block">
                          ROOM PREFERENCE *
                        </label>
                        <div className="h-[46px] border border-gray-300 hover:border-gray-500 focus-within:border-hotel-forest transition-colors bg-gray-50/50 focus-within:bg-white px-2.5 flex items-center">
                          <select
                            value={formData.roomPreference}
                            onChange={(e) => setFormData({ ...formData, roomPreference: e.target.value })}
                            className="w-full bg-transparent text-xs text-neutral-900 font-medium focus:outline-none cursor-pointer"
                          >
                            {roomCategories.map((r) => (
                              <option key={r.id} value={r.name}>
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
                        SPECIAL REQUESTS / HIGHWAY ARRIVAL TIME (OPTIONAL)
                      </label>
                      <div className="border border-gray-300 hover:border-gray-500 focus-within:border-hotel-forest transition-colors bg-gray-50/50 focus-within:bg-white p-2.5">
                        <textarea
                          rows={3}
                          placeholder="e.g. Ground floor preference, early arrival time, extra mattress, dining requests..."
                          value={formData.specialRequest}
                          onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                          className="w-full bg-transparent text-xs text-neutral-900 font-medium focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Submit & Quick Channel Actions: Matching One&Only Mandarina Aesthetic */}
                    <div className="pt-2 space-y-3">
                      <button
                        type="submit"
                        className="w-full bg-hotel-forestDark hover:bg-hotel-gold text-white hover:text-hotel-forestDark py-4 px-6 text-xs font-semibold tracking-[0.22em] uppercase transition-all shadow-md active:scale-95 flex items-center justify-center space-x-2"
                      >
                        <Send className="w-3.5 h-3.5 text-hotel-goldLight" />
                        <span>SUBMIT RESERVATION ENQUIRY</span>
                      </button>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        <button
                          type="button"
                          onClick={handleWhatsAppBooking}
                          className="w-full bg-white hover:bg-neutral-50 text-emerald-800 border border-emerald-300/80 py-3 px-4 text-xs font-semibold tracking-[0.16em] uppercase transition-all shadow-sm flex items-center justify-center space-x-2"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                          <span>WhatsApp Desk</span>
                        </button>

                        <a
                          href={`tel:${hotelInfo.phoneRaw}`}
                          className="w-full bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 py-3 px-4 text-xs font-semibold tracking-[0.16em] uppercase transition-all shadow-sm flex items-center justify-center space-x-2 text-center"
                        >
                          <Phone className="w-3.5 h-3.5 text-hotel-gold" />
                          <span>Call Front Desk</span>
                        </a>
                      </div>
                    </div>

                    {/* Trust Line matching Hero */}
                    <div className="pt-2 text-center">
                      <span className="text-[10px] text-neutral-400 font-light tracking-wider uppercase block">
                        &bull; Best Direct Rates Guaranteed &bull; Instant WhatsApp Confirmation &bull; No Advance Booking Fees &bull;
                      </span>
                    </div>

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
