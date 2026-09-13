import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/about",
    "/services",
    ...services.map((service) => `/services/${service.slug}`),
    "/contact",
  ];

  return paths.map((path) => ({ url: new URL(path, siteUrl).toString() }));
}
