import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { SmartImage } from './SmartImage';
import { ArtVariant } from './PropertyArt';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  title: string;
  artVariant?: ArtVariant;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onIndexChange,
  title,
  artVariant = 'house',
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onIndexChange((currentIndex - 1 + images.length) % images.length);
      }
      if (e.key === 'ArrowRight') {
        onIndexChange((currentIndex + 1) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, currentIndex, images.length, onClose, onIndexChange]);

  if (!isOpen) return null;

  const currentImg = images[currentIndex];

  const handlePrev = () => {
    onIndexChange((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    onIndexChange((currentIndex + 1) % images.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0C1B3F]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Property Image Lightbox"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between text-white pb-3 border-b border-white/10">
        <div>
          <h4 className="font-serif font-bold text-lg">{title}</h4>
          <p className="text-xs text-white/60">
            Image {currentIndex + 1} of {images.length}
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Display Area */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden max-w-5xl mx-auto w-full">
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-[#0C1B3F]/80 hover:bg-[#14295A] text-white border border-white/20 transition-all cursor-pointer shadow-lg"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-[#0C1B3F]/80 hover:bg-[#14295A] text-white border border-white/20 transition-all cursor-pointer shadow-lg"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        <div className="max-w-4xl w-full max-h-[75vh] flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl">
          <SmartImage
            src={currentImg}
            alt={`${title} - photo ${currentIndex + 1}`}
            aspectRatio="16/11"
            variant={artVariant}
            className="w-full h-full max-h-[75vh]"
          />
        </div>
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2 overflow-x-auto py-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onIndexChange(idx)}
              className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                idx === currentIndex ? 'border-[#E6C770] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <SmartImage
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                aspectRatio="4/3"
                variant={artVariant}
                className="w-full h-full"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
