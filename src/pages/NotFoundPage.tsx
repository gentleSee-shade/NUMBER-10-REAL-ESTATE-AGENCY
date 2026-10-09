import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowRight } from 'lucide-react';
import { Logo } from '../components/Logo';
import { SEO } from '../components/SEO';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Page Not Found (404)"
        description="The page you were looking for does not exist on Number 10 Real Estate."
      />

      <div className="min-h-[75vh] flex items-center justify-center pt-28 pb-16 px-4 bg-[#F5F7FC]">
        <div className="max-w-lg w-full bg-white rounded-[16px] border border-[#E3E7F0] p-8 sm:p-10 text-center shadow-xl">
          <div className="h-12 w-20 mx-auto mb-4">
            <Logo variant="mark" tone="color" className="w-full h-full" />
          </div>

          <p className="eyebrow text-[#8A6516] mb-1">PAGE NOT FOUND</p>
          <h1 className="font-serif font-bold text-4xl text-[#0C1B3F] mb-3">
            404
          </h1>
          <p className="text-sm text-[#5B6683] leading-relaxed mb-8">
            The page you requested could not be found or has moved. Explore our properties in Accra or return to the home page.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[#14295A] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#0C1B3F] transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              to="/properties"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-[#14295A] text-[#14295A] font-semibold text-xs uppercase tracking-wider hover:bg-[#FAF7F0] transition-colors"
            >
              <Search className="w-4 h-4 text-[#C9A24A]" />
              <span>Explore Properties</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
