import Link from "next/link";
import { Logo } from "@/components/site/logo";
import { MainNav } from "@/components/site/main-nav";
import { MobileNav } from "@/components/site/mobile-nav";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container-site flex h-16 items-center justify-between gap-6 lg:h-19">
        <Logo />
        <MainNav className="hidden lg:flex" />
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "lg" }), "hidden px-4 sm:inline-flex")}
          >
            Get a Quote
          </Link>
          <MobileNav className="lg:hidden" />
        </div>
      </div>
    </header>
  );
}
