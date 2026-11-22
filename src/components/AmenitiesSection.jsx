import React from 'react';
import { hotelAmenities, hotelInfo } from '../data/hotelData';
import {
  Car, Wifi, Utensils, Snowflake, BellRing,
  Flame, Users, Zap, ShieldCheck, Sparkles, Compass,
  CheckCircle, CheckCircle2, Info, Phone
} from 'lucide-react';
import { motion } from 'framer-motion';
import AnimateIn from './AnimateIn';

export default function AmenitiesSection({ onOpenBooking }) {
  const iconMap = {
    Car,
    Wifi,
    Utensils,
    Snowflake,
    BellRing,
    Flame,
    Users,
    Zap,
    ShieldCheck,
    Sparkles,
    Compass,
    CheckCircle
  };

  return (
    <section id="amenities" className="py-20 lg:py-28 bg-hotel-forestDark text-hotel-ivory heritage-pattern relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <AnimateIn direction="up">
          <div className="text-center max-w-4xl mx-auto mb-14 lg:mb-20">
            <span className="text-xs sm:text-sm tracking-[0.32em] uppercase font-semibold text-hotel-goldLight mb-3 block">
              ESSENTIAL COMFORTS & CONVENIENCES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[52px] text-white font-normal uppercase tracking-[0.06em] leading-[1.15] mb-6">
              HOTEL AMENITIES & FACILITIES
            </h2>
            <div className="w-16 h-[2px] bg-hotel-gold mx-auto mb-8" />
            <p className="font-sans font-light text-base sm:text-lg text-hotel-ivory/85 leading-relaxed max-w-3xl mx-auto">
              Thoughtfully curated amenities designed to make your stay effortless, comfortable, and rejuvenating. All facilities are verified and confirmed on-site.
            </p>
          </div>
        </AnimateIn>

        {/* Confirmed Amenities Notice */}
        <AnimateIn direction="up" delay={0.1}>
          <div className="max-w-4xl mx-auto mb-12 p-4 rounded-xl bg-hotel-forest/60 border border-hotel-gold/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-hotel-ivory/90 shadow-md">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-hotel-gold shrink-0" />
              <span>
                <strong>Verified Hotel Facilities:</strong> Only genuine, on-premise amenities confirmed by Sai Siddhi Nivas management are displayed below.
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-hotel-gold/20 text-hotel-goldLight border border-hotel-gold/30 font-semibold shrink-0">
              Editable Inventory
            </span>
          </div>
        </AnimateIn>

        {/* Amenities Icon Grid with Fluid Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotelAmenities.map((amenity, idx) => {
            const IconComponent = iconMap[amenity.icon] || CheckCircle;
            return (
              <motion.div
                key={amenity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
                className="group bg-hotel-forest/80 backdrop-blur-md p-6 rounded-2xl border border-hotel-gold/20 hover:border-hotel-gold hover:bg-hotel-forest transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-hotel-forestLight to-hotel-forestDark border border-hotel-gold/30 flex items-center justify-center text-hotel-gold group-hover:scale-110 group-hover:text-hotel-goldLight transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-hotel-goldLight/70 bg-white/5 px-2 py-0.5 rounded">
                      {amenity.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg text-white font-medium mb-2 group-hover:text-hotel-gold transition-colors">
                    {amenity.title}
                  </h3>

                  <p className="text-xs text-hotel-ivory/70 leading-relaxed font-light mb-4">
                    {amenity.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-hotel-goldLight/80">
                  <span className="flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Confirmed Facility</span>
                  </span>
                  <span className="text-[10px] text-hotel-ivory/50">24/7 Available</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highway Assistance & Parking Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-hotel-forest to-hotel-forestDark border border-hotel-gold/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs uppercase tracking-widest text-hotel-gold font-semibold block">
              Vehicle Security & Highway Accessibility
            </span>
            <h3 className="font-serif text-2xl text-white font-normal">
              Traveling with Personal Cars or Tour Buses?
            </h3>
            <p className="text-xs sm:text-sm text-hotel-ivory/80 font-light max-w-2xl">
              Sai Siddhi Nivas offers wide entrance gates, dedicated on-site parking for families and tourist groups, CCTV surveillance, and immediate access to Maharashtra State Highway 4 (MSH4).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={`tel:${hotelInfo.phoneRaw}`}
              className="py-3 px-5 rounded-lg border border-hotel-gold text-hotel-gold hover:bg-hotel-gold hover:text-hotel-forestDark text-xs uppercase tracking-widest font-semibold transition-all flex items-center justify-center space-x-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Front Desk</span>
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="py-3 px-6 rounded-lg bg-gradient-to-r from-hotel-gold to-hotel-goldDark text-hotel-forestDark hover:from-hotel-goldHover hover:to-hotel-gold text-xs uppercase tracking-widest font-bold transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <span>Enquire for Group Stays</span>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
