import React, { useState, useEffect } from 'react';
import { hotelInfo } from '../data/hotelData';
import { 
  Menu, X, Phone, Calendar, MapPin, 
  Sparkles, Compass, ShieldCheck, MessageCircle 
} from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Dining', href: '#dining' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact & Book', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-hotel-forestDark/95 backdrop-blur-md shadow-lg py-3 text-hotel-ivory border-b border-hotel-gold/20' 
            : 'bg-gradient-to-b from-black/85 via-black/50 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Royal Crest */}
            <a href="#" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-hotel-gold to-hotel-goldDark flex items-center justify-center p-0.5 shadow-md group-hover:scale-105 transition-transform">
                <div className="w-full h-full rounded-full bg-hotel-forestDark flex items-center justify-center border border-hotel-goldLight/40">
                  <span className="font-serif font-bold text-xs sm:text-sm tracking-wider text-hotel-goldLight">
                    SSN
                  </span>
                </div>
              </div>

              <div className="flex flex-col text-left">
                <span className="font-serif tracking-[0.18em] sm:tracking-[0.22em] text-lg sm:text-2xl font-medium text-white group-hover:text-hotel-gold transition-colors">
                  SAI SIDDHI NIVAS
                </span>
                <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-hotel-goldLight font-medium -mt-0.5">
                  Premium Hotel &bull; Kirtanwadi Tarf
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xs tracking-widest uppercase font-medium text-hotel-ivory/90 hover:text-hotel-gold transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-hotel-gold hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Quick Contact & Booking CTAs */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={`tel:${hotelInfo.phoneRaw}`}
                className="p-2 sm:px-3 sm:py-2 rounded-full border border-hotel-gold/50 text-hotel-gold hover:bg-hotel-gold/15 transition-all flex items-center space-x-1.5 text-xs font-medium"
                title={`Call ${hotelInfo.phone}`}
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">{hotelInfo.phone}</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="bg-gradient-to-r from-hotel-gold to-hotel-goldDark hover:from-hotel-goldHover hover:to-hotel-gold text-hotel-forestDark px-5 py-2.5 rounded-full text-xs tracking-widest uppercase font-bold transition-all shadow-md hover:shadow-xl flex items-center space-x-2 active:scale-95 border border-hotel-goldLight/40"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Your Stay</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-hotel-ivory hover:text-hotel-gold focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-hotel-forestDark/98 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-24 pb-8 px-6 text-hotel-ivory animate-fade-in">
          <div className="flex flex-col space-y-3 overflow-y-auto">
            <div className="border-b border-hotel-gold/25 pb-4 mb-2 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-hotel-gold flex items-center justify-center p-0.5">
                <div className="w-full h-full rounded-full bg-hotel-forestDark flex items-center justify-center">
                  <span className="font-serif font-bold text-xs text-hotel-goldLight">SSN</span>
                </div>
              </div>
              <div>
                <span className="font-serif text-xl text-white tracking-wider block font-semibold">SAI SIDDHI NIVAS</span>
                <span className="text-[10px] uppercase tracking-widest text-hotel-goldLight">Near Modka Agar, MSH4, Kirtanwadi Tarf</span>
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-serif tracking-wider text-hotel-ivory/90 hover:text-hotel-gold py-2 border-b border-white/10 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-hotel-gold">&rarr;</span>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-hotel-gold/20 flex flex-col space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-gradient-to-r from-hotel-gold to-hotel-goldDark text-hotel-forestDark py-3 rounded-xl text-xs tracking-widest uppercase font-bold text-center flex items-center justify-center space-x-2 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Stay Now</span>
            </button>
            
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${hotelInfo.phoneRaw}`}
                className="py-2.5 px-3 border border-hotel-gold/40 text-hotel-gold rounded-lg text-[11px] tracking-wider uppercase font-semibold text-center flex items-center justify-center space-x-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Hotel</span>
              </a>
              <a
                href={`https://wa.me/${hotelInfo.whatsapp.replace('+', '')}?text=Hello%20Sai%20Siddhi%20Nivas,%20I%20would%20like%20to%20enquire%20about%20room%20availability%20and%20booking.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 bg-emerald-700/80 hover:bg-emerald-700 text-white rounded-lg text-[11px] tracking-wider uppercase font-semibold text-center flex items-center justify-center space-x-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
