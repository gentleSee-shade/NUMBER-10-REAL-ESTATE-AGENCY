import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  Mail,
  HeartHandshake,
  MapPin,
  Compass,
  ArrowRight,
  Star,
  Home,
  Building2,
  Sparkles,
  Truck,
  Armchair,
  ExternalLink,
} from 'lucide-react';
import { BRAND, REVIEWS } from '../data/brand';
import { PROPERTIES } from '../data/properties';
import { CONFIRMED_SERVICES } from '../data/services';
import { IMAGE_SLOTS } from '../data/images';
import { SearchCard } from '../components/SearchCard';
import { PropertyCard } from '../components/PropertyCard';
import { SmartImage } from '../components/SmartImage';
import { Logo } from '../components/Logo';
import { SEO } from '../components/SEO';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  // Four featured properties for the home display
  const featuredProperties = PROPERTIES.slice(0, 4);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-6 h-6 text-[#14295A]" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#14295A]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#14295A]" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-[#14295A]" />;
      case 'Armchair':
        return <Armchair className="w-6 h-6 text-[#14295A]" />;
      default:
        return <Home className="w-6 h-6 text-[#14295A]" />;
    }
  };

  return (
    <>
      <SEO />

      {/* 1. HERO SECTION (navy-900 to navy-700) */}
      <section className="relative bg-gradient-to-br from-[#0C1B3F] via-[#10224D] to-[#14295A] text-white pt-32 pb-24 lg:pt-40 lg:pb-36 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Copy Left */}
            <div className="lg:col-span-7 space-y-6 z-10">
              <p className="eyebrow text-[#E6C770]">
                NUMBER 10 REAL ESTATE &amp; MANAGEMENT
              </p>

              <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-[4.25rem] leading-[1.05] tracking-tight">
                Find a place worth calling{' '}
                <span className="text-[#E6C770]">yours.</span>
              </h1>

              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
                Discover property opportunities in Accra and beyond with a real-estate team committed to professional service and a better client experience.
              </p>

              {/* CTAs: Explore Properties (white pill) & Talk to Us (outline ivory pill opens WhatsApp) */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/properties"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-white text-[#0C1B3F] font-semibold text-sm hover:bg-[#FAF7F0] transition-transform duration-200 active:scale-95 shadow-md shadow-black/20"
                >
                  Explore Properties
                </Link>

                <a
                  href={BRAND.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full border border-[#FAF7F0]/40 text-[#FAF7F0] hover:bg-white/10 font-semibold text-sm transition-transform duration-200 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-[#E6C770]" />
                  <span>Talk to Us</span>
                </a>
              </div>
            </div>

            {/* Right: Hero Image Slot (~560px tall) bleeding right edge, left edge fading into navy via mask */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative h-[380px] sm:h-[460px] lg:h-[540px] w-full rounded-2xl lg:rounded-l-2xl overflow-hidden shadow-2xl border border-white/10">
                <SmartImage
                  src={IMAGE_SLOTS.hero.src}
                  alt={IMAGE_SLOTS.hero.alt}
                  aspectRatio="16/11"
                  variant="villa"
                  priority={true}
                  className="w-full h-full object-cover"
                />

                {/* Left gradient mask fading into navy */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0C1B3F] via-transparent to-transparent opacity-80 pointer-events-none lg:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1B3F] via-transparent to-transparent opacity-50 pointer-events-none lg:hidden block" />

                {/* Quiet Badge */}
                <div className="absolute bottom-4 right-4 z-10 bg-[#0C1B3F]/85 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full text-xs text-white/90 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E6C770]" />
                  <span>Accra, Ghana</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEARCH CARD SECTION (overlapping the hero by 50% on desktop) */}
      <section className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 lg:-mt-24 z-20">
        <SearchCard />
      </section>

      {/* 3. TRUST BAND (white): 4 facts with vertical hairlines */}
      <section className="bg-white py-16 sm:py-20 border-b border-[#E3E7F0]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="eyebrow text-[#8A6516]">
              Trusted by our clients
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-[#E3E7F0]">
            {/* Fact 1: 5.0 ★ Google Rating */}
            <div className="px-4 py-4 lg:py-2 text-center">
              <div className="font-serif font-bold text-3xl sm:text-4xl text-[#0C1B3F] flex items-center justify-center gap-1.5">
                <span>5.0</span>
                <span className="text-[#C9A24A]">★</span>
              </div>
              <p className="text-xs uppercase tracking-wider text-[#5B6683] font-semibold mt-2">
                Google Rating
              </p>
            </div>

            {/* Fact 2: 33 Google reviews */}
            <div className="px-4 py-4 lg:py-2 text-center">
              <div className="font-serif font-bold text-3xl sm:text-4xl text-[#0C1B3F]">
                33
              </div>
              <p className="text-xs uppercase tracking-wider text-[#5B6683] font-semibold mt-2">
                Google Reviews
              </p>
            </div>

            {/* Fact 3: Accra Dome Kboat office */}
            <div className="px-4 py-4 lg:py-2 text-center">
              <div className="font-serif font-bold text-3xl sm:text-4xl text-[#0C1B3F]">
                Accra
              </div>
              <p className="text-xs uppercase tracking-wider text-[#5B6683] font-semibold mt-2">
                Dome Kboat Office
              </p>
            </div>

            {/* Fact 4: 054 137 6805 Direct line (tel link) */}
            <div className="px-4 py-4 lg:py-2 text-center">
              <a
                href={`tel:${BRAND.phone.tel}`}
                className="font-serif font-bold text-2xl sm:text-[30px] lg:text-3xl text-[#0C1B3F] hover:text-[#2A4A8A] transition-colors block"
              >
                {BRAND.phone.display}
              </a>
              <p className="text-xs uppercase tracking-wider text-[#5B6683] font-semibold mt-2">
                Direct Line
              </p>
            </div>
          </div>

          {/* Subline below facts */}
          <div className="mt-10 text-center border-t border-[#E3E7F0] pt-6 max-w-2xl mx-auto space-y-2">
            <p className="text-sm text-[#0F1830] font-medium leading-relaxed">
              Our clients consistently recognise us for professional service and a positive customer experience.
            </p>
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8A6516]">
              Discretion · Precision · Reliability
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHY NUMBER 10 (tint bg #F5F7FC) */}
      <section className="bg-[#F5F7FC] py-20 sm:py-24 border-b border-[#E3E7F0]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow text-[#8A6516] mb-2">WHY NUMBER 10</p>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#0C1B3F] leading-tight">
              Real estate is personal. Your agency should be too.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: Client-focused service */}
            <div className="space-y-4 bg-white p-6 rounded-[16px] border border-[#E3E7F0] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#E8EDF7] flex items-center justify-center text-[#14295A]">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#0C1B3F]">
                Client-focused service
              </h3>
              <p className="text-sm text-[#5B6683] leading-relaxed">
                A strong emphasis on customer experience.
              </p>
            </div>

            {/* Column 2: Local knowledge */}
            <div className="space-y-4 bg-white p-6 rounded-[16px] border border-[#E3E7F0] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#E8EDF7] flex items-center justify-center text-[#14295A]">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#0C1B3F]">
                Local knowledge
              </h3>
              <p className="text-sm text-[#5B6683] leading-relaxed">
                Understanding the Accra property market and its opportunities.
              </p>
            </div>

            {/* Column 3: Professional guidance */}
            <div className="space-y-4 bg-white p-6 rounded-[16px] border border-[#E3E7F0] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#E8EDF7] flex items-center justify-center text-[#14295A]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#0C1B3F]">
                Professional guidance
              </h3>
              <p className="text-sm text-[#5B6683] leading-relaxed">
                Helping clients navigate important property decisions.
              </p>
            </div>

            {/* Column 4: Responsive communication */}
            <div className="space-y-4 bg-white p-6 rounded-[16px] border border-[#E3E7F0] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#E8EDF7] flex items-center justify-center text-[#14295A]">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#0C1B3F]">
                Responsive communication
              </h3>
              <p className="text-sm text-[#5B6683] leading-relaxed">
                Making it easy to ask questions and move forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROPERTIES (white) */}
      <section className="bg-white py-20 sm:py-24 border-b border-[#E3E7F0]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="eyebrow text-[#8A6516] mb-1">FEATURED PROPERTIES</p>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#0C1B3F]">
                Explore our latest listings
              </h2>
            </div>

            <Link
              to="/properties"
              className="inline-flex items-center justify-center h-11 px-6 rounded-full border border-[#14295A] text-[#14295A] hover:bg-[#14295A] hover:text-white font-semibold text-sm transition-all duration-200 self-start sm:self-auto cursor-pointer"
            >
              View All Properties
            </Link>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. SERVICES (white) */}
      <section className="bg-white py-20 sm:py-24 border-b border-[#E3E7F0]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="eyebrow text-[#8A6516] mb-2">SERVICES</p>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#0C1B3F]">
              How we can help
            </h2>
            <p className="text-sm text-[#5B6683] mt-2">
              Comprehensive real estate support rooted in discretion, precision, and reliability.
            </p>
          </div>

          {/* 5 Confirmed cards plus 1 navy CTA card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONFIRMED_SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-[16px] border border-[#E3E7F0] p-6 sm:p-7 flex flex-col justify-between hover:shadow-lg hover:border-[#2A4A8A]/30 transition-all"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E8EDF7] flex items-center justify-center text-[#14295A]">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <h3 className="font-serif font-bold text-xl text-[#0C1B3F]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#5B6683] leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[#E3E7F0]">
                  <Link
                    to={`/contact?interest=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#14295A] hover:text-[#2A4A8A] uppercase tracking-wider transition-colors"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}

            {/* Sixth Navy Card: "Not sure what you need?" with "Talk to Us" */}
            <div className="bg-[#0C1B3F] text-white rounded-[16px] p-6 sm:p-7 flex flex-col justify-between shadow-xl">
              <div className="space-y-4">
                <span className="eyebrow text-[#E6C770]">ADVISORY &amp; GUIDANCE</span>
                <h3 className="font-serif font-bold text-2xl text-white">
                  Not sure what you need?
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  Every property situation is unique. Speak directly with our team to talk through your goals, questions, or timeline in Accra.
                </p>
              </div>

              <div className="pt-6 mt-4">
                <a
                  href={BRAND.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-[#E6C770] hover:bg-[#d8b85f] text-[#0C1B3F] font-semibold text-xs uppercase tracking-wider transition-all active:scale-95 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Talk to Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ABOUT BAND (navy-900) */}
      <section className="bg-[#0C1B3F] text-white py-20 sm:py-24 border-b border-[#14295A]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Text & Details */}
            <div className="lg:col-span-5 space-y-6">
              <p className="eyebrow text-[#E6C770]">ABOUT NUMBER 10</p>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white leading-tight">
                About Number 10 Real Estate &amp; Management
              </h2>
              <p className="text-white/80 text-base leading-relaxed">
                Number 10 Real Estate Ltd is a real-estate agency based in Accra, Ghana, helping clients navigate property opportunities with a focus on professional service and customer satisfaction.
              </p>

              <div className="space-y-3 pt-2 text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#E6C770]">Location:</span>
                  <span>{BRAND.address.full}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#E6C770]">Phone:</span>
                  <a href={`tel:${BRAND.phone.tel}`} className="hover:underline">
                    {BRAND.phone.international}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#E6C770]">Rating:</span>
                  <span>5.0 ★ (33 reviews)</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-white text-[#0C1B3F] font-semibold text-sm hover:bg-[#FAF7F0] transition-transform active:scale-95 shadow-md"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right: Three white rounded cards (RealHome agent card style) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Card (a): Our Accra office */}
              <div className="bg-white text-[#0F1830] rounded-[16px] overflow-hidden shadow-lg flex flex-col justify-between">
                <div className="relative aspect-[4/3] bg-[#0C1B3F]">
                  <SmartImage
                    src={IMAGE_SLOTS.office.src}
                    alt={IMAGE_SLOTS.office.alt}
                    aspectRatio="4/3"
                    variant="office"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#0C1B3F]">
                      Our Accra office
                    </h4>
                    <p className="text-xs text-[#5B6683] mt-1">
                      Dome Kboat, Accra
                    </p>
                  </div>
                  <div className="flex items-center gap-2 pt-4 mt-2 border-t border-[#E3E7F0]">
                    <a
                      href={BRAND.mapsEmbedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#E8EDF7] hover:bg-[#14295A] hover:text-white text-[#14295A] flex items-center justify-center transition-colors"
                      title="View Map"
                      aria-label="View Map"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`tel:${BRAND.phone.tel}`}
                      className="w-8 h-8 rounded-full bg-[#E8EDF7] hover:bg-[#14295A] hover:text-white text-[#14295A] flex items-center justify-center transition-colors"
                      title="Call Office"
                      aria-label="Call Office"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={BRAND.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#E8EDF7] hover:bg-[#1F7A5A] hover:text-white text-[#14295A] flex items-center justify-center transition-colors"
                      title="WhatsApp Office"
                      aria-label="WhatsApp Office"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card (b): Visit our shopfront */}
              <div className="bg-white text-[#0F1830] rounded-[16px] overflow-hidden shadow-lg flex flex-col justify-between">
                <div className="relative aspect-[4/3] bg-[#0C1B3F]">
                  <SmartImage
                    src={IMAGE_SLOTS.shopfront.src}
                    alt={IMAGE_SLOTS.shopfront.alt}
                    aspectRatio="4/3"
                    variant="shopfront"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#0C1B3F]">
                      Visit our shopfront
                    </h4>
                    <p className="text-xs text-[#5B6683] mt-1">
                      Signage &amp; client reception
                    </p>
                  </div>
                  <div className="flex items-center gap-2 pt-4 mt-2 border-t border-[#E3E7F0]">
                    <a
                      href={BRAND.mapsEmbedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#E8EDF7] hover:bg-[#14295A] hover:text-white text-[#14295A] flex items-center justify-center transition-colors"
                      title="Get Directions"
                      aria-label="Get Directions"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`tel:${BRAND.phone.tel}`}
                      className="w-8 h-8 rounded-full bg-[#E8EDF7] hover:bg-[#14295A] hover:text-white text-[#14295A] flex items-center justify-center transition-colors"
                      title="Call Us"
                      aria-label="Call Us"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={BRAND.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#E8EDF7] hover:bg-[#1F7A5A] hover:text-white text-[#14295A] flex items-center justify-center transition-colors"
                      title="WhatsApp Us"
                      aria-label="WhatsApp Us"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card (c): Values card on navy-100 */}
              <div className="bg-[#E8EDF7] text-[#0C1B3F] rounded-[16px] p-5 flex flex-col justify-between shadow-lg border border-[#2A4A8A]/20">
                <div className="space-y-3">
                  <div className="h-10 w-16">
                    <Logo variant="mark" tone="color" className="w-full h-full" />
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#0C1B3F]">
                    Our Brand Values
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#14295A] font-semibold uppercase tracking-wider">
                    <li>• Discretion</li>
                    <li>• Precision</li>
                    <li>• Reliability</li>
                  </ul>
                </div>
                <div className="pt-3 border-t border-[#2A4A8A]/20">
                  <span className="text-[11px] text-[#5B6683] block leading-tight">
                    Legal Name: {BRAND.legalName}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS (white) */}
      <section className="bg-white py-20 sm:py-24 border-b border-[#E3E7F0]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="eyebrow text-[#8A6516] mb-1">CLIENT EXPERIENCES</p>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#0C1B3F]">
              What our clients say
            </h2>
            <p className="text-sm text-[#5B6683] mt-2 font-medium">
              Rated 5.0 ★ from 33 Google reviews
            </p>
          </div>

          {/* 3 Real reviews cards only */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-[#FAF7F0]/60 rounded-[16px] border border-[#E3E7F0] p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  {/* Five Gold Stars */}
                  <div className="flex items-center gap-1 text-[#C9A24A] mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  {/* Quote */}
                  <blockquote className="text-sm text-[#0F1830] italic leading-relaxed">
                    "{rev.quote}"
                  </blockquote>
                </div>

                <div className="flex items-center gap-3 pt-6 mt-4 border-t border-[#E3E7F0]">
                  {/* Navy-100 initials avatar (no fake photos) */}
                  <div className="w-10 h-10 rounded-full bg-[#E8EDF7] text-[#14295A] font-bold text-xs flex items-center justify-center flex-shrink-0">
                    {rev.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#0C1B3F]">
                      {rev.author}
                    </h4>
                    <span className="text-[11px] text-[#5B6683]">
                      Verified Google Review
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Link to constant GOOGLE_REVIEWS_URL in brand.ts */}
          <div className="text-center mt-10">
            <a
              href={BRAND.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#14295A] hover:text-[#2A4A8A] transition-colors"
            >
              <span>See all reviews on Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 9. CLOSING CTA BAND (navy-900) */}
      <section className="bg-[#0C1B3F] text-white py-20 sm:py-24 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2A4A8A]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="eyebrow text-[#E6C770] mb-3">GET IN TOUCH</p>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white max-w-2xl mx-auto leading-tight">
            Let's talk about your next property.
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto mt-4 mb-8 leading-relaxed">
            Whether you're searching for a property, exploring an investment opportunity, or simply have a question, our team is ready to help.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href={`tel:${BRAND.phone.tel}`}
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-white text-[#0C1B3F] font-semibold text-sm hover:bg-[#FAF7F0] transition-all active:scale-95 shadow-md"
            >
              <Phone className="w-4 h-4 text-[#C9A24A]" />
              <span>Call Us</span>
            </a>

            <a
              href={BRAND.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[#1F7A5A] hover:bg-[#1a664b] text-white font-semibold text-sm transition-all active:scale-95 shadow-md shadow-[#1F7A5A]/25"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-white/30 text-white hover:bg-white/10 font-semibold text-sm transition-all active:scale-95"
            >
              <Mail className="w-4 h-4 text-[#E6C770]" />
              <span>Send an Enquiry</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
