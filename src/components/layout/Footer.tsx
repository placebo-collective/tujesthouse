import styles from './Footer.module.scss';
import { SITE_NAME, CONTACT_EMAIL } from '../../lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>{SITE_NAME}</h3>
            <p>Projekt dofinansowany ze środków Narodowego Centrum Kultury w ramach programu „Kultura – Interwencje 2026".</p>
          </div>
          <div className={styles.section}>
            <h4>Organizatorzy</h4>
            <p><strong>Tomasz Bursztyński Software Development</strong></p>
            <p><strong>Partner:</strong> Instytut Dźwięku Karol Murawski</p>
          </div>
          <div className={styles.section}>
            <h4>Kontakt</h4>
            <p>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {currentYear} {SITE_NAME}. Wszystkie prawa zastrzeżone.</p>
          <p>Materiały na licencji CC BY-NC-SA 4.0</p>
        </div>
      </div>
    </footer>
  );
}
