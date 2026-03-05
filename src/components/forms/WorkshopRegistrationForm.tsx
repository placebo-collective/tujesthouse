'use client';

import { useState } from 'react';
import styles from './WorkshopRegistrationForm.module.scss';
import { CITIES } from '../../lib/constants';

export default function WorkshopRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    role: '',
    experience: '',
    motivation: '',
    agreement: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        role: '',
        experience: '',
        motivation: '',
        agreement: false,
      });
    }, 1500);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.formTitle}>Rejestracja na warsztaty</h3>
      <p className={styles.formDesc}>
        Zapisz się na część dzienną wydarzenia - warsztaty kompetencyjne, panel dyskusyjny 
        i spotkanie sieciujące. Miejsca ograniczone!
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

      <div className={styles.formGroup}>
        <label htmlFor="city">Miasto wydarzenia *</label>
        <select
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        >
          <option value="">Wybierz miasto</option>
          {CITIES.map(city => (
            <option key={city.name} value={city.name}>
              {city.name} - {city.month}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="role">Kim jesteś w branży kulturalnej? *</label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="">Wybierz</option>
          <option value="dj">DJ / Producent muzyczny</option>
          <option value="organizer">Organizator wydarzeń</option>
          <option value="technician">Realizator / Technik</option>
          <option value="promoter">Komunikacja / Promocja</option>
          <option value="curator">Kurator / Manager</option>
          <option value="enthusiast">Miłośnik kultury klubowej</option>
          <option value="student">Student / Osoba ucząca się</option>
          <option value="other">Inne</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="experience">Doświadczenie w branży *</label>
        <textarea
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          rows={4}
          placeholder="Opisz swoje doświadczenie w branży kulturalnej / muzycznej..."
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="motivation">Co chcesz zyskać dzięki udziałowi w warsztatach? *</label>
        <textarea
          id="motivation"
          name="motivation"
          value={formData.motivation}
          onChange={handleChange}
          rows={4}
          placeholder="Opisz swoją motywację i oczekiwania..."
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            name="agreement"
            checked={formData.agreement}
            onChange={handleChange}
            required
          />
          <span>
            Wyrażam zgodę na przetwarzanie moich danych osobowych w celu realizacji rejestracji 
            na wydarzenie oraz na kontakt w sprawach organizacyjnych. Rozumiem, że wstęp 
            na wydarzenie jest bezpłatny, a miejsca są ograniczone. *
          </span>
        </label>
      </div>

      {submitStatus === 'success' && (
        <div className={styles.success}>
          ✓ Dziękujemy za rejestrację! Potwierdzenie otrzymasz na podany adres email.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className={styles.error}>
          ✗ Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.
        </div>
      )}

      <button
        type="submit"
        className={styles.submitBtn}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Wysyłanie...' : 'Zapisz się na warsztaty'}
      </button>

      <div className={styles.info}>
        <p>
          <strong>Uwaga:</strong> Po wysłaniu formularza otrzymasz email z potwierdzeniem rejestracji 
          oraz szczegółowymi informacjami organizacyjnymi. W przypadku przekroczenia limitu miejsc 
          zostaniesz umieszczony/a na liście rezerwowej.
        </p>
      </div>
    </form>
  );
}
