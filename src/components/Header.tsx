import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { BRAND } from '../data/brand';
import { useCurrency } from '../context/CurrencyContext';

interface HeaderProps {
  forceSolid?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ forceSolid = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currency, toggleCurrency } = useCurrency();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isSolid = forceSolid || scrolled || mobileMenuOpen;

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Properties', path: '/properties' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isSolid
            ? 'bg-[#0C1B3F] shadow-lg shadow-[#0C1B3F]/20 border-b border-[#14295A]'
            : 'bg-transparent border-b border-white/10'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo Left */}
          <Link
            to="/"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6C770] rounded-lg"
            aria-label="Number 10 Real Estate & Management Home"
          >
            <Logo variant="horizontal" tone="light" />
          </Link>

          {/* Centred 5 Links (Desktop) */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-[15px] font-medium transition-colors ${
                    isActive ? 'text-[#E6C770]' : 'text-white/80 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#E6C770] rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Section: Currency Toggle, Call Us, Find a Property CTA */}
          <div className="hidden sm:flex items-center space-x-3 lg:space-x-4">
            {/* GH₵ / $ Toggle */}
            <button
              type="button"
              onClick={toggleCurrency}
              className="inline-flex items-center border border-white/20 bg-white/5 hover:bg-white/10 rounded-full p-1 text-xs font-semibold text-white transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6C770]"
              title={`Switch currency (Current: ${currency === 'GHS' ? 'Ghanaian Cedi' : 'Indicative USD'})`}
              aria-label={`Toggle currency, currently ${currency}`}
            >
              <span
                className={`px-2 py-0.5 rounded-full transition-all ${
                  currency === 'GHS' ? 'bg-[#E6C770] text-[#0C1B3F] font-bold shadow-sm' : 'text-white/70'
                }`}
              >
                GH₵
              </span>
              <span
                className={`px-2 py-0.5 rounded-full transition-all ${
                  currency === 'USD' ? 'bg-[#E6C770] text-[#0C1B3F] font-bold shadow-sm' : 'text-white/70'
                }`}
              >
                $
              </span>
            </button>

            {/* Direct Call Link (hidden under 1100px) */}
            <a
              href={`tel:${BRAND.phone.tel}`}
              className="hidden min-[1100px]:inline-flex items-center gap-1.5 text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-[#E6C770]" />
              <span>Call Us</span>
            </a>

            {/* White Pill "Find a Property" CTA */}
            <Link
              to="/properties"
              className="inline-flex items-center justify-center h-11 px-5 rounded-full bg-white text-[#0C1B3F] font-semibold text-[14px] hover:bg-[#FAF7F0] transition-transform duration-200 active:scale-95 shadow-sm"
            >
              Find a Property
            </Link>
          </div>

          {/* Mobile Right Controls: Currency toggle & Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleCurrency}
              className="inline-flex items-center border border-white/20 bg-white/5 rounded-full p-0.5 text-xs font-semibold text-white"
              aria-label="Toggle currency"
            >
              <span
                className={`px-1.5 py-0.5 rounded-full text-[11px] ${
                  currency === 'GHS' ? 'bg-[#E6C770] text-[#0C1B3F] font-bold' : 'text-white/70'
                }`}
              >
                GH₵
              </span>
              <span
                className={`px-1.5 py-0.5 rounded-full text-[11px] ${
                  currency === 'USD' ? 'bg-[#E6C770] text-[#0C1B3F] font-bold' : 'text-white/70'
                }`}
              >
                $
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#E6C770] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6C770] rounded-lg"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Height Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#0C1B3F] pt-24 px-6 pb-12 flex flex-col justify-between overflow-y-auto sm:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="space-y-6 pt-4">
            <p className="eyebrow text-[#E6C770]">Number 10 Real Estate</p>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `font-serif text-3xl font-bold transition-colors ${
                      isActive ? 'text-[#E6C770]' : 'text-white hover:text-[#E6C770]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-8 border-t border-white/10">
            <div className="flex items-center justify-between text-sm text-white/70">
              <span>Price Display Currency:</span>
              <button
                type="button"
                onClick={toggleCurrency}
                className="inline-flex items-center border border-white/20 bg-white/10 rounded-full p-1 text-xs font-semibold text-white"
              >
                <span className={`px-2 py-0.5 rounded-full ${currency === 'GHS' ? 'bg-[#E6C770] text-[#0C1B3F] font-bold' : ''}`}>
                  GH₵
                </span>
                <span className={`px-2 py-0.5 rounded-full ${currency === 'USD' ? 'bg-[#E6C770] text-[#0C1B3F] font-bold' : ''}`}>
                  USD
                </span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={`tel:${BRAND.phone.tel}`}
                className="flex items-center justify-center gap-2 h-12 rounded-full border border-white/20 text-white font-semibold text-sm hover:bg-white/10 active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#E6C770]" />
                Call Directly
              </a>
              <a
                href={BRAND.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 h-12 rounded-full bg-[#1F7A5A] text-white font-semibold text-sm hover:bg-[#1b6b4f] active:scale-95"
              >
                WhatsApp
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <Link
              to="/properties"
              className="w-full flex items-center justify-center h-12 rounded-full bg-[#E6C770] text-[#0C1B3F] font-semibold text-sm shadow-md"
            >
              Explore All Properties
            </Link>

            <p className="text-center text-xs text-white/50 pt-2">
              Dome Kboat, Accra · {BRAND.phone.international}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
