import { site } from "@/lib/site";

// Links for the contact details in lib/site.ts. A detail that is still a
// [PLACEHOLDER] gets no link.

const phoneDigits = site.contact.phone.replace(/\D/g, "");

/** Starts a call to the phone number. */
export const phoneHref =
  phoneDigits.length >= 7 ? `tel:${site.contact.phone.replace(/[^\d+]/g, "")}` : undefined;

/** Opens a new email to the contact address. */
export const emailHref = /^[^\s@[\]]+@[^\s@]+$/.test(site.contact.email)
  ? `mailto:${site.contact.email}`
  : undefined;

/**
 * WhatsApp number in international format, digits only. Uses the phone number,
 * so the phone must include the country code (e.g. +233). Replace this if
 * WhatsApp is on a different number.
 */
const whatsappNumber = phoneDigits;

const whatsappGreeting = `Hello ${site.name}, I'd like to ask about your services.`;

/** Opens a WhatsApp chat with a greeting already typed. */
export const whatsappHref =
  whatsappNumber.length >= 7
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappGreeting)}`
    : undefined;
