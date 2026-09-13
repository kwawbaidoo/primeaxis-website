import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { sectionTitleClass } from "@/components/site/section-heading";
import { serviceGroupDot } from "@/components/site/service-group-label";
import { pillars } from "@/lib/content";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Mission() {
  return (
    <section id="mission" className="scroll-mt-20 bg-background">
      <div className="container-site grid items-start gap-10 py-16 md:py-28 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-24">
        <div className="flex flex-col gap-5">
          <h2 className={sectionTitleClass}>Our mission</h2>
          <p className="font-heading text-xl leading-snug font-semibold text-balance text-navy md:text-2xl">
            To help businesses grow by making reliable technology simple to
            get, simple to use and simple to support.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground md:text-[1.0625rem]">
            <p>
              Many businesses juggle separate suppliers for their website,
              printing, social media and IT, and end up managing the gaps
              between them.
            </p>
            <p>
              {site.name} exists to close those gaps. One team learns how your
              business works, then builds, promotes and equips it, and stays
              available when you need help.
            </p>
          </div>

          <ul className="flex flex-col divide-y rounded-xl border bg-card">
            {pillars.map((pillar) => (
              <li
                key={pillar.group}
                className="flex flex-col gap-1.5 px-5 py-4 sm:flex-row sm:items-baseline sm:gap-6 md:px-6"
              >
                <span className="flex w-24 shrink-0 items-center gap-2.5 font-heading text-xs font-semibold tracking-[0.16em] text-navy uppercase">
                  <span
                    aria-hidden
                    className={cn("size-2 rounded-full", serviceGroupDot[pillar.group])}
                  />
                  {pillar.group}
                </span>
                <span className="text-[0.9375rem] leading-relaxed text-ink">
                  {pillar.summary}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 self-start text-[0.9375rem] font-semibold text-corporate hover:underline"
          >
            Explore our services
            <ArrowRightIcon className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
