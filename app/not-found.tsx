import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="container-site flex flex-col items-start gap-5 py-24 md:py-32">
      <p className="text-sm font-semibold tracking-[0.14em] text-corporate uppercase">
        Page not found
      </p>
      <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-navy md:text-5xl">
        We couldn&apos;t find that page
      </h1>
      <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
        The link may be out of date, or the page may have moved. Try one of
        these instead.
      </p>
      <div className="flex flex-wrap gap-3 pt-2">
        <Link href="/" className={cn(buttonVariants({ size: "lg" }), "px-4")}>
          Go to the home page
        </Link>
        <Link
          href="/services"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-4")}
        >
          Browse services
        </Link>
      </div>
    </section>
  );
}
