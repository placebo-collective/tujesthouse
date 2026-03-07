import fs from 'fs';
import path from 'path';

/**
 * Generic content loader for JSON files
 * @param filePath - Relative path from content directory
 * @param fallback - Optional fallback value if file cannot be loaded
 * @returns Parsed JSON content or fallback/null
 */
export async function loadContent<T>(filePath: string, fallback?: T): Promise<T | null> {
  try {
    const fullPath = path.join(process.cwd(), 'content', filePath);
    const fileContent = fs.readFileSync(fullPath, 'utf-8');
    return JSON.parse(fileContent) as T;
  } catch (error) {
    console.error(`Error loading content from ${filePath}:`, error);
    return fallback ?? null;
  }
}
