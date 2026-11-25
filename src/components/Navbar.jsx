import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { hotelInfo } from '../data/hotelData';
import { 
  Menu, X, Calendar, MapPin, Sparkles, MessageCircle, 
  Phone, Mail, ChevronDown, Compass, Check, Copy, ExternalLink, Globe
} from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Interactive utility states
  const [currentLang, setCurrentLang] = useState('EN');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [phoneMenuOpen, setPhoneMenuOpen] = useState(false);
  const [emailMenuOpen, setEmailMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const location = useLocation();
  const isPoppingNavRef = useRef(false);
  const utilityNavRef = useRef(null);

  // On home page, hide controls at top and reveal with smooth animation on scroll
  const isHomePage = location.pathname === '/';
  const shouldShowNavControls = isScrolled || !isHomePage;

  // Available languages
  const languages = [
    { code: 'EN', name: 'English', native: 'English' },
    { code: 'MR', name: 'Marathi', native: 'मराठी' },
    { code: 'HI', name: 'Hindi', native: 'हिंदी' },
  ];

  // Helper to show visual toast feedback
  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (utilityNavRef.current && !utilityNavRef.current.contains(event.target)) {
        setLangDropdownOpen(false);
        setPhoneMenuOpen(false);
        setEmailMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdowns on route changes
  useEffect(() => {
    setLangDropdownOpen(false);
    setPhoneMenuOpen(false);
    setEmailMenuOpen(false);
  }, [location.pathname]);

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

  // Actions for utility links
  const handleSelectLanguage = (lang) => {
    setCurrentLang(lang.code);
    setLangDropdownOpen(false);
    showToast(`✓ Language set to ${lang.native} (${lang.name})`);
  };

  const handlePhoneAction = (e) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(hotelInfo.phoneRaw);
    }
    showToast(`✓ Phone copied: ${hotelInfo.phone}`);
    setPhoneMenuOpen(!phoneMenuOpen);
    setLangDropdownOpen(false);
    setEmailMenuOpen(false);
  };

  const handleEmailAction = (e) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(hotelInfo.email);
    }
    showToast(`✓ Email copied: ${hotelInfo.email}`);
    setEmailMenuOpen(!emailMenuOpen);
    setLangDropdownOpen(false);
    setPhoneMenuOpen(false);
  };

  // One&Only inspired luxury navigation hierarchy with dedicated routes
  const navLinks = [
    { label: 'ABOUT', path: '/about' },
    { label: 'ACCOMMODATION', path: '/accommodation' },
    { label: 'DINING', path: '/dining' },
    { label: 'EXPERIENCES', path: '/experiences' },
    { label: 'GALLERY', path: '/gallery' },
    { label: 'LOCATION', path: '/location' },
    { label: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      {/* Toast Notification Banner for Instant User Feedback */}
      {toastMessage && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-hotel-forestDark/95 text-hotel-ivory px-5 py-2.5 rounded-full border border-hotel-gold/70 shadow-2xl flex items-center space-x-2.5 text-xs font-medium tracking-wide animate-fade-in pointer-events-none backdrop-blur-md">
          <div className="w-5 h-5 rounded-full bg-hotel-gold text-hotel-forestDark flex items-center justify-center shrink-0">
            <Check className="w-3 h-3 stroke-[3]" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-hotel-forestDark/95 backdrop-blur-md shadow-2xl py-3 text-hotel-ivory border-b border-hotel-gold/25' 
            : 'bg-gradient-to-b from-black/85 via-black/45 to-transparent pt-4 pb-3 sm:pt-6 sm:pb-4 text-white'
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Row: Utility Nav (Left) | Brand Logo (Center - ALWAYS Centered) | Book Now (Right) */}
          <div className="relative flex items-center justify-between min-h-[44px]">
            
            {/* Left: Interactive Utility Navigation (desktop) / Hamburger (mobile) */}
            <div 
              ref={utilityNavRef}
              className={`flex items-center justify-start z-10 w-1/3 transition-all duration-500 ease-out transform ${
                shouldShowNavControls 
                  ? 'opacity-100 translate-x-0 pointer-events-auto' 
                  : 'opacity-0 -translate-x-6 pointer-events-none'
              }`}
            >
              {/* Desktop Utility Items */}
              <div className="hidden lg:flex items-center space-x-2.5 xl:space-x-3.5 text-[11px] tracking-[0.18em] uppercase text-white/90 font-light relative select-none">
                
                {/* 1. Language Dropdown Button & Menu */}
                <div className="relative">
                  <button 
                    type="button"
                    onClick={() => {
                      setLangDropdownOpen(!langDropdownOpen);
                      setPhoneMenuOpen(false);
                      setEmailMenuOpen(false);
                    }}
                    className="flex items-center space-x-1 cursor-pointer hover:text-hotel-gold transition-colors py-1 px-1.5 rounded hover:bg-white/10 group"
                    title="Select Language"
                    aria-label="Select Language"
                  >
                    <Globe className="w-3 h-3 text-hotel-gold" />
                    <span className="font-semibold text-white group-hover:text-hotel-gold">{currentLang}</span>
                    <ChevronDown className={`w-3 h-3 text-hotel-gold transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Language Popover Menu */}
                  {langDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-hotel-forestDark/98 backdrop-blur-xl border border-hotel-gold/40 shadow-2xl rounded-lg py-2 text-left z-50 animate-fade-in text-xs divide-y divide-white/10">
                      <div className="px-3 py-1.5 text-[10px] uppercase tracking-widest text-hotel-gold font-semibold">
                        Select Language
                      </div>
                      <div className="py-1">
                        {languages.map((l) => (
                          <button
                            key={l.code}
                            type="button"
                            onClick={() => handleSelectLanguage(l)}
                            className={`w-full px-3 py-2 text-left flex items-center justify-between hover:bg-white/10 transition-colors ${
                              currentLang === l.code ? 'text-hotel-gold font-semibold bg-white/5' : 'text-hotel-ivory'
                            }`}
                          >
                            <span className="font-sans text-xs">{l.native} <span className="text-[10px] text-white/60">({l.name})</span></span>
                            {currentLang === l.code && <Check className="w-3.5 h-3.5 text-hotel-gold" />}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <span className="text-white/30 select-none">&bull;</span>

                {/* 2. Interactive Phone Button & Menu */}
                <div className="relative">
                  <button 
                    type="button"
                    onClick={handlePhoneAction}
                    className="flex items-center space-x-1.5 hover:text-hotel-gold transition-colors py-1 px-1.5 rounded hover:bg-white/10 group cursor-pointer"
                    title="Click for Direct Call, WhatsApp or Copy"
                    aria-label="Hotel Phone"
                  >
                    <Phone className="w-3 h-3 text-hotel-gold shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-white group-hover:text-hotel-gold whitespace-nowrap">+91 9764764359</span>
                  </button>

                  {/* Phone Quick Actions Popover */}
                  {phoneMenuOpen && (
                    <div className="absolute left-0 mt-2 w-64 bg-hotel-forestDark/98 backdrop-blur-xl border border-hotel-gold/40 shadow-2xl rounded-lg p-3 text-left z-50 animate-fade-in text-xs">
                      <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                        <span className="text-[10px] uppercase tracking-widest text-hotel-gold font-semibold">Hotel Front Desk</span>
                        <span className="text-[9px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">24/7 Active</span>
                      </div>

                      <div className="space-y-1.5">
                        {/* Direct Call */}
                        <a
                          href={`tel:${hotelInfo.phoneRaw}`}
                          onClick={() => setPhoneMenuOpen(false)}
                          className="flex items-center space-x-2.5 p-2 rounded bg-white/5 hover:bg-hotel-gold hover:text-hotel-forestDark transition-all group"
                        >
                          <Phone className="w-3.5 h-3.5 text-hotel-gold group-hover:text-hotel-forestDark shrink-0" />
                          <div className="flex-1">
                            <div className="font-semibold text-white group-hover:text-hotel-forestDark">Call Now</div>
                            <div className="text-[9.5px] text-white/60 group-hover:text-hotel-forestDark/80">+91 9764764359</div>
                          </div>
                        </a>

                        {/* WhatsApp Instant Desk */}
                        <a
                          href={`https://wa.me/${hotelInfo.whatsapp.replace('+', '')}?text=Hello%20Sai%20Siddhi%20Nivas,%20I%20would%20like%20to%20enquire%20about%20room%20availability%20and%20booking.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setPhoneMenuOpen(false)}
                          className="flex items-center space-x-2.5 p-2 rounded bg-emerald-600/25 hover:bg-emerald-600 text-white transition-all group"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-emerald-400 group-hover:text-white shrink-0" />
                          <div className="flex-1">
                            <div className="font-semibold text-emerald-300 group-hover:text-white">Chat on WhatsApp</div>
                            <div className="text-[9.5px] text-emerald-200/70 group-hover:text-white/80">Instant booking reply</div>
                          </div>
                        </a>

                        {/* Copy Phone Number */}
                        <button
                          type="button"
                          onClick={() => {
                            if (navigator.clipboard) {
                              navigator.clipboard.writeText(hotelInfo.phoneRaw);
                            }
                            showToast("✓ Phone number copied to clipboard!");
                            setPhoneMenuOpen(false);
                          }}
                          className="w-full flex items-center space-x-2.5 p-2 rounded hover:bg-white/10 text-hotel-ivory/80 hover:text-white transition-all text-left"
                        >
                          <Copy className="w-3.5 h-3.5 text-hotel-gold shrink-0" />
                          <span className="text-[11px]">Copy Phone Number</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <span className="text-white/30 select-none hidden xl:inline">&bull;</span>

                {/* 3. Interactive Email Button & Menu */}
                <div className="relative hidden xl:block">
                  <button 
                    type="button"
                    onClick={handleEmailAction}
                    className="flex items-center space-x-1.5 hover:text-hotel-gold transition-colors py-1 px-1.5 rounded hover:bg-white/10 group cursor-pointer"
                    title="Click for Gmail, Mail App or Copy"
                    aria-label="Hotel Email"
                  >
                    <Mail className="w-3 h-3 text-hotel-gold shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-white group-hover:text-hotel-gold lowercase whitespace-nowrap">stay@saisiddhinivas.com</span>
                  </button>

                  {/* Email Quick Actions Popover */}
                  {emailMenuOpen && (
                    <div className="absolute left-0 mt-2 w-64 bg-hotel-forestDark/98 backdrop-blur-xl border border-hotel-gold/40 shadow-2xl rounded-lg p-3 text-left z-50 animate-fade-in text-xs">
                      <div className="text-[10px] uppercase tracking-widest text-hotel-gold font-semibold pb-1.5 border-b border-white/10 mb-2">
                        Direct Email Desk
                      </div>

                      <div className="space-y-1.5">
                        {/* Compose in Gmail Web */}
                        <a
                          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${hotelInfo.email}&su=Reservation%20Enquiry%20-%20Sai%20Siddhi%20Nivas&body=Hello%20Sai%20Siddhi%20Nivas%20Hospitality%20Desk,%0A%0AI%20would%20like%20to%20enquire%20about%20room%20availability.%0A%0AThank%20you!`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setEmailMenuOpen(false)}
                          className="flex items-center space-x-2.5 p-2 rounded bg-white/5 hover:bg-hotel-gold hover:text-hotel-forestDark transition-all group"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-hotel-gold group-hover:text-hotel-forestDark shrink-0" />
                          <div className="flex-1">
                            <div className="font-semibold text-white group-hover:text-hotel-forestDark">Open in Gmail Web</div>
                            <div className="text-[9.5px] text-white/60 group-hover:text-hotel-forestDark/80">Opens composer in browser</div>
                          </div>
                        </a>

                        {/* Open Default Mail Client */}
                        <a
                          href={`mailto:${hotelInfo.email}?subject=Reservation%20Enquiry%20-%20Sai%20Siddhi%20Nivas`}
                          onClick={() => setEmailMenuOpen(false)}
                          className="flex items-center space-x-2.5 p-2 rounded hover:bg-white/10 text-hotel-ivory/90 hover:text-white transition-all group"
                        >
                          <Mail className="w-3.5 h-3.5 text-hotel-gold shrink-0" />
                          <div className="flex-1">
                            <div className="font-semibold text-white">Default Mail App</div>
                            <div className="text-[9.5px] text-white/60">Outlook / Apple Mail</div>
                          </div>
                        </a>

                        {/* Copy Email Address */}
                        <button
                          type="button"
                          onClick={() => {
                            if (navigator.clipboard) {
                              navigator.clipboard.writeText(hotelInfo.email);
                            }
                            showToast("✓ Email copied to clipboard!");
                            setEmailMenuOpen(false);
                          }}
                          className="w-full flex items-center space-x-2.5 p-2 rounded hover:bg-white/10 text-hotel-ivory/80 hover:text-white transition-all text-left"
                        >
                          <Copy className="w-3.5 h-3.5 text-hotel-gold shrink-0" />
                          <span className="text-[11px]">Copy Email Address</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

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

            {/* Center: Iconic Hotel Logo Linking to Home */}
            <Link
              to="/"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center text-center group pointer-events-auto"
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
            </Link>

            {/* Right: Premium One&Only-Style Crisp "BOOK NOW" Button */}
            <div 
              className={`flex items-center justify-end z-10 w-1/3 transition-all duration-500 ease-out transform ${
                shouldShowNavControls 
                  ? 'opacity-100 translate-x-0 pointer-events-auto' 
                  : 'opacity-0 translate-x-6 pointer-events-none'
              }`}
            >
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
            className={`hidden lg:flex items-center justify-center space-x-6 xl:space-x-8 transition-all duration-500 ease-out overflow-hidden transform ${
              shouldShowNavControls 
                ? 'opacity-100 max-h-12 translate-y-0 pt-2.5 mt-2 border-t border-white/10 pointer-events-auto' 
                : 'opacity-0 max-h-0 -translate-y-2 pt-0 mt-0 border-t-0 pointer-events-none'
            }`}
          >
            {navLinks.map((link, idx) => {
              const isActive = location.pathname === link.path;
              return (
                <React.Fragment key={link.label}>
                  <Link
                    to={link.path}
                    className={`text-[11px] xl:text-xs tracking-[0.22em] uppercase font-light transition-colors py-0.5 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-hotel-gold after:transition-all after:duration-300 ${
                      isActive 
                        ? 'text-hotel-gold after:w-full font-medium' 
                        : 'text-white/90 hover:text-hotel-gold after:w-0 hover:after:w-full'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {idx < navLinks.length - 1 && (
                    <span className="text-white/30 text-[9px] select-none">&bull;</span>
                  )}
                </React.Fragment>
              );
            })}
          </nav>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-hotel-forestDark/98 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-20 pb-8 px-6 text-hotel-ivory animate-fade-in">
          <div className="flex flex-col space-y-4 overflow-y-auto">
            
            {/* Mobile Header Brand & Close */}
            <div className="border-b border-hotel-gold/25 pb-4 mb-2 flex items-center justify-between">
              <Link to="/" onClick={handleCloseMobileMenu}>
                <span className="font-serif italic text-2xl text-white block">Sai Siddhi</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-hotel-goldLight block -mt-0.5">NIVAS &bull; KIRTANWADI TARF</span>
              </Link>
              <button 
                onClick={handleCloseMobileMenu}
                className="p-2 text-hotel-ivory hover:text-hotel-gold"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Language Switcher on Mobile */}
            <div className="flex items-center space-x-2 py-1 px-1 bg-white/5 rounded border border-white/10 text-xs">
              <span className="text-hotel-gold text-[10px] uppercase font-semibold px-2">Language:</span>
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setCurrentLang(l.code);
                    showToast(`✓ Language set to ${l.native}`);
                  }}
                  className={`px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
                    currentLang === l.code ? 'bg-hotel-gold text-hotel-forestDark font-bold shadow' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {l.native}
                </button>
              ))}
            </div>

            {/* Nav Links */}
            <div className="flex flex-col space-y-1">
              <Link
                to="/"
                onClick={handleCloseMobileMenu}
                className={`text-base font-serif tracking-wider py-2.5 border-b border-white/10 flex items-center justify-between ${
                  location.pathname === '/' ? 'text-hotel-gold font-semibold' : 'text-hotel-ivory/90 hover:text-hotel-gold'
                }`}
              >
                <span>HOME</span>
                <span className="text-xs text-hotel-gold">&rarr;</span>
              </Link>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    onClick={handleCloseMobileMenu}
                    className={`text-base font-serif tracking-wider py-2.5 border-b border-white/10 flex items-center justify-between ${
                      isActive ? 'text-hotel-gold font-semibold' : 'text-hotel-ivory/90 hover:text-hotel-gold'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-hotel-gold">&rarr;</span>
                  </Link>
                );
              })}
            </div>

            {/* Quick Contact Info */}
            <div className="pt-2 text-xs text-hotel-ivory/80 space-y-2">
              <div className="flex items-center space-x-2 text-hotel-gold">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>Near Modka Agar, MSH4, Maharashtra 415703</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-hotel-gold shrink-0" />
                <a href={`tel:${hotelInfo.phoneRaw}`} className="hover:text-hotel-gold font-medium">+91 9764764359</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-hotel-gold shrink-0" />
                <a href={`mailto:${hotelInfo.email}`} className="hover:text-hotel-gold lowercase">stay@saisiddhinivas.com</a>
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
