'use client';

import { useState } from 'react';
import styles from './FormsSection.module.scss';
import DJApplicationForm from '../forms/DJApplicationForm';
import WorkshopRegistrationForm from '../forms/WorkshopRegistrationForm';

export default function FormsSection() {
  const [activeTab, setActiveTab] = useState<'dj' | 'workshop'>('dj');

  return (
    <section id="formularze" className={styles.forms}>
      <div className="container">
        <h2 className={styles.title}>Dołącz do nas!</h2>
        <p className={styles.subtitle}>
          Wybierz odpowiedni formularz i weź udział w projekcie
        </p>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'dj' ? styles.active : ''}`}
            onClick={() => setActiveTab('dj')}
          >
            <span className={styles.tabIcon}>🎧</span>
            <span className={styles.tabText}>
              <strong>Dla DJ-ów</strong>
              <small>Zgłoś się do open call</small>
            </span>
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'workshop' ? styles.active : ''}`}
            onClick={() => setActiveTab('workshop')}
          >
            <span className={styles.tabIcon}>📚</span>
            <span className={styles.tabText}>
              <strong>Dla uczestników</strong>
              <small>Zapisz się na warsztaty</small>
            </span>
          </button>
        </div>

        <div className={styles.formContainer}>
          {activeTab === 'dj' && <DJApplicationForm />}
          {activeTab === 'workshop' && <WorkshopRegistrationForm />}
        </div>

        <div className={styles.contact}>
          <h3>Masz pytania?</h3>
          <p>
            Skontaktuj się z nami: <a href="mailto:kontakt@tujesthouse.pl">kontakt@tujesthouse.pl</a>
          </p>
        </div>
      </div>
    </section>
  );
}
