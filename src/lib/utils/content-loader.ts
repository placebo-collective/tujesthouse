import fs from 'fs';
import path from 'path';

export async function loadContent<T>(filePath: string, fallback?: T): Promise<T | null> {
  try {
    const fullPath = path.join(process.cwd(), 'content', filePath);
    const fileContent = fs.readFileSync(fullPath, 'utf-8');
    return JSON.parse(fileContent) as T;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error(`Error loading content from ${filePath}:`, error);
    }
    return fallback ?? null;
  }
}
