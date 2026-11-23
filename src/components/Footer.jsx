import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { hotelInfo } from '../data/hotelData';
import { 
  Phone, Mail, MapPin, Compass, ArrowUp, Send, 
  Check, Heart, Navigation, ExternalLink, Calendar, MessageCircle 
} from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-hotel-forestDark text-hotel-ivory border-t border-hotel-gold/20 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-hotel-gold flex items-center justify-center p-0.5">
                <div className="w-full h-full rounded-full bg-hotel-forestDark flex items-center justify-center">
                  <span className="font-serif font-bold text-xs text-hotel-goldLight">SSN</span>
                </div>
              </div>
              <div>
                <span className="font-serif tracking-[0.2em] text-2xl font-light text-white block">
                  SAI SIDDHI NIVAS
                </span>
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-hotel-goldLight block -mt-0.5">
                  Premium Hotel &bull; Kirtanwadi Tarf
                </span>
              </div>
            </div>
            
            <p className="text-xs text-hotel-ivory/80 font-light leading-relaxed">
              Experience comfort and genuine Konkan hospitality along Maharashtra State Highway 4. Featuring spotless air-conditioned rooms, family accommodation, delicious dining, ample parking, and 24/7 personalized care.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-xs text-hotel-gold">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Near Modka Agar, MSH4, Maharashtra 415703</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-hotel-gold font-semibold">
              Explore Hotel
            </h4>
            <ul className="space-y-2 text-xs text-hotel-ivory/80 font-light">
              <li><Link to="/about" className="hover:text-hotel-gold transition-colors">About Us</Link></li>
              <li><Link to="/accommodation" className="hover:text-hotel-gold transition-colors">Rooms & Suites</Link></li>
              <li><Link to="/experiences" className="hover:text-hotel-gold transition-colors">Experiences & Amenities</Link></li>
              <li><Link to="/dining" className="hover:text-hotel-gold transition-colors">Restaurant & Dining</Link></li>
              <li><Link to="/gallery" className="hover:text-hotel-gold transition-colors">Photo Gallery</Link></li>
              <li><Link to="/location" className="hover:text-hotel-gold transition-colors">Location & Route</Link></li>
              <li><Link to="/contact" className="hover:text-hotel-gold transition-colors">Contact & Booking</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-hotel-gold font-semibold">
              Contact & Reservations
            </h4>
            <div className="space-y-2.5 text-xs text-hotel-ivory/80 font-light">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-hotel-gold shrink-0 mt-0.5" />
                <span>{hotelInfo.address}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <span className="font-semibold text-white">Plus Code:</span>
                <span className="font-mono text-hotel-goldLight">{hotelInfo.plusCode}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-hotel-gold shrink-0" />
                <a href={`tel:${hotelInfo.phoneRaw}`} className="hover:text-hotel-gold transition-colors font-semibold text-white">
                  {hotelInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={`https://wa.me/${hotelInfo.whatsapp.replace('+', '')}?text=Hello%20Sai%20Siddhi%20Nivas,%20I%20would%20like%20to%20enquire%20about%20booking.`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-hotel-gold transition-colors"
                >
                  WhatsApp: {hotelInfo.whatsappFormatted}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={hotelInfo.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-[11px] text-hotel-goldLight hover:underline font-semibold"
                >
                  <Navigation className="w-3 h-3 text-hotel-gold" />
                  <span>Open Directions in Google Maps &rarr;</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Booking Assistance */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-hotel-gold font-semibold">
              Direct Reservation
            </h4>
            <p className="text-xs text-hotel-ivory/70 font-light leading-relaxed">
              Plan your travel through Kirtanwadi Tarf and reserve your room in advance for a restful stay.
            </p>

            <button
              onClick={() => onOpenBooking()}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-hotel-gold to-hotel-goldDark hover:from-hotel-goldHover hover:to-hotel-gold text-hotel-forestDark text-xs uppercase tracking-widest font-bold transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve Room Now</span>
            </button>

            <a
              href={`tel:${hotelInfo.phoneRaw}`}
              className="w-full py-2.5 px-4 rounded-xl border border-hotel-gold/40 text-hotel-gold hover:bg-hotel-gold/10 text-xs uppercase tracking-widest font-semibold transition-all text-center flex items-center justify-center space-x-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: +91 9764764359</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-hotel-ivory/60">
          <div>
            <span>&copy; {new Date().getFullYear()} Sai Siddhi Nivas. All Rights Reserved.</span>
            <span className="block sm:inline sm:ml-2 text-hotel-ivory/40">
              Near Modka Agar, MSH4, Kirtanwadi Tarf, Maharashtra 415703.
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/about" className="hover:text-hotel-gold transition-colors">About</Link>
            <Link to="/accommodation" className="hover:text-hotel-gold transition-colors">Rooms</Link>
            <Link to="/contact" className="hover:text-hotel-gold transition-colors">Contact</Link>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-hotel-gold hover:text-hotel-forestDark transition-all text-hotel-ivory"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
