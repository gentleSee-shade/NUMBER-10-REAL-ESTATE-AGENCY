import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  MapPin,
  Bed,
  Bath,
  Maximize2,
  Calendar,
  Phone,
  MessageCircle,
  CheckCircle,
  Share2,
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Building,
} from 'lucide-react';
import { PROPERTIES, Property } from '../data/properties';
import { BRAND } from '../data/brand';
import { SmartImage } from '../components/SmartImage';
import { Lightbox } from '../components/Lightbox';
import { EnquiryForm } from '../components/EnquiryForm';
import { PropertyCard } from '../components/PropertyCard';
import { SEO } from '../components/SEO';
import { useCurrency } from '../context/CurrencyContext';
import { buildPropertyWhatsAppUrl } from '../lib/enquiry';

export const PropertyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { formatPrice, currency } = useCurrency();

  const property = PROPERTIES.find((p) => p.slug === slug);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!property) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center pt-24 px-4 text-center">
        <h1 className="font-serif font-bold text-3xl text-[#0C1B3F]">Property Not Found</h1>
        <p className="text-sm text-[#5B6683] mt-2 mb-6">
          The requested listing may have been leased, sold, or updated.
        </p>
        <Link
          to="/properties"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#14295A] text-white text-sm font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse Available Properties</span>
        </Link>
      </div>
    );
  }

  // Gallery array: main image + 4 thumbs
  const allImages = [property.images.main, ...property.images.gallery];

  // Related properties: same deal or area, excluding current
  const relatedProperties = PROPERTIES.filter((p) => p.id !== property.id).slice(0, 3);

  const formattedPrice = formatPrice(property.priceGhs, property.rentPeriod);
  const whatsappUrl = buildPropertyWhatsAppUrl(property.title, property.slug);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: property.title,
          text: `Check out ${property.title} in ${property.area} on Number 10 Real Estate`,
          url: window.location.href,
        });
      } catch {
        // Share cancelled or unavailable
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      } catch {
        // Fallback
      }
    }
  };

  // Structured Data Schema for RealEstateListing
  const propertySchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: property.title,
    description: property.description,
    url: typeof window !== 'undefined' ? window.location.href : '',
    address: {
      '@type': 'PostalAddress',
      addressLocality: property.area,
      addressRegion: 'Greater Accra',
      addressCountry: 'GH',
    },
    offers: {
      '@type': 'Offer',
      price: property.priceGhs,
      priceCurrency: 'GHS',
      availability: 'https://schema.org/InStock',
      businessFunction: property.deal === 'sale' ? 'http://purl.org/goodrelations/v1#Sell' : 'http://purl.org/goodrelations/v1#LeaseOut',
    },
  };

  return (
    <>
      <SEO
        title={`${property.title}, ${property.area}`}
        description={`${property.title} in ${property.locationDetails}. ${property.summary}`}
        schema={propertySchema}
      />

      {/* Slim Top Navigation Breadcrumb Banner */}
      <section className="bg-[#0C1B3F] text-white pt-28 pb-8 border-b border-[#14295A]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs text-white/70 mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <Link to="/properties" className="hover:text-white transition-colors">
              Properties
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-[#E6C770] font-medium truncate max-w-[200px] sm:max-w-none">
              {property.title}
            </span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`px-3 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
                    property.deal === 'sale' ? 'bg-[#14295A] text-white border border-white/20' : 'bg-[#1F7A5A] text-white'
                  }`}
                >
                  {property.deal === 'sale' ? 'For Sale' : 'For Rent'}
                </span>
                {property.investment && (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#E6C770] text-[#0C1B3F]">
                    Investment Opportunity
                  </span>
                )}
                {BRAND.showSampleBadge && property.sample && (
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono uppercase bg-white/10 text-white/80 border border-white/10">
                    Sample Listing
                  </span>
                )}
              </div>

              <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
                {property.title}
              </h1>

              <div className="flex items-center gap-1.5 text-sm text-white/80 mt-2">
                <MapPin className="w-4 h-4 text-[#E6C770] flex-shrink-0" />
                <span>{property.locationDetails}</span>
              </div>
            </div>

            {/* Price Badge and Share */}
            <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-3 pt-2 md:pt-0">
              <div className="text-left md:text-right">
                <span className="text-xs uppercase tracking-wider text-white/60 block">
                  {property.deal === 'sale' ? 'Asking Price' : 'Rental Rate'}
                </span>
                <span className="font-serif font-bold text-3xl sm:text-4xl text-[#E6C770]">
                  {formattedPrice}
                </span>
              </div>

              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors cursor-pointer"
                aria-label="Share property link"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Page Layout: Gallery, Details, Description, Features, Sticky Aside */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              {/* GALLERY: 1 Large Image + 4 Thumbs with Click-to-Lightbox */}
              <div className="space-y-3">
                {/* Large Main Image */}
                <div
                  onClick={() => {
                    setActiveImageIndex(0);
                    setLightboxOpen(true);
                  }}
                  className="relative aspect-[16/10] sm:aspect-[16/9] rounded-[16px] overflow-hidden bg-[#0C1B3F] cursor-pointer group shadow-md"
                >
                  <SmartImage
                    src={property.images.main}
                    alt={`${property.title} primary view`}
                    aspectRatio="16/9"
                    variant={property.artVariant}
                    priority={true}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  <div className="absolute bottom-4 right-4 bg-[#0C1B3F]/85 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-[#E6C770]" />
                    <span>View 5 Photos</span>
                  </div>
                </div>

                {/* 4 Thumbnails */}
                <div className="grid grid-cols-4 gap-3">
                  {property.images.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setActiveImageIndex(idx + 1);
                        setLightboxOpen(true);
                      }}
                      className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#0C1B3F] cursor-pointer group border border-[#E3E7F0] hover:border-[#14295A] transition-all"
                    >
                      <SmartImage
                        src={img}
                        alt={`${property.title} view ${idx + 2}`}
                        aspectRatio="4/3"
                        variant={property.artVariant}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors" />
                    </div>
                  ))}
                </div>
              </div>

              {/* KEY DETAILS GRID */}
              <div className="bg-[#FAF7F0] rounded-[16px] border border-[#E3E7F0] p-6 sm:p-7">
                <h2 className="eyebrow text-[#8A6516] mb-4">Key Specifications</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                  {property.beds !== undefined && (
                    <div className="space-y-1">
                      <span className="text-xs text-[#5B6683] flex items-center gap-1">
                        <Bed className="w-4 h-4 text-[#14295A]" />
                        <span>Bedrooms</span>
                      </span>
                      <p className="font-serif font-bold text-xl text-[#0C1B3F]">
                        {property.beds}
                      </p>
                    </div>
                  )}

                  {property.baths !== undefined && (
                    <div className="space-y-1">
                      <span className="text-xs text-[#5B6683] flex items-center gap-1">
                        <Bath className="w-4 h-4 text-[#14295A]" />
                        <span>Bathrooms</span>
                      </span>
                      <p className="font-serif font-bold text-xl text-[#0C1B3F]">
                        {property.baths}
                      </p>
                    </div>
                  )}

                  <div className="space-y-1">
                    <span className="text-xs text-[#5B6683] flex items-center gap-1">
                      <Maximize2 className="w-4 h-4 text-[#14295A]" />
                      <span>Plot / Floor Area</span>
                    </span>
                    <p className="font-serif font-bold text-xl text-[#0C1B3F]">
                      {property.sizeSqm} sqm
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs text-[#5B6683] flex items-center gap-1">
                      <Building className="w-4 h-4 text-[#14295A]" />
                      <span>Property Type</span>
                    </span>
                    <p className="font-serif font-bold text-xl text-[#0C1B3F] capitalize">
                      {property.type}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#E3E7F0] flex items-center gap-2 text-xs text-[#0F1830]">
                  <Calendar className="w-4 h-4 text-[#C9A24A]" />
                  <span className="font-semibold">Availability Status:</span>
                  <span>{property.availability}</span>
                </div>
              </div>

              {/* FULL DESCRIPTION */}
              <div className="space-y-4">
                <h2 className="font-serif font-bold text-2xl text-[#0C1B3F]">
                  Property Overview
                </h2>
                <p className="text-base text-[#0F1830] leading-relaxed whitespace-pre-line">
                  {property.description}
                </p>
              </div>

              {/* SPECIFIC FEATURES (only those that exist for this property) */}
              <div className="space-y-4 pt-4 border-t border-[#E3E7F0]">
                <h2 className="font-serif font-bold text-2xl text-[#0C1B3F]">
                  Property Features &amp; Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F5F7FC] border border-[#E3E7F0]"
                    >
                      <CheckCircle className="w-4 h-4 text-[#1F7A5A] flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-[#0F1830]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AGENCY ASSURANCE */}
              <div className="p-6 rounded-[16px] bg-[#E8EDF7] border border-[#2A4A8A]/20 flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-[#14295A] flex-shrink-0 mt-1" />
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-base text-[#0C1B3F]">
                    The Number 10 Agency Guarantee
                  </h4>
                  <p className="text-xs text-[#0F1830] leading-relaxed">
                    Every property transaction is accompanied by complete documentation transparency, guided site inspection, and private advisory. We handle client representation with absolute discretion.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Sticky Aside: "Interested in this property?" (4 cols) */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <div className="bg-white rounded-[16px] border border-[#E3E7F0] shadow-xl p-6">
                  <h3 className="font-serif font-bold text-xl text-[#0C1B3F] mb-1">
                    Interested in this property?
                  </h3>
                  <p className="text-xs text-[#5B6683] mb-5">
                    Connect directly with the Number 10 team for viewings, title documentation, and terms.
                  </p>

                  {/* Direct Contact Buttons */}
                  <div className="space-y-2.5 mb-6">
                    <a
                      href={`tel:${BRAND.phone.tel}`}
                      className="w-full flex items-center justify-center gap-2 h-12 rounded-full border border-[#14295A] text-[#14295A] hover:bg-[#14295A] hover:text-white font-semibold text-sm transition-colors cursor-pointer"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call {BRAND.phone.display}</span>
                    </a>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 h-12 rounded-full bg-[#1F7A5A] hover:bg-[#1a664b] text-white font-semibold text-sm transition-colors shadow-sm cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Message on WhatsApp</span>
                    </a>
                  </div>

                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-[#E3E7F0]" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-3 text-[#5B6683]">or send an enquiry</span>
                    </div>
                  </div>

                  {/* Enquiry Form prefilled with property title */}
                  <EnquiryForm
                    propertyTitle={property.title}
                    propertySlug={property.slug}
                    defaultInterest={property.deal === 'sale' ? 'Buying' : 'Renting'}
                    compact={true}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Related Properties Row */}
          {relatedProperties.length > 0 && (
            <div className="mt-20 pt-12 border-t border-[#E3E7F0]">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="eyebrow text-[#8A6516] mb-1">SIMILAR LISTINGS</p>
                  <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0C1B3F]">
                    More properties in Accra
                  </h2>
                </div>

                <Link
                  to="/properties"
                  className="text-xs font-semibold uppercase tracking-wider text-[#14295A] hover:underline"
                >
                  View All &gt;
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProperties.map((rel) => (
                  <PropertyCard key={rel.id} property={rel} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Component */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={allImages}
        currentIndex={activeImageIndex}
        onIndexChange={setActiveImageIndex}
        title={property.title}
        artVariant={property.artVariant}
      />
    </>
  );
};
