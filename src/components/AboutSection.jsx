import React from 'react';
import { aboutData, hotelInfo } from '../data/hotelData';
import {
  Sparkles, HeartHandshake, MapPin, Users, ShieldCheck,
  Clock, ArrowRight, Award, Compass
} from 'lucide-react';
import { motion } from 'framer-motion';
import AnimateIn from './AnimateIn';

export default function AboutSection() {
  const iconComponents = {
    Sparkles,
    HeartHandshake,
    MapPin,
    Users
  };

  return (
    <section id="about" className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-white text-hotel-charcoal relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* 5. INTRODUCTION SECTION: Clean White Header (One&Only Mandarina Aesthetic) */}
        <AnimateIn direction="up">
          <div className="text-center max-w-4xl mx-auto mb-14 lg:mb-20">
            
            {/* Small Heading */}
            <span className="text-xs sm:text-sm tracking-[0.32em] uppercase font-semibold text-hotel-goldDark mb-3 block">
              WELCOME TO SAI SIDDHI NIVAS
            </span>

            {/* Main Heading in Grand Serif Typography */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] text-hotel-charcoal font-normal uppercase tracking-[0.06em] leading-[1.15] mb-6">
              A PLACE TO RELAX AND FEEL AT HOME
            </h2>

            {/* Minimalist Divider Accent */}
            <div className="w-16 h-[2px] bg-hotel-gold mx-auto mb-8" />

            {/* Beautiful Editorial Description */}
            <p className="font-sans font-light text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              Experience a relaxing stay at Sai Siddhi Nivas, where comfort, warmth and memorable hospitality come together. Nestled near Modka Agar along Maharashtra State Highway 4, our retreat offers an idyllic haven for voyagers, visiting families, and explorers seeking quiet elegance amidst the serene beauty of the Konkan corridor.
            </p>
          </div>
        </AnimateIn>

        {/* Large Cinematic Property Showcase Photograph with Smooth Zoom Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full h-[380px] sm:h-[500px] lg:h-[600px] mb-20 overflow-hidden shadow-2xl border border-gray-100 group"
        >
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1920&auto=format&fit=crop"
            alt="Sai Siddhi Nivas Property and Surroundings"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Subtle bottom gradient for editorial caption */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 right-6 text-white max-w-2xl">
            <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-hotel-goldLight font-semibold block mb-1.5">
              NEAR MODKA AGAR &bull; MSH4 HIGHWAY CORRIDOR
            </span>
            <p className="font-serif italic text-lg sm:text-2xl text-white font-light leading-snug">
              "A tranquil sanctuary designed for restful stopovers, peaceful family stays, and refreshing coastal journeys."
            </p>
          </div>
        </motion.div>

        {/* Narrative & Hospitality Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Authentic Hospitality Story */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-4">
              <span className="text-xs tracking-[0.25em] uppercase text-hotel-goldDark font-semibold block">
                OUR STORY & VALUES
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-hotel-forest font-normal leading-tight">
                Authentic Warmth, Uncompromising Comfort
              </h3>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-neutral-600 font-light">
              {aboutData.p1}
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-neutral-600 font-light">
              {aboutData.p2}
            </p>

            {/* Location & Plus Code Badge */}
            <div className="p-5 border border-gray-200 bg-gray-50/70 space-y-2 text-xs text-neutral-700">
              <div className="flex items-center space-x-2 text-hotel-forest font-medium">
                <MapPin className="w-4 h-4 text-hotel-gold shrink-0" />
                <span>Near Modka Agar, MSH4, Kirtanwadi Tarf, Maharashtra 415703</span>
              </div>
              <div className="flex items-center space-x-2 pl-6 text-neutral-500">
                <span>Google Plus Code:</span>
                <span className="font-mono bg-white px-2 py-0.5 rounded border border-gray-200 text-hotel-forest font-semibold">
                  {hotelInfo.plusCode.split(' ')[0]} Warweli
                </span>
              </div>
            </div>

            {/* Quick Contact Direct */}
            <div className="pt-2 flex items-center space-x-4">
              <motion.a
                whileHover={{ x: 3 }}
                href={`tel:${hotelInfo.phoneRaw}`}
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-hotel-forest hover:text-hotel-gold transition-colors"
              >
                <span>Call Reservations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.a>
              <span className="text-gray-300">|</span>
              <motion.a
                whileHover={{ x: 3 }}
                href="#rooms"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-hotel-forest hover:text-hotel-gold transition-colors"
              >
                <span>Explore Accommodations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: 4 Pillars of Excellence with Staggered Entrance */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {aboutData.pillars.map((pillar, idx) => {
              const IconComp = iconComponents[pillar.icon] || Sparkles;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="p-6 sm:p-7 bg-white border border-gray-200 hover:border-hotel-gold/70 shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="w-10 h-10 bg-hotel-forest/5 text-hotel-forest group-hover:bg-hotel-forest group-hover:text-hotel-gold transition-colors flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </div>
                  <h4 className="font-serif text-base sm:text-lg text-hotel-forest font-normal mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}

            {/* Highway Corridor Highlight Banner */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="sm:col-span-2 p-6 border-l-4 border-hotel-gold bg-hotel-forest text-hotel-ivory shadow-lg"
            >
              <p className="font-serif italic text-sm sm:text-base text-hotel-ivory/95 leading-relaxed">
                "Whether you arrive tired from hours of highway journey or seek a peaceful coastal sanctuary, our doors open with authentic Maharashtrian hospitality, delicious dining, and genuine care."
              </p>
              <div className="flex flex-wrap items-center justify-between gap-2 mt-4 pt-3 border-t border-white/10 text-xs">
                <span className="text-[10px] uppercase tracking-widest text-hotel-gold font-sans font-semibold">
                  Management & Hospitality Desk &bull; Sai Siddhi Nivas
                </span>
                <span className="text-hotel-goldLight font-medium">
                  Direct Highway 4 Access &bull; Ample Free Parking
                </span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
