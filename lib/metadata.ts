import type { Metadata } from "next";
import { site } from "@/lib/site";

/**
 * Public address of the site, used for canonical links, share previews and the
 * sitemap. Set SITE_URL once the domain is live; the fallback is a placeholder.
 */
export const siteUrl = new URL(process.env.SITE_URL || "https://www.example.com");

/** Link preview image for social media and messaging apps (public/og-image.png). */
export const shareImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: `${site.name}: one partner for your software, design and IT needs`,
};

/**
 * Title, description, canonical link and share preview for a page. Share preview
 * fields don't merge with the root layout's, so each page sets the full set,
 * including the image.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  /** Omit on the home page to keep the default title. */
  title?: string;
  description: string;
  path: string;
}): Metadata {
  return {
    ...(title && { title }),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`,
      description,
      url: path,
      images: [shareImage],
    },
  };
}
