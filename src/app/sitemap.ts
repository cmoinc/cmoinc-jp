import type { MetadataRoute } from "next";
import { getNewsSlugs, getCSRSlugs } from "@/lib/sanity/queries";

const BASE_URL = "https://cmoinc.jp";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    "",
    "/aboutus",
    "/service",
    "/services",
    "/career",
    "/agent",
    "/news",
    "/csr",
    "/policy",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));

  const newsSlugs = await getNewsSlugs().catch(() => []);
  const newsPages = newsSlugs.map((slug: string) => ({
    url: `${BASE_URL}/news/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const csrSlugs = await getCSRSlugs().catch(() => []);
  const csrPages = csrSlugs.map((slug: string) => ({
    url: `${BASE_URL}/csr/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...newsPages, ...csrPages];
}
