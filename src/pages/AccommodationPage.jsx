import React from 'react';
import PageHero from '../components/PageHero';
import { roomCategories, hotelInfo } from '../data/hotelData';
import { 
  Bed, Maximize2, Users, Check, Calendar, Eye, 
  MessageCircle, Phone, Info, ShieldCheck, Sparkles 
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function AccommodationPage({ onOpenBooking, onSelectRoomDetail }) {
  const comparisonData = [
    {
      feature: "Room Dimensions",
      deluxe: "320 sq.ft",
      family: "480 sq.ft (Spacious)",
      executive: "280 sq.ft"
    },
    {
      feature: "Bedding Configuration",
      deluxe: "King-Size Plush Bed",
      family: "1 King + 1 Queen Bed",
      executive: "Queen-Size Ergonomic Bed"
    },
    {
      feature: "Maximum Occupancy",
      deluxe: "Up to 2 Adults + 1 Child",
      family: "Up to 4-5 Adults / Family",
      executive: "Up to 2 Adults"
    },
    {
      feature: "Air Conditioning",
      deluxe: "Silent Split AC Unit",
      family: "Dual Climate Control Units",
      executive: "Independent Split AC"
    },
    {
      feature: "24/7 Hot Water",
      deluxe: "Yes (Continuous)",
      family: "Yes (Continuous)",
      executive: "Yes (Continuous)"
    },
    {
      feature: "High-Speed Wi-Fi",
      deluxe: "Complimentary Fiber Wi-Fi",
      family: "Complimentary Fiber Wi-Fi",
      executive: "Complimentary Fiber Wi-Fi"
    },
    {
      feature: "Television & Media",
      deluxe: "HD LED Television",
      family: "Large HD Screen",
      executive: "HD Smart Entertainment"
    },
    {
      feature: "Ideal For",
      deluxe: "Couples, Solo Voyagers",
      family: "Families, Tour Groups",
      executive: "Highway Travelers, Business"
    }
  ];

  return (
    <div className="bg-white text-hotel-charcoal">
      {/* 1. Page Hero Banner */}
      <PageHero
        title="ACCOMMODATIONS & SUITES"
        subtitle="Spacious Air-Conditioned Bedrooms and Suites Crafted for Restful Slumber and Rejuvenation."
        breadcrumb="ACCOMMODATION"
        badge="ROOMS • SUITES • FAMILY LIVING"
        image="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1920&auto=format&fit=crop"
      />

      {/* 2. Room Overview Intro */}
      <section className="py-12 bg-[#faf9f6] border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.28em] text-hotel-goldDark font-semibold block">
            REFINED LIVING SPACES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-hotel-forest font-normal uppercase">
            Designed for Pure Comfort &amp; Tranquility
          </h2>
          <div className="w-16 h-[2px] bg-hotel-gold mx-auto" />
          <p className="font-sans font-light text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Each accommodation category at Sai Siddhi Nivas combines spotless hygiene, climate-controlled comfort, ergonomic bedding, and thoughtful in-room amenities to ensure you awake refreshed and energized.
          </p>
        </div>
      </section>

      {/* 3. Detailed Room Showcases (All 3 Categories) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
          {roomCategories.map((room, index) => (
            <div 
              key={room.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              
              {/* Photo Showcase Column */}
              <div className="lg:col-span-7 space-y-3">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200 h-[320px] sm:h-[400px] group bg-hotel-forestDark">
                  <img
                    src={room.images[0]}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-3.5 py-1 bg-hotel-forestDark/90 backdrop-blur-sm text-hotel-goldLight text-[10px] sm:text-xs tracking-wider uppercase font-semibold rounded-lg border border-hotel-gold/30">
                    {room.category}
                  </div>
                  
                  {/* Tariff Badge */}
                  <div className="absolute bottom-4 right-4 px-4 py-2 bg-hotel-forestDark/95 backdrop-blur-md rounded-xl text-white text-right border border-hotel-gold/30 shadow-lg">
                    <span className="text-[9px] uppercase tracking-wider text-hotel-gold block font-sans">Starting Tariff</span>
                    <div className="flex items-baseline justify-end space-x-1 my-0.5">
                      <span className="font-sans font-bold text-base text-hotel-goldLight select-none">₹</span>
                      <span className="font-sans text-2xl font-extrabold tracking-tight text-white">
                        {room.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-neutral-400 font-normal">*</span>
                    </div>
                    <span className="text-[9px] text-neutral-400 block font-sans">/ night &bull; seasonal rates confirmed on call</span>
                  </div>
                </div>

                {/* Thumbnails row */}
                <div className="grid grid-cols-3 gap-2.5">
                  {room.images.map((img, i) => (
                    <div 
                      key={i}
                      onClick={() => onSelectRoomDetail(room)}
                      className="h-20 sm:h-24 rounded-lg overflow-hidden border border-neutral-200 cursor-pointer hover:border-hotel-gold transition-colors relative group"
                    >
                      <img 
                        src={img} 
                        alt={`${room.name} ${i+1}`} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Details & Specs Column */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <span className="text-xs uppercase tracking-[0.24em] text-hotel-goldDark font-semibold block mb-1">
                    {room.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-hotel-forest font-semibold">
                    {room.name}
                  </h3>
                </div>

                {/* Quick Specs Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#faf9f6] rounded-lg text-xs text-neutral-800 border border-neutral-200">
                    <Bed className="w-3.5 h-3.5 text-hotel-forest" />
                    <span>{room.bed}</span>
                  </span>
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#faf9f6] rounded-lg text-xs text-neutral-800 border border-neutral-200">
                    <Users className="w-3.5 h-3.5 text-hotel-goldDark" />
                    <span>{room.capacity}</span>
                  </span>
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#faf9f6] rounded-lg text-xs text-neutral-800 border border-neutral-200">
                    <Maximize2 className="w-3.5 h-3.5 text-hotel-forestMuted" />
                    <span>{room.size}</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                  {room.description}
                </p>

                {/* Features List */}
                <div className="border-t border-b border-neutral-200 py-3.5">
                  <h4 className="text-[11px] uppercase tracking-wider text-hotel-forest font-semibold mb-2.5">
                    Room Inclusions &amp; Amenities:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                    {room.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Check className="w-3.5 h-3.5 text-hotel-forest shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={() => onOpenBooking({ roomType: room.id })}
                    className="flex-1 min-h-[46px] bg-hotel-forest hover:bg-hotel-forestDark text-white px-5 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all shadow-md flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-4 h-4 text-hotel-goldLight" />
                    <span>Book This Category</span>
                  </button>
                  <button
                    onClick={() => onSelectRoomDetail(room)}
                    className="min-h-[46px] px-4 border border-hotel-forest text-hotel-forest hover:bg-hotel-forest hover:text-white rounded-lg text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center space-x-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Full Details</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 4. Room Comparison Matrix */}
      <section className="py-16 sm:py-24 bg-[#faf9f6] border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.28em] text-hotel-goldDark font-semibold block mb-2">
              SIDE-BY-SIDE MATRIX
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-hotel-charcoal font-normal uppercase">
              Room Comparison Guide
            </h2>
            <div className="w-16 h-[2px] bg-hotel-gold mx-auto my-4" />
            <p className="text-xs sm:text-sm text-neutral-600 font-light">
              Compare features and choose the optimal room configuration for your travel requirements.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-neutral-200">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-hotel-forestDark text-hotel-ivory border-b border-hotel-gold/30">
                  <th className="p-4 sm:p-5 font-serif font-normal text-xs uppercase tracking-wider text-hotel-goldLight">Feature</th>
                  <th className="p-4 sm:p-5 font-serif font-normal text-xs uppercase tracking-wider text-white">Deluxe AC Room</th>
                  <th className="p-4 sm:p-5 font-serif font-normal text-xs uppercase tracking-wider text-white">Premium Family Suite</th>
                  <th className="p-4 sm:p-5 font-serif font-normal text-xs uppercase tracking-wider text-white">Executive Comfort</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'}>
                    <td className="p-4 sm:p-5 font-medium text-neutral-900">{row.feature}</td>
                    <td className="p-4 sm:p-5 text-neutral-700">{row.deluxe}</td>
                    <td className="p-4 sm:p-5 text-neutral-700 font-medium text-hotel-forest">{row.family}</td>
                    <td className="p-4 sm:p-5 text-neutral-700">{row.executive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 5. Stay Guidelines & Policies */}
      <section className="py-14 sm:py-20 bg-white border-t border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.24em] text-hotel-goldDark font-semibold block mb-1">
              GUEST INFORMATION
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-hotel-forest font-semibold">
              Reservation Policies &amp; Stay Guidelines
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-neutral-600">
            <div className="p-5 bg-neutral-50 rounded-lg border border-neutral-200 space-y-2">
              <span className="font-semibold text-hotel-forest block text-sm">Check-in &amp; Check-out Timings:</span>
              <p>Standard check-in is <strong>12:00 PM</strong> and check-out is <strong>11:00 AM</strong>. Early check-in or late departure is subject to availability and prior confirmation with reception.</p>
            </div>

            <div className="p-5 bg-neutral-50 rounded-lg border border-neutral-200 space-y-2">
              <span className="font-semibold text-hotel-forest block text-sm">Identification Requirements:</span>
              <p>As per government hospitality norms, valid government-issued photo ID (Aadhaar, Passport, Voter ID, or Driving License) is mandatory for all adult guests at registration.</p>
            </div>

            <div className="p-5 bg-neutral-50 rounded-lg border border-neutral-200 space-y-2">
              <span className="font-semibold text-hotel-forest block text-sm">Child &amp; Extra Bed Policy:</span>
              <p>Children up to 5 years stay complimentary sharing existing bedding. Extra mattresses and linen for additional guests can be arranged upon prior notice.</p>
            </div>

            <div className="p-5 bg-neutral-50 rounded-lg border border-neutral-200 space-y-2">
              <span className="font-semibold text-hotel-forest block text-sm">Tariff Guidance Note:</span>
              <p>Rates displayed on the website are starting guidance tariffs. Seasonal holiday rates and special group discounts are confirmed directly by hotel management on phone or WhatsApp.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Quick Booking CTA */}
      <section className="py-14 bg-hotel-forestDark text-hotel-ivory text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
            Need Immediate Assistance with Room Availability?
          </h3>
          <p className="text-xs sm:text-sm text-hotel-ivory/80 max-w-xl mx-auto font-light">
            Contact our 24/7 reception desk for real-time room confirmation, custom family arrangements, and seasonal discounts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto bg-hotel-gold hover:bg-hotel-goldLight text-hotel-forestDark px-7 py-3 text-xs uppercase tracking-widest font-bold shadow-md transition-all"
            >
              Open Booking Form
            </button>
            <a
              href={`https://wa.me/${hotelInfo.whatsapp.replace('+', '')}?text=Hello%20Sai%20Siddhi%20Nivas,%20I%20would%20like%20to%20enquire%20about%20room%20availability.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-white/40 hover:bg-white/10 text-white px-6 py-3 text-xs uppercase tracking-widest font-semibold flex items-center justify-center space-x-2 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Instant WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
