'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './WorkshopRegistrationForm.module.scss';
import Checkbox from './Checkbox';
import { CITIES, FORMSPREE_WORKSHOP_FORM, GDPR_EMAIL } from '../../lib/constants';

export default function WorkshopRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    role: [] as string[],
    experience: '',
    motivation: '',
    agreement: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [roleSearchTerm, setRoleSearchTerm] = useState('');
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);

  const roleOptions = [
    { value: 'dj', label: 'DJ' },
    { value: 'producent', label: 'Producent muzyczny' },
    { value: 'organizator', label: 'Organizator wydarzeń' },
    { value: 'technik', label: 'Realizator / Technik' },
    { value: 'promotor', label: 'Komunikacja / Promocja' },
    { value: 'kurator', label: 'Kurator / Manager' },
    { value: 'entuzjasta', label: 'Miłośnik kultury klubowej' },
    { value: 'student', label: 'Student / Osoba ucząca się' },
    { value: 'inne', label: 'Inne' },
  ];

  const filteredRoleOptions = roleOptions.filter((option) =>
    option.label.toLowerCase().includes(roleSearchTerm.toLowerCase())
  );

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

  const handleRoleChange = (roleValue: string) => {
    setFormData((prev) => ({
      ...prev,
      role: prev.role.includes(roleValue)
        ? prev.role.filter((r) => r !== roleValue)
        : [...prev.role, roleValue],
    }));
    setRoleSearchTerm('');
  };

  const removeRole = (roleValue: string) => {
    setFormData((prev) => ({
      ...prev,
      role: prev.role.filter((r) => r !== roleValue),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_WORKSHOP_FORM}`, {
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
          city: '',
          role: [],
          experience: '',
          motivation: '',
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
      <h3 className={styles.formTitle}>Rejestracja na warsztaty</h3>
      <p className={styles.formDesc}>
        Zapisz się na część dzienną wydarzenia - dwa warsztaty kompetencyjne, panel dyskusyjny i
        spotkanie sieciujące. Bezpłatny udział na podstawie rejestracji. Miejsca ograniczone!
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
        <select id="city" name="city" value={formData.city} onChange={handleChange} required>
          <option value="">Wybierz miasto</option>
          {CITIES.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>Kim jesteś w branży kulturalnej? (możesz wybrać kilka opcji) *</label>

        {/* Selected roles as tags */}
        {formData.role.length > 0 && (
          <div className={styles.selectedRoles}>
            {formData.role.map((roleValue) => {
              const roleOption = roleOptions.find((opt) => opt.value === roleValue);
              return (
                <span key={roleValue} className={styles.roleTag}>
                  {roleOption?.label}
                  <button
                    type="button"
                    onClick={() => removeRole(roleValue)}
                    className={styles.removeTag}
                    aria-label={`Usuń ${roleOption?.label}`}
                  >
                    ×
                  </button>
                </span>
              );
            })}
          </div>
        )}

        {/* Search input */}
        <div className={styles.multiSelectWrapper}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Wyszukaj i wybierz role..."
            value={roleSearchTerm}
            onChange={(e) => setRoleSearchTerm(e.target.value)}
            onFocus={() => setIsRoleDropdownOpen(true)}
            onBlur={() => setTimeout(() => setIsRoleDropdownOpen(false), 200)}
          />

          {/* Dropdown with options */}
          {isRoleDropdownOpen && filteredRoleOptions.length > 0 && (
            <div className={styles.optionsDropdown}>
              {filteredRoleOptions.map((option) => (
                <div
                  key={option.value}
                  className={`${styles.dropdownOption} ${
                    formData.role.includes(option.value) ? styles.selected : ''
                  }`}
                  onClick={() => handleRoleChange(option.value)}
                >
                  <span className={styles.optionLabel}>{option.label}</span>
                  {formData.role.includes(option.value) && (
                    <span className={styles.checkmark}>✓</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {formData.role.length === 0 && (
          <small style={{ color: '#999' }}>Wybierz przynajmniej jedną opcję</small>
        )}
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
        <Checkbox name="agreement" checked={formData.agreement} onChange={handleChange} required>
          Wyrażam zgodę na przetwarzanie moich danych osobowych w celu realizacji rejestracji na
          wydarzenie oraz na kontakt w sprawach organizacyjnych zgodnie z{' '}
          <Link href="/polityka-prywatnosci" target="_blank">
            polityką prywatności
          </Link>
          . Rozumiem, że wstęp na wydarzenie jest bezpłatny, a miejsca są ograniczone. *
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
        disabled={isSubmitting || formData.role.length === 0}
      >
        {isSubmitting ? 'Wysyłanie...' : 'Zapisz się na warsztaty'}
      </button>
    </form>
  );
}
