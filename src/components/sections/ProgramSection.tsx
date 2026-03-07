import styles from './ProgramSection.module.scss';
import { getProgramContent } from '@/lib/tina';
import type { ProgramItem, TargetItem } from '@/lib/content-types';

export default async function ProgramSection() {
  const content = await getProgramContent();

  if (!content) return null;

  return (
    <section id="program" className={styles.program}>
      <div className="container">
        <h2 className={styles.title}>{content.title}</h2>
        <p className={styles.subtitle}>{content.subtitle}</p>

        <div className={styles.parts}>
          <div className={styles.part}>
            <div className={styles.partHeader}>
              <span className={styles.badge}>{content.dayPart.badge}</span>
              <h3>{content.dayPart.title}</h3>
            </div>
            <div className={styles.partContent}>
              {content.dayPart.items.map((item: ProgramItem, index: number) => (
                <div key={index} className={styles.item}>
                  <div className={styles.itemIcon}>{item.icon}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.part}>
            <div className={styles.partHeader}>
              <span className={styles.badge}>{content.nightPart.badge}</span>
              <h3>{content.nightPart.title}</h3>
            </div>
            <div className={styles.partContent}>
              {content.nightPart.items.map((item: ProgramItem, index: number) => (
                <div key={index} className={styles.item}>
                  <div className={styles.itemIcon}>{item.icon}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {content.target && (
          <div className={styles.target}>
            <h3>{content.target.title}</h3>
            <div className={styles.targetGrid}>
              {content.target.items.map((item: TargetItem, index: number) => (
                <div key={index} className={styles.targetItem}>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
