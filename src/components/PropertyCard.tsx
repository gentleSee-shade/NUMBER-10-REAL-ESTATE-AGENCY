import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Maximize2, ArrowRight } from 'lucide-react';
import { Property } from '../data/properties';
import { SmartImage } from './SmartImage';
import { useCurrency } from '../context/CurrencyContext';
import { BRAND } from '../data/brand';

interface PropertyCardProps {
  property: Property;
  className?: string;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, className = '' }) => {
  const { formatPrice } = useCurrency();

  const formattedPrice = formatPrice(property.priceGhs, property.rentPeriod);

  return (
    <Link
      to={`/properties/${property.slug}`}
      className={`group block bg-white rounded-[16px] border border-[#E3E7F0] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0C1B3F]/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A24A] ${className}`}
    >
      {/* 4:3 Image Container with Badges */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0C1B3F]">
        <div className="w-full h-full transform transition-transform duration-500 ease-out group-hover:scale-[1.03]">
          <SmartImage
            src={property.images.main}
            alt={property.title}
            aspectRatio="4/3"
            variant={property.artVariant}
          />
        </div>

        {/* Navy Scrim gradient behind badges and lower area */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 z-10">
          {/* Deal Badge: For Sale (navy-700) or For Rent (success green) */}
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase shadow-sm ${
              property.deal === 'sale'
                ? 'bg-[#14295A] text-white'
                : 'bg-[#1F7A5A] text-white'
            }`}
          >
            {property.deal === 'sale' ? 'For Sale' : 'For Rent'}
          </span>

          {/* Investment badge if applicable */}
          {property.investment && (
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide bg-[#E6C770] text-[#0C1B3F] shadow-sm">
              Investment
            </span>
          )}
        </div>

        {/* Sample Listing tag */}
        {BRAND.showSampleBadge && property.sample && (
          <div className="absolute top-3 right-3 z-10">
            <span className="px-2 py-0.5 rounded text-[11px] font-mono tracking-wider uppercase bg-[#0C1B3F]/80 backdrop-blur-sm text-white/90 border border-white/20">
              Sample Listing
            </span>
          </div>
        )}

        {/* Bottom hover bar indicator */}
        <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 text-white text-xs font-semibold bg-[#0C1B3F]/75 backdrop-blur-sm px-2.5 py-1 rounded-full opacity-90 transition-opacity">
          <span>View Property</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          {/* Price */}
          <div className="font-serif font-bold text-[22px] leading-tight text-[#0C1B3F]">
            {formattedPrice}
          </div>

          {/* Title */}
          <h3 className="font-sans font-semibold text-[17px] text-[#0F1830] mt-1.5 line-clamp-1 group-hover:text-[#14295A] transition-colors">
            {property.title}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-sm text-[#5B6683] mt-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#C9A24A] flex-shrink-0" />
            <span className="truncate">{property.locationDetails}</span>
          </div>

          {/* Summary */}
          <p className="text-xs text-[#5B6683] line-clamp-2 mt-2 leading-relaxed">
            {property.summary}
          </p>
        </div>

        {/* Hairline divider & specs row */}
        <div className="mt-4 pt-3.5 border-t border-[#E3E7F0]">
          <div className="flex items-center gap-3 text-xs text-[#5B6683] font-medium flex-wrap">
            {/* Show only specs that exist */}
            {property.beds !== undefined && (
              <span className="inline-flex items-center gap-1">
                <Bed className="w-3.5 h-3.5 text-[#14295A]" />
                <span>{property.beds} {property.beds === 1 ? 'bed' : 'beds'}</span>
              </span>
            )}

            {property.baths !== undefined && (
              <span className="inline-flex items-center gap-1">
                <Bath className="w-3.5 h-3.5 text-[#14295A]" />
                <span>{property.baths} {property.baths === 1 ? 'bath' : 'baths'}</span>
              </span>
            )}

            {property.sizeSqm !== undefined && (
              <span className="inline-flex items-center gap-1">
                <Maximize2 className="w-3.5 h-3.5 text-[#14295A]" />
                <span>{property.sizeSqm} sqm</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
