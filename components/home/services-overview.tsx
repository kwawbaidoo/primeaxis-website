import { ArrowRightIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { sectionTitleClass } from "@/components/site/section-heading";
import { ServiceGroupLabel } from "@/components/site/service-group-label";
import { buttonVariants } from "@/components/ui/button";
import { serviceGroups, servicesInGroup, type Service } from "@/lib/services";
import { cn } from "@/lib/utils";

export function ServicesOverview() {
  return (
    <section className="bg-background">
      <div className="container-site flex flex-col gap-10 py-16 md:gap-14 md:py-28">
        <div className="grid gap-4 md:grid-cols-2 md:items-end md:gap-16">
          <h2 className={sectionTitleClass}>
            Everything your business needs, from one team
          </h2>
          <div className="flex flex-col items-start gap-4">
            <p className="text-base leading-relaxed text-muted-foreground md:text-[1.0625rem]">
              We build your digital products, grow your brand and equip your
              people, so you are not coordinating four different suppliers.
            </p>
            <Link
              href="/services"
              className="hidden items-center gap-1.5 text-[0.9375rem] font-semibold text-corporate hover:underline md:inline-flex"
            >
              View all services
              <ArrowRightIcon className="size-4" aria-hidden />
            </Link>
          </div>
        </div>

        <div className="grid gap-10 md:gap-14 lg:grid-cols-4 lg:gap-x-6">
          {serviceGroups.map((group) => (
            <div
              key={group}
              className={cn(
                "flex flex-col gap-4 md:gap-5",
                group === "Build" ? "lg:col-span-4" : "lg:col-span-2"
              )}
            >
              <ServiceGroupLabel group={group} />
              <ul
                className={cn(
                  "grid gap-2.5 sm:grid-cols-2 sm:gap-6",
                  group === "Build" && "lg:grid-cols-4"
                )}
              >
                {servicesInGroup(group).map((service) => (
                  <li key={service.slug} className="flex">
                    <ServiceCard service={service} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Link
          href="/services"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-12 w-full text-[0.9375rem] font-semibold md:hidden"
          )}
        >
          View all services
        </Link>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex w-full items-center gap-3.5 rounded-xl border bg-card p-4 transition-colors hover:border-corporate/40 sm:flex-col sm:items-start sm:gap-4 sm:p-6"
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-[10px] bg-tint text-corporate">
        <service.icon className="size-6" aria-hidden />
      </span>
      <span className="flex flex-1 flex-col gap-1 sm:gap-2">
        <h3 className="text-[0.9375rem] leading-snug font-semibold text-navy sm:text-lg">
          {service.title}
        </h3>
        <span className="text-sm leading-snug text-muted-foreground sm:hidden">
          {service.short}
        </span>
        <span className="hidden text-[0.9375rem] leading-relaxed text-muted-foreground sm:block">
          {service.summary}
        </span>
      </span>
      <span className="mt-auto hidden items-center gap-1.5 text-sm font-semibold text-corporate group-hover:underline sm:inline-flex">
        Learn more
        <ArrowRightIcon className="size-4" aria-hidden />
      </span>
      <ChevronRightIcon
        className="size-5 shrink-0 text-muted-foreground sm:hidden"
        aria-hidden
      />
    </Link>
  );
}
