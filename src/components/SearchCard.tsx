import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Building, ChevronDown, SlidersHorizontal, Check } from 'lucide-react';
import { LOCATIONS, PROPERTY_TYPES } from '../data/locations';
import { useCurrency } from '../context/CurrencyContext';

interface SearchCardProps {
  initialDeal?: 'buy' | 'rent' | 'invest';
  initialLocation?: string;
  initialType?: string;
  initialMinPrice?: string;
  initialMaxPrice?: string;
  className?: string;
  onSearch?: (params: Record<string, string>) => void;
}

export const SearchCard: React.FC<SearchCardProps> = ({
  initialDeal = 'buy',
  initialLocation = 'all',
  initialType = 'all',
  initialMinPrice = '',
  initialMaxPrice = '',
  className = '',
  onSearch,
}) => {
  const navigate = useNavigate();
  const { currency } = useCurrency();

  const [activeTab, setActiveTab] = useState<'buy' | 'rent' | 'invest'>(initialDeal);
  const [location, setLocation] = useState(initialLocation);
  const [propertyType, setPropertyType] = useState(initialType);
  const [minPrice, setMinPrice] = useState(initialMinPrice);
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice);
  const [pricePopoverOpen, setPricePopoverOpen] = useState(false);

  const popoverRef = useRef<HTMLDivElement>(null);

  // Close price popover on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setPricePopoverOpen(false);
      }
    };
    if (pricePopoverOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [pricePopoverOpen]);

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const queryParams = new URLSearchParams();
    if (activeTab) queryParams.set('deal', activeTab);
    if (location && location !== 'all') queryParams.set('location', location);
    if (propertyType && propertyType !== 'all') queryParams.set('type', propertyType);
    if (minPrice) queryParams.set('minPrice', minPrice);
    if (maxPrice) queryParams.set('maxPrice', maxPrice);

    if (onSearch) {
      onSearch({
        deal: activeTab,
        location,
        type: propertyType,
        minPrice,
        maxPrice,
      });
    } else {
      navigate(`/properties?${queryParams.toString()}`);
    }
  };

  const getPriceDisplayText = () => {
    if (!minPrice && !maxPrice) {
      return 'Any Price';
    }
    const symbol = currency === 'GHS' ? 'GH₵' : '$';
    if (minPrice && maxPrice) {
      return `${symbol}${parseInt(minPrice, 10).toLocaleString()} – ${symbol}${parseInt(maxPrice, 10).toLocaleString()}`;
    }
    if (minPrice) {
      return `From ${symbol}${parseInt(minPrice, 10).toLocaleString()}`;
    }
    if (maxPrice) {
      return `Up to ${symbol}${parseInt(maxPrice, 10).toLocaleString()}`;
    }
    return 'Any Price';
  };

  const setPricePreset = (min: number | null, max: number | null) => {
    setMinPrice(min ? min.toString() : '');
    setMaxPrice(max ? max.toString() : '');
    setPricePopoverOpen(false);
  };

  return (
    <div
      className={`bg-white rounded-[16px] shadow-2xl shadow-[#0C1B3F]/15 border border-[#E3E7F0] p-5 sm:p-6 md:p-7 relative z-20 ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-[#E3E7F0]">
        <h2 className="text-sm font-semibold text-[#0F1830] tracking-wide uppercase font-sans flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C9A24A]" />
          Find your next property
        </h2>

        {/* Segmented Tabs: Buy | Rent | Invest */}
        <div
          role="tablist"
          aria-label="Deal Type"
          className="inline-flex p-1 bg-[#F5F7FC] rounded-full border border-[#E3E7F0] self-start sm:self-auto"
        >
          {(['buy', 'rent', 'invest'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#14295A] text-white shadow-sm'
                  : 'text-[#5B6683] hover:text-[#0C1B3F]'
              }`}
            >
              {tab === 'buy' ? 'Buy' : tab === 'rent' ? 'Rent' : 'Invest'}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSearchSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          {/* Location Field */}
          <div>
            <label
              htmlFor="search-location"
              className="block text-xs font-medium text-[#5B6683] mb-1.5"
            >
              Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5B6683] pointer-events-none" />
              <select
                id="search-location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full h-12 pl-10 pr-9 rounded-[10px] bg-[#FAF7F0]/60 border border-[#E3E7F0] text-sm text-[#0F1830] font-medium appearance-none focus:bg-white focus:border-[#2A4A8A] focus:outline-none transition-colors cursor-pointer"
              >
                {LOCATIONS.map((loc) => (
                  <option key={loc.value} value={loc.value}>
                    {loc.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5B6683] pointer-events-none" />
            </div>
          </div>

          {/* Property Type Field */}
          <div>
            <label
              htmlFor="search-type"
              className="block text-xs font-medium text-[#5B6683] mb-1.5"
            >
              Property Type
            </label>
            <div className="relative">
              <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5B6683] pointer-events-none" />
              <select
                id="search-type"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full h-12 pl-10 pr-9 rounded-[10px] bg-[#FAF7F0]/60 border border-[#E3E7F0] text-sm text-[#0F1830] font-medium appearance-none focus:bg-white focus:border-[#2A4A8A] focus:outline-none transition-colors cursor-pointer"
              >
                {PROPERTY_TYPES.map((pt) => (
                  <option key={pt.value} value={pt.value}>
                    {pt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5B6683] pointer-events-none" />
            </div>
          </div>

          {/* Price Range Popover Button */}
          <div className="relative" ref={popoverRef}>
            <label
              htmlFor="search-price-button"
              className="block text-xs font-medium text-[#5B6683] mb-1.5"
            >
              Price Range
            </label>
            <button
              id="search-price-button"
              type="button"
              onClick={() => setPricePopoverOpen(!pricePopoverOpen)}
              className="w-full h-12 pl-3.5 pr-8 rounded-[10px] bg-[#FAF7F0]/60 border border-[#E3E7F0] text-sm text-[#0F1830] font-medium text-left flex items-center justify-between focus:bg-white focus:border-[#2A4A8A] focus:outline-none transition-colors cursor-pointer"
              aria-haspopup="true"
              aria-expanded={pricePopoverOpen}
            >
              <span className="truncate">{getPriceDisplayText()}</span>
              <SlidersHorizontal className="w-4 h-4 text-[#5B6683] flex-shrink-0 ml-2" />
            </button>

            {/* Popover */}
            {pricePopoverOpen && (
              <div className="absolute top-full left-0 right-0 sm:w-80 mt-2 bg-white rounded-xl shadow-2xl border border-[#E3E7F0] p-4 z-50 animate-in fade-in zoom-in-95">
                <p className="text-xs font-semibold text-[#14295A] mb-3">Filter by Budget ({currency})</p>

                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div>
                    <span className="text-[11px] text-[#5B6683] block mb-1">Min Price</span>
                    <input
                      type="number"
                      placeholder="0"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      className="w-full h-9 px-2.5 rounded-lg border border-[#E3E7F0] text-xs font-medium focus:border-[#2A4A8A] focus:outline-none"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#5B6683] block mb-1">Max Price</span>
                    <input
                      type="number"
                      placeholder="No limit"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className="w-full h-9 px-2.5 rounded-lg border border-[#E3E7F0] text-xs font-medium focus:border-[#2A4A8A] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E3E7F0]">
                  <p className="text-[11px] font-medium text-[#5B6683] mb-1.5">Quick Presets:</p>
                  <div className="space-y-1">
                    {activeTab === 'rent' ? (
                      <>
                        <button
                          type="button"
                          onClick={() => setPricePreset(null, 15000)}
                          className="w-full text-left px-2 py-1 text-xs hover:bg-[#F5F7FC] rounded text-[#0F1830] flex items-center justify-between"
                        >
                          <span>Under GH₵ 15,000 / mo</span>
                          <Check className="w-3 h-3 text-[#1F7A5A] opacity-60" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setPricePreset(15000, 30000)}
                          className="w-full text-left px-2 py-1 text-xs hover:bg-[#F5F7FC] rounded text-[#0F1830] flex items-center justify-between"
                        >
                          <span>GH₵ 15k – 30k / mo</span>
                          <Check className="w-3 h-3 text-[#1F7A5A] opacity-60" />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() => setPricePreset(null, 1500000)}
                          className="w-full text-left px-2 py-1 text-xs hover:bg-[#F5F7FC] rounded text-[#0F1830] flex items-center justify-between"
                        >
                          <span>Under GH₵ 1,500,000</span>
                          <Check className="w-3 h-3 text-[#1F7A5A] opacity-60" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setPricePreset(1500000, 3500000)}
                          className="w-full text-left px-2 py-1 text-xs hover:bg-[#F5F7FC] rounded text-[#0F1830] flex items-center justify-between"
                        >
                          <span>GH₵ 1.5M – 3.5M</span>
                          <Check className="w-3 h-3 text-[#1F7A5A] opacity-60" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setPricePreset(3500000, null)}
                          className="w-full text-left px-2 py-1 text-xs hover:bg-[#F5F7FC] rounded text-[#0F1830] flex items-center justify-between"
                        >
                          <span>GH₵ 3.5M+</span>
                          <Check className="w-3 h-3 text-[#1F7A5A] opacity-60" />
                        </button>
                      </>
                    )}
                  </div>
                </div>

                <div className="mt-3 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setMinPrice('');
                      setMaxPrice('');
                      setPricePopoverOpen(false);
                    }}
                    className="px-2.5 py-1 text-xs text-[#5B6683] hover:text-[#0C1B3F]"
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    onClick={() => setPricePopoverOpen(false)}
                    className="px-3 py-1 bg-[#14295A] text-white rounded text-xs font-semibold"
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Search Properties Button (The ONLY gold-500 bg, navy-900 text button as mandated) */}
          <div>
            <button
              type="submit"
              className="w-full h-12 rounded-[10px] bg-[#C9A24A] hover:bg-[#B8892B] text-[#0C1B3F] font-semibold text-sm flex items-center justify-center gap-2 transition-transform duration-150 active:scale-95 shadow-md shadow-[#C9A24A]/25 cursor-pointer"
            >
              <Search className="w-4 h-4 stroke-[2.5]" />
              <span>Search Properties</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
