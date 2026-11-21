import React, { useState } from 'react';
import { activitiesData } from '../data/cranganorData';
import { Compass, Clock, MapPin, ChevronRight, Waves } from 'lucide-react';

export default function ExperiencesSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <section id="activities" className="py-20 lg:py-28 bg-white text-chateau-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-chateau-terracotta text-xs font-semibold tracking-[0.25em] uppercase mb-2">
            <Compass className="w-3.5 h-3.5 text-chateau-gold" />
            <span>Muziris Trails & Expeditions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-chateau-river font-normal tracking-tight">
            Curated Village & Heritage Trails
          </h2>
          <div className="w-20 h-0.5 bg-chateau-gold mx-auto mt-4 mb-6" />
          <p className="text-chateau-muted font-light text-base sm:text-lg leading-relaxed">
            History, river life, wetlands, architecture, sacred sanctuaries, traditional handloom weaving, and timeless Kerala villages — experienced directly from our private jetty and doorstep.
          </p>
        </div>

        {/* Trail Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activitiesData.map((act) => (
            <div 
              key={act.id}
              className="group bg-chateau-sand rounded-xl border border-chateau-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-chateau-river/85 backdrop-blur-sm text-chateau-sand text-[10px] tracking-widest uppercase font-semibold rounded border border-chateau-gold/30">
                    Trail {act.id}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/70 backdrop-blur-sm text-white text-[10px] tracking-wider font-light rounded flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-chateau-gold" />
                    <span>{act.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-[11px] uppercase tracking-wider text-chateau-terracotta font-semibold block mb-1">
                    {act.tag}
                  </span>
                  <h3 className="font-serif text-xl text-chateau-river font-semibold mb-3 group-hover:text-chateau-terracotta transition-colors">
                    {act.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-chateau-muted leading-relaxed font-light line-clamp-4">
                    {act.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-chateau-border/50 flex items-center justify-between text-xs font-semibold text-chateau-river">
                <span>Guided Excursion</span>
                <span className="text-chateau-terracotta group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* River Boat Quote Strip */}
        <div className="mt-16 p-8 rounded-2xl bg-chateau-river text-chateau-sand border border-chateau-gold/30 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="text-[11px] uppercase tracking-widest text-chateau-gold block font-semibold mb-2">
              Private River Departure
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light mb-3">
              Step from our lawns onto a traditional country boat (Vanji)
            </h3>
            <p className="text-xs sm:text-sm text-chateau-sand/80 font-light leading-relaxed mb-4">
              Cruise peacefully through palm-fringed backwater channels, watch Chinese fishing nets in motion, and cross over to historic weavers' villages — all at a serene, unhurried pace.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
