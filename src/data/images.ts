export interface ImageSlot {
  id: string;
  src: string;
  alt: string;
  aspectRatio: '16/9' | '4/3' | '1/1' | '16/11' | '3/2';
  placeholderVariant: 'house' | 'villa' | 'apartment' | 'land' | 'office' | 'shopfront';
  descriptionForFutureAsset?: string;
}

export const IMAGE_SLOTS: Record<string, ImageSlot> = {
  hero: {
    id: 'hero',
    src: '/images/hero/hero-architectural.jpg',
    alt: 'Modernist architectural property in Accra, Ghana',
    aspectRatio: '16/11',
    placeholderVariant: 'villa',
    descriptionForFutureAsset: 'High-end contemporary Ghanaian architectural elevation with warm dusk lighting and tropical foliage.',
  },
  office: {
    id: 'office',
    src: '/images/office/office-interior.jpg',
    alt: 'Number 10 Real Estate office interior at Dome Kboat, Accra',
    aspectRatio: '4/3',
    placeholderVariant: 'office',
    descriptionForFutureAsset: 'Bright white-walled office, wooden desk, round wooden wall clock at ten o’clock, teal tufted stool, smiling team member at a laptop.',
  },
  shopfront: {
    id: 'shopfront',
    src: '/images/office/shopfront-exterior.jpg',
    alt: 'Number 10 Real Estate & Management shopfront at Dome Kboat',
    aspectRatio: '4/3',
    placeholderVariant: 'shopfront',
    descriptionForFutureAsset: 'Glass door with navy-and-gold vinyl listing services and brand values (Discretion, Precision, Reliability), QR codes.',
  },
};
