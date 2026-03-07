import { marked } from 'marked';

/**
 * Parse markdown string to HTML
 * @param markdown - The markdown string to parse
 * @returns Promise resolving to HTML string
 */
export async function parseMarkdown(markdown: string = ''): Promise<string> {
  try {
    return await marked.parse(markdown, { async: true });
  } catch (error) {
    console.error('Error parsing markdown:', error);
    return markdown; // Return original text as fallback
  }
}

/**
 * Parse multiple markdown strings in parallel
 * @param markdownStrings - Array of markdown strings to parse
 * @returns Promise resolving to array of HTML strings
 */
export async function parseMarkdownBatch(markdownStrings: string[]): Promise<string[]> {
  return Promise.all(markdownStrings.map((md) => parseMarkdown(md)));
}
