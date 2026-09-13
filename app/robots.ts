import type { MetadataRoute } from "next";
import { isSiteUrlConfigured, siteUrl } from "@/lib/metadata";

export default function robots(): MetadataRoute.Robots {
  // Keep search engines out until the real domain is configured.
  if (!isSiteUrlConfigured) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}
