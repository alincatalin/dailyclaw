import { getFieldNotes, getStackItems, getBlueprints } from "@/lib/content";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dailyclaw.dev";

  const blueprints = getBlueprints().map((b) => ({
    url: `${baseUrl}/blueprints/${b.slug}`,
    lastModified: new Date(),
  }));

  const stackItems = getStackItems().map((t) => ({
    url: `${baseUrl}/stack/${t.slug}`,
    lastModified: new Date(),
  }));

  const fieldNotes = getFieldNotes().map((f) => ({
    url: `${baseUrl}/field-notes/${f.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/blueprints`, lastModified: new Date() },
    { url: `${baseUrl}/patterns`, lastModified: new Date() },
    { url: `${baseUrl}/stack`, lastModified: new Date() },
    { url: `${baseUrl}/field-notes`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/advertise`, lastModified: new Date() },
    ...blueprints,
    ...stackItems,
    ...fieldNotes,
  ];
}
