import { PhoneIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { phoneHref } from "@/lib/contact-links";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function CtaBand() {
  const callClassName =
    "flex items-center justify-center gap-2 text-[0.9375rem] font-semibold whitespace-nowrap text-white";

  return (
    <section className="relative overflow-hidden bg-corporate">
      <svg
        viewBox="0 0 560 320"
        fill="none"
        aria-hidden
        className="pointer-events-none absolute -top-10 -right-80 w-[35rem] md:-right-20"
      >
        <ellipse
          cx="280"
          cy="160"
          rx="260"
          ry="110"
          transform="rotate(-18 280 160)"
          className="stroke-white"
          strokeOpacity="0.14"
          strokeWidth="2"
        />
      </svg>
      <div className="container-site relative flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between md:gap-12 md:py-18">
        <div className="flex flex-col gap-3">
          <h2 className="text-[1.75rem] leading-tight font-bold tracking-tight text-white md:text-4xl">
            Have a project in mind?
          </h2>
          <p className="text-base leading-relaxed text-tint md:text-lg">
            Tell us what you need and we&apos;ll reply with a quote within{" "}
            {site.contact.responseTime}.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-7">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 bg-white px-7 text-[0.9375rem] font-semibold text-navy hover:bg-white/90"
            )}
          >
            Get a Quote
          </Link>
          {phoneHref ? (
            <a
              href={phoneHref}
              className={cn(callClassName, "min-h-11 underline-offset-4 hover:underline")}
            >
              <PhoneIcon className="size-4.5" aria-hidden />
              or call {site.contact.phone}
            </a>
          ) : (
            <p className={callClassName}>
              <PhoneIcon className="size-4.5" aria-hidden />
              or call {site.contact.phone}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
