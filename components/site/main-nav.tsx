"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ServiceGroupLabel } from "@/components/site/service-group-label";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { serviceGroups, servicesInGroup } from "@/lib/services";
import { isActivePath, mainNav } from "@/lib/site";
import { cn } from "@/lib/utils";

const topLinkClass = cn(
  navigationMenuTriggerStyle(),
  "text-[0.9375rem] text-ink aria-[current=page]:font-semibold aria-[current=page]:text-corporate"
);

export function MainNav({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <NavigationMenu align="center" className={className}>
      <NavigationMenuList className="gap-1">
        {mainNav.map((item) =>
          item.href === "/services" ? (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuTrigger
                className={cn(
                  "text-[0.9375rem] text-ink",
                  isActivePath(pathname, item.href) &&
                    "font-semibold text-corporate"
                )}
              >
                {item.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ServicesPanel pathname={pathname} />
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink
                active={isActivePath(pathname, item.href)}
                render={<Link href={item.href} />}
                className={topLinkClass}
              >
                {item.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ServicesPanel({ pathname }: { pathname: string }) {
  return (
    <div className="flex w-[52rem] flex-col gap-3 p-2">
      <div className="grid grid-cols-4 gap-6">
        {serviceGroups.map((group) => (
          <div
            key={group}
            className={cn(
              "flex flex-col gap-2",
              group === "Build" && "col-span-2"
            )}
          >
            <ServiceGroupLabel group={group} className="px-2.5" />
            <ul
              className={cn(
                "grid gap-1",
                group === "Build" && "grid-cols-2 gap-x-3"
              )}
            >
              {servicesInGroup(group).map((service) => {
                const href = `/services/${service.slug}`;
                return (
                  <li key={service.slug}>
                    <NavigationMenuLink
                      closeOnClick
                      active={isActivePath(pathname, href)}
                      render={<Link href={href} />}
                      className="items-start gap-3 p-2.5"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-tint text-corporate">
                        <service.icon className="size-5" aria-hidden />
                      </span>
                      <span className="flex flex-col gap-0.5">
                        <span className="leading-snug font-semibold text-navy">
                          {service.title}
                        </span>
                        <span className="text-[0.8125rem] leading-snug text-muted-foreground">
                          {service.short}
                        </span>
                      </span>
                    </NavigationMenuLink>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-4 rounded-md bg-mist px-4 py-2">
        <span className="text-sm text-ink">
          Not sure which service fits? We&apos;ll help you choose.
        </span>
        <NavigationMenuLink
          closeOnClick
          render={<Link href="/contact" />}
          className="font-semibold text-corporate"
        >
          Talk to us
          <ArrowRightIcon aria-hidden />
        </NavigationMenuLink>
      </div>
    </div>
  );
}
