import { SectionHeading } from "@/components/site/section-heading";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section className="bg-mist">
      <div className="container-site flex flex-col gap-10 py-16 md:gap-16 md:py-28">
        <SectionHeading
          title="A clear process from first call to launch"
          intro="Every project follows the same four steps, so you always know what happens next and what it will cost."
          className="max-w-2xl"
        />
        <div className="relative">
          <span
            aria-hidden
            className="absolute top-[23px] right-1.5 left-6 hidden h-0.5 bg-rail md:block"
          />
          <span
            aria-hidden
            className="absolute top-[18px] right-0 hidden size-3 rounded-full bg-gold md:block"
          />
          <ol className="relative flex flex-col gap-7 md:grid md:grid-cols-4 md:gap-8">
            {processSteps.map((step, index) => (
              <li
                key={step.title}
                className="relative flex gap-4 md:flex-col md:gap-5 md:pr-3"
              >
                {index < processSteps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute top-11 -bottom-7 left-[21px] w-0.5 bg-rail md:hidden"
                  />
                )}
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-navy bg-white font-heading text-base font-bold text-navy md:size-12">
                  {index + 1}
                </span>
                <div className="flex flex-col gap-1.5 pt-2 md:gap-2 md:pt-0">
                  <h3 className="text-lg leading-snug font-semibold text-navy md:text-xl">
                    {step.title}
                  </h3>
                  <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
