import React from 'react';
import { Link } from 'react-router-dom';
import { diningData, hotelInfo } from '../data/hotelData';
import {
  Utensils, Coffee, ShieldCheck, BellRing,
  Sparkles, Clock, Check, Phone, ArrowRight
} from 'lucide-react';
import AnimateIn from './AnimateIn';
import { motion } from 'framer-motion';

export default function DiningSection({ onOpenBooking }) {
  const iconComponents = {
    Coffee,
    Utensils,
    ShieldCheck,
    BellRing
  };

  return (
    <section id="dining" className="py-20 lg:py-28 bg-hotel-ivory text-hotel-charcoal parchment-pattern relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <AnimateIn direction="up">
          <div className="text-center max-w-4xl mx-auto mb-14 lg:mb-20">
            <span className="text-xs sm:text-sm tracking-[0.32em] uppercase font-semibold text-hotel-goldDark mb-3 block">
              NOURISHING HOSPITALITY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[52px] text-hotel-charcoal font-normal uppercase tracking-[0.06em] leading-[1.15] mb-6">
              AUTHENTIC FLAVORS & LOCAL DELICACIES
            </h2>
            <div className="w-16 h-[2px] bg-hotel-gold mx-auto mb-8" />
            <p className="font-sans font-light text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              {diningData.description}
            </p>
          </div>
        </AnimateIn>

        {/* Feature Split Banner */}
        <AnimateIn direction="up" delay={0.1}>
          <div className="relative rounded-2xl overflow-hidden shadow-luxury mb-16 bg-hotel-forestDark text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">

              <div className="lg:col-span-7 h-[340px] sm:h-[440px] relative overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
                  alt="Sai Siddhi Nivas Restaurant & Dining"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-hotel-forestDark/90 hidden lg:block" />
              </div>

              <div className="lg:col-span-5 p-6 sm:p-10 space-y-4">
                <span className="text-xs uppercase tracking-widest text-hotel-gold font-semibold block">
                  {diningData.concept}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-snug">
                  Fresh, Pure & Soulful Meals
                </h3>
                <p className="text-xs sm:text-sm text-hotel-ivory/80 font-light leading-relaxed">
                  Enjoy authentic Konkan delicacies, hot vegetarian thalis, fresh coastal preparations, and quick breakfast items prepared to order. We prioritize hygiene, pure ingredients, and home-style warmth.
                </p>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start space-x-3 text-xs text-hotel-ivory/90">
                  <Clock className="w-4 h-4 text-hotel-gold shrink-0 mt-0.5" />
                  <span>
                    Made fresh for staying guests. Morning breakfast is served from 7:30 AM to 10:30 AM. Room service available throughout operating hours.
                  </span>
                </div>

                <div className="pt-2">
                  <a
                    href={`tel:${hotelInfo.phoneRaw}`}
                    className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-hotel-goldLight hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Kitchen / Dining Desk: {hotelInfo.phone}</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </AnimateIn>

        {/* 4 Dining Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {diningData.features.map((feat, idx) => {
            const IconComp = iconComponents[feat.icon] || Utensils;
            return (
              <AnimateIn key={idx} direction="up" delay={0.08 * idx}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02, borderColor: '#c5a059', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.12)' }}
                  transition={{ duration: 0.28 }}
                  className="group bg-white p-6 rounded-2xl border border-hotel-border shadow-sm transition-all flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-hotel-forest/10 text-hotel-forest group-hover:bg-hotel-forest group-hover:text-hotel-gold transition-all duration-300 flex items-center justify-center mb-4 group-hover:scale-110">
                      <IconComp className="w-5 h-5 transition-transform" />
                    </div>
                    <h4 className="font-serif text-lg text-hotel-forest font-medium mb-2">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-hotel-muted font-light leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-hotel-border/60 flex items-center space-x-1 text-[11px] text-hotel-forest font-medium">
                    <Check className="w-3.5 h-3.5 text-hotel-goldDark" />
                    <span>Available on Premise</span>
                  </div>
                </motion.div>
              </AnimateIn>
            );
          })}
        </div>

        {/* Dedicated Page Link Button */}
        <div className="mt-12 text-center">
          <Link
            to="/dining"
            className="inline-flex items-center space-x-2 bg-hotel-forest hover:bg-hotel-forestDark text-white px-8 py-3.5 rounded text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md active:scale-95"
          >
            <span>EXPLORE OUR FULL DINING &amp; SPECIALTIES</span>
            <ArrowRight className="w-3.5 h-3.5 text-hotel-goldLight" />
          </Link>
        </div>

      </div>
    </section>
  );
}
