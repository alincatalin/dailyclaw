import type { MetadataRoute } from "next";
import {
  getBlueprints,
  getFieldNotes,
  getPatterns,
  getStackItems,
} from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dailyclaw.dev";

  const staticRoutePaths = [
    "",
    "/about",
    "/advertise",
    "/blueprints",
    "/field-notes",
    "/patterns",
    "/stack",
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticRoutePaths.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  const blueprints: MetadataRoute.Sitemap = getBlueprints().map((item) => ({
    url: `${baseUrl}/blueprints/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const fieldNotes: MetadataRoute.Sitemap = getFieldNotes().map((item) => ({
    url: `${baseUrl}/field-notes/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const patterns: MetadataRoute.Sitemap = getPatterns().map((item) => ({
    url: `${baseUrl}/patterns/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const stackItems: MetadataRoute.Sitemap = getStackItems().map((item) => ({
    url: `${baseUrl}/stack/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...blueprints,
    ...fieldNotes,
    ...patterns,
    ...stackItems,
  ];
}
