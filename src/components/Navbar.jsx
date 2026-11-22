import React, { useState, useEffect } from 'react';
import { hotelInfo } from '../data/hotelData';
import { 
  Menu, X, Calendar, MapPin, Sparkles, MessageCircle, 
  Phone, Mail, ChevronDown, Compass
} from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isPoppingNavRef = React.useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // History management for mobile hamburger menu
  useEffect(() => {
    if (!mobileMenuOpen) return;
    window.history.pushState({ modal: 'mobileMenu' }, '');
    const handlePop = () => {
      isPoppingNavRef.current = true;
      setMobileMenuOpen(false);
    };
    window.addEventListener('popstate', handlePop);
    return () => {
      window.removeEventListener('popstate', handlePop);
    };
  }, [mobileMenuOpen]);

  const handleCloseMobileMenu = () => {
    setMobileMenuOpen(false);
    if (!isPoppingNavRef.current && window.history.state?.modal === 'mobileMenu') {
      window.history.back();
    }
    isPoppingNavRef.current = false;
  };

  // One&Only inspired luxury navigation hierarchy
  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'ACCOMMODATION', href: '#rooms' },
    { label: 'DINING', href: '#dining' },
    { label: 'EXPERIENCES', href: '#amenities' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'LOCATION', href: '#location' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    handleCloseMobileMenu();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'bg-hotel-forestDark/95 backdrop-blur-md shadow-2xl py-3 text-hotel-ivory border-b border-hotel-gold/25' 
            : 'bg-gradient-to-b from-black/85 via-black/45 to-transparent pt-4 pb-3 sm:pt-6 sm:pb-4 text-white'
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Row: Utility Nav (Left) | Brand Logo (Center - ALWAYS Absolutely Centered) | Book Now (Right) */}
          <div className="relative flex items-center justify-between min-h-[44px]">
            
            {/* Left: Minimal Utility Navigation (desktop) / Hamburger (mobile) */}
            <div className="flex items-center justify-start z-10 w-1/3">
              {/* Desktop Utility Items */}
              <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 text-[11px] tracking-[0.18em] uppercase text-white/85 font-light">
                <div className="flex items-center space-x-1 cursor-pointer hover:text-hotel-gold transition-colors">
                  <span>EN</span>
                  <ChevronDown className="w-3 h-3 text-hotel-gold" />
                </div>
                <span className="text-white/30">&bull;</span>
                <a 
                  href={`tel:${hotelInfo.phoneRaw}`} 
                  className="flex items-center space-x-1.5 hover:text-hotel-gold transition-colors"
                  title="Call Sai Siddhi Nivas"
                >
                  <Phone className="w-3 h-3 text-hotel-gold" />
                  <span>+91 9764764359</span>
                </a>
                <span className="text-white/30">&bull;</span>
                <a 
                  href={`mailto:${hotelInfo.email}`} 
                  className="hidden 2xl:flex items-center space-x-1.5 hover:text-hotel-gold transition-colors"
                  title="Email Reservations"
                >
                  <Mail className="w-3 h-3 text-hotel-gold" />
                  <span>stay@saisiddhinivas.com</span>
                </a>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1 text-white hover:text-hotel-gold focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Center: Iconic One&Only-Style Hotel Logo - Perfectly Centered At ALL Times via absolute */}
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center cursor-pointer text-center group pointer-events-auto"
            >
              <div className="flex flex-col items-center">
                <span className="font-serif italic text-xl sm:text-3xl lg:text-[32px] tracking-wide text-white group-hover:text-hotel-goldLight transition-colors font-normal leading-tight whitespace-nowrap">
                  Sai Siddhi
                </span>
                <span className="font-sans text-[8.5px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.35em] uppercase text-hotel-goldLight font-medium -mt-0.5 whitespace-nowrap">
                  NIVAS
                </span>
                {!isScrolled && (
                  <span className="hidden sm:block font-sans text-[7.5px] tracking-[0.28em] uppercase text-white/60 mt-0.5 whitespace-nowrap">
                    KIRTANWADI TARF &bull; MAHARASHTRA
                  </span>
                )}
              </div>
            </div>

            {/* Right: Premium One&Only-Style Crisp "BOOK NOW" Button */}
            <div className="flex items-center justify-end z-10 w-1/3">
              <button
                onClick={() => onOpenBooking()}
                className="bg-white hover:bg-hotel-gold text-hotel-forestDark hover:text-white px-3 sm:px-6 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold tracking-wider sm:tracking-[0.22em] uppercase transition-all shadow-md active:scale-95 whitespace-nowrap"
              >
                BOOK NOW
              </button>
            </div>
          </div>

          {/* Bottom Row: Main Navigation (Desktop) - Center Aligned With Dots */}
          <nav 
            className={`hidden lg:flex items-center justify-center space-x-6 xl:space-x-8 transition-all duration-300 ${
              isScrolled 
                ? 'pt-2 mt-2 border-t border-white/10' 
                : 'pt-3.5 mt-3 border-t border-white/15'
            }`}
          >
            {navLinks.map((link, idx) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-[11px] xl:text-xs tracking-[0.22em] uppercase font-light text-white/90 hover:text-hotel-gold transition-colors py-0.5 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-hotel-gold hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
                {idx < navLinks.length - 1 && (
                  <span className="text-white/30 text-[9px] select-none">&bull;</span>
                )}
              </React.Fragment>
            ))}
          </nav>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-hotel-forestDark/98 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-20 pb-8 px-6 text-hotel-ivory animate-fade-in">
          <div className="flex flex-col space-y-4 overflow-y-auto">
            
            {/* Mobile Header Brand & Close */}
            <div className="border-b border-hotel-gold/25 pb-4 mb-2 flex items-center justify-between">
              <div>
                <span className="font-serif italic text-2xl text-white block">Sai Siddhi</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-hotel-goldLight block -mt-0.5">NIVAS &bull; KIRTANWADI TARF</span>
              </div>
              <button 
                onClick={handleCloseMobileMenu}
                className="p-2 text-hotel-ivory hover:text-hotel-gold"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-base font-serif tracking-wider text-hotel-ivory/90 hover:text-hotel-gold py-2.5 border-b border-white/10 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-hotel-gold">&rarr;</span>
                </a>
              ))}
            </div>

            {/* Quick Contact Info */}
            <div className="pt-2 text-xs text-hotel-ivory/80 space-y-2">
              <div className="flex items-center space-x-2 text-hotel-gold">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>Near Modka Agar, MSH4, Maharashtra 415703</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-hotel-gold shrink-0" />
                <a href={`tel:${hotelInfo.phoneRaw}`} className="hover:text-hotel-gold">+91 9764764359</a>
              </div>
            </div>
          </div>

          {/* Mobile Footer CTAs */}
          <div className="pt-6 border-t border-hotel-gold/20 flex flex-col space-y-3">
            <button
              onClick={() => {
                handleCloseMobileMenu();
                onOpenBooking();
              }}
              className="w-full bg-white hover:bg-hotel-gold text-hotel-forestDark hover:text-white py-3 text-xs tracking-[0.2em] uppercase font-bold text-center flex items-center justify-center space-x-2 shadow-lg transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK NOW</span>
            </button>
            
            <a
              href={`https://wa.me/${hotelInfo.whatsapp.replace('+', '')}?text=Hello%20Sai%20Siddhi%20Nivas,%20I%20would%20like%20to%20enquire%20about%20room%20availability%20and%20booking.`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 bg-emerald-700/80 hover:bg-emerald-700 text-white text-xs tracking-wider uppercase font-semibold text-center flex items-center justify-center space-x-1.5 transition-colors"
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
