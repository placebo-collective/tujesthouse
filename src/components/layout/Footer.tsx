import Link from 'next/link';
import styles from './Footer.module.scss';
import { SITE_NAME, CONTACT_EMAIL, GDPR_EMAIL } from '../../lib/constants';
import { getFooterContent } from '@/lib/tina';
import type { FooterLink } from '@/lib/content-types';
import { marked } from 'marked';

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const content = await getFooterContent();

  if (!content) return null;

  const descriptionHtml = await marked.parse(content.description || '', { async: true });
  const fundingNoteHtml = await marked.parse(content.fundingNote || '', { async: true });

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>{SITE_NAME}</h3>
            <p
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            />
          </div>
          <div className={styles.section}>
            <h4>{content.organizers.title}</h4>
            <p>
              <strong>{content.organizers.main.name}</strong>
            </p>
            <p>{content.organizers.main.address}</p>
            <p>NIP: {content.organizers.main.nip}</p>
            <br />
            <p>
              {content.organizers.partner.label} <strong>{content.organizers.partner.name}</strong>
            </p>
            <p>{content.organizers.partner.address}</p>
            <p>NIP: {content.organizers.partner.nip}</p>
          </div>
          <div className={styles.section}>
            <h4>{content.contact.title}</h4>
            <p>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
            <p className={styles.gdprContact}>
              {content.contact.gdprLabel}
              <br />
              <a href={`mailto:${GDPR_EMAIL}`}>{GDPR_EMAIL}</a>
            </p>
          </div>
          <div className={styles.section}>
            <h4>{content.documents.title}</h4>
            <ul className={styles.links}>
              {content.documents.links.map((link: FooterLink, index: number) => (
                <li key={index}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>
            &copy; {currentYear} {SITE_NAME}. {content.copyright}
          </p>
          <p dangerouslySetInnerHTML={{ __html: fundingNoteHtml }} />
        </div>
      </div>
    </footer>
  );
}
