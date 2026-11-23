import React from 'react';
import PageHero from '../components/PageHero';
import { hotelInfo, hotelAmenities } from '../data/hotelData';
import { 
  Car, Wifi, Utensils, Snowflake, BellRing, Flame, 
  Users, Zap, ShieldCheck, Sparkles, Compass, CheckCircle, 
  Sun, MapPin, Calendar, MessageCircle, Phone, ArrowRight 
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ExperiencesPage({ onOpenBooking }) {
  const amenityIconMap = {
    Car: Car,
    Wifi: Wifi,
    Utensils: Utensils,
    Snowflake: Snowflake,
    BellRing: BellRing,
    Flame: Flame,
    Users: Users,
    Zap: Zap,
    ShieldCheck: ShieldCheck,
    Sparkles: Sparkles,
    Compass: Compass,
    CheckCircle: CheckCircle
  };

  const localExperiences = [
    {
      title: "Sacred Temple Trail",
      category: "Spiritual Pilgrimage",
      distance: "15 – 30 mins drive",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",
      desc: "Immerse in centuries of Konkan spiritual sanctity. Visit the historic Shri Vyadeshwar Temple in Guhagar, the serene seaside Shri Velneshwar Shiva Temple, and the revered Hedvi Dashabhuja Ganesh Mandir."
    },
    {
      title: "Guhagar & Velneshwar Beaches",
      category: "Coastal Escapes",
      distance: "20 – 35 mins drive",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      desc: "Explore expansive white-sand coastal shorelines, swaying suru coconut groves, and crystal sea waters. Experience peaceful evening walks, coastal boat rides, and magnificent sunsets over the Arabian Sea."
    },
    {
      title: "Scenic MSH4 Highway Corridor",
      category: "Roadtrip Wonder",
      distance: "Direct Highway Access",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
      desc: "Drive through Maharashtra State Highway 4, one of the most picturesque scenic coastal corridors in western India, meandering past lush Western Ghat foothills, river estuaries, and rustic Konkan hamlets."
    },
    {
      title: "Konkan Village Charm & Orchards",
      category: "Rural Tranquility",
      distance: "At Our Doorstep",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      desc: "Wake up to birdsong, cool morning breezes, and verdant betel-nut (supari) and alphonso mango orchards. Enjoy unpolluted air, tranquil village silence, and star-studded evening night skies."
    }
  ];

  const suggestedItineraries = [
    {
      day: "Option 1: The Spiritual & Coastal 1-Day Circuit",
      plan: [
        "8:00 AM – Hot traditional breakfast and masala chai at Sai Siddhi Nivas.",
        "9:00 AM – Drive along scenic MSH4 to Shri Vyadeshwar Temple, Guhagar.",
        "11:30 AM – Leisure walk along the pristine Guhagar White Sand Beach.",
        "1:30 PM – Return for fresh home-cooked Konkan vegetarian or seafood lunch.",
        "4:00 PM – Visit seaside Velneshwar Shiva Temple & Hedvi Bamanghal gorge.",
        "7:30 PM – Evening hot tea and restful overnight sleep in our AC suite."
      ]
    },
    {
      day: "Option 2: Highway Stopover & Coastal Relaxation",
      plan: [
        "Day 1 Evening – Smooth check-in from MSH4, secure parking, fresh room service.",
        "Day 2 Morning – Energizing breakfast, local village walk, travel tips from front desk.",
        "Day 2 Afternoon – Refreshing drive towards Chiplun or onward coastal journey."
      ]
    }
  ];

  return (
    <div className="bg-white text-hotel-charcoal">
      {/* 1. Page Hero Banner */}
      <PageHero
        title="EXPERIENCES & AMENITIES"
        subtitle="Discover Ancient Coastal Temples, Untouched Shorelines, and Thoughtful Modern Resort Amenities."
        breadcrumb="EXPERIENCES"
        badge="EXPLORE KONKAN • RESORT COMFORTS"
        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920&auto=format&fit=crop"
      />

      {/* 2. Curated Konkan Experiences */}
      <section className="py-16 sm:py-24 bg-[#faf9f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.28em] text-hotel-goldDark font-semibold block mb-2">
              LOCAL DISCOVERIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-hotel-forest font-normal uppercase">
              The Wonders of Coastal Konkan
            </h2>
            <div className="w-16 h-[2px] bg-hotel-gold mx-auto my-4" />
            <p className="text-xs sm:text-sm text-neutral-600 font-light max-w-2xl mx-auto">
              Sai Siddhi Nivas serves as the ideal launchpad to uncover the cultural richness, spiritual sanctuaries, and natural marvels of Kirtanwadi Tarf and Guhagar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {localExperiences.map((exp, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl overflow-hidden border border-neutral-200/90 shadow-md hover:shadow-xl transition-all group flex flex-col"
              >
                <div className="relative h-60 sm:h-64 overflow-hidden bg-hotel-forestDark">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-hotel-forestDark/90 backdrop-blur-sm text-hotel-goldLight text-[10px] sm:text-xs uppercase tracking-wider font-semibold rounded border border-hotel-gold/30">
                    {exp.category}
                  </div>
                  <div className="absolute bottom-3 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-[11px] rounded">
                    {exp.distance}
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-hotel-forest font-semibold mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                      {exp.desc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-xs text-hotel-goldDark font-semibold">
                    <span>Ask Our Front Desk For Directions</span>
                    <span className="text-hotel-forest">&rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Comprehensive On-Site Hotel Amenities (All 12 Items) */}
      <section className="py-16 sm:py-24 bg-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.28em] text-hotel-goldDark font-semibold block mb-2">
              ON-SITE CONVENIENCES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-hotel-charcoal font-normal uppercase">
              Thoughtfully Curated Hotel Amenities
            </h2>
            <div className="w-16 h-[2px] bg-hotel-gold mx-auto my-4" />
            <p className="text-xs sm:text-sm text-neutral-600 font-light">
              Every on-site facility is spotlessly maintained and staffed 24 hours a day to cater to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotelAmenities.map((amenity) => {
              const IconComp = amenityIconMap[amenity.icon] || Sparkles;
              return (
                <div
                  key={amenity.id}
                  className="p-6 bg-[#faf9f6] rounded-xl border border-neutral-200 hover:border-hotel-gold/60 transition-all hover:shadow-md space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-lg bg-hotel-forestDark text-hotel-gold flex items-center justify-center shadow-sm">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-hotel-goldDark font-semibold bg-white px-2.5 py-0.5 rounded border border-neutral-200">
                      {amenity.category}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg text-hotel-forest font-semibold">
                    {amenity.title}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed font-light">
                    {amenity.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Suggested Day Itineraries */}
      <section className="py-16 bg-[#faf9f6] border-t border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.28em] text-hotel-goldDark font-semibold block mb-1">
              TRIP PLANNING
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-hotel-forest font-semibold">
              Curated Travel Itineraries
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {suggestedItineraries.map((itinerary, idx) => (
              <div key={idx} className="p-6 sm:p-8 bg-white rounded-xl border border-neutral-200 shadow-sm space-y-4">
                <h4 className="font-serif text-lg font-semibold text-hotel-forest border-b border-neutral-200 pb-3">
                  {itinerary.day}
                </h4>
                <ul className="space-y-2.5 text-xs text-neutral-600 font-light">
                  {itinerary.plan.map((step, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-hotel-gold font-bold">&bull;</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Booking & Concierge CTA */}
      <section className="py-14 bg-hotel-forestDark text-hotel-ivory text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
            Plan Your Konkan Journey with Sai Siddhi Nivas
          </h3>
          <p className="text-xs sm:text-sm text-hotel-ivory/80 max-w-xl mx-auto font-light">
            Book your stay directly with us for comfortable air-conditioned rooms, free parking, and local sightseeing tips.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto bg-hotel-gold hover:bg-hotel-goldLight text-hotel-forestDark px-7 py-3 text-xs uppercase tracking-widest font-bold shadow-md transition-all"
            >
              Book Your Room Now
            </button>
            <a
              href={`https://wa.me/${hotelInfo.whatsapp.replace('+', '')}?text=Hello%20Sai%20Siddhi%20Nivas,%20I%20would%20like%20to%20plan%20my%20stay%20and%20ask%20about%20local%20sightseeing.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-white/40 hover:bg-white/10 text-white px-6 py-3 text-xs uppercase tracking-widest font-semibold flex items-center justify-center space-x-2 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Ask Concierge on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
