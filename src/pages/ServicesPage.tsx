import React from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Building2,
  Sparkles,
  Truck,
  Armchair,
  ArrowRight,
  MessageCircle,
  Phone,
  CheckCircle,
} from 'lucide-react';
import { CONFIRMED_SERVICES } from '../data/services';
import { BRAND } from '../data/brand';
import { SEO } from '../components/SEO';

export const ServicesPage: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-8 h-8 text-[#14295A]" />;
      case 'Building2':
        return <Building2 className="w-8 h-8 text-[#14295A]" />;
      case 'Sparkles':
        return <Sparkles className="w-8 h-8 text-[#14295A]" />;
      case 'Truck':
        return <Truck className="w-8 h-8 text-[#14295A]" />;
      case 'Armchair':
        return <Armchair className="w-8 h-8 text-[#14295A]" />;
      default:
        return <Home className="w-8 h-8 text-[#14295A]" />;
    }
  };

  return (
    <>
      <SEO
        title="Real Estate & Asset Management Services"
        description="Comprehensive real estate solutions in Accra: housing sales & rentals, asset management, cleaning services, logistics, and interior design."
      />

      {/* Slim Navy Header Banner */}
      <section className="bg-[#0C1B3F] text-white pt-28 pb-16 border-b border-[#14295A]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-[#E6C770] mb-2">SERVICES &amp; CAPABILITIES</p>
          <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white max-w-2xl">
            Real estate services shaped around your priorities.
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-xl mt-4 leading-relaxed">
            From discovering prime Accra residences to protecting long-term asset value, Number 10 provides dependable end-to-end management.
          </p>
        </div>
      </section>

      {/* Confirmed Services: Larger Cards Grid */}
      <section className="bg-white py-16 sm:py-20 border-b border-[#E3E7F0]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CONFIRMED_SERVICES.map((service, idx) => (
              <div
                key={service.id}
                className="bg-[#FAF7F0]/40 rounded-[16px] border border-[#E3E7F0] p-8 flex flex-col justify-between hover:shadow-xl hover:border-[#14295A]/40 transition-all group"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#E8EDF7] flex items-center justify-center">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="font-mono text-xs text-[#5B6683] font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h2 className="font-serif font-bold text-2xl text-[#0C1B3F] group-hover:text-[#14295A] transition-colors">
                    {service.title}
                  </h2>

                  <p className="text-sm text-[#0F1830] font-medium leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <p className="text-sm text-[#5B6683] leading-relaxed">
                    {service.longDescription}
                  </p>
                </div>

                <div className="pt-8 mt-6 border-t border-[#E3E7F0] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#8A6516] uppercase tracking-wider">
                    {BRAND.values.join(' · ')}
                  </span>

                  <Link
                    to={`/contact?interest=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#14295A] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#0C1B3F] transition-all"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Callout Band */}
      <section className="bg-[#F5F7FC] py-16 border-b border-[#E3E7F0]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[16px] border border-[#E3E7F0] p-8 sm:p-12 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="eyebrow text-[#8A6516]">CUSTOM CONSULTATION</span>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#0C1B3F]">
                Have a unique property requirement in Accra?
              </h3>
              <p className="text-sm text-[#5B6683] leading-relaxed">
                Whether you need dedicated diaspora representation, portfolio management for multiple rental units, or specialized tenancy oversight, we tailor our service to your exact brief.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 self-start lg:self-auto flex-shrink-0">
              <a
                href={BRAND.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#1F7A5A] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#1a664b] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp the Team</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full border border-[#14295A] text-[#14295A] font-semibold text-xs uppercase tracking-wider hover:bg-[#FAF7F0] transition-colors"
              >
                Send an Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
