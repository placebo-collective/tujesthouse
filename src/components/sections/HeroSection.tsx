import styles from './HeroSection.module.scss';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>Tu Jest House</h1>
          <p className={styles.subtitle}>
            Cykl wydarzeń kulturowych łączących edukację i muzykę elektroniczną
          </p>
          <p className={styles.dates}>Maj – Wrzesień 2026 | 5 miast w Polsce</p>
          <div className={styles.cta}>
            <a href="#formularze" className={styles.btnPrimary}>
              Zgłoś się jako artysta
            </a>
            <a href="#formularze" className={styles.btnSecondary}>
              Zapisz się na warsztaty
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
