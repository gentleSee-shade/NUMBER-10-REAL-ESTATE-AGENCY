import React, { useState } from 'react';
import { PropertyArt, ArtVariant } from './PropertyArt';

interface SmartImageProps {
  src?: string;
  alt: string;
  aspectRatio?: '4/3' | '16/9' | '16/11' | '1/1' | '3/2';
  variant?: ArtVariant;
  className?: string;
  priority?: boolean;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  aspectRatio = '4/3',
  variant = 'house',
  className = '',
  priority = false,
}) => {
  // If no src is provided or image loading fails, render PropertyArt
  const [hasError, setHasError] = useState(!src);

  const aspectClasses = {
    '4/3': 'aspect-[4/3]',
    '16/9': 'aspect-[16/9]',
    '16/11': 'aspect-[16/11]',
    '1/1': 'aspect-square',
    '3/2': 'aspect-[3/2]',
  }[aspectRatio] || 'aspect-[4/3]';

  if (hasError || !src) {
    return (
      <div className={`w-full overflow-hidden ${aspectClasses} ${className}`}>
        <PropertyArt variant={variant} label={alt} />
      </div>
    );
  }

  return (
    <div className={`relative w-full overflow-hidden ${aspectClasses} ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        onError={() => setHasError(true)}
        className="w-full h-full object-cover transition-transform duration-500 ease-out"
      />
    </div>
  );
};
