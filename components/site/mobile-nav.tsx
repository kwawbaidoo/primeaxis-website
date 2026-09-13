"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ServiceGroupLabel } from "@/components/site/service-group-label";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { serviceGroups, servicesInGroup } from "@/lib/services";
import { isActivePath, mainNav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function MobileNav({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  const linkClass = (href: string, extra?: string) =>
    cn(
      "flex min-h-11 items-center rounded-md px-3 hover:bg-muted",
      extra,
      isActivePath(pathname, href) && "bg-muted text-corporate"
    );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="outline"
            size="icon-lg"
            aria-label="Open menu"
            className={className}
          />
        }
      >
        <MenuIcon className="size-5" />
      </SheetTrigger>
      <SheetContent className="gap-0 data-[side=right]:w-full data-[side=right]:sm:max-w-sm">
        <SheetHeader className="border-b px-5 py-4">
          <SheetTitle className="text-base font-semibold text-navy">
            Menu
          </SheetTitle>
        </SheetHeader>
        <nav
          aria-label="Main"
          className="flex flex-1 flex-col gap-1 overflow-y-auto p-3"
        >
          {mainNav.map((item) =>
            item.href === "/services" ? (
              <div key={item.href} className="flex flex-col gap-1 py-1">
                <Link
                  href={item.href}
                  onClick={close}
                  className={linkClass(item.href, "font-medium text-navy")}
                >
                  {item.title}
                </Link>
                {serviceGroups.map((group) => (
                  <div key={group} className="flex flex-col gap-0.5 pt-2 pl-3">
                    <ServiceGroupLabel group={group} className="px-3 pb-1" />
                    {servicesInGroup(group).map((service) => {
                      const href = `/services/${service.slug}`;
                      return (
                        <Link
                          key={service.slug}
                          href={href}
                          onClick={close}
                          className={linkClass(href, "gap-3 text-[0.9375rem] text-ink")}
                        >
                          <service.icon
                            className="size-4.5 shrink-0 text-corporate"
                            aria-hidden
                          />
                          {service.title}
                        </Link>
                      );
                    })}
                  </div>
                ))}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className={linkClass(item.href, "font-medium text-navy")}
              >
                {item.title}
              </Link>
            )
          )}
        </nav>
        <div className="border-t p-4">
          <Link
            href="/contact"
            onClick={close}
            className={cn(buttonVariants({ size: "lg" }), "h-11 w-full")}
          >
            Get a Quote
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
