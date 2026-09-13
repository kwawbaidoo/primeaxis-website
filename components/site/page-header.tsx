import type { ReactNode } from "react";

/** Navy title band at the top of inner pages. */
export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  /** Small line above the title: a label or a breadcrumb. */
  eyebrow?: ReactNode;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-navy">
      <div className="container-site flex flex-col gap-5 py-14 md:py-20 lg:py-24">
        {eyebrow}
        <h1 className="max-w-3xl text-4xl leading-[1.12] font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="max-w-2xl text-[1.0625rem] leading-relaxed text-on-navy md:text-lg">
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

export function PageEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.14em] text-gold uppercase md:text-[0.8125rem]">
      <span className="size-2 shrink-0 rounded-full bg-gold" aria-hidden />
      {children}
    </p>
  );
}
