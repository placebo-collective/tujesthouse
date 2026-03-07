import React from 'react';
import styles from './SharedForm.module.scss';

interface FormTextAreaProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  placeholder?: string;
  rows?: number;
  maxLength?: number;
  showCharCount?: boolean;
}

export default function FormTextArea({
  id,
  name,
  label,
  value,
  onChange,
  required = false,
  placeholder,
  rows = 4,
  maxLength,
  showCharCount = false,
}: FormTextAreaProps) {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={id}>
        {label} {required && '*'}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        maxLength={maxLength}
      />
      {showCharCount && maxLength && (
        <small>
          {value.length}/{maxLength} znaków
        </small>
      )}
    </div>
  );
}
