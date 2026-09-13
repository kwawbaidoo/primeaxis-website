import type { Metadata } from "next";
import { CoreValues } from "@/components/about/core-values";
import { Mission } from "@/components/about/mission";
import { Team } from "@/components/about/team";
import { CtaBand } from "@/components/home/cta-band";
import { PageEyebrow, PageHeader } from "@/components/site/page-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${site.name}: our mission, the values behind our work and the team you'll work with.`,
};

const sections = [
  { href: "#mission", label: "Mission" },
  { href: "#values", label: "Core values" },
  { href: "#team", label: "Team" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={<PageEyebrow>About us</PageEyebrow>}
        title="A technology partner built around your business"
        intro={`${site.name} brings software development, design, digital marketing, IT training and equipment together, so growing businesses get everything they need from one team they trust.`}
      >
        <nav aria-label="On this page" className="pt-2">
          <ul className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <li key={section.href}>
                <a
                  href={section.href}
                  className="inline-flex h-10 items-center rounded-full border border-white/25 px-4 text-sm font-medium text-on-navy transition-colors hover:bg-white/10 hover:text-white"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>
      <Mission />
      <CoreValues />
      <Team />
      <CtaBand />
    </>
  );
}
