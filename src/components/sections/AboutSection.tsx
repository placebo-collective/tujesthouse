import styles from './AboutSection.module.scss';
import { getAboutContent } from '@/lib/tina';
import type { AboutCard, AboutHighlight } from '@/lib/content-types';

export default async function AboutSection() {
  const content = await getAboutContent();

  if (!content) return null;

  return (
    <section id="o-projekcie" className={styles.about}>
      <div className="container">
        <h2 className={styles.title}>{content.title}</h2>

        <div className={styles.intro}>
          <p dangerouslySetInnerHTML={{ __html: content.intro }} />
        </div>

        <div className={styles.grid}>
          {content.cards.map((card: AboutCard, index: number) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.highlights}>
          {content.highlights.map((highlight: AboutHighlight, index: number) => (
            <div key={index} className={styles.highlight}>
              <span className={styles.number}>{highlight.number}</span>
              <span className={styles.label}>{highlight.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.funding}>
          <p dangerouslySetInnerHTML={{ __html: content.funding }} />
        </div>
      </div>
    </section>
  );
}
