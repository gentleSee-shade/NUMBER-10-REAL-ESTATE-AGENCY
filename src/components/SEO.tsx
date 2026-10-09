import React, { useEffect } from 'react';
import { BRAND } from '../data/brand';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  schema?: Record<string, unknown>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = 'Number 10 Real Estate & Management – Professional real estate agency in Dome Kboat, Accra, Ghana. Residential, commercial, land sales, rentals, and asset management.',
  canonicalPath = '',
  schema,
}) => {
  const fullTitle = title
    ? `${title} | ${BRAND.name}`
    : `${BRAND.name} | Real Estate Agency in Accra, Ghana`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update OpenGraph
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Default RealEstateAgent Schema
    const baseAgentSchema = {
      '@context': 'https://schema.org',
      '@type': 'RealEstateAgent',
      name: BRAND.legalName,
      alternateName: BRAND.name,
      description: 'Professional real estate agency in Dome Kboat, Accra, Ghana.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: BRAND.address.line1,
        addressLocality: BRAND.address.city,
        addressCountry: 'GH',
      },
      telephone: BRAND.phone.international,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: BRAND.rating.score.toString(),
        reviewCount: BRAND.rating.count.toString(),
      },
      priceRange: 'GH₵₵₵',
      knowsAbout: [
        'Real estate agency Accra',
        'Properties for sale in Accra',
        'Houses for sale in Accra',
        'Property investment Ghana',
        'Commercial property Accra',
        'Land for sale Accra',
      ],
    };

    const finalSchema = schema || baseAgentSchema;

    let scriptTag = document.getElementById('json-ld-schema') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(finalSchema);
  }, [fullTitle, description, schema, canonicalPath]);

  return null;
};
