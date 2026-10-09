import React from 'react';

export type ArtVariant = 'house' | 'villa' | 'apartment' | 'land' | 'office' | 'shopfront';

interface PropertyArtProps {
  variant?: ArtVariant;
  className?: string;
  label?: string;
}

export const PropertyArt: React.FC<PropertyArtProps> = ({
  variant = 'house',
  className = '',
  label,
}) => {
  return (
    <div
      className={`relative w-full h-full bg-[#0C1B3F] overflow-hidden select-none flex items-center justify-center ${className}`}
      role="img"
      aria-label={label || `Architectural elevation rendering (${variant})`}
    >
      {/* Background architectural grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="arch-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2A4A8A" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#arch-grid)" />
      </svg>

      {/* Subtle Logo mark watermark at 6% opacity */}
      <svg
        viewBox="310 210 540 390"
        className="absolute w-3/4 h-3/4 opacity-[0.06] text-[#E6C770] pointer-events-none"
        fill="currentColor"
      >
        <path d="M413 352L522 266L500 538L445 538L445 352Z" />
        <circle cx="648" cy="470" r="118" />
      </svg>

      {/* Modernist Architectural Elevation based on variant */}
      <svg
        viewBox="0 0 800 600"
        className="relative w-full h-full text-white"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="gold-window" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFF2A3" />
            <stop offset="60%" stopColor="#E6C770" />
            <stop offset="100%" stopColor="#C9A24A" />
          </linearGradient>
          <linearGradient id="navy-wall" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1C356C" />
            <stop offset="100%" stopColor="#14295A" />
          </linearGradient>
          <linearGradient id="ground-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2A4A8A" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0C1B3F" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Ground baseline */}
        <line x1="80" y1="480" x2="720" y2="480" stroke="#2A4A8A" strokeWidth="2" strokeDasharray="6 4" />
        <rect x="80" y="482" width="640" height="20" fill="url(#ground-grad)" />

        {variant === 'villa' && (
          <g>
            {/* Main cantilever villa volume */}
            <rect x="180" y="240" width="440" height="240" fill="url(#navy-wall)" stroke="#2A4A8A" strokeWidth="2" />
            {/* Upper projecting floor */}
            <rect x="140" y="160" width="360" height="150" fill="#183168" stroke="#3A60A8" strokeWidth="1.5" />
            {/* Overhanging roof slab */}
            <rect x="120" y="150" width="400" height="12" fill="#2A4A8A" />
            {/* Architectural louvers / brise-soleil */}
            <line x1="160" y1="180" x2="160" y2="300" stroke="#3A60A8" strokeWidth="2" />
            <line x1="180" y1="180" x2="180" y2="300" stroke="#3A60A8" strokeWidth="2" />
            <line x1="200" y1="180" x2="200" y2="300" stroke="#3A60A8" strokeWidth="2" />
            {/* Daytime dark glazing */}
            <rect x="230" y="180" width="120" height="110" fill="#0C1B3F" stroke="#2A4A8A" strokeWidth="1.5" />
            <rect x="380" y="180" width="100" height="110" fill="#0C1B3F" stroke="#2A4A8A" strokeWidth="1.5" />
            {/* Ground floor glass living room */}
            <rect x="200" y="330" width="220" height="150" fill="#0F1830" stroke="#2A4A8A" strokeWidth="2" />
            <line x1="310" y1="330" x2="310" y2="480" stroke="#2A4A8A" strokeWidth="2" />
            {/* THE ONE WARM GOLD-LIT SIGNATURE WINDOW */}
            <rect x="450" y="330" width="150" height="150" fill="url(#gold-window)" rx="2" />
            {/* Warm window mullions */}
            <line x1="525" y1="330" x2="525" y2="480" stroke="#8A6516" strokeWidth="2" opacity="0.6" />
            <line x1="450" y1="405" x2="600" y2="405" stroke="#8A6516" strokeWidth="2" opacity="0.6" />
            {/* Terrace column */}
            <rect x="140" y="310" width="12" height="170" fill="#2A4A8A" />
            {/* Subtle palm frond silhouette */}
            <path d="M 640 480 Q 670 380 710 320 Q 690 350 670 410" stroke="#2A4A8A" strokeWidth="3" fill="none" />
            <path d="M 640 480 Q 620 400 590 360" stroke="#2A4A8A" strokeWidth="2" fill="none" opacity="0.5" />
          </g>
        )}

        {variant === 'house' && (
          <g>
            {/* Modern pitched gable roofline */}
            <polygon points="200,300 400,170 600,300" fill="#183168" stroke="#3A60A8" strokeWidth="2" />
            <polygon points="190,300 400,160 610,300" fill="none" stroke="#2A4A8A" strokeWidth="4" />
            <rect x="220" y="300" width="360" height="180" fill="url(#navy-wall)" stroke="#2A4A8A" strokeWidth="2" />
            {/* Front entrance porch */}
            <rect x="360" y="340" width="80" height="140" fill="#0C1B3F" stroke="#2A4A8A" strokeWidth="2" />
            <rect x="380" y="360" width="40" height="120" fill="#14295A" />
            <circle cx="412" cy="420" r="3" fill="#C9A24A" />
            {/* Left dark window */}
            <rect x="250" y="330" width="80" height="100" fill="#0C1B3F" stroke="#2A4A8A" strokeWidth="1.5" />
            <line x1="290" y1="330" x2="290" y2="430" stroke="#2A4A8A" strokeWidth="1" />
            {/* THE ONE WARM GOLD-LIT WINDOW */}
            <rect x="470" y="330" width="80" height="100" fill="url(#gold-window)" rx="2" />
            <line x1="510" y1="330" x2="510" y2="430" stroke="#8A6516" strokeWidth="1.5" opacity="0.6" />
            <line x1="470" y1="380" x2="550" y2="380" stroke="#8A6516" strokeWidth="1.5" opacity="0.6" />
            {/* Attic circular vent */}
            <circle cx="400" cy="245" r="22" fill="#0C1B3F" stroke="#2A4A8A" strokeWidth="2" />
            <circle cx="400" cy="245" r="8" fill="#C9A24A" opacity="0.5" />
          </g>
        )}

        {variant === 'apartment' && (
          <g>
            {/* Multi-story contemporary facade */}
            <rect x="220" y="120" width="360" height="360" fill="url(#navy-wall)" stroke="#2A4A8A" strokeWidth="2" />
            <rect x="200" y="110" width="400" height="12" fill="#2A4A8A" />
            {/* Balconies */}
            <rect x="240" y="160" width="140" height="8" fill="#3A60A8" />
            <rect x="240" y="240" width="140" height="8" fill="#3A60A8" />
            <rect x="240" y="320" width="140" height="8" fill="#3A60A8" />
            {/* Balcony glass railings */}
            <rect x="240" y="168" width="140" height="35" fill="#0C1B3F" stroke="#2A4A8A" strokeWidth="1" opacity="0.8" />
            <rect x="240" y="248" width="140" height="35" fill="#0C1B3F" stroke="#2A4A8A" strokeWidth="1" opacity="0.8" />
            <rect x="240" y="328" width="140" height="35" fill="#0C1B3F" stroke="#2A4A8A" strokeWidth="1" opacity="0.8" />
            {/* Dark residential windows */}
            <rect x="420" y="150" width="120" height="60" fill="#0C1B3F" stroke="#2A4A8A" strokeWidth="1.5" />
            <rect x="420" y="310" width="120" height="60" fill="#0C1B3F" stroke="#2A4A8A" strokeWidth="1.5" />
            {/* THE ONE WARM GOLD-LIT APARTMENT WINDOW */}
            <rect x="420" y="230" width="120" height="60" fill="url(#gold-window)" rx="2" />
            <line x1="480" y1="230" x2="480" y2="290" stroke="#8A6516" strokeWidth="2" opacity="0.6" />
            {/* Entrance lobby */}
            <rect x="330" y="410" width="140" height="70" fill="#0C1B3F" stroke="#3A60A8" strokeWidth="2" />
            <line x1="400" y1="410" x2="400" y2="480" stroke="#3A60A8" strokeWidth="1.5" />
          </g>
        )}

        {variant === 'land' && (
          <g>
            {/* Topographical survey contour lines */}
            <path d="M 120 420 Q 300 360 480 390 T 700 340" fill="none" stroke="#2A4A8A" strokeWidth="2" strokeDasharray="8 6" />
            <path d="M 120 370 Q 280 320 460 340 T 700 290" fill="none" stroke="#2A4A8A" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.7" />
            <path d="M 120 320 Q 260 270 440 290 T 700 240" fill="none" stroke="#2A4A8A" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
            {/* Survey boundary quadrilateral */}
            <polygon points="240,430 320,260 560,280 520,440" fill="#14295A" fillOpacity="0.4" stroke="#C9A24A" strokeWidth="2.5" />
            {/* Corner boundary beacons / pegs */}
            <circle cx="240" cy="430" r="7" fill="#E6C770" stroke="#0C1B3F" strokeWidth="2" />
            <circle cx="320" cy="260" r="7" fill="#E6C770" stroke="#0C1B3F" strokeWidth="2" />
            <circle cx="560" cy="280" r="7" fill="#E6C770" stroke="#0C1B3F" strokeWidth="2" />
            <circle cx="520" cy="440" r="7" fill="#E6C770" stroke="#0C1B3F" strokeWidth="2" />
            {/* Dimension notation */}
            <text x="400" y="370" textAnchor="middle" fill="#E6C770" fontSize="20" fontFamily="Inter, sans-serif" fontWeight="600" letterSpacing="0.1em">
              600 SQM · TITLED
            </text>
            <text x="400" y="400" textAnchor="middle" fill="#5B6683" fontSize="13" fontFamily="Inter, sans-serif">
              DOME KBOAT ENCLAVE
            </text>
            {/* North arrow compass indicator */}
            <g transform="translate(620, 180)">
              <circle cx="0" cy="0" r="28" fill="#14295A" stroke="#2A4A8A" strokeWidth="1.5" />
              <polygon points="0,-20 6,4 0,0" fill="#E6C770" />
              <polygon points="0,-20 -6,4 0,0" fill="#B8892B" />
              <polygon points="0,20 6,-4 0,0" fill="#2A4A8A" />
              <polygon points="0,20 -6,-4 0,0" fill="#1C356C" />
              <text x="0" y="-23" textAnchor="middle" fill="#E6C770" fontSize="11" fontWeight="700">N</text>
            </g>
          </g>
        )}

        {variant === 'office' && (
          <g>
            {/* Corporate modern building elevation */}
            <rect x="180" y="160" width="440" height="320" fill="url(#navy-wall)" stroke="#2A4A8A" strokeWidth="2" />
            {/* Grid curtain wall windows */}
            <rect x="220" y="200" width="100" height="60" fill="#0C1B3F" stroke="#2A4A8A" strokeWidth="1.5" />
            <rect x="350" y="200" width="100" height="60" fill="#0C1B3F" stroke="#2A4A8A" strokeWidth="1.5" />
            <rect x="480" y="200" width="100" height="60" fill="#0C1B3F" stroke="#2A4A8A" strokeWidth="1.5" />
            <rect x="220" y="290" width="100" height="60" fill="#0C1B3F" stroke="#2A4A8A" strokeWidth="1.5" />
            {/* THE ONE WARM GOLD-LIT BOARDROOM WINDOW */}
            <rect x="350" y="290" width="100" height="60" fill="url(#gold-window)" rx="2" />
            <line x1="400" y1="290" x2="400" y2="350" stroke="#8A6516" strokeWidth="1.5" opacity="0.6" />
            <rect x="480" y="290" width="100" height="60" fill="#0C1B3F" stroke="#2A4A8A" strokeWidth="1.5" />
            {/* Commercial entry canopy */}
            <rect x="300" y="400" width="200" height="10" fill="#C9A24A" />
            <rect x="330" y="410" width="140" height="70" fill="#0F1830" stroke="#2A4A8A" strokeWidth="2" />
            <line x1="400" y1="410" x2="400" y2="480" stroke="#2A4A8A" strokeWidth="2" />
          </g>
        )}

        {variant === 'shopfront' && (
          <g>
            {/* Dome Kboat shopfront elevation */}
            <rect x="180" y="160" width="440" height="320" fill="url(#navy-wall)" stroke="#2A4A8A" strokeWidth="2" />
            {/* Facade fascia banner */}
            <rect x="180" y="160" width="440" height="70" fill="#0C1B3F" stroke="#2A4A8A" strokeWidth="2" />
            <text x="400" y="198" textAnchor="middle" fill="#E6C770" fontSize="16" fontFamily="'Playfair Display', Georgia, serif" fontWeight="700">
              NUMBER 10 REAL ESTATE LTD
            </text>
            <text x="400" y="218" textAnchor="middle" fill="#B8892B" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600" letterSpacing="0.18em">
              DISCRETION · PRECISION · RELIABILITY
            </text>
            {/* Glass entry door and flanking windows */}
            <rect x="220" y="260" width="100" height="220" fill="#0C1B3F" stroke="#2A4A8A" strokeWidth="2" />
            <line x1="220" y1="360" x2="320" y2="360" stroke="#2A4A8A" strokeWidth="1.5" />
            {/* Center entrance door with gold lit aperture */}
            <rect x="350" y="260" width="100" height="220" fill="url(#gold-window)" rx="2" stroke="#8A6516" strokeWidth="2" />
            {/* Door push handle */}
            <rect x="430" y="340" width="6" height="50" fill="#14295A" rx="2" />
            <rect x="480" y="260" width="100" height="220" fill="#0C1B3F" stroke="#2A4A8A" strokeWidth="2" />
            <line x1="480" y1="360" x2="580" y2="360" stroke="#2A4A8A" strokeWidth="1.5" />
          </g>
        )}
      </svg>

      {/* Modernist Architectural Badge */}
      <div className="absolute bottom-3 left-3 bg-[#0C1B3F]/90 backdrop-blur-sm border border-[#2A4A8A]/50 px-2.5 py-1 rounded text-[11px] font-mono uppercase tracking-wider text-[#E6C770] flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#E6C770] animate-pulse" />
        <span>N°10 ARCHITECTURAL ELEVATION</span>
      </div>
    </div>
  );
};
