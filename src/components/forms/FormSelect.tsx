import React from 'react';
import styles from './SharedForm.module.scss';

interface FormSelectProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<{ label: string; value: string }>;
  required?: boolean;
  placeholder?: string;
}

export default function FormSelect({
  id,
  name,
  label,
  value,
  onChange,
  options,
  required = false,
  placeholder,
}: FormSelectProps) {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={id}>
        {label} {required && '*'}
      </label>
      <select id={id} name={name} value={value} onChange={onChange} required={required}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
