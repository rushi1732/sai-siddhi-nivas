import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { hotelInfo, aboutData } from '../data/hotelData';
import { 
  Sparkles, HeartHandshake, MapPin, Users, ShieldCheck, 
  Zap, Car, Coffee, Check, ArrowRight, MessageCircle, Phone, Calendar 
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage({ onOpenBooking }) {
  const pillarIcons = {
    Sparkles: Sparkles,
    HeartHandshake: HeartHandshake,
    MapPin: MapPin,
    Users: Users
  };

  const differentiators = [
    {
      title: "Direct Highway Convenience",
      desc: "Prime position on MSH4 near Modka Agar eliminates tedious detours, offering smooth drive-in access for travelers.",
      icon: MapPin
    },
    {
      title: "24/7 Continuous Power Backup",
      desc: "Dedicated power backup generator guarantees uninterrupted lighting, fans, device charging, and essential amenities.",
      icon: Zap
    },
    {
      title: "Spotless Sanitized Living",
      desc: "Rigorous daily housekeeping, fresh linen rotation, and pristine en-suite bathrooms with 24-hour hot water.",
      icon: Sparkles
    },
    {
      title: "Gated Vehicle Security",
      desc: "Expansive on-site parking accommodating private cars, SUVs, and tour coaches under continuous surveillance.",
      icon: Car
    },
    {
      title: "Authentic Home-Style Dining",
      desc: "Freshly cooked Maharashtrian breakfast, Konkan delicacies, and comforting tea served directly to your room.",
      icon: Coffee
    },
    {
      title: "Family & Pilgrim Welcoming",
      desc: "Peaceful residential neighborhood, spacious family suites, and helpful guidance for local temple darshans.",
      icon: Users
    }
  ];

  return (
    <div className="bg-white text-hotel-charcoal">
      {/* 1. Cinematic Page Hero Banner */}
      <PageHero
        title="ABOUT SAI SIDDHI NIVAS"
        subtitle="Where Authentic Konkan Warmth Meets Modern Highway Hospitality."
        breadcrumb="ABOUT US"
        badge="OUR STORY & HOSPITALITY PHILOSOPHY"
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1920&auto=format&fit=crop"
      />

      {/* 2. Main Narrative: Our Story & Values */}
      <section className="py-16 sm:py-24 bg-[#faf9f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Narrative Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.28em] text-hotel-goldDark font-semibold block">
                WELCOME TO OUR HAVEN
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-hotel-forest font-normal uppercase leading-[1.2]">
                A Peaceful Retreat along the Scenic Konkan Corridor
              </h2>
              <div className="w-16 h-[2px] bg-hotel-gold" />
              
              <p className="font-sans font-light text-base sm:text-lg text-neutral-700 leading-relaxed">
                Located conveniently along Maharashtra State Highway 4 (MSH4) near Modka Agar in Kirtanwadi Tarf, <strong>Sai Siddhi Nivas</strong> was envisioned as a tranquil sanctuary where the timeless warmth of Konkan culture meets modern accommodation standards.
              </p>

              <p className="text-sm text-neutral-600 leading-relaxed font-light">
                Whether you are exploring the breathtaking coastal landscapes of Guhagar, embarking on a pilgrimage to historic temples like Vyadeshwar and Velneshwar, or seeking a calm overnight resting place during a long highway journey, our doors open to welcome you with genuine care and quiet sophistication.
              </p>

              <p className="text-sm text-neutral-600 leading-relaxed font-light">
                We believe hospitality is not merely providing a bed for the night; it is ensuring that every traveler feels secure, deeply refreshed, and attended to with courteous attention from arrival to departure.
              </p>

              {/* Quick Highlight Badges */}
              <div className="pt-2 flex flex-wrap gap-3">
                <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-white rounded-full text-xs text-hotel-forest font-medium border border-hotel-border shadow-sm">
                  <Check className="w-3.5 h-3.5 text-hotel-gold" />
                  <span>Verified Konkan Hospitality</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-white rounded-full text-xs text-hotel-forest font-medium border border-hotel-border shadow-sm">
                  <Check className="w-3.5 h-3.5 text-hotel-gold" />
                  <span>24/7 Reception Desk</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-white rounded-full text-xs text-hotel-forest font-medium border border-hotel-border shadow-sm">
                  <Check className="w-3.5 h-3.5 text-hotel-gold" />
                  <span>Spotless Sanitized Stays</span>
                </span>
              </div>
            </div>

            {/* Right Atmospheric Image Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 group">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop"
                  alt="Sai Siddhi Nivas Warm Reception & Architecture"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-hotel-goldLight block mb-1 font-semibold">
                    KIRTANWADI TARF &bull; MSH4
                  </span>
                  <p className="font-serif text-lg font-light leading-snug">
                    "A sanctuary designed for restful stopovers, peaceful family stays, and refreshing coastal journeys."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. The 4 Core Pillars of Sai Siddhi Nivas */}
      <section className="py-16 sm:py-24 bg-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
            <span className="text-xs uppercase tracking-[0.28em] text-hotel-goldDark font-semibold block mb-2">
              FOUNDATIONAL COMMITMENT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-hotel-charcoal font-normal uppercase tracking-wide">
              The Four Pillars of Our Hospitality
            </h2>
            <div className="w-16 h-[2px] bg-hotel-gold mx-auto my-4" />
            <p className="font-sans font-light text-sm sm:text-base text-neutral-600">
              Every detail at Sai Siddhi Nivas is guided by four uncompromising standards to guarantee complete guest satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutData.pillars.map((pillar, idx) => {
              const IconComp = pillarIcons[pillar.icon] || Sparkles;
              return (
                <div 
                  key={idx}
                  className="p-8 bg-[#faf9f6] rounded-xl border border-neutral-200 hover:border-hotel-gold/60 transition-all hover:shadow-lg group flex items-start space-x-5"
                >
                  <div className="w-12 h-12 rounded-xl bg-hotel-forestDark text-hotel-gold flex items-center justify-center shrink-0 group-hover:bg-hotel-forest transition-colors shadow">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl text-hotel-forest font-semibold">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Host Philosophy & Management Message */}
      <section className="py-16 sm:py-20 bg-hotel-forestDark text-hotel-ivory relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="w-12 h-12 rounded-full border border-hotel-gold/50 flex items-center justify-center mx-auto text-hotel-goldLight">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <span className="text-[11px] uppercase tracking-[0.3em] text-hotel-gold font-semibold block">
            OUR PHILOSOPHY & PROMISE
          </span>
          <h3 className="font-serif text-2xl sm:text-4xl font-normal text-white leading-snug">
            "Atithi Devo Bhava: Welcoming Every Guest with Dignity, Care, and Genuine Heart"
          </h3>
          <p className="text-xs sm:text-sm text-hotel-ivory/85 font-light leading-relaxed max-w-2xl mx-auto">
            "Whether you arrive tired from hours of highway journey or seek a peaceful coastal sanctuary, our doors open with authentic Maharashtrian hospitality, delicious dining, and wholesome care. We look forward to hosting you and your loved ones."
          </p>
          <div className="pt-2">
            <span className="text-xs font-semibold text-white tracking-wider block">
              MANAGEMENT & HOSPITALITY DESK
            </span>
            <span className="text-[11px] text-hotel-goldLight block">
              Sai Siddhi Nivas &bull; Kirtanwadi Tarf, Maharashtra
            </span>
          </div>
        </div>
      </section>

      {/* 5. Key Differentiators Grid: Why Choose Us */}
      <section className="py-16 sm:py-24 bg-[#faf9f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.28em] text-hotel-goldDark font-semibold block mb-2">
              DISTINCTIVE ADVANTAGES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-hotel-charcoal font-normal uppercase">
              Why Travelers Prefer Sai Siddhi Nivas
            </h2>
            <div className="w-16 h-[2px] bg-hotel-gold mx-auto my-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((diff, idx) => {
              const IconComp = diff.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 bg-white rounded-lg border border-neutral-200/90 shadow-sm hover:shadow-md transition-shadow space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-hotel-ivory text-hotel-forest flex items-center justify-center border border-hotel-border">
                    <IconComp className="w-5 h-5 text-hotel-forest" />
                  </div>
                  <h4 className="font-serif text-lg text-hotel-forest font-semibold">
                    {diff.title}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed font-light">
                    {diff.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. Call to Action Strip */}
      <section className="py-14 bg-white border-t border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="font-serif text-2xl sm:text-3xl text-hotel-forest font-normal">
            Ready to Experience Sai Siddhi Nivas?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto font-light">
            Book your room directly for guaranteed best tariffs, prompt WhatsApp confirmation, and personalized attention.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto bg-hotel-forest hover:bg-hotel-forestDark text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4 text-hotel-goldLight" />
              <span>RESERVE YOUR STAY NOW</span>
            </button>
            <Link
              to="/accommodation"
              className="w-full sm:w-auto border border-neutral-300 hover:border-hotel-forest px-6 py-3.5 text-xs uppercase tracking-[0.16em] font-semibold text-neutral-700 hover:text-hotel-forest transition-colors flex items-center justify-center space-x-2"
            >
              <span>VIEW ROOMS & TARIFFS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
