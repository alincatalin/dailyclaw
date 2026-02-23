import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Interview, Tool, Recipe } from "./types";

const contentDir = path.join(process.cwd(), "content");

function readMdxFiles(dir: string) {
  const fullPath = path.join(contentDir, dir);
  if (!fs.existsSync(fullPath)) return [];
  return fs
    .readdirSync(fullPath)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const filePath = path.join(fullPath, filename);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      return { ...data, content, slug: data.slug || filename.replace(/\.mdx$/, "") };
    });
}

export function getInterviews(): Interview[] {
  return readMdxFiles("interviews") as Interview[];
}

export function getInterview(slug: string): Interview | undefined {
  return getInterviews().find((i) => i.slug === slug);
}

export function getTools(): Tool[] {
  return readMdxFiles("tools") as Tool[];
}

export function getTool(slug: string): Tool | undefined {
  return getTools().find((t) => t.slug === slug);
}

export function getRecipes(): Recipe[] {
  return readMdxFiles("recipes") as Recipe[];
}

export function getRecipe(slug: string): Recipe | undefined {
  return getRecipes().find((r) => r.slug === slug);
}
