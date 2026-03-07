import styles from './CitiesSection.module.scss';
import { getCitiesContent } from '@/lib/tina';
import type { InfoCard } from '@/lib/content-types';
import { parseMarkdown } from '@/lib/utils/markdown';

export default async function CitiesSection() {
  const content = await getCitiesContent();

  if (!content) return null;

  const cardsWithHtml = await Promise.all(
    content.infoCards.map(async (card: InfoCard) => ({
      ...card,
      descriptionHtml: await parseMarkdown(card.description),
    }))
  );

  return (
    <section id="miasta" className={styles.cities}>
      <div className="container">
        <h2 className={styles.title}>{content.title}</h2>
        <p className={styles.subtitle}>{content.subtitle}</p>

        <div className={styles.timeline}>
          {content.cities.map((city, index) => (
            <div key={city.name} className={styles.cityCard}>
              <div className={styles.number}>{index + 1}</div>
              <div className={styles.cityContent}>
                <h3 className={styles.cityName}>{city.name}</h3>
                <p className={styles.month}>{city.month}</p>
                <p className={styles.venue}>{city.venue}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.info}>
          {cardsWithHtml.map((card, index: number) => (
            <div key={index} className={styles.infoCard}>
              <div className={styles.infoIcon}>{card.icon}</div>
              <h4>{card.title}</h4>
              <div dangerouslySetInnerHTML={{ __html: card.descriptionHtml }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
