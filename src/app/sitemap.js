import { siteMeta } from "@/cotents";

export default function sitemap() {
  return [
    {
      url: siteMeta.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
