import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  MessageCircle,
  Star,
  ExternalLink,
  Shield,
  Target,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { BRAND, REVIEWS } from '../data/brand';
import { IMAGE_SLOTS } from '../data/images';
import { SmartImage } from '../components/SmartImage';
import { Logo } from '../components/Logo';
import { SEO } from '../components/SEO';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="About Number 10 Real Estate & Management"
        description="Learn about Number 10 Real Estate Ltd based in Dome Kboat, Accra, Ghana. Discretion, Precision, Reliability. Rated 5.0 stars on Google."
      />

      {/* Slim Navy Header Banner */}
      <section className="bg-[#0C1B3F] text-white pt-28 pb-16 border-b border-[#14295A]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-[#E6C770] mb-2">ABOUT THE AGENCY</p>
          <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white max-w-2xl">
            Professional guidance built on trust and customer care.
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-xl mt-4 leading-relaxed">
            Number 10 Real Estate Ltd is an Accra agency established to make property search, tenancy, and asset management dependable and personal.
          </p>
        </div>
      </section>

      {/* Core Narrative & Brand Identity */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#E3E7F0]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="eyebrow text-[#8A6516]">ESTABLISHED IN ACCRA</span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#0C1B3F] leading-tight">
                About Number 10 Real Estate &amp; Management
              </h2>

              <p className="text-base text-[#0F1830] leading-relaxed">
                Number 10 Real Estate Ltd is a real-estate agency based in Accra, Ghana, helping clients navigate property opportunities with a focus on professional service and customer satisfaction.
              </p>

              <p className="text-base text-[#5B6683] leading-relaxed">
                We believe that real estate decisions — whether purchasing a generational family home, acquiring an investment parcel, leasing corporate workspace, or managing tenancy portfolios — require grounded local insight and transparent communication. For both local residents and diaspora clients seeking reliable guidance in Ghana, our team provides approachable, attentive partnership.
              </p>

              {/* Verified Trust Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-[#FAF7F0] border border-[#E3E7F0]">
                  <div className="font-serif font-bold text-2xl text-[#0C1B3F] flex items-center gap-1">
                    <span>5.0</span>
                    <span className="text-[#C9A24A]">★</span>
                  </div>
                  <span className="text-xs text-[#5B6683] font-medium block mt-1">
                    33 Google Reviews
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF7F0] border border-[#E3E7F0]">
                  <div className="font-serif font-bold text-2xl text-[#0C1B3F]">
                    Accra
                  </div>
                  <span className="text-xs text-[#5B6683] font-medium block mt-1">
                    Dome Kboat Location
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF7F0] border border-[#E3E7F0] col-span-2 sm:col-span-1">
                  <div className="font-serif font-bold text-2xl text-[#0C1B3F]">
                    100%
                  </div>
                  <span className="text-xs text-[#5B6683] font-medium block mt-1">
                    Client Focused
                  </span>
                </div>
              </div>
            </div>

            {/* Brand Art Showcase */}
            <div className="lg:col-span-5">
              <div className="bg-[#0C1B3F] rounded-[16px] p-8 sm:p-10 text-white shadow-xl relative overflow-hidden border border-[#14295A]">
                <div className="relative z-10 space-y-6">
                  <Logo variant="full" tone="light" className="w-full max-w-[280px] mx-auto" />

                  <div className="pt-6 border-t border-white/15 space-y-3">
                    <p className="eyebrow text-[#E6C770] text-center">REGISTERED ENTITY</p>
                    <p className="text-center font-serif text-lg font-bold">
                      {BRAND.legalName}
                    </p>
                    <p className="text-center text-xs text-white/70">
                      Dome Kboat, Greater Accra Region, Ghana
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values Section */}
      <section className="bg-[#F5F7FC] py-16 sm:py-20 border-b border-[#E3E7F0]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="eyebrow text-[#8A6516] mb-1">FOUNDATIONAL PILLARS</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#0C1B3F]">
              Our Brand Values
            </h2>
            <p className="text-sm text-[#5B6683] mt-2">
              Taken directly from our shopfront commitment in Dome Kboat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1: Discretion */}
            <div className="bg-white rounded-[16px] border border-[#E3E7F0] p-8 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#E8EDF7] text-[#14295A] flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#0C1B3F]">
                Discretion
              </h3>
              <p className="text-sm text-[#5B6683] leading-relaxed">
                Property transactions often involve significant capital, sensitive privacy requirements, and family stewardship. We maintain absolute confidentiality and protect our clients' interests at all stages.
              </p>
            </div>

            {/* Value 2: Precision */}
            <div className="bg-white rounded-[16px] border border-[#E3E7F0] p-8 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#E8EDF7] text-[#14295A] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#0C1B3F]">
                Precision
              </h3>
              <p className="text-sm text-[#5B6683] leading-relaxed">
                From land title checks and lease agreement terms to maintenance schedules and asset valuation, we avoid ambiguities. Precision in detail prevents disputes and secures investments.
              </p>
            </div>

            {/* Value 3: Reliability */}
            <div className="bg-white rounded-[16px] border border-[#E3E7F0] p-8 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#E8EDF7] text-[#14295A] flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#0C1B3F]">
                Reliability
              </h3>
              <p className="text-sm text-[#5B6683] leading-relaxed">
                When you make an enquiry or schedule a viewing, we respond swiftly. Our reputation is anchored in consistency, dependability, and long-standing client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office & Shopfront Presence Showcase */}
      <section className="bg-white py-16 sm:py-20 border-b border-[#E3E7F0]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <span className="eyebrow text-[#8A6516] mb-1">PHYSICAL PRESENCE</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#0C1B3F]">
              Visit us in Dome Kboat
            </h2>
            <p className="text-sm text-[#5B6683] mt-2">
              We welcome prospective buyers, tenants, and property owners at our Accra office.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Office Slot */}
            <div className="bg-white rounded-[16px] border border-[#E3E7F0] overflow-hidden shadow-sm flex flex-col justify-between">
              <div className="relative aspect-[16/10] bg-[#0C1B3F]">
                <SmartImage
                  src={IMAGE_SLOTS.office.src}
                  alt={IMAGE_SLOTS.office.alt}
                  aspectRatio="16/9"
                  variant="office"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif font-bold text-xl text-[#0C1B3F]">
                  Accra Consultation Office
                </h3>
                <p className="text-sm text-[#5B6683] mt-2 leading-relaxed">
                  Dedicated desk and meeting space for reviewing property portfolios, site plans, and transaction agreements in comfort.
                </p>
              </div>
            </div>

            {/* Shopfront Slot */}
            <div className="bg-white rounded-[16px] border border-[#E3E7F0] overflow-hidden shadow-sm flex flex-col justify-between">
              <div className="relative aspect-[16/10] bg-[#0C1B3F]">
                <SmartImage
                  src={IMAGE_SLOTS.shopfront.src}
                  alt={IMAGE_SLOTS.shopfront.alt}
                  aspectRatio="16/9"
                  variant="shopfront"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif font-bold text-xl text-[#0C1B3F]">
                  Dome Kboat Shopfront
                </h3>
                <p className="text-sm text-[#5B6683] mt-2 leading-relaxed">
                  Glass storefront featuring service signage and direct customer reception in the Dome Kboat commercial corridor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Client Testimonials */}
      <section className="bg-[#FAF7F0] py-16 sm:py-20 border-b border-[#E3E7F0]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="eyebrow text-[#8A6516] mb-1">CONFIRMED REPUTATION</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#0C1B3F]">
              5.0 ★ on Google Reviews
            </h2>
            <p className="text-sm text-[#5B6683] mt-2">
              Real feedback from clients who have engaged Number 10 Real Estate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-[16px] border border-[#E3E7F0] p-6 sm:p-7 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#C9A24A] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-[#0F1830] italic leading-relaxed">
                    "{rev.quote}"
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#E3E7F0] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#E8EDF7] text-[#14295A] font-bold text-xs flex items-center justify-center">
                    {rev.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#0C1B3F]">{rev.author}</h4>
                    <span className="text-[11px] text-[#5B6683]">Verified Review</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href={BRAND.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#14295A] hover:underline"
            >
              <span>Verify on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Google Map Embed */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="eyebrow text-[#8A6516] mb-1">LOCATION &amp; DIRECTIONS</span>
              <h2 className="font-serif font-bold text-3xl text-[#0C1B3F]">
                Our Location in Accra
              </h2>
              <p className="text-sm text-[#5B6683] mt-1">
                Dome Kboat, Greater Accra Region, Ghana
              </p>
            </div>

            <a
              href={BRAND.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#14295A] text-[#14295A] hover:bg-[#14295A] hover:text-white text-xs font-semibold uppercase tracking-wider transition-all self-start sm:self-auto cursor-pointer"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="rounded-[16px] overflow-hidden border border-[#E3E7F0] shadow-md h-[380px] sm:h-[440px] bg-[#FAF7F0] relative">
            <iframe
              src={BRAND.mapsEmbedUrl}
              title="Number 10 Real Estate & Management Office Location Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};
