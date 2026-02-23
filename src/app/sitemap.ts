import { getInterviews, getTools, getRecipes } from "@/lib/content";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dailyclaw.dev";

  const interviews = getInterviews().map((i) => ({
    url: `${baseUrl}/interviews/${i.slug}`,
    lastModified: new Date(),
  }));

  const tools = getTools().map((t) => ({
    url: `${baseUrl}/tools/${t.slug}`,
    lastModified: new Date(),
  }));

  const recipes = getRecipes().map((r) => ({
    url: `${baseUrl}/recipes/${r.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/interviews`, lastModified: new Date() },
    { url: `${baseUrl}/tools`, lastModified: new Date() },
    { url: `${baseUrl}/recipes`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/advertise`, lastModified: new Date() },
    ...interviews,
    ...tools,
    ...recipes,
  ];
}
