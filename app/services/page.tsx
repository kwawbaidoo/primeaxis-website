import type { Metadata } from "next";
import { CtaBand } from "@/components/home/cta-band";
import { Process } from "@/components/home/process";
import { PageEyebrow, PageHeader } from "@/components/site/page-header";
import { ServiceGrid } from "@/components/site/service-grid";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Web development, custom software, mobile apps, API integration, graphic design and printing, social media management, IT skills training and IT accessories.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow={<PageEyebrow>Our services</PageEyebrow>}
        title="Software, design and IT services under one roof"
        intro="Choose a service to see what's included, or get in touch and we'll help you work out what you need."
      />
      <section className="bg-background">
        <div className="container-site py-16 md:py-24">
          <ServiceGrid />
        </div>
      </section>
      <Process />
      <CtaBand />
    </>
  );
}
