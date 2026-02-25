import { readFile } from "node:fs/promises";
import path from "node:path";

export async function getArticleContent(contentPath: string): Promise<string> {
  const absolutePath = path.join(process.cwd(), contentPath);
  return readFile(absolutePath, "utf8");
}
