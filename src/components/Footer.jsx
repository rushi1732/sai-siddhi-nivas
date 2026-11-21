import React, { useState } from 'react';
import { resortInfo } from '../data/cranganorData';
import { Phone, Mail, MapPin, Compass, ArrowUp, Send, Check, Heart } from 'lucide-react';

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
    <footer className="bg-chateau-riverDark text-chateau-sand border-t border-chateau-gold/20 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-serif tracking-[0.25em] text-2xl sm:text-3xl font-light text-chateau-gold block">
                CRANGANOR
              </span>
              <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-chateau-sand/70 block mt-0.5">
                History Café & Riverside Château
              </span>
            </div>
            <p className="text-xs text-chateau-sand/70 font-light leading-relaxed">
              A boutique riverside retreat on the banks of River Periyar, Kerala. Inspired by Indo-Dutch architecture and the 3,000-year seafaring heritage of ancient Muziris. Proudly led and run by a majority-woman crew.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-[11px] text-chateau-gold">
              <Compass className="w-3.5 h-3.5" />
              <span>Ancient Muziris Port Heritage Sanctuary</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-chateau-gold font-semibold">
              The Château
            </h4>
            <ul className="space-y-2 text-xs text-chateau-sand/80 font-light">
              <li><a href="#story" className="hover:text-chateau-gold transition-colors">Our Story & Crew</a></li>
              <li><a href="#rooms" className="hover:text-chateau-gold transition-colors">Rooms & Suites</a></li>
              <li><a href="#dining" className="hover:text-chateau-gold transition-colors">History Café Menu</a></li>
              <li><a href="#activities" className="hover:text-chateau-gold transition-colors">Heritage & River Trails</a></li>
              <li><a href="#arts" className="hover:text-chateau-gold transition-colors">Cranganor Arts Society</a></li>
              <li><a href="#spa" className="hover:text-chateau-gold transition-colors">Pool & Ayurvedic Spa</a></li>
              <li><a href="#gallery" className="hover:text-chateau-gold transition-colors">Visual Gallery</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-chateau-gold font-semibold">
              Contact & Concierge
            </h4>
            <div className="space-y-2.5 text-xs text-chateau-sand/80 font-light">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-chateau-gold shrink-0 mt-0.5" />
                <span>{resortInfo.location}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-chateau-gold shrink-0" />
                <a href={`tel:${resortInfo.phone}`} className="hover:text-chateau-gold transition-colors">
                  {resortInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-chateau-gold shrink-0" />
                <a href={`mailto:${resortInfo.email}`} className="hover:text-chateau-gold transition-colors">
                  {resortInfo.email}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-chateau-sand/60">
                <span>Hosts: Vineeth Viswambharan & Rasmi Poduval</span>
              </div>
            </div>
          </div>

          {/* Newsletter / Direct Inquiry */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-chateau-gold font-semibold">
              Stay Connected
            </h4>
            <p className="text-xs text-chateau-sand/70 font-light leading-relaxed">
              Receive seasonal reflections from the Periyar riverbanks, cultural festival schedules, and private retreat offerings.
            </p>
            {subscribed ? (
              <div className="p-3 bg-white/10 rounded-lg text-xs text-chateau-gold flex items-center space-x-2">
                <Check className="w-4 h-4" />
                <span>Thank you. We look forward to staying in touch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-l-lg px-3 py-2 text-xs text-white placeholder-chateau-sand/40 focus:outline-none focus:border-chateau-gold"
                  />
                  <button
                    type="submit"
                    className="bg-chateau-terracotta hover:bg-chateau-terracottaHover text-white px-3 py-2 rounded-r-lg text-xs transition-colors shrink-0"
                    aria-label="Subscribe to Newsletter"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="w-full py-2.5 px-4 rounded bg-chateau-gold/20 hover:bg-chateau-gold text-chateau-sand hover:text-chateau-riverDark border border-chateau-gold/40 text-xs uppercase tracking-widest font-semibold transition-all"
              >
                Booking Assistance Request
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-chateau-sand/60">
          <div className="flex items-center space-x-2">
            <span>&copy; {new Date().getFullYear()} Cranganor History Café & Riverside Château. All Rights Reserved.</span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1">
              <span>Run with</span>
              <Heart className="w-3 h-3 text-chateau-terracotta fill-chateau-terracotta" />
              <span>by majority-woman team</span>
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-chateau-gold hover:text-chateau-riverDark transition-colors"
              title="Return to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
