export type DealType = 'sale' | 'rent';
export type PropertyType = 'residential' | 'commercial' | 'land';

export interface Property {
  id: string;
  slug: string;
  title: string;
  area: string;
  locationDetails: string;
  deal: DealType;
  type: PropertyType;
  investment?: boolean;
  priceGhs: number;
  rentPeriod?: 'month';
  beds?: number;
  baths?: number;
  sizeSqm: number;
  sample: boolean;
  summary: string;
  description: string;
  availability: string;
  features: string[];
  artVariant: 'house' | 'villa' | 'apartment' | 'land' | 'office';
  images: {
    main: string;
    gallery: string[];
  };
}

export const PROPERTIES: Property[] = [
  {
    id: '1',
    slug: 'modern-4-bedroom-residence-east-legon',
    title: 'Modern 4-Bedroom Residence',
    area: 'East Legon',
    locationDetails: 'East Legon, Accra (near Ambassadorial Enclave)',
    deal: 'sale',
    type: 'residential',
    investment: false,
    priceGhs: 4200000,
    beds: 4,
    baths: 4,
    sizeSqm: 320,
    sample: true,
    summary: 'Executive 4-bedroom detached home with private compound and staff quarters in East Legon.',
    description:
      'An impeccably detailed executive family residence set in a tranquil, highly sought-after enclave of East Legon. The property boasts four generous en-suite bedrooms, high-ceiling reception rooms, a custom-fitted contemporary kitchen with imported quartz surfaces, and dedicated staff quarters. Constructed to durable standards with private motorized access, expansive multi-vehicle parking, standby generator provisions, and an integrated water filtration system. Ideally situated within swift reach of reputable international schools, premier health facilities, and Kotoka International Airport.',
    availability: 'Available for immediate purchase',
    features: [
      '4 En-Suite Bedrooms',
      'Fitted Chef Kitchen with Island',
      'Dedicated Staff Quarters',
      'Standby Generator Connection',
      'Dual Water Storage System',
      'Electric Security Fencing',
      'Parking for 4 Vehicles',
      'Tarred Access Road',
    ],
    artVariant: 'villa',
    images: {
      main: '/images/properties/prop-1-main.svg',
      gallery: [
        '/images/properties/prop-1-living.svg',
        '/images/properties/prop-1-kitchen.svg',
        '/images/properties/prop-1-bedroom.svg',
        '/images/properties/prop-1-exterior.svg',
      ],
    },
  },
  {
    id: '2',
    slug: 'contemporary-family-home-spintex',
    title: 'Contemporary Family Home',
    area: 'Spintex',
    locationDetails: 'Spintex Road, Accra (Coastal Estates vicinity)',
    deal: 'sale',
    type: 'residential',
    investment: false,
    priceGhs: 1850000,
    beds: 3,
    baths: 3,
    sizeSqm: 210,
    sample: true,
    summary: 'Thoughtfully planned 3-bedroom family home with private garden in a secure Spintex enclave.',
    description:
      'A warm, contemporary family home offering comfortable suburban living with excellent access to the Spintex commercial artery and the Tema Motorway. Features three en-suite bedrooms, an open-concept living and dining hall, a stylish fitted kitchen with pantry, and a landscaped perimeter garden. Built with quality Ghanaian finishes, porcelain tiling throughout, automated water delivery tanks, and multi-point perimeter security. A practical, well-balanced property for growing families prioritizing convenience and security.',
    availability: 'Vacant and ready for inspection',
    features: [
      '3 En-Suite Bedrooms',
      'Open-Concept Living Hall',
      'Fitted Kitchen with Pantry',
      'Landscaped Garden Area',
      '2,500L Overhead Water Tank',
      'Perimeter Electric Fencing',
      'Covered Carport for 2 Cars',
    ],
    artVariant: 'house',
    images: {
      main: '/images/properties/prop-2-main.svg',
      gallery: [
        '/images/properties/prop-2-living.svg',
        '/images/properties/prop-2-dining.svg',
        '/images/properties/prop-2-master.svg',
        '/images/properties/prop-2-garden.svg',
      ],
    },
  },
  {
    id: '3',
    slug: 'two-bedroom-apartment-cantonments',
    title: 'Two-Bedroom Apartment',
    area: 'Cantonments',
    locationDetails: 'Cantonments, Accra (close to Diplomatic Embassies)',
    deal: 'rent',
    type: 'residential',
    investment: false,
    priceGhs: 14000,
    rentPeriod: 'month',
    beds: 2,
    baths: 2,
    sizeSqm: 120,
    sample: true,
    summary: 'Prime 2-bedroom executive apartment with 24/7 security and pool access in diplomatic Cantonments.',
    description:
      'A polished two-bedroom residence within an exclusive gated residential development in diplomatic Cantonments. Designed for expatriates, diplomats, and corporate executives, the apartment delivers light-filled interiors, fully integrated German kitchen appliances, built-in wardrobes, and an open balcony overlooking green foliage. Residents enjoy uninterrupted 24/7 security, backup electricity, an on-site swimming pool, and an equipped gymnasium. Management charges and routine servicing coordinated smoothly.',
    availability: 'Available on 12-month lease',
    features: [
      '2 En-Suite Bedrooms',
      'Private Balcony',
      'Fully Equipped Kitchen',
      '24/7 On-Site Security Personnel',
      'Full Capacity Backup Generator',
      'Residents Swimming Pool',
      'Equipped Gym Facility',
      'Allocated Basement Parking',
    ],
    artVariant: 'apartment',
    images: {
      main: '/images/properties/prop-3-main.svg',
      gallery: [
        '/images/properties/prop-3-balcony.svg',
        '/images/properties/prop-3-lounge.svg',
        '/images/properties/prop-3-suite.svg',
        '/images/properties/prop-3-pool.svg',
      ],
    },
  },
  {
    id: '4',
    slug: 'residential-plot-dome',
    title: 'Residential Plot',
    area: 'Dome',
    locationDetails: 'Dome Kboat / Christian Village Enclave, Accra',
    deal: 'sale',
    type: 'land',
    investment: false,
    priceGhs: 650000,
    sizeSqm: 600,
    sample: true,
    summary: 'Titled 600 sqm residential parcel with direct road access in developed Dome Kboat.',
    description:
      'A rare, registered residential parcel situated in the established Dome Kboat neighbourhood, minutes from Achimota Golf Club and the N1 George Walker Bush Highway. Spanning a clear 600 square metres on elevated, well-drained terrain free from litigation or adverse encumbrances. Equipped with nearby electrical and municipal water mains connections and direct motorable road frontage. An outstanding site for an owner-occupier villa or private development within a serene community.',
    availability: 'Titled documentation ready for inspection',
    features: [
      '600 Square Metres (Approx. 70 x 100 ft)',
      'Fully Registered Lands Commission Title',
      'Clear, Well-Drained Terrain',
      'Direct Road Access',
      'Mains Electricity & Water at Boundary',
      'Established Residential Neighbourhood',
    ],
    artVariant: 'land',
    images: {
      main: '/images/properties/prop-4-main.svg',
      gallery: [
        '/images/properties/prop-4-survey.svg',
        '/images/properties/prop-4-road.svg',
        '/images/properties/prop-4-boundary.svg',
        '/images/properties/prop-4-elevation.svg',
      ],
    },
  },
  {
    id: '5',
    slug: 'serviced-office-suite-airport',
    title: 'Serviced Office Suite',
    area: 'Airport',
    locationDetails: 'Airport Residential Area, Accra',
    deal: 'rent',
    type: 'commercial',
    investment: false,
    priceGhs: 22000,
    rentPeriod: 'month',
    sizeSqm: 180,
    sample: true,
    summary: 'Corporate serviced office floor with fiber internet and executive boardroom in Airport Residential.',
    description:
      'An efficient, fully serviced commercial floor in the prestigious Airport Residential corporate corridor. Comprises 180 square metres of flexible open-plan floorplate alongside two executive glass-partitioned offices and a 10-person boardroom. Built to satisfy international corporate compliance, offering high-speed fiber internet infrastructure, acoustic ceiling tiles, VRF central air conditioning, dedicated male/female washrooms, and generous on-grade visitor parking.',
    availability: 'Available immediately for commercial lease',
    features: [
      '180 sqm Functional Workspace',
      'Executive Boardroom with AV Cabling',
      'High-Speed Fiber Infrastructure',
      'Dual Backup Generators (Uninterrupted)',
      'Central Climate Control (VRF)',
      'Access Control & CCTV Surveillance',
      'Designated Parking Bays',
      'Dedicated Cleaning Services Available',
    ],
    artVariant: 'office',
    images: {
      main: '/images/properties/prop-5-main.svg',
      gallery: [
        '/images/properties/prop-5-reception.svg',
        '/images/properties/prop-5-openplan.svg',
        '/images/properties/prop-5-boardroom.svg',
        '/images/properties/prop-5-facade.svg',
      ],
    },
  },
  {
    id: '6',
    slug: 'three-bedroom-townhouse-spintex',
    title: 'Three-Bedroom Townhouse',
    area: 'Spintex',
    locationDetails: 'Spintex (Regimanuel / Baatsona Corridor), Accra',
    deal: 'sale',
    type: 'residential',
    investment: true,
    priceGhs: 1350000,
    beds: 3,
    baths: 3,
    sizeSqm: 190,
    sample: true,
    summary: 'High-yield investment townhouse in gated Spintex development with strong rental demand.',
    description:
      'An attractive, low-maintenance three-bedroom townhouse purposefully positioned for property investors seeking dependable rental yields and capital growth. Located within a managed, gated community on the Spintex corridor with proven occupancy rates among corporate and diaspora tenants. Features three well-proportioned en-suite bedrooms, open-plan reception room, contemporary fitted kitchen, private courtyard patio, and communal amenities with 24-hour guard security.',
    availability: 'Turnkey condition — ready for tenant occupation',
    features: [
      'High Projected Rental Yield',
      '3 En-Suite Bedrooms',
      'Gated Community with Uniformed Security',
      'Private Courtyard Patio',
      'Fitted Kitchen with Modern Cabinetry',
      'Dedicated Parking for 2 Cars',
      'Comprehensive Asset Management Option',
      'Consistent Diaspora Tenant Demand',
    ],
    artVariant: 'house',
    images: {
      main: '/images/properties/prop-6-main.svg',
      gallery: [
        '/images/properties/prop-6-living.svg',
        '/images/properties/prop-6-kitchen.svg',
        '/images/properties/prop-6-patio.svg',
        '/images/properties/prop-6-master.svg',
      ],
    },
  },
];
