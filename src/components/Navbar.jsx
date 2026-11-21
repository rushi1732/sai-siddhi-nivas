import React, { useState, useEffect } from 'react';
import { hotelInfo } from '../data/hotelData';
import { 
  Menu, X, Calendar, MapPin, Sparkles, MessageCircle 
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

  // Clean, uncluttered navigation links (sutsutit & elegant)
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Dining', href: '#dining' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
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
            ? 'bg-hotel-forestDark/95 backdrop-blur-md shadow-lg py-3.5 text-hotel-ivory border-b border-hotel-gold/20' 
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Royal Crest - Always Single Line & Sutsutit */}
            <a href="#" className="flex items-center space-x-2.5 sm:space-x-3 group shrink-0 min-w-max mr-2 lg:mr-4 xl:mr-6">
              <div className="w-9 h-9 sm:w-10 sm:h-10 xl:w-11 xl:h-11 rounded-full bg-gradient-to-br from-hotel-gold to-hotel-goldDark flex items-center justify-center p-0.5 shadow-md group-hover:scale-105 transition-transform shrink-0">
                <div className="w-full h-full rounded-full bg-hotel-forestDark flex items-center justify-center border border-hotel-goldLight/40">
                  <span className="font-serif font-bold text-[11px] sm:text-xs xl:text-sm tracking-wider text-hotel-goldLight">
                    SSN
                  </span>
                </div>
              </div>

              <div className="flex flex-col text-left shrink-0">
                <span className="font-serif whitespace-nowrap tracking-[0.12em] xl:tracking-[0.18em] text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-white group-hover:text-hotel-gold transition-colors block">
                  SAI SIDDHI NIVAS
                </span>
                <span className="font-sans whitespace-nowrap text-[8.5px] sm:text-[9px] xl:text-[10.5px] tracking-[0.14em] xl:tracking-[0.2em] uppercase text-hotel-goldLight font-medium mt-0.5 block">
                  Premium Hotel &bull; Kirtanwadi Tarf
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links - Spacious & Clean */}
            <nav className="hidden lg:flex items-center space-x-2.5 lg:space-x-3 xl:space-x-5 2xl:space-x-6 shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-[10.5px] xl:text-xs tracking-[0.1em] xl:tracking-[0.15em] uppercase font-medium text-white/90 hover:text-hotel-gold transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-hotel-gold hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Booking CTA Button - Clearly separated with distinct margin & luxury divider */}
            <div className="hidden sm:flex items-center ml-3 lg:ml-5 xl:ml-8 pl-3 lg:pl-5 border-l border-white/25 shrink-0">
              <button
                onClick={() => onOpenBooking()}
                className="bg-gradient-to-r from-hotel-gold to-hotel-goldDark hover:from-hotel-goldHover hover:to-hotel-gold text-hotel-forestDark px-3.5 xl:px-5 py-2 xl:py-2.5 rounded-full text-[10.5px] xl:text-xs tracking-wider uppercase font-bold transition-all shadow-md hover:shadow-xl hover:scale-105 active:scale-95 border border-hotel-goldLight/40 flex items-center space-x-1.5 xl:space-x-2 whitespace-nowrap"
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
              <div className="w-10 h-10 rounded-full bg-hotel-gold flex items-center justify-center p-0.5 shrink-0">
                <div className="w-full h-full rounded-full bg-hotel-forestDark flex items-center justify-center">
                  <span className="font-serif font-bold text-xs text-hotel-goldLight">SSN</span>
                </div>
              </div>
              <div className="shrink-0 min-w-0">
                <span className="font-serif text-lg sm:text-xl text-white tracking-wider whitespace-nowrap block font-semibold">SAI SIDDHI NIVAS</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-hotel-goldLight whitespace-nowrap block mt-0.5">Premium Hotel &bull; Kirtanwadi Tarf</span>
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
            
            <a
              href={`https://wa.me/${hotelInfo.whatsapp.replace('+', '')}?text=Hello%20Sai%20Siddhi%20Nivas,%20I%20would%20like%20to%20enquire%20about%20room%20availability%20and%20booking.`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 bg-emerald-700/80 hover:bg-emerald-700 text-white rounded-lg text-xs tracking-wider uppercase font-semibold text-center flex items-center justify-center space-x-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp (+91 9764764359)</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
