import type { Metadata } from "next";
import { site } from "@/lib/site";

/** True once SITE_URL points at the real domain. */
export const isSiteUrlConfigured = Boolean(process.env.SITE_URL);

/**
 * Public address of the site, used for canonical links, share previews and the
 * sitemap. Until SITE_URL is set this is a placeholder, and the site asks search
 * engines not to index it (see app/robots.ts and the root layout).
 */
export const siteUrl = new URL(process.env.SITE_URL || "https://www.example.com");

if (!isSiteUrlConfigured && process.env.NODE_ENV === "production") {
  console.warn(
    "SITE_URL is not set: using a placeholder address and asking search engines not to index the site."
  );
}

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
