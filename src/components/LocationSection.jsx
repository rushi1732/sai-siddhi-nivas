import React from 'react';
import { resortInfo } from '../data/cranganorData';
import { MapPin, Navigation, Plane, Compass, Train, Sun, Clock, Phone, Mail } from 'lucide-react';

export default function LocationSection() {
  const iconMap = {
    Plane: Plane,
    Compass: Compass,
    Train: Train,
    Sun: Sun,
    MapPin: MapPin
  };

  return (
    <section id="location" className="py-20 lg:py-28 bg-white text-chateau-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-chateau-terracotta text-xs font-semibold tracking-[0.25em] uppercase mb-2">
            <MapPin className="w-3.5 h-3.5 text-chateau-gold" />
            <span>Finding Your Way</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-chateau-river font-normal tracking-tight">
            Where Rivers Meet Roads
          </h2>
          <div className="w-20 h-0.5 bg-chateau-gold mx-auto mt-4 mb-6" />
          <p className="text-chateau-muted font-light text-base sm:text-lg leading-relaxed">
            Nestled in Kerala's serene embrace along the banks of River Periyar, yet effortlessly connected: just 30 minutes from Cochin International Airport (COK).
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Box */}
            <div className="p-6 sm:p-8 bg-chateau-sand rounded-2xl border border-chateau-border">
              <span className="text-[11px] uppercase tracking-widest text-chateau-terracotta font-semibold block mb-2">
                Official Sanctuary Address
              </span>
              <h3 className="font-serif text-2xl text-chateau-river font-normal mb-3">
                Cranganor Château
              </h3>
              <p className="text-sm text-chateau-muted font-light leading-relaxed mb-6">
                {resortInfo.location}
              </p>
              
              <div className="space-y-3 pt-4 border-t border-chateau-border/80 text-xs">
                <a 
                  href={`tel:${resortInfo.phone}`}
                  className="flex items-center space-x-3 text-chateau-charcoal hover:text-chateau-terracotta transition-colors"
                >
                  <Phone className="w-4 h-4 text-chateau-gold shrink-0" />
                  <span>{resortInfo.phone}</span>
                </a>
                <a 
                  href={`mailto:${resortInfo.email}`}
                  className="flex items-center space-x-3 text-chateau-charcoal hover:text-chateau-terracotta transition-colors"
                >
                  <Mail className="w-4 h-4 text-chateau-gold shrink-0" />
                  <span>{resortInfo.email}</span>
                </a>
              </div>

              <div className="mt-6">
                <a
                  href="https://maps.google.com/?q=Cranganor+History+Cafe+and+Riverside+Chateau+Puthenvelikkara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-lg bg-chateau-river hover:bg-chateau-riverDark text-chateau-gold text-xs uppercase tracking-widest font-semibold transition-all shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Travel Mode Cards */}
            <div className="p-6 bg-white rounded-2xl border border-chateau-border shadow-sm space-y-4">
              <h4 className="font-serif text-lg text-chateau-river font-semibold">
                Arrival Options
              </h4>
              <div className="text-xs text-chateau-muted space-y-3 font-light leading-relaxed">
                <p>
                  <strong className="font-medium text-chateau-charcoal">By Air:</strong> Cochin International Airport (COK) is 20 km away. Private chauffeured transfers can be arranged seamlessly by our concierge.
                </p>
                <p>
                  <strong className="font-medium text-chateau-charcoal">By Rail:</strong> Aluva Railway Station (18 km) and Angamaly Station (15 km) connect directly with major trains across South India.
                </p>
                <p>
                  <strong className="font-medium text-chateau-charcoal">By Road:</strong> Smooth highway access from Kochi, North Paravur, and Thrissur with secure on-site parking.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Distance Cards & Interactive Map View */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Distances List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {resortInfo.distances.map((d, idx) => {
                const IconComponent = iconMap[d.icon] || MapPin;
                return (
                  <div key={idx} className="p-4 bg-chateau-sand/70 rounded-xl border border-chateau-border flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-full bg-chateau-river text-chateau-gold flex items-center justify-center shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-chateau-river">{d.destination}</h4>
                        <span className="text-[11px] text-chateau-muted">{d.time}</span>
                      </div>
                    </div>
                    <span className="text-xs font-serif font-bold text-chateau-terracotta">{d.distance}</span>
                  </div>
                );
              })}
            </div>

            {/* Google Map Embed / Satellite Framing */}
            <div className="rounded-2xl overflow-hidden border border-chateau-border shadow-lg relative h-[360px] sm:h-[420px] bg-slate-100">
              <iframe
                title="Cranganor Chateau Map"
                src="https://maps.google.com/maps?q=Cranganor%20History%20Cafe%20and%20Riverside%20Chateau,%20Malavana,%20Puthenvelikkara,%20Kerala&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
