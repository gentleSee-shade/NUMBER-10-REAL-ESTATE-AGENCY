import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import { BRAND } from '../data/brand';

export const MobileBottomBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Visible after passing ~350px (after hero section)
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for focus/blur on input, textarea, select to hide on keyboard appearance
  useEffect(() => {
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) {
        setIsInputFocused(true);
      }
    };

    const handleFocusOut = () => {
      setIsInputFocused(false);
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  if (!isVisible || isInputFocused) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#0C1B3F]/95 backdrop-blur-md border-t border-white/10 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-2xl transition-all duration-300">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Link */}
        <a
          href={`tel:${BRAND.phone.tel}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white/10 text-white hover:bg-white/15 transition-all text-center"
          aria-label="Call Number 10 Real Estate"
        >
          <Phone className="w-4 h-4 text-[#E6C770] mb-1" />
          <span className="text-[11px] font-semibold tracking-tight">Call</span>
        </a>

        {/* WhatsApp Link */}
        <a
          href={BRAND.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#1F7A5A] text-white hover:bg-[#1a6b4e] transition-all text-center"
          aria-label="Message Number 10 on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-white mb-1" />
          <span className="text-[11px] font-semibold tracking-tight">WhatsApp</span>
        </a>

        {/* Enquire Link */}
        <Link
          to="/contact"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#E6C770] text-[#0C1B3F] hover:bg-[#d8b85f] transition-all text-center font-bold"
          aria-label="Send an enquiry"
        >
          <Mail className="w-4 h-4 text-[#0C1B3F] mb-1" />
          <span className="text-[11px] font-bold tracking-tight">Enquire</span>
        </Link>
      </div>
    </div>
  );
};
