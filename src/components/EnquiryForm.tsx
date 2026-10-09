import React, { useState } from 'react';
import { Send, MessageCircle, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { submitEnquiry, isValidPhone, isValidEmail } from '../lib/enquiry';

interface EnquiryFormProps {
  propertyTitle?: string;
  propertySlug?: string;
  defaultInterest?: string;
  compact?: boolean;
  className?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  propertyTitle,
  propertySlug,
  defaultInterest = 'Buying',
  compact = false,
  className = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState(defaultInterest);
  const [message, setMessage] = useState(
    propertyTitle ? `I would like to enquire about ${propertyTitle}. Please provide further details.` : ''
  );
  const [honeypot, setHoneypot] = useState('');

  // Validation errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }

    const hasPhone = phone.trim().length > 0;
    const hasEmail = email.trim().length > 0;

    if (!hasPhone && !hasEmail) {
      newErrors.contact = 'Please provide either a telephone number or email address.';
    } else {
      if (hasPhone && !isValidPhone(phone)) {
        newErrors.phone = 'Please enter a valid phone number (e.g. 054 137 6805 or +233 54 137 6805).';
      }
      if (hasEmail && !isValidEmail(email)) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitEnquiry({
        name,
        phone,
        email,
        interest,
        message,
        propertyTitle,
        propertySlug,
        honeypot,
      });

      if (result.success) {
        setWhatsappUrl(result.whatsappUrl);
        setSubmitSuccess(true);
      } else {
        setErrors({ form: result.error || 'Submission could not be completed.' });
      }
    } catch {
      setErrors({ form: 'An unexpected error occurred. Please call or WhatsApp us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-[#FAF7F0] border border-[#C9A24A]/40 rounded-[16px] p-6 text-center animate-in fade-in duration-300">
        <div className="w-12 h-12 rounded-full bg-[#1F7A5A]/10 text-[#1F7A5A] flex items-center justify-center mx-auto mb-3">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="font-serif font-bold text-xl text-[#0C1B3F]">
          Enquiry Received
        </h3>
        <p className="text-sm text-[#0F1830] mt-2 mb-4 leading-relaxed max-w-md mx-auto">
          Thanks, <strong className="font-semibold">{name}</strong>. Your enquiry is ready. Send it on WhatsApp to reach the team fastest.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1F7A5A] hover:bg-[#1a664b] text-white font-semibold text-sm transition-all active:scale-95 shadow-md shadow-[#1F7A5A]/20"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Send via WhatsApp to Number 10</span>
        </a>

        <div className="mt-4 pt-3 border-t border-[#E3E7F0]">
          <button
            type="button"
            onClick={() => {
              setSubmitSuccess(false);
              setMessage('');
            }}
            className="text-xs text-[#5B6683] hover:text-[#0C1B3F] underline"
          >
            Submit another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`} noValidate>
      {/* Honeypot field (hidden from screen and CSS) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website-hp">Leave this empty</label>
        <input
          id="website-hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {errors.form && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errors.form}</span>
        </div>
      )}

      {/* Full Name */}
      <div>
        <label htmlFor="enquiry-name" className="block text-xs font-semibold text-[#0F1830] mb-1">
          Full Name <span className="text-[#8A6516]">*</span>
        </label>
        <input
          id="enquiry-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Samuel Mensah"
          className={`w-full h-11 px-3.5 rounded-[10px] border bg-white text-sm text-[#0F1830] transition-colors focus:outline-none ${
            errors.name ? 'border-red-500 bg-red-50/20' : 'border-[#E3E7F0] focus:border-[#2A4A8A]'
          }`}
        />
        {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="enquiry-phone" className="block text-xs font-semibold text-[#0F1830] mb-1">
          Phone Number <span className="text-[#5B6683] font-normal">(WhatsApp or voice)</span>
        </label>
        <input
          id="enquiry-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="e.g. 054 137 6805 or +233 54 137 6805"
          className={`w-full h-11 px-3.5 rounded-[10px] border bg-white text-sm text-[#0F1830] transition-colors focus:outline-none ${
            errors.phone ? 'border-red-500 bg-red-50/20' : 'border-[#E3E7F0] focus:border-[#2A4A8A]'
          }`}
        />
        {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
      </div>

      {/* Email Address */}
      <div>
        <label htmlFor="enquiry-email" className="block text-xs font-semibold text-[#0F1830] mb-1">
          Email Address <span className="text-[#5B6683] font-normal">(for diaspora &amp; documentation)</span>
        </label>
        <input
          id="enquiry-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="e.g. samuel@example.com"
          className={`w-full h-11 px-3.5 rounded-[10px] border bg-white text-sm text-[#0F1830] transition-colors focus:outline-none ${
            errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#E3E7F0] focus:border-[#2A4A8A]'
          }`}
        />
        {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
      </div>

      {errors.contact && (
        <p className="text-red-600 text-xs bg-red-50 p-2 rounded border border-red-200">
          {errors.contact}
        </p>
      )}

      {/* Interest Selector */}
      {!compact && (
        <div>
          <label htmlFor="enquiry-interest" className="block text-xs font-semibold text-[#0F1830] mb-1">
            I am interested in
          </label>
          <select
            id="enquiry-interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="w-full h-11 px-3.5 rounded-[10px] border border-[#E3E7F0] bg-white text-sm text-[#0F1830] focus:border-[#2A4A8A] focus:outline-none cursor-pointer"
          >
            <option value="Buying">Buying a property</option>
            <option value="Renting">Renting a residence or office</option>
            <option value="Investing">Property Investment in Accra</option>
            <option value="Marketing my property">Marketing my property</option>
            <option value="Asset Management">Asset Management Service</option>
            <option value="Cleaning Service">Cleaning Service</option>
            <option value="Logistics">Logistics &amp; Moving</option>
            <option value="Interior Design">Interior Design</option>
            <option value="Other">Other general enquiry</option>
          </select>
        </div>
      )}

      {/* Message */}
      <div>
        <label htmlFor="enquiry-message" className="block text-xs font-semibold text-[#0F1830] mb-1">
          Message or Requirements
        </label>
        <textarea
          id="enquiry-message"
          rows={compact ? 3 : 4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Please describe your property requirements, timeline, or any specific questions..."
          className="w-full p-3.5 rounded-[10px] border border-[#E3E7F0] bg-white text-sm text-[#0F1830] focus:border-[#2A4A8A] focus:outline-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-12 rounded-full bg-[#14295A] hover:bg-[#0C1B3F] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md shadow-[#14295A]/15 disabled:opacity-50 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Processing...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Enquiry</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-[#5B6683] text-center pt-1">
        Your enquiry is handled with complete discretion. We never share your details.
      </p>
    </form>
  );
};
