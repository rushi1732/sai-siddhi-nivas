import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { hotelInfo } from '../data/hotelData';
import { 
  MapPin, Compass, Navigation, Phone, Car, 
  Train, Bus, ExternalLink, Copy, Check, Clock, ShieldCheck 
} from 'lucide-react';

export default function LocationPage({ onOpenBooking }) {
  const [copiedPlusCode, setCopiedPlusCode] = useState(false);

  const handleCopyPlusCode = () => {
    navigator.clipboard.writeText(hotelInfo.plusCode);
    setCopiedPlusCode(true);
    setTimeout(() => setCopiedPlusCode(false), 2500);
  };

  const travelRoutes = [
    {
      mode: "From Mumbai (Drive: ~6.5 hrs • 290 km)",
      icon: Car,
      directions: "Take Mumbai-Goa Highway (NH66) towards Mangaon, Mahad, and Khed. From Chiplun or Guhagar junction, merge onto Maharashtra State Highway 4 (MSH4) heading towards Modka Agar & Warweli. Sai Siddhi Nivas is directly accessible along the highway corridor."
    },
    {
      mode: "From Pune (Drive: ~5.5 hrs • 240 km)",
      icon: Car,
      directions: "Drive via Pune - Satara Highway (NH48) taking the Umbraj or Karad exit through Kumbharli Ghat to Chiplun. From Chiplun, take the state highway connecting towards MSH4 and Modka Agar."
    },
    {
      mode: "From Kolhapur (Drive: ~3.5 hrs • 160 km)",
      icon: Car,
      directions: "Travel via Kolhapur - Malkapur - Anuskura Ghat or Amba Ghat descending into Konkan, connecting directly towards MSH4 coastal corridor near Warweli."
    },
    {
      mode: "By Train (Chiplun Railway Station • 45 km)",
      icon: Train,
      directions: "Chiplun is a major railway station on the Konkan Railway network with frequent express trains from Mumbai, Pune, Goa, and Kerala. Private taxis, auto-rickshaws, and state transport buses are readily available from Chiplun station to our hotel."
    },
    {
      mode: "By Bus & Local Transit (Modka Agar • 0.4 km)",
      icon: Bus,
      directions: "Regular Maharashtra State Transport (MSRTC) buses connect Guhagar, Chiplun, and coastal towns. Modka Agar bus stop is just 400 meters away with direct local transport."
    }
  ];

  return (
    <div className="bg-white text-hotel-charcoal">
      {/* 1. Page Hero Banner */}
      <PageHero
        title="LOCATION & ROUTE GUIDE"
        subtitle="Conveniently Positioned on Maharashtra State Highway 4 (MSH4) Near Modka Agar, Kirtanwadi Tarf."
        breadcrumb="LOCATION"
        badge="STRATEGIC HIGHWAY CORRIDOR • ACCESSIBILITY"
        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920&auto=format&fit=crop"
      />

      {/* 2. Key Coordinates Strip */}
      <section className="py-12 bg-[#faf9f6] border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Address */}
            <div className="flex items-start space-x-3.5">
              <div className="w-10 h-10 rounded-lg bg-hotel-forest text-hotel-gold flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-hotel-goldDark font-semibold block">Full Address</span>
                <p className="text-xs sm:text-sm font-medium text-neutral-800 leading-snug mt-0.5">
                  {hotelInfo.address}
                </p>
              </div>
            </div>

            {/* Plus Code with Copy Button */}
            <div className="flex items-start space-x-3.5">
              <div className="w-10 h-10 rounded-lg bg-hotel-forest text-hotel-gold flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] uppercase tracking-wider text-hotel-goldDark font-semibold block">Google Plus Code</span>
                <div className="flex items-center space-x-2 mt-0.5">
                  <span className="font-mono text-xs sm:text-sm font-semibold text-neutral-900 bg-white px-2 py-0.5 rounded border border-neutral-200">
                    {hotelInfo.plusCode}
                  </span>
                  <button
                    onClick={handleCopyPlusCode}
                    className="p-1 hover:text-hotel-forest transition-colors text-neutral-500"
                    title="Copy Plus Code"
                  >
                    {copiedPlusCode ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Live Navigation CTA */}
            <div className="flex justify-start md:justify-end">
              <a
                href={hotelInfo.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto bg-hotel-forest hover:bg-hotel-forestDark text-white px-6 py-3 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all shadow-md flex items-center justify-center space-x-2 text-center"
              >
                <Navigation className="w-4 h-4 text-hotel-goldLight" />
                <span>Open in Google Maps</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Interactive Map & Highway Highlights */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Embedded Google Map */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-neutral-300 shadow-xl h-[420px] bg-neutral-100">
              <iframe
                title="Sai Siddhi Nivas Exact Map Location"
                src={hotelInfo.embedMapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Strategic Value Proposition */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.24em] text-hotel-goldDark font-semibold block mb-1">
                  STRATEGIC ADVANTAGE
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-hotel-forest font-semibold">
                  Why Our Highway Position Matters
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                Positioned directly along Maharashtra State Highway 4 (MSH4), Sai Siddhi Nivas saves you from winding internal village roads when all you need is a peaceful, verified, and secure stay.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="p-3.5 bg-[#faf9f6] rounded-lg border border-neutral-200 flex items-start space-x-3">
                  <ShieldCheck className="w-4 h-4 text-hotel-forest shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-xs text-neutral-900 block">Direct Vehicle Drive-In</span>
                    <span className="text-[11px] text-neutral-600 font-light">No narrow gullies; large coaches and SUVs can drive right onto our paved parking.</span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#faf9f6] rounded-lg border border-neutral-200 flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-hotel-forest shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-xs text-neutral-900 block">24-Hour Late Night Arrival Desk</span>
                    <span className="text-[11px] text-neutral-600 font-light">Late check-in support with verified keys and staff assistance for highway voyagers.</span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#faf9f6] rounded-lg border border-neutral-200 flex items-start space-x-3">
                  <Car className="w-4 h-4 text-hotel-forest shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-xs text-neutral-900 block">Gated Ample Free Parking</span>
                    <span className="text-[11px] text-neutral-600 font-light">Guarded on-site parking premises for your vehicle's safety while you sleep peacefully.</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. How to Reach: Detailed Route Guide */}
      <section className="py-16 sm:py-24 bg-[#faf9f6] border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.28em] text-hotel-goldDark font-semibold block mb-2">
              TRAVEL ROUTES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-hotel-charcoal font-normal uppercase">
              How to Reach Sai Siddhi Nivas
            </h2>
            <div className="w-16 h-[2px] bg-hotel-gold mx-auto my-4" />
            <p className="text-xs sm:text-sm text-neutral-600 font-light">
              Clear driving directions and transit options from major Maharashtra hubs.
            </p>
          </div>

          <div className="space-y-5 max-w-4xl mx-auto">
            {travelRoutes.map((route, idx) => {
              const IconComp = route.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 bg-white rounded-xl border border-neutral-200 shadow-sm flex items-start space-x-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-hotel-ivory text-hotel-forest flex items-center justify-center shrink-0 border border-hotel-border">
                    <IconComp className="w-5 h-5 text-hotel-forest" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-serif text-base sm:text-lg text-hotel-forest font-semibold">
                      {route.mode}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                      {route.directions}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Nearby Points of Interest & Distances Table */}
      <section className="py-16 sm:py-20 bg-white border-t border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.24em] text-hotel-goldDark font-semibold block mb-1">
              VICINITY &amp; PROXIMITY
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-hotel-forest font-semibold">
              Nearby Destinations &amp; Distances
            </h3>
          </div>

          <div className="overflow-x-auto bg-[#faf9f6] rounded-xl border border-neutral-200 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-hotel-forestDark text-hotel-ivory border-b border-hotel-gold/30">
                <tr>
                  <th className="p-4 font-serif font-normal text-xs uppercase tracking-wider text-hotel-goldLight">Destination</th>
                  <th className="p-4 font-serif font-normal text-xs uppercase tracking-wider text-white">Distance</th>
                  <th className="p-4 font-serif font-normal text-xs uppercase tracking-wider text-white">Approx. Drive Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200/60">
                {hotelInfo.distances.map((dist, i) => (
                  <tr key={i} className="hover:bg-white/80 transition-colors">
                    <td className="p-4 font-medium text-neutral-900">{dist.destination}</td>
                    <td className="p-4 text-hotel-forest font-semibold">{dist.distance}</td>
                    <td className="p-4 text-neutral-600">{dist.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 6. Contact Desk Assistance Strip */}
      <section className="py-14 bg-hotel-forestDark text-hotel-ivory text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
            Lost on the Road or Need Route Guidance?
          </h3>
          <p className="text-xs sm:text-sm text-hotel-ivory/80 max-w-xl mx-auto font-light">
            Our 24-hour reception desk is always ready to guide you with live landmarks, turn-by-turn directions, and parking assistance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${hotelInfo.phoneRaw}`}
              className="w-full sm:w-auto bg-hotel-gold hover:bg-hotel-goldLight text-hotel-forestDark px-7 py-3 text-xs uppercase tracking-widest font-bold shadow-md transition-all flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Reception Desk: +91 9764764359</span>
            </a>
            <a
              href={hotelInfo.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-white/40 hover:bg-white/10 text-white px-6 py-3 text-xs uppercase tracking-widest font-semibold flex items-center justify-center space-x-2 transition-all"
            >
              <ExternalLink className="w-4 h-4 text-hotel-gold" />
              <span>Get Directions on Google Maps</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
