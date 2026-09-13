import type { ServiceGroup } from "@/lib/services";
import { cn } from "@/lib/utils";

export const serviceGroupDot: Record<ServiceGroup, string> = {
  Build: "bg-teal",
  Grow: "bg-gold",
  Equip: "bg-bright",
};

export function ServiceGroupLabel({
  group,
  className,
}: {
  group: ServiceGroup;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span className={cn("size-2 shrink-0 rounded-full", serviceGroupDot[group])} />
      <span className="font-heading text-xs font-semibold tracking-[0.16em] text-navy uppercase">
        {group}
      </span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
