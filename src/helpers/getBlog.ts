import fs from "fs";
import matter from "gray-matter";
import type { Blog } from "./typeDefinitions";

const dir = "blog";

export function getAllBlogs() {
  const dirPath = process.cwd() + "/" + dir;
  const filePaths = getAllMarkdownFilePaths(dirPath);
  const data = filePaths.map((path) => readMarkdownFile(path).data);
  return data.sort(
    ({ date: a }, { date: b }) => new Date(b).valueOf() - new Date(a).valueOf()
  );
}

export function getBlog(id: string) {
  const filePath = process.cwd() + "/" + dir + "/" + id + ".md";
  const parsed = readMarkdownFile(filePath);
  const siblings = getSibling(id);
  return {
    ...parsed,
    ...siblings,
  };
}

function getSibling(id: string): {
  next: Blog;
  prev: Blog;
} {
  const allItems = getAllBlogs();
  const maxIndex = allItems.length - 1;
  const index = allItems.findIndex((item) => item.id === id);
  const nextIndex = index < maxIndex ? index + 1 : 0;
  const prevIndex = index > 0 ? index - 1 : maxIndex;
  return {
    next: allItems[nextIndex]!,
    prev: allItems[prevIndex]!,
  };
}

function readMarkdownFile(filePath: string): {
  content: string;
  data: Blog;
} {
  const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
  const { data, content }: any = matter(fileContent);
  return { content, data };
}

function getAllMarkdownFilePaths(dirPath: string): string[] {
  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter((file) => file.isFile() && file.name.endsWith("md"))
    .map((file) => `${dirPath}/${file.name}`);
}
