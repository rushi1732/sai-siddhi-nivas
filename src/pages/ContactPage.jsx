import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { hotelInfo, roomCategories, faqs } from '../data/hotelData';
import { 
  Phone, Mail, MapPin, Calendar, Users, 
  Send, MessageCircle, CheckCircle2, ShieldCheck, 
  Sparkles, Clock, AlertCircle, HelpCircle, Navigation, ExternalLink 
} from 'lucide-react';
import { motion } from 'framer-motion';

// Local date helper to avoid timezone issues
const getLocalDateString = (d = new Date()) => {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export default function ContactPage({ onOpenBooking }) {
  const today = getLocalDateString();
  const tomorrow = getLocalDateString(new Date(Date.now() + 86400000));
  const threeDaysLater = getLocalDateString(new Date(Date.now() + 86400000 * 3));

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const [formData, setFormData] = useState({
    guestName: '',
    mobileNumber: '',
    checkInDate: tomorrow,
    checkOutDate: threeDaysLater,
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
    const totalGuestsText = `${adults} Adult${adults > 1 ? 's' : ''}${children > 0 ? `, ${children} Child${children > 1 ? 'ren' : ''}` : ''}`;
    const message = encodeURIComponent(
      `Hello Sai Siddhi Nivas!\n\n` +
      `I would like to enquire about room booking:\n` +
      `• *Guest Name:* ${formData.guestName || 'Guest'}\n` +
      `• *Mobile:* ${formData.mobileNumber || 'Not provided'}\n` +
      `• *Room Preference:* ${formData.roomPreference}\n` +
      `• *Check-in Date:* ${formData.checkInDate}\n` +
      `• *Check-out Date:* ${formData.checkOutDate}\n` +
      `• *Adults:* ${adults}\n` +
      `• *Children:* ${children}\n` +
      `• *Total Guests:* ${totalGuestsText}\n` +
      `• *Special Requests:* ${formData.specialRequest || 'None'}\n\n` +
      `Please check availability and confirm tariffs.`
    );
    window.open(`https://wa.me/${hotelInfo.whatsapp.replace('+', '')}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white text-hotel-charcoal">
      {/* 1. Page Hero Banner */}
      <PageHero
        title="DIRECT RESERVATIONS & CONTACT"
        subtitle="Connect With Our Dedicated Front Desk for Immediate Inquiries, Real-Time Availability, and Personalized Assistance."
        breadcrumb="CONTACT"
        badge="RESERVATIONS • 24/7 HOSPITALITY DESK"
        image="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1920&auto=format&fit=crop"
      />

      {/* 2. Main Contact Grid */}
      <section className="py-16 sm:py-24 bg-[#faf9f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Direct Front Desk Details */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Hotel Concierge Card */}
              <div className="bg-white rounded-xl border border-neutral-200/90 shadow-md p-6 sm:p-7 space-y-5">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-hotel-goldDark font-semibold block mb-1">
                    FASTEST RESPONSE
                  </span>
                  <h3 className="font-serif text-2xl text-hotel-forest font-semibold">
                    Front Desk Assistance
                  </h3>
                  <p className="text-xs text-neutral-600 font-light mt-1">
                    Connect instantly with our on-duty manager for questions regarding room availability, group packages, or highway directions.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href={`tel:${hotelInfo.phoneRaw}`}
                    className="w-full bg-hotel-forest hover:bg-hotel-forestDark text-white py-3 px-4 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all shadow-md flex items-center justify-center space-x-2 text-center"
                  >
                    <Phone className="w-4 h-4 text-hotel-goldLight" />
                    <span>Call Front Desk (+91 9764764359)</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleWhatsAppBooking}
                    className="w-full bg-emerald-700 hover:bg-emerald-600 text-white py-3 px-4 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all shadow-md flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp Chat</span>
                  </button>
                </div>

                <div className="pt-4 border-t border-neutral-100 space-y-3 text-xs text-neutral-700">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-hotel-gold shrink-0 mt-0.5" />
                    <span>{hotelInfo.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-hotel-forest shrink-0" />
                    <span>24 Hours Front Desk Service &bull; All 7 Days</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-hotel-gold shrink-0" />
                    <a href={`mailto:${hotelInfo.email}`} className="hover:underline">{hotelInfo.email}</a>
                  </div>
                </div>
              </div>

              {/* Highway Access Card */}
              <div className="p-5 bg-hotel-forestDark text-hotel-ivory rounded-xl border border-hotel-gold/30 shadow-md space-y-2 text-xs">
                <span className="text-[10px] uppercase tracking-widest text-hotel-gold block font-semibold">
                  HIGHWAY DRIVING ASSISTANCE
                </span>
                <p className="font-light text-hotel-ivory/80 leading-relaxed">
                  Heading along MSH4 near Modka Agar? Call our desk anytime if you need landmark guidance or parking arrival support.
                </p>
              </div>

            </div>

            {/* Right Column: Full-Page Reservation Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-xl border border-neutral-200/90 shadow-xl p-6 sm:p-10">
                
                <div className="mb-6 pb-4 border-b border-neutral-200">
                  <span className="text-[10px] tracking-[0.24em] uppercase font-semibold text-hotel-goldDark block mb-1">
                    RESERVATION ENQUIRY ENGINE
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-hotel-forest font-semibold">
                    Tell Us About Your Stay Plans
                  </h3>
                  <p className="text-xs text-neutral-500 font-light mt-1">
                    Fill out the form below. Our hotel team will verify room availability and contact you promptly.
                  </p>
                </div>

                {status.submitted ? (
                  <div className="p-8 text-center space-y-5 bg-neutral-50/70 border border-neutral-200 rounded-lg shadow-sm">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-2xl text-hotel-forest">
                      Enquiry Received Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed font-light">
                      Thank you, <strong className="text-neutral-900">{formData.guestName}</strong>. Your enquiry for <strong className="text-neutral-900">{formData.roomPreference}</strong> from <strong className="text-neutral-900">{formData.checkInDate}</strong> to <strong className="text-neutral-900">{formData.checkOutDate}</strong> ({adults} Adult{adults > 1 ? 's' : ''}{children > 0 ? `, ${children} Child${children > 1 ? 'ren' : ''}` : ''}) has been transmitted. Our desk team will call or message <strong className="text-neutral-900">{formData.mobileNumber}</strong> shortly to confirm availability.
                    </p>
                    
                    <div className="pt-3 flex flex-col sm:flex-row justify-center gap-3">
                      <button
                        type="button"
                        onClick={handleWhatsAppBooking}
                        className="bg-emerald-700 hover:bg-emerald-600 text-white px-6 py-3 text-xs uppercase tracking-wider font-semibold flex items-center justify-center space-x-2 rounded shadow"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Instant Confirmation on WhatsApp</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setStatus({ submitted: false, error: '' })}
                        className="border border-neutral-300 px-5 py-3 text-xs uppercase tracking-wider font-semibold text-neutral-700 hover:bg-neutral-100 rounded"
                      >
                        Submit Another
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {status.error && (
                      <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center space-x-2 rounded">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{status.error}</span>
                      </div>
                    )}

                    {/* Row 1: Name & Mobile Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] tracking-[0.2em] uppercase font-semibold text-neutral-600 block">
                          GUEST FULL NAME *
                        </label>
                        <div className="border border-gray-300 hover:border-gray-500 focus-within:border-hotel-forest transition-colors bg-gray-50/50 focus-within:bg-white p-2.5 rounded">
                          <input
                            type="text"
                            required
                            placeholder="e.g. Rahul Sharma"
                            value={formData.guestName}
                            onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                            className="w-full bg-transparent text-base sm:text-xs text-neutral-900 font-medium focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] tracking-[0.2em] uppercase font-semibold text-neutral-600 block">
                          MOBILE NUMBER (CONFIRMATION) *
                        </label>
                        <div className="border border-gray-300 hover:border-gray-500 focus-within:border-hotel-forest transition-colors bg-gray-50/50 focus-within:bg-white p-2.5 rounded">
                          <input
                            type="tel"
                            required
                            placeholder="e.g. 9764764359"
                            value={formData.mobileNumber}
                            onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                            className="w-full bg-transparent text-base sm:text-xs text-neutral-900 font-medium focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Arrival & Departure Dates */}
                    <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] tracking-[0.18em] uppercase font-semibold text-neutral-600 block truncate">
                          CHECK-IN DATE *
                        </label>
                        <div className="border border-gray-300 hover:border-gray-500 focus-within:border-hotel-forest transition-colors bg-gray-50/50 focus-within:bg-white p-2 sm:p-2.5 rounded">
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
                            className="w-full bg-transparent text-sm sm:text-xs text-neutral-900 font-medium focus:outline-none cursor-pointer"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] tracking-[0.18em] uppercase font-semibold text-neutral-600 block truncate">
                          CHECK-OUT DATE *
                        </label>
                        <div className="border border-gray-300 hover:border-gray-500 focus-within:border-hotel-forest transition-colors bg-gray-50/50 focus-within:bg-white p-2 sm:p-2.5 rounded">
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
                            className="w-full bg-transparent text-sm sm:text-xs text-neutral-900 font-medium focus:outline-none cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 3: ADULTS, CHILDREN & ROOM PREFERENCE */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4">
                      
                      {/* Adults */}
                      <div className="space-y-1">
                        <label className="text-[10px] tracking-[0.2em] uppercase font-semibold text-neutral-600 block">
                          ADULTS
                        </label>
                        <div className="h-[44px] sm:h-[46px] border border-gray-300 flex items-center justify-between px-2 bg-gray-50/50 hover:border-gray-500 transition-colors rounded">
                          <button
                            type="button"
                            onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                            className="w-8 h-8 flex items-center justify-center text-neutral-600 hover:text-black hover:bg-gray-200 text-sm font-semibold transition-colors rounded"
                          >
                            &minus;
                          </button>
                          <span className="text-xs sm:text-sm font-semibold text-neutral-900">{adults}</span>
                          <button
                            type="button"
                            onClick={() => setAdults((prev) => Math.min(10, prev + 1))}
                            className="w-8 h-8 flex items-center justify-center text-neutral-600 hover:text-black hover:bg-gray-200 text-sm font-semibold transition-colors rounded"
                          >
                            &#43;
                          </button>
                        </div>
                      </div>

                      {/* Children */}
                      <div className="space-y-1">
                        <label className="text-[10px] tracking-[0.2em] uppercase font-semibold text-neutral-600 block">
                          CHILDREN
                        </label>
                        <div className="h-[44px] sm:h-[46px] border border-gray-300 flex items-center justify-between px-2 bg-gray-50/50 hover:border-gray-500 transition-colors rounded">
                          <button
                            type="button"
                            onClick={() => setChildren((prev) => Math.max(0, prev - 1))}
                            className="w-8 h-8 flex items-center justify-center text-neutral-600 hover:text-black hover:bg-gray-200 text-sm font-semibold transition-colors rounded"
                          >
                            &minus;
                          </button>
                          <span className="text-xs sm:text-sm font-semibold text-neutral-900">{children}</span>
                          <button
                            type="button"
                            onClick={() => setChildren((prev) => Math.min(8, prev + 1))}
                            className="w-8 h-8 flex items-center justify-center text-neutral-600 hover:text-black hover:bg-gray-200 text-sm font-semibold transition-colors rounded"
                          >
                            &#43;
                          </button>
                        </div>
                      </div>

                      {/* Room Preference */}
                      <div className="col-span-2 sm:col-span-1 space-y-1">
                        <label className="text-[10px] tracking-[0.2em] uppercase font-semibold text-neutral-600 block">
                          ROOM CATEGORY *
                        </label>
                        <div className="h-[44px] sm:h-[46px] border border-gray-300 hover:border-gray-500 focus-within:border-hotel-forest transition-colors bg-gray-50/50 focus-within:bg-white px-2.5 flex items-center rounded">
                          <select
                            value={formData.roomPreference}
                            onChange={(e) => setFormData({ ...formData, roomPreference: e.target.value })}
                            className="w-full bg-transparent text-sm sm:text-xs text-neutral-900 font-medium focus:outline-none cursor-pointer"
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
                    <div className="space-y-1">
                      <label className="text-[10px] tracking-[0.2em] uppercase font-semibold text-neutral-600 block">
                        SPECIAL REQUESTS / ARRIVAL TIME (OPTIONAL)
                      </label>
                      <div className="border border-gray-300 hover:border-gray-500 focus-within:border-hotel-forest transition-colors bg-gray-50/50 focus-within:bg-white p-2.5 rounded">
                        <textarea
                          rows={2}
                          placeholder="e.g. Late night check-in, ground floor room, extra mattress, dining requests..."
                          value={formData.specialRequest}
                          onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                          className="w-full bg-transparent text-base sm:text-xs text-neutral-900 font-medium focus:outline-none resize-none"
                        />
                      </div>
                    </div>

                    {/* Action Submit Buttons */}
                    <div className="pt-2 space-y-2.5">
                      <button
                        type="submit"
                        className="w-full min-h-[46px] bg-hotel-forestDark hover:bg-hotel-forest text-white py-3.5 px-6 text-xs font-semibold tracking-[0.22em] uppercase transition-all shadow-md active:scale-95 flex items-center justify-center space-x-2 rounded"
                      >
                        <Send className="w-3.5 h-3.5 text-hotel-goldLight" />
                        <span>SUBMIT RESERVATION ENQUIRY</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsAppBooking}
                        className="w-full min-h-[44px] bg-emerald-700 hover:bg-emerald-600 text-white py-3 px-4 text-xs font-semibold tracking-[0.16em] uppercase transition-all shadow-sm flex items-center justify-center space-x-2 rounded"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>INSTANT CONFIRMATION ON WHATSAPP</span>
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Frequently Asked Questions (FAQs) */}
      <section className="py-16 sm:py-20 bg-white border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-[0.24em] text-hotel-goldDark font-semibold block">
              COMMON INQUIRIES
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-hotel-forest font-semibold">
              Frequently Asked Questions
            </h3>
            <div className="w-16 h-[2px] bg-hotel-gold mx-auto my-3" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="p-5 sm:p-6 bg-[#faf9f6] rounded-xl border border-neutral-200 space-y-2"
              >
                <div className="flex items-start space-x-3">
                  <HelpCircle className="w-4 h-4 text-hotel-forest shrink-0 mt-0.5" />
                  <h4 className="font-serif text-base sm:text-lg font-semibold text-neutral-900">
                    {faq.q}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
