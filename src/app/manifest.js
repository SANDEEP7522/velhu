import { siteMeta } from "@/cotents";

export default function manifest() {
  return {
    name: siteMeta.legalName,
    short_name: siteMeta.brand,
    description: siteMeta.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#030712",
    theme_color: "#6366f1",
    categories: ["business", "productivity", "design"],
    icons: [
      {
        src: "/icon.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: siteMeta.logoIcon,
        sizes: "1536x1024",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
