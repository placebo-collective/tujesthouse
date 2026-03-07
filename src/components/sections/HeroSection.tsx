import styles from './HeroSection.module.scss';
import { getHeroContent } from '@/lib/tina';
import { parseMarkdown } from '@/lib/utils/markdown';

export default async function HeroSection() {
  const content = await getHeroContent();

  const subtitleHtml = await parseMarkdown(content.subtitle);

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>{content.title}</h1>
          <div className={styles.subtitle} dangerouslySetInnerHTML={{ __html: subtitleHtml }} />
          <p className={styles.dates}>{content.dates}</p>
          <div className={styles.cta}>
            <a href={content.cta.primaryLink} className={styles.btnPrimary}>
              {content.cta.primaryText}
            </a>
            <a href={content.cta.secondaryLink} className={styles.btnSecondary}>
              {content.cta.secondaryText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
