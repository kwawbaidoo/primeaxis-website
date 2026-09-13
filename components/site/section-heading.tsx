import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const sectionTitleClass =
  "text-[1.75rem] leading-tight font-bold tracking-tight text-navy md:text-[2.5rem] md:leading-[1.15]";

export function SectionHeading({
  title,
  intro,
  className,
  children,
}: {
  title: string;
  intro?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-3 md:gap-4", className)}>
      <h2 className={sectionTitleClass}>{title}</h2>
      {intro && (
        <p className="max-w-[40rem] text-base leading-relaxed text-muted-foreground md:text-[1.0625rem]">
          {intro}
        </p>
      )}
      {children}
    </div>
  );
}
