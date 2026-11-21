import React, { useState } from 'react';
import { roomCategories, resortInfo } from '../data/cranganorData';
import { X, Calendar, Users, Check, Phone, Mail, Sparkles, Send } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialData = {} }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roomType: initialData.roomType || roomCategories[0].id,
    checkIn: initialData.checkIn || new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
    checkOut: initialData.checkOut || new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
    guests: initialData.guests || '2 Adults',
    specialRequests: '',
    ayurvedaInterest: false
  });

  const [submitted, setSubmitted] = useState(false);

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
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Cranganor Concierge! I would like to book a stay.\n\n` +
      `*Name:* ${formData.name || 'Guest'}\n` +
      `*Category:* ${selectedRoomObj.name}\n` +
      `*Dates:* ${formData.checkIn} to ${formData.checkOut} (${nights} Night${nights > 1 ? 's' : ''})\n` +
      `*Guests:* ${formData.guests}\n` +
      `*Ayurveda Spa Interest:* ${formData.ayurvedaInterest ? 'Yes' : 'No'}\n` +
      `*Notes:* ${formData.specialRequests || 'None'}\n\n` +
      `Please confirm availability & tariff.`
    );
    window.open(`https://wa.me/${resortInfo.whatsapp.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full border border-chateau-border shadow-2xl overflow-hidden my-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Strip */}
        <div className="bg-chateau-river px-6 py-5 text-chateau-sand flex items-center justify-between border-b border-chateau-gold/30">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-chateau-gold font-semibold block">
              Direct Reservation Assistance
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-white">
              Reserve Your Stay at Cranganor
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-chateau-sand/70 hover:text-white rounded-full hover:bg-white/10"
            aria-label="Close Booking Modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-2xl text-chateau-river">
              Booking Request Received with Grace
            </h4>
            <p className="text-sm text-chateau-muted max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-chateau-charcoal">{formData.name}</strong>. Our reservation concierge at Cranganor will verify room availability for <strong className="text-chateau-charcoal">{formData.checkIn}</strong> to <strong className="text-chateau-charcoal">{formData.checkOut}</strong> and reply via email (<strong className="text-chateau-charcoal">{formData.email}</strong>) and phone within a couple of hours.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={handleWhatsAppRedirect}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg text-xs tracking-widest uppercase font-semibold flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Instant Confirmation on WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="border border-chateau-border px-6 py-3 rounded-lg text-xs tracking-widest uppercase font-semibold text-chateau-charcoal hover:bg-chateau-sand"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            
            {/* Live Room Summary Strip */}
            <div className="p-4 rounded-xl bg-chateau-sand border border-chateau-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <span className="text-xs uppercase tracking-wider text-chateau-terracotta font-semibold block">
                  Selected Category
                </span>
                <span className="font-serif text-lg text-chateau-river font-semibold">
                  {selectedRoomObj.name}
                </span>
                <span className="text-xs text-chateau-muted block">
                  ₹{selectedRoomObj.price.toLocaleString('en-IN')} / night (incl. gourmet breakfast)
                </span>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-[11px] uppercase tracking-wider text-chateau-muted block">Estimated Stay ({nights} Night{nights > 1 ? 's' : ''})</span>
                <span className="font-serif text-xl font-bold text-chateau-river">
                  ₹{estimatedTotal.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-chateau-muted block">+ applicable GST</span>
              </div>
            </div>

            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div>
                <label className="block text-xs uppercase tracking-wider text-chateau-river font-semibold mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maya Iyer"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-chateau-border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-chateau-river"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-chateau-river font-semibold mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="maya@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-chateau-border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-chateau-river"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-chateau-river font-semibold mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-chateau-border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-chateau-river"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-chateau-river font-semibold mb-1">
                  Room Category
                </label>
                <select
                  value={formData.roomType}
                  onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                  className="w-full border border-chateau-border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-chateau-river"
                >
                  {roomCategories.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name} (₹{r.price.toLocaleString('en-IN')})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-chateau-river font-semibold mb-1">
                  Check-in Date
                </label>
                <input
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                  className="w-full border border-chateau-border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-chateau-river"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-chateau-river font-semibold mb-1">
                  Check-out Date
                </label>
                <input
                  type="date"
                  value={formData.checkOut}
                  onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                  className="w-full border border-chateau-border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-chateau-river"
                />
              </div>

            </div>

            {/* Checkbox: Ayurveda */}
            <div className="flex items-center space-x-2 pt-1">
              <input
                type="checkbox"
                id="ayurveda"
                checked={formData.ayurvedaInterest}
                onChange={(e) => setFormData({ ...formData, ayurvedaInterest: e.target.checked })}
                className="w-4 h-4 text-chateau-terracotta rounded border-chateau-border focus:ring-chateau-terracotta"
              />
              <label htmlFor="ayurveda" className="text-xs text-chateau-charcoal select-none">
                Interested in Ayurvedic Spa Therapies / Physician Consultation
              </label>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-chateau-river font-semibold mb-1">
                Special Requests / Airport Transfer
              </label>
              <textarea
                rows="2"
                placeholder="Dietary preferences, anniversary celebration, airport pick-up requirement, etc."
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                className="w-full border border-chateau-border rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:border-chateau-river resize-none"
              />
            </div>

            {/* Buttons */}
            <div className="pt-3 border-t border-chateau-border/60 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 bg-chateau-terracotta hover:bg-chateau-terracottaHover text-white py-3 rounded-lg text-xs tracking-widest uppercase font-semibold transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Reservation Request</span>
              </button>
              <button
                type="button"
                onClick={handleWhatsAppRedirect}
                className="bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-3 rounded-lg text-xs tracking-widest uppercase font-semibold transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Book via WhatsApp</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
