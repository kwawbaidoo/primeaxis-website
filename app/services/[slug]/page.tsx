import { ArrowRightIcon, CheckIcon, ChevronRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/home/cta-band";
import { PageHeader } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceCard } from "@/components/site/service-grid";
import { buttonVariants } from "@/components/ui/button";
import { pageMetadata } from "@/lib/metadata";
import { getService, services } from "@/lib/services";
import { cn } from "@/lib/utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return pageMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const service = getService((await params).slug);
  if (!service) notFound();

  // Same-group services first, then the rest, up to three.
  const related = [
    ...services.filter((s) => s.group === service.group && s.slug !== service.slug),
    ...services.filter((s) => s.group !== service.group),
  ].slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-on-navy-muted">
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRightIcon className="size-4" />
              </li>
              <li aria-current="page" className="text-on-navy">
                {service.title}
              </li>
            </ol>
          </nav>
        }
        title={service.title}
        intro={service.intro}
      >
        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 gap-2 bg-gold px-6 text-[0.9375rem] font-semibold text-navy hover:bg-gold/90"
            )}
          >
            {service.ctaLabel ?? "Get a Quote"}
            <ArrowRightIcon aria-hidden />
          </Link>
          <Link
            href="/services"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 border-white/30 bg-transparent px-6 text-[0.9375rem] font-semibold text-white shadow-none hover:bg-white/10 hover:text-white"
            )}
          >
            All services
          </Link>
        </div>
      </PageHeader>

      <section className="bg-background">
        <div className="container-site grid items-start gap-10 py-16 md:py-24 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-24">
          <SectionHeading
            title="What's included"
            intro="Every project is scoped to what you need. These are the parts clients ask for most."
          />
          <ul className="grid gap-x-8 gap-y-4 rounded-xl border bg-card p-6 sm:grid-cols-2 md:p-8">
            {service.included.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink"
              >
                <CheckIcon
                  className="mt-0.5 size-5 shrink-0 text-corporate"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-mist">
        <div className="container-site flex flex-col gap-10 py-16 md:gap-14 md:py-24">
          <SectionHeading title="How it helps your business" />
          <ul className="grid gap-7 md:grid-cols-3 md:gap-10">
            {service.benefits.map((benefit) => (
              <li
                key={benefit.title}
                className="flex flex-col gap-2 border-t border-rail pt-6"
              >
                <h3 className="text-lg leading-snug font-semibold text-navy">
                  {benefit.title}
                </h3>
                <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-background">
        <div className="container-site flex flex-col gap-8 py-16 md:gap-10 md:py-24">
          <SectionHeading title="More ways we can help" />
          <ul className="grid gap-2.5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug} className="flex">
                <ServiceCard service={item} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
