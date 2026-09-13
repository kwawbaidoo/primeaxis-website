import { SectionHeading } from "@/components/site/section-heading";
import { coreValues } from "@/lib/content";

export function CoreValues() {
  return (
    <section id="values" className="scroll-mt-20 bg-mist">
      <div className="container-site flex flex-col gap-10 py-16 md:gap-14 md:py-28">
        <SectionHeading
          title="Our core values"
          intro="These principles guide how we work with every client, on every project."
          className="max-w-2xl"
        />
        <ul className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {coreValues.map((value) => (
            <li
              key={value.title}
              className="flex flex-col gap-4 rounded-xl border bg-card p-6"
            >
              <span className="flex size-11 items-center justify-center rounded-[10px] bg-tint text-corporate">
                <value.icon className="size-6" aria-hidden />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg leading-snug font-semibold text-navy">
                  {value.title}
                </h3>
                <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
