import Link from 'next/link';
import styles from './Footer.module.scss';
import { SITE_NAME, CONTACT_EMAIL, GDPR_EMAIL } from '../../lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>{SITE_NAME}</h3>
            <p className={styles.description}>
              Cykl wydarzeń kulturowych łączących edukację, muzykę elektroniczną i rozwój sceny
              klubowej w Polsce.
            </p>
          </div>
          <div className={styles.section}>
            <h4>Organizatorzy</h4>
            <p>
              <strong>Tomasz Bursztyński Software Development</strong>
            </p>
            <p>Polna 10/14 m.23, 00-625 Warszawa</p>
            <p>NIP: 7011072260</p>
            <br />
            <p>
              Partner: <strong>Instytut Dźwięku Karol Murawski</strong>
            </p>
            <p>ul. Krótka 7, 05-230 Kobyłka</p>
            <p>NIP: 7221567281</p>
          </div>
          <div className={styles.section}>
            <h4>Kontakt</h4>
            <p>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
            <p className={styles.gdprContact}>
              Sprawy RODO i ochrony danych osobowych:
              <br />
              <a href={`mailto:${GDPR_EMAIL}`}>{GDPR_EMAIL}</a>
            </p>
          </div>
          <div className={styles.section}>
            <h4>Dokumenty</h4>
            <ul className={styles.links}>
              <li>
                <Link href="/regulamin">Regulamin</Link>
              </li>
              <li>
                <Link href="/polityka-prywatnosci">Polityka Prywatności</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>
            &copy; {currentYear} {SITE_NAME}. Wszystkie prawa zastrzeżone.
          </p>
          <p>Materiały na licencji CC BY-NC-SA 4.0</p>
          <p>
            Projekt aplikuje o dofinansowanie w ramach programu „Kultura – Interwencje 2026”{' '}
            Narodowego Centrum Kultury
          </p>
        </div>
      </div>
    </footer>
  );
}
