import React from 'react';
import { artsSocietyData } from '../data/cranganorData';
import { Sparkles, Moon, Award, Info } from 'lucide-react';

export default function ArtsSocietySection() {
  return (
    <section id="arts" className="py-20 lg:py-28 bg-chateau-riverDark text-chateau-sand heritage-pattern relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-chateau-gold text-xs font-semibold tracking-[0.25em] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sacred Traditions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-chateau-sand font-normal tracking-tight">
            {artsSocietyData.title}
          </h2>
          <div className="w-20 h-0.5 bg-chateau-gold mx-auto mt-4 mb-6" />
          <p className="text-chateau-sand/80 font-light text-base sm:text-lg leading-relaxed">
            {artsSocietyData.subtitle}
          </p>
          <div className="mt-4 inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-chateau-gold">
            <Info className="w-3.5 h-3.5" />
            <span>{artsSocietyData.note}</span>
          </div>
        </div>

        {/* Narrative Box */}
        <div className="max-w-4xl mx-auto mb-16 p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-chateau-gold/20 text-center">
          <p className="text-xs sm:text-sm text-chateau-sand/90 font-light leading-relaxed">
            {artsSocietyData.story}
          </p>
        </div>

        {/* Art Forms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artsSocietyData.artForms.map((art, idx) => (
            <div 
              key={idx}
              className="group bg-chateau-river/80 rounded-xl border border-chateau-gold/20 overflow-hidden hover:border-chateau-gold transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-chateau-riverDark via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[10px] uppercase tracking-widest text-chateau-gold font-semibold block">
                      {art.origin}
                    </span>
                    <h3 className="font-serif text-lg text-white font-medium">
                      {art.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs text-chateau-sand/75 font-light leading-relaxed">
                    {art.description}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 border-t border-white/5 text-[11px] text-chateau-gold flex items-center justify-between">
                <span>Twilight Performance</span>
                <Moon className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
