// Shared site-wide constants — imported by layout, home, and the
// dedicated /about, /contact, /pricing pages so contact details live
// in exactly one place.

export const CALENDLY_URL = "https://calendly.com/znthsolutions/30min";
export const CONTACT_EMAIL = "hello@zenithai.ca";
export const CONTACT_PHONES = [
  { display: "(613) 668-6851", tel: "+16136686851" },
] as const;
export const CONTACT_FORM_ACTION = "mailto:hello@zenithai.ca";

export const BUSINESS_ADDRESS = {
  streetAddress: "5516 Osgoode Main St, Unit 101",
  locality: "Osgoode",
  region: "ON",
  postalCode: "K0A 2W0",
  countryCode: "CA",
  googleMapsUrl:
    "https://maps.google.com/?q=5516+Osgoode+Main+St+Unit+101+Osgoode+ON+K0A+2W0",
} as const;

export const SITE_URL = "https://zenithai.ca";
