export const site = {
  name: "PrimeAxis Solutions",
  tagline: "Software, Design & IT Services",
  description:
    "PrimeAxis Solutions builds websites, custom software and mobile apps, designs and prints brand materials, manages social media, trains teams in IT skills and supplies IT accessories.",
  shortDescription: "Software, design and IT services for growing businesses.",
  // Placeholders until the real contact details are confirmed.
  contact: {
    phone: "+233 242 607 095",
    email: "primeaxis.solutions@gmail.com",
    address: "[OFFICE ADDRESS]",
    hours: "24/7",
    serviceArea: "Ghana",
    responseTime: "24 hours",
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
