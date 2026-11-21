import React from 'react';
import { storyData, resortInfo } from '../data/cranganorData';
import { Heart, Compass, ShieldCheck, Sparkles, MapPin, Feather } from 'lucide-react';

export default function OurStory() {
  return (
    <section id="story" className="py-20 lg:py-28 bg-chateau-sand text-chateau-charcoal parchment-pattern relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-chateau-terracotta text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            <Feather className="w-3.5 h-3.5 text-chateau-gold" />
            <span>Our Origins & Purpose</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-chateau-river font-normal tracking-tight leading-tight">
            {storyData.title}
          </h2>
          <div className="w-20 h-0.5 bg-chateau-gold mx-auto mt-4 mb-6" />
          <p className="text-chateau-muted font-light text-base sm:text-lg leading-relaxed">
            {storyData.lead}
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Storytelling Frame */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img
                src="https://static.wixstatic.com/media/c89e60_efc8e0cf9d4544ca90ae71c4e67c3d32~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_800,h_950,al_c,q_85/c89e60_efc8e0cf9d4544ca90ae71c4e67c3d32~mv2_d_6000_4000_s_4_2.jpg"
                alt="Cranganor Riverside Chateau Estate"
                className="w-full h-[450px] object-cover"
              />
              <div className="p-5 bg-chateau-river text-chateau-sand">
                <span className="text-[11px] uppercase tracking-widest text-chateau-gold block font-semibold mb-1">
                  Historical Soil & Ancient Port
                </span>
                <p className="font-serif text-sm italic text-chateau-sand/90">
                  "Once the revered riverside retreat of Shangoonny Menon, Diwan Peshkar of Travancore, looking over the sacred island of Dharma Thuruth."
                </p>
              </div>
            </div>

            {/* Pillar Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/80 rounded-lg border border-chateau-border shadow-sm flex items-start space-x-3">
                <Heart className="w-5 h-5 text-chateau-terracotta mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-chateau-river">Majority-Woman Crew</h4>
                  <p className="text-[11px] text-chateau-muted leading-tight mt-1">Warmth, gentle grace, and obsessive eye for detail.</p>
                </div>
              </div>
              <div className="p-4 bg-white/80 rounded-lg border border-chateau-border shadow-sm flex items-start space-x-3">
                <Compass className="w-5 h-5 text-chateau-gold mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-chateau-river">Muziris Heritage</h4>
                  <p className="text-[11px] text-chateau-muted leading-tight mt-1">Gateway for Roman, Greek, Chinese & Arab traders.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: In-depth Story */}
          <div className="lg:col-span-7 space-y-6 text-chateau-charcoal/90">
            
            {/* Founders background */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-chateau-border shadow-sm relative">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 w-16 h-16 bg-chateau-gold/10 rounded-full blur-xl" />
              <h3 className="font-serif text-2xl text-chateau-river font-normal mb-3">
                Curated by Rasmi & Vineeth
              </h3>
              <p className="text-sm leading-relaxed text-chateau-muted mb-4 font-light">
                {storyData.founders}
              </p>
              <div className="pt-4 border-t border-chateau-border/60 flex items-center justify-between text-xs text-chateau-muted">
                <span>Founders: Rasmi Poduval & Vineeth Viswambharan</span>
                <span className="italic text-chateau-terracotta font-serif text-sm">Est. 2017</span>
              </div>
            </div>

            {/* Chendamangalam & Childhood Roots */}
            <div className="p-6 bg-chateau-sandDark/40 rounded-xl border border-chateau-border">
              <h4 className="font-serif text-lg text-chateau-river font-semibold mb-2">
                Threads of Tradition & Childhood Memories
              </h4>
              <p className="text-xs sm:text-sm text-chateau-muted font-light leading-relaxed mb-3">
                {storyData.heritageStory}
              </p>
              <p className="text-xs sm:text-sm text-chateau-muted font-light leading-relaxed">
                {storyData.historyContext}
              </p>
            </div>

            {/* Ancient Poem Callout */}
            <div className="p-5 border-l-2 border-chateau-gold bg-chateau-river text-chateau-sand rounded-r-lg">
              <p className="font-serif italic text-sm sm:text-base text-chateau-sand/95 leading-relaxed">
                "The elegant vessels of the Yavanas [Westerners] gracing the Periyar, their passage marked by white foam, bearing treasures of gold and returning with the prized black pepper."
              </p>
              <span className="block text-[11px] uppercase tracking-widest text-chateau-gold font-sans font-medium mt-2">
                — 2,000-Year-Old Tamil Sangam Anthology (Akananuru)
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
