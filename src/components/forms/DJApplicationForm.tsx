'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './DJApplicationForm.module.scss';
import Checkbox from './Checkbox';
import { FORMSPREE_DJ_FORM, GDPR_EMAIL } from '../../lib/constants';
import type { DJFormContent, City } from '@/lib/content-types';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { marked } from 'marked';

interface DJApplicationFormProps {
  content: DJFormContent;
  cities: City[];
}

type DJFormData = {
  name: string;
  email: string;
  phone: string;
  artistName: string;
  city: string;
  city2: string;
  soundcloudLink: string;
  description: string;
  experience: string;
  agreement: boolean;
};

const initialFormData: DJFormData = {
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
};

export default function DJApplicationForm({ content, cities }: DJApplicationFormProps) {
  const [formData, setFormData] = useState<DJFormData>(initialFormData);
  const [descriptionHtml, setDescriptionHtml] = useState('');

  useEffect(() => {
    marked.parse(content.description || '', { async: true }).then(setDescriptionHtml);
  }, [content.description]);

  const { submitStatus, isSubmitting, submitForm } = useFormSubmit<DJFormData>({
    formspreeId: FORMSPREE_DJ_FORM,
    onSuccess: () => setFormData(initialFormData),
  });

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
    await submitForm(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.formTitle}>{content.title}</h3>
      <p className={styles.formDesc} dangerouslySetInnerHTML={{ __html: descriptionHtml }} />

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

      <div className={styles.formGroup}>
        <label htmlFor="artistName">
          {content.fields.artistName.label} {content.fields.artistName.required && '*'}
        </label>
        <input
          type="text"
          id="artistName"
          name="artistName"
          value={formData.artistName}
          onChange={handleChange}
          required={content.fields.artistName.required}
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

      <div className={styles.formRow}>
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
            {cities.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name} - {city.month}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="city2">
            {content.fields.city2.label} {content.fields.city2.required && '*'}
          </label>
          <select id="city2" name="city2" value={formData.city2} onChange={handleChange}>
            <option value="">{content.fields.city2.placeholder}</option>
            {cities.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name} - {city.month}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="soundcloudLink">
          {content.fields.soundcloudLink.label} {content.fields.soundcloudLink.required && '*'}
        </label>
        <input
          type="url"
          id="soundcloudLink"
          name="soundcloudLink"
          value={formData.soundcloudLink}
          onChange={handleChange}
          placeholder={content.fields.soundcloudLink.placeholder}
          required={content.fields.soundcloudLink.required}
        />
        <small>{content.fields.soundcloudLink.hint}</small>
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
        <label htmlFor="description">
          {content.fields.description.label} {content.fields.description.required && '*'}
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={content.fields.description.rows}
          maxLength={content.fields.description.maxLength}
          placeholder={content.fields.description.placeholder}
          required={content.fields.description.required}
        />
        <small>
          {formData.description.length}/{content.fields.description.maxLength} znaków
        </small>
      </div>

      <div className={styles.formGroup}>
        <Checkbox name="agreement" checked={formData.agreement} onChange={handleChange} required>
          {content.agreement.text}{' '}
          <Link href="/regulamin" target="_blank">
            {content.agreement.regulaminLink}
          </Link>
          {content.agreement.consentText}{' '}
          <Link href="/polityka-prywatnosci" target="_blank">
            {content.agreement.privacyLink}
          </Link>
          . *
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

      <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
        {isSubmitting ? content.messages.submitting : content.messages.submit}
      </button>
    </form>
  );
}
