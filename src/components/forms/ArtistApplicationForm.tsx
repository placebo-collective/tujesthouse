'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './ArtistApplicationForm.module.scss';
import Checkbox from './Checkbox';
import FormField from './FormField';
import FormTextArea from './FormTextArea';
import FormSelect from './FormSelect';
import FormRow from './FormRow';
import { GDPR_EMAIL } from '../../lib/constants';
import type { ArtistFormContent, City } from '@/lib/content-types';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { parseMarkdown } from '@/lib/utils/markdown';

interface ArtistApplicationFormProps {
  content: ArtistFormContent;
  cities: City[];
}

type ArtistFormData = {
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

const initialFormData: ArtistFormData = {
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

export default function ArtistApplicationForm({ content, cities }: ArtistApplicationFormProps) {
  const [formData, setFormData] = useState<ArtistFormData>(initialFormData);
  const [descriptionHtml, setDescriptionHtml] = useState('');

  useEffect(() => {
    parseMarkdown(content.description).then(setDescriptionHtml);
  }, [content.description]);

  const { submitStatus, isSubmitting, submitForm } = useFormSubmit<ArtistFormData>({
    formType: 'artist',
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

      <FormField
        id="name"
        name="name"
        label={content.fields.name.label}
        value={formData.name}
        onChange={handleChange}
        required={content.fields.name.required}
      />

      <FormField
        id="artistName"
        name="artistName"
        label={content.fields.artistName.label}
        value={formData.artistName}
        onChange={handleChange}
        required={content.fields.artistName.required}
      />

      <FormRow>
        <FormField
          id="email"
          name="email"
          label={content.fields.email.label}
          type="email"
          value={formData.email}
          onChange={handleChange}
          required={content.fields.email.required}
        />

        <FormField
          id="phone"
          name="phone"
          label={content.fields.phone.label}
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required={content.fields.phone.required}
        />
      </FormRow>

      <FormRow>
        <FormSelect
          id="city"
          name="city"
          label={content.fields.city.label}
          value={formData.city}
          onChange={handleChange}
          options={cities.map((city) => ({
            label: `${city.name} - ${city.month}`,
            value: city.name,
          }))}
          required={content.fields.city.required}
          placeholder={content.fields.city.placeholder}
        />

        <FormSelect
          id="city2"
          name="city2"
          label={content.fields.city2.label}
          value={formData.city2}
          onChange={handleChange}
          options={cities.map((city) => ({
            label: `${city.name} - ${city.month}`,
            value: city.name,
          }))}
          placeholder={content.fields.city2.placeholder}
        />
      </FormRow>

      <FormField
        id="soundcloudLink"
        name="soundcloudLink"
        label={content.fields.soundcloudLink.label}
        type="url"
        value={formData.soundcloudLink}
        onChange={handleChange}
        placeholder={content.fields.soundcloudLink.placeholder}
        required={content.fields.soundcloudLink.required}
        hint={content.fields.soundcloudLink.hint}
      />

      <FormTextArea
        id="experience"
        name="experience"
        label={content.fields.experience.label}
        value={formData.experience}
        onChange={handleChange}
        rows={content.fields.experience.rows}
        placeholder={content.fields.experience.placeholder}
        required={content.fields.experience.required}
      />

      <FormTextArea
        id="description"
        name="description"
        label={content.fields.description.label}
        value={formData.description}
        onChange={handleChange}
        rows={content.fields.description.rows}
        maxLength={content.fields.description.maxLength}
        placeholder={content.fields.description.placeholder}
        required={content.fields.description.required}
        showCharCount
      />

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
