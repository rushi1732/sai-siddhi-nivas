import React from 'react';
import { hotelInfo } from '../data/hotelData';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${hotelInfo.whatsapp.replace('+', '')}?text=Hello%20Sai%20Siddhi%20Nivas,%20I%20would%20like%20to%20enquire%20about%20staying%20at%20your%20hotel.`;

  return (
    <aside aria-label="WhatsApp Concierge" className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center space-x-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/30"
        title="Chat with Hotel Concierge on WhatsApp (+91 9764764359)"
      >
        {/* Pulsing online status indicator */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>

        <MessageCircle className="w-5 h-5 fill-current" />
        
        <span className="text-xs uppercase tracking-wider font-bold pr-1 hidden sm:inline">
          WhatsApp Desk
        </span>
      </a>
    </aside>
  );
}
