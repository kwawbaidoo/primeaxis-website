import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <section className="bg-navy">
      <div className="container-site py-24 md:py-32">
        <h1 className="max-w-3xl text-4xl leading-tight font-bold tracking-tight text-white md:text-6xl">
          One partner for your{" "}
          <span className="text-teal">software, design and IT</span> needs.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-navy">
          {site.description}
        </p>
      </div>
    </section>
  );
}
