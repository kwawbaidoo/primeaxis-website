import { UserRoundIcon } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/site/section-heading";
import { team } from "@/lib/content";

export function Team() {
  return (
    <section id="team" className="scroll-mt-20 bg-background">
      <div className="container-site flex flex-col gap-10 py-16 md:gap-14 md:py-28">
        <SectionHeading
          title="Meet the team"
          intro="The people who plan, build and support your projects."
          className="max-w-2xl"
        />
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-4">
          {team.map((member) => (
            <li key={member.id} className="flex flex-col gap-4">
              <div className="relative aspect-4/5 overflow-hidden rounded-xl bg-mist">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 18rem, 50vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex size-full items-center justify-center">
                    <UserRoundIcon
                      className="size-14 text-rail sm:size-16"
                      strokeWidth={1.25}
                      aria-hidden
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-base leading-snug font-semibold text-navy sm:text-lg">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-corporate">
                  {member.role}
                </p>
                <p className="pt-1 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                  {member.bio}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
