import React, { useState } from 'react';
import { poolAndSpaData } from '../data/cranganorData';
import { Waves, Sparkles, HeartPulse, ShieldCheck, Clock, Check } from 'lucide-react';

export default function PoolSpaSection() {
  const [activeTab, setActiveTab] = useState('therapies');

  return (
    <section id="spa" className="py-20 lg:py-28 bg-white text-chateau-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-chateau-terracotta text-xs font-semibold tracking-[0.25em] uppercase mb-2">
            <Waves className="w-3.5 h-3.5 text-chateau-gold" />
            <span>Wellness & Sanctuary</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-chateau-river font-normal tracking-tight">
            Pool & Ayurvedic Spa
          </h2>
          <div className="w-20 h-0.5 bg-chateau-gold mx-auto mt-4 mb-6" />
          <p className="text-chateau-muted font-light text-base sm:text-lg leading-relaxed">
            A 20-meter freshwater infinity pool kissing the river’s shoreline, a secret canopy treehouse, and a peaceful Ayurvedic spa cottage rooted in centuries of classical healing.
          </p>
        </div>

        {/* Feature Split: Pool & Treehouse */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={poolAndSpaData.pool.image}
              alt="20 meter Infinity Pool overlooking Periyar"
              className="w-full h-[400px] sm:h-[480px] object-cover"
            />
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-chateau-riverDark/90 backdrop-blur-sm text-chateau-gold text-xs tracking-wider uppercase font-semibold rounded border border-chateau-gold/30">
              20-Meter River Edge Pool
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 bg-chateau-sand rounded-2xl border border-chateau-border">
              <span className="text-xs uppercase tracking-widest text-chateau-terracotta font-semibold block mb-2">
                Water & Sky Sanctuary
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-chateau-river font-normal mb-3">
                {poolAndSpaData.pool.title}
              </h3>
              <p className="text-xs sm:text-sm text-chateau-muted font-light leading-relaxed mb-4">
                {poolAndSpaData.pool.description}
              </p>
              
              <div className="pt-4 border-t border-chateau-border/80">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-chateau-river mb-1">
                  The Ancient Jackfruit Treehouse
                </h4>
                <p className="text-xs text-chateau-muted font-light leading-relaxed">
                  {poolAndSpaData.pool.treehouse}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Spa Cottage & Treatments Section */}
        <div className="bg-chateau-sand rounded-3xl p-6 sm:p-10 lg:p-12 border border-chateau-border shadow-sm">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-chateau-terracotta font-semibold block mb-1">
              Natural Healing
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-chateau-river font-normal">
              {poolAndSpaData.spa.title}
            </h3>
            <p className="text-xs sm:text-sm text-chateau-muted mt-3 font-light leading-relaxed">
              {poolAndSpaData.spa.description}
            </p>
          </div>

          {/* Spa Tabs */}
          <div className="flex justify-center gap-3 mb-8">
            <button
              onClick={() => setActiveTab('therapies')}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all border ${
                activeTab === 'therapies'
                  ? 'bg-chateau-river text-chateau-gold border-chateau-river shadow-md'
                  : 'bg-white text-chateau-muted border-chateau-border hover:border-chateau-gold'
              }`}
            >
              Classical Therapies
            </button>
            <button
              onClick={() => setActiveTab('packages')}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all border ${
                activeTab === 'packages'
                  ? 'bg-chateau-river text-chateau-gold border-chateau-river shadow-md'
                  : 'bg-white text-chateau-muted border-chateau-border hover:border-chateau-gold'
              }`}
            >
              Curated Wellness Packages
            </button>
          </div>

          {/* Therapies Grid */}
          {activeTab === 'therapies' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {poolAndSpaData.spa.therapies.map((t, idx) => (
                <div key={idx} className="p-6 bg-white rounded-xl border border-chateau-border flex flex-col justify-between hover:border-chateau-gold/50 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-serif text-lg text-chateau-river font-semibold">
                        {t.name}
                      </h4>
                      <span className="text-[10px] text-chateau-terracotta font-semibold uppercase px-2 py-0.5 rounded bg-chateau-terracotta/10 flex items-center space-x-1 shrink-0">
                        <Clock className="w-3 h-3" />
                        <span>{t.duration}</span>
                      </span>
                    </div>
                    <p className="text-xs text-chateau-muted leading-relaxed font-light">
                      {t.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Packages Grid */}
          {activeTab === 'packages' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
              {poolAndSpaData.spa.packages.map((pkg, idx) => (
                <div key={idx} className="p-6 bg-white rounded-xl border border-chateau-border flex flex-col justify-between hover:border-chateau-gold/50 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-serif text-lg text-chateau-river font-semibold">
                        {pkg.name}
                      </h4>
                      <span className="text-[10px] text-chateau-riverDark font-semibold uppercase px-2 py-0.5 rounded bg-chateau-gold/20 flex items-center space-x-1 shrink-0">
                        <Clock className="w-3 h-3" />
                        <span>{pkg.duration}</span>
                      </span>
                    </div>
                    <p className="text-xs text-chateau-muted leading-relaxed font-light">
                      {pkg.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
