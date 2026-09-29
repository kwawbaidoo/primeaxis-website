import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "@/components/site/logo";
import { services } from "@/lib/services";
import { emailHref, phoneHref } from "@/lib/contact-links";
import { mainNav, site } from "@/lib/site";

const contactRows = [
  { icon: PhoneIcon, label: site.contact.phone, href: phoneHref },
  { icon: MailIcon, label: site.contact.email, href: emailHref },
  // { icon: MapPinIcon, label: site.contact.address },
  { icon: ClockIcon, label: site.contact.hours, href: undefined },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-on-navy">
      <div className="container-site grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.1fr_1.1fr] lg:py-18">
        <div className="flex flex-col gap-5">
          <Logo tone="dark" className="self-start" />
          <p className="max-w-xs text-[0.9375rem] leading-relaxed">
            {site.shortDescription}
          </p>
        </div>

        <FooterColumn title="Company">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-white">
                {item.title}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Services">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="hover:text-white"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Contact">
          {contactRows.map(({ icon: Icon, label, href }) => (
            <li key={label} className="flex items-start gap-2.5">
              <Icon className="mt-0.5 size-4.5 shrink-0 text-teal" aria-hidden />
              {href ? (
                <a href={href} className="wrap-break-word hover:text-white hover:underline">
                  {label}
                </a>
              ) : (
                label
              )}
            </li>
          ))}
        </FooterColumn>
      </div>

      <div className="container-site">
        <p className="border-t border-white/12 py-7 text-sm text-on-navy-muted">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[0.8125rem] font-semibold tracking-[0.14em] text-white uppercase">
        {title}
      </h2>
      <ul className="flex flex-col gap-3 text-[0.9375rem]">{children}</ul>
    </div>
  );
}
