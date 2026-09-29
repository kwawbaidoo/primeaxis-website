import { ArrowRightIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { pillars } from "@/lib/content";
import type { ServiceGroup } from "@/lib/services";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const groupColor: Record<ServiceGroup, { dot: string; fill: string }> = {
  Build: { dot: "bg-teal", fill: "fill-teal" },
  Grow: { dot: "bg-gold", fill: "fill-gold" },
  Equip: { dot: "bg-bright", fill: "fill-bright" },
};

// Positions on the 520×480 orbit graphic: each card sits beside its node.
const orbitLayout: Record<ServiceGroup, { card: string; node: [number, number] }> = {
  Build: { card: "top-0 left-[318px]", node: [377, 103] },
  Grow: { card: "top-[262px] left-[318px]", node: [440, 245] },
  Equip: { card: "top-[352px] left-0", node: [50, 334] },
};

export function Hero() {
  return (
    <section className="overflow-hidden bg-navy">
      <div className="container-site grid items-center gap-10 py-12 md:py-20 lg:grid-cols-[minmax(0,1fr)_32.5rem] lg:gap-16 lg:pt-24 lg:pb-28">
        <div className="flex flex-col gap-5 lg:gap-6">
          <p className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.14em] text-gold uppercase md:text-[0.8125rem]">
            <span className="size-2 shrink-0 rounded-full bg-gold" aria-hidden />
            Software · Design · IT Services
          </p>
          <h1 className="text-4xl leading-[1.12] font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
            One partner for your{" "}
            <span className="text-teal">software, design and IT</span> needs.
          </h1>
          <p className="max-w-[34rem] text-[1.0625rem] leading-relaxed text-on-navy md:text-lg">
            From websites and custom software to printed brand materials, social
            media and staff training, {site.name} handles the technology so you
            can focus on running your business.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 gap-2 bg-gold px-6 text-[0.9375rem] font-semibold text-navy hover:bg-gold/90"
              )}
            >
              Get a Quote
              <ArrowRightIcon aria-hidden />
            </Link>
            <Link
              href="/services"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 border-white/30 bg-transparent px-6 text-[0.9375rem] font-semibold text-white shadow-none hover:bg-white/10 hover:text-white"
              )}
            >
              Explore services
            </Link>
          </div>
        </div>

        <OrbitGraphic />

        <ul
          aria-label="What we do"
          className="relative flex flex-col gap-3 pl-7 before:absolute before:top-2 before:bottom-2 before:left-1.5 before:w-0.5 before:bg-white/20 lg:hidden"
        >
          {pillars.map((pillar) => (
            <li
              key={pillar.group}
              className="relative flex flex-col gap-1 rounded-xl border border-white/14 bg-navy-raised px-4 py-3.5"
            >
              <span
                aria-hidden
                className={cn(
                  "absolute top-[19px] -left-[27px] size-3 rounded-full ring-4 ring-navy",
                  groupColor[pillar.group].dot
                )}
              />
              <PillarText {...pillar} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function OrbitGraphic() {
  return (
    <div className="relative hidden h-[480px] w-[520px] lg:block">
      <svg
        viewBox="0 0 520 480"
        fill="none"
        aria-hidden
        className="absolute inset-0 size-full"
      >
        <circle cx="260" cy="240" r="170" className="stroke-white" strokeOpacity="0.07" />
        <ellipse
          cx="260"
          cy="240"
          rx="175"
          ry="64"
          transform="rotate(16 260 240)"
          className="stroke-bright"
          strokeOpacity="0.5"
          strokeWidth="1.5"
          strokeDasharray="3 7"
        />
        <ellipse
          cx="260"
          cy="240"
          rx="230"
          ry="110"
          transform="rotate(-24 260 240)"
          className="stroke-teal"
          strokeOpacity="0.6"
          strokeWidth="2"
        />
        <line
          x1="260"
          y1="36"
          x2="260"
          y2="444"
          className="stroke-white"
          strokeOpacity="0.24"
          strokeWidth="2"
        />
        <circle cx="260" cy="36" r="8" className="fill-bright" />
        <circle cx="260" cy="444" r="8" className="fill-bright" />
        {pillars.map(({ group }) => {
          const [cx, cy] = orbitLayout[group].node;
          return (
            <circle
              key={group}
              cx={cx}
              cy={cy}
              r="7"
              strokeWidth="4"
              className={cn("stroke-navy", groupColor[group].fill)}
            />
          );
        })}
        <circle cx="260" cy="240" r="27" strokeWidth="3" className="fill-navy stroke-white" />
        <circle cx="260" cy="240" r="16" className="fill-gold" />
      </svg>
      <ul aria-label="What we do" className="absolute inset-0">
        {pillars.map((pillar) => (
          <li
            key={pillar.group}
            className={cn(
              "absolute flex w-[202px] flex-col gap-1 rounded-xl border border-white/14 bg-navy-raised px-4 py-3.5",
              orbitLayout[pillar.group].card
            )}
          >
            <PillarText {...pillar} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function PillarText({ group, summary }: { group: ServiceGroup; summary: string }) {
  return (
    <>
      <span className="font-heading text-xs font-semibold tracking-[0.16em] text-white uppercase">
        {group}
      </span>
      <span className="text-sm leading-snug text-on-navy">{summary}</span>
    </>
  );
}
