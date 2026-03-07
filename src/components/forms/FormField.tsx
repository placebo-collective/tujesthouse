import React from 'react';
import styles from './SharedForm.module.scss';

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'url';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  hint?: string;
}

export default function FormField({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  required = false,
  placeholder,
  hint,
}: FormFieldProps) {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={id}>
        {label} {required && '*'}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
      {hint && <small>{hint}</small>}
    </div>
  );
}
