import React from 'react';
import { guestReviews, resortInfo } from '../data/cranganorData';
import { Star, Award, Quote, CheckCircle } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section className="py-20 lg:py-28 bg-chateau-riverDark text-chateau-sand heritage-pattern relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-chateau-gold/20 text-chateau-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>TripAdvisor Travelers' Choice &bull; {resortInfo.ratings.tripadvisor} Stars ({resortInfo.ratings.reviewsCount} Reviews)</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-chateau-sand font-normal tracking-tight">
            What Our Guests Cherish
          </h2>
          <div className="w-20 h-0.5 bg-chateau-gold mx-auto mt-4 mb-6" />
          <p className="text-chateau-sand/80 font-light text-base sm:text-lg leading-relaxed">
            Unfiltered reflections from international voyagers and Indian travelers who have experienced the tranquil soul of our riverside sanctuary.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guestReviews.map((rev, idx) => (
            <div 
              key={idx}
              className="bg-chateau-river/80 backdrop-blur-sm p-8 rounded-2xl border border-chateau-gold/20 flex flex-col justify-between hover:border-chateau-gold/60 transition-colors shadow-lg"
            >
              <div>
                <div className="flex items-center space-x-1 text-chateau-gold mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-chateau-gold" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-chateau-gold/30 mb-3" />
                <p className="font-serif italic text-chateau-sand/95 text-base sm:text-lg leading-relaxed mb-6">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-sans font-semibold text-sm text-white">{rev.author}</h4>
                  <span className="text-xs text-chateau-gold">{rev.country}</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 border border-white/10 text-chateau-sand/70">
                  {rev.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
