import { ArrowRightIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { ServiceGroupLabel } from "@/components/site/service-group-label";
import { serviceGroups, servicesInGroup, type Service } from "@/lib/services";
import { cn } from "@/lib/utils";

/** All services, grouped as Build / Grow / Equip. */
export function ServiceGrid() {
  return (
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
  );
}

/** A compact row on phones, a full card from the `sm` breakpoint up. */
export function ServiceCard({ service }: { service: Service }) {
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
