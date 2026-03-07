import Link from 'next/link';
import styles from './Header.module.scss';
import { SITE_NAME } from '../../lib/constants';
import { getHeaderContent } from '@/lib/tina';
import type { MenuItem } from '@/lib/content-types';

export default async function Header() {
  const content = await getHeaderContent();

  if (!content) return null;

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
            {content.menu.map((item: MenuItem, index: number) => (
              <li key={index}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
