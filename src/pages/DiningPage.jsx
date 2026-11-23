import React from 'react';
import PageHero from '../components/PageHero';
import { hotelInfo, diningData } from '../data/hotelData';
import { 
  Coffee, Utensils, ShieldCheck, BellRing, Clock, 
  Sparkles, Check, MessageCircle, Phone, Heart 
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function DiningPage({ onOpenBooking }) {
  const menuCategories = [
    {
      category: "Breakfast & Morning Start",
      timing: "7:30 AM – 10:30 AM",
      desc: "Freshly prepared traditional Maharashtrian breakfast accompanied by piping hot tea and aromatic coffee.",
      items: [
        { name: "Kande Pohe", desc: "Classic Konkan-style flattened rice tempered with mustard, peanuts, fresh coriander and grated coconut." },
        { name: "Rava Upma / Sheera", desc: "Wholesome semolina preparation with mild spices, cashews, and pure ghee." },
        { name: "Misal Pav", desc: "Spicy sprouted bean curry served with fresh local pav, farsan, chopped onions, and lemon." },
        { name: "Special Masala Chai", desc: "Freshly brewed tea infused with ginger, cardamom, and aromatic lemongrass." },
        { name: "South Indian Filter Coffee", desc: "Fresh decoction coffee brewed to perfection with frothy milk." }
      ]
    },
    {
      category: "Konkan Vegetarian Thali & Lunch",
      timing: "12:30 PM – 3:30 PM",
      desc: "Nourishing, complete meal featuring home-style Konkan recipes, lentils, and soothing Sol Kadhi.",
      items: [
        { name: "Sai Siddhi Special Veg Thali", desc: "2 Seasonal Sabjis, Dal Tadka, Steamed Indrayani Rice, Hot Chapatis/Bhakri, Papad, Salad & Pickle." },
        { name: "Fresh Sol Kadhi", desc: "Digestive coastal nectar crafted from pure kokum extract, freshly pressed coconut milk, and green chilies." },
        { name: "Pithla Bhakri Combo", desc: "Traditional gram flour curry tempered with garlic and mustard, paired with rustic Jowar/Bajra Bhakri." },
        { name: "Dal Khichdi & Desi Ghee", desc: "Comforting slow-cooked rice and yellow lentils tempered with cumin, garlic, and fresh ghee." },
        { name: "Ukadiche Modak (On Request)", desc: "Steamed rice flour dumplings stuffed with fresh grated coconut and jaggery, drizzled with hot ghee." }
      ]
    },
    {
      category: "Coastal Seafood & Non-Veg Specialties",
      timing: "Lunch & Dinner (Advance Notice Encouraged)",
      desc: "Authentic coastal fish and chicken delicacies prepared with local Malvani spices and cold-pressed oils.",
      items: [
        { name: "Fresh Surmai Rawa Fry", desc: "Kingfish steaks coated in spiced semolina crust and shallow fried crisp to golden perfection." },
        { name: "Pomfret Curry (Paplet)", desc: "Tender whole pomfret simmered in mildly spiced coconut and kokum gravy." },
        { name: "Kolambi Masala (Prawns)", desc: "Succulent fresh prawns tossed with onion, tomato, and ground coastal garam masala." },
        { name: "Malvani Chicken Curry", desc: "Tender chicken simmered in rich roasted coconut and whole spice gravy, served with hot chapatis." }
      ]
    },
    {
      category: "Evening Refreshments & High Tea",
      timing: "4:30 PM – 7:00 PM",
      desc: "Ideal mid-journey snacks for travelers exploring the highway or returning from nearby beaches.",
      items: [
        { name: "Crispy Kanda Bhaji", desc: "Thinly sliced onion fritters deep fried till crunchy, served with green chutney." },
        { name: "Batata Vada", desc: "Spiced mashed potato balls coated in gram flour batter and fried hot." },
        { name: "Biscuits, Toast & Tea", desc: "Light tea accompaniments for quick refreshments." }
      ]
    }
  ];

  return (
    <div className="bg-white text-hotel-charcoal">
      {/* 1. Page Hero Banner */}
      <PageHero
        title="RESTAURANT & DINING"
        subtitle="Savor Wholesome Konkan Delicacies, Fresh Coastal Preparations, and Hearty Home-Style Comfort."
        breadcrumb="DINING"
        badge="CULINARY EXPERIENCE • FRESH LOCAL FLAVORS"
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop"
      />

      {/* 2. Concept & Culinary Philosophy */}
      <section className="py-16 sm:py-20 bg-[#faf9f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.28em] text-hotel-goldDark font-semibold block">
                AUTHENTIC GASTRONOMY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-hotel-forest font-normal uppercase leading-[1.2]">
                Wholesome Flavors from the Heart of Konkan
              </h2>
              <div className="w-16 h-[2px] bg-hotel-gold" />
              
              <p className="font-sans font-light text-base text-neutral-700 leading-relaxed">
                Food in the Konkan region is a celebration of purity, aroma, and warmth. At <strong>Sai Siddhi Nivas</strong>, our culinary approach is anchored in honest home-style preparations crafted with the finest local ingredients, fresh coconut, and fragrant kokum.
              </p>

              <p className="text-sm text-neutral-600 leading-relaxed font-light">
                Whether you prefer comforting vegetarian meals, a traditional Maharashtrian breakfast before hitting the road, or fresh seafood cooked to order, our kitchen ensures your meal is hot, hygienic, and deeply satisfying.
              </p>

              {/* 4 Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {diningData.features.map((feat, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-lg border border-neutral-200 shadow-sm space-y-1">
                    <span className="font-serif font-semibold text-sm text-hotel-forest block">
                      {feat.title}
                    </span>
                    <p className="text-xs text-neutral-600 font-light leading-relaxed">
                      {feat.desc || feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 group">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
                  alt="Delicious Konkan Cuisine and Dining"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Detailed Menu Offerings */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.28em] text-hotel-goldDark font-semibold block mb-2">
              CURATED SELECTIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-hotel-charcoal font-normal uppercase">
              Menu Highlights &amp; Specialties
            </h2>
            <div className="w-16 h-[2px] bg-hotel-gold mx-auto my-4" />
            <p className="text-xs sm:text-sm text-neutral-600 font-light">
              Prepared fresh to order with care. Advance intimations for seafood and special requests are warmly welcomed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuCategories.map((cat, idx) => (
              <div 
                key={idx}
                className="bg-[#faf9f6] rounded-xl border border-neutral-200 p-6 sm:p-8 space-y-5 hover:border-hotel-gold/60 transition-all hover:shadow-md"
              >
                <div className="border-b border-neutral-200 pb-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-serif text-xl sm:text-2xl text-hotel-forest font-semibold">
                      {cat.category}
                    </h3>
                    <span className="inline-flex items-center space-x-1 text-[11px] text-hotel-goldDark font-medium bg-white px-2.5 py-0.5 rounded border border-neutral-200">
                      <Clock className="w-3 h-3" />
                      <span>{cat.timing}</span>
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 font-light mt-1">
                    {cat.desc}
                  </p>
                </div>

                <div className="space-y-4">
                  {cat.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-start gap-4">
                      <div>
                        <span className="font-serif font-medium text-sm text-neutral-900 block">
                          {item.name}
                        </span>
                        <p className="text-xs text-neutral-500 font-light mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. In-Room Dining & Kitchen Hygiene Standards */}
      <section className="py-14 bg-[#faf9f6] border-t border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            
            <div className="p-6 bg-white rounded-lg border border-neutral-200 shadow-sm space-y-2">
              <BellRing className="w-8 h-8 text-hotel-forest mx-auto" />
              <h4 className="font-serif text-lg text-hotel-forest font-semibold">Prompt Room Delivery</h4>
              <p className="text-xs text-neutral-600 font-light">
                Enjoy hot morning tea, wholesome thalis, and snacks delivered directly to your air-conditioned room.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-neutral-200 shadow-sm space-y-2">
              <ShieldCheck className="w-8 h-8 text-hotel-goldDark mx-auto" />
              <h4 className="font-serif text-lg text-hotel-forest font-semibold">Hygienic Clean Kitchen</h4>
              <p className="text-xs text-neutral-600 font-light">
                Stringent cleanliness protocols, purified water for cooking, and fresh daily market ingredients.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-neutral-200 shadow-sm space-y-2">
              <Heart className="w-8 h-8 text-emerald-700 mx-auto" />
              <h4 className="font-serif text-lg text-hotel-forest font-semibold">Dietary Customization</h4>
              <p className="text-xs text-neutral-600 font-light">
                Special arrangements for children, elderly travelers, Jain-friendly, or low-spice food on request.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Food Order & Reservation Strip */}
      <section className="py-14 bg-hotel-forestDark text-hotel-ivory text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
            Traveling Through MSH4 &amp; Planning a Meal Stop?
          </h3>
          <p className="text-xs sm:text-sm text-hotel-ivory/80 max-w-xl mx-auto font-light">
            Contact our desk staff in advance to order fresh coastal thalis, seafood preparations, or group breakfasts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={`https://wa.me/${hotelInfo.whatsapp.replace('+', '')}?text=Hello%20Sai%20Siddhi%20Nivas,%20I%20would%20like%20to%20enquire%20about%20dining%20and%20food%20orders.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-600 text-white px-7 py-3 text-xs uppercase tracking-widest font-semibold flex items-center justify-center space-x-2 shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire via WhatsApp (+91 9764764359)</span>
            </a>
            <a
              href={`tel:${hotelInfo.phoneRaw}`}
              className="w-full sm:w-auto border border-white/30 hover:bg-white/10 text-white px-6 py-3 text-xs uppercase tracking-widest font-semibold flex items-center justify-center space-x-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-hotel-gold" />
              <span>Call Front Desk: +91 9764764359</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
