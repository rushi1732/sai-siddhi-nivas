import React from 'react';
import { hotelInfo } from '../data/hotelData';
import { 
  MapPin, Navigation, Bus, Compass, Train, Sun, 
  Clock, Phone, Mail, CheckCircle2, ExternalLink 
} from 'lucide-react';
import AnimateIn from './AnimateIn';
import { motion } from 'framer-motion';

export default function LocationSection() {
  const iconMap = {
    Bus,
    MapPin,
    Compass,
    Sun,
    Train
  };

  return (
    <section id="location" className="py-20 lg:py-28 bg-hotel-ivory text-hotel-charcoal parchment-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimateIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-hotel-goldDark text-xs font-semibold tracking-[0.25em] uppercase mb-3">
              <MapPin className="w-3.5 h-3.5 text-hotel-gold" />
              <span>Prime Highway Location</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-hotel-forest font-normal tracking-tight">
              How to Reach Sai Siddhi Nivas
            </h2>
            <div className="w-20 h-0.5 bg-hotel-gold mx-auto mt-4 mb-6" />
            <p className="text-hotel-muted font-light text-base sm:text-lg leading-relaxed">
              Conveniently situated along Maharashtra State Highway 4 (MSH4) near Modka Agar in Kirtanwadi Tarf. Smooth road access and strategic transit connectivity.
            </p>
          </div>
        </AnimateIn>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Box */}
            <AnimateIn direction="right" delay={0.1}>
              <div className="p-6 sm:p-8 bg-white rounded-2xl border border-hotel-border shadow-luxury">
                <span className="text-[11px] uppercase tracking-widest text-hotel-goldDark font-semibold block mb-2">
                  Official Hotel Address
                </span>
                <h3 className="font-serif text-2xl text-hotel-forest font-normal mb-3">
                  Sai Siddhi Nivas
                </h3>
                
                <div className="space-y-2 text-sm text-hotel-muted font-light leading-relaxed mb-5">
                  <p className="font-medium text-hotel-charcoal">
                    {hotelInfo.address}
                  </p>
                  <div className="pt-2 flex items-center space-x-2 text-xs">
                    <span className="font-semibold text-hotel-forest">Google Plus Code:</span>
                    <span className="font-mono bg-hotel-beige/60 px-2 py-0.5 rounded text-hotel-forestDark font-bold text-xs">
                      {hotelInfo.plusCode}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3 pt-4 border-t border-hotel-border text-xs">
                  <a 
                    href={`tel:${hotelInfo.phoneRaw}`}
                    className="flex items-center space-x-3 text-hotel-charcoal hover:text-hotel-goldDark transition-colors"
                  >
                    <Phone className="w-4 h-4 text-hotel-gold shrink-0" />
                    <span className="font-semibold">{hotelInfo.phone}</span>
                  </a>
                  <div className="flex items-center space-x-3 text-hotel-charcoal">
                    <Clock className="w-4 h-4 text-hotel-gold shrink-0" />
                    <span>{hotelInfo.operatingHours}</span>
                  </div>
                </div>

                {/* Get Directions Button */}
                <div className="mt-6 pt-4 border-t border-hotel-border">
                  <motion.a
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={hotelInfo.mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-hotel-forest to-hotel-forestDark hover:from-hotel-forestDark hover:to-hotel-forest text-hotel-goldLight text-xs uppercase tracking-widest font-bold transition-all shadow-md hover:shadow-xl border border-hotel-gold/30"
                  >
                    <Navigation className="w-4 h-4 text-hotel-gold" />
                    <span>Get Directions</span>
                  </motion.a>
                </div>
              </div>
            </AnimateIn>

            {/* Travel Guide Box */}
            <AnimateIn direction="right" delay={0.2}>
              <div className="p-6 bg-white rounded-2xl border border-hotel-border shadow-sm space-y-4">
                <h4 className="font-serif text-lg text-hotel-forest font-semibold flex items-center space-x-2">
                  <Compass className="w-4 h-4 text-hotel-gold" />
                  <span>Travel Accessibility</span>
                </h4>
                <div className="text-xs text-hotel-muted space-y-3 font-light leading-relaxed">
                  <p>
                    <strong className="font-semibold text-hotel-charcoal">By Road:</strong> Direct highway access right on MSH4 near Modka Agar junction. Excellent smooth asphalt road with easy turn-in for private vehicles.
                  </p>
                  <p>
                    <strong className="font-semibold text-hotel-charcoal">By Bus:</strong> Frequent local ST buses operate along MSH4 connecting to Modka Agar, Warweli, Guhagar, and Chiplun.
                  </p>
                  <p>
                    <strong className="font-semibold text-hotel-charcoal">By Train:</strong> Nearest major railway junction is Chiplun (Konkan Railway), approximately 1 hour scenic drive away.
                  </p>
                </div>
              </div>
            </AnimateIn>

          </div>

          {/* Right Column: Distance Cards & Interactive Map View */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Distances List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {hotelInfo.distances.map((d, idx) => {
                const IconComponent = iconMap[d.icon] || MapPin;
                return (
                  <AnimateIn key={idx} direction="up" delay={0.06 * idx}>
                    <motion.div 
                      whileHover={{ y: -3, borderColor: '#c5a059' }}
                      transition={{ duration: 0.2 }}
                      className="p-4 bg-white rounded-xl border border-hotel-border shadow-sm flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 rounded-lg bg-hotel-forest/10 text-hotel-forest flex items-center justify-center shrink-0">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-hotel-forest">{d.destination}</h4>
                          <span className="text-[11px] text-hotel-muted">{d.time}</span>
                        </div>
                      </div>
                      <span className="text-xs font-serif font-bold text-hotel-goldDark">{d.distance}</span>
                    </motion.div>
                  </AnimateIn>
                );
              })}
            </div>

            {/* Google Map Embed */}
            <AnimateIn direction="left" delay={0.25}>
              <div className="rounded-2xl overflow-hidden border border-hotel-border shadow-luxury relative h-[360px] sm:h-[420px] bg-slate-100">
                <iframe
                  title="Sai Siddhi Nivas Location Map"
                  src="https://maps.google.com/maps?q=17.485,73.195&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
                
                {/* Overlay Badge for Plus Code */}
                <div className="absolute top-4 left-4 p-3 bg-hotel-forestDark/90 backdrop-blur-md text-white rounded-xl border border-hotel-gold/30 shadow-lg hidden sm:block">
                  <span className="text-[10px] uppercase tracking-wider text-hotel-gold block font-semibold">
                    Google Maps Plus Code
                  </span>
                  <span className="font-mono text-xs font-bold text-white">
                    F6HC+27 Warweli, Maharashtra
                  </span>
                </div>
              </div>
            </AnimateIn>

          </div>

        </div>

      </div>
    </section>
  );
}
