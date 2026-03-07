import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';
import { getHeaderContent, getSiteSettings } from '@/lib/tina';
import type { MenuItem } from '@/lib/content-types';

export default async function Header() {
  const content = await getHeaderContent();
  const settings = await getSiteSettings();

  if (!content) return null;

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Link href="/">
              {settings.useLogo && settings.logo ? (
                <Image
                  src={settings.logo}
                  alt={settings.siteName}
                  width={120}
                  height={40}
                  priority
                  style={{ height: 'auto', maxHeight: '50px' }}
                />
              ) : (
                <h1>{settings.siteName}</h1>
              )}
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
