import Link from 'next/link';
import styles from './Header.module.scss';
import { SITE_NAME } from '../../lib/constants';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Link href="/">
              <h1>{SITE_NAME}</h1>
            </Link>
          </div>
          <ul className={styles.menu}>
            <li><a href="/#o-projekcie">O projekcie</a></li>
            <li><a href="/#program">Program</a></li>
            <li><a href="/#miasta">Miasta</a></li>
            <li><a href="/#formularze">Dołącz do nas</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
