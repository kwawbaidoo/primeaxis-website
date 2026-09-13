import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** Use "dark" on navy backgrounds. */
  tone?: "light" | "dark";
  className?: string;
};

export function Logo({ tone = "light", className }: LogoProps) {
  const onNavy = tone === "dark";

  return (
    <Link
      href="/"
      aria-label="PrimeAxis Solutions home"
      className={cn("flex shrink-0 items-center gap-2.5 rounded-md", className)}
    >
      <span
        className={cn(
          "flex size-10 shrink-0 items-center justify-center",
          onNavy && "rounded-lg bg-white p-1"
        )}
      >
        <Image
          src="/logo-mark.png"
          alt=""
          width={80}
          height={80}
          preload={!onNavy}
          className="size-full object-contain"
        />
      </span>
      <span className="flex flex-col gap-1.5 font-heading leading-none">
        <span className="text-xl font-bold tracking-tight">
          <span className={onNavy ? "text-white" : "text-navy"}>Prime</span>
          <span className={onNavy ? "text-teal" : "text-corporate"}>Axis</span>
        </span>
        <span
          className={cn(
            "text-[0.5625rem] font-medium tracking-[0.46em] uppercase",
            onNavy ? "text-on-navy" : "text-ink"
          )}
        >
          Solutions
        </span>
      </span>
    </Link>
  );
}
