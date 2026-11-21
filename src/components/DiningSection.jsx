import React, { useState } from 'react';
import { diningData } from '../data/cranganorData';
import { Utensils, Coffee, Fish, Leaf, Clock, Sparkles } from 'lucide-react';

export default function DiningSection() {
  const [activeTab, setActiveTab] = useState('breakfast');

  return (
    <section id="dining" className="py-20 lg:py-28 bg-chateau-sand text-chateau-charcoal parchment-pattern relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-chateau-terracotta text-xs font-semibold tracking-[0.25em] uppercase mb-2">
            <Utensils className="w-3.5 h-3.5 text-chateau-gold" />
            <span>Culinary Heritage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-chateau-river font-normal tracking-tight">
            The History Café & Riverside Dining
          </h2>
          <div className="w-20 h-0.5 bg-chateau-gold mx-auto mt-4 mb-6" />
          <p className="text-chateau-muted font-light text-base sm:text-lg leading-relaxed">
            {diningData.description}
          </p>
        </div>

        {/* Feature Grid / Banner */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-16 bg-chateau-riverDark text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 h-[340px] sm:h-[420px] relative">
              <img
                src="https://static.wixstatic.com/media/0840ea_f8f58e8a2aeb4649877ad82fb55c3a51~mv2.jpg/v1/fill/w_900,h_650,al_c,q_80/04.jpg"
                alt="History Cafe Riverside Dining Verandah"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-chateau-riverDark/90 hidden lg:block" />
            </div>

            <div className="lg:col-span-5 p-6 sm:p-10 space-y-4">
              <span className="text-xs uppercase tracking-widest text-chateau-gold font-semibold block">
                {diningData.concept}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-chateau-sand font-normal leading-snug">
                Made-From-Scratch Slow Food Kitchen
              </h3>
              <p className="text-xs sm:text-sm text-chateau-sand/80 font-light leading-relaxed">
                We believe in authentic flavours cooked fresh to order with cold-pressed coconut oil, hand-ground spices from our estate, and the morning's freshest river catch. 
              </p>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center space-x-3 text-xs text-chateau-sand/90">
                <Clock className="w-4 h-4 text-chateau-gold shrink-0" />
                <span>We serve made-from-scratch meals. Kindly allow our chef team 2 hours to curate your lunch & dinner orders.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dining Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('breakfast')}
            className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all flex items-center space-x-2 border ${
              activeTab === 'breakfast'
                ? 'bg-chateau-river text-chateau-gold border-chateau-river shadow-md'
                : 'bg-white text-chateau-muted border-chateau-border hover:border-chateau-gold'
            }`}
          >
            <Coffee className="w-3.5 h-3.5" />
            <span>Breakfast is on Us</span>
          </button>
          <button
            onClick={() => setActiveTab('catch')}
            className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all flex items-center space-x-2 border ${
              activeTab === 'catch'
                ? 'bg-chateau-river text-chateau-gold border-chateau-river shadow-md'
                : 'bg-white text-chateau-muted border-chateau-border hover:border-chateau-gold'
            }`}
          >
            <Fish className="w-3.5 h-3.5" />
            <span>Estuary Catch of the Day</span>
          </button>
          <button
            onClick={() => setActiveTab('orchard')}
            className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all flex items-center space-x-2 border ${
              activeTab === 'orchard'
                ? 'bg-chateau-river text-chateau-gold border-chateau-river shadow-md'
                : 'bg-white text-chateau-muted border-chateau-border hover:border-chateau-gold'
            }`}
          >
            <Leaf className="w-3.5 h-3.5" />
            <span>Garden Yard Flora Tour</span>
          </button>
        </div>

        {/* Tab 1: Breakfast is on Us */}
        {activeTab === 'breakfast' && (
          <div className="animate-fade-in bg-white rounded-2xl p-6 sm:p-10 border border-chateau-border shadow-sm">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <span className="text-[11px] uppercase tracking-widest text-chateau-terracotta font-semibold block mb-1">
                Complimentary for all Resident Guests
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-chateau-river font-normal">
                {diningData.breakfastTitle}
              </h3>
              <p className="text-xs sm:text-sm text-chateau-muted mt-2 font-light">
                {diningData.breakfastDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {diningData.breakfastItems.map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-chateau-sand/60 border border-chateau-border hover:border-chateau-gold/50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-chateau-gold/15 text-chateau-terracotta flex items-center justify-center font-serif font-bold text-sm mb-3">
                    {idx + 1}
                  </div>
                  <h4 className="font-serif text-lg text-chateau-river font-semibold mb-2">
                    {item.name}
                  </h4>
                  <p className="text-xs text-chateau-muted leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Estuary Catch of the Day */}
        {activeTab === 'catch' && (
          <div className="animate-fade-in bg-white rounded-2xl p-6 sm:p-10 border border-chateau-border shadow-sm">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <span className="text-[11px] uppercase tracking-widest text-chateau-terracotta font-semibold block mb-1">
                From River Estuary to Skillet
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-chateau-river font-normal">
                Periyar Estuary Specialties
              </h3>
              <p className="text-xs sm:text-sm text-chateau-muted mt-2 font-light">
                Where river currents kiss sea tides, providing exceptional Pearl Spot (Karimeen), freshwater tiger prawns, red snapper, and sweet oysters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {diningData.freshCatches.map((item, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-chateau-sand/60 border border-chateau-border flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-serif text-xl text-chateau-river font-semibold">
                        {item.name}
                      </h4>
                      <span className="text-[11px] tracking-wider uppercase px-2.5 py-1 rounded bg-chateau-gold/20 text-chateau-riverDark font-semibold">
                        Signature
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-chateau-muted leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Garden Yard Tour */}
        {activeTab === 'orchard' && (
          <div className="animate-fade-in bg-white rounded-2xl p-6 sm:p-10 border border-chateau-border shadow-sm">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <span className="text-[11px] uppercase tracking-widest text-chateau-terracotta font-semibold block mb-1">
                Estate Botanical Heritage
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-chateau-river font-normal">
                {diningData.orchardTour.title}
              </h3>
              <p className="text-xs sm:text-sm text-chateau-muted mt-2 font-light">
                {diningData.orchardTour.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {diningData.orchardTour.trees.map((tree, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-chateau-sand/60 border border-chateau-border hover:border-chateau-gold/50 transition-colors">
                  <div className="flex items-center space-x-2 text-chateau-terracotta mb-2">
                    <Leaf className="w-4 h-4 text-emerald-700" />
                    <h4 className="font-serif text-base text-chateau-river font-semibold">
                      {tree.name}
                    </h4>
                  </div>
                  <p className="text-xs text-chateau-muted leading-relaxed font-light">
                    {tree.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
