import { marked } from 'marked';

export async function parseMarkdown(markdown: string = ''): Promise<string> {
  try {
    return await marked.parse(markdown, { async: true });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error parsing markdown:', error);
    }
    return markdown;
  }
}

export async function parseMarkdownBatch(markdownStrings: string[]): Promise<string[]> {
  return Promise.all(markdownStrings.map((md) => parseMarkdown(md)));
}
