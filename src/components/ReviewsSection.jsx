import React from 'react';
import { reviewSectionData, hotelInfo } from '../data/hotelData';
import { 
  Star, Award, Quote, CheckCircle2, MessageSquarePlus, 
  ExternalLink, Sparkles, Info 
} from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-hotel-forestDark text-hotel-ivory heritage-pattern relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-hotel-gold/20 text-hotel-goldLight text-xs font-semibold tracking-[0.2em] uppercase mb-4 border border-hotel-gold/30">
            <Award className="w-3.5 h-3.5 text-hotel-gold" />
            <span>Guest Experience & Transparency</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal tracking-tight">
            Guest Experiences & Verified Reviews
          </h2>
          <div className="w-20 h-0.5 bg-hotel-gold mx-auto mt-4 mb-6" />
          <p className="text-hotel-ivory/80 font-light text-base sm:text-lg leading-relaxed">
            Honest reflections from travelers and families who have stayed with us at Sai Siddhi Nivas.
          </p>
        </div>

        {/* Transparent Guest Policy Notice (as required by prompt) */}
        <div className="max-w-4xl mx-auto mb-12 p-4 rounded-xl bg-white/5 border border-hotel-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-hotel-ivory/90">
          <div className="flex items-start space-x-3">
            <Info className="w-4 h-4 text-hotel-gold shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Transparent Guest Reviews:</strong> {reviewSectionData.notice}
            </p>
          </div>
          <a
            href={reviewSectionData.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 rounded-lg bg-hotel-gold hover:bg-hotel-goldHover text-hotel-forestDark font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 transition-colors shadow-md"
          >
            <MessageSquarePlus className="w-3.5 h-3.5" />
            <span>Write a Review</span>
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewSectionData.reviews.map((rev) => (
            <div 
              key={rev.id}
              className="bg-hotel-forest/80 backdrop-blur-md p-8 rounded-2xl border border-hotel-gold/20 flex flex-col justify-between hover:border-hotel-gold/60 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* 5-Star Rating Row */}
                <div className="flex items-center space-x-1 text-hotel-gold mb-5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-hotel-gold text-hotel-gold" />
                  ))}
                  <span className="ml-2 text-xs text-hotel-ivory/80 font-medium">5.0 / 5.0</span>
                </div>

                <Quote className="w-8 h-8 text-hotel-gold/30 mb-3" />
                
                <p className="font-serif italic text-white text-base leading-relaxed mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-sans font-semibold text-sm text-white">
                    {rev.name}
                  </h4>
                  <span className="text-xs text-hotel-goldLight">
                    {rev.location} &bull; {rev.stayType}
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-semibold flex items-center space-x-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{rev.badge}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
