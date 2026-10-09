import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { BRAND } from '../data/brand';
import { EnquiryForm } from '../components/EnquiryForm';
import { SEO } from '../components/SEO';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const prefilledInterest = searchParams.get('interest') || 'Buying';

  return (
    <>
      <SEO
        title="Contact Number 10 Real Estate"
        description="Get in touch with Number 10 Real Estate & Management in Dome Kboat, Accra. Call +233 54 137 6805, send an enquiry, or message directly on WhatsApp."
      />

      {/* Slim Navy Header Banner */}
      <section className="bg-[#0C1B3F] text-white pt-28 pb-16 border-b border-[#14295A]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-[#E6C770] mb-2">DIRECT CONTACT</p>
          <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white max-w-2xl">
            Let's talk about your next property.
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-xl mt-4 leading-relaxed">
            Whether you're searching for a property, exploring an investment opportunity, or simply have a question, our team is ready to help.
          </p>
        </div>
      </section>

      {/* Contact Information & Main Form */}
      <section className="bg-white py-16 sm:py-20 border-b border-[#E3E7F0]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Contact Cards & Channels (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="eyebrow text-[#8A6516] mb-1">REACH US DIRECTLY</span>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0C1B3F]">
                  We respond promptly.
                </h2>
                <p className="text-sm text-[#5B6683] mt-2 leading-relaxed">
                  Our agency team is available for phone consultations, scheduled office meetings in Dome Kboat, and WhatsApp messaging.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4 pt-2">
                {/* Office Location Card */}
                <div className="p-6 rounded-[16px] bg-[#FAF7F0] border border-[#E3E7F0] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E8EDF7] text-[#14295A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#0C1B3F]">
                      {BRAND.legalName}
                    </h3>
                    <p className="text-sm text-[#0F1830] mt-1">
                      {BRAND.address.full}
                    </p>
                    <span className="text-xs text-[#5B6683] mt-0.5 block">
                      Greater Accra, Ghana
                    </span>
                  </div>
                </div>

                {/* Telephone Card */}
                <div className="p-6 rounded-[16px] bg-[#FAF7F0] border border-[#E3E7F0] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E8EDF7] text-[#14295A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif font-bold text-base text-[#0C1B3F]">
                      Direct Telephone Line
                    </h3>
                    <p className="text-sm text-[#0F1830] mt-1 font-mono">
                      {BRAND.phone.international}
                    </p>
                    <div className="mt-3">
                      <a
                        href={`tel:${BRAND.phone.tel}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#14295A] hover:underline"
                      >
                        <span>Click to call now &gt;</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Quick Channel Card */}
                <div className="p-6 rounded-[16px] bg-[#1F7A5A]/5 border border-[#1F7A5A]/20 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1F7A5A] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif font-bold text-base text-[#0C1B3F]">
                      WhatsApp Direct Chat
                    </h3>
                    <p className="text-xs text-[#5B6683] mt-1 leading-relaxed">
                      Recommended for fast property enquiries, photo exchanges, and diaspora clients.
                    </p>
                    <div className="mt-3">
                      <a
                        href={BRAND.social.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1F7A5A] hover:bg-[#1a664b] text-white text-xs font-semibold transition-all shadow-sm cursor-pointer"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="p-4 rounded-xl bg-[#E8EDF7] text-[#14295A] flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 flex-shrink-0 text-[#14295A]" />
                  <p className="text-xs font-medium">
                    Strict confidentiality guaranteed. Discretion · Precision · Reliability.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Full Enquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-[#FAF7F0]/50 rounded-[16px] border border-[#E3E7F0] p-7 sm:p-9 shadow-lg">
                <span className="eyebrow text-[#8A6516] mb-1">ONLINE ENQUIRY</span>
                <h2 className="font-serif font-bold text-2xl text-[#0C1B3F] mb-2">
                  Send an Enquiry
                </h2>
                <p className="text-sm text-[#5B6683] mb-6 leading-relaxed">
                  Fill in your details below and our team will get back to you promptly with tailored recommendations.
                </p>

                <EnquiryForm defaultInterest={prefilledInterest} compact={false} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Google Map of Dome Kboat, Accra */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="eyebrow text-[#8A6516] mb-1">INTERACTIVE MAP</span>
              <h2 className="font-serif font-bold text-3xl text-[#0C1B3F]">
                Find us at Dome Kboat, Accra
              </h2>
              <p className="text-sm text-[#5B6683] mt-1">
                Centrally located with convenient access to Achimota, Christian Village, and the N1 Highway.
              </p>
            </div>

            <a
              href={BRAND.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#14295A] text-[#14295A] hover:bg-[#14295A] hover:text-white text-xs font-semibold uppercase tracking-wider transition-all self-start sm:self-auto cursor-pointer"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="rounded-[16px] overflow-hidden border border-[#E3E7F0] shadow-md h-[400px] sm:h-[480px] bg-[#FAF7F0] relative">
            <iframe
              src={BRAND.mapsEmbedUrl}
              title="Number 10 Real Estate Ltd Office Location Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};
