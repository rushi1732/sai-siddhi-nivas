import React from 'react';
import { aboutData, hotelInfo } from '../data/hotelData';
import { 
  Sparkles, HeartHandshake, MapPin, Users, ShieldCheck, 
  Award, Clock, CheckCircle2, ChevronRight 
} from 'lucide-react';

export default function AboutSection() {
  const iconComponents = {
    Sparkles,
    HeartHandshake,
    MapPin,
    Users
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-hotel-ivory text-hotel-charcoal parchment-pattern relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-hotel-goldDark text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-hotel-gold" />
            <span>Hospitality With Distinction</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-hotel-forest font-normal tracking-tight leading-tight">
            {aboutData.subheading}
          </h2>
          <div className="w-20 h-0.5 bg-hotel-gold mx-auto mt-4 mb-6" />
          <p className="text-hotel-muted font-light text-base sm:text-lg leading-relaxed">
            {aboutData.lead}
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Hotel Showcase */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=900&auto=format&fit=crop"
                alt="Sai Siddhi Nivas Hotel Exterior"
                className="w-full h-[440px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hotel-forestDark via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-hotel-ivory">
                <span className="text-[11px] uppercase tracking-widest text-hotel-gold block font-semibold mb-1">
                  Near Modka Agar &bull; MSH4 Highway Corridor
                </span>
                <p className="font-serif text-base sm:text-lg text-white font-normal leading-snug">
                  "A peaceful haven designed for restful stopovers, family celebrations, and refreshing coastal stays."
                </p>
              </div>
            </div>

            {/* Quick Stat Pill Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border border-hotel-border shadow-sm flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-hotel-forest mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-hotel-forest">
                    100% Sanitized
                  </h4>
                  <p className="text-[11px] text-hotel-muted leading-tight mt-1">
                    Fresh linens, daily deep cleaning & sanitization.
                  </p>
                </div>
              </div>
              
              <div className="p-4 bg-white rounded-xl border border-hotel-border shadow-sm flex items-start space-x-3">
                <Clock className="w-5 h-5 text-hotel-gold mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-hotel-forest">
                    24/7 Front Desk
                  </h4>
                  <p className="text-[11px] text-hotel-muted leading-tight mt-1">
                    Continuous check-in support & guest assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: In-depth Story & Values */}
          <div className="lg:col-span-7 space-y-6 text-hotel-charcoal/90">
            
            {/* Story Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-hotel-border shadow-luxury relative">
              <h3 className="font-serif text-2xl sm:text-3xl text-hotel-forest font-normal mb-4">
                Welcome to Sai Siddhi Nivas
              </h3>
              <p className="text-sm leading-relaxed text-hotel-muted font-light mb-4">
                {aboutData.p1}
              </p>
              <p className="text-sm leading-relaxed text-hotel-muted font-light">
                {aboutData.p2}
              </p>

              <div className="mt-6 pt-5 border-t border-hotel-border/70 flex flex-wrap items-center justify-between gap-3 text-xs text-hotel-muted">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-hotel-gold" />
                  <span className="font-medium text-hotel-charcoal">Kirtanwadi Tarf, Maharashtra 415703</span>
                </div>
                <div className="inline-flex items-center space-x-1 text-hotel-goldDark font-semibold">
                  <span>Plus Code:</span>
                  <span className="font-mono bg-hotel-beige/50 px-2 py-0.5 rounded text-[11px] text-hotel-forest">
                    {hotelInfo.plusCode.split(' ')[0]}
                  </span>
                </div>
              </div>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutData.pillars.map((pillar, idx) => {
                const IconComp = iconComponents[pillar.icon] || Sparkles;
                return (
                  <div 
                    key={idx} 
                    className="p-5 bg-white rounded-xl border border-hotel-border shadow-sm hover:border-hotel-gold/60 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-hotel-forest/10 text-hotel-forest group-hover:bg-hotel-forest group-hover:text-hotel-gold transition-colors flex items-center justify-center mb-3">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-hotel-forest mb-1.5">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-hotel-muted leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Location Quote Banner */}
            <div className="p-5 border-l-4 border-hotel-gold bg-hotel-forest text-hotel-ivory rounded-r-xl shadow-md">
              <p className="font-serif italic text-sm sm:text-base text-hotel-ivory leading-relaxed">
                "Whether you arrive tired from hours of highway travel or seek a peaceful coastal sanctuary, our doors open with authentic Maharashtrian hospitality and genuine warmth."
              </p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-[10px] uppercase tracking-widest text-hotel-gold font-sans font-semibold">
                  Management & Hospitality Desk &bull; Sai Siddhi Nivas
                </span>
                <a 
                  href={`tel:${hotelInfo.phoneRaw}`}
                  className="text-xs text-hotel-goldLight hover:underline font-semibold"
                >
                  {hotelInfo.phone}
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
