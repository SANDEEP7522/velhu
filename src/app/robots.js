import { siteMeta } from "@/cotents";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${siteMeta.url}/sitemap.xml`,
    host: siteMeta.url,
  };
}
