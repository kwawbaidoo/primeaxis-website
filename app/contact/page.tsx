import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { PageEyebrow, PageHeader } from "@/components/site/page-header";
import { services } from "@/lib/services";
import { pageMetadata } from "@/lib/metadata";
import { emailHref, phoneHref } from "@/lib/contact-links";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: `Tell ${site.name} about your project and we'll reply with a quote.`,
  path: "/contact",
});

const details = [
  { icon: PhoneIcon, label: "Phone", value: site.contact.phone, href: phoneHref },
  { icon: MailIcon, label: "Email", value: site.contact.email, href: emailHref },
  // { icon: MapPinIcon, label: "Office", value: site.contact.address || "N/A" },
  { icon: ClockIcon, label: "Hours", value: site.contact.hours, href: undefined },
];

const nextSteps = [
  `We reply within ${site.contact.responseTime} to confirm we've received your message.`,
  "We arrange a short call to understand your goals and answer your questions.",
  "You receive a written quote with the scope, timeline and cost.",
];

export default function ContactPage() {
  const serviceOptions = services.map((service) => ({
    value: service.slug,
    label: service.title,
  }));

  return (
    <>
      <PageHeader
        eyebrow={<PageEyebrow>Contact us</PageEyebrow>}
        title="Let's talk about your project"
        intro={`Tell us what you need and we'll reply with a quote within ${site.contact.responseTime}.`}
      />

      <section className="bg-mist">
        <div className="container-site grid items-start gap-8 py-12 md:py-20 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-12">
          <ContactForm serviceOptions={serviceOptions} />

          <aside className="flex flex-col gap-6">
            <div className="rounded-xl bg-navy p-6 md:p-8">
              <h2 className="text-xl font-bold tracking-tight text-white">
                Contact details
              </h2>
              <dl className="mt-5 flex flex-col gap-4">
                {details.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <Icon className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden />
                    <div className="flex flex-col">
                      <dt className="text-xs font-semibold tracking-[0.12em] text-on-navy-muted uppercase">
                        {label}
                      </dt>
                      <dd className="text-[0.9375rem] text-white">
                        {href ? (
                          <a
                            href={href}
                            className="wrap-break-word underline decoration-white/30 underline-offset-4 hover:decoration-white"
                          >
                            {value}
                          </a>
                        ) : (
                          value
                        )}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-xl border bg-card p-6 md:p-8">
              <h2 className="text-xl font-bold tracking-tight text-navy">
                What happens next
              </h2>
              <ol className="mt-5 flex flex-col gap-4">
                {nextSteps.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-navy font-heading text-xs font-bold text-navy">
                      {index + 1}
                    </span>
                    <p className="pt-0.5 text-[0.9375rem] leading-relaxed text-muted-foreground">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
