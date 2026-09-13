import { CtaBand } from "@/components/home/cta-band";
import { Faq } from "@/components/home/faq";
import { Hero } from "@/components/home/hero";
import { Process } from "@/components/home/process";
import { ServicesOverview } from "@/components/home/services-overview";
import { WhyUs } from "@/components/home/why-us";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata({ description: site.description, path: "/" });

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Process />
      <WhyUs />
      <Faq />
      <CtaBand />
    </>
  );
}
