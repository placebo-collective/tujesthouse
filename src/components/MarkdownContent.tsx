import { marked } from 'marked';
import styles from './MarkdownContent.module.scss';

interface MarkdownContentProps {
  content: string;
}

export default async function MarkdownContent({ content }: MarkdownContentProps) {
  const htmlContent = await marked(content, {
    breaks: true,
    gfm: true,
  });

  return <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
