import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/site/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <section className="bg-mist">
      <div className="container-site grid items-start gap-7 py-16 md:py-28 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
        <SectionHeading
          title="Questions we hear often"
          intro="Can't find what you're looking for? We're happy to answer anything about your project."
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 self-start text-[0.9375rem] font-semibold text-corporate hover:underline"
          >
            Ask us directly
            <ArrowRightIcon className="size-4" aria-hidden />
          </Link>
        </SectionHeading>

        <Accordion
          defaultValue={[faqs[0].question]}
          className="rounded-xl border bg-card px-5 py-1 md:px-7 md:py-2"
        >
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="gap-5 py-5 font-sans text-[0.9375rem] leading-normal font-semibold text-pretty text-navy hover:no-underline md:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[0.9375rem] leading-relaxed text-muted-foreground md:pr-11">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
