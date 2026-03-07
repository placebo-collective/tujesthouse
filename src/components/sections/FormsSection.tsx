'use client';

import { useState } from 'react';
import styles from './FormsSection.module.scss';
import ArtistApplicationForm from '../forms/ArtistApplicationForm';
import WorkshopRegistrationForm from '../forms/WorkshopRegistrationForm';
import { CONTACT_EMAIL } from '../../lib/constants';
import type { FormTab, ArtistFormContent, WorkshopFormContent, City } from '@/lib/content-types';

interface FormsSectionProps {
  title: string;
  subtitle: string;
  tabs: FormTab[];
  contact: {
    title: string;
    text: string;
  };
  artistFormContent: ArtistFormContent;
  workshopFormContent: WorkshopFormContent;
  cities: City[];
}

export default function FormsSection({
  title,
  subtitle,
  tabs,
  contact,
  artistFormContent,
  workshopFormContent,
  cities,
}: FormsSectionProps) {
  const [activeTab, setActiveTab] = useState<'artist' | 'workshop'>('artist');

  return (
    <section id="formularze" className={styles.forms}>
      <div className="container">
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>

        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
              onClick={() => setActiveTab(tab.id as 'artist' | 'workshop')}
            >
              <span className={styles.tabIcon}>{tab.icon}</span>
              <span className={styles.tabText}>
                <strong>{tab.title}</strong>
                <small>{tab.subtitle}</small>
              </span>
            </button>
          ))}
        </div>

        <div className={styles.formContainer}>
          {activeTab === 'artist' && (
            <ArtistApplicationForm content={artistFormContent} cities={cities} />
          )}
          {activeTab === 'workshop' && (
            <WorkshopRegistrationForm content={workshopFormContent} cities={cities} />
          )}
        </div>

        <div className={styles.contact}>
          <h3>{contact.title}</h3>
          <p>
            {contact.text} <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
