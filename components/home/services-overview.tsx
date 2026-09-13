import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { sectionTitleClass } from "@/components/site/section-heading";
import { ServiceGrid } from "@/components/site/service-grid";
import { buttonVariants } from "@/components/ui/button";
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

        <ServiceGrid />

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
