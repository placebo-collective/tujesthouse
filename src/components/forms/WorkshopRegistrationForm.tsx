'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './WorkshopRegistrationForm.module.scss';
import Checkbox from './Checkbox';
import { CITIES, FORMSPREE_WORKSHOP_FORM, GDPR_EMAIL } from '../../lib/constants';
import type { WorkshopFormContent } from '@/lib/content-types';
import { useFormSubmit } from '@/hooks/useFormSubmit';

interface WorkshopRegistrationFormProps {
  content: WorkshopFormContent;
}

type WorkshopFormData = {
  name: string;
  email: string;
  phone: string;
  city: string;
  role: string[];
  experience: string;
  motivation: string;
  agreement: boolean;
};

const initialFormData: WorkshopFormData = {
  name: '',
  email: '',
  phone: '',
  city: '',
  role: [],
  experience: '',
  motivation: '',
  agreement: false,
};

export default function WorkshopRegistrationForm({ content }: WorkshopRegistrationFormProps) {
  const [formData, setFormData] = useState<WorkshopFormData>(initialFormData);
  const [roleSearchTerm, setRoleSearchTerm] = useState('');
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);

  const { submitStatus, isSubmitting, submitForm } = useFormSubmit<WorkshopFormData>({
    formspreeId: FORMSPREE_WORKSHOP_FORM,
    onSuccess: () => setFormData(initialFormData),
  });

  const filteredRoleOptions = (content.fields.role.options || []).filter((option) =>
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
    await submitForm(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.formTitle}>{content.title}</h3>
      <p className={styles.formDesc}>{content.description}</p>

      <div className={styles.formGroup}>
        <label htmlFor="name">
          {content.fields.name.label} {content.fields.name.required && '*'}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required={content.fields.name.required}
        />
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="email">
            {content.fields.email.label} {content.fields.email.required && '*'}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required={content.fields.email.required}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">
            {content.fields.phone.label} {content.fields.phone.required && '*'}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required={content.fields.phone.required}
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="city">
          {content.fields.city.label} {content.fields.city.required && '*'}
        </label>
        <select
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required={content.fields.city.required}
        >
          <option value="">{content.fields.city.placeholder}</option>
          {CITIES.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>
          {content.fields.role.label} {content.fields.role.required && '*'}
        </label>

        {formData.role.length > 0 && (
          <div className={styles.selectedRoles}>
            {formData.role.map((roleValue) => {
              const roleOption = (content.fields.role.options || []).find(
                (opt) => opt.value === roleValue
              );
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

        <div className={styles.multiSelectWrapper}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder={content.fields.role.placeholder}
            value={roleSearchTerm}
            onChange={(e) => setRoleSearchTerm(e.target.value)}
            onFocus={() => setIsRoleDropdownOpen(true)}
            onBlur={() => setTimeout(() => setIsRoleDropdownOpen(false), 200)}
          />

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
          <small style={{ color: '#999' }}>{content.fields.role.hint}</small>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="experience">
          {content.fields.experience.label} {content.fields.experience.required && '*'}
        </label>
        <textarea
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          rows={content.fields.experience.rows}
          placeholder={content.fields.experience.placeholder}
          required={content.fields.experience.required}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="motivation">
          {content.fields.motivation.label} {content.fields.motivation.required && '*'}
        </label>
        <textarea
          id="motivation"
          name="motivation"
          value={formData.motivation}
          onChange={handleChange}
          rows={content.fields.motivation.rows}
          placeholder={content.fields.motivation.placeholder}
          required={content.fields.motivation.required}
        />
      </div>

      <div className={styles.formGroup}>
        <Checkbox name="agreement" checked={formData.agreement} onChange={handleChange} required>
          {content.agreement.text}{' '}
          <Link href="/polityka-prywatnosci" target="_blank">
            {content.agreement.privacyLink}
          </Link>
          {content.agreement.additionalText} *
        </Checkbox>
      </div>

      <div className={styles.gdprInfo}>
        <p>
          <strong>{content.gdprInfo.title}</strong> {content.gdprInfo.text}{' '}
          <a href={`mailto:${GDPR_EMAIL}`}>{GDPR_EMAIL}</a>
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className={styles.success}>{content.messages.success}</div>
      )}

      {submitStatus === 'error' && <div className={styles.error}>{content.messages.error}</div>}

      <button
        type="submit"
        className={styles.submitBtn}
        disabled={isSubmitting || formData.role.length === 0}
      >
        {isSubmitting ? content.messages.submitting : content.messages.submit}
      </button>
    </form>
  );
}
