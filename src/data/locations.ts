export interface LocationOption {
  value: string;
  label: string;
}

export const LOCATIONS: LocationOption[] = [
  { value: 'all', label: 'Accra - all areas' },
  { value: 'East Legon', label: 'East Legon' },
  { value: 'Airport', label: 'Airport Residential' },
  { value: 'Cantonments', label: 'Cantonments' },
  { value: 'Spintex', label: 'Spintex' },
  { value: 'Dome', label: 'Dome (Dome Kboat)' },
  { value: 'Other', label: 'Other Accra Areas' },
];

export const PROPERTY_TYPES = [
  { value: 'all', label: 'All Property Types' },
  { value: 'residential', label: 'Residential' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'land', label: 'Land' },
  { value: 'other', label: 'Other' },
] as const;
