import Link from "next/link";
import { SectionHeading } from "@/components/site/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { reasons } from "@/lib/content";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function WhyUs() {
  return (
    <section className="bg-background">
      <div className="container-site grid items-start gap-10 py-16 md:py-28 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-24">
        <SectionHeading
          title="A technology partner that stays with you"
          intro={`Most businesses juggle a web developer, a printer, a social media freelancer and an IT supplier. With ${site.name}, one team handles all of it and remembers your business from one project to the next.`}
        >
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-3 h-12 w-full px-5 text-[0.9375rem] font-semibold sm:w-auto sm:self-start lg:h-11"
            )}
          >
            Get a Quote
          </Link>
        </SectionHeading>

        <ul className="grid gap-7 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-10">
          {reasons.map((reason) => (
            <li key={reason.title} className="flex flex-col gap-3 border-t pt-6">
              <reason.icon className="size-6.5 text-corporate" aria-hidden />
              <h3 className="text-lg leading-snug font-semibold text-navy">
                {reason.title}
              </h3>
              <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
