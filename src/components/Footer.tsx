import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';
import { BRAND } from '../data/brand';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0C1B3F] text-white border-t border-[#14295A] select-none">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-4 lg:col-span-1">
            <Link to="/" className="inline-block" aria-label="Number 10 Real Estate & Management">
              <Logo variant="horizontal" tone="light" />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Professional real estate services in Accra, Ghana.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center text-xs tracking-wider uppercase text-[#E6C770] font-semibold">
                {BRAND.tagline}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="eyebrow text-[#E6C770]">Navigation</h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="hover:text-white transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="eyebrow text-[#E6C770]">Contact</h3>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E6C770] flex-shrink-0 mt-0.5" />
                <span>{BRAND.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E6C770] flex-shrink-0" />
                <a
                  href={`tel:${BRAND.phone.tel}`}
                  className="hover:text-[#E6C770] transition-colors"
                >
                  {BRAND.phone.international}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-[#E6C770]">
                  Google Rating: {BRAND.rating.starsText} ({BRAND.rating.count} reviews)
                </span>
              </div>
            </div>
          </div>

          {/* Connect / Social (Rule: render only platforms with a URL in brand.ts; initially only WhatsApp) */}
          <div className="space-y-4">
            <h3 className="eyebrow text-[#E6C770]">Direct Enquiries</h3>
            <p className="text-xs text-white/70 leading-relaxed">
              We respond promptly to property enquiries, client questions, and management consultations.
            </p>
            {BRAND.social.whatsapp && (
              <a
                href={BRAND.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1F7A5A] hover:bg-[#1a664b] text-white text-xs font-semibold tracking-wide transition-all active:scale-95 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat via WhatsApp</span>
              </a>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© 2026 Number 10 Real Estate Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Dome Kboat, Accra</span>
            <span>·</span>
            <span>Discretion · Precision · Reliability</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
