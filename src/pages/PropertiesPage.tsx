import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, RotateCcw, Mail, ArrowUpDown, ChevronDown } from 'lucide-react';
import { PROPERTIES, Property } from '../data/properties';
import { LOCATIONS, PROPERTY_TYPES } from '../data/locations';
import { PropertyCard } from '../components/PropertyCard';
import { SEO } from '../components/SEO';
import { useCurrency } from '../context/CurrencyContext';

export const PropertiesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { currency } = useCurrency();

  // Read URL parameters with defaults
  const dealParam = searchParams.get('deal') || 'all'; // 'all' | 'buy' | 'rent' | 'invest'
  const locationParam = searchParams.get('location') || 'all';
  const typeParam = searchParams.get('type') || 'all';
  const minPriceParam = searchParams.get('minPrice') || '';
  const maxPriceParam = searchParams.get('maxPrice') || '';
  const bedsParam = searchParams.get('beds') || 'all';
  const sortParam = searchParams.get('sort') || 'newest'; // 'newest' | 'price-asc' | 'price-desc'

  // Local state initialized from params
  const [deal, setDeal] = useState(dealParam);
  const [location, setLocation] = useState(locationParam);
  const [propertyType, setPropertyType] = useState(typeParam);
  const [minPrice, setMinPrice] = useState(minPriceParam);
  const [maxPrice, setMaxPrice] = useState(maxPriceParam);
  const [beds, setBeds] = useState(bedsParam);
  const [sort, setSort] = useState(sortParam);

  // Sync state if URL changes externally
  useEffect(() => {
    setDeal(dealParam);
    setLocation(locationParam);
    setPropertyType(typeParam);
    setMinPrice(minPriceParam);
    setMaxPrice(maxPriceParam);
    setBeds(bedsParam);
    setSort(sortParam);
  }, [dealParam, locationParam, typeParam, minPriceParam, maxPriceParam, bedsParam, sortParam]);

  // Sync changes back to URL
  const updateFilters = (newFilters: Record<string, string>) => {
    const updated = new URLSearchParams(searchParams);
    Object.entries(newFilters).forEach(([key, val]) => {
      if (!val || val === 'all') {
        updated.delete(key);
      } else {
        updated.set(key, val);
      }
    });
    setSearchParams(updated);
  };

  const handleDealChange = (val: string) => {
    setDeal(val);
    updateFilters({ deal: val });
  };

  const handleLocationChange = (val: string) => {
    setLocation(val);
    updateFilters({ location: val });
  };

  const handleTypeChange = (val: string) => {
    setPropertyType(val);
    updateFilters({ type: val });
  };

  const handleBedsChange = (val: string) => {
    setBeds(val);
    updateFilters({ beds: val });
  };

  const handleSortChange = (val: string) => {
    setSort(val);
    updateFilters({ sort: val });
  };

  const clearAllFilters = () => {
    setDeal('all');
    setLocation('all');
    setPropertyType('all');
    setMinPrice('');
    setMaxPrice('');
    setBeds('all');
    setSort('newest');
    setSearchParams(new URLSearchParams());
  };

  // Filter & Sort listings
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((prop) => {
      // Deal filter
      if (deal === 'buy' && prop.deal !== 'sale') return false;
      if (deal === 'rent' && prop.deal !== 'rent') return false;
      if (deal === 'invest' && (!prop.investment || prop.deal !== 'sale')) return false;

      // Location filter
      if (location !== 'all' && !prop.area.toLowerCase().includes(location.toLowerCase())) {
        return false;
      }

      // Property type filter
      if (propertyType !== 'all' && prop.type !== propertyType) {
        return false;
      }

      // Beds filter
      if (beds !== 'all') {
        const requiredBeds = parseInt(beds, 10);
        if (prop.beds === undefined || prop.beds < requiredBeds) return false;
      }

      // Price filter (in GHS)
      if (minPrice && prop.priceGhs < parseInt(minPrice, 10)) return false;
      if (maxPrice && prop.priceGhs > parseInt(maxPrice, 10)) return false;

      return true;
    }).sort((a, b) => {
      if (sort === 'price-asc') {
        return a.priceGhs - b.priceGhs;
      }
      if (sort === 'price-desc') {
        return b.priceGhs - a.priceGhs;
      }
      // 'newest' default (by id descending)
      return parseInt(b.id, 10) - parseInt(a.id, 10);
    });
  }, [deal, location, propertyType, beds, minPrice, maxPrice, sort]);

  return (
    <>
      <SEO
        title="Properties for Sale & Rent in Accra"
        description="Browse residential homes, executive apartments, commercial suites, and titled land parcels in East Legon, Cantonments, Spintex, Airport, and Dome Kboat."
      />

      {/* Slim Navy Header Banner */}
      <section className="bg-[#0C1B3F] text-white pt-28 pb-12 border-b border-[#14295A]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-[#E6C770] mb-2">PROPERTY CATALOGUE</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
                Properties in Accra
              </h1>
              <p className="text-white/70 text-sm sm:text-base mt-2 max-w-xl">
                Curated residential homes, executive rentals, and investment plots across prime Accra locations.
              </p>
            </div>

            <div className="text-xs text-[#E6C770] bg-white/10 px-3 py-1.5 rounded-full self-start md:self-auto">
              Pricing shown in {currency === 'GHS' ? 'GH₵ (Ghana Cedi)' : 'Indicative USD'}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#E3E7F0] shadow-sm py-4">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Deal Tabs (Buy | Rent | Invest | All) */}
            <div className="flex items-center gap-1 bg-[#F5F7FC] p-1 rounded-full border border-[#E3E7F0] overflow-x-auto max-w-full">
              {[
                { label: 'All Deals', value: 'all' },
                { label: 'Buy', value: 'buy' },
                { label: 'Rent', value: 'rent' },
                { label: 'Invest', value: 'invest' },
              ].map((tab) => (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => handleDealChange(tab.value)}
                  className={`px-3.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    deal === tab.value
                      ? 'bg-[#14295A] text-white shadow-sm'
                      : 'text-[#5B6683] hover:text-[#0C1B3F]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Dropdown Filters (Location, Type, Beds, Sort) */}
            <div className="flex items-center gap-2 flex-wrap">
              {/* Location Select */}
              <div className="relative">
                <select
                  value={location}
                  onChange={(e) => handleLocationChange(e.target.value)}
                  className="h-9 pl-3 pr-7 rounded-lg border border-[#E3E7F0] text-xs font-medium text-[#0F1830] bg-white appearance-none focus:outline-none focus:border-[#2A4A8A] cursor-pointer"
                >
                  {LOCATIONS.map((loc) => (
                    <option key={loc.value} value={loc.value}>
                      {loc.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#5B6683] pointer-events-none" />
              </div>

              {/* Property Type Select */}
              <div className="relative">
                <select
                  value={propertyType}
                  onChange={(e) => handleTypeChange(e.target.value)}
                  className="h-9 pl-3 pr-7 rounded-lg border border-[#E3E7F0] text-xs font-medium text-[#0F1830] bg-white appearance-none focus:outline-none focus:border-[#2A4A8A] cursor-pointer"
                >
                  {PROPERTY_TYPES.map((pt) => (
                    <option key={pt.value} value={pt.value}>
                      {pt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#5B6683] pointer-events-none" />
              </div>

              {/* Bedrooms filter */}
              <div className="relative">
                <select
                  value={beds}
                  onChange={(e) => handleBedsChange(e.target.value)}
                  className="h-9 pl-3 pr-7 rounded-lg border border-[#E3E7F0] text-xs font-medium text-[#0F1830] bg-white appearance-none focus:outline-none focus:border-[#2A4A8A] cursor-pointer"
                >
                  <option value="all">Any Bedrooms</option>
                  <option value="2">2+ Beds</option>
                  <option value="3">3+ Beds</option>
                  <option value="4">4+ Beds</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#5B6683] pointer-events-none" />
              </div>

              {/* Sort selector */}
              <div className="relative flex items-center">
                <ArrowUpDown className="w-3.5 h-3.5 text-[#5B6683] absolute left-2.5 pointer-events-none" />
                <select
                  value={sort}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="h-9 pl-7 pr-7 rounded-lg border border-[#E3E7F0] text-xs font-medium text-[#0F1830] bg-white appearance-none focus:outline-none focus:border-[#2A4A8A] cursor-pointer"
                >
                  <option value="newest">Sort: Newest</option>
                  <option value="price-asc">Sort: Price low-high</option>
                  <option value="price-desc">Sort: Price high-low</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#5B6683] pointer-events-none" />
              </div>

              {/* Reset filter button if any active */}
              {(deal !== 'all' || location !== 'all' || propertyType !== 'all' || beds !== 'all' || minPrice || maxPrice) && (
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="h-9 px-3 rounded-lg text-xs font-medium text-[#8A6516] hover:bg-[#FAF7F0] transition-colors flex items-center gap-1 cursor-pointer"
                  title="Reset all filters"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area: Count & 3-Column Grid */}
      <section className="bg-white py-12 min-h-[500px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Result Count and Active Filters description */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E3E7F0]">
            <p className="text-sm font-medium text-[#0F1830]">
              Showing <span className="font-bold text-[#14295A]">{filteredProperties.length}</span>{' '}
              {filteredProperties.length === 1 ? 'property' : 'properties'} in Accra
            </p>

            <span className="text-xs text-[#5B6683]">
              Discretion · Precision · Reliability
            </span>
          </div>

          {/* Grid or Empty State */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            /* Empty State as specified in brief */
            <div className="bg-[#FAF7F0] border border-[#E3E7F0] rounded-[16px] p-10 text-center max-w-lg mx-auto my-12">
              <div className="w-12 h-12 rounded-full bg-[#E8EDF7] text-[#14295A] flex items-center justify-center mx-auto mb-4">
                <SlidersHorizontal className="w-6 h-6" />
              </div>
              <h2 className="font-serif font-bold text-2xl text-[#0C1B3F]">
                No properties match yet.
              </h2>
              <p className="text-sm text-[#5B6683] mt-2 mb-6 leading-relaxed">
                Tell us what you need and we'll look for it across our trusted offline inventory and Accra networks.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/contact?interest=Custom+Property+Search"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-[#14295A] hover:bg-[#0C1B3F] text-white font-semibold text-xs uppercase tracking-wider transition-all"
                >
                  <Mail className="w-4 h-4 text-[#E6C770]" />
                  <span>Send an Enquiry</span>
                </Link>

                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="w-full sm:w-auto inline-flex items-center justify-center h-11 px-5 rounded-full border border-[#14295A] text-[#14295A] font-semibold text-xs uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
