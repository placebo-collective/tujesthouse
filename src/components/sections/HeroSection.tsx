import styles from './HeroSection.module.scss';
import { getHeroContent } from '@/lib/tina';

export default async function HeroSection() {
  const content = await getHeroContent();

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>{content.title}</h1>
          <p className={styles.subtitle}>{content.subtitle}</p>
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
