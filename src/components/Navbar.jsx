import React, { useState, useEffect } from 'react';
import { resortInfo } from '../data/cranganorData';
import { 
  Menu, X, Phone, Calendar, MapPin, 
  Compass, Waves, Coffee, Sparkles, Image as ImageIcon, HeartHandshake
} from 'lucide-react';

export default function Navbar({ onOpenBooking, activeSection }) {
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
    { label: 'Our Story', href: '#story' },
    { label: 'Rooms & Suites', href: '#rooms' },
    { label: 'History Café', href: '#dining' },
    { label: 'Trails & Life', href: '#activities' },
    { label: 'Arts Society', href: '#arts' },
    { label: 'Pool & Spa', href: '#spa' },
    { label: 'Location', href: '#location' },
    { label: 'Gallery', href: '#gallery' },
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
            ? 'bg-chateau-river/95 backdrop-blur-md shadow-lg py-3 text-chateau-sand border-b border-chateau-gold/20' 
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Tagline */}
            <a href="#" className="flex flex-col text-left group">
              <span className="font-serif tracking-[0.25em] text-2xl sm:text-3xl font-light text-chateau-gold group-hover:text-amber-300 transition-colors">
                CRANGANOR
              </span>
              <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] uppercase text-chateau-sand/80 font-light -mt-0.5">
                History Café & Riverside Château
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xs tracking-widest uppercase font-medium text-chateau-sand/90 hover:text-chateau-gold transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-chateau-gold hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={`https://wa.me/${resortInfo.whatsapp.replace('+', '')}?text=Hello%20Cranganor,%20I%20would%20like%20to%20inquire%20about%20staying%20at%20the%20Riverside%20Château.`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-chateau-gold/40 text-chateau-gold hover:bg-chateau-gold/10 transition-colors"
                title="Chat with Concierge"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="bg-chateau-terracotta hover:bg-chateau-terracottaHover text-white px-5 py-2.5 rounded text-xs tracking-widest uppercase font-semibold transition-all shadow-md hover:shadow-lg flex items-center space-x-2 border border-amber-800/30 active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5 text-amber-200" />
                <span>Reserve Stay</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-chateau-sand hover:text-chateau-gold focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-chateau-riverDark/98 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-24 pb-8 px-6 text-chateau-sand animate-fade-in">
          <div className="flex flex-col space-y-4">
            <div className="border-b border-chateau-gold/20 pb-3 mb-2">
              <span className="font-serif text-2xl text-chateau-gold tracking-widest block">CRANGANOR</span>
              <span className="text-[10px] uppercase tracking-widest text-chateau-sand/70">Puthenvelikkara, Kochi, Kerala</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-serif tracking-wider text-chateau-sand/90 hover:text-chateau-gold py-1 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-chateau-gold">→</span>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-chateau-gold/20 flex flex-col space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-chateau-terracotta hover:bg-chateau-terracottaHover text-white py-3 rounded text-sm tracking-widest uppercase font-semibold text-center flex items-center justify-center space-x-2 shadow-md"
            >
              <Calendar className="w-4 h-4 text-amber-200" />
              <span>Book Your Stay</span>
            </button>
            <a
              href={`tel:${resortInfo.phone}`}
              className="w-full py-2.5 border border-chateau-gold/40 text-chateau-gold rounded text-xs tracking-widest uppercase font-semibold text-center flex items-center justify-center space-x-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us: {resortInfo.phone}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
