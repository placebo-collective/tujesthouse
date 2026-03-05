'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './DJApplicationForm.module.scss';
import Checkbox from './Checkbox';
import { CITIES, FORMSPREE_DJ_FORM, GDPR_EMAIL } from '../../lib/constants';

export default function DJApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    artistName: '',
    city: '',
    city2: '',
    soundcloudLink: '',
    description: '',
    experience: '',
    agreement: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_DJ_FORM}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          artistName: '',
          city: '',
          city2: '',
          soundcloudLink: '',
          description: '',
          experience: '',
          agreement: false,
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.formTitle}>Zgłoszenie artysty</h3>
      <p className={styles.formDesc}>
        Wypełnij formularz, aby wziąć udział w otwartym naborze wykonawców. Wybierzemy 4–6
        artystów w każdym mieście do prezentacji artystycznej. Nabory są transparentne i oparte o
        jasne kryteria.
      </p>

      <div className={styles.formGroup}>
        <label htmlFor="name">Imię i nazwisko *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="artistName">Pseudonim artystyczny *</label>
        <input
          type="text"
          id="artistName"
          name="artistName"
          value={formData.artistName}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Telefon *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="city">Preferowane miasto (1. wybór) *</label>
          <select id="city" name="city" value={formData.city} onChange={handleChange} required>
            <option value="">Wybierz miasto</option>
            {CITIES.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name} - {city.month}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="city2">Preferowane miasto (2. wybór)</label>
          <select id="city2" name="city2" value={formData.city2} onChange={handleChange}>
            <option value="">Wybierz miasto (opcjonalnie)</option>
            {CITIES.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name} - {city.month}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="soundcloudLink">Link do nagrania zgłoszeniowego (30-60 min) *</label>
        <input
          type="url"
          id="soundcloudLink"
          name="soundcloudLink"
          value={formData.soundcloudLink}
          onChange={handleChange}
          placeholder="https://soundcloud.com/..."
          required
        />
        <small>SoundCloud, YouTube lub Google Drive (dostęp bezpłatny)</small>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="experience">Dotychczasowe doświadczenie *</label>
        <textarea
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          rows={4}
          placeholder="Opisz swoje dotychczasowe doświadczenie jako artysta..."
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="description">Opis Twojego stylu muzycznego (max 800 znaków) *</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={5}
          maxLength={800}
          placeholder="Opisz swój styl muzyczny, inspiracje, kierunek..."
          required
        />
        <small>{formData.description.length}/800 znaków</small>
      </div>

      <div className={styles.formGroup}>
        <Checkbox name="agreement" checked={formData.agreement} onChange={handleChange} required>
          Oświadczam, że posiadam prawa do wykorzystanych materiałów w nagraniu zgłoszeniowym oraz
          akceptuję{' '}
          <Link href="/regulamin" target="_blank">
            regulamin
          </Link>
          . Wyrażam zgodę na przetwarzanie moich danych osobowych w celu realizacji naboru zgodnie z{' '}
          <Link href="/polityka-prywatnosci" target="_blank">
            polityką prywatności
          </Link>
          . *
        </Checkbox>
      </div>

      <div className={styles.gdprInfo}>
        <p>
          <strong>Informacja RODO:</strong> Administratorem Twoich danych osobowych jest Tomasz
          Bursztyński Software Development. Masz prawo dostępu do swoich danych, ich sprostowania,
          usunięcia, ograniczenia przetwarzania, przenoszenia oraz wniesienia sprzeciwu. Możesz
          również wycofać zgodę w dowolnym momencie. W celu realizacji swoich praw lub zgłoszenia
          usunięcia danych skontaktuj się z nami: <a href={`mailto:${GDPR_EMAIL}`}>{GDPR_EMAIL}</a>
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className={styles.success}>
          ✓ Dziękujemy za zgłoszenie! Skontaktujemy się z Tobą w najbliższym czasie.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className={styles.error}>
          ✗ Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.
        </div>
      )}

      <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
        {isSubmitting ? 'Wysyłanie...' : 'Wyślij zgłoszenie'}
      </button>
    </form>
  );
}
