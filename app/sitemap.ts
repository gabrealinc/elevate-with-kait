import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/offers", "/retreats", "/schedule", "/about", "/contact"];

  return routes.map((route) => ({
    url: `https://elevatewithkait.com${route}`,
    lastModified: new Date(),
  }));
}
