import React, { useId } from 'react';

export interface LogoProps {
  variant?: 'full' | 'mark' | 'horizontal';
  tone?: 'color' | 'light';
  className?: string;
  size?: number | string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  tone = 'color',
  className = '',
}) => {
  const uniqueId = useId().replace(/:/g, '');
  const gradId = `logo-g-${uniqueId}`;
  const clipId = `logo-c-${uniqueId}`;

  const navyFill = tone === 'light' ? '#FFFFFF' : '#14295A';
  const strokeWhite = tone === 'light' ? '#0C1B3F' : '#FFFFFF';

  if (variant === 'mark') {
    return (
      <svg
        viewBox="310 210 540 390"
        role="img"
        aria-label="Number 10 Mark"
        className={className}
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E6C770" />
            <stop offset="100%" stopColor="#B8892B" />
          </linearGradient>
          <clipPath id={clipId}>
            <rect x="500" y="440" width="300" height="170" />
          </clipPath>
        </defs>
        <path d="M452 298L548 224L552 300" fill="none" stroke={`url(#${gradId})`} strokeWidth="6" />
        <path d="M413 352L522 266L500 538L445 538L445 352Z" fill={navyFill} />
        <path
          fill={navyFill}
          fillRule="evenodd"
          stroke={strokeWhite}
          strokeWidth="8"
          d="M514 425a132 120 0 1 0 264 0a132 120 0 1 0-264 0Z M575 440a75 90 0 1 0 150 0a75 90 0 1 0-150 0Z"
        />
        <g clipPath={`url(#${clipId})`}>
          <circle cx="648" cy="470" r="118" fill={`url(#${gradId})`} />
          <circle cx="648" cy="452" r="96" fill={strokeWhite} />
        </g>
        <path
          d="M530 484L648 404L766 484"
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="20"
          strokeLinejoin="miter"
        />
        <g fill={`url(#${gradId})`}>
          <rect x="627" y="461" width="18" height="18" />
          <rect x="649" y="461" width="18" height="18" />
          <rect x="627" y="483" width="18" height="18" />
          <rect x="649" y="483" width="18" height="18" />
        </g>
        <path d="M325 582Q575 515 830 582Q575 548 325 582Z" fill={`url(#${gradId})`} />
      </svg>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-3 select-none ${className}`}>
        {/* Isolated Mark SVG */}
        <svg
          viewBox="310 210 540 390"
          role="img"
          aria-label="Number 10"
          className="h-10 w-auto flex-shrink-0"
        >
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E6C770" />
              <stop offset="100%" stopColor="#B8892B" />
            </linearGradient>
            <clipPath id={clipId}>
              <rect x="500" y="440" width="300" height="170" />
            </clipPath>
          </defs>
          <path d="M452 298L548 224L552 300" fill="none" stroke={`url(#${gradId})`} strokeWidth="6" />
          <path d="M413 352L522 266L500 538L445 538L445 352Z" fill={navyFill} />
          <path
            fill={navyFill}
            fillRule="evenodd"
            stroke={strokeWhite}
            strokeWidth="8"
            d="M514 425a132 120 0 1 0 264 0a132 120 0 1 0-264 0Z M575 440a75 90 0 1 0 150 0a75 90 0 1 0-150 0Z"
          />
          <g clipPath={`url(#${clipId})`}>
            <circle cx="648" cy="470" r="118" fill={`url(#${gradId})`} />
            <circle cx="648" cy="452" r="96" fill={strokeWhite} />
          </g>
          <path
            d="M530 484L648 404L766 484"
            fill="none"
            stroke={`url(#${gradId})`}
            strokeWidth="20"
            strokeLinejoin="miter"
          />
          <g fill={`url(#${gradId})`}>
            <rect x="627" y="461" width="18" height="18" />
            <rect x="649" y="461" width="18" height="18" />
            <rect x="627" y="483" width="18" height="18" />
            <rect x="649" y="483" width="18" height="18" />
          </g>
          <path d="M325 582Q575 515 830 582Q575 548 325 582Z" fill={`url(#${gradId})`} />
        </svg>

        {/* Wordmark and Subtitle */}
        <div className="flex flex-col justify-center leading-none">
          <span
            className={`font-serif font-bold text-xl tracking-tight transition-colors ${
              tone === 'light' ? 'text-white' : 'text-[#14295A]'
            }`}
          >
            NUMBER 10
          </span>
          <span className="font-sans font-semibold text-[9.5px] uppercase tracking-[0.16em] text-[#B8892B] mt-0.5">
            Real Estate &amp; Management
          </span>
        </div>
      </div>
    );
  }

  // Full variant (exact match to specification SVG)
  return (
    <svg
      viewBox="100 200 960 640"
      role="img"
      aria-label="Number 10 Real Estate & Management"
      className={className}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E6C770" />
          <stop offset="100%" stopColor="#B8892B" />
        </linearGradient>
        <clipPath id={clipId}>
          <rect x="500" y="440" width="300" height="170" />
        </clipPath>
      </defs>
      <path d="M452 298L548 224L552 300" fill="none" stroke={`url(#${gradId})`} strokeWidth="6" />
      <path d="M413 352L522 266L500 538L445 538L445 352Z" fill={navyFill} />
      <path
        fill={navyFill}
        fillRule="evenodd"
        stroke={strokeWhite}
        strokeWidth="8"
        d="M514 425a132 120 0 1 0 264 0a132 120 0 1 0-264 0Z M575 440a75 90 0 1 0 150 0a75 90 0 1 0-150 0Z"
      />
      <g clipPath={`url(#${clipId})`}>
        <circle cx="648" cy="470" r="118" fill={`url(#${gradId})`} />
        <circle cx="648" cy="452" r="96" fill={strokeWhite} />
      </g>
      <path
        d="M530 484L648 404L766 484"
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="20"
        strokeLinejoin="miter"
      />
      <g fill={`url(#${gradId})`}>
        <rect x="627" y="461" width="18" height="18" />
        <rect x="649" y="461" width="18" height="18" />
        <rect x="627" y="483" width="18" height="18" />
        <rect x="649" y="483" width="18" height="18" />
      </g>
      <path d="M325 582Q575 515 830 582Q575 548 325 582Z" fill={`url(#${gradId})`} />
      <text
        x="582"
        y="758"
        textAnchor="middle"
        fontFamily="'Playfair Display',Georgia,serif"
        fontWeight="700"
        fontSize="160"
        fill={navyFill}
        textLength="910"
        lengthAdjust="spacingAndGlyphs"
      >
        NUMBER 10
      </text>
      <path d="M122 807h70M972 807h70" stroke="#C9A24A" strokeWidth="4" />
      <text
        x="582"
        y="827"
        textAnchor="middle"
        fontFamily="Inter,Arial,sans-serif"
        fontWeight="600"
        fontSize="50"
        fill="#B8892B"
        textLength="740"
        lengthAdjust="spacingAndGlyphs"
      >
        REAL ESTATE &amp; MANAGEMENT
      </text>
    </svg>
  );
};
