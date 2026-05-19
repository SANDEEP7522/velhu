import { siteMeta, serviceList, blogTopics } from "@/cotents";

export default function sitemap() {
  const now = new Date();
  const base = siteMeta.url;

  const staticRoutes = [
    { url: base, priority: 1.0, changeFrequency: "weekly" },
    { url: `${base}/about`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/services`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/portfolio`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${base}/blog`, priority: 0.7, changeFrequency: "weekly" },
    { url: `${base}/contact`, priority: 0.6, changeFrequency: "yearly" },
  ];

  const serviceRoutes = serviceList.map((s) => ({
    url: `${base}/services/${s.slug}`,
    priority: 0.85,
    changeFrequency: "monthly",
  }));

  const blogRoutes = blogTopics.map((b) => ({
    url: `${base}/blog/${b.slug}`,
    priority: 0.5,
    changeFrequency: "monthly",
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes].map((r) => ({
    ...r,
    lastModified: now,
  }));
}
