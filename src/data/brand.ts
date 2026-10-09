/**
 * Brand constants and single source of truth for Number 10 Real Estate & Management
 * Legal name: Number 10 Real Estate Ltd
 */

export const BRAND = {
  name: 'Number 10 Real Estate & Management',
  legalName: 'Number 10 Real Estate Ltd',
  shortName: 'Number 10',
  tagline: 'Discretion | Precision | Reliability',
  values: ['Discretion', 'Precision', 'Reliability'],
  
  // Real business location
  address: {
    line1: 'Dome Kboat',
    city: 'Accra',
    country: 'Ghana',
    full: 'Dome Kboat, Accra, Ghana',
  },
  
  // Direct telephone and WhatsApp
  phone: {
    display: '054 137 6805',
    international: '+233 54 137 6805',
    tel: '+233541376805',
    whatsapp: '233541376805',
  },

  // Verified Google review credentials
  rating: {
    score: 5.0,
    count: 33,
    starsText: '5.0 ★',
  },

  // Constant Google reviews external URL
  googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Number+10+Real+Estate+Dome+Kboat+Accra',

  // Google Maps embed URL
  mapsEmbedUrl: 'https://www.google.com/maps?q=Dome+Kboat,+Accra,+Ghana&output=embed',

  // Social URLs (Only WhatsApp is confirmed and active)
  social: {
    whatsapp: 'https://wa.me/233541376805',
  },

  // Currency configuration: Indicative USD conversion rate (1 USD = 15.0 GHS)
  usdRate: 15.0,

  // Router mode: HashRouter ensures smooth preview in iframe without 404s
  routerMode: 'hash' as 'hash' | 'browser',

  // Sample listings indicator flag
  showSampleBadge: true,
};

export const REVIEWS = [
  {
    id: 'rev-1',
    author: 'Khadija Abdullahi',
    rating: 5,
    quote: 'Very good customer service, and they did a good job.',
    initials: 'KA',
  },
  {
    id: 'rev-2',
    author: 'Charity Danyo',
    rating: 5,
    quote: 'Good customer service.',
    initials: 'CD',
  },
  {
    id: 'rev-3',
    author: 'Evans Fordjour Snr',
    rating: 5,
    quote: 'Great customer service.',
    initials: 'EF',
  },
];
