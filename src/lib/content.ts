import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Blueprint, FieldNote, Pattern, StackItem } from "./types";

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

export function getBlueprints(): Blueprint[] {
  return readMdxFiles("blueprints") as Blueprint[];
}

export function getBlueprint(slug: string): Blueprint | undefined {
  return getBlueprints().find((s) => s.slug === slug);
}

export function getFieldNotes(): FieldNote[] {
  return readMdxFiles("field-notes") as FieldNote[];
}

export function getFieldNote(slug: string): FieldNote | undefined {
  return getFieldNotes().find((f) => f.slug === slug);
}

export function getPatterns(): Pattern[] {
  return readMdxFiles("patterns") as Pattern[];
}

export function getPattern(slug: string): Pattern | undefined {
  return getPatterns().find((p) => p.slug === slug);
}

export function getStackItems(): StackItem[] {
  return readMdxFiles("stack") as StackItem[];
}

export function getStackItem(slug: string): StackItem | undefined {
  return getStackItems().find((s) => s.slug === slug);
}
