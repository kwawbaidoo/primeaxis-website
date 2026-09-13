export const site = {
  name: "PrimeAxis Solutions",
  tagline: "Software, Design & IT Services",
  description:
    "PrimeAxis Solutions builds websites, custom software and mobile apps, designs and prints brand materials, manages social media, trains teams in IT skills and supplies IT accessories.",
  shortDescription: "Software, design and IT services for growing businesses.",
  // Placeholders until the real contact details are confirmed.
  contact: {
    phone: "[PHONE NUMBER]",
    email: "[EMAIL ADDRESS]",
    address: "[OFFICE ADDRESS]",
    hours: "[BUSINESS HOURS]",
    serviceArea: "[CITY / REGION]",
    responseTime: "[RESPONSE TIME]",
  },
};

export const mainNav = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
];

export function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}
