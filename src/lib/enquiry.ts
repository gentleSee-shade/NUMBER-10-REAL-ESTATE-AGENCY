import { BRAND } from '../data/brand';

export interface EnquiryPayload {
  name: string;
  email?: string;
  phone?: string;
  interest: string;
  message: string;
  propertyTitle?: string;
  propertySlug?: string;
  honeypot?: string;
}

export interface EnquiryResult {
  success: boolean;
  error?: string;
  whatsappUrl: string;
}

/**
 * Validates Ghanaian and international phone numbers (e.g., 054 123 4567, 0541234567, +233 54 123 4567)
 */
export function isValidPhone(phone: string): boolean {
  if (!phone) return false;
  // Strip spaces, dashes, parentheses
  const cleaned = phone.replace(/[\s\-()]/g, '');
  // Matches local 10-digit Ghanaian mobile (e.g. 024..., 054..., 020...) or +233 international format
  return /^(\+?233|0)\d{9}$/.test(cleaned);
}

/**
 * Validates email format
 */
export function isValidEmail(email: string): boolean {
  if (!email) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/**
 * Formats the pre-filled WhatsApp message for quick team response
 */
export function buildWhatsAppEnquiryUrl(payload: EnquiryPayload): string {
  const parts: string[] = [
    `Hello Number 10 Real Estate,`,
    ``,
    `I would like to make an enquiry:`,
    `• Name: ${payload.name}`,
  ];

  if (payload.phone) {
    parts.push(`• Phone: ${payload.phone}`);
  }
  if (payload.email) {
    parts.push(`• Email: ${payload.email}`);
  }
  if (payload.propertyTitle) {
    parts.push(`• Property: ${payload.propertyTitle}`);
  }
  if (payload.interest) {
    parts.push(`• Interested in: ${payload.interest}`);
  }
  if (payload.message) {
    parts.push(``, `Message:`, payload.message);
  }

  const encoded = encodeURIComponent(parts.join('\n'));
  return `https://wa.me/${BRAND.phone.whatsapp}?text=${encoded}`;
}

/**
 * Direct WhatsApp URL for a specific property listing
 */
export function buildPropertyWhatsAppUrl(propertyTitle: string, propertySlug: string): string {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const text = `Hello Number 10 Real Estate, I am interested in "${propertyTitle}". Could you please provide more details or schedule an inspection? ${currentUrl}`;
  return `https://wa.me/${BRAND.phone.whatsapp}?text=${encodeURIComponent(text)}`;
}

/**
 * Simulated enquiry submission logic.
 *
 * NOTE FOR FUTURE BACKEND INTEGRATION:
 * When an email API (SendGrid, Postmark, AWS SES, or Cloud Run backend) is connected,
 * replace this asynchronous promise with the real API endpoint call, e.g.:
 *
 * async function sendEmailEnquiry(payload: EnquiryPayload) {
 *   const response = await fetch('/api/enquiry', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify(payload)
 *   });
 *   if (!response.ok) throw new Error('Failed to dispatch notification');
 *   return await response.json();
 * }
 */
export async function submitEnquiry(payload: EnquiryPayload): Promise<EnquiryResult> {
  // Check honeypot for bot detection
  if (payload.honeypot && payload.honeypot.trim().length > 0) {
    return {
      success: false,
      error: 'Bot submission detected.',
      whatsappUrl: '',
    };
  }

  // Simulate network latency (400ms)
  await new Promise((resolve) => setTimeout(resolve, 400));

  const whatsappUrl = buildWhatsAppEnquiryUrl(payload);

  return {
    success: true,
    whatsappUrl,
  };
}
