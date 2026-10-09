export interface ServiceItem {
  id: string;
  title: string;
  iconName: 'Home' | 'Building2' | 'Sparkles' | 'Truck' | 'Armchair' | 'Hammer' | 'Wrench' | 'Key';
  shortDescription: string;
  longDescription: string;
  confirmed: boolean;
}

export const SERVICES: ServiceItem[] = [
  // Confirmed services from shopfront signage
  {
    id: 'sales-rentals',
    title: 'Sales and Rental of Housing Units',
    iconName: 'Home',
    shortDescription: 'Find, view and secure the right home to buy or rent.',
    longDescription: 'Whether you are seeking a prime family home, an executive apartment, or a rental residence in Accra, our agency assists with tailored property search, scheduled viewings, due diligence, and negotiation.',
    confirmed: true,
  },
  {
    id: 'asset-management',
    title: 'Asset Management',
    iconName: 'Building2',
    shortDescription: 'Looking after your property so it keeps its value.',
    longDescription: 'Protecting capital appreciation and continuous tenancy for property owners in Accra. We oversee tenant liaison, facility checks, rent collections, and maintenance coordination with precision and discretion.',
    confirmed: true,
  },
  {
    id: 'cleaning-service',
    title: 'Cleaning Service',
    iconName: 'Sparkles',
    shortDescription: 'Professional cleaning for homes and properties.',
    longDescription: 'Comprehensive, high-standard cleaning solutions for residential units, commercial offices, end-of-tenancy deep cleans, and handover preparations across Greater Accra.',
    confirmed: true,
  },
  {
    id: 'logistics',
    title: 'Logistics',
    iconName: 'Truck',
    shortDescription: 'Practical support for moving and delivery needs.',
    longDescription: 'Dependable moving and transport coordination for clients relocating to new homes, transporting furniture, or handling property equipment logistics with care.',
    confirmed: true,
  },
  {
    id: 'interior-design',
    title: 'Interior Design',
    iconName: 'Armchair',
    shortDescription: 'Thoughtful interiors that make a property feel finished.',
    longDescription: 'Bespoke aesthetic and spatial planning to transform bare residences or commercial suites into elevated, functional spaces tailored to Ghanaian lifestyles and contemporary tastes.',
    confirmed: true,
  },

  // Unconfirmed services (kept in manifest, NEVER rendered until confirmed: true)
  {
    id: 'civil-works',
    title: 'Civil Works',
    iconName: 'Hammer',
    shortDescription: 'Civil engineering and structural works.',
    longDescription: 'Structural planning and civil site works.',
    confirmed: false,
  },
  {
    id: 'industrial-plumbing',
    title: 'Industrial Plumbing',
    iconName: 'Wrench',
    shortDescription: 'Commercial and industrial pipework systems.',
    longDescription: 'Plumbing installations and maintenance.',
    confirmed: false,
  },
  {
    id: 'property-management',
    title: 'Property Management',
    iconName: 'Key',
    shortDescription: 'End-to-end administration and tenant relations.',
    longDescription: 'Turnkey property administration.',
    confirmed: false,
  },
];

/**
 * Filtered helper that only returns confirmed services
 */
export const CONFIRMED_SERVICES = SERVICES.filter((s) => s.confirmed);
